import React from 'react';
import { Link } from 'react-router-dom';
import { allProjects } from '../../data/projectsData';
import { motion } from 'framer-motion';

const PortfolioPreview: React.FC = () => {
  // Use first 3 projects
  const previewProjects = allProjects.slice(0, 3);

  return (
    <section className="section bg-dark-100 relative">
      <div className="container">
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-4">Selected Works</p>
            <h2 className="text-white mb-6">Il Nostro <span className="text-light/50 font-light italic">Portfolio</span></h2>
            <div className="w-12 h-[1px] bg-accent mx-auto"></div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {previewProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Link 
                to={`/tutti-i-lavori/${project.id}`} 
                className="group block relative overflow-hidden"
              >
                <div className="aspect-[4/5] overflow-hidden bg-dark-200">
                  <img 
                    src={project.thumbUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-accent text-xs uppercase tracking-widest mb-2 font-semibold">
                      Brand Project
                    </p>
                    <h3 className="text-white text-2xl font-heading tracking-wide mb-0">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <Link to="/tutti-i-lavori" className="inline-flex items-center text-sm uppercase tracking-widest text-light/70 hover:text-accent transition-colors group">
            Vedi tutti i progetti
            <span className="w-8 h-[1px] bg-light/30 group-hover:bg-accent ml-4 group-hover:w-16 transition-all duration-300"></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;