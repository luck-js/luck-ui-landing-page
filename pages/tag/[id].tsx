import BlogLayout from '../../src/blog/BlogLayout';
import BlogListView from '../../src/blog/BlogListView';
import React from 'react';
import { NextSeo } from 'next-seo';
import { gql, useQuery } from '@apollo/client';
import { Post, QueryHashtagsArgs } from '../../src/utils';
import { mapToViewPosts, POST_FRAGMENT } from '../blog';
import Error from 'next/error';
import { GetServerSideProps } from 'next';
import { FunctionComponent } from '../../src/utils/function-component.interface';

const POSTS_FILTERED_QUERY = gql`
  ${POST_FRAGMENT}
  query getPosts($where: JSON) {
    hashtags(where: $where) {
      posts {
        ...Post
      }
    }
  }
`;

interface IndexPage<P = { hashtag: string; cmsUrl: string; shouldShowDraft: boolean }>
  extends FunctionComponent<P> {}

const Index: IndexPage = ({ hashtag, cmsUrl, shouldShowDraft }) => {
  const where = { name: hashtag };
  const {
    loading,
    error,
    data = { hashtags: [{ posts: [] }] },
  } = useQuery<{ hashtags: { posts: Post[] }[] }, QueryHashtagsArgs>(POSTS_FILTERED_QUERY, {
    variables: { where },
  });
  if (error || data.hashtags.length === 0) return <Error statusCode={404} />;
  if (loading) return <div>Loading</div>;
  const posts = shouldShowDraft
    ? data.hashtags[0].posts
    : data.hashtags[0].posts.filter(({ isDraft }) => !isDraft);
  const viewPosts = mapToViewPosts(posts, cmsUrl);
  return (
    <>
      <NextSeo
        title={`Luck - blog posty związane z tagiem ${hashtag}`}
        description={`Znajdziesz tu wszystkie posty, które są powiązane z tagiem ${hashtag}. Piszemy nie tylko o aplikacji na mikołajki. Przeczytasz także pomysły na prezent, albo instrukcje, jak zorganizować mikołajki klasowe.`}
      />
      <BlogLayout>
        <BlogListView posts={viewPosts} />
      </BlogLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      hashtag: query.id,
      cmsUrl: process.env.CLIENT_URL ? process.env.CLIENT_URL : '',
      shouldShowDraft: process.env.SHOULD_SHOW_DRAFT === 'true',
    },
  };
};

export default Index;
