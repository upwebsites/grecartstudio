import React from 'react';
import { Link } from 'react-router-dom';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white" id="contact">
      <div className="container text-center">
        <h2 className="text-4xl font-bold mb-6">Hai un progetto in mente?</h2>
        <p className="text-xl max-w-2xl mx-auto mb-10 text-neutral-200">
          Raccontaci la tua idea e scopri come possiamo trasformarla in realtà. Siamo pronti ad ascoltarti e a creare soluzioni su misura per le tue esigenze.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contatti" className="btn btn-accent text-lg">
            Parliamone
          </Link>
          <a href="tel:+391234567890" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-800 text-lg">
            Chiamaci ora
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;