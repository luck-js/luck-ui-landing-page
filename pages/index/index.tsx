import React from 'react';
import DescriptionSection from '../../src/home/DescriptionSection';
import Footer from '../../src/home/Footer';
import HomeLayout from '../../src/home/HomeLayout';
import WelcomeSection from '../../src/home/WelcomeSection';

const Index = () => {
  return (
    <HomeLayout>
      <WelcomeSection />
      <DescriptionSection />
      <Footer />
    </HomeLayout>
  );
};

export default Index;
