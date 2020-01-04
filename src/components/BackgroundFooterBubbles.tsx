import styled from 'styled-components';
import { BubblesNarrowBackground } from '../app/BubblesNarrowBackground';

export const BackgroundFooterBubbles = styled(BubblesNarrowBackground)`
  z-index: 0;
  background-image: url(/static/bg-footer-bubbles.png);
  pointer-events: none;
  width: 100%;
  height: 192px;
  background-repeat-y: no-repeat;
  /* background-position: bottom; */
  position: absolute;
  bottom: 0;
`;
