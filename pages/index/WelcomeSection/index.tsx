import styled from 'styled-components';
import { LogoHeading } from '../../../components/Typography';
import Bubbles from '../Bubbles';
import React from 'react';
import Content from './Content';
import Logo from './Logo';
import InputWithButton from './InputWithButton';
import NavLink from '../../../components/Button/NavLink';
import { Box } from '../../../components/Box';

const Background = styled('div')`
  width: 100%;
  height: 100%;
  position: fixed;
  background-image: url(static/bg-bubbles.png);
  z-index: 0;
  pointer-events: none;
`;

const Container = styled('div')``;

const NavLinkContainer = styled(Box)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 50px 60px;
`;

const WelcomeSection = ({ ...pros }) => {
  return (
    <Container {...pros}>
      <Background />
      <NavLinkContainer>
        <NavLink href="/blog" />
      </NavLinkContainer>
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
