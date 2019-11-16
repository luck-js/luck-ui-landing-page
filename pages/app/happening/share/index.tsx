import React from 'react';
import BlogLayout from '../../../../components/BlogLayout';
import ShareView from '../../../../components/Happening/ShareView/ShareView';
import axios from "axios"

interface Participant {
  name: string;
  uniqueLink: string;
}
export interface Happening {
  name: string;
  description: string;
  participants: Participant[];
}

interface IndexProps {
  happening: Happening;
}

interface StatelessPage<P = IndexProps > extends React.FunctionComponent<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
}

const Index: StatelessPage = ({happening}) => {
  return (
    <BlogLayout>
      <ShareView happening={happening} />
    </BlogLayout>
  );
};
Index.getInitialProps = async ({ query }) => {
  const {data} = await axios.get(`http://localhost:9001/api/v1/published-happening/${query.id}`)
  return {
    happening: data
  }
};
export default Index;
