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
        <Logo src="static/logo-shadow.png" />
        <LogoHeading pt={['regular', 'regular', 'xregular', 'xregular']}>
          Organizacja Mikołajek nie była nigdy tak łatwa!
        </LogoHeading>
        <InputWithButton
          pt={['regular', 'large', 'xlarge', 'xlarge']}
          href="https://luck.org.pl/#/happening"
        />
      </Content>
      <Bubbles />
    </Container>
  );
};

export default WelcomeSection;
