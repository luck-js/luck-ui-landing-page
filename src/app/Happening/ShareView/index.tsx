import React, { useEffect, useState } from 'react';
import ShareViewMobile from './ShareViewMobile';
import ShareViewDesktop from './ShareViewDesktop';
import { Participant, PublishedHappening } from '../model';
import {useQuestionnaire} from "./shared/Questionnaire/Questionnaire"


export interface ShareViewData {
  happening: PublishedHappening;
}

export interface ShareViewProps {
  data: ShareViewData;
  display: string[];
  onCopy: any;
}

const getInitParticipantCopiedMap = (participants: Participant[]): { [key: string]: boolean } => {
  return participants.reduce((prev: any, { uniqueLink }) => {
    prev[uniqueLink] = false;
    return prev;
  }, {});
};

const Index: React.FunctionComponent<{ data: ShareViewData }> = ({ ...props }) => {
  const { setShouldBeOpen } = useQuestionnaire();

  const [participantCopiedMap, setParticipantCopiedMap] = useState<{ [key: string]: boolean }>(
    getInitParticipantCopiedMap(props.data.happening.participants),
  );

  const handleOnCopy = (uniqueLink: string) => {
    setParticipantCopiedMap(prevState => {
      prevState[uniqueLink] = true;
      return { ...prevState };
    });
  };

  const [isQuestionnaireShowed, setIsQuestionnaireShowed] = useState(false);

  useEffect(() => {
    console.log(participantCopiedMap);
    if (!Object.keys(participantCopiedMap).some(key => !participantCopiedMap[key]) && !isQuestionnaireShowed) {
      setShouldBeOpen(true);
      setIsQuestionnaireShowed(true)
    }
  }, [participantCopiedMap]);

  return (
    <>
      <ShareViewMobile display={['block', 'block', 'none']} onCopy={handleOnCopy} {...props} />
      <ShareViewDesktop display={['none', 'none', 'block']} onCopy={handleOnCopy} {...props} />
    </>
  );
};

export default Index;
