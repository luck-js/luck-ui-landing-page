import React from 'react';
import AppLayout from '../../../src/app/AppLayout';
import ParticipationHappeningView, {
  ParticipationHappeningViewData,
} from '../../../src/app/ParticipationHappening';
import { apiAxios } from '../../../src/app/api.axios';
import { WelcomeMemberSectionData } from '../../../src/app/ParticipationHappening/WelcomeMemberSection';
import { MatchedMemberSectionData } from '../../../src/app/ParticipationHappening/MatchedMemberSection';
import { GetServerSideProps } from 'next';

interface ParticipationHappeningProps {
  data: ParticipationHappeningViewData;
  analytics: any;
}

interface ParticipationHappeningPage<P = ParticipationHappeningProps>
  extends React.FunctionComponent<P> {}

const Index: ParticipationHappeningPage = ({ data, analytics }) => {
  return (
    <AppLayout contrast>
      <ParticipationHappeningView data={data} analytics={analytics} />
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { data: welcomeMember } = await apiAxios.get<WelcomeMemberSectionData>(
    `/api/v1/participation-happening/${query.id}`,
  );
  const { data: matchedMember } = await apiAxios.get<MatchedMemberSectionData>(
    `/api/v1/participation-happening/matched-member/${query.id}`,
  );
  const data = { welcomeMember, matchedMember };
  return {
    props: {
      data,
    },
  };
};
export default Index;
