import React, { Fragment } from 'react';
import BaseLayout from './BaseLayout';
import {NavigationWithLogo} from '../index';
import {Theme} from "../../utils"

const BlogLayout: React.FunctionComponent = ({ children }) => (
  <Fragment>
    <BaseLayout backgroundColor={Theme.colors.main}>
      <NavigationWithLogo />
      {children}
    </BaseLayout>
  </Fragment>
);
export default BlogLayout;
