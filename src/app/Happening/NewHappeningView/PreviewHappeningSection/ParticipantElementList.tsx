import React from 'react';
import styled from 'styled-components';
import { FunctionComponent } from '../../../../utils/function-component.interface';
import { ElementListContainer } from '../../shared/ElementListContainer';
import ParticipantElement from './ParticipantElement';

interface ParticipantElementListProps {
  names: string[];
  mt: string[];
}

interface ParticipantElementListPage<P = ParticipantElementListProps>
  extends FunctionComponent<P> {
  Container: any;
}

const ParticipantElementList: ParticipantElementListPage = ({ names, ...props }) => {
  return (
    <ParticipantElementList.Container {...props}>
      {names.map((name, index) => (
        <ParticipantElement key={`${name}-${index}`}>{name}</ParticipantElement>
      ))}
    </ParticipantElementList.Container>
  );
};

ParticipantElementList.Container = styled(ElementListContainer)``;

export default ParticipantElementList;
