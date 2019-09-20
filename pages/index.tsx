import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Fonts from '../utils/Fonts';
import WelcomeSection from '../sections/WelcomeSection';
import {Theme} from "../utils/Theme"

const Index: React.FunctionComponent = () => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  useEffect(() => {
    Fonts().then(() => setIsFontLoaded(true));
  });

  return (
    <Layout title="Home"
            backgroundColor={Theme.colors.mainContrast}>

      <WelcomeSection isFontLoaded={isFontLoaded} />
    </Layout>
  );
};
export default Index;
