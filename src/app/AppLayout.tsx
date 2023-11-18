import React, { Fragment } from 'react';
import { Box, NAVIGATION_HEIGHT, NavigationWithLogo, BaseLayout, NAVIGATION_DESKTOP_HEIGHT } from '../components';
import {Theme} from "../utils"
import styled from "styled-components"
import media from '../utils/media';
import { FunctionComponent } from '../utils/function-component.interface';

const Container = styled(Box)`
  height: calc(100% - ${NAVIGATION_HEIGHT}px);
  
  ${media.greaterThan('tablet')`
    height: calc(100% - ${NAVIGATION_DESKTOP_HEIGHT}px);
  `}
`;

const AppLayout: FunctionComponent<{contrast?:boolean}> = ({ children, contrast = false }) => (
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
