import React, { Fragment } from 'react';
import { NextSeo } from 'next-seo';
import { withApollo, Theme, Post, UploadFile } from '../../utils';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Card from '../../components/Card';
import { Flex } from '../../components';
import BlogLayout from '../../components/BlogLayout';
import media from '../../utils/media';
// @ts-ignore
import Masonry from 'react-masonry-css';

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
    margin-left: ${-Theme.space.regular / 2}px; /* gutter size offset */
    width: 100%;
  }

  .my-masonry-grid_column {
    padding-left: ${Theme.space.regular}px; /* gutter size */
    background-clip: padding-box;
  }

  .my-masonry-grid_column > div {
    margin-bottom: ${Theme.space.regular}px;
  }
`;

const breakpointCols = {
  default: 3,
};

const CardsContainer: React.FunctionComponent<any> = ({ children, ...props }) => {
  return (
    <Fragment>
      <Container display={['flex', 'flex', 'none']} {...props}>
        {children}
      </Container>
      <MasonryContainer display={['none', 'none', 'flex']} {...props}>
        <Masonry
          breakpointCols={breakpointCols}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {children}
        </Masonry>
      </MasonryContainer>
    </Fragment>
  );
};

interface StatelessPage<P = { cmsUrl: string, shouldShowDraft:boolean }> extends React.FunctionComponent<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
}

export const POST_FRAGMENT = gql`
  fragment Post on Post {
    _id
    title
    description
    content
    slug
    isDraft
    createdAt
    updatedAt
    slug
    cover {
      url
    }
    coverPlaceholder {
      url
    }
    wideCover {
      url
    }
    wideCoverPlaceholder {
      url
    }
    hashtags {
      name
    }
  }
`;

export const ALL_POSTS_QUERY = gql`
  ${POST_FRAGMENT}
  query getPosts {
    posts(limit: 999, sort: "date:desc") {
      ...Post  
    }
  }
`;

export interface ViewPost extends Post {
  cover: UploadFile;
  coverPlaceholder: UploadFile;
  wideCover: UploadFile;
  wideCoverPlaceholder: UploadFile;
}

const isSomeCoverUndefined = ({
  cover,
  coverPlaceholder,
  wideCover,
  wideCoverPlaceholder,
}: Post): boolean => {
  return ![cover, coverPlaceholder, wideCover, wideCoverPlaceholder].some(c => !c);
};

const mapCoverUrls = (
  { cover, coverPlaceholder, wideCover, wideCoverPlaceholder, ...post }: ViewPost,
  cmsUrl: string,
): ViewPost => {
  const mapCoverUrl = (c: any) => ({ ...c, url: `${cmsUrl}${c.url}` });
  cover = mapCoverUrl(cover);
  coverPlaceholder = mapCoverUrl(coverPlaceholder);
  wideCover = mapCoverUrl(wideCover);
  wideCoverPlaceholder = mapCoverUrl(wideCoverPlaceholder);
  return { cover, coverPlaceholder, wideCover, wideCoverPlaceholder, ...post };
};

export const mapToViewPosts = (posts: Post[], cmsUrl: string, shouldShowDraft: boolean):ViewPost[]  => {
  const viewPost = posts
    .filter(isSomeCoverUndefined)
    .map(post => mapCoverUrls(post as ViewPost, cmsUrl))

  return shouldShowDraft ? viewPost : viewPost.filter(({ isDraft }) => !isDraft);
}

const Index: StatelessPage = ({ cmsUrl, shouldShowDraft }) => {
  const { loading, error, data = { posts: [] } } = useQuery<{ posts: Post[] }>(ALL_POSTS_QUERY);

  const viewPosts = mapToViewPosts(data.posts, cmsUrl, shouldShowDraft);

  if (error) return <div>Error loading users.</div>;
  if (loading) return <div>Loading</div>;

  return (
    <>
      <NextSeo
        title="Luck - blog posty dotyczące aplikacji"
        description="Blog posty związane z aplikacją Luck. Znajdziesz tu podsumowania, najbliższe plany dotyczące rozwoju, ale także i ciekawostki dotyczące Mikołajek"
      />
      <BlogLayout>
        <CardsContainer>
          {viewPosts.map((post, index) => (
            <Card key={`${post._id}-${index}`} {...post} />
          ))}
        </CardsContainer>
      </BlogLayout>
    </>
  );
};

Index.getInitialProps = async function() {
  return {
    cmsUrl: process.env.CLIENT_URL ? process.env.CLIENT_URL : '',
    shouldShowDraft: process.env.SHOULD_SHOW_DRAFT === "true"
  };
};

export default withApollo(Index, {
  // Disable apollo ssr fetching in favour of automatic static optimization
  ssr: true,
});
