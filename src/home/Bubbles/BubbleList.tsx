import React, { useEffect, useState } from 'react';
import Bubble, { BubbleConfig } from './Bubble';
import { getRandomInt, helper, Theme } from '../../utils';

export interface Size {
  width: number;
  height: number;
}

interface BubbleListProps {
  size: Size;
  onClickBubble: any;
}

const getTimeProp = (width: number) => {
  const timeRatio = width;
  const timeStep = Math.round(0.5 * width);
  const timeMin = timeRatio - timeStep;
  const timeMax = timeRatio + timeStep;
  return getRandomInt(timeMin, timeMax);
};

const getBubbleProps = ({ width, height }: Size): BubbleConfig => {
  const radius = getRandomInt(5, Math.round(0.13333333333333333 * height), 5);
  const x = getRandomInt(-width / 2, width / 2, 20);
  const y = getRandomInt(-height / 5, 0, 20);
  const opacity = 0.6;

  return { radius, x, y, opacity, fill: `${Theme.colors.main}` };
};

const BubbleList: React.FunctionComponent<BubbleListProps> = ({ size, onClickBubble }) => {
  const [bubbles, setBubbles] = useState<number[]>([]);
  useEffect(() => {
    if (!size.width) return;

    const bubblesLength = Math.floor((size.width / 10575) * 10000);
    setBubbles(helper(0, bubblesLength));
  }, [size.width]);

  return (
    <>
      {bubbles.map(bubbles => {
        return (
          <Bubble
            key={bubbles}
            {...{
              containerSize: size,
              time: getTimeProp(size.width),
              config: getBubbleProps(size),
              onClickBubble: onClickBubble,
            }}
          />
        );
      })}
    </>
  );
};

export default BubbleList;
