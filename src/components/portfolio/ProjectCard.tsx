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
      className={`group relative ${sizeClasses[size]} h-full`}
    >
      <motion.div
        whileHover={{ scale: 0.98 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="h-full w-full"
      >
        <Link
          to={`/tutti-i-lavori/${project.id}`}
           className={`block relative overflow-hidden bg-dark-200 ring-1 ring-inset ring-light/10 shadow-glass h-full w-full rounded-none group flex flex-col justify-end transition-all duration-300 group-hover:ring-0 group-hover:bg-dark-100 ${ratioClasses[size]}`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {!imageError ? (
              <img
                src={project.thumbUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full bg-dark-100 flex items-center justify-center">
                <span className="text-light/50 text-sm font-light tracking-widest uppercase">{project.title}</span>
              </div>
            )}
          </div>
          
        {/* Dark overlay and centered text reveal */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
            <h3 className="text-white text-xl font-heading opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.title}
            </h3>
          </div>

          {/* Bottom gradient and client name */}
          <div className="absolute bottom-0 left-0 right-0 p-4 pb-3 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none">
            <span className="text-yellow-400 text-[10px] font-bold uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity duration-300">
              {project.title}
            </span>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;