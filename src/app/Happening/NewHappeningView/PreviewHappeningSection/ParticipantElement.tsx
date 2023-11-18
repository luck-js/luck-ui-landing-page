import React from 'react';
import styled from 'styled-components';
import { FunctionComponent } from '../../../../utils/function-component.interface';
import { Container, Text } from '../../shared';

interface ParticipantElementProps {}

interface ParticipantElementPage<P = ParticipantElementProps> extends FunctionComponent<P> {
  Container: any;
  Text: any;
}
const ParticipantElement: ParticipantElementPage = ({ children }) => {
  return (
    <ParticipantElement.Container>
      <ParticipantElement.Text>{children}</ParticipantElement.Text>
    </ParticipantElement.Container>
  );
};

ParticipantElement.Container = styled(Container)``;

ParticipantElement.Text = styled(Text)``;

export default ParticipantElement;
