import React from 'react';
import styled from 'styled-components';
import { ElementListContainer } from '../../shared/ElementListContainer';
import NewParticipantElement from './NewParticipantElement';
import { FunctionComponent } from '../../../../utils/function-component.interface';

interface NewParticipantElementListProps {
  names: string[];
  onClose?: (value: string) => void;
  mt?: any;
}

interface NewParticipantElementListPage<P = NewParticipantElementListProps>
  extends FunctionComponent<P> {
  Container: any;
}

const NewParticipantElementList: NewParticipantElementListPage = ({
  names,
  onClose = () => {},
  ...props
}) => {
  return (
    <NewParticipantElementList.Container {...props}>
      {names.reverse().map((name, index) => (
        <NewParticipantElement key={`${name}-${index}`} name={name} onClose={onClose} />
      ))}
    </NewParticipantElementList.Container>
  );
};

NewParticipantElementList.Container = styled(ElementListContainer)`
  min-height: 40px;
`;

export default NewParticipantElementList;
