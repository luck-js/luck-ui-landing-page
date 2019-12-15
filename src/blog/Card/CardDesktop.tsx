import React, { Fragment } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Theme, Hashtag } from '../../utils';
import { ViewPost } from '../../../pages/blog';
import { TinyText, Trafalgar, Box, RatioLazyImage } from '../../components';

const Container = styled(Box)`
  position: relative;
  cursor: pointer;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);

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
`;

const Hashtags = styled(TinyText)`
  span {
    text-transform: uppercase;

    &:not(:first-of-type) {
      padding-left: ${Theme.space.medium}px;
    }
  }
`;

const Image = styled(RatioLazyImage)`
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
`;

export interface CardDesktopProps extends ViewPost {
  display: any;
}

const CardDesktop: React.FunctionComponent<CardDesktopProps> = ({
  title,
  description,
  slug,
  cover,
  coverPlaceholder,
  hashtags = [],
  ...props
}) => {
  return (
    <Fragment>
      {cover && (
        <Container {...props}>
          <Link href="/blog/[id]" as={`/blog/${slug}`}>
            <Box as="a" href={`/blog/${slug}`} aria-label={`przejdź do ${title}`}>
              <Image url={cover.url} placeholderUrl={coverPlaceholder.url} ratio="69%" />
              <ContentContainer>
                <Hashtags>
                  {(hashtags as Hashtag[]).map(({ name }, index) => (
                    <span key={`CardDesktop-${name}-${index}`}>#{name}</span>
                  ))}
                </Hashtags>
                <Trafalgar tag="h2" pt={['xsmall', 'xsmall', 'xsmall', 'xsmall']}>
                  {title}
                </Trafalgar>
              </ContentContainer>
            </Box>
          </Link>
        </Container>
      )}
    </Fragment>
  );
};

export default CardDesktop;
