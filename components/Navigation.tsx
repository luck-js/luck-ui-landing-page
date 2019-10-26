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

const NavigationLogo = styled('img')`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
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
          <Link href={`/`} >
            <NavigationLogo src="/static/logo-luck.png" />
          </Link>
        )}

        <NavLink href="/blog" modifiers={navLinkModifiers} />
      </NavigationContainer>
    </NavigationHorizontalPadding>
  );
};
