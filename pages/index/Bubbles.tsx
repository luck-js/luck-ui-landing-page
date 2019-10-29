import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
//TODO: add react-konva as lazy
import { Layer, Stage } from 'react-konva';
import Bubble, { BubbleConfig } from './Bubble';
import { getRandomInt, helper, Theme } from '../../utils';

const CONTAINER_HEIGHTS = [200, 250, 300];

export interface Size {
  width: number;
  height: number;
}

export interface BubblesProps {
  handleClickBubble: any;
}


export const Container = styled('div')<Size>`
  position: fixed;
  width: 100%;
  bottom: ${props => (props.height ? `${-(props.height / 2)}px` : 0)};
  height: ${props => (props.height ? `${props.height}px` : 0)};
  background: transparent;
`;

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
  const y = getRandomInt(- height / 5, 0, 20);
  const opacity = 0.6;

  return { radius, x, y, opacity, fill: 'white' };
};

const Bubbles: React.FunctionComponent<BubblesProps> = ({ handleClickBubble, ...props }) => {
  const containerRef = useRef<{offsetWidth: number}>(null);
  //TODO: to utils.js
  const [containerWidth, setContainerWidth] = useState();

  useEffect(() => {
    const reflow = () => {
      if(!containerRef.current) return
      setContainerWidth(containerRef.current.offsetWidth)
    };

    reflow()
    window.addEventListener('resize', reflow, true);
    return () => window.removeEventListener('resize', reflow, true);
  }, []);

  //TODO: break size & bubbles to separate effects
  const [bubbles, setBubbles] = useState<number[]>([]);
  const [size, setSize] = useState();

  useEffect(() => {
    if(!containerWidth) return
    const breakpointIndex = Theme.breakpoints.findIndex(
      breakpoint => window.innerWidth < parseInt(breakpoint),
    );
    const height = CONTAINER_HEIGHTS[breakpointIndex]
      ? CONTAINER_HEIGHTS[breakpointIndex]
      : CONTAINER_HEIGHTS[CONTAINER_HEIGHTS.length - 1];
    setSize({ width: containerWidth, height });

    const bubblesLength = Math.floor((containerWidth / 10575) * 10000);
    setBubbles(helper(0, bubblesLength))
  }, [containerWidth]);

  return (
    <Container ref={containerRef} {...size} {...props}>
      {size ? (
        <Stage {...size}>
          <Layer>
            {bubbles.map(bubbles => {
              return (
                <Bubble
                  key={bubbles}
                  {...{
                    containerSize: size,
                    time: getTimeProp(size.width),
                    config: getBubbleProps(size),
                    handleClickBubble: handleClickBubble,
                  }}
                />
              );
            })}
          </Layer>
        </Stage>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default Bubbles;
