import React from 'react';
import DashboardView, { DashboardViewData } from '../../../src/app/Admin/DashboardView';

import AppLayout from '../../../src/app/AppLayout';
import {apiAxios} from "../../../src/app/api.axios"

interface DashboardProps {
  data: DashboardViewData;
}

interface NewHappeningPage<P = DashboardProps> extends React.FunctionComponent<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
}

const Dashboard: NewHappeningPage = ({ data }) => {
  return (
    <AppLayout>
      <DashboardView data={data} />
    </AppLayout>
  );
};

Dashboard.getInitialProps = async ( ) => {
  const { data } = await apiAxios.get(`/api/v1/happening`);
  return {
    data: {
      happenings: data,
    },
  };
};

export default Dashboard;
