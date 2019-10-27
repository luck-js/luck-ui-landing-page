import React from 'react';
import Layout from '../../components/Layout';
import WelcomeSection from './WelcomeSection';
import { Theme } from '../../utils';

interface IndexProps {
  analytics: any;
}

const Index = ({ analytics }: IndexProps) => {
  const handleClickBubble = () => {
    analytics.event('Home', 'onClickBubble');
  };

  return (
    <Layout backgroundColor={Theme.colors.mainContrast}>
      <WelcomeSection handleClickBubble={handleClickBubble} />
    </Layout>
  );
};
export default Index;
