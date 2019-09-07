import React, {useEffect} from 'react';
import Layout from '../components/Layout';
import {LogoHeading} from "../utils/Typography"
import Fonts from "../utils/Fonts"
import Bubbles from "../components/Bubbles"
const Index: React.FunctionComponent = () => {
  useEffect((() => Fonts()))

  return (
    <Layout title="Home">
      <LogoHeading>Organizacja Mikołajek nie była nigdy tak łatwa!</LogoHeading>
      <Bubbles />
    </Layout>
  );
};
export default Index;
