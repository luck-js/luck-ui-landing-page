import React from 'react';
import NewHappeningView from "../../../src/app/Happening/NewHappeningView"
import AppLayout from "../../../src/app/AppLayout"

interface NewHappeningProps {}

interface NewHappeningPage<P = NewHappeningProps> extends React.FunctionComponent<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
}

const NewHappening: NewHappeningPage = () => {

  return (
    <AppLayout>
      <NewHappeningView />
    </AppLayout>
  );
};

export default NewHappening;
