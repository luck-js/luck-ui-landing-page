import React, { useState } from 'react';
import styled from 'styled-components';
import useHover from '../../../../../utils/useHover';
import { BaseButton } from '../../../../../components/Button';
import { helper, Theme } from '../../../../../utils';
// @ts-ignore
import Star from '../../../../../../public/static/star.svg';
import { FunctionComponent } from '../../../../../utils/function-component.interface';

interface StarsProps {
  count: number;
  onClick: any;
  isShouldBeFreeze: boolean;
}

interface StarsComponent extends FunctionComponent<StarsProps> {
  Button: any;
}

export const Stars: StarsComponent = ({ count, onClick, isShouldBeFreeze }) => {
  const stars = helper(0, count);

  const [hoverStarIndex, setHoverStarIndex] = useState(-1);

  const handleMouseOver = (index: number) => {
    if (isShouldBeFreeze) return;
    setHoverStarIndex(index);
  };

  const handleMouseOut = () => {
    if (isShouldBeFreeze) return;
    setHoverStarIndex(-1);
  };

  const [activeStarIndex, setActiveStarIndex] = useState(-1);

  const handleOnClick = (index: number) => () => {
    if (isShouldBeFreeze) return;
    setActiveStarIndex((prevState) => (prevState === index ? -1 : index));
    onClick(index);
  };

  return (
    <>
      {stars.map((index) => {
        let [hoverRef] = useHover(
          () => handleMouseOver(index),
          () => handleMouseOut(),
        );
        return (
          <Stars.Button
            key={index}
            ref={hoverRef}
            isHover={index <= hoverStarIndex}
            isActive={index <= activeStarIndex}
            onMouseDown={(e: any) => e.preventDefault()}
            onClick={handleOnClick(index)}
          >
            <Star />
          </Stars.Button>
        );
      })}
    </>
  );
};

Stars.Button = styled(BaseButton)<any>`
  cursor: pointer;
  width: ${Theme.space.small + 36}px;
  height: 36px;
  padding-right: ${Theme.space.small}px;
  &:last-of-type {
    padding-right: 0;
    width: 36px;
  }

  svg {
    height: 100%;
    width: auto;
    opacity: ${(props) => (!props.isHover || props.isActive ? 1 : 0.6)};
    transition: opacity 0.5s;

    path {
      transition: fill 0.5s;
      fill: ${(props) =>
        props.isHover || props.isActive ? Theme.colors.mainContrast : Theme.colors.darkMain3};
    }
  }
`;
