import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';
import { allProjects } from '../../data/projectsData';

const PortfolioPreview: React.FC = () => {
  // Just use the first 3 projects for the preview
  const previewProjects = allProjects.slice(0, 3);

  return (
    <section className="section bg-white">
      <div className="container">
        <SectionTitle 
          title="Il nostro portfolio"
          subtitle="Una selezione dei nostri migliori progetti"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewProjects.map((project) => (
            <Link 
              to={`/tutti-i-lavori/${project.id}`} 
              key={project.id} 
              className="portfolio-item group block relative overflow-hidden rounded-lg shadow-custom"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.thumbUrl} 
                  alt={project.title} 
                  className="portfolio-image w-full h-full object-cover transition-transform duration-500"
                />
                <div className="portfolio-overlay absolute inset-0 bg-gradient-to-t from-primary-900/90 to-primary-800/70 opacity-0 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-neutral-200">{project.category}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/tutti-i-lavori" className="btn btn-outline">
            Guarda il portfolio completo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;