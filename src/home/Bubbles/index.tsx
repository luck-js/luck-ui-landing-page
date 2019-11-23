import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import useComponentSize from '@rehooks/component-size';
import { Layer, Stage } from 'react-konva';
import { Theme } from '../../utils';
import BubbleList, { Size }   from './BubbleList';
import {NAVIGATION_DESKTOP_HEIGHT, NAVIGATION_HEIGHT} from '../../components';

interface ContainerStyleMap {
  height: number;
  paddingBottom: number;
}

const CONTAINER_HEIGHTS = [200, 250, 300];

const CONTAINER_STYLE_MAP = [
  {
    height: CONTAINER_HEIGHTS[0],
    paddingBottom: (CONTAINER_HEIGHTS[0] - NAVIGATION_HEIGHT) / 2,
  },
  {
    height: CONTAINER_HEIGHTS[1],
    paddingBottom: (CONTAINER_HEIGHTS[1] - NAVIGATION_HEIGHT) / 2,
  },
  {
    height: CONTAINER_HEIGHTS[2],
    paddingBottom: (CONTAINER_HEIGHTS[2] - NAVIGATION_DESKTOP_HEIGHT) / 2,
  },
];

interface IndexProps {
  onClickBubble: any;
}

export const Container = styled('div')<{styleMap: ContainerStyleMap | undefined}>`
  position: absolute;
  width: 100%;
  left:0;
  bottom: ${props => (props.styleMap ? `${-props.styleMap.paddingBottom}px` : 0)};
  height: ${props => (props.styleMap ? `${props.styleMap.height}px` : 0)};
  background: transparent;
  opacity: ${props => (props.styleMap ? 1 : 0)};
  transition: opacity 0.5s;
`;

const Index: React.FunctionComponent<IndexProps>  = React.memo(({ onClickBubble, ...props }) => {
  let containerRef = useRef(null);
  let { width } = useComponentSize(containerRef);

  const [size, setSize] = useState<Size>();
  const [styleMap, setStyleMap] = useState<ContainerStyleMap>();
  useEffect(() => {
    if (!width) return;

    const breakpointIndex = Theme.breakpoints.findIndex(
      breakpoint => window.innerWidth < parseInt(breakpoint),
    );
    const containerStyleMap = CONTAINER_STYLE_MAP[breakpointIndex]
      ? CONTAINER_STYLE_MAP[breakpointIndex]
      : CONTAINER_STYLE_MAP[CONTAINER_STYLE_MAP.length - 1];
    setSize({ width, height: containerStyleMap.height });
    setStyleMap(containerStyleMap)


  }, [width]);

  return (
    <Container ref={containerRef} styleMap={styleMap} {...props}>
      {size ? (
        <Stage {...size}>
          <Layer>
            <BubbleList onClickBubble={onClickBubble} size={size} />
          </Layer>
        </Stage>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
});

export default Index;
