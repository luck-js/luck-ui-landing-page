import React from 'react';
import styled, { keyframes } from 'styled-components';
import Layout from '../components/Layout';

const travel = keyframes`
  from { left: 0; }
  to   { left: 100%; }
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
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 240px;
  background: transparent;

  #traveler {
    top: 60px;
    position: absolute;
    width: 20px;
    height: 240px;

    animation: ${travel} 4.8s linear infinite alternate;
  }

  #bouncer {
    position: absolute;
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 10px;

    animation: ${bounce} 4.2s infinite;
  }
`;

const Index: React.FunctionComponent = () => {
  return (
    <Layout title="Home">
      <Container id="stage">
        <div id="traveler">
          <div id="bouncer"></div>
        </div>
      </Container>
    </Layout>
  );
};
export default Index;
