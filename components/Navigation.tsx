import styled from 'styled-components';
import { Box } from './Box';
import { Theme } from '../utils';
import media from '../utils/media';
import { Flex } from './Flex';
import Link from 'next/link';
import NavLink from './Button/NavLink';
import React from 'react';

interface NavigationProps {
  boxShadow?: string;
}

const NavigationHorizontalPadding = styled(Box)`
  padding: ${Theme.space.small}px ${Theme.space.regular}px;
  
  ${media.greaterThan('mobile')`
    
  `}
  
  ${media.greaterThan('tablet')`
    padding: ${Theme.space.regular}px ${Theme.space.large}px;
  `}
  
  ${media.greaterThan('desktop')`
    padding: ${Theme.space.regular}px ${Theme.space.xxlarge}px;
  `}
`;

const NavigationContainer = styled(Flex)`
  position: relative;
  justify-content: ${props => props.withLogo ? "space-between" : "flex-end"};
  align-items: center;
  margin: 0 auto;
  min-height: 26px;
  
  ${media.greaterThan('mobile')`
    
  `}
  
  ${media.greaterThan('tablet')`
    min-height: 77px;
  `}
  
  ${media.greaterThan('desktop')`
    min-height: 88px;
  `}
`;

const NavigationLogoContainer = styled(Box)`
  height: 22px;
`

const NavigationLogo = styled('img')`
  height: 100%;
  cursor: pointer;
`;

export const NAVIGATION_HEIGHT = 50;

export const Navigation: React.FunctionComponent<NavigationProps> = ({...props}) => {
  return (
    <NavigationHorizontalPadding bg="transparent" {...props}>
      <NavigationContainer>
        <NavLink href="/blog" ariaLabel="przejdź do blog postow"/>
      </NavigationContainer>
    </NavigationHorizontalPadding>
  );
};

export const NavigationWithLogo: React.FunctionComponent<NavigationProps> = ( {...props}) => {
  return (
    <NavigationHorizontalPadding bg={Theme.colors.mainContrast} {...props}>
      <NavigationContainer withLogo>
          <Link href="/" >
            <NavigationLogoContainer as="a" href="/" aria-label={`przejdź do strony głownej`}>
              <NavigationLogo src="/static/logo-luck-horizontal.svg" alt="Logo Luck" />
            </NavigationLogoContainer>
          </Link>
        <NavLink href="/blog" ariaLabel="przejdź do blog postow"/>
      </NavigationContainer>
    </NavigationHorizontalPadding>
  );
};
