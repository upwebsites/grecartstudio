import React from 'react';
import ProjectCard from '../components/portfolio/ProjectCard';
import { allProjects } from '../data/projectsData';
import CtaSection from '../components/home/CtaSection';
import { motion } from 'framer-motion';

const PortfolioPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark pt-32 pb-20 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/5 rounded-full blur-[120px] mix-blend-screen z-0"></div>
        <div className="container relative z-10 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-6"
          >
            Lavori Selezionati
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white mb-6"
          >
            Il nostro <span className="italic font-light text-light/70">portfolio</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-light/60 font-light text-lg max-w-2xl mx-auto"
          >
            Esplora i progetti che abbiamo realizzato e scopri come abbiamo aiutato i nostri clienti a distinguersi nel loro mercato.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section bg-dark-100 relative">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
            {allProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </>
  );
};

export default PortfolioPage;