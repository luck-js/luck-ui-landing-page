import React from 'react';
import styled from 'styled-components';
import { BaseButton } from '../../../../components';
import { Theme } from '../../../../utils';
import { Element } from '../../shared';
// @ts-ignore
import Copy from '../../../../../static/copy.svg';

const ShareButton = ({ children, onClick }: any) => {
  return (
    <ShareButton.Button onClick={onClick} onMouseDown={(e: any) => e.preventDefault()}>
      <Element.Text>{children}</Element.Text>
      <Copy />
    </ShareButton.Button>
  );
};
ShareButton.Button = styled(Element.Container).attrs({ as: BaseButton })`
  cursor: pointer;
  
  svg {
    position: absolute;
    top: 50%;
    margin-top: -7.5px;
    right: 15px;
    width: 15px;
    text-align: center;
    height: 15px;
    display: block;
    path {
      fill: ${Theme.colors.main};
    }
  }
`;

export default ShareButton;
