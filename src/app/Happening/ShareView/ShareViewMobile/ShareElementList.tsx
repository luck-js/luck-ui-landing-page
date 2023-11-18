import React from 'react';
import ShareElement from './ShareElement';
import { Participant } from '../../model';
import { ElementListContainer } from '../../shared/ElementListContainer';
import { FunctionComponent } from '../../../../utils/function-component.interface';

interface ShareElementListProps {
  participants: Participant[];
  onClick: (value: string) => void;
}

interface ShareElementListPage<P = ShareElementListProps> extends FunctionComponent<P> {
  Container: any;
}
export const ShareElementList: ShareElementListPage = ({ participants, onClick }) => {
  return (
    <ShareElementList.Container>
      {participants.map(participant => (
        <ShareElement key={participant.uniqueLink} participant={participant} onClick={onClick} />
      ))}
    </ShareElementList.Container>
  );
};

ShareElementList.Container = ElementListContainer;

export default ShareElementList;
