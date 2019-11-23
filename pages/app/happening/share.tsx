import React from 'react';
import ShareView, { ShareViewData } from '../../../src/app/Happening/ShareView';
import AppLayout from '../../../src/app/AppLayout';
import { apiAxios } from '../../../src/app/api.axios';
import { PopupProvider } from '../../../src/components/Popup';
import { QuestionnaireProvider } from '../../../src/app/Happening/ShareView/shared/Questionnaire/Questionnaire';

interface ShareProps {
  data: ShareViewData;
}

interface SharePage<P = ShareProps> extends React.FunctionComponent<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
}

const mapShareViewData = (host: string, data: ShareViewData): ShareViewData => {
  const participants = data.happening.participants.map(participant => ({
    ...participant,
    uniqueLink: `https://${host}/app/losuj?id=${participant.uniqueLink}`,
    isCopied: false,
  }));

  return { happening: { ...data.happening, participants } };
};

const Share: SharePage = ({ data }) => {
  return (
    <AppLayout>
      <PopupProvider>
        <QuestionnaireProvider>
          <ShareView data={data} />
        </QuestionnaireProvider>
      </PopupProvider>
    </AppLayout>
  );
};

Share.getInitialProps = async ({ query }) => {
  const { data } = await apiAxios.get(`/api/v1/published-happening/${query.id}`);
  const host = process.env.VIRTUAL_HOST ? process.env.VIRTUAL_HOST : '';
  return {
    data: mapShareViewData(host, { happening: data }),
  };
};

export default Share;
