import React, {Fragment} from "react"
import styled from "styled-components"
import {Theme} from "../../utils"
import {Flex} from "../../components"
// @ts-ignore
import Masonry from 'react-masonry-css';
import { FunctionComponent } from "../../utils/function-component.interface";

interface CardsContainerProps {
  breakpointCols?: number;
  maxWidth: string[];
  py: string[];
  px: string[];
}

interface CardsContainerComponent extends FunctionComponent<CardsContainerProps> {
  Container: any;
  MasonryContainer: any;
  Masonry: any;
}

export const CardsContainer:CardsContainerComponent = ({children, breakpointCols = 2,...props}) => {
  return (
    <Fragment>
      <CardsContainer.Container  display={['flex', 'flex', 'none']} {...props}>
        {children}
      </CardsContainer.Container >
      <CardsContainer.MasonryContainer display={['none', 'none', 'flex']} {...props}>
        <CardsContainer.Masonry
          breakpointCols={{default: breakpointCols}}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {children}
        </CardsContainer.Masonry>
      </CardsContainer.MasonryContainer>
    </Fragment>
  );
};

CardsContainer.Container = styled(Flex)`
  background-color: ${Theme.colors.main};
  color: ${Theme.colors.black};
  flex-wrap: wrap;
  margin: 0 auto;
`;

CardsContainer.MasonryContainer = styled(CardsContainer.Container)`
  .my-masonry-grid {
    width: calc(100% + ${Theme.space.regular}px );
    display: flex;
    margin-left: ${-Theme.space.regular}px; /* gutter size offset */
  }

  .my-masonry-grid_column {
    padding-left: ${Theme.space.regular}px; /* gutter size */
    background-clip: padding-box;
  }

  .my-masonry-grid_column > div {
    margin-bottom: ${Theme.space.regular}px;
  }
`;

CardsContainer.Masonry = styled(Masonry)``
