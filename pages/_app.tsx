import React from 'react';
import App, { Container } from 'next/app';
import Router from "next/router";
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../components/GlobalStyle';
import {Theme} from "../utils"
// @ts-ignore
import withGA from "next-ga";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProvider theme={Theme}>
          <>
            <GlobalStyle />
            <Component {...pageProps} />
          </>
        </ThemeProvider>
      </Container>
    );
  }
}
export default withGA(process.env.TRACKING_ID , Router)(MyApp);
