import React from 'react';
import styled from 'styled-components';
import { BaseButton } from '../../../../components';
import { Theme } from '../../../../utils';
import { Element } from '../../shared';
// @ts-ignore
import Share from '../../../../../static/share.svg';

const ShareButton = ({ children, onClick }: any) => {
  return (
    <ShareButton.Button onClick={onClick} onMouseDown={(e: any) => e.preventDefault()}>
      <Element.Text>{children}</Element.Text>
      <Share />
    </ShareButton.Button>
  );
};
ShareButton.Button = styled(Element.Container).attrs({ as: BaseButton })`
  cursor: pointer;
  
  svg {
    position: absolute;
    top: 50%;
    margin-top: -10px;
    right: 10px;
    width: 20px;
    text-align: center;
    height: 20px;
    display: block;
    path {
      fill: ${Theme.colors.main};
    }
  }
`;

export default ShareButton;
