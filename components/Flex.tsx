import styled from 'styled-components';
import {
  position,
  borders,
  borderColor,
  zIndex,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  maxWidth,
  maxHeight,
  overflow, display,
} from 'styled-system';
import { Box } from './Box';

export const Flex = styled(Box)(
  {
    display: 'flex',
  },
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  display,
  maxWidth,
  maxHeight,
  position,
  borders,
  borderColor,
  zIndex,
  overflow,
);

Flex.displayName = 'Flex';
