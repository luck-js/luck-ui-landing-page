import * as React from 'react';
import Head from 'next/head';
import styled from "styled-components"
import {Box} from "../utils/Box"
type LayoutProps = {
  title?: string;
  backgroundColor: string;
};
const Container = styled(Box)`
  margin: 0;
  height: 100vh;
`
const Layout: React.FunctionComponent<LayoutProps> = ({ children, title, ...props }) => (
  <Container {...props}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
  </Container>
);
export default Layout;
