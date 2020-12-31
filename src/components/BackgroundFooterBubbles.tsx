import * as React from 'react';
import styled from 'styled-components';
// @ts-ignore
import WideArrow from '../../static/wide-arrow.svg';
import { Theme } from '../utils';
import media from '../utils/media';
import { Box } from './Box';
import { LazyImage } from './LazyImage';

const Wrapper = styled(Box)`
  z-index: 0;

  pointer-events: none;
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 0;
`;

const Container = styled(Box)`
  ${media.greaterThan('mobile')`
    width: auto;
    height: 180px;
  `}
  
   ${media.greaterThan('tablet')`
    
  `}
  
  ${media.greaterThan('desktop')`
    height: 207px;
    width: 100%;
    
    img {
      width: 100%;
    }
  `}

`;

const Image = styled('img')<{ loading: any }>`
  width: 100%;
  height: auto;
  filter: ${props => (props.loading ? 'blur(10px)' : 'blur(0)')};
  opacity: ${props => (props.loading ? 0.8 : 1)};
  transition: opacity 0.5s;
  
  ${media.greaterThan('mobile')`
    width: auto;
    height: 100%;
  `}
  
   ${media.greaterThan('tablet')`
    
  `}
  
  ${media.greaterThan('desktop')`
  
  `}
`;

const BackgroundFooterBubblesImage = (props: { src: string; placeholderSrc: string }) => (
  <LazyImage useSensor={false} {...props}>
    {(src: any, loading: boolean) => <Image src={src} alt={loading.toString()} loading={loading} />}
  </LazyImage>
);

const Arrow = styled(WideArrow)`
  position: absolute;
  bottom: 10px;
  left: 50%;
  width: 42px;
  height: auto;
  transform: translateX(-50%) translateY(0) rotate(90deg);
  cursor: pointer;
  transition: transform 0.5s, opacity 0.5s;
  pointer-events: all;

  &:hover {
    transform: translateX(-50%) translateY(5px) rotate(90deg);
    opacity: 0.8;
  }

  path {
    stroke: ${Theme.colors.mainContrast};
  }
`;

export const BackgroundFooterBubbles = () => {
  return (
    <Wrapper>
      <Container display={['block', 'none']}>
        <BackgroundFooterBubblesImage
          src={'/static/bg-narrow-bubbles.png'}
          placeholderSrc={'/static/compr-bg-narrow-bubbles.png'}
        />
      </Container>
      <Container display={['none', 'block']}>
        <BackgroundFooterBubblesImage
          src={'/static/bg-footer-bubbles.png'}
          placeholderSrc={'/static/compr-bg-footer-bubbles.png'}
        />
      </Container>
      <a href="#description-section">
        <Arrow />
      </a>
    </Wrapper>
  );
};
