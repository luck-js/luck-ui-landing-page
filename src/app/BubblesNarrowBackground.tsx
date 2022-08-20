import styled from 'styled-components';

const path = "/static/bg-narrow-bubbles.png"

export const BubblesNarrowBackground = styled('div')`
  z-index: 0;
  background-image: url(${path});
  pointer-events: none;
`;
