import * as React from 'react';
import { createContext, Reducer, useCallback, useEffect, useReducer } from 'react';
import {INIT_NEW_HAPPENING, NewHappening} from "../model"

type NewHappeningReducer = Reducer<NewHappening, any>;

export const NewHappeningContext = createContext<any>(null);

const initialState: NewHappening = { name: '', description: '', participants: [] };

const reducer: NewHappeningReducer = (state, action) => {
  console.log(state)
  switch (action.type) {
    case 'SET_HAPPENING':
      return action.payload;
    default:
      throw new Error();
  }
};

export function useNewHappeningFlow(): {state: NewHappening, setNewHappening: any} {
  const context = React.useContext(NewHappeningContext);

  if (!context) {
    throw new Error('useNewHappeningFlow must be used within a NewHappeningProvider');
  }

  const { state, dispatch } = context;

  const setNewHappening = useCallback(happening => {
    dispatch({type: "SET_HAPPENING", payload: happening})
    console.log("SET_HAPPENING -> happening.id", happening, happening.id)
    localStorage.setItem("happening", JSON.stringify(happening))
  }, [dispatch]);

  return { state, setNewHappening };
}

export const NewHappeningFlowProvider = ({ children, name }: any) => {
  const [state, dispatch] = useReducer<NewHappeningReducer>(reducer, initialState);

  const initStateByLocalStorage = () => {
    const item = localStorage.getItem("happening");
    const happening = item ? JSON.parse(item ) : {};
    if(happening.hasOwnProperty("name") && happening.hasOwnProperty("description") && happening.hasOwnProperty("participants")){
      dispatch({type: "SET_HAPPENING", payload: happening})
    } else {
      dispatch({type: "SET_HAPPENING", payload: { ...INIT_NEW_HAPPENING, name }})
    }
  }

  useEffect(() => {
    initStateByLocalStorage()
  }, []);

  const context = { state, dispatch };
  return <NewHappeningContext.Provider value={context}>{children}</NewHappeningContext.Provider>;
};
