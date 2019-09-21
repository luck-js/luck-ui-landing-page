import React from 'react';
import DynamicComponent from './DynamicComponent';
import { Theme } from '../../utils/theme';

const { logoHeading, canon, trafalgar, bodyText, smallText } = Theme.textStyles;

export const LogoHeading = (props: any) => (
  <DynamicComponent {...logoHeading} {...props}>
    {props.children}
  </DynamicComponent>
);

export const Canon = (props: any) => (
  <DynamicComponent {...canon} {...props}>
    {props.children}
  </DynamicComponent>
);
export const Trafalgar = (props: any) => (
  <DynamicComponent {...trafalgar} {...props}>
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
