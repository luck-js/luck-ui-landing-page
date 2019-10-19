import React, {Fragment} from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import { Flex, Box } from '../../components';
import Link from 'next/link';
import NavLink from '../../components/Button/NavLink';
import media from '../../utils/media';
import { Theme } from '../../utils';

type LayoutProps = {
  title?: string;
  backgroundColor: string;
};

const NavigationHorizontalPadding = styled(Box)`
  padding: ${Theme.space.small}px ${Theme.space.regular}px; 
  
  ${media.greaterThan('mobile')`
    
  `}
  
  ${media.greaterThan('tablet')`
    padding: ${Theme.space.regular}px ${Theme.space.regular}px;
  `}
  
  ${media.greaterThan('desktop')`
    padding: ${Theme.space.regular}px ${Theme.space.regular}px;
  `}
`;

const NavigationContainer = styled(Flex)`
  position: relative;
  min-height: 45px;
  justify-content: flex-end;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  
  ${media.greaterThan('mobile')`
    
  `}
  
  ${media.greaterThan('tablet')`
    min-height: 77px;
  `}
  
  ${media.greaterThan('desktop')`
    max-width: 1740px;
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

const Navigation = () => {
  return (
    <NavigationHorizontalPadding>
      <NavigationContainer>
        <Link href={`/`}>
          <NavigationLogo src="/static/logo-luck.png" />
        </Link>
        <NavLink href="/blog" modifiers={['black']} />
      </NavigationContainer>
    </NavigationHorizontalPadding>
  );
};
const BlogLayout: React.FunctionComponent<LayoutProps> = ({ children, ...props }) => (
  <Fragment>
    <Layout {...props}>
      <Navigation />
      {children}
    </Layout>
  </Fragment>
);
export default BlogLayout;
