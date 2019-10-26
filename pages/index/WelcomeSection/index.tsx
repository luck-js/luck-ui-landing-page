import styled from 'styled-components';
import {LogoHeading, Navigation} from '../../../components';
import Bubbles from '../Bubbles';
import React from 'react';
import Content from './Content';
import Logo from './Logo';
import InputWithButton from './InputWithButton';

const Background = styled('div')`
  width: 100%;
  height: 100%;
  position: fixed;
  background-image: url(static/bg-bubbles.png);
  z-index: 0;
  pointer-events: none;
`;

const Container = styled('div')``;

const  WelcomeSection = ({ ...pros }) => {
  return (
    <Container {...pros}>
      <Background />
      <Navigation />
      <Content>
        <Logo src="static/logo-luck.png" />
        <LogoHeading pt={['50px', '50px', '50px', '50px']}>
          Organizacja Mikołajek nie była nigdy tak łatwa!
        </LogoHeading>
        <InputWithButton
          pt={['40px', '40px', '50px', '70px']}
          href="https://app.luck.org.pl"
        />
      </Content>
      <Bubbles />
    </Container>
  );
};

export default WelcomeSection;
