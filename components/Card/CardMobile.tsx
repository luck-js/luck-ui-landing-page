import React, { Fragment } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Flex } from '../Flex';
import { Trafalgar } from '../Typography';
import RatioContainer from '../../components/RatioContainer';
import { Box } from '../Box';
import { Theme, Post } from '../../utils';

const Container = styled(Flex)`
  margin-bottom: ${Theme.space.small}px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  width: 100%;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const InnerContainer = styled(Flex)`
  position: relative;
  flex-direction: column;
  cursor: pointer;
  width: 100%;

  h3 {
    text-decoration: underline;
    text-decoration-color: transparent;
    transition: text-decoration-color 0.5s, opacity 0.5s;
  }
  &:hover {
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

const ContentContainer = styled(Box)`
  padding: ${Theme.space.medium}px;
  text-align: center;
`;

export interface CardMobileProps extends Post {
  display: any;
}

const CardMobile: React.FunctionComponent<CardMobileProps> = ({
  title,
  description,
  slug,
  cover,
  ...props
}) => (
  <Fragment>
    {cover && (
      <Container {...props}>
        <InnerContainer>
          <Link href={`/blog/${slug}`}>
            <Box as="a" href={`/blog/${slug}`}>
              <ImageContainer ratio="69%">
                <p>{cover.url}</p>
                <Image src={cover.url} alt="" />
              </ImageContainer>
              <ContentContainer>
                <Trafalgar tag="h2">{title}</Trafalgar>
              </ContentContainer>
            </Box>
          </Link>
        </InnerContainer>
      </Container>
    )}
  </Fragment>
);

export default CardMobile;
