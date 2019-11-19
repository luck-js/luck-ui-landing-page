import React, { Fragment } from 'react';
import { NavigationWithLogo, BaseLayout } from '../components';
import { Theme } from '../utils';

const BlogLayout: React.FunctionComponent = ({ children }) => (
  <Fragment>
    <BaseLayout backgroundColor={Theme.colors.main}>
      <NavigationWithLogo />
      {children}
    </BaseLayout>
  </Fragment>
);
export default BlogLayout;
