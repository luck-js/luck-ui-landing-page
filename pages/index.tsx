import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { LogoHeading } from '../utils/Typography';
import Fonts from '../utils/Fonts';
import media from '../utils/media';
import Bubbles from '../components/Bubbles';

const Content = styled('div')`
  max-width: 400px;
  margin: 0 auto;
  padding: 30px 15px 0px 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  
  ${media.greaterThan('mobile')`
    max-width: 550px;
    padding: 40px 15px 0px 15px;
  `}
  
  ${media.greaterThan('tablet')`
    max-width: 900px;
    padding: 60px 15px 0px 15px;
  `}
  
  ${media.greaterThan('desktop')`
    max-width: 1200px;
    padding: 70px 15px 0px 15px;
  `}
`;
const Logo = styled('img')`
  width: 140px;
  height: 140px;

  ${media.greaterThan('mobile')`
    width: 220px;
    height: 220px;
  `}
  
  ${media.greaterThan('tablet')`
    width: 260px;
    height: 260px;
  `}
  
  ${media.greaterThan('desktop')`
    width: 320px;
    height: 320px;
  `}
`;

const Background = styled('div')`
  width: 100%;
  height: 100%;
  position: fixed;
  background-image: url(static/bg-bubbles.png);
  z-index: 0;
`;

const Index: React.FunctionComponent = () => {
  useEffect(() => Fonts());

  return (
    <Layout title="Home">
      <Background />
      <Content>
        <Logo src="static/logo-shadow.png" />
        <LogoHeading pt={['regular', 'regular', 'large', 'large']}>
          Organizacja Mikołajek nie była nigdy tak łatwa!
        </LogoHeading>
      </Content>
      <Bubbles />
    </Layout>
  );
};
export default Index;
