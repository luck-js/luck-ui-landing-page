import { Background } from '../../components/Layout';
import React, { useMemo, useState } from 'react';
import dynamic from 'next/dist/next-server/lib/dynamic';
import WelcomeMemberSection, { WelcomeMemberSectionData } from './WelcomeMemberSection';
import MatchedMemberSection from './MatchedMemberSection';
import { MatchedMemberSectionData } from './MatchedMemberSection';
import styled from 'styled-components';
import {Flex, NAVIGATION_SHADOW} from '../../components';
import { Theme } from '../../utils';
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
    <Index.Container>
      <Background />
      {!shouldShowMatchedMember && (
        <WelcomeMemberSection data={data.welcomeMember} onClick={handleOnClick} />
      )}
      {shouldShowMatchedMember && <MatchedMemberSection data={data.matchedMember} />}
      <Bubbles onClickBubble={handleOnClickBubble} />
    </Index.Container>
  );
};

Index.Container = styled(Flex)`
  position: relative;
  padding: ${Theme.space.xregular - NAVIGATION_SHADOW}px ${Theme.space.small}px 200px
    ${Theme.space.small}px;
  color: ${Theme.colors.main};
  text-align: center;
  background-color: ${Theme.colors.mainContrast};
  min-height: 100%;

  justify-content: center;
  flex-direction: column;
`;

export default Index;
