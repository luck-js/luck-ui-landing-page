import React from 'react';
import {NextSeo} from 'next-seo';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Card from '../../src/blog/Card';
import BlogLayout from '../../src/blog/BlogLayout';
import {Post, UploadFile, withApollo} from '../../src/utils';
import {CardsContainer} from "../../src/blog/Card/CardsContainer"

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

export const mapToViewPosts = (
  posts: Post[],
  cmsUrl: string,
): ViewPost[] => {
  return posts
    .filter(isSomeCoverUndefined)
    .map(post => mapCoverUrls(post as ViewPost, cmsUrl));
};

const Index: StatelessPage = ({ cmsUrl, shouldShowDraft }) => {
  const { loading, error, data = { posts: [] } } = useQuery<{ posts: Post[] }>(ALL_POSTS_QUERY);

  const posts = shouldShowDraft ? data.posts : data.posts.filter(({ isDraft }) => !isDraft)
  const viewPosts = mapToViewPosts(posts, cmsUrl);

  if (error) return <div>Error loading users.</div>;
  if (loading) return <div>Loading</div>;

  return (
    <>
      <NextSeo
        title="Luck - blog posty dotyczące aplikacji"
        description="Blog posty związane z aplikacją Luck. Znajdziesz tu podsumowania, najbliższe plany dotyczące rozwoju, ale także i ciekawostki dotyczące Mikołajek"
      />
      <BlogLayout>
        <CardsContainer breakpointCols={3} maxWidth={["none", "none", "962px"]} py={["small", "small", "regular", "xregular"]}>
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
    shouldShowDraft: process.env.SHOULD_SHOW_DRAFT === 'true',
  };
};

export default withApollo(Index, {
  // Disable apollo ssr fetching in favour of automatic static optimization
  ssr: true,
});
