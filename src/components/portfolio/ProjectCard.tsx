import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../data/projectsData';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <Link
        to={`/tutti-i-lavori/${project.id}`}
        className="block relative overflow-hidden bg-dark-200 border border-light/5 shadow-glass h-[400px] rounded-sm group flex flex-col justify-end"
      >
        <div className="absolute inset-0 p-8 flex items-center justify-center">
          {!imageError ? (
            <img
              src={project.thumbUrl}
              alt={project.title}
              className="w-[80%] h-[80%] object-contain transition-transform duration-700 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-dark-100 flex items-center justify-center">
              <span className="text-light/50 text-sm font-light tracking-widest uppercase">{project.title}</span>
            </div>
          )}
        </div>
        
        {/* Subtle vignette and text reveal */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent p-6 flex flex-col justify-end transform translate-y-6 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <p className="text-accent text-[10px] uppercase tracking-[0.2em] font-medium mb-1">
            Studio Lavoro
          </p>
          <h3 className="text-white text-xl font-heading mb-0">{project.title}</h3>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;