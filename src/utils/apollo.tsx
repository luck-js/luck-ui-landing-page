require('dotenv').config();
import { useMemo } from 'react';
import merge from 'deepmerge';
import type { GetServerSidePropsContext } from 'next';
import type { NormalizedCacheObject } from '@apollo/client';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import isEqual from 'lodash.isequal';
import axios from 'axios';

interface PageProps {
  props?: Record<string, any>;
}

export const APOLLO_STATE_PROPERTY_NAME = '__APOLLO_STATE__';

async function getToken(identifier: string, password: string): Promise<string> {
  return await axios
    .post(`${process.env.CLIENT_URL}/admin/auth/local`, { identifier, password })
    .then((response) => response.data.jwt);
}

let apolloClient: ApolloClient<NormalizedCacheObject>;

const createApolloClient = (ctx?: GetServerSidePropsContext) => {
  const httpLink = new HttpLink({
    uri: `${process.env.CLIENT_URL}/graphql`,
  });

  const authLink = setContext(async (_, { headers }) => {
    // Get the authentication token from cookies
    const token = await getToken(
      process.env.CMS_USERNAME as string,
      process.env.CMS_PASSWORD as string,
    );

    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export function initializeApollo(initialState = null, ctx?: GetServerSidePropsContext) {
  const client = apolloClient ?? createApolloClient(ctx);

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = client.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) => sourceArray.every((s) => !isEqual(d, s))),
      ],
    });

    // Restore the cache with the merged data
    client.cache.restore(data);
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') {
    return client;
  }

  // Create the Apollo Client once in the client
  if (!apolloClient) {
    apolloClient = client;
  }

  return client;
}

export function addApolloState(client: ApolloClient<NormalizedCacheObject>, pageProps: PageProps) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROPERTY_NAME] = client.cache.extract();
  }

  return pageProps;
}

export function useApollo(pageProps: PageProps) {
  // @ts-ignore
  const state = pageProps[APOLLO_STATE_PROPERTY_NAME];
  return useMemo(() => initializeApollo(state), [state]);
}
