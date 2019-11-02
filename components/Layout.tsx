import * as React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Box } from './Box';
import { useState } from 'react';
import { useEffect } from 'react';
import Fonts from '../utils/fonts';

type LayoutProps = {
  backgroundColor: string;
};
const Container = styled(Box)`
  margin: 0;
  height: 100%;
`;
const InnerContainer = styled('div')<{ isFontLoaded: boolean }>`
  opacity: ${props => (props.isFontLoaded ? 1 : 0)};
  transition: 0.5s;
`;

const Layout: React.FunctionComponent<LayoutProps> = ({ children, ...props }) => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  useEffect(() => {
    let isSubscribed = true
    Fonts().then(() => isSubscribed ? setIsFontLoaded(true) : null);
    return () => {(isSubscribed = false)};
  }, []);

  return (
    <Container {...props}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <InnerContainer isFontLoaded={isFontLoaded}>{children}</InnerContainer>
    </Container>
  );
};
export default Layout;
