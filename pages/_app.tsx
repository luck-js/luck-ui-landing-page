import { DefaultSeo } from 'next-seo';
// tslint:disable-next-line:no-submodule-imports
import App from 'next/app';
// tslint:disable-next-line:no-submodule-imports
import Router from 'next/router';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import SEO from '../next-seo.config';
import { GlobalStyle } from '../src/components';
import { Theme } from '../src/utils';

// @ts-ignore
import withGA from 'next-ga';

// @ts-ignore
if (typeof global.navigator === 'undefined') { global.navigator = {}; }

class MyApp extends App<{ analytics: any }> {
  public render() {
    const { Component, pageProps, analytics } = this.props;
    return (
        <ThemeProvider theme={Theme}>
          <>
            <GlobalStyle />
            <DefaultSeo {...SEO} />
            <Component {...pageProps} analytics={analytics} />
          </>
        </ThemeProvider>
    );
  }
}

export default withGA(process.env.TRACKING_ID, Router)(MyApp);
