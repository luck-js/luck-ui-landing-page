import React from 'react';
import axios from 'axios';
import ShareView, { ShareViewData } from '../../../src/app/Happening/ShareView';
import AppLayout from '../../../src/app/AppLayout';

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
  const { data } = await axios.get(`http://localhost:9001/api/v1/published-happening/${query.id}`);
  return {
    data: { happening: data },
  };
};

export default Share;
