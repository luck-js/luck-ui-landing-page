import React from 'react';
import App, { Container } from 'next/app';
import Router from "next/router";
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../components/GlobalStyle';
import {Theme} from "../utils"
import SEO from '../next-seo.config';

// @ts-ignore
import withGA from "next-ga";
import FontProvider from "../components/FontProvider"

class MyApp extends App<{analytics: any}> {
  render() {
    const { Component, pageProps, analytics } = this.props;
    return (
      <Container>
        <ThemeProvider theme={Theme}>
          <FontProvider>
            <>
              <GlobalStyle />
              <DefaultSeo {...SEO} />
              <Component {...pageProps} analytics={analytics} />
            </>
          </FontProvider>
        </ThemeProvider>
      </Container>
    );
  }
}
export default withGA(process.env.TRACKING_ID , Router)(MyApp);
