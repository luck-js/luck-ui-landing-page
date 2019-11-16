import React, { Fragment } from 'react';
import BaseLayout from './BaseLayout';
import {Box, NAVIGATION_HEIGHT, NavigationWithLogo} from '../index';
import {Theme} from "../../utils"
import {Background} from "./Background"
import styled from "styled-components"

const Container = styled(Box)`
  height: calc(100% - ${NAVIGATION_HEIGHT}px);
`;

const AppLayout: React.FunctionComponent<{contrast?:boolean}> = ({ children, contrast }) => (
  <Fragment>
    <BaseLayout backgroundColor={contrast ? Theme.colors.mainContrast : Theme.colors.main }>
      {contrast && <Background />}
      <NavigationWithLogo boxShadow={contrast ? "0px 4px 4px rgba(0, 0, 0, 0.05);" : ""} />
      <Container>
        {children}
      </Container>
    </BaseLayout>
  </Fragment>
);
export default AppLayout;
