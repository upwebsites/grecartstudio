import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import ProjectCard from '../components/portfolio/ProjectCard';
import { allProjects } from '../data/projectsData';
import CtaSection from '../components/home/CtaSection';

const PortfolioPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-500 py-20 md:py-32">
        <div className="container text-center">
          <h1 className="text-white mb-6">Il nostro portfolio</h1>
          <p className="text-xl text-neutral-200 max-w-3xl mx-auto">
            Esplora i progetti che abbiamo realizzato e scopri come abbiamo aiutato i nostri clienti a raggiungere i loro obiettivi.
          </p>
        </div>
      </section>
      {/* Portfolio Grid */}
      <section className="section">
        <div className="container">
          <SectionTitle 
            title="I nostri lavori"
            subtitle="Una selezione dei progetti che rappresentano la nostra creatività e competenza"
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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