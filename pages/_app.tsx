import React from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../components/GlobalStyle';
import {Theme} from "../utils/theme"

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

export default MyApp;
