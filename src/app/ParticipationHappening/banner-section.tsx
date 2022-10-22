import React, { useEffect, useState } from 'react';
import BannerItem, { Banner, BannerType } from './banner-item';
import { Box } from '../../components';

interface BannerItemFactorsMap {
  [key: string]: number;
}

let defaultBannerItemFactors: {
  [key in BannerType]: number;
} = {
  [BannerType.Palisienaturalnie]: 0.5,
  [BannerType.Podstawka]: 0.5,
};

const getBannerItemFactors = (factors: string | undefined = ''): BannerItemFactorsMap => {
  try {
    const json = JSON.parse(factors);
    return json[BannerType.Palisienaturalnie] ? json : json;
  } catch {
    return defaultBannerItemFactors;
  }
};

const bannerItemFactors = getBannerItemFactors(process.env.BANNER_ITEM_FACTORS);

const getBannerItem = (bannerItems: BannerItemProps[]): BannerItemProps => {
  const bannerItemFactorsSorted: string[] = Object.keys(bannerItemFactors).sort((key) => {
    const filteredFactorKeys = Object.keys(bannerItemFactors).filter((k) => k !== key);

    const r =
      filteredFactorKeys.reduce((prev, filteredFactorKey) => {
        return prev + bannerItemFactors[filteredFactorKey];
      }, 0) / filteredFactorKeys.length;
    return r - Math.random();
  });
  return (
    bannerItems.find((item) => item.desktop.type === bannerItemFactorsSorted[0]) ?? bannerItems[0]
  );
};

interface BannerItemProps {
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
    <div key={bannerItem.mobile.src}>
      <Box display={['block', 'none']}>
        <BannerItem onBannerClick={onBannerClick} {...bannerItem.mobile} />
      </Box>
      <Box display={['none', 'block']}>
        <BannerItem onBannerClick={onBannerClick} {...bannerItem.desktop} />
      </Box>
    </div>
  );
};

export default BannerSection;
