import React, { useEffect, useState, Fragment } from 'react';
import BannerItem, { Banner, BannerType } from './banner-item';
import { Box } from '../../components';

const getBannerItem = (bannerItems: BannerItemProps[]): BannerItemProps => {
  const index = Math.floor(Math.random() * bannerItems.length);
  return bannerItems[index];
};

export interface BannerItemProps {
  mobile: Banner;
  desktop: Banner;
}

interface BannerSectionProps {
  bannerItems: BannerItemProps[];
  onBannerClick: (type: BannerType) => void;
}

const BannerSection = ({ bannerItems, onBannerClick }: BannerSectionProps) => {
  const [bannerItem, setBannerItem] = useState<BannerItemProps>(bannerItems[0]);
  useEffect(() => {
    setBannerItem(getBannerItem(bannerItems));
  }, []);

  return (
    <Fragment>
      {bannerItem !== undefined && (
        <div key={bannerItem.mobile.src}>
          <Box display={['block', 'none']}>
            <BannerItem onBannerClick={onBannerClick} {...bannerItem.mobile} />
          </Box>
          <Box display={['none', 'block']}>
            <BannerItem onBannerClick={onBannerClick} {...bannerItem.desktop} />
          </Box>
        </div>
      )}
    </Fragment>
  );
};

export default BannerSection;
