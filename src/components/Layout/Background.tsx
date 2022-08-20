import styled from 'styled-components';
const path = "/static/bg-bubbles.png"
export const Background = styled('div')`
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(${path});
  z-index: 0;
  pointer-events: none;
`;
