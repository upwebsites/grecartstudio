import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600)', 
          filter: 'brightness(0.3)'
        }}
      ></div>
      
      <div className="container relative z-10 pt-20 pb-20">
        <div className="max-w-3xl">
          <h1 className="text-white mb-6 animate-fadeUp">
            Diamo forma alle tue idee
          </h1>
          <p className="text-xl text-neutral-200 mb-8 animate-fadeUp delay-100">
            Da oltre 10 anni trasformiamo concetti in comunicazione visiva che cattura, coinvolge e converte. Un team di creativi pronti a rendere il tuo brand indimenticabile.
          </p>
          <div className="flex flex-wrap gap-4 animate-fadeUp delay-200">
            <Link to="/servizi" className="btn btn-accent">
              Scopri i nostri servizi
              <ArrowRight className="ml-2 inline-block" size={18} />
            </Link>
            <Link to="/portfolio" className="btn btn-outline text-white border-white hover:bg-white hover:text-primary-800">
              Esplora i nostri lavori
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;