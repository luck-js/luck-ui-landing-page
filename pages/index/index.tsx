import React from 'react';
import Layout from '../../components/Layout';
import WelcomeSection from './WelcomeSection';
import {Theme} from "../../utils/theme"

const Index: React.FunctionComponent = () => {

  return (
    <Layout title="Home"
            backgroundColor={Theme.colors.mainContrast}>

      <WelcomeSection />
    </Layout>
  );
};
export default Index;
