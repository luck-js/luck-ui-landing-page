import React from 'react';
import NewHappeningView, {
  NewHappeningViewData,
} from '../../../src/app/Happening/NewHappeningView';
import AppLayout from '../../../src/app/AppLayout';
import { GetServerSideProps } from 'next';
import { FunctionComponent } from '../../../src/utils/function-component.interface';

interface NewHappeningProps {
  data: NewHappeningViewData;
  analytics: any;
}

interface NewHappeningPage<P = NewHappeningProps> extends FunctionComponent<P> {}

const NewHappening: NewHappeningPage = ({data, analytics}) => {

  return (
    <AppLayout>
      <NewHappeningView analytics={analytics} data={data}/>
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      data: {
        name: query.name ? query.name : '',
      },
    },
  };
};

export default NewHappening;
