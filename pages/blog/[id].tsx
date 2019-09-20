import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from '../../utils/Apollo';
import React, { Fragment } from 'react';
import { Post, QueryPostsArgs } from '../../utils/types';
import styled from 'styled-components';
import { Flex } from '../../utils/Flex';
import { BodyText, LogoHeading } from '../../utils/Typography';
import { getProcessor } from '../../utils/render-ast';
import { Theme } from '../../utils/Theme';
import BlogLayout from '../../components/BlogLayout';
import RatioContainer from '../../components/RatioContainer';

const components = {};

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
  max-width: 1000px;
  margin: 0 auto;
  flex-direction: column;
`;

const PostContent: React.FunctionComponent<Post> = ({ title, content, cover }) => (
  <Container>
    {cover && (
      <Fragment>
        <ImageContainer ratio="55%">
          <Image src={`http://localhost:1337${cover.url}`} alt="" />
        </ImageContainer>
        <ContentContainer>
          <LogoHeading pt={['regular', 'regular', 'xregular', 'xregular']}>{title}</LogoHeading>
          <BodyText pt={['regular', 'regular', 'xregular', 'xregular']}>
            {processor.processSync(content).contents}
          </BodyText>
        </ContentContainer>
      </Fragment>
    )}
  </Container>
);

export const POST_QUERY = gql`
  query getPosts($where: JSON) {
    posts(where: $where) {
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

interface StatelessPage<P = { slug: string }> extends React.FunctionComponent<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
}

const Index: StatelessPage = ({ slug }) => {
  console.log('rest', slug);
  const where = { slug };
  const { loading, error, data } = useQuery<{ posts: Post[] }, QueryPostsArgs>(POST_QUERY, {
    variables: { where },
  });

  if (error) return <div>Error loading users.</div>;
  if (loading) return <div>Loading</div>;

  return (
    <BlogLayout title="Blog | Luck" backgroundColor={Theme.colors.main}>
      {data && data.posts[0] && <PostContent {...data.posts[0]} />}
    </BlogLayout>
  );
};

Index.getInitialProps = async function({ query }) {
  return { slug: query.id };
};

export default withApollo(Index, {
  // Disable apollo ssr fetching in favour of automatic static optimization
  ssr: true,
});
