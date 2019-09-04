import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { Circle, Layer, Stage } from 'react-konva';
import Konva from 'konva';
import { getRandomInt, helper } from '../utils/helper';
const CONTAINER_HEIGHT = 160;
if (typeof window === 'undefined') {
  // @ts-ignore
  global.window = {};
}
const innerWidth = window.innerWidth;
interface Bubble {
  time: number;
  size: number;
  opacity: number;
  x: number;
  y: number;
  direction: number
  direction2: number
}

const Bubble = ({ time, size, direction, direction2, ...props }: Bubble) => {
  const config = { ...{ fill: 'white', radius: size }, ...props };
  const [node, setNode] = React.useState();
  useEffect(() => {
    if (node) {
      var amplitude = (innerWidth / 2) - size;
      var period = 200 * time;

      var yAmplitude = (CONTAINER_HEIGHT / 2) - size;
      var yPeriod = 30 * time;

      const anim = new Konva.Animation(function(frame: any) {
        // console.log(frame.time )
        node.x(direction * amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + amplitude + props.x + size);
        node.y(direction2 * yAmplitude * Math.sin((frame.time * 2 * Math.PI) / yPeriod) + props.y + yAmplitude + size);
      }, node.getLayer());
      anim.start();

    }
  }, [node]);
  return <Circle ref={node => setNode(node)} {...config} />;
};

const Container = styled('div')`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: ${CONTAINER_HEIGHT}px;
  background: transparent;
`;

const Index: React.FunctionComponent = () => {
  const timeRatio = innerWidth / 2;
  console.log(getRandomInt(timeRatio -3, timeRatio + 3))
  const bubbles = helper(0, 600);

  return (
    <Layout title="Home">
      <Container>
        <Stage width={window.innerWidth} height={CONTAINER_HEIGHT}>
          <Layer>
            {bubbles.map(bubbles => {
              const time = getRandomInt(timeRatio - 15, timeRatio + 15);
              const size = getRandomInt(20, 40);
              const x = getRandomInt(-innerWidth / 2, innerWidth / 2);
              const y = getRandomInt(0, 60);
              const direction = Math.random() >= 0.5 ? 1 : -1
              const direction2 = Math.random() >= 0.5 ? 1 : -1
              const opacity = 0.6;
              return <Bubble key={bubbles} time={time} size={size} x={x} y={y} opacity={opacity} direction={direction} direction2={direction2}/>;
            })}
          </Layer>
        </Stage>
      </Container>
    </Layout>
  );
};
export default Index;
