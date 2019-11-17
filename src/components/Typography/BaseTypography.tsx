import styled from 'styled-components';
import {
  borderRadius,
  color,
  colorStyle,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  letterSpacing,
  lineHeight,
  size,
  space,
  textStyle,
  width,
} from 'styled-system';

export const BaseTypography = styled('div')`
  ${width}
  ${space}
  ${fontSize}
  ${fontStyle}
  ${color}
  ${size}
  ${colorStyle}
  ${textStyle}
  ${lineHeight}
  ${letterSpacing}
  ${fontFamily}
  ${fontWeight}
  ${borderRadius}
`;
