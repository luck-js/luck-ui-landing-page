import React from 'react';
import ShareView, { ShareViewData } from '../../../src/app/Happening/ShareView';
import AppLayout from '../../../src/app/AppLayout';
import {apiAxios} from "../../../src/app/api.axios"

interface ShareProps {
  data: ShareViewData;
}

interface SharePage<P = ShareProps> extends React.FunctionComponent<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
}

const Share: SharePage = ({ data }) => {
  return (
    <AppLayout>
      <ShareView data={data} />
    </AppLayout>
  );
};

Share.getInitialProps = async ({ query }) => {
  const { data } = await apiAxios.get(`/api/v1/published-happening/${query.id}`);
  return {
    data: { happening: data },
  };
};

export default Share;
