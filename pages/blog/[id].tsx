import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { NextSeo } from 'next-seo/lib';
import RatioContainer from '../../components/RatioContainer';
import { MediumText, Canon, Flex, TinySecond } from '../../components';
import BlogLayout from './BlogLayout';
import { mapToPost } from './index';
import { withApollo, getProcessor, Theme, Post, QueryPostsArgs, Hashtag } from '../../utils';
import media from '../../utils/media';

const ContentImage = styled('img').attrs({alt: ""})`
  width: 100%;
  
  padding: ${Theme.space.small}px 0;
  
  
  ${media.greaterThan('mobile')`
    
  `}
  
  ${media.greaterThan('tablet')`
    padding: ${Theme.space.regular}px 0;
  `}
  
  ${media.greaterThan('desktop')`
    padding: ${Theme.space.xregular}px 0;
  `}
`;

const components = {
  p: MediumText,
  img: ContentImage,
};

const processor = getProcessor(components);

const Container = styled(Flex)`
  flex-direction: column;
  color: ${Theme.colors.black};
  margin: 0 auto;
`;

const Image = styled('img')`
  width: 100%;
  height: auto;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;
const ImageContainer = styled(RatioContainer)`
  position: relative;
`;

const ContentContainer = styled(Flex)`
  max-width: 664px;
  margin: 0 auto;
  flex-direction: column;  
  padding: ${Theme.space.small}px;
  
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

const PostContent: React.FunctionComponent<Post> = ({
  title,
  description,
  content,
  createdAt,
  updatedAt,
  cover,
  slug,
  hashtags = [],
  ...props
}) => (
  <>
    {cover && (
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
          <ImageContainer ratio={['69%', '34%']}>
            <Image src={cover.url} alt="" />
          </ImageContainer>
          <ContentContainer>
            <Canon pb={['small', 'small', 'regular', 'regular']}>{title}</Canon>
            {processor.processSync(content).contents}
            <HashtagsText pt={['small', 'small', 'regular', 'regular']}>
              {(hashtags as Hashtag[]).map(({ name }, index) => (
                <span key={`PostContent-${name}-${index}`}>#{name}</span>
              ))}
            </HashtagsText>
          </ContentContainer>
        </Container>
      </>
    )}
  </>
);

export const POST_QUERY = gql`
  query getPosts($where: JSON) {
    posts(where: $where) {
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
      hashtags {
        name
      }
    }
  }
`;

interface StatelessPage<P = { slug: string; cmsUrl: string }> extends React.FunctionComponent<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
}

const Index: StatelessPage = ({ slug, cmsUrl }) => {
  const where = { slug };
  const { loading, error, data } = useQuery<{ posts: Post[] }, QueryPostsArgs>(POST_QUERY, {
    variables: { where },
  });

  if (error) return <div>Error loading users.</div>;
  if (loading) return <div>Loading</div>;

  return (
    <BlogLayout backgroundColor={Theme.colors.main}>
      {data && data.posts[0] && <PostContent {...mapToPost(data.posts[0], cmsUrl)} />}
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
