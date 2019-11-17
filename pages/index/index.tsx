import React from 'react';
import WelcomeSection from '../../src/home/WelcomeSection';
import Footer from '../../src/home/Footer';
import HomeLayout from '../../src/home/HomeLayout';

interface IndexProps {
  analytics: any;
}

const Index = ({ analytics }: IndexProps) => {
  const handleClickBubble = () => {
    analytics.event('Home', 'onClickBubble');
  };

  return (
    <HomeLayout>
      <WelcomeSection handleClickBubble={handleClickBubble} />
      <Footer />
    </HomeLayout>
  );
};

export default Index;
