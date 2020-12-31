import React from 'react';
import Footer from '../../src/home/Footer';
import HomeLayout from '../../src/home/HomeLayout';
import WelcomeSection from '../../src/home/WelcomeSection';

const Index = () => {
  return (
    <HomeLayout>
      <WelcomeSection />
      <Footer />
    </HomeLayout>
  );
};

export default Index;
