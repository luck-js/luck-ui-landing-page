import React from 'react';
import Layout from '../components/Layout';
import {withApollo} from "../utils/Apollo"
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

interface StatelessPage<P = {}> extends React.FunctionComponent<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
}

export const ALL_POSTS_QUERY = gql`
  query getPosts {
    poems {
      title
    }
  }
`;

const Posts: StatelessPage = () => {
  const { loading, error } = useQuery(
    ALL_POSTS_QUERY
  )

  if (error) return <div>Error loading users.</div>;
  if (loading) return <div>Loading</div>;

  return (
    <Layout title="Posty">
      is coming...
    </Layout>
  )
};

export default withApollo(Posts, {
  // Disable apollo ssr fetching in favour of automatic static optimization
  ssr: true
})
