import { DefaultSeo } from 'next-seo';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import SEO from '../next-seo.config';
import { GlobalStyle } from '../src/components';
import { Theme, useApollo } from '../src/utils';
import { ApolloProvider } from '@apollo/client';
import { Provider, ErrorBoundary } from '@rollbar/react';

// @ts-ignore
import withGA from 'next-ga';

interface Props extends AppProps {
  analytics: any;
}
const environment = process.env.NODE_ENV === 'development' ? 'development' : 'production';
const accessToken = process.env.ROLLBAR_ACESS_TOKEN;

const rollbarConfig = {
  accessToken,
  environment,
  captureUncaught: true,
  captureUnhandledRejections: true,
};
const App: NextPage<Props> = (props) => {
  const { Component, pageProps, analytics } = props;
  const client = useApollo(pageProps);

  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyle />
        <DefaultSeo {...SEO} />
        <Provider config={rollbarConfig}>
          <ApolloProvider client={client}>
            <ErrorBoundary>
              <Component {...pageProps} analytics={analytics} />
            </ErrorBoundary>
          </ApolloProvider>
        </Provider>
      </>
    </ThemeProvider>
  );
};
export default withGA(process.env.TRACKING_ID, Router)(App);
