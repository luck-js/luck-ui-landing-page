import styled from 'styled-components';
import { Theme } from '../utils';

export const List = styled('ul')`
  display: block;
  margin-block-start: ${Theme.space.medium}px;
  margin-block-end: ${Theme.space.medium}px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 18px;
`;
