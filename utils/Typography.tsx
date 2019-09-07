import React from 'react';
import DynamicComponent from './DynamicComponent';
import * as theme from './Theme';

const { logoHeading } = theme.textStyles;

export const LogoHeading = (props: any) => (
  <DynamicComponent {...logoHeading} {...props}>
    {props.children}
  </DynamicComponent>
);
