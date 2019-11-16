import React from 'react';

import CreateForm from "../../../components/Happening/CreateForm/CreateForm"
import AppLayout from "../../../components/Layout/AppLayout"

interface IndexProps {}

interface StatelessPage<P = IndexProps> extends React.FunctionComponent<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
}

const Index: StatelessPage = () => {

  return (
    <AppLayout>
      <CreateForm />
    </AppLayout>
  );
};

export default Index;
