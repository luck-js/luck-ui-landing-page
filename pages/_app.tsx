import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'styled-components';
import SEO from '../next-seo.config';
import { Theme } from '../src/utils';
import { GlobalStyle } from '../src/components';

// @ts-ignore
import withGA from 'next-ga';

// @ts-ignore
if (typeof global.navigator === 'undefined') global.navigator = {};

class MyApp extends App<{ analytics: any }> {
  render() {
    const { Component, pageProps, analytics } = this.props;
    return (
      <Container>
        <ThemeProvider theme={Theme}>
          <>
            <GlobalStyle />
            <DefaultSeo {...SEO} />
            <Component {...pageProps} analytics={analytics} />
          </>
        </ThemeProvider>
      </Container>
    );
  }
}

export default withGA(process.env.TRACKING_ID, Router)(MyApp);
