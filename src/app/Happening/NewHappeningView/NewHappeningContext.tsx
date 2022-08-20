import * as React from 'react';
import { createContext, Reducer, useCallback, useEffect, useReducer, useState } from 'react';
import { INIT_NEW_HAPPENING, NewHappening } from '../model';
import ConfirmModal from './ConfirmModal';
import { apiAxios } from '../../api.axios';
import Router from 'next/router';

interface NewHappeningForm {
  happening: NewHappening;
  step: number;
  isLoading: boolean;
}

type NewHappeningReducer = Reducer<NewHappeningForm, any>;

export const NewHappeningContext = createContext<any>(null);

const STORAGE_ITEM_NAME = 'happening';

const reducer: NewHappeningReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_STATE':
      return { ...state, happening: action.payload };
    case 'EDIT_HAPPENING ':
      return { ...state, happening: action.payload };
    case 'BACK_TO_EDIT ':
      return { ...state, step: 0 };
    case 'GO_TO_PREVIEW ':
      return { ...state, step: 1 };
    case 'PUBLISH_HAPPENING ':
      return { ...state, isLoading: true };
    default:
      throw new Error();
  }
};

export function useNewHappeningFlow(): {
  state: NewHappeningForm;
  editNewHappening: any;
  goToPreview: any;
  backToEdit: any;
  publishHappening: any;
} {
  const context = React.useContext(NewHappeningContext);

  if (!context) {
    throw new Error('useNewHappeningFlow must be used within a NewHappeningProvider');
  }

  const { state, dispatch } = context;

  const editNewHappening = useCallback(
    (happening) => {
      dispatch({ type: 'EDIT_HAPPENING ', payload: happening });
      localStorage.setItem(STORAGE_ITEM_NAME, JSON.stringify(happening));
    },
    [dispatch],
  );

  const goToPreview = useCallback(() => dispatch({ type: 'GO_TO_PREVIEW ' }), [dispatch]);

  const backToEdit = useCallback(() => dispatch({ type: 'BACK_TO_EDIT ' }), [dispatch]);

  const publishHappening = useCallback(async () => {
    dispatch({ type: 'PUBLISH_HAPPENING ' });
    const { data } = await apiAxios.post('/api/v1/published-happening', {
      happening: state.happening,
    });
    Router.push({
      pathname: '/app/happening/share',
      query: { id: data.id },
    });
  }, [dispatch]);

  return { state, editNewHappening, goToPreview, backToEdit, publishHappening };
}

export const NewHappeningFlowProvider = ({ children, name, analytics }: any) => {
  const [state, dispatch] = useReducer<NewHappeningReducer>(reducer, {
    step: 0,
    isLoading: false,
    happening: {
      ...INIT_NEW_HAPPENING,
      name,
    },
  });

  const context = { state, dispatch };

  const [storageHappening, setStorageHappening] = useState(null);
  const [shouldBeOpen, setShouldBeOpen] = useState(false);

  useEffect(() => {
    const item = localStorage.getItem(STORAGE_ITEM_NAME);
    const happening = item ? JSON.parse(item) : {};

    if (
      happening.hasOwnProperty('name') &&
      happening.hasOwnProperty('description') &&
      happening.hasOwnProperty('participants')
    ) {
      setStorageHappening(happening);
      setShouldBeOpen(true);
    }
  }, []);

  const handleOnConfirm = (isConfirm: boolean) => {
    if (isConfirm) {
      dispatch({ type: 'LOAD_STATE', payload: storageHappening });
      setShouldBeOpen(false);
      analytics.event('Confirm Modal', String(true));
    } else {
      localStorage.removeItem(STORAGE_ITEM_NAME);
      setShouldBeOpen(false);
      analytics.event('Confirm Modal', String(false));
    }
  };

  return (
    <NewHappeningContext.Provider value={context}>
      <ConfirmModal shouldBeOpen={shouldBeOpen} onConfirm={handleOnConfirm} />
      {children[state.step]}
    </NewHappeningContext.Provider>
  );
};
