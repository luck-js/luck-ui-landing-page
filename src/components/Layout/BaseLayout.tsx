import * as React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { Box } from '../Box';

type LayoutProps = {
  backgroundColor: string;
  minHeight?: any[];
};

const Container = styled(Box)`
  margin: 0;
  height: 100%;
`;

export const BaseLayout: React.FunctionComponent<LayoutProps> = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,600,700&subset=latin-ext"
          rel="stylesheet"
        />
      </Head>
      {children}
    </Container>
  );
};
