import React from 'react';
import { gql, useQuery } from '@apollo/client';
import styled, { css } from 'styled-components';
import { NextSeo } from 'next-seo';
import { mapToViewPosts, POST_FRAGMENT, ViewPost } from './index';
import BlogLayout from '../../src/blog/BlogLayout';
import { getProcessor, getRandom, Hashtag, Post, QueryPostsArgs, Theme } from '../../src/utils';
import media from '../../src/utils/media';
import { Box, Flex, RatioLazyImage, TinySecond } from '../../src/components';
import Pagination, { PaginationSlugs } from '../../src/blog/Pagination';
import { SubHeader, Text, BlogTextLink, List, ListOl, Header } from '../../src/blog/Typography';
import Suggestions from '../../src/blog/Suggestions';
import Error from 'next/error';
import { GetServerSideProps } from 'next';
import { FunctionComponent } from '../../src/utils/function-component.interface';

const cssTextMinusMargin = css`
  margin-top: -${Theme.space.small}px;
  ${media.greaterThan('mobile')`
    
  `}

  ${media.greaterThan('tablet')`
    margin-top: -${Theme.space.medium}px;
  `}
  
  ${media.greaterThan('desktop')`
    margin-top: -${Theme.space.medium}px;
  `}
`;
const ContentImage = styled(Box).attrs({
  as: 'img',
  alt: '',
  py: ['small', 'small', 'medium', 'medium'],
})`
  width: 100%;
`;

const BanerBox = styled(Box).attrs({
  px: ['small', 'small', 'medium', 'medium'],
  py: ['regular', 'regular', 'xregular', 'xregular'],
})`
  background-color: ${Theme.colors.darkMain2};
  border-bottom: 1px solid ${Theme.colors.darkMain3};
  border-top: 1px solid ${Theme.colors.darkMain3};
`;

const components = {
  p: Text,
  h2: SubHeader,
  a: BlogTextLink,
  img: ContentImage,
  ul: List,
  ol: ListOl,
  baner: BanerBox,
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
    max-width: 784px;
    padding: ${Theme.space.regular}px ${Theme.space.xregular}px;
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

const PostContent: FunctionComponent<{
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
        <Header mb={['small', 'small', 'medium', 'medium']}>{title}</Header>
        {processor.processSync(content).result}
        <HashtagsText mb={['regular', 'regular', 'large', 'large']}>
          {(hashtags as Hashtag[]).map(({ name }, index) => (
            <BlogTextLink
              key={`PostContent-${name}-${index}`}
              href={`/tag/${name}`}
              aria-label={`przejdź do tagu ${name}`}
            >
              #{name}
            </BlogTextLink>
          ))}
        </HashtagsText>
        <Pagination mb={['regular', 'regular', 'large', 'large']} {...paginationSlugs} />
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
  const index = posts.findIndex((post) => post.slug === slug);

  const nextIndex = index <= 0 ? null : index - 1;
  const previousIndex = index === posts.length - 1 ? null : index + 1;

  return {
    next: nextIndex === 0 || !!nextIndex ? posts[nextIndex].slug : null,
    previous: previousIndex ? posts[previousIndex].slug : null,
  };
};

const getSuggestionsPosts = (toMatchPost: Post, posts: Post[]): Post[] => {
  if (!toMatchPost) return [];
  const toMatchHashtags = toMatchPost.hashtags ? toMatchPost.hashtags : [];
  const p = posts.filter((post) => post.slug !== toMatchPost.slug);

  const candidatePosts = p.filter((post) =>
    (toMatchHashtags as Hashtag[]).some(({ name: toMatchHashtag }) =>
      post.hashtags
        ? (post.hashtags as Hashtag[]).some(({ name: hashtag }) => hashtag === toMatchHashtag)
        : false,
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
    const lackedPosts = getLackedPost(2).filter(
      (lackedPost) =>
        !candidatePosts.some((candidatePost) => candidatePost.slug === lackedPost.slug),
    );
    return [...candidatePosts, ...lackedPosts].slice(0, 2);
  } else return [];
};

interface IndexPage<P = { host: string; slug: string; cmsUrl: string; shouldShowDraft: boolean }>
  extends FunctionComponent<P> {}

const Index: IndexPage = ({ host, slug, cmsUrl, shouldShowDraft }) => {
  const where = { slug };
  const {
    loading,
    error,
    data = { posts: [], all: [] },
  } = useQuery<{ posts: Post[]; all: Post[] }, QueryPostsArgs>(POST_QUERY, {
    variables: { where },
  });
  const posts = shouldShowDraft ? data.posts : data.posts.filter(({ isDraft }) => !isDraft);
  const all = shouldShowDraft ? data.all : data.all.filter(({ isDraft }) => !isDraft);

  const viewPost = mapToViewPosts(posts, cmsUrl)[0];
  const paginationSlugs = getPaginationSlugs(slug, all);
  const suggestionsPosts = getSuggestionsPosts(viewPost, all);
  const suggestionsViewPost = mapToViewPosts(suggestionsPosts, cmsUrl);

  if (error) return <Error statusCode={404} />;
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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      host: process.env.VIRTUAL_HOST ? process.env.VIRTUAL_HOST : '',
      slug: query.id,
      cmsUrl: process.env.CLIENT_URL ? process.env.CLIENT_URL : '',
      shouldShowDraft: process.env.SHOULD_SHOW_DRAFT === 'true',
    },
  };
};

export default Index;
