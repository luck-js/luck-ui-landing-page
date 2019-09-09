import styled from 'styled-components';
import Bubbles, { Container as BubblesContainer } from '../../components/Bubbles';
import { CONTAINER_HEIGHT } from '../../utils/global';
import { LogoHeading } from '../../utils/Typography';
import React from 'react';
import Content from './Content';
import Logo from './Logo';
import InputWithButton from './InputWithButton';
import NoSSR from 'react-no-ssr';

const Background = styled('div')`
  width: 100%;
  height: 100%;
  position: fixed;
  background-image: url(static/bg-bubbles.png);
  z-index: 0;
`;

interface WelcomeSectionProps {
  isFontLoaded: boolean;
}

const Container = styled('div')<WelcomeSectionProps>`
  opacity: ${props => (props.isFontLoaded ? 1 : 0)};
  transition: 0.5s;

  ${BubblesContainer} {
    // transform: ${props => (props.isFontLoaded ? 0 : `translateY(${CONTAINER_HEIGHT - 200}px)`)};
   
    transition: transform 30s;
    transition-timing-function: ease-out;
  }
`;
const WelcomeSection = ({ ...pros }: WelcomeSectionProps) => {
  return (
    <Container {...pros}>
      <Background />
      <Content>
        <Logo src="static/logo-shadow.png" />
        <LogoHeading pt={['regular', 'regular', 'large', 'large']}>
          Organizacja Mikołajek nie była nigdy tak łatwa!
        </LogoHeading>
        <InputWithButton
          pt={['regular', 'regular', 'large', 'large']}
          href="https://luck.org.pl/#/happening"
        />
      </Content>
      <NoSSR>
        <Bubbles />
      </NoSSR>
    </Container>
  );
};

export default WelcomeSection;
