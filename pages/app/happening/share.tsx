import React from 'react';
import ShareView, { ShareViewData } from '../../../src/app/Happening/ShareView';
import AppLayout from '../../../src/app/AppLayout';
import { apiAxios } from '../../../src/app/api.axios';
import { PopupProvider } from '../../../src/components/Popup';
import { QuestionnaireProvider } from '../../../src/app/Happening/ShareView/shared/Questionnaire/Questionnaire';
import { GetServerSideProps } from 'next';
import { FunctionComponent } from '../../../src/utils/function-component.interface';
import { NewHappening } from '../../../src/app/Happening/model';

interface ShareProps {
  data: ShareViewData;
  analytics: any;
}

interface SharePage<P = ShareProps> extends FunctionComponent<P> {}

const mapShareViewData = (host: string, data: ShareViewData): ShareViewData => {
  const participants = data.happening.participants.map((participant) => ({
    ...participant,
    uniqueLink: `https://${host}/app/participation-happening/?id=${participant.uniqueLink}`,
    isCopied: false,
  }));

  return { happening: { ...data.happening, participants } };
};

const Share: SharePage = ({ data, analytics }) => {
  return (
    <AppLayout>
      <PopupProvider>
        <QuestionnaireProvider analytics={analytics}>
          <ShareView data={data} />
        </QuestionnaireProvider>
      </PopupProvider>
    </AppLayout>
  );
};

interface NewHappeningApiData {
  name: string;
  description: string;
  members: {
    name: string;
    uniqueLink: string;
    isCopied: boolean;
  }[];
}

const mapFromApiData = ({ members, ...rest }: NewHappeningApiData): ShareViewData => {
  return {
    happening: {
      ...rest,
      participants: members,
    }
  };
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { data } = await apiAxios.get(`/api/v1/draw/${query.id}`);
  const host = process.env.VIRTUAL_HOST ? process.env.VIRTUAL_HOST : '';
  return {
    props: {
      data: mapShareViewData(host, mapFromApiData(data)),
    },
  };
};

export default Share;
