import styled from 'styled-components';
import { Flex, InputApp } from '../../../components';
import { Theme } from '../../../utils';

export const Container = styled(Flex)`
  position: relative;
  border-radius: 8px;
  padding: 9px 10px 8px 10px;
  background-color: ${Theme.colors.mainContrast};
  color: ${Theme.colors.main};
  overflow: hidden;
`;

export const Text = styled(InputApp)`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
