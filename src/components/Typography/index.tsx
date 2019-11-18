import React from 'react';
import DynamicComponent from './DynamicComponent';
import { Theme } from '../../utils';

const {
  logoHeading,
  canon,
  canonApp,
  trafalgar,
  bodyText,
  inputApp,
  buttonApp,
  mediumText,
  smallText,
  tinySecond,
  tinyText,
} = Theme.textStyles;

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

export const CanonApp = (props: any) => (
  <DynamicComponent {...canonApp} {...props}>
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

export const InputApp = (props: any) => (
  <DynamicComponent {...inputApp} {...props}>
    {props.children}
  </DynamicComponent>
);
export const ButtonApp = (props: any) => (
  <DynamicComponent {...buttonApp} {...props}>
    {props.children}
  </DynamicComponent>
);

export const MediumText = (props: any) => (
  <DynamicComponent {...mediumText} {...props}>
    {props.children}
  </DynamicComponent>
);

export const SmallText = (props: any) => (
  <DynamicComponent {...smallText} {...props}>
    {props.children}
  </DynamicComponent>
);

export const TinySecond = (props: any) => (
  <DynamicComponent {...tinySecond} {...props}>
    {props.children}
  </DynamicComponent>
);

export const TinyText = (props: any) => (
  <DynamicComponent {...tinyText} {...props}>
    {props.children}
  </DynamicComponent>
);

export * from './BaseTypography';
