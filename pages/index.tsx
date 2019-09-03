import React from 'react';
import styled, {keyframes} from 'styled-components';
import Layout from '../components/Layout';
import { helper, getRandomInt } from '../utils/helper';

const CONTAINER_HEIGHT = 160;
if (typeof window === 'undefined') {
  // @ts-ignore
  global.window = {};
}
const innerWidth = window.innerWidth;

const makeTravel = (x: number) => keyframes`
  from { transform: translateX(${x > 0 ? x : x + innerWidth}px); }
  to { transform: translateX(${x < 0 ? x : x + innerWidth}px); }
`;

const makeBounce = (y: number) => keyframes`
  from, to  {
    transform: translateY(${y}px);
  }
  50% {
    transform: translateY(${CONTAINER_HEIGHT}px);
  }
`;

const Container = styled('svg')`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: ${CONTAINER_HEIGHT}px;
  background: transparent;
`;

interface Bubble {
  time: number;
  size: number;
  opacity: number;
  position: {
    x: number;
    y: number;
  };
}

const Bubble = ({ time, ...props }: Bubble) => {
  const travelerTime = time * 100;
  const bounceTime = time * 96;
  return (
    <Bubble.Traveler time={travelerTime} {...props}>
      <Bubble.Bouncer time={bounceTime} {...props}/>
    </Bubble.Traveler>
  );
};
//
Bubble.Traveler = styled('g')<Bubble>`
  animation: ${props => makeTravel(props.position.x)} ${props => props.time + 'ms'} linear infinite
    alternate;
`;

Bubble.Bouncer = styled('circle')<any>`
  fill: white;
  fill-opacity: ${props => props.opacity};
  r: ${props => props.size / 2};
  cy: ${props => props.position.y}px;
  animation: ${props => makeBounce(props.position.y)} ${props => props.time + "ms"} infinite;
`;

const Index: React.FunctionComponent = () => {
  const timeRatio = innerWidth / 10;
  const bubbles = helper(0, 1000);
  return (
    <Layout title="Home">
      <Container width="100%" height={`${CONTAINER_HEIGHT}px`}>


        {bubbles.map(bubbles => {
          const time = getRandomInt(timeRatio - 6, timeRatio + 6);
          const size = getRandomInt(40, 60);
          const position = {
            x: getRandomInt(-200, innerWidth + 200),
            y: getRandomInt(size, CONTAINER_HEIGHT),
          };
          const opacity = getRandomInt(60, 100) / 100;
          return (
            <Bubble key={bubbles} time={time} size={size} position={position} opacity={opacity} />
          );
        })}
      </Container>
    </Layout>
  );
};
export default Index;
