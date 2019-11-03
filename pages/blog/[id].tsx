import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { NextSeo } from 'next-seo/lib';
import {MediumText, Canon, Flex, TinySecond, List, RatioLazyImage, Trafalgar} from '../../components';
import BlogLayout from './BlogLayout';
import { mapToViewPosts, POST_FRAGMENT, ViewPost } from './index';
import { withApollo, getProcessor, Theme, Post, QueryPostsArgs, Hashtag } from '../../utils';
import media from '../../utils/media';

const ContentImage = styled('img').attrs({ alt: '' })`
  width: 100%;
`;

const Text = styled(MediumText).attrs({
  mt: ['small', 'small', 'medium', 'regular'],
})``;

const Header = styled(Trafalgar).attrs({
  mt: ['small', 'small', 'medium', 'regular'],
})``;

const components = {
  p: Text,
  h2: Header,
  img: ContentImage,
  ul: List,
};

const processor = getProcessor(components);

const Container = styled(Flex)`
  flex-direction: column;
  color: ${Theme.colors.black};
  margin: 0 auto;
`;

const ContentContainer = styled(Flex)`
  max-width: 664px;
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
  span {
    text-transform: uppercase;

    &:not(:first-of-type) {
      padding-left: ${Theme.space.medium}px;
    }
  }
`;

const PostContent: React.FunctionComponent<ViewPost> = ({
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
  ...props
}) => (
  <>
    <NextSeo
      title={`Luck - ${title}`}
      description={description}
      openGraph={{
        title,
        description,
        url: `https://luck.org.pl/blog/${slug}`,
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
        <Canon>{title}</Canon>
        {processor.processSync(content).contents}
        <HashtagsText pt={['small', 'small', 'regular', 'regular']}>
          {(hashtags as Hashtag[]).map(({ name }, index) => (
            <span key={`PostContent-${name}-${index}`}>#{name}</span>
          ))}
        </HashtagsText>
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
  }
`;

interface StatelessPage<P = { slug: string; cmsUrl: string }> extends React.FunctionComponent<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
}

const Index: StatelessPage = ({ slug, cmsUrl }) => {
  const where = { slug };
  const { loading, error, data = { posts: [] } } = useQuery<{ posts: Post[] }, QueryPostsArgs>(
    POST_QUERY,
    {
      variables: { where },
    },
  );

  const viewPost = mapToViewPosts(data.posts, cmsUrl)[0];

  if (error) return <div>Error loading users.</div>;
  if (loading) return <div>Loading</div>;

  return (
    <BlogLayout backgroundColor={Theme.colors.main}>
      {viewPost && <PostContent {...viewPost} />}
    </BlogLayout>
  );
};

Index.getInitialProps = async function({ query }) {
  return { slug: query.id, cmsUrl: process.env.CLIENT_URL ? process.env.CLIENT_URL : '' };
};

export default withApollo(Index, {
  // Disable apollo ssr fetching in favour of automatic static optimization
  ssr: true,
});
