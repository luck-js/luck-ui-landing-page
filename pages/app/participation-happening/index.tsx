import React from 'react';
import AppLayout from '../../../src/app/AppLayout';
import ParticipationHappeningView, {
  ParticipationHappeningViewData,
} from '../../../src/app/ParticipationHappening';
import { apiAxios } from '../../../src/app/api.axios';
import { WelcomeMemberSectionData } from '../../../src/app/ParticipationHappening/WelcomeMemberSection';
import { MatchedMemberSectionData } from '../../../src/app/ParticipationHappening/MatchedMemberSection';
import { GetServerSideProps } from 'next';
import { FunctionComponent } from '../../../src/utils/function-component.interface';

export interface DrawLinkData {
  id: string;
  name: string;
  description: string;
  memberName: string;
  matchedMemberName: string;
}

interface ParticipationHappeningProps {
  data: ParticipationHappeningViewData;
  analytics: any;
}

interface ParticipationHappeningPage<P = ParticipationHappeningProps>
  extends FunctionComponent<P> {}

const Index: ParticipationHappeningPage = ({ data, analytics }) => {
  return (
    <AppLayout contrast>
      <ParticipationHappeningView data={data} analytics={analytics} />
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const {
    data: { memberName, matchedMemberName, name, description },
  } = await apiAxios.get<DrawLinkData>(`/api/v1/draw-link/${query.id}`);

  const welcomeMember: WelcomeMemberSectionData = {
    memberName,
    name,
    description,
  };

  const matchedMember: MatchedMemberSectionData = {
    memberName,
    matchedMemberName,
  };

  const data: ParticipationHappeningViewData = { welcomeMember, matchedMember };
  return {
    props: {
      data,
    },
  };
};
export default Index;
