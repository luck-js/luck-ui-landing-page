import React from 'react';
import BlogLayout from '../../../components/BlogLayout';
import WelcomeView from "../../../components/ParticipationHappening/WelcomeView/WelcomeView"
import axios from "axios"
import {Theme} from "../../../utils"

export interface Member {
  id: string;
  name: string;
}
export interface Happening {
  id: string;
  name: string;
  description: string;
}

interface IndexProps {
  happening: Happening;
  member: Member;
}

interface StatelessPage<P = IndexProps> extends React.FunctionComponent<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
}

const Index: StatelessPage = ({happening, member}) => {

  return (
    <BlogLayout backgroundColor={Theme.colors.mainContrast}>
      <WelcomeView happening={happening} member={member} />
    </BlogLayout>
  );
};

Index.getInitialProps = async ({ query }) => {
  const {data} = await axios.get(`http://localhost:9001/api/v1/participation-happening/${query.id}`)

  return {
    happening: data.happening,
    member: data.member
  }
};

export default Index;
