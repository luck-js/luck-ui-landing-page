import React from 'react';
import BannerItem, { Banner, BannerType } from './banner-item';
import { Box } from '../../components';

interface BannerItemProps {
  mobile: Banner;
  desktop: Banner;
}

interface BannerSectionProps {
  bannerItems: BannerItemProps[];
  onBannerClick: (type: BannerType) => void;
}

const BannerSection = ({ bannerItems, onBannerClick }: BannerSectionProps) => {
  const bannerItem = bannerItems[1];

  return (
    <>
      <Box display={['block', 'none']}>
        <BannerItem onBannerClick={onBannerClick} {...bannerItem.mobile} />
      </Box>
      <Box display={['none', 'block']}>
        <BannerItem onBannerClick={onBannerClick} {...bannerItem.desktop} />
      </Box>
    </>
  );
};

export default BannerSection;
