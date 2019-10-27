import styled from 'styled-components';
import { Box } from './Box';
import { Theme } from '../utils';
import media from '../utils/media';
import { Flex } from './Flex';
import Link from 'next/link';
import NavLink from './Button/NavLink';
import React from 'react';

interface NavigationProps {
  shouldDisplayLogo?: boolean;
  navLinkModifiers?: string[];
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
  min-height: 45px;
  justify-content: flex-end;
  align-items: center;
  margin: 0 auto;
  
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
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  transition: transform 0.5s;
  
  &:hover {
  transform: translateX(-50%) scale(1.11);
  }
`

const NavigationLogo = styled('img')`
  height: 100%;
  cursor: pointer;
`;

export const Navigation: React.FunctionComponent<NavigationProps> = ({
  shouldDisplayLogo = false,
  navLinkModifiers = [],
}) => {
  return (
    <NavigationHorizontalPadding>
      <NavigationContainer>
        {shouldDisplayLogo && (
          <Link href="/" >
            <NavigationLogoContainer as="a" href="/" aria-label={`przejdź do strony głownej`}>
              <NavigationLogo src="/static/logo-luck.png" alt="Logo Luck" />
            </NavigationLogoContainer>
          </Link>
        )}

        <NavLink href="/blog" ariaLabel="przejdź do blog postow" modifiers={navLinkModifiers} />
      </NavigationContainer>
    </NavigationHorizontalPadding>
  );
};
