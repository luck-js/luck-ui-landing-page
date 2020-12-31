import * as React from 'react';
import styled from 'styled-components';
import media from '../utils/media';
import { Box } from './Box';
import { LazyImage } from './LazyImage';

const Container = styled(Box)`
  z-index: 0;
 
  pointer-events: none;
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 0;
   
  ${media.greaterThan('mobile')`
    width: auto;
    height: 134px;
  `}
  
   ${media.greaterThan('tablet')`
    
  `}
  
  ${media.greaterThan('desktop')`
    height: 192px;
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

export const BackgroundFooterBubbles = () => {
  return (
    <>
      <Container display={['inline-block', 'none']}>
        <BackgroundFooterBubblesImage
          src={'/static/bg-narrow-bubbles.png'}
          placeholderSrc={'/static/compr-bg-narrow-bubbles.png'}
        />
      </Container>
      <Container display={['none', 'inline-block']}>
        <BackgroundFooterBubblesImage
          src={'/static/bg-footer-bubbles.png'}
          placeholderSrc={'/static/compr-bg-footer-bubbles.png'}
        />
      </Container>
    </>
  );
};
