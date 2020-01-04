import React from 'react';
import styled from 'styled-components';
import CopyToClipboard from 'react-copy-to-clipboard';
import { BaseButton } from '../../../../components';
import { Theme } from '../../../../utils';
import { Container, Text } from '../../shared';
// @ts-ignore
import Share from '../../../../../static/share.svg';
import { Participant } from '../../model';

export const ShareButton = ({ children, contrast = false, ...props }: any) => {
  return (
    <ShareButton.Container
      contrast={contrast}
      onMouseDown={(e: any) => e.preventDefault()}
      {...props}
    >
      <ShareButton.Text>{children}</ShareButton.Text>
      <Share />
    </ShareButton.Container>
  );
};

ShareButton.Container = styled(Container).attrs({ as: BaseButton })`
  text-align: left;
  padding: 9px 40px 8px 10px;
  cursor: pointer;
  background-color: ${props => (props.contrast ? Theme.colors.main : Theme.colors.mainContrast)};
  color: ${props => (props.contrast ? Theme.colors.black : Theme.colors.main)};
  box-shadow: ${props => (props.contrast ? 'inset 0px 2px 4px rgba(0, 0, 0, 0.15)' : '')};
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
      fill: ${props => (props.contrast ? Theme.colors.black : Theme.colors.main)};
    }
  }
`;

ShareButton.Text = Text;

const ShareElement = ({ participant, onClick }: { participant: Participant; onClick: any }) => {
  const handleOnCopy = () => {
    onClick(participant.uniqueLink);
  };

  return (
    <CopyToClipboard text={participant.uniqueLink} onCopy={handleOnCopy}>
      <ShareButton contrast={participant.isCopied}>{participant.name}</ShareButton>
    </CopyToClipboard>
  );
};

export default ShareElement;
