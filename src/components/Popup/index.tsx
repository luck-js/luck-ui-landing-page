import React, {createContext, Reducer, useCallback, useReducer} from 'react';
import styled from 'styled-components';
import { Box } from '../Box';
import { Flex } from '../Flex';
import {delay, Theme} from "../../utils"

interface PopupState {
  shouldShow: boolean;
  text: string;
}

export const Popup = ({shouldShow, text}: PopupState) => {
  return (
    <Popup.Container shouldShow={shouldShow}>
      <Popup.Content shouldShow={shouldShow}>{text}</Popup.Content>
    </Popup.Container>
  );
};

Popup.Content = styled(Box)`
  background-color: ${Theme.colors.black};
  color: ${Theme.colors.main};
  text-align: center;
  min-width: 140px;
  padding: 10px 15px;
  border-radius: 20px;
  transition: opacity 0.5s;
  
  opacity: ${props => props.shouldShow ? 0.7 : 0};
  
  
`;

Popup.Container = styled(Flex)`
  width: 100%;
  left: 0;
  text-align: center;
  position: fixed;
  z-index: 100;
  justify-content: center;
  transition: top 0.5s;
  
  top: ${props => props.shouldShow ? '25px' : '-40px'};
`;

const PopupContext = createContext<any>(null);

type PopupReducer = Reducer<PopupState, any>;

const initialState: PopupState = { shouldShow: false, text: ''};

const reducer: PopupReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_POPUP':
      return {...state, shouldShow: true, text: action.payload};
    case 'HIDDEN_POPUP':
      return {...state, shouldShow: false};
    default:
      throw new Error();
  }
};

export function usePopup() {
  const context = React.useContext(PopupContext);

  if (!context) {
    throw new Error('Popup must be used within a PopupProvider');
  }

  const { state, dispatch } = context;

  const showPopup = useCallback(async shouldShow => {
    dispatch({type: "SHOW_POPUP", payload: shouldShow})
    await delay(1000);
    dispatch({type: "HIDDEN_POPUP", payload: shouldShow})
  }, [dispatch]);

  return { state, showPopup };
}


export const PopupProvider = ({children}: any) => {
  const [state, dispatch] = useReducer<PopupReducer>(reducer, initialState);
  const context = { state, dispatch };
  return (
    <PopupContext.Provider value={context}>
      <Popup {...state}/>
      {children}
    </PopupContext.Provider>
  )
}
