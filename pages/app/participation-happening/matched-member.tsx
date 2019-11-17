import React from 'react';
import axios from "axios"
import AppLayout from "../../../src/app/AppLayout"
import MatchedMemberView, {MatchedMemberViewData} from "../../../src/app/ParticipationHappening/MatchedMemberView"

interface MatchedMemberProps {
  data: MatchedMemberViewData
}

interface MatchedMemberPage<P = MatchedMemberProps> extends React.FunctionComponent<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
}

const Index: MatchedMemberPage = ({data}) => {

  return (
    <AppLayout contrast>
      <MatchedMemberView data={data}/>
    </AppLayout>
  );
};

Index.getInitialProps = async ({query}) => {
  const {data} = await axios.get(`http://localhost:9001/api/v1/participation-happening/matched-member/${query.id}`)

  return {
    data: {
      me: data.me,
      matchedMember: data.matchedMember,
    }
  }
};

export default Index;
