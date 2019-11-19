import styled from 'styled-components';
import { color, fontFamily, fontSize, fontWeight, space, width } from 'styled-system';

export const BaseInput = styled('input')`
  ${color};
  ${fontFamily};
  ${fontSize};
  ${fontWeight};
  ${space};
  ${width};
  background: none;
  border: none;
`;
