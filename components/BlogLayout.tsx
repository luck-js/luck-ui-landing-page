import React, { Fragment } from 'react';
import Layout from './Layout';
import {NavigationWithLogo} from './index';
import {Theme} from "../utils"

interface BlogLayoutProps {
  backgroundColor?: string
}

const BlogLayout: React.FunctionComponent<BlogLayoutProps> = ({ children, backgroundColor }) => (
  <Fragment>
    <Layout backgroundColor={backgroundColor ? backgroundColor : Theme.colors.main}>
      <NavigationWithLogo />
      {children}
    </Layout>
  </Fragment>
);
export default BlogLayout;
