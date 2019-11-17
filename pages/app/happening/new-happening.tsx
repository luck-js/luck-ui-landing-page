import React from 'react';
import NewHappeningView, {NewHappeningViewData} from "../../../src/app/Happening/NewHappeningView"
import AppLayout from "../../../src/app/AppLayout"

interface NewHappeningProps {
  data: NewHappeningViewData;
}

interface NewHappeningPage<P = NewHappeningProps> extends React.FunctionComponent<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
}

const NewHappening: NewHappeningPage = ({data}) => {

  return (
    <AppLayout>
      <NewHappeningView data={data}/>
    </AppLayout>
  );
};

NewHappening.getInitialProps = async ({query}) => {

  return {
    data: {
      name: query.name ? query.name  : '',
    }
  }
};

export default NewHappening;
