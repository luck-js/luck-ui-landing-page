import React from 'react';
import BlogLayout from '../../../components/BlogLayout';
import CreateForm from "../../../components/Happening/CreateForm/CreateForm"

interface IndexProps {}

interface StatelessPage<P = IndexProps> extends React.FunctionComponent<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
}

const Index: StatelessPage = () => {

  return (
    <BlogLayout>
      <CreateForm />
    </BlogLayout>
  );
};

export default Index;
