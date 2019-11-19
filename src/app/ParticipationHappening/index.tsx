import { Background } from '../../components/Layout';
import React, { useMemo, useState } from 'react';
import dynamic from 'next/dist/next-server/lib/dynamic';
import WelcomeMemberSection, { WelcomeMemberSectionData } from './WelcomeMemberSection';
import MatchedMemberSection from './MatchedMemberSection';
import { MatchedMemberSectionData } from './MatchedMemberSection';
const Bubbles = dynamic(() => import('../../home/Bubbles'), { ssr: false });

export interface ParticipationHappeningViewData {
  welcomeMember: WelcomeMemberSectionData;
  matchedMember: MatchedMemberSectionData;
}

interface ParticipationHappeningViewProps {
  data: ParticipationHappeningViewData;
  onClickBubble: any;
}

const Index = ({ data, onClickBubble }: ParticipationHappeningViewProps) => {
  const handleOnClickBubble = useMemo(() => () => onClickBubble(), []);

  const [shouldShowMatchedMember, SetShouldShowMatchedMember] = useState(false);

  const handleOnClick = () => {
    SetShouldShowMatchedMember(true);
  };

  return (
    <>
      <Background />
      {!shouldShowMatchedMember && (
        <WelcomeMemberSection data={data.welcomeMember} onClick={handleOnClick} />
      )}
      {shouldShowMatchedMember && <MatchedMemberSection data={data.matchedMember} />}
      <Bubbles onClickBubble={handleOnClickBubble} />
    </>
  );
};

export default Index;
