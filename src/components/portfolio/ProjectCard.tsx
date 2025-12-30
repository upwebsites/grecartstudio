import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../data/projectsData';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Link
      to={`/tutti-i-lavori/${project.id}`}
      className="portfolio-item group block relative overflow-hidden rounded-lg shadow-custom"
    >
      <div className="aspect-[4/3] overflow-hidden">
        {!imageError ? (
          <img
            src={project.thumbUrl}
            alt={project.title}
            className="portfolio-image w-full h-full object-contain transition-transform duration-500"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-neutral-200 flex items-center justify-center">
            <span className="text-neutral-500 text-sm">{project.title}</span>
          </div>
        )}
        <div className="portfolio-overlay absolute inset-0 bg-gradient-to-t from-primary-900/90 to-primary-800/70 opacity-0 transition-opacity duration-300 flex flex-col justify-end p-6">
          <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;