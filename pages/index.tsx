import { gql, useQuery } from '@apollo/client';
import React from 'react';
import BlogPostSection from '../src/home/BlogPostSection';
import DescriptionSection from '../src/home/DescriptionSection';
import Footer from '../src/home/Footer';
import HomeLayout from '../src/home/HomeLayout';
import HowToSection from '../src/home/HowToSection';
import WelcomeSection from '../src/home/WelcomeSection';
import { Post, QueryPostsArgs } from '../src/utils';
import { mapToViewPosts, POST_FRAGMENT } from './blog';

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
  const {
    loading,
    error,
    data = { posts: [] },
  } = useQuery<{ posts: Post[] }, QueryPostsArgs>(POST_QUERY, {
    variables: { where },
  });

  return (
    <HomeLayout>
      <WelcomeSection />
      <DescriptionSection />
      <HowToSection />
      {!loading && !error && <BlogPostSection posts={mapToViewPosts(data.posts, cmsUrl)} />}
      <Footer />
    </HomeLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      cmsUrl: process.env.CLIENT_URL ? process.env.CLIENT_URL : '',
    },
  };
}

export default Index;
