import React from 'react';
import AppLayout from "../../../components/Layout/AppLayout"
import WelcomeView from "../../../components/ParticipationHappening/WelcomeView/WelcomeView"
import axios from "axios"

export interface Member {
  name: string;
}
export interface Happening {
  name: string;
  description: string;
}

interface IndexProps {
  id: string;
  member: Member;
  happening: Happening;
}

interface StatelessPage<P = IndexProps> extends React.FunctionComponent<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
}

const Index: StatelessPage = ({happening, member, id}) => {

  return (
    <AppLayout contrast>
      <WelcomeView id={id} happening={happening} member={member} />
    </AppLayout>
  );
};

Index.getInitialProps = async ({ query }) => {
  const {data} = await axios.get(`http://localhost:9001/api/v1/participation-happening/${query.id}`)

  return {
    id: query.id,
    happening: false ? data.happening : {name: "", description:""},
    member: data.member
  }
};

export default Index;
