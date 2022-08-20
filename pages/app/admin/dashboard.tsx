import React from 'react';
import DashboardView, { DashboardViewData } from '../../../src/app/Admin/DashboardView';
import AppLayout from '../../../src/app/AppLayout';
import { apiAxios } from '../../../src/app/api.axios';

interface DashboardProps {
  data: DashboardViewData;
}

interface NewHappeningPage<P = DashboardProps> extends React.FunctionComponent<P> {}

const Dashboard: NewHappeningPage = ({ data }) => {
  return (
    <AppLayout>
      <DashboardView data={data} />
    </AppLayout>
  );
};

export async function getServerSideProps() {
  const { data } = await apiAxios.get(`/api/v1/happening`);
  return {
    props: {
      data: {
        happenings: data,
      },
    },
  };
}

export default Dashboard;
