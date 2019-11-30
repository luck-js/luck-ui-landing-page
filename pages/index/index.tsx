import React from 'react';
import WelcomeSection from '../../src/home/WelcomeSection';
import Footer from '../../src/home/Footer';
import HomeLayout from '../../src/home/HomeLayout';

interface IndexProps {
  analytics: any;
}

const Index = ({ analytics }: IndexProps) => {
  const handleOnClickBubble = () => analytics.event('Home', 'onClickBubble')

  return (
    <HomeLayout>
      <WelcomeSection onClickBubble={handleOnClickBubble} />
      <Footer />
    </HomeLayout>
  );
};

export default Index;
