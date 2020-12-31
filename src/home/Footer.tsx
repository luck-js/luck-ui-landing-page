import React from 'react';
import styled from 'styled-components';
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

const Footer = () => {
  return (
    <Container>
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
