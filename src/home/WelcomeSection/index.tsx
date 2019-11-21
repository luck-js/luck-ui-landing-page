import React from 'react';
import styled from 'styled-components';
import { LogoHeading } from '../../components';
import Content from './Content';
import Logo from './Logo';
import InputWithButton from './InputWithButton';
import dynamic from 'next/dynamic';
const Bubbles = dynamic(() => import('../Bubbles'), { ssr: false });

export interface WelcomeSectionProps {
  onClickBubble: any;
}

const Container = styled('div')`
  height: 100%;
  overflow: hidden;
  position: relative;
`;

const WelcomeSection = ({ onClickBubble, ...pros }: WelcomeSectionProps) => {

  return (
    <Container {...pros}>
      <Content>
        <Logo src="static/logo-luck.png" />
        <LogoHeading pt={['50px', '50px', '50px', '50px']} maxHeight={['116px', '116px', '160px', '196px']} overflow="hidden">
          Organizacja Mikołajek <br />
          nie była nigdy tak łatwa!
        </LogoHeading>
        <InputWithButton
          pt={['40px', '40px', '50px', '70px']}
          href="./app/happening"
          linkAs="./app"
          ariaLabel={`przejdź do aplikacji`}
        />
      </Content>
      <Bubbles onClickBubble={onClickBubble} />
    </Container>
  );
};

export default WelcomeSection;
