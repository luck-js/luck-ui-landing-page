import styled from 'styled-components';
import { LogoHeading } from '../../utils/Typography';
import Bubbles from '../../components/Bubbles';
import React from 'react';
import Content from './Content';
import Logo from './Logo';
import InputWithButton from './InputWithButton';
import Link from 'next/link';
import { Button } from '../../utils/Button/Button';

const Background = styled('div')`
  width: 100%;
  height: 100%;
  position: fixed;
  background-image: url(static/bg-bubbles.png);
  z-index: -1;
`;

interface WelcomeSectionProps {
  isFontLoaded: boolean;
}

const Container = styled('div')<WelcomeSectionProps>`
  opacity: ${props => (props.isFontLoaded ? 1 : 0)};
  transition: 0.5s;
`;

const NavLink = ({ ...props }: { href: string }) => {
  return (
    <NavLink.Button>
      <Link {...props}>Blog</Link>
    </NavLink.Button>
  );
};

NavLink.Button = styled(Button)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 50px 60px;
`;

const WelcomeSection = ({ ...pros }: WelcomeSectionProps) => {
  return (
    <Container {...pros}>
      <NavLink href="/blog" />
      <Background />
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
