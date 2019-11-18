import React from 'react';
import styled from 'styled-components';
import { Box } from '../Box';
import { Flex } from '../Flex';
import {Theme} from "../../utils"

export const Popup = () => {
  return (
    <Popup.Container>
      <Popup.Content>text</Popup.Content>
    </Popup.Container>
  );
};

Popup.Container = styled(Flex)`
  width: 100%;
  top: -40px;
  left: 0;
  text-align: center;
  position: fixed;
  z-index: 100;
  justify-content: center;

  transition: top 0.5s;
`;

Popup.Content = styled(Box)`
  background-color: ${Theme.colors.black};
  color: ${Theme.colors.main};
  text-align: center;
  min-width: 140px;
  padding: 10px 15px;
  border-radius: 20px;
  opacity: 0;

  transition: opacity 0.5s;
`;
