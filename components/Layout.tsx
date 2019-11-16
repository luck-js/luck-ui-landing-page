import * as React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Box } from './Box';

type LayoutProps = {
  backgroundColor: string;
};
const Container = styled(Box)`
  margin: 0;
  height: 100%;
`;

const Layout: React.FunctionComponent<LayoutProps> = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,600,700&subset=latin-ext" rel="stylesheet" />
      </Head>
      {children}
    </Container>
  );
};
export default Layout;
