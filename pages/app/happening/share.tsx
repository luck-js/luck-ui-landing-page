import React, { useEffect, useState } from 'react';
import ShareView, { ShareViewData } from '../../../src/app/Happening/ShareView';
import AppLayout from '../../../src/app/AppLayout';
import { apiAxios } from '../../../src/app/api.axios';

interface ShareProps {
  data: ShareViewData;
}

interface SharePage<P = ShareProps> extends React.FunctionComponent<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
}

const Share: SharePage = ({ data }) => {
  const [viewData, setViewData] = useState<ShareViewData>(data);
  useEffect(() => {
    const participants = data.happening.participants.map(participant => ({
      ...participant,
      uniqueLink: `https://${window.location.host}/app/losuj?id=${participant.uniqueLink}`,
    }));
    setViewData({ happening: { ...data.happening, participants } });
  }, []);

  return (
    <AppLayout>
      <ShareView data={viewData} />
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
