import React from 'react';
import { withApollo } from '../../utils/Apollo';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { Theme } from '../../utils/Theme';
import { Post } from '../../utils/types';
import Card from '../../components/Card';
import { Flex } from '../../utils/Flex';
import media from '../../utils/media';
import BlogLayout from "../../components/BlogLayout"

interface StatelessPage<P = {}> extends React.FunctionComponent<P> {
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

const Index: StatelessPage = () => {
  const { loading, error, data } = useQuery<{ posts: Post[] }>(ALL_POSTS_QUERY);

  if (error) return <div>Error loading users.</div>;
  if (loading) return <div>Loading</div>;

  console.log(data);

  return (
    <BlogLayout title="Blog | Luck" backgroundColor={Theme.colors.main}>
      <Container>
        {data &&
          [...data.posts, ...data.posts, ...data.posts, ...data.posts, ...data.posts, ...data.posts]
            .filter(({ isDraft }) => !isDraft)
            .map((post, index) => (
              <CardContainer>
                <Card key={`${post._id}/${index}`} {...post} />
              </CardContainer>
            ))}
      </Container>
    </BlogLayout>
  );
};

export default withApollo(Index, {
  // Disable apollo ssr fetching in favour of automatic static optimization
  ssr: true,
});
