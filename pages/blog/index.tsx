import React from 'react';
import { withApollo } from '../../utils/apollo';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { Theme } from '../../utils/theme';
import { Post } from '../../utils/types';
import Card from './Card';
import { Flex } from '../../components/Flex';
import media from '../../utils/media';
import BlogLayout from './BlogLayout';

interface StatelessPage<P = { cmsUrl: string }> extends React.FunctionComponent<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
}

export const ALL_POSTS_QUERY = gql`
  query getPosts {
    posts {
      _id
      title
      content
      description
      slug
      isDraft
      cover {
        url
      }
    }
  }
`;

const Container = styled(Flex)`
  background-color: ${Theme.colors.main};
  color: ${Theme.colors.black};
  flex-wrap: wrap;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 ${Theme.space.medium}px;
  
  ${media.greaterThan('mobile')`
    
  `}
  
  ${media.greaterThan('tablet')`
    
  `}
  
  ${media.greaterThan('desktop')`
    
  `}
`;

const CardContainer = styled(Flex)`
  margin: ${Theme.space.medium}px 0;
  width: 100%;

  ${media.greaterThan('mobile')`
    margin: ${Theme.space.regular}px 0;
    padding-bottom: ${Theme.space.regular}px;
  `} 

  ${media.greaterThan('tablet')`
    margin: 0 ${Theme.space.medium}px;
    width: calc(33% - ${Theme.space.medium * 2}px)
  `} 

  ${media.greaterThan('desktop')`
    margin: 0 ${Theme.space.regular}px;
    width: calc(33% - ${Theme.space.regular * 2}px)
  `};
`;

export const mapToPost = ({ cover, ...post }: Post, cmsUrl: string): Post => {
  cover = cover && { ...cover, url: `${cmsUrl}${cover.url}` };
  return { cover, ...post };
};

const Index: StatelessPage = ({ cmsUrl }) => {
  const { loading, error, data } = useQuery<{ posts: Post[] }>(ALL_POSTS_QUERY);

  if (error) return <div>Error loading users.</div>;
  if (loading) return <div>Loading</div>;

  return (
    <BlogLayout title="Blog | Luck" backgroundColor={Theme.colors.main}>
      <Container>
        {data &&
          data.posts
            .filter(({ isDraft }) => !isDraft)
            .map(post => mapToPost(post, cmsUrl))
            .map(post => (
              <CardContainer>
                <Card key={post._id} {...post} />
              </CardContainer>
            ))}
      </Container>
    </BlogLayout>
  );
};

Index.getInitialProps = async function() {
  return { cmsUrl: process.env.CLIENT_URL ? process.env.CLIENT_URL : '' };
};

export default withApollo(Index, {
  // Disable apollo ssr fetching in favour of automatic static optimization
  ssr: true,
});
