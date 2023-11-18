import React from 'react';
import DashboardView, { DashboardViewData } from '../../../src/app/Admin/DashboardView';
import AppLayout from '../../../src/app/AppLayout';
import { apiAxios } from '../../../src/app/api.axios';
import { FunctionComponent } from '../../../src/utils/function-component.interface';

interface DashboardProps {
  data: DashboardViewData;
}

interface NewHappeningPage<P = DashboardProps> extends FunctionComponent<P> {}

const Dashboard: NewHappeningPage = ({ data }) => {
  return (
    <AppLayout>
      <DashboardView data={data} />
    </AppLayout>
  );
};

export async function getServerSideProps() {
  const { data } = await apiAxios.get(`/api/v1/draw`);
  return {
    props: {
      data: {
        happenings: data,
      },
    },
  };
}

export default Dashboard;
