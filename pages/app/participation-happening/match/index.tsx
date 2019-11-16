import React from 'react';
import AppLayout from "../../../../components/Layout/AppLayout"
import axios from "axios"
import MatchedMemberView from "../../../../components/ParticipationHappening/MatchedMemberView/MatchedMemberView"

export interface Member {
  name: string;
}

interface IndexProps {
  me: Member;
  matchedMember: Member;
}

interface StatelessPage<P = IndexProps> extends React.FunctionComponent<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
}

const Index: StatelessPage = ({me, matchedMember}) => {

  return (
    <AppLayout contrast>
      <MatchedMemberView me={me} matchedMember={matchedMember}/>
    </AppLayout>
  );
};

Index.getInitialProps = async ({query}) => {
  const {data} = await axios.get(`http://localhost:9001/api/v1/participation-happening/matched-member/${query.id}`)
  console.log({data})
  return {
    me: data.me,
    matchedMember: data.matchedMember,
  }
};

export default Index;
