import React from 'react';
import NewHappeningView, {NewHappeningViewData} from "../../../src/app/Happening/NewHappeningView"
import AppLayout from "../../../src/app/AppLayout"

interface NewHappeningProps {
  data: NewHappeningViewData;
  analytics: any;
}

interface NewHappeningPage<P = NewHappeningProps> extends React.FunctionComponent<P> {
  getInitialProps?: (ctx: any) => Promise<{data: NewHappeningViewData}>;
}

const NewHappening: NewHappeningPage = ({data, analytics}) => {

  return (
    <AppLayout>
      <NewHappeningView analytics={analytics} data={data}/>
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
