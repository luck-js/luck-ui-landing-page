import React from 'react';
import { getRandomInt } from '../utils/helper';
import Konva from 'konva';
import { Circle } from 'react-konva';
import { CONTAINER_HEIGHT, INNER_WIDTH } from '../utils/global';
export interface BubbleProps {
  radius: number;
  opacity: number;
  x: number;
  y: number;
  fill: string;
}

const timeRatio = INNER_WIDTH;
const timeStep = Math.round(0.5 * INNER_WIDTH);
const timeMin = timeRatio - timeStep;
const timeMax = timeRatio + timeStep;

const makeGetFramePosition = (frameTime: any) => ({
  direction,
  amplitude,
  position,
  radius,
  period,
}: any) =>
  direction * (amplitude / 2) * Math.sin((frameTime * 2 * Math.PI) / period) +
  amplitude +
  position +
  radius;

const Bubble: React.FunctionComponent<BubbleProps> = ({ ...props }) => {
  const startAnimate = (node: any) => {
    if (!node) return;

    const getRandomDirection = () => (Math.random() >= 0.5 ? 1 : -1);
    const time = getRandomInt(timeMin, timeMax);
    const duration = getRandomInt(10000, 50000, 100);
    const radius = props.radius;
    const xFramePositionConfig = {
      radius,
      direction: getRandomDirection(),
      amplitude: INNER_WIDTH / 2 - radius,
      period: ((INNER_WIDTH / 4.5 ) * time * 300) / CONTAINER_HEIGHT,
      position: props.x + radius,
    };
    const yFramePositionConfig = {
      radius,
      direction: getRandomDirection(),
      amplitude: CONTAINER_HEIGHT / 2 - radius,
      period: ((CONTAINER_HEIGHT / 10) * time * 1240) / INNER_WIDTH,
      position: props.y + radius,
    };

    const anim = new Konva.Animation(function(frame: any) {
      const getFramePosition = makeGetFramePosition(frame.time + duration);
      node.x(getFramePosition(xFramePositionConfig));
      node.y(getFramePosition(yFramePositionConfig));
    }, node.getLayer());
    anim.start();
  };

  return <Circle ref={node => startAnimate(node)} {...props} />;
};

export default Bubble;
