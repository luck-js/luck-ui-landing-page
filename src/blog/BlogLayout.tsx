import React, { Fragment } from 'react';
import { NavigationWithLogo, BaseLayout } from '../components';
import { Theme } from '../utils';
import { FunctionComponent } from '../utils/function-component.interface';

const BlogLayout: FunctionComponent = ({ children }) => (
  <Fragment>
    <BaseLayout backgroundColor={Theme.colors.main}>
      <NavigationWithLogo />
      {children}
    </BaseLayout>
  </Fragment>
);
export default BlogLayout;
