import * as React from 'react';
import Head from 'next/head';
import styled from "styled-components"
type LayoutProps = {
  title?: string;
};
const Container = styled.div`
  margin: 0;
  height: 100vh;
`
const Layout: React.FunctionComponent<LayoutProps> = ({ children, title }) => (
  <Container>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
  </Container>
);
export default Layout;
