import React from 'react';
import styled, { css } from 'styled-components';
import {helper, Theme} from '../utils';
import {Box} from "./Box"

const ANIMATION_DURATION = 1.2;
const CIRCLE_COUNT = 12;
const CIRCLES = helper(0, CIRCLE_COUNT);

export const Spinner = () => {
  return (
    <Spinner.Container>
      {CIRCLES.map(index => (
        <Spinner.Circle className={`circle-${index}`} />
      ))}
    </Spinner.Container>
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

  console.log(styles)

  return css`
    ${styles}
  `;
}

Spinner.Container = styled(Box)`
  width: 100%;
  height: 100%;
  position: relative;
  ${createCSS()};
`
Spinner.Circle = styled('div')`
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
    animation: dk-circleFadeDelay ${ANIMATION_DURATION}s infinite ease-in-out both;
  }

  @keyframes dk-circleFadeDelay {
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
