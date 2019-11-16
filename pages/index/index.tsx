import React from 'react';
import WelcomeSection from '../../components/WelcomeSection';
import Footer from "../../components/Footer"
import HomeLayout from "../../components/Layout/HomeLayout"

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
