import styled from 'styled-components';
import React from 'react';
import {Theme} from '../../../utils';
import media from '../../../utils/media';
import {Flex} from '../../Flex';
import {Element} from "../shared/Element"

interface ListContainerProps {
  list: string[];
  onClose?: (value: string) => void;
  mt?: any;
}

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
      margin-bottom: ${Theme.space.small}px;
  
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
