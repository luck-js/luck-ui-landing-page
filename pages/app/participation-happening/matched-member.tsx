import React from 'react';
import AppLayout from "../../../src/app/AppLayout"
import MatchedMemberView, {MatchedMemberViewData} from "../../../src/app/ParticipationHappening/MatchedMemberView"
import {apiAxios} from "../../../src/app/api.axios"

interface MatchedMemberProps {
  data: MatchedMemberViewData
}

interface MatchedMemberPage<P = MatchedMemberProps> extends React.FunctionComponent<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
}

const MatchedMember: MatchedMemberPage = ({data}) => {

  return (
    <AppLayout contrast>
      <MatchedMemberView data={data}/>
    </AppLayout>
  );
};

MatchedMember.getInitialProps = async ({query}) => {
  const {data} = await apiAxios.get(`/api/v1/participation-happening/matched-member/${query.id}`)

  return {
    data: {
      me: data.me,
      matchedMember: data.matchedMember,
    }
  }
};

export default MatchedMember;
