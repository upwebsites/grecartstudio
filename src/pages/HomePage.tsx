import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesPreview from '../components/home/ServicesPreview';
import PortfolioPreview from '../components/home/PortfolioPreview';
import InstagramHeroSection from '../components/home/InstagramHeroSection';
import MeriniOverlineSection from '../components/home/MeriniOverlineSection';
import TrophiesSection from '../components/home/TrophiesSection';
import UpolCertificationSection from '../components/home/UpolCertificationSection';
import Testimonials from '../components/home/Testimonials';
import CtaSection from '../components/home/CtaSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
       <PortfolioPreview />
       <InstagramHeroSection />
       <MeriniOverlineSection />
       <TrophiesSection />
       <UpolCertificationSection />
       <Testimonials />
      <CtaSection />
    </>
  );
};

export default HomePage;
