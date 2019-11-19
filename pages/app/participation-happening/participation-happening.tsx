import React from 'react';
import AppLayout from '../../../src/app/AppLayout';
import ParticipationHappeningView, {
  ParticipationHappeningViewData,
} from '../../../src/app/ParticipationHappening';
import { apiAxios } from '../../../src/app/api.axios';
import {WelcomeMemberSectionData} from "../../../src/app/ParticipationHappening/WelcomeMemberSection"
import {MatchedMemberSectionData} from "../../../src/app/ParticipationHappening/MatchedMemberSection"

interface ParticipationHappeningProps {
  data: ParticipationHappeningViewData;
  analytics: any;
}

interface ParticipationHappeningPage<P = ParticipationHappeningProps>
  extends React.FunctionComponent<P> {
  getInitialProps?: (ctx: any) => Promise<{data: ParticipationHappeningViewData}>;
}

const ParticipationHappening: ParticipationHappeningPage = ({ analytics, data }) => {
  const handleOnClickBubble = () => {
    analytics.event('ParticipationHappening', 'onClickBubble');
  };
  return (
    <AppLayout contrast>
      <ParticipationHappeningView data={data} onClickBubble={handleOnClickBubble}/>
    </AppLayout>
  );
};

ParticipationHappening.getInitialProps = async ({ query }) => {
  const { data: welcomeMember } = await apiAxios.get<WelcomeMemberSectionData>(`/api/v1/participation-happening/${query.id}`);
  const { data: matchedMember } = await apiAxios.get<MatchedMemberSectionData>(
    `/api/v1/participation-happening/matched-member/${query.id}`,
  );

  return {
    data: { welcomeMember, matchedMember },
  };
};

export default ParticipationHappening;
