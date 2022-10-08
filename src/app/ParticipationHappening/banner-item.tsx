import React from 'react';
import { LazyImage } from '../../components';
import styled from 'styled-components';
import media from '../../utils/media';

export enum BannerType {
  Palisienaturalnie = 'Palisienaturalnie',
  Podstawka = 'Podstawka',
}

export interface Banner {
  href: string;
  src: string;
  placeholderSrc: string;
  type: BannerType;
}

interface BannerItemProps extends Banner {
  onBannerClick: (type: BannerType) => void;
}

const Image = styled('img')<{ loading: any }>`
  min-width: 90vw;
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
    min-width: inherit;
    width: 100%;
    max-width: 800px;
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

const BannerItem = ({ href, type, placeholderSrc, src, onBannerClick }: BannerItemProps) => {
  return (
    <a target="_blank" href={href} onClick={() => onBannerClick(type)}>
      <BannerImage src={src} placeholderSrc={placeholderSrc} />
    </a>
  );
};

export default BannerItem;
