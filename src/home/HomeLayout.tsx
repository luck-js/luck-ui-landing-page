import React from 'react';
import { Background, BaseLayout, Navigation } from '../components';
import { Theme } from '../utils';
import { FunctionComponent } from '../utils/function-component.interface';

const HomeLayout: FunctionComponent = ({ children }) => (
  <BaseLayout
    backgroundColor={Theme.colors.mainContrast}
    minHeight={['520px', '520px', '800px', '800px']}
  >
    <Background />
    <Navigation isAbsolutePosition />
    {children}
  </BaseLayout>
);

export default HomeLayout;
