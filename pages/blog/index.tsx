import React from 'react';
import { NextSeo } from 'next-seo';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import BlogLayout from '../../src/blog/BlogLayout';
import { Post, UploadFile } from '../../src/utils';
import BlogListView from '../../src/blog/BlogListView';
import Error from 'next/error';

interface StatelessPage<P = { cmsUrl: string; shouldShowDraft: boolean }>
  extends React.FunctionComponent<P> {
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
  return ![cover, coverPlaceholder, wideCover, wideCoverPlaceholder].some((c) => !c);
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

export const mapToViewPosts = (posts: Post[], cmsUrl: string): ViewPost[] => {
  return posts.filter(isSomeCoverUndefined).map((post) => mapCoverUrls(post as ViewPost, cmsUrl));
};

const Index: StatelessPage = ({ cmsUrl, shouldShowDraft }) => {
  const { loading, error, data = { posts: [] } } = useQuery<{ posts: Post[] }>(ALL_POSTS_QUERY);

  const posts = shouldShowDraft ? data.posts : data.posts.filter(({ isDraft }) => !isDraft);
  const viewPosts = mapToViewPosts(posts, cmsUrl);

  if (error) return <Error statusCode={404} />;
  if (loading) return <div>Loading</div>;

  return (
    <>
      <NextSeo
        title="Luck - artykuły dotyczące aplikacji na mikołajki"
        description="Wszystkie Artykłu związane z aplikacją na mikołajki Luck. Przeczytasz tu nasze aktualności w roku 2019, podsumowanie i plany dotyczące aplikacji, ciekawostki dotyczące Mikołajek oraz między innymi instrukcję, jak z organizować mikołajki klasowe dzięki aplikacji Lcuk"
      />
      <BlogLayout>
        <BlogListView posts={viewPosts} />
      </BlogLayout>
    </>
  );
};

Index.getInitialProps = async function () {
  return {
    cmsUrl: process.env.CLIENT_URL ? process.env.CLIENT_URL : '',
    shouldShowDraft: process.env.SHOULD_SHOW_DRAFT === 'true',
  };
};

export default Index;
