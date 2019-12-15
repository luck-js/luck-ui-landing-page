import React, { Fragment } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Theme } from '../../utils';
import { ViewPost } from '../../../pages/blog';
import { Box, Flex, Trafalgar, RatioLazyImage } from '../../components';

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

  h2 {
    text-decoration: underline;
    text-decoration-color: transparent;
    transition: text-decoration-color 0.5s, opacity 0.5s;
  }
  &:hover {
    h2 {
      opacity: 0.8;
      text-decoration-color: ${Theme.colors.black};
    }
  }
`;

const ContentContainer = styled(Box)`
  padding: ${Theme.space.medium}px;
  text-align: center;
`;

const Image = styled(RatioLazyImage)`
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
`;

export interface CardMobileProps extends ViewPost {
  display: any;
}

const CardMobile: React.FunctionComponent<CardMobileProps> = ({
  title,
  description,
  slug,
  cover,
  coverPlaceholder,
  ...props
}) => (
  <Fragment>
    {cover && (
      <Container {...props}>
        <InnerContainer>
          <Link href="/blog/[id]" as={`/blog/${slug}`}>
            <Box as="a" href={`/blog/${slug}`} aria-label={`przejdź do ${title}`}>
              <Image url={cover.url} placeholderUrl={coverPlaceholder.url} ratio="69%" />
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
