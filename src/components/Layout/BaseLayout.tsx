import * as React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { Box } from '../Box';
import { FunctionComponent } from '../../utils/function-component.interface';

type LayoutProps = {
  backgroundColor: string;
  minHeight?: any[];
};

const Container = styled(Box)`
  margin: 0;
  height: 100%;
`;

export const BaseLayout: FunctionComponent<LayoutProps> = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </Container>
  );
};
