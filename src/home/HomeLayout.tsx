import React, { Fragment } from 'react';
import { Theme } from '../utils';
import { Navigation, BaseLayout, Background } from '../components';

const HomeLayout: React.FunctionComponent = ({ children }) => (
  <Fragment>
    <BaseLayout backgroundColor={Theme.colors.mainContrast}>
      <Background />
      <Navigation />
      {children}
    </BaseLayout>
  </Fragment>
);

export default HomeLayout;
