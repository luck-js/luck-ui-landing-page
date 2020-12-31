import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import Behance from '../../static/behance-icon.svg';
// @ts-ignore
import Email from '../../static/email-icon.svg';
// @ts-ignore
import Fb from '../../static/fb-icon.svg';
// @ts-ignore
import Gh from '../../static/gh-icon.svg';
import { Box, SmallText, TextLink } from '../components';
import { Theme } from '../utils';
import media from '../utils/media';

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

const SocialContainer = styled(Box)`
  padding-bottom: ${Theme.space.medium}px;

  ${TextLink}:not(:first-of-type) {
    padding-left: ${Theme.space.small}px;
  }
  
  ${media.greaterThan('mobile')`
    padding-bottom: ${Theme.space.large}px;
  
  ${TextLink}:not(:first-of-type) {
    padding-left: ${Theme.space.xregular}px;
  }
  `}
`;

const Footer = () => {
  return (
    <Container>
      <SocialContainer>
        <TextLink
          href={'https://www.facebook.com/app.luck'}
          aria-label={'przejdź do naszego facebook`a'}
          target="_blank"
        >
          <Fb />
        </TextLink>
        <TextLink
          href={'https://www.behance.net/MateuszKarski'}
          aria-label={'przejdź do naszego behance`a'}
          target="_blank"
        >
          <Behance />
        </TextLink>
        <TextLink
          href={'https://github.com/luck-js'}
          aria-label={'przejdź do naszego githuba`a'}
          target="_blank"
        >
          <Gh />
        </TextLink>
        <TextLink href={'mailto:danielkarski5q@gmail.com'} aria-label={'wyślij do nas email'}>
          <Email />
        </TextLink>
      </SocialContainer>
      <SmallText>
        <TextLink
          href={'/polityka-prywatnosci-strony'}
          aria-label={'przejdź do polityki prywatnosci strony'}
          modifiers={['black']}
          underline
        >
          Polityka prywatności strony
        </TextLink>
      </SmallText>
    </Container>
  );
};
export default Footer;
