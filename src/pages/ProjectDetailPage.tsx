import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { allProjects } from '../data/projectsData';
import PdfFlipbook from '../components/portfolio/PdfFlipbook';

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project = allProjects.find(p => p.id === projectId);

  // Gestione selezione PDF multiplo se presente
  const [activePdf, setActivePdf] = useState(0);

  if (!project) {
    return (
      <div className="section container text-center">
        <h2 className="text-2xl font-semibold text-primary-800 mb-6">Progetto non trovato</h2>
        <p className="text-neutral-600 mb-8">
          Il progetto che stai cercando non esiste o è stato rimosso.
        </p>
        <Link to="/portfolio" className="btn btn-primary">
          Torna al portfolio
        </Link>
      </div>
    );
  }

  // Find next and previous projects
  const currentIndex = allProjects.findIndex(p => p.id === projectId);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-500 py-20">
        <div className="container">
          <Link to="/portfolio" className="inline-flex items-center text-white hover:text-accent-300 mb-6 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Torna al portfolio
          </Link>
          <h1 className="text-white mb-4">{project.title}</h1>
        </div>
      </section>
      {/* Project Gallery / PDF Flipbook */}
      <section className="section bg-neutral-50">
        <div className="container">
          {project.pdfUrls && project.pdfUrls.length > 0 ? (
            <>
              {/* Selettore PDF (con pulsanti o select semplice) */}
              <div className="mb-4 flex gap-3 flex-wrap">
                {project.pdfUrls.map((url, i) => (
                  <button
                    key={url}
                    onClick={() => setActivePdf(i)}
                    className={`btn ${i === activePdf ? 'btn-primary' : 'btn-outline'} text-sm`}
                  >
                    PDF {i + 1}
                  </button>
                ))}
              </div>
              <PdfFlipbook url={project.pdfUrls[activePdf]} />
            </>
          ) : project.pdfUrl ? (
            <PdfFlipbook url={project.pdfUrl} title={project.title} />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {project.imageUrls.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-custom">
                  <img
                    src={image}
                    alt={`${project.title} - Immagine ${index + 1}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      {/* Project Details */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-primary-800 mb-3">Il progetto</h3>
              <p className="text-neutral-600">{project.description}</p>
            </div>
          </div>
        </div>
      </section>
      {/* Next/Prev Navigation */}
      <section className="bg-neutral-50 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link
              to={`/portfolio/${prevProject.id}`}
              className="flex items-center text-primary-700 hover:text-primary-500 transition-colors mb-4 md:mb-0"
            >
              <ArrowLeft size={20} className="mr-2" />
              <div>
                <span className="block text-sm text-neutral-500">Progetto precedente</span>
                <span className="font-medium">{prevProject.title}</span>
              </div>
            </Link>
            <Link
              to={`/portfolio/${nextProject.id}`}
              className="flex items-center text-primary-700 hover:text-primary-500 transition-colors text-right"
            >
              <div>
                <span className="block text-sm text-neutral-500">Progetto successivo</span>
                <span className="font-medium">{nextProject.title}</span>
              </div>
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-primary-800 mb-6">Hai un'idea simile?</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            Possiamo aiutarti a trasformare la tua visione in realtà. Contattaci per discutere del tuo progetto.
          </p>
          <Link to="/contatti" className="btn btn-primary text-lg">
            Contattaci
          </Link>
        </div>
      </section>
    </>
  );
};

export default ProjectDetailPage;