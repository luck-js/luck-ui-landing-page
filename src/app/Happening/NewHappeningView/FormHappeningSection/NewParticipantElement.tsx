import React from 'react';
import styled from 'styled-components';
import { Container, Text } from '../../shared';
import { BaseButton } from '../../../../components/Button';
import { Theme } from '../../../../utils';

// @ts-ignore
import Close from '../../../../../static/close.svg';

interface NewParticipantElementProps {
  name: string;
  onClose: (value: string) => void;
}

interface NewParticipantElementPage<P = NewParticipantElementProps>
  extends React.FunctionComponent<P> {
  Container: any;
  Text: any;
  Button: any;
}
const NewParticipantElement: NewParticipantElementPage = ({ name, onClose }) => {
  const handleOnClose = (name: string) => () => onClose(name);
  return (
    <NewParticipantElement.Container>
      <NewParticipantElement.Text>{name}</NewParticipantElement.Text>
      <NewParticipantElement.Button
        onClick={handleOnClose(name)}
        onMouseDown={(e: any) => e.preventDefault()}
      >
        <Close />
      </NewParticipantElement.Button>
    </NewParticipantElement.Container>
  );
};

NewParticipantElement.Container = styled(Container)`
  text-align: left;
  padding: 9px 40px 8px 10px;
`;

NewParticipantElement.Text = styled(Text)``;

NewParticipantElement.Button = styled(BaseButton)`
  cursor: pointer;
  position: absolute;
  top: 50%;
  margin-top: -7px;
  right: 15px;
  width: 14px;
  height: 14px;
  text-align: center;
  display: block;

  svg {
    height: 100%;
    width: auto;
    fill: ${Theme.colors.main};
  }
`;

export default NewParticipantElement;
