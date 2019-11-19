import React, { Fragment } from 'react';
import {Box, NAVIGATION_HEIGHT, NavigationWithLogo, BaseLayout} from '../components';
import {Theme} from "../utils"
import styled from "styled-components"

const Container = styled(Box)`
  height: calc(100% - ${NAVIGATION_HEIGHT}px);
`;

const AppLayout: React.FunctionComponent<{contrast?:boolean}> = ({ children, contrast = false }) => (
  <Fragment>
    <BaseLayout backgroundColor={contrast ? Theme.colors.mainContrast : Theme.colors.main }>
      <NavigationWithLogo shouldShowShadow={contrast} />
      <Container>
        {children}
      </Container>
    </BaseLayout>
  </Fragment>
);
export default AppLayout;
