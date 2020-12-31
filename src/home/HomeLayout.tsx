import React from 'react';
import { Background, BaseLayout, Navigation } from '../components';
import { Theme } from '../utils';

const HomeLayout: React.FunctionComponent = ({ children }) => (
  <BaseLayout
    backgroundColor={Theme.colors.mainContrast}
    minHeight={[null, null, '800px', '800px']}
  >
    <Background />
    <Navigation isAbsolutePosition />
    {children}
  </BaseLayout>
);

export default HomeLayout;
