import React from 'react';
import WelcomeSection from '../../src/home/WelcomeSection';
import Footer from '../../src/home/Footer';
import HomeLayout from '../../src/home/HomeLayout';

const Index = () => {
  return (
    <HomeLayout>
      <WelcomeSection />
      <Footer />
    </HomeLayout>
  );
};

export default Index;
