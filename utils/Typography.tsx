import React from 'react';
import DynamicComponent from './DynamicComponent';
import * as Theme from './Theme';

const { logoHeading, bodyText, smallText } = Theme.textStyles;

export const LogoHeading = (props: any) => (
  <DynamicComponent {...logoHeading} {...props}>
    {props.children}
  </DynamicComponent>
);

export const BodyText = (props: any) => (
  <DynamicComponent {...bodyText} {...props}>
    {props.children}
  </DynamicComponent>
);
export const SmallText = (props: any) => (
  <DynamicComponent {...smallText} {...props}>
    {props.children}
  </DynamicComponent>
);
