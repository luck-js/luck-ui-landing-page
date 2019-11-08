import React, { Fragment } from 'react';
import Layout from './Layout';
import {NavigationWithLogo} from './index';
import {Theme} from "../utils"
import {LayoutProps} from "styled-system"

const BlogLayout: React.FunctionComponent<LayoutProps> = ({ children }) => (
  <Fragment>
    <Layout backgroundColor={Theme.colors.main}>
      <NavigationWithLogo />
      {children}
    </Layout>
  </Fragment>
);
export default BlogLayout;
