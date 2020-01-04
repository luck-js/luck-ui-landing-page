import React from 'react';
import styled from 'styled-components';
import { LogoHeading } from '../../components';
import Content from './Content';
import Logo from './Logo';
import InputWithButton from './InputWithButton';
import { BackgroundFooterBubbles } from '../../components/BackgroundFooterBubbles';

const Container = styled('div')`
  height: 100%;
  overflow: hidden;
  position: relative;
`;


const WelcomeSection = (props: any) => {
  return (
    <Container {...props}>
      <Content>
        <Logo src="static/logo-luck.png" />
        <LogoHeading
          pt={['50px', '50px', '50px', '50px']}
          maxHeight={['116px', '116px', '160px', '196px']}
          overflow="hidden"
        >
          Organizacja Mikołajek <br />
          nie była nigdy tak łatwa!
        </LogoHeading>
        <InputWithButton
          pt={['40px', '40px', '50px', '70px']}
          href="./app/happening/new-happening"
          linkAs="./app"
          ariaLabel={`przejdź do aplikacji`}
        />
      </Content>
      <BackgroundFooterBubbles />
    </Container>
  );
};

export default WelcomeSection;
