import styled from 'styled-components';
import { Flex } from '../../../components';
import media from '../../../utils/media';
import { Theme } from '../../../utils';

function getGridStyles(space: number) {
  return `
      width: calc(33% - ${(space / 3) * 2}px);
      margin-bottom: ${space / 2}px;

      &:nth-child(3n + 1) {
        margin-right: ${(space / 3) * 2}px;
        margin-left: 0;
      }

      &:nth-child(3n - 1) {
        margin-left: ${space / 3}px;
        margin-right: ${space / 3}px;
      }

      &:nth-child(3n) {
        margin-left: ${(space / 3) * 2}px;
        margin-right: 0;
      }
  `;
}

export const ElementListContainer = styled(Flex)`
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: self-start;
    
  & > div {
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
      ${getGridStyles(Theme.space.medium)}
    `}
    
    ${media.greaterThan('desktop')`
      
    `}
  }
`;
