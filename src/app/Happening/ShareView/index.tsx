import React, { useEffect, useState } from 'react';
import ShareViewMobile from './ShareViewMobile';
import ShareViewDesktop from './ShareViewDesktop';
import { PublishedHappening } from '../model';
import { useQuestionnaire } from './shared/Questionnaire/Questionnaire';
import { usePopup } from '../../../components/Popup';
import { FunctionComponent } from '../../../utils/function-component.interface';

export interface ShareViewData {
  happening: PublishedHappening;
}

export interface ShareViewProps {
  happening: PublishedHappening;
  display: string[];
  onCopy: any;
}

const Index: FunctionComponent<{ data: ShareViewData }> = ({ ...props }) => {
  const { setShouldBeOpen } = useQuestionnaire();
  const { showPopup } = usePopup();
  const [happening, setHappening] = useState<PublishedHappening>(props.data.happening);

  const handleOnCopy = (uniqueLink: string) => {
    void showPopup('Skopiowano !');
    setHappening((prevHappening) => {
      const participants = prevHappening.participants.map((participant) => {
        if (participant.uniqueLink === uniqueLink) {
          return { ...participant, isCopied: true };
        } else {
          return participant;
        }
      });

      return { ...prevHappening, participants };
    });
  };

  const [isQuestionnaireShowed, setIsQuestionnaireShowed] = useState(false);

  useEffect(() => {
    if (
      !happening.participants.some((participant) => !participant.isCopied) &&
      !isQuestionnaireShowed
    ) {
      setShouldBeOpen(true);
      setIsQuestionnaireShowed(true);
    }
  }, [happening.participants]);

  return (
    <>
      <ShareViewMobile
        display={['block', 'block', 'none']}
        happening={happening}
        onCopy={handleOnCopy}
      />
      <ShareViewDesktop
        display={['none', 'none', 'block']}
        happening={happening}
        onCopy={handleOnCopy}
      />
    </>
  );
};

export default Index;
