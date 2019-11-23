import React from 'react';
import styled from 'styled-components';
import CopyToClipboard from 'react-copy-to-clipboard';
import { BaseButton } from '../../../../components';
import { Theme } from '../../../../utils';
import { Element } from '../../shared';
// @ts-ignore
import Share from '../../../../../static/share.svg';
import { Participant } from '../../model';

export const ShareButton = ({ children, contrast = false, ...props }: any) => {
  return (
    <ShareButton.Button contrast={contrast} onMouseDown={(e: any) => e.preventDefault()} {...props} >
      <Element.Text>{children}</Element.Text>
      <Share />
    </ShareButton.Button>
  );
};

ShareButton.Button = styled(Element.Container).attrs({ as: BaseButton })`
  cursor: pointer;
  background-color: ${props => props.contrast ? Theme.colors.main : Theme.colors.mainContrast};
  color: ${props => props.contrast ? Theme.colors.black : Theme.colors.main};
  box-shadow: ${props => props.contrast ? "inset 2px 2px 15px rgba(0, 0, 0, 0.25)" : ""};
  
  transition: background-color 0.5s, color 0.5s, box-shadow 0.5s;

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
      fill: ${props => props.contrast ? Theme.colors.black : Theme.colors.main};
    }
  }
`;

const ShareElement = ({ participant, onClick }: { participant: Participant, onClick: any }) => {
  const handleOnCopy = () => {
    onClick(participant.uniqueLink);
  };

  return (
    <CopyToClipboard text={participant.uniqueLink} onCopy={handleOnCopy}>
      <ShareButton contrast={participant.isCopied}>{participant.name}</ShareButton>
    </CopyToClipboard>

  )
}

export default ShareElement;
