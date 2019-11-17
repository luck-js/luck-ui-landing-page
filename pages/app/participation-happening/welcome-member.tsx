import React from 'react';
import axios from "axios"
import AppLayout from "../../../src/app/AppLayout"
import WelcomeView, {WelcomeMemberViewData} from "../../../src/app/ParticipationHappening/WelcomeMemberView"

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
  const {data} = await axios.get(`http://localhost:9001/api/v1/participation-happening/${query.id}`)

  return {
    data: {
      id: query.id,
      happening: data.happening,
      member: data.member
    }
  }
};

export default WelcomeMember;
