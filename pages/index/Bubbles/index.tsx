import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import useComponentSize from '@rehooks/component-size';
//TODO: add react-konva as lazy
import { Layer, Stage } from 'react-konva';
import { Theme } from '../../../utils';
import BubbleList, { Size } from './BubbleList';

const CONTAINER_HEIGHTS = [200, 250, 300];

interface IndexProps {
  handleClickBubble: any;
}

export const Container = styled('div')<Size>`
  position: absolute;
  width: 100%;
  bottom: ${props => (props.height ? `${-(props.height / 2)}px` : 0)};
  height: ${props => (props.height ? `${props.height}px` : 0)};
  background: transparent;
`;

const Index: React.FunctionComponent<IndexProps> = ({ handleClickBubble, ...props }) => {
  let containerRef = useRef(null);
  let { width } = useComponentSize(containerRef);

  const [size, setSize] = useState();
  useEffect(() => {
    if (!width) return;

    const breakpointIndex = Theme.breakpoints.findIndex(
      breakpoint => window.innerWidth < parseInt(breakpoint),
    );
    const height = CONTAINER_HEIGHTS[breakpointIndex]
      ? CONTAINER_HEIGHTS[breakpointIndex]
      : CONTAINER_HEIGHTS[CONTAINER_HEIGHTS.length - 1];
    setSize({ width, height });
  }, [width]);

  return (
    <Container ref={containerRef} {...size} {...props}>
      {size ? (
        <Stage {...size}>
          <Layer>
            <BubbleList handleClickBubble={handleClickBubble} size={size} />
          </Layer>
        </Stage>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default Index;
