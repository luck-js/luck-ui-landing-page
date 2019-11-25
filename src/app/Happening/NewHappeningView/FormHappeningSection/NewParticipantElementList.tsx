import React from 'react';
import styled from 'styled-components';
import { ElementListContainer } from '../../shared/ElementListContainer';
import NewParticipantElement from './NewParticipantElement';

interface NewParticipantElementListProps {
  names: string[];
  onClose?: (value: string) => void;
  mt?: any;
}

interface NewParticipantElementListPage<P = NewParticipantElementListProps>
  extends React.FunctionComponent<P> {
  Container: any;
}

const NewParticipantElementList: NewParticipantElementListPage = ({
  names,
  onClose = () => {},
  ...props
}) => {
  const handleOnClose = (name: string) => () => onClose(name);

  return (
    <NewParticipantElementList.Container {...props}>
      {names.reverse().map((name, index) => (
        <NewParticipantElement key={`${name}-${index}`} name={name} onClose={handleOnClose} />
      ))}
    </NewParticipantElementList.Container>
  );
};

NewParticipantElementList.Container = styled(ElementListContainer)`
  min-height: 40px;
`;

export default NewParticipantElementList;
