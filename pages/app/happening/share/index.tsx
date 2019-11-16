import React from 'react';
import ShareView from '../../../../components/Happening/ShareView/ShareView';
import axios from "axios"
import AppLayout from "../../../../components/Layout/AppLayout"

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
    <AppLayout>
      <ShareView happening={happening} />
    </AppLayout>
  );
};
Index.getInitialProps = async ({ query }) => {
  const {data} = await axios.get(`http://localhost:9001/api/v1/published-happening/${query.id}`)
  return {
    happening: data
  }
};
export default Index;
