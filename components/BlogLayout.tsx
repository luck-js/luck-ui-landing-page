import * as React from 'react';
import styled from 'styled-components';
import { Fragment } from 'react';
import Layout from './Layout';
import { Flex } from '../utils/Flex';
import media from '../utils/media';
import Link from 'next/link';
import { Button } from '../utils/Button/Button';
import {Theme} from "../utils/Theme"
type LayoutProps = {
  title?: string;
  backgroundColor: string;
};

const NavigationContainer = styled(Flex)`
  position: relative;
  min-height: 70px;
  justify-content: flex-end;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 ${Theme.space.large}px;
  
  ${media.greaterThan('mobile')`
    min-height: 110px;
  `}
  
  ${media.greaterThan('tablet')`
    min-height: 130px;
  `}
  
  ${media.greaterThan('desktop')`
    min-height: 150px;
  `}
`;

const NavigationLogo = styled('img')`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: 70px;
  cursor: pointer;
  
  ${media.greaterThan('mobile')`
    width: 110px;
    height: 110px;
  `}
  
  ${media.greaterThan('tablet')`
    width: 130px;
    height: 130px;
  `}
  
  ${media.greaterThan('desktop')`
    width: 150px;
    height: 150px;
  `}
`;

const NavLink = ({ ...props }: { href: string }) => {
  return (
    <NavLink.Button modifiers={['black']}>
      <Link {...props}>Blog</Link>
    </NavLink.Button>
  );
};

NavLink.Button = styled(Button)`
  
`;

const Navigation = () => {
  return (
    <NavigationContainer>
      <Link href={`/`}>
        <NavigationLogo src="/static/logo-shadow.png" />
      </Link>
      <NavLink href="/blog" />
    </NavigationContainer>
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
