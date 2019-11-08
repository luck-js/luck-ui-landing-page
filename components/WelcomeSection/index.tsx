import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {LogoHeading, Navigation} from '../index';
import Content from './Content';
import Logo from './Logo';
import InputWithButton from './InputWithButton';
import dynamic from "next/dynamic";
const Bubbles = dynamic(() => import("../Bubbles"), {ssr: false});

export interface WelcomeSectionProps {
  handleClickBubble: any;
}

const Background = styled('div')`
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(static/bg-bubbles.png);
  z-index: 0;
  pointer-events: none;
`;

const Container = styled('div')<{height: number}>`
  height: ${props => (props.height ? `${props.height}px` : `100%`)};
  overflow: hidden;
  position: relative;
`;

const  WelcomeSection = ({ handleClickBubble, ...pros }: WelcomeSectionProps) => {
  const [height, setHeight] = useState<number>(0)
  useEffect(() => {
    setHeight(window.innerHeight)
  },[])

  return (
    <Container height={height} {...pros}>
      <Background />
      <Navigation />
      <Content>
        <Logo src="static/logo-luck.png" />
        <LogoHeading pt={['50px', '50px', '50px', '50px']}>
          Organizacja Mikołajek <br/>
          nie była nigdy tak łatwa!
        </LogoHeading>
        <InputWithButton
          pt={['40px', '40px', '50px', '70px']}
          href="./app/happening"
          linkAs="./app"
          ariaLabel={`przejdź do aplikacji`}
        />
      </Content>
      <Bubbles handleClickBubble={handleClickBubble} />
    </Container>
  );
};

export default WelcomeSection;
