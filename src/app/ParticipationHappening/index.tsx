import { Background } from '../../components/Layout';
import React, { useState } from 'react';
import WelcomeMemberSection, { WelcomeMemberSectionData } from './WelcomeMemberSection';
import MatchedMemberSection from './MatchedMemberSection';
import { MatchedMemberSectionData } from './MatchedMemberSection';
import styled from 'styled-components';
import { Box, Flex, NAVIGATION_SHADOW } from '../../components';
import { Theme } from '../../utils';
import { BackgroundFooterBubbles } from '../../components/BackgroundFooterBubbles';

export interface ParticipationHappeningViewData {
  welcomeMember: WelcomeMemberSectionData;
  matchedMember: MatchedMemberSectionData;
}

interface ParticipationHappeningViewProps {
  data: ParticipationHappeningViewData;
  analytics: any;
}

const Index = ({ data, analytics }: ParticipationHappeningViewProps) => {
  const [shouldShowMatchedMember, SetShouldShowMatchedMember] = useState(false);

  const handleOnClick = () => {
    SetShouldShowMatchedMember(true);
  };

  const handleBannerClick = () => {
    analytics.event('Banner Click', 'palisienaturalnie');
  };

  return (
    <Index.Container>
      <Background />
      {!shouldShowMatchedMember && (
        <Index.WelcomeMemberSectionContainer>
          <WelcomeMemberSection data={data.welcomeMember} onClick={handleOnClick} />
        </Index.WelcomeMemberSectionContainer>
      )}
      {shouldShowMatchedMember && (
        <Index.MatchedMemberSectionContainer>
          <MatchedMemberSection data={data.matchedMember} handleBannerClick={handleBannerClick} />
        </Index.MatchedMemberSectionContainer>
      )}
      <BackgroundFooterBubbles />
    </Index.Container>
  );
};

Index.Container = styled(Box)`
  position: relative;
  padding: ${Theme.space.xregular - NAVIGATION_SHADOW}px ${Theme.space.small}px 200px
    ${Theme.space.small}px;
  color: ${Theme.colors.main};
  text-align: center;
  background-color: ${Theme.colors.mainContrast};
  min-height: 100%;
  display: grid;
`;

Index.WelcomeMemberSectionContainer = styled(Flex)`
  justify-content: center;
  flex-direction: column;
  min-height: 100%;
`;

Index.MatchedMemberSectionContainer = styled(Box)`
  display: grid;
`;

export default Index;
