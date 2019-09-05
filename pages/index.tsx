import React  from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { Layer, Stage } from 'react-konva';
import { getRandomInt, helper } from '../utils/helper';
import Bubble, {BubbleProps} from "../components/Bubble"
import {CONTAINER_HEIGHT, INNER_WIDTH} from "../utils/global"


const Container = styled('div')`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: ${CONTAINER_HEIGHT}px;
  background: transparent;
`;

const getBubbleProps = (): BubbleProps => {
  const radius = getRandomInt(20, 40, 5);
  const x = getRandomInt(-INNER_WIDTH / 2, INNER_WIDTH / 2, 20);
  const y = getRandomInt(0, 60, 20);
  const opacity = 0.6;

  return { radius, x, y, opacity, fill: 'white' };
};

const Index: React.FunctionComponent = () => {
  const bubbles = helper(0, 600);

  return (
    <Layout title="Home">
      <Container>
        <Stage width={INNER_WIDTH} height={CONTAINER_HEIGHT}>
          <Layer>
            {bubbles.map(bubbles => {
              return <Bubble key={bubbles} {...getBubbleProps()} />;
            })}
          </Layer>
        </Stage>
      </Container>
    </Layout>
  );
};
export default Index;
