import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesPreview from '../components/home/ServicesPreview';
import PortfolioPreview from '../components/home/PortfolioPreview';
import Testimonials from '../components/home/Testimonials';
import CtaSection from '../components/home/CtaSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <PortfolioPreview />
      <Testimonials />
      <CtaSection />
    </>
  );
};

export default HomePage;