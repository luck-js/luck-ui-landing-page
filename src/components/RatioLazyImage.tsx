import React from 'react';
import styled from 'styled-components';
import RatioContainer from './RatioContainer';
import { LazyImage } from './LazyImage';
import { FunctionComponent } from '../utils/function-component.interface';

interface RatioLazyImageProps {
  display?: string | string[];
  ratio: string | string[];
  url: string;
  placeholderUrl: string;
}

const LazyImageContainer = styled(RatioContainer)`
  position: relative;
`;

const Image = styled('img')<{ loading: any }>`
  width: 100%;
  height: auto;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  filter: ${props => (props.loading ? 'blur(10px)' : 'blur(0)')};
  opacity: ${props => (props.loading ? 0.8 : 1)};
  transition: filter 0.5s, opacity 0.5s;
`;

export const RatioLazyImage: FunctionComponent<RatioLazyImageProps> = ({
  url,
  placeholderUrl,
  ...props
}) => {
  return (
    <LazyImageContainer {...props}>
      <LazyImage src={url} placeholderSrc={placeholderUrl}>
        {(src: any, loading: boolean) => (
          <Image src={src} alt={loading.toString()} loading={loading} />
        )}
      </LazyImage>
    </LazyImageContainer>
  );
};
