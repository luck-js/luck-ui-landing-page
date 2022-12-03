import { Background } from '../../components/Layout';
import React, { useState } from 'react';
import WelcomeMemberSection, { WelcomeMemberSectionData } from './WelcomeMemberSection';
import MatchedMemberSection from './MatchedMemberSection';
import { MatchedMemberSectionData } from './MatchedMemberSection';
import styled from 'styled-components';
import { Box, Flex, NAVIGATION_SHADOW } from '../../components';
import { Theme } from '../../utils';
import { BackgroundFooterBubbles } from '../../components/BackgroundFooterBubbles';
import BannerSection from './banner-section';
import { BannerType } from './banner-item';

export interface ParticipationHappeningViewData {
  welcomeMember: WelcomeMemberSectionData;
  matchedMember: MatchedMemberSectionData;
}

interface ParticipationHappeningViewProps {
  data: ParticipationHappeningViewData;
  analytics: any;
}

const bannerItems = [
  {
    mobile: {
      href: 'https://palisienaturalnie.pl/pl/c/Swiece/16',
      src: '/static/palisienaturalnie-mobile-banner.png',
      placeholderSrc: '/static/palisienaturalnie-compr-mobile-banner.jpg',
      type: BannerType.Palisienaturalnie,
    },
    desktop: {
      href: 'https://palisienaturalnie.pl/pl/c/Swiece/16',
      src: '/static/palisienaturalnie-desktop-banner.png',
      placeholderSrc: '/static/palisienaturalnie-compr-desktop-banner.jpg',
      type: BannerType.Palisienaturalnie,
    },
  },
  {
    mobile: {
      href: 'https://palisienaturalnie.pl/pl/c/Swiece/16',
      src: '/static/palisienaturalnie-2-mobile-banner.png',
      placeholderSrc: '/static/palisienaturalnie-2-compr-mobile-banner.jpg',
      type: BannerType.Palisienaturalnie2,
    },
    desktop: {
      href: 'https://palisienaturalnie.pl/pl/c/Swiece/16',
      src: '/static/palisienaturalnie-2-desktop-banner.png',
      placeholderSrc: '/static/palisienaturalnie-2-compr-desktop-banner.jpg',
      type: BannerType.Palisienaturalnie2,
    },
  },
  {
    mobile: {
      href: 'https://nexstand.pl/',
      src: '/static/podstawka-mobile-banner.png',
      placeholderSrc: '/static/podstawka-compr-mobile-banner.jpg',
      type: BannerType.Podstawka,
    },
    desktop: {
      href: 'https://nexstand.pl/',
      src: '/static/podstawka-desktop-banner.png',
      placeholderSrc: '/static/podstawka-compr-desktop-banner.jpg',
      type: BannerType.Podstawka,
    },
  },
  {
    mobile: {
      href: 'https://wytworniapomyslow.com/dobre-tablice-manipulacyjne-czyli-jak-pomagamy-wyjsc-z-bezdomnosci',
      src: '/static/wytwornia-2-mobile-banner.png',
      placeholderSrc: '/static/wytwornia-2-compr-mobile-banner.jpg',
      type: BannerType.Wytwornia2,
    },
    desktop: {
      href: 'https://wytworniapomyslow.com/dobre-tablice-manipulacyjne-czyli-jak-pomagamy-wyjsc-z-bezdomnosci',
      src: '/static/wytwornia-2-desktop-banner.png',
      placeholderSrc: '/static/wytwornia-2-compr-desktop-banner.jpg',
      type: BannerType.Wytwornia2,
    },
  },
  {
    mobile: {
      href: 'https://wytworniapomyslow.com/2022/05/03/jak-zlozyc-tablice-manipulacyjna-wstep',
      src: '/static/wytwornia-mobile-banner.png',
      placeholderSrc: '/static/wytwornia-compr-mobile-banner.jpg',
      type: BannerType.Wytwornia,
    },
    desktop: {
      href: 'https://wytworniapomyslow.com/2022/05/03/jak-zlozyc-tablice-manipulacyjna-wstep',
      src: '/static/wytwornia-desktop-banner.png',
      placeholderSrc: '/static/wytwornia-compr-desktop-banner.jpg',
      type: BannerType.Wytwornia,
    },
  },
];

const Index = ({ data, analytics }: ParticipationHappeningViewProps) => {
  const [shouldShowMatchedMember, SetShouldShowMatchedMember] = useState(false);

  const handleOnClick = () => {
    SetShouldShowMatchedMember(true);
  };

  const handleBannerClick = (type: BannerType) => {
    analytics.event('Banner Click', type);
  };

  return (
    <Index.Container>
      <Background />
      {!shouldShowMatchedMember && (
        <WelcomeMemberSection data={data.welcomeMember} onClick={handleOnClick} />
      )}
      {shouldShowMatchedMember && <MatchedMemberSection data={data.matchedMember} />}
      <Index.BannerImageContainer>
        <BannerSection onBannerClick={handleBannerClick} bannerItems={bannerItems} />
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
