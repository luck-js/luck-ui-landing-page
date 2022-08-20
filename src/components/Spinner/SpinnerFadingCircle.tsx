import React from 'react';
import styled, { css } from 'styled-components';
import { helper, Theme } from '../../utils';
import { Box } from '../Box';

const ANIMATION_DURATION = 1.2;
const CIRCLE_COUNT = 12;
const CIRCLES = helper(0, CIRCLE_COUNT);

export const SpinnerFadingCircle = () => {
  return (
    <SpinnerFadingCircle.Container>
      {CIRCLES.map((index, key) => (
        <SpinnerFadingCircle.Circle key={key} className={`circle-${index}`} />
      ))}
    </SpinnerFadingCircle.Container>
  );
};

function createCSS() {
  const styles = CIRCLES.reduce((previousValue, index) => {
    previousValue += `
      .circle-${index} {
        transform: rotate(${(360 / CIRCLE_COUNT) * index - 1}deg);
      }
      
      .circle-${index}:before  {
        animation-delay: ${-ANIMATION_DURATION + (ANIMATION_DURATION / CIRCLE_COUNT) * index - 1}s;
      }
    `;
    return previousValue;
  }, '');

  return css`
    ${styles}
  `;
}

SpinnerFadingCircle.Container = styled(Box)`
  width: 100%;
  height: 100%;
  position: relative;
  ${createCSS()};
`;
SpinnerFadingCircle.Circle = styled('div')`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;

  &:before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: ${Theme.colors.main};
    border-radius: 100%;
    animation: CircleFadeDelay ${ANIMATION_DURATION}s infinite ease-in-out both;
  }

  @keyframes CircleFadeDelay {
    0%,
    39%,
    100% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
  }
`;
