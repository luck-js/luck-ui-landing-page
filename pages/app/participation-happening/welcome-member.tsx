import React from 'react';
import AppLayout from "../../../src/app/AppLayout"
import WelcomeView, {WelcomeMemberViewData} from "../../../src/app/ParticipationHappening/WelcomeMemberView"
import {apiAxios} from "../../../src/app/api.axios"

interface WelcomeMemberProps {
  data: WelcomeMemberViewData;
}

interface WelcomeMemberPage<P = WelcomeMemberProps> extends React.FunctionComponent<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
}

const WelcomeMember: WelcomeMemberPage = ({data}) => {

  return (
    <AppLayout contrast>
      <WelcomeView data={data} />
    </AppLayout>
  );
};

WelcomeMember.getInitialProps = async ({ query }) => {
  const {data} = await apiAxios.get(`/api/v1/participation-happening/${query.id}`)

  return {
    data: {
      id: query.id,
      happening: data.happening,
      member: data.member
    }
  }
};

export default WelcomeMember;
