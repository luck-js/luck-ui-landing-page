import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import BlogPostSection from '../../src/home/BlogPostSection';
import DescriptionSection from '../../src/home/DescriptionSection';
import Footer from '../../src/home/Footer';
import HomeLayout from '../../src/home/HomeLayout';
import HowToSection from '../../src/home/HowToSection';
import WelcomeSection from '../../src/home/WelcomeSection';
import { Post, QueryPostsArgs, withApollo } from '../../src/utils';
import { mapToViewPosts, POST_FRAGMENT } from '../blog';

export const POST_QUERY = gql`
  ${POST_FRAGMENT}
  query getPosts($where: JSON) {
    posts(where: $where) {
      ...Post
    }
  }
`;

const Index = ({ cmsUrl }: { cmsUrl: string }) => {
  const where = {
    slug_in: [
      'dlaczego-odradzam-dawanie-prezentow-w-swieta-bozego-narodzenia',
      'luck-aplikacja-na-mikolajki-w-roku-2019',
      'podsumowanie-aplikacji-mikolajkowej-luck-w-2018-roku',
    ],
  };
  const { loading, data = { posts: [] } } = useQuery<{ posts: Post[] }, QueryPostsArgs>(
    POST_QUERY,
    {
      variables: { where },
    },
  );

  return (
    <HomeLayout>
      <WelcomeSection />
      <DescriptionSection />
      <HowToSection />
      {loading ? (
        <div>Loading</div>
      ) : (
        <BlogPostSection posts={mapToViewPosts(data.posts, cmsUrl)} />
      )}
      <Footer />
    </HomeLayout>
  );
};

Index.getInitialProps = async function() {
  return {
    cmsUrl: process.env.CLIENT_URL ? process.env.CLIENT_URL : '',
  };
};

export default withApollo(Index, {
  // Disable apollo ssr fetching in favour of automatic static optimization
  ssr: true,
});
