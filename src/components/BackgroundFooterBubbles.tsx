import styled from 'styled-components';
import media from '../utils/media';
import * as React from 'react';
import { LazyImage } from './LazyImage';
import { Box } from './Box';
// import { Flex } from './Flex';

const Container = styled(Box)`
  z-index: 0;
 
  pointer-events: none;
  width: 100%;
  height: auto;
  //background-repeat-y: no-repeat;
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

export const BackgroundFooterBubbles = () => {
  return (
    <>
      <Container display={['inline-block', 'none']}>
        <LazyImage
          src={'/static/bg-narrow-bubbles.png'}
          placeholderSrc={'/static/compr-bg-narrow-bubbles.png'}
          useSensor={false}
        >
          {(src: any, loading: boolean) => (
            <Image src={src} alt={loading.toString()} loading={loading} />
          )}
        </LazyImage>
      </Container>
      <Container display={['none', 'inline-block']}>
        <LazyImage
          src={'/static/bg-footer-bubbles.png'}
          placeholderSrc={'/static/compr-bg-footer-bubbles.png'}
          useSensor={false}
        >
          {(src: any, loading: boolean) => (
            <Image src={src} alt={loading.toString()} loading={loading} />
          )}
        </LazyImage>
      </Container>
    </>
  );
};
