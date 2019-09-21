import React from 'react';
import { getRandomInt } from '../../utils/helper';
import Konva from 'konva';
import { Circle } from 'react-konva';
import { Size } from './Bubbles';
export interface BubbleConfig {
  radius: number;
  opacity: number;
  x: number;
  y: number;
  fill: string;
}
export interface BubbleProps {
  config: BubbleConfig;
  time: number;
  containerSize: Size;
}

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

const Bubble: React.FunctionComponent<BubbleProps> = ({ time, containerSize, config, ...props }) => {
  const startAnimate = (node: any) => {
    if (!node) return;

    const getRandomDirection = () => (Math.random() >= 0.5 ? 1 : -1);
    const duration = getRandomInt(10000, 50000, 100);
    const radius = config.radius;
    const xFramePositionConfig = {
      radius,
      direction: getRandomDirection(),
      amplitude: containerSize.width / 2 - radius,
      period: ((containerSize.width / 4.5) * time * 300) / containerSize.height,
      position: config.x + radius,
    };
    const yFramePositionConfig = {
      radius,
      direction: getRandomDirection(),
      amplitude: containerSize.height / 2 - radius,
      period: ((containerSize.height / 10) * time * 1240) / containerSize.width,
      position: config.y + radius,
    };

    const anim = new Konva.Animation(function(frame: any) {
      const getFramePosition = makeGetFramePosition(frame.time + duration);
      node.x(getFramePosition(xFramePositionConfig));
      node.y(getFramePosition(yFramePositionConfig));
    }, node.getLayer());
    anim.start();
  };

  return <Circle ref={node => startAnimate(node)} {...config} {...props} />;
};

export default Bubble;
