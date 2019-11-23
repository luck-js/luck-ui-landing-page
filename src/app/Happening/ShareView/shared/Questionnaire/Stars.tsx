import React, { useState } from 'react';
import styled from 'styled-components';
import useHover from '../../../../../utils/useHover';
import { BaseButton } from '../../../../../components/Button';
import { helper, Theme } from '../../../../../utils';
// @ts-ignore
import Star from '../../../../../../static/star.svg';

interface StarsProps {
  count: number;
}

interface StarsComponent extends React.FunctionComponent<StarsProps> {
  Button: any;
}

const Stars: StarsComponent = ({ count }) => {
  const stars = helper(0, count);

  const [hoverStarIndex, setHoverStarIndex] = useState(-1);

  const handleMouseOver = (index: number) => {
    setHoverStarIndex(index);
  };

  const handleMouseOut = () => {
    setHoverStarIndex(-1);
  };

  return (
    <>
      {stars.map(index => {
        let [hoverRef] = useHover(() => handleMouseOver(index), () => handleMouseOut());
        return (
          <Stars.Button
            ref={hoverRef}
            isHover={index <= hoverStarIndex}
            onMouseDown={(e: any) => e.preventDefault()}
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
    opacity: ${props => (props.isHover ? 0.6 : 1)};
    transition: opacity 0.5s;

    path {
      transition: fill 0.5s;
      fill: ${props => (props.isHover ? Theme.colors.mainContrast : Theme.colors.darkMain3)};
    }
  }
`;

export default Stars.Button;
