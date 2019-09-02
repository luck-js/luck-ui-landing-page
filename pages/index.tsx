import React from 'react';
import styled, {keyframes} from 'styled-components';
import Layout from '../components/Layout';
import {helper, getRandomInt} from "../utils/helper"

const CONTAINER_HEIGHT = 160;

const makeTravel = (x: number) => keyframes`
  from { left: ${x}%; }
  to   { left: ${x > 0 ? x - 200  : x + 200}%; }
`;

const makeBounce = (y: number) => keyframes`
  from, to  {
    bottom: ${y}px;
  }
  50% {
    bottom: ${y > 0 ? y - CONTAINER_HEIGHT + 20  : y + CONTAINER_HEIGHT - 20}px; 
  }
`;

const Container = styled('div')`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: ${CONTAINER_HEIGHT}px;
  background: transparent;
`;

interface Bubble {
  time: number
  size: number
  opacity: number
  position: {
    x: number;
    y: number;
  }
}

const Bubble = ({ time, ...props}: Bubble) => {
  const travelerTime = time * 100;
  const bounceTime = time * 96;
  return (
    <Bubble.Traveler time={travelerTime} {...props}>
      <Bubble.Bouncer time={bounceTime} {...props}/>
    </Bubble.Traveler>
  );
};

Bubble.Traveler = styled('div')<Bubble>`
  top: ${CONTAINER_HEIGHT / 4}px;
  position: absolute;
  width: ${props => props.size + "px"};
  height: ${CONTAINER_HEIGHT}px;

  animation: ${props => makeTravel(props.position.x)} ${props => props.time + "ms"} linear infinite alternate;
`;

Bubble.Bouncer = styled('div')<Bubble>`
  position: absolute;
  width: ${props => props.size + "px"};
  height: ${props => props.size + "px"};
  background: white;
  opacity: ${props => props.opacity * 1};
  border-radius: 50%;

  animation: ${props => makeBounce(props.position.y)} ${props => props.time + "ms"} infinite;
`;

const Index: React.FunctionComponent = () => {
  if (typeof window === 'undefined') {
    // @ts-ignore
    global.window = {}
  }
  const timeRatio = window.innerWidth / 18;
  const bubbles = helper(0, 1000)
  return (
    <Layout title="Home">
      <Container>
        {
          bubbles.map(bubbles => {
            const time = getRandomInt(timeRatio - 6, timeRatio + 6)
            const size = getRandomInt(40, 60);
            const position = {
              x: getRandomInt(-100, 100),
              y: getRandomInt(-CONTAINER_HEIGHT + 20, CONTAINER_HEIGHT - 20),
            }
            const opacity = getRandomInt(60, 100) / 100
            return <Bubble key={bubbles} time={time} size={size} position={position} opacity={opacity} />
          })
        }
      </Container>
    </Layout>
  );
};
export default Index;
