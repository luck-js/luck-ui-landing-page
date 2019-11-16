import React, { Fragment } from 'react';
import BaseLayout from './BaseLayout';
import {Navigation} from '../index';
import {Theme} from "../../utils"
import {Background} from "./Background"

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
