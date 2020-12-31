import React from 'react';
import styled from 'styled-components';
import { ViewPost } from '../../pages/blog';
import Card from '../blog/Card';
import { CardsContainer } from '../blog/Card/CardsContainer';
import Suggestions from '../blog/Suggestions';
import { Box, Separator } from '../components';
import { Canon } from '../components/Typography';
import { Theme } from '../utils';
import media from '../utils/media';

const Container = styled(Box)`
  max-width: 1000px;
  margin: 0 auto;
  color: ${Theme.colors.black};
  text-align: center;
  padding: 0 ${Theme.space.medium}px ${Theme.space.xxlarge}px;
`;

const Header = styled(Canon).attrs({ tag: 'h2' })`
  position: relative;
  line-height: 1.4;
  padding: ${Theme.space.medium}px ${Theme.space.xsmall}px;

  ${media.greaterThan('mobile')`
    padding: ${Theme.space.xregular}px 0;
  `}

  ${Separator} {
    position: absolute;
    bottom: 3px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const BlogPostSection = ({ posts }: { posts: ViewPost[] }) => {

  return (
    <Container>
      <Header mb={['medium', 'medium', 'xregular']}>
        Zajrzyj do naszego bloga <Separator />
      </Header>
      <Suggestions.Container>
        <Suggestions.CardContainer breakpointCols={3}>
          {posts.map((post, index) => (
            <Card key={`${post._id}-${index}`} {...post} />
          ))}
        </Suggestions.CardContainer>
      </Suggestions.Container>
    </Container>
  );
};

Suggestions.Container = styled(Box)``;

Suggestions.CardContainer = styled(CardsContainer)``;

export default BlogPostSection;
