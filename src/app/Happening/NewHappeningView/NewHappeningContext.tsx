import * as React from 'react';
import { createContext, Reducer, useCallback, useEffect, useReducer, useState } from 'react';
import { INIT_NEW_HAPPENING, NewHappening } from '../model';
import ConfirmModal from './ConfirmModal';
import Router from 'next/router';
import { createNewPublishedHappening } from './create-new-published-happening';

interface NewHappeningForm {
  happening: NewHappening;
  step: number;
  isLoading: boolean;
  error: string | null
}

type NewHappeningReducer = Reducer<NewHappeningForm, any>;

export const NewHappeningContext = createContext<any>(null);

const STORAGE_ITEM_NAME = 'happening';

const reducer: NewHappeningReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_STATE':
      return { ...state, happening: action.payload };
    case 'EDIT_HAPPENING':
      return { ...state, happening: action.payload };
    case 'BACK_TO_EDIT':
      return { ...state, step: 0 };
    case 'GO_TO_PREVIEW':
      return { ...state, step: 1 };
    case 'PUBLISH_HAPPENING':
      return { ...state, isLoading: true, error: null };
    case 'PUBLISH_HAPPENING_ERROR':
      return { ...state, isLoading: false, error: action.payload };
    case 'READ_PUBLISH_HAPPENING_ERROR':
      return { ...state, error: null };
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
  readPublishHappeningError: any;
} {
  const context = React.useContext(NewHappeningContext);

  if (!context) {
    throw new Error('useNewHappeningFlow must be used within a NewHappeningProvider');
  }

  const { state, dispatch, analytics } = context;

  const editNewHappening = useCallback(
    (happening: NewHappening) => {
      dispatch({ type: 'EDIT_HAPPENING', payload: happening });
      localStorage.setItem(STORAGE_ITEM_NAME, JSON.stringify(happening));
    },
    [dispatch],
  );

  const goToPreview = useCallback(() => dispatch({ type: 'GO_TO_PREVIEW' }), [dispatch]);

  const backToEdit = useCallback(() => dispatch({ type: 'BACK_TO_EDIT' }), [dispatch]);

  const readPublishHappeningError = useCallback( () => {
    dispatch({ type: 'READ_PUBLISH_HAPPENING_ERROR' });
  }, [dispatch])

  const publishHappening = useCallback(async () => {
    dispatch({ type: 'PUBLISH_HAPPENING' });
    try {
      const id = await createNewPublishedHappening(state.happening)

      Router.push({
        pathname: '/app/happening/share',
        query: { id },
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error.';
      analytics.event('Publish Happening Error', message);
      dispatch({ type: 'PUBLISH_HAPPENING_ERROR', payload: message } );
    }
  }, [dispatch]);

  return { state, editNewHappening, goToPreview, backToEdit, publishHappening, readPublishHappeningError };
}

export const NewHappeningFlowProvider = ({ children, name, analytics }: any) => {
  const [state, dispatch] = useReducer<NewHappeningReducer>(reducer, {
    step: 0,
    isLoading: false,
    happening: {
      ...INIT_NEW_HAPPENING,
      name,
    },
    error: null
  });

  const context = { state, dispatch, analytics };

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
