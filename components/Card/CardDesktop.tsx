import React, { Fragment } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { TinyText, Trafalgar } from '../Typography';
import RatioContainer from '../../components/RatioContainer';
import { Box } from '../Box';
import { Theme, Hashtag, Post } from '../../utils';

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

const Hashtags = styled(TinyText)`
  span {
    text-transform: uppercase;

    &:not(:first-of-type) {
      padding-left: ${Theme.space.medium}px;
    }
  }
`;


export interface CardDesktopProps extends Post {
  display: any;
}

const CardDesktop: React.FunctionComponent<CardDesktopProps> = ({
  title,
  description,
  slug,
  cover,
  hashtags = [],
  ...props
}) => (
  <Fragment>
    {cover && (
      <Container {...props}>
        <Link href={`/blog/${slug}`}>
          <Box as="a" href={`/blog/${slug}`} aria-label={`przejdź do ${title}`}>
              <ImageContainer ratio="69%">
                <p>{cover.url}</p>
                <Image src={cover.url} alt="" />
              </ImageContainer>
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

export default CardDesktop;
