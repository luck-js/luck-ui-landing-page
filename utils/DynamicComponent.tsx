import React from 'react';
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
} from 'styled-system';

export const StyledDynamicComponent = styled('div')`
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

const DynamicComponent = ({ tag = 'div', children, ...props }: any) => {
  const WithComponent = StyledDynamicComponent.withComponent(tag);
  return <WithComponent {...props}>{children}</WithComponent>;
};

DynamicComponent.defaultProps = {
  tag: 'div',
};

export default DynamicComponent;
