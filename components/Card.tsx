import styled from 'styled-components';
import { Flex } from '../utils/Flex';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { SmallText, Trafalgar } from '../utils/Typography';
import { Post } from '../utils/types';
import RatioContainer from './RatioContainer';
import { Theme } from '../utils/Theme';
import {Box} from "../utils/Box"

const Container = styled(Flex)`
  position: relative;
  flex-direction: column;
    cursor: pointer;
  p,
  h3 {
    text-decoration: underline;
    text-decoration-color: transparent;
    transition: text-decoration-color 0.5s, opacity 0.5s;
  }
  &:hover {
    p,
    h3 {
      opacity: 0.8;
      text-decoration-color: ${Theme.colors.black};
    }
  }
`;

const Image = styled('img')`
  width: 100%;
  height: auto;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;
const ImageContainer = styled(RatioContainer)`
  position: relative;
`;

const Card: React.FunctionComponent<Post> = ({ title, description, slug, cover, ...props }) => (
  <Container {...props}>
    {cover && (
      <Fragment>
        <Link href={`/blog/${slug}`} >
          <Box>
            <ImageContainer ratio="62.5%">
              <p>{cover.url}</p>
              <Image src={cover.url} alt="" />
            </ImageContainer>
            <Trafalgar tag="h3" pt={['regular', 'regular', 'xregular', 'xregular']}>
              {title}
            </Trafalgar>
            <SmallText pt={['small', 'small', 'medium', 'medium']}>{description}</SmallText>
          </Box>
        </Link>
      </Fragment>
    )}
  </Container>
);

export default Card;
