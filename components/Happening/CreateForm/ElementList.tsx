import styled from 'styled-components';
import { Box } from '../../Box';
import React from 'react';
import { BaseButton } from '../../Button';
import { Theme } from '../../../utils';
// @ts-ignore
import Close from '../../../static/close.svg';
import media from '../../../utils/media';
import { Flex } from '../../Flex';
import {BodyText} from "../../Typography"

interface ListContainerProps {
  list: string[];
  onClose?: (value: string) => void;
  mt?: any;
}

const Element = ({ value, onClose }: any) => {
  return (
    <Element.Container>
      <Element.Text>{value}</Element.Text>
      <Element.Button onClick={onClose} onMouseDown={(e:any) => e.preventDefault()}>
        <Close />
      </Element.Button>
    </Element.Container>
  );
};

Element.Container = styled(Box)`
  position: relative;
  display: flex;
  flex: 0 0 calc(50% - 8px);
  border-radius: 8px;
  padding: 9px 40px 8px 10px;
  background-color: ${Theme.colors.mainContrast};
  color: ${Theme.colors.main};
  overflow: hidden;
`;

Element.Text = styled(BodyText)`
    text-align: left;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`
Element.Button = styled(BaseButton)`
  cursor: pointer;
  position: absolute;
  top: 50%;
  margin-top: -7.5px;
  right: 15px;
  width: 15px;
  text-align: center;
  height: 15px;
  display: block;

  svg {
    height: 100%;
    width: auto;
    fill: ${Theme.colors.main};
  }
`;

export const ElementList = ({ list, onClose = () => {}, ...props }: ListContainerProps) => {
  const handleOnClose = (value: string) => () => onClose(value);

  return (
    <ElementList.Container {...props}>
      {list.map((value, index) => (
        <Element key={`${value}-${index}`} value={value} onClose={handleOnClose(value)} />
      ))}
    </ElementList.Container>
  );
};

// function getGridStyles(space: number) {
//   return `
//       width: calc(33% - ${(space / 3) * 2}px);
//       margin-top: ${space / 2}px;
//       margin-bottom: ${space / 2}px;
//
//       &:nth-child(3n + 1) {
//         margin-right: ${(space / 3) * 2}px;
//       }
//
//       &:nth-child(3n - 1) {
//         margin-left: ${space / 3}px;
//         margin-right: ${space / 3}px;
//       }
//
//       &:nth-child(3n) {
//         margin-left: ${(space / 3) * 2}px;
//       }
//   `;
// }

function getGridStyles(space: number) {
  return `
      width: calc(50% - ${space / 2}px);
      margin-bottom: ${space / 2}px;
  
      &:nth-child(odd) {
        margin-right: ${space / 2}px;
      }
  
      &:nth-child(even) {
        margin-left: ${space / 2}px;
      }
  `;
}

ElementList.Container = styled(Flex)`
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: self-start;
    min-height: 40px;
    

  ${Element.Container} {
      width: calc(50% - ${Theme.space.xsmall}px);
      margin-bottom: ${Theme.space.xsmall}px;
  
      &:nth-child(odd) {
        margin-right: ${Theme.space.xsmall}px;
      }
  
      &:nth-child(even) {
        margin-left: ${Theme.space.xsmall}px;
      }
    
    ${media.greaterThan('mobile')`
      
    `}
    
    ${media.greaterThan('tablet')`
      ${getGridStyles(Theme.space.xlarge)}
    `}
    
    ${media.greaterThan('desktop')`
      ${getGridStyles(Theme.space.xlarge)}
    `}
  }
`;
