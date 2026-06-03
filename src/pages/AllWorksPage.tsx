import React from 'react';
import { Link } from 'react-router-dom';
import { allProjects } from '../data/projectsData';
import { motion } from 'framer-motion';

const AllWorksPage: React.FC = () => {
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
            L'Eccellenza Creativa
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white mb-6"
          >
            Tutti i <span className="italic font-light text-light/70">Lavori</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-light/60 font-light text-lg max-w-2xl mx-auto"
          >
            Esplora il nostro portfolio completo: dal brand design all'editoria, ogni progetto è un capolavoro di comunicazione visiva.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="section bg-dark-100">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 md:gap-x-12 md:gap-y-16 justify-items-center">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Link
                  to={`/tutti-i-lavori/${project.id}`}
                  className="group flex flex-col items-center w-[140px]"
                >
                  <div className="relative w-full h-[180px] bg-dark-200 overflow-hidden rounded-md border border-light/5 shadow-glass transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_10px_40px_rgba(212,175,55,0.15)] flex justify-center items-center">
                    <img
                      src={project.thumbUrl}
                      alt={project.title}
                      className="w-[85%] h-[85%] object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <span className="text-white bg-accent/80 backdrop-blur-sm p-3 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="mt-5 text-center">
                    <h3 className="text-xs uppercase tracking-widest font-semibold text-light/80 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20 z-0"></div>
        <div className="container text-center relative z-10 glass-panel p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading mb-6 text-white">Pronto a trasformare la tua <span className="italic font-light text-light/70">visione</span>?</h2>
          <p className="text-light/60 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Sei stato ispirato dai nostri lavori? Creiamo qualcosa di straordinario anche per il tuo brand.
          </p>
          <Link to="/contatti" className="btn btn-primary px-10">
            Contattaci Ora
          </Link>
        </div>
      </section>
    </>
  );
};

export default AllWorksPage;
