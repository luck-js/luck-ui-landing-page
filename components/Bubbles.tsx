import React from 'react';
import { getRandomInt, helper } from '../utils/helper';
import {
  CONTAINER_HEIGHT,
  INNER_WIDTH,
} from '../utils/global';
import { Layer, Stage } from 'react-konva';
import Bubble, { BubbleProps } from './Bubble';
import styled from 'styled-components';

export const Container = styled('div')`
  position: fixed;
  width: 100%;
  bottom: ${-(CONTAINER_HEIGHT /2)}px ;
  height: ${CONTAINER_HEIGHT}px;
  background: transparent;
`;

//bottom: ${CONTAINER_VISIBLE - CONTAINER_HEIGHT}px;
//height: ${CONTAINER_HEIGHT}px;

const getBubbleProps = (): BubbleProps => {
  const radius = getRandomInt(5, 40, 5);
  const x = getRandomInt(-INNER_WIDTH / 2, INNER_WIDTH / 2, 20);
  // const y = getRandomInt(0, CONTAINER_HEIGHT / 4, 20);
  const y = getRandomInt(-60, 0, 20);
  const opacity = 0.6;

  return { radius, x, y, opacity, fill: 'white' };
};
// export const breakpoints = ["490px", "1040px", "1920px", "3824px"];
const Bubbles: React.FunctionComponent = () => {
  const bubblesLength = Math.floor((INNER_WIDTH / 10575) * 10000);
  // const bubblesLength = 100;
  const bubbles = helper(0, bubblesLength);

  return (
    <Container>
      <Stage width={INNER_WIDTH} height={CONTAINER_HEIGHT}>
        <Layer>
          {bubbles.map(bubbles => {
            return <Bubble key={bubbles} {...getBubbleProps()} />;
          })}
        </Layer>
      </Stage>
    </Container>
  );
};

export default Bubbles;
