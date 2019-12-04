import styled, {css} from "styled-components"
import {Canon, MediumText, Trafalgar} from "../../components/Typography"
import React from "react"
import {Box, TextLink} from "../../components"
import {Theme} from "../../utils"
import media from "../../utils/media"
const cssTextMinusMargin = css`
  margin-top: -${Theme.space.small}px;
  ${media.greaterThan('mobile')`
    
  `}
  
  ${media.greaterThan('tablet')`
    margin-top: -${Theme.space.medium}px;
  `}
  
  ${media.greaterThan('desktop')`
    margin-top: -${Theme.space.regular}px;
  `}
`

export const Text = styled(MediumText).attrs({
  mb: ['regular', 'regular', 'xregular', 'large'],
})`
  line-height: 1.4;
`;

export const Header = styled(Canon).attrs({
  mb: ['small', 'small', 'medium', 'regular'],
})`
  line-height: 1.4;
`;

export const SubHeader = styled(Trafalgar).attrs({
  mb: ['small', 'small', 'medium', 'regular'],
})`
  line-height: 1.4;
`;

export const BlogTextLink = ({ children, ...props }: any) => (
  <TextLink underline modifiers={['darkGray']} {...props}>
    {children}
  </TextLink>
)
export const List = styled(Box).attrs({
  as: "ul",
  mb: ['regular', 'regular', 'large', 'xlarge'],
})`
  ${cssTextMinusMargin};
  display: block;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 18px;
`;
export const ListOl = styled(Box).attrs({
  as: "ol",
  mb: ['regular', 'regular', 'large', 'xlarge'],
})`
  ${cssTextMinusMargin};
  display: block;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 18px;
`;
