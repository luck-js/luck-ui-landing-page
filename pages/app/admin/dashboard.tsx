import React from 'react';
import DashboardView, { DashboardViewData } from '../../../src/app/Admin/DashboardView';

import AppLayout from '../../../src/app/AppLayout';

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

Dashboard.getInitialProps = async ({ query }) => {
  return {
    data: {
      name: query.name ? query.name : '',
    },
  };
};

export default Dashboard;
