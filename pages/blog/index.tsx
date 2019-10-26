import React, {Fragment} from 'react';
import { withApollo, Theme, Post } from '../../utils';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Card from "../../components/Card"
import { Flex } from '../../components';
import BlogLayout from './BlogLayout';
import media from "../../utils/media"
// @ts-ignore
import Masonry from 'react-masonry-css'

const Container = styled(Flex)`
  background-color: ${Theme.colors.main};
  color: ${Theme.colors.black};
  flex-wrap: wrap;
  max-width: 1012px;
  margin: 0 auto;
  padding: ${Theme.space.small}px ${Theme.space.xregular}px;
  
  ${media.greaterThan('mobile')`
    
  `}
  
  ${media.greaterThan('tablet')`
    padding: ${Theme.space.regular}px ${Theme.space.xregular}px;
  `}
  
  ${media.greaterThan('desktop')`
    max-width: 1138px;
    padding: ${Theme.space.xregular}px ${Theme.space.xregular}px;
  `}
`;


const MasonryContainer = styled(Container)`
  .my-masonry-grid {
    display: flex;
    margin-left: ${-Theme.space.regular / 2}px ; /* gutter size offset */
    width: 100%;
  }
  
  .my-masonry-grid_column {
    padding-left: ${Theme.space.regular}px ; /* gutter size */
    background-clip: padding-box;
  }

  .my-masonry-grid_column > div {
    margin-bottom: ${Theme.space.regular}px;
  }
`

const breakpointCols = {
  default: 3,
};

const CardsContainer: React.FunctionComponent<any> = ({children, ...props}) => {
  return (
    <Fragment>
      <Container display={['flex', 'flex', 'none']} {...props}>
        {children}
      </Container>
      <MasonryContainer display={['none', 'none', 'flex']} {...props}>
        <Masonry
          breakpointCols={breakpointCols}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {children}
        </Masonry>
      </MasonryContainer>
    </Fragment>
  )
}


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
      hashtags {
          name
      }
    }
  }
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
        <CardsContainer>
          {data &&
          data.posts
            .filter(({ isDraft }) => !isDraft)
            .map(post => mapToPost(post, cmsUrl))
            .map((post, index) => (
              <Card key={`${post._id}-${index}`} {...post} />
            ))}
        </CardsContainer>
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
