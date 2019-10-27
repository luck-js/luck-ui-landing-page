import React, { Fragment } from 'react';
import Layout from '../../components/Layout';
import { Navigation } from '../../components';

type LayoutProps = {
  backgroundColor: string;
};

const BlogLayout: React.FunctionComponent<LayoutProps> = ({ children, ...props }) => (
  <Fragment>
    <Layout {...props}>
      <Navigation shouldDisplayLogo navLinkModifiers={['black']} />
      {children}
    </Layout>
  </Fragment>
);
export default BlogLayout;
