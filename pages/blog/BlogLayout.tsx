import * as React from 'react';
import styled from 'styled-components';
import { Fragment } from 'react';
import Layout from '../../components/Layout';
import { Flex } from '../../components/Flex';
import { Box } from '../../components/Box';
import media from '../../utils/media';
import Link from 'next/link';
import { Theme } from '../../utils/theme';
import NavLink from '../../components/Button/NavLink';
type LayoutProps = {
  title?: string;
  backgroundColor: string;
};

const NavigationHorizontalPadding = styled(Box)`
  padding: ${Theme.space.small}px ${Theme.space.regular}px;
`;

const NavigationContainer = styled(Flex)`
  position: relative;
  min-height: 45px;
  justify-content: flex-end;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  
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
