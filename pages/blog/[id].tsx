import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled, { css } from 'styled-components';
import { NextSeo } from 'next-seo/lib';
import { mapToViewPosts, POST_FRAGMENT, ViewPost } from './index';
import BlogLayout from '../../src/blog/BlogLayout';
import {
  getProcessor,
  getRandom,
  Hashtag,
  Post,
  QueryPostsArgs,
  Theme,
  withApollo,
} from '../../src/utils';
import media from '../../src/utils/media';
import { Box, Flex, RatioLazyImage, TinySecond } from '../../src/components';
import Pagination, { PaginationSlugs } from '../../src/blog/Pagination';
import { SubHeader, Text, BlogTextLink, List, ListOl, Header } from '../../src/blog/Typography';
import Suggestions from '../../src/blog/Suggestions';
import Link from "next/link"

const cssTextMinusMargin = css`
  margin-top: -${Theme.space.small}px;
  ${media.greaterThan('mobile')`
    
  `}
  
  ${media.greaterThan('tablet')`
    margin-top: -${Theme.space.medium}px;
  `}
  
  ${media.greaterThan('desktop')`
    margin-top: -${Theme.space.regular}px;
  `}
`;
const ContentImage = styled(Box).attrs({
  as: 'img',
  alt: '',
  py: ['small', 'small', 'medium', 'regular'],
})`
  width: 100%;
`;

const components = {
  p: Text,
  h2: SubHeader,
  a: BlogTextLink,
  img: ContentImage,
  ul: List,
  ol: ListOl,
};

const processor = getProcessor(components);

const Container = styled(Flex)`
  flex-direction: column;
  color: ${Theme.colors.black};
  margin: 0 auto;
`;

const ContentContainer = styled(Flex)`
  max-width: 664px;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;  
  padding: ${Theme.space.medium}px ${Theme.space.small}px;
  
  ${media.greaterThan('mobile')`
    
  `}
  
  ${media.greaterThan('tablet')`
    padding: ${Theme.space.regular}px ${Theme.space.xregular}px;
  `}
  
  ${media.greaterThan('desktop')`
    padding: ${Theme.space.xregular}px ${Theme.space.xregular}px;
  `}
`;

const HashtagsText = styled(TinySecond)`
  ${cssTextMinusMargin};
  a {
    text-transform: uppercase;

    &:not(:first-of-type) {
      padding-left: ${Theme.space.medium}px;
    }
  }
`;

const PostContent: React.FunctionComponent<{
  paginationSlugs: PaginationSlugs;
  viewPost: ViewPost;
  suggestionsPosts: ViewPost[];
  host: string;
}> = ({
  viewPost: {
    title,
    description,
    content,
    createdAt,
    updatedAt,
    cover,
    coverPlaceholder,
    wideCover,
    wideCoverPlaceholder,
    slug,
    hashtags = [],
  },
  paginationSlugs,
  suggestionsPosts,
  host,
  ...props
}) => (
  <>
    <NextSeo
      title={`Luck - ${title}`}
      description={description}
      openGraph={{
        title,
        description,
        url: `https://${host}/blog/${slug}`,
        images: [{ url: cover.url }],
        article: {
          publishedTime: createdAt,
          modifiedTime: updatedAt,
          // authors: [authors],
          // section: category.name,
          tags: (hashtags as Hashtag[]).map(({ name }) => name),
        },
      }}
    />
    <Container {...props}>
      <RatioLazyImage
        display={['flex', 'flex', 'none']}
        url={cover.url}
        placeholderUrl={coverPlaceholder.url}
        ratio="69%"
      />
      <RatioLazyImage
        display={['none', 'none', 'flex']}
        url={wideCover.url}
        placeholderUrl={wideCoverPlaceholder.url}
        ratio="34%"
      />
      <ContentContainer>
        <Header mb={['small', 'small', 'medium', 'regular']}>{title}</Header>
        {processor.processSync(content).contents}
        <HashtagsText mb={['regular', 'regular', 'large', 'xlarge']}>
          {(hashtags as Hashtag[]).map(({ name }, index) => (
            <Link href={`/tag/${name.toLowerCase()}`}>
              <BlogTextLink key={`PostContent-${name}-${index}`} href={`/tag/${name.toLowerCase()}`} aria-label={`przejdź do tagu ${name}`}>#{name}</BlogTextLink>
            </Link>
          ))}
        </HashtagsText>
        <Pagination mb={['regular', 'regular', 'large', 'xlarge']} {...paginationSlugs} />
        <Suggestions posts={suggestionsPosts} />
      </ContentContainer>
    </Container>
  </>
);

