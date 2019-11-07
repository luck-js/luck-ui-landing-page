import React from 'react';
import styled from 'styled-components';
import { Box } from './Box';
import { TextLink } from './TextLink';
import { SmallText } from './Typography';
import { Theme } from '../utils';
import media from '../utils/media';
import Link from 'next/link';

const Container = styled(Box)`
  text-align: center;
  color: ${Theme.colors.black};
  background-color: ${Theme.colors.main};
  
  padding: ${Theme.space.small}px ${Theme.space.xregular}px;
  
  ${media.greaterThan('mobile')`
    
  `}
  
  ${media.greaterThan('tablet')`
    padding: ${Theme.space.regular}px ${Theme.space.xregular}px;
  `}
  
  ${media.greaterThan('desktop')`
    padding: ${Theme.space.xregular}px ${Theme.space.xregular}px;
  `}
`;

const Footer = () => {
  return (
    <Container>
      <SmallText>
        Polityka prywatności{' '}
        <Link href={'./polityka-prywatnosci-strony'}>
          <TextLink
            href={'./polityka-prywatnosci-strony'}
            aria-label={'przejdź do polityki prywatnosci strony'}
            modifiers={['black']}
            underline
          >
            strony
          </TextLink>
        </Link>{' '}
        &{' '}
        <Link href={'./polityka-prywatnosci-bota-pan-mikolaj'}>
          <TextLink
            href={'./polityka-prywatnosci-bota-pan-mikolaj'}
            aria-label={'przejdź do polityki prywatnosci bota'}
            modifiers={['black']}
            underline
          >
            bota
          </TextLink>
        </Link>
      </SmallText>
    </Container>
  );
};
export default Footer;
