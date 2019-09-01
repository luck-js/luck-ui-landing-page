import React from 'react';
import styled, { keyframes } from 'styled-components';
import Layout from '../components/Layout';

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
`;

const travel = keyframes`
  from { left: 0; }
  to   { left: 640px; }
`;

const bounce = keyframes`
  from, to  {
    bottom: 0;
  }
  50% {
    bottom: 220px;
  }
`;

const Container = styled.div`
  position: relative;
  margin: 1em auto;
  width: 660px;
  height: 240px;
  border: 2px solid #666;
  background: #cff;

  #traveler {
    position: absolute;
    width: 20px;
    height: 240px;

    animation: ${travel} 4.8s linear infinite alternate;
  }

  #bouncer {
    position: absolute;
    width: 20px;
    height: 20px;
    background: red;
    border-radius: 10px;

    animation: ${bounce} 4.2s infinite;
  }
`;

const Index: React.FunctionComponent = () => {
  return (
    <Layout title="Home">
      <Title>Hello Next.js 👋</Title>
      <Container id="stage">
        <div id="traveler">
          <div id="bouncer"></div>
        </div>
      </Container>
    </Layout>
  );
};
export default Index;