export const POST_QUERY = gql`
  ${POST_FRAGMENT}
  query getPosts($where: JSON) {
    posts(where: $where) {
      ...Post
    }
    all: posts(limit: 999, sort: "date:desc") {
      ...Post
    }
  }
`;

const getPaginationSlugs = (slug: string, posts: Post[]): PaginationSlugs => {
  const index = posts.findIndex(post => post.slug === slug);

  const nextIndex = index <= 0 ? null : index - 1;
  const previousIndex = index === posts.length - 1 ? null : index + 1;
  console.log(index, nextIndex, previousIndex, posts);

  return {
    next: nextIndex === 0 || !!nextIndex ? posts[nextIndex].slug : null,
    previous: previousIndex ? posts[previousIndex].slug : null,
  };
};

const getSuggestionsPosts = (toMatchPost: Post, posts: Post[]): Post[] => {
  if (!toMatchPost) return [];
  const toMatchHashtags = toMatchPost.hashtags ? toMatchPost.hashtags : [];
  const p = posts.filter(post => post.slug !== toMatchPost.slug);

  const candidatePosts = p.filter(post =>
    (toMatchHashtags as Hashtag[]).some(({ name: toMatchHashtag }) =>
      post.hashtags ? (post.hashtags as Hashtag[]).some(({ name: hashtag }) => hashtag === toMatchHashtag) : false,
    ),
  );

  const getLackedPost = (count: number) => {
    if (p.length < count) {
      return getRandom(p, p.length);
    } else {
      return getRandom(p, count);
    }
  };

  if (candidatePosts.length === 2) {
    return candidatePosts;
  } else if (candidatePosts.length > 2) {
    return getRandom(candidatePosts, 2);
  } else if (candidatePosts.length < 2) {
    const lackCount = 2 - candidatePosts.length;
    return [...candidatePosts, ...getLackedPost(lackCount)];
  } else return [];
};

interface IndexPage<P = { host: string; slug: string; cmsUrl: string; shouldShowDraft: boolean }>
  extends React.FunctionComponent<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
}

const Index: IndexPage = ({ host, slug, cmsUrl, shouldShowDraft }) => {
  const where = { slug };
  const { loading, error, data = { posts: [], all: [] } } = useQuery<
    { posts: Post[]; all: Post[] },
    QueryPostsArgs
  >(POST_QUERY, {
    variables: { where },
  });
  const posts = shouldShowDraft ? data.posts : data.posts.filter(({ isDraft }) => !isDraft);
  const all = shouldShowDraft ? data.all : data.all.filter(({ isDraft }) => !isDraft);

  const viewPost = mapToViewPosts(posts, cmsUrl)[0];
  const paginationSlugs = getPaginationSlugs(slug, all);
  const suggestionsPosts = getSuggestionsPosts(viewPost, all);
  const suggestionsViewPost = mapToViewPosts(suggestionsPosts, cmsUrl);

  if (error) return <div>Error loading users.</div>;
  if (loading) return <div>Loading</div>;

  return (
    <BlogLayout>
      {viewPost && (
        <PostContent
          suggestionsPosts={suggestionsViewPost}
          paginationSlugs={paginationSlugs}
          viewPost={viewPost}
          host={host}
        />
      )}
    </BlogLayout>
  );
};

Index.getInitialProps = async function({ query }) {
  return {
    host: process.env.VIRTUAL_HOST ? process.env.VIRTUAL_HOST : '',
    slug: query.id,
    cmsUrl: process.env.CLIENT_URL ? process.env.CLIENT_URL : '',
    shouldShowDraft: process.env.SHOULD_SHOW_DRAFT === 'true',
  };
};

export default withApollo(Index, {
  // Disable apollo ssr fetching in favour of automatic static optimization
  ssr: true,
});
