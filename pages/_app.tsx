import React from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#444444',
  },
};

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
