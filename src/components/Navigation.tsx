import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Box } from './Box';
import { Flex } from './Flex';
import { NavLink } from './Button';
import media from '../utils/media';
import { Theme } from '../utils';

interface NavigationProps {
  shouldShowShadow?: boolean;
}

export const NAVIGATION_HEIGHT = 50;
export const NAVIGATION_SHADOW = 4;

const NavigationHorizontalPadding = styled(Box)<{ shouldShowShadow: boolean }>`
  padding: ${Theme.space.small}px ${Theme.space.regular}px;
  margin-bottom: ${props => (props.shouldShowShadow ? `${NAVIGATION_SHADOW}px` : '0')};
  box-shadow: ${props =>
    props.shouldShowShadow
      ? `0px ${NAVIGATION_SHADOW}px ${NAVIGATION_SHADOW}px rgba(0, 0, 0, 0.05)`
      : 'none'};
  
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
  justify-content: ${props => (props.withLogo ? 'space-between' : 'flex-end')};
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
`;

const NavigationLogo = styled('img')`
  height: 100%;
  cursor: pointer;
`;

export const Navigation: React.FunctionComponent<NavigationProps> = ({ ...props }) => {
  return (
    <NavigationHorizontalPadding bg="transparent" {...props}>
      <NavigationContainer>
        <NavLink href="/blog" ariaLabel="przejdź do blog postow" />
      </NavigationContainer>
    </NavigationHorizontalPadding>
  );
};

export const NavigationWithLogo: React.FunctionComponent<NavigationProps> = ({ ...props }) => {
  return (
    <NavigationHorizontalPadding bg={Theme.colors.mainContrast} {...props}>
      <NavigationContainer withLogo>
        <Link href="/">
          <NavigationLogoContainer as="a" href="/" aria-label={`przejdź do strony głownej`}>
            <NavigationLogo src="/static/logo-luck-horizontal.svg" alt="Logo Luck" />
          </NavigationLogoContainer>
        </Link>
        <NavLink href="/blog" ariaLabel="przejdź do blog postow" />
      </NavigationContainer>
    </NavigationHorizontalPadding>
  );
};
