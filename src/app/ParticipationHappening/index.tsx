import { Background } from '../../components/Layout';
import React, { useState } from 'react';
import WelcomeMemberSection, { WelcomeMemberSectionData } from './WelcomeMemberSection';
import MatchedMemberSection from './MatchedMemberSection';
import { MatchedMemberSectionData } from './MatchedMemberSection';
import styled from 'styled-components';
import { Box, Flex, LazyImage, NAVIGATION_SHADOW } from '../../components';
import { Theme } from '../../utils';
import { BackgroundFooterBubbles } from '../../components/BackgroundFooterBubbles';
import media from '../../utils/media';

export interface ParticipationHappeningViewData {
  welcomeMember: WelcomeMemberSectionData;
  matchedMember: MatchedMemberSectionData;
}

interface ParticipationHappeningViewProps {
  data: ParticipationHappeningViewData;
  analytics: any;
}

const Image = styled('img')<{ loading: any }>`
  width: 100%;
  height: auto;
  filter: ${(props) => (props.loading ? 'blur(10px)' : 'blur(0)')};
  opacity: ${(props) => (props.loading ? 0.8 : 0.95)};
  cursor: pointer;
  transition: opacity 0.5s, all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    opacity: 1;
  }
  ${media.greaterThan('mobile')`
    width: 100%;
    max-width: 450px;
    height: auto;
  `}

  ${media.greaterThan('tablet')`
    
  `}
  
  ${media.greaterThan('desktop')`
  
  `}
`;

const BannerImage = (props: { src: string; placeholderSrc: string }) => (
  <LazyImage useSensor={false} {...props}>
    {(src: any, loading: boolean) => <Image src={src} alt={loading.toString()} loading={loading} />}
  </LazyImage>
);

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
        <WelcomeMemberSection data={data.welcomeMember} onClick={handleOnClick} />
      )}
      {shouldShowMatchedMember && <MatchedMemberSection data={data.matchedMember} />}
      <Index.BannerImageContainer>
        <a
          href="https://palisienaturalnie.pl/pl/c/Swiece/16"
          target="_blank"
          onClick={handleBannerClick}
        >
          <BannerImage src={'/static/banner.png'} placeholderSrc={'/static/compr-banner.jpg'} />
        </a>
      </Index.BannerImageContainer>
      <BackgroundFooterBubbles />
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
Index.BannerImageContainer = styled(Box)`
  position: absolute;
  z-index: 999;
  left: 50%;
  bottom: 15px;
  transform: translateX(-50%);
`;

export default Index;
