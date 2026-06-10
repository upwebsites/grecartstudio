import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../data/projectsData';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  size?: '1x1' | '2x1' | '2x2';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, size = '1x1' }) => {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    '1x1': 'col-span-1 row-span-1',
    '2x1': 'col-span-2 row-span-1',
    '2x2': 'col-span-2 row-span-2',
  };

  const ratioClasses = {
    '1x1': 'aspect-square',
    '2x1': 'aspect-[2/1]',
    '2x2': 'aspect-square',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 0.98 }}
      whileTap={{ scale: 0.95 }}
      className={`group relative ${sizeClasses[size]} h-full`}
    >
      
      <Link
        to={`/tutti-i-lavori/${project.id}`}
        className={`block relative overflow-hidden bg-dark-200 ring-1 ring-inset ring-light/10 shadow-glass h-full w-full rounded-none group flex flex-col justify-end transition-all duration-300 ${ratioClasses[size]}`}
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
          <h3 className="text-white text-xl font-heading mb-0">{project.title}</h3>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;