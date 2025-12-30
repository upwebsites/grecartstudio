import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { allProjects } from '../data/projectsData';
import DearFlipViewer from '../components/portfolio/DearFlipViewer';

const DEARFLIP_LICENSE_KEY = 'sk_vzsTC&B*#5mKQ6Gc*lV+CEKXe:VJ1';

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project = allProjects.find(p => p.id === projectId);

  const [activePdf, setActivePdf] = useState(0);
  const [selectedPDF, setSelectedPDF] = useState<{url: string, title: string} | null>(null);

  if (!project) {
    return (
      <div className="section container text-center">
        <h2 className="text-2xl font-semibold text-primary-800 mb-6">Progetto non trovato</h2>
        <p className="text-neutral-600 mb-8">
          Il progetto che stai cercando non esiste o è stato rimosso.
        </p>
        <Link to="/tutti-i-lavori" className="btn btn-primary">
          Torna al portfolio
        </Link>
      </div>
    );
  }

  // Find next and previous projects
  const currentIndex = allProjects.findIndex(p => p.id === projectId);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];

  // Titoli personalizzati per i PDF basati sul progetto
  const getPdfTitle = (index: number) => {
    if (project.id === "le-delizie-del-sud") {
      const titles = ["Canvass", "Progetto Pulito", "PetFood", "Supermercati"];
      return titles[index] || `PDF ${index + 1}`;
    }
    if (project.id === "merini-overline") {
      const titles = ["Linea Consumer", "Linea Professional Altri Prodotti", "Linea Professional Shampoo", "Mockup Overline Academy"];
      return titles[index] || `PDF ${index + 1}`;
    }
    return `PDF ${index + 1}`;
  };

  const handlePDFClick = (url: string, title: string) => {
    setSelectedPDF({ url, title });
  };

  const closePDF = () => {
    setSelectedPDF(null);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-500 py-20">
        <div className="container">
          <Link to="/tutti-i-lavori" className="inline-flex items-center text-white hover:text-accent-300 mb-6 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Torna al portfolio
          </Link>
          <h1 className="text-white mb-4">{project.title}</h1>
        </div>
      </section>
      {/* Project Gallery / PDF DearFlip */}
      <section className="section bg-neutral-50">
        <div className="container">
          {/* Visualizza prima i PDF */}
          {project.pdfUrls && project.pdfUrls.length > 0 ? (
            <>
              <div className="flex justify-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                  {project.pdfUrls.map((url, i) => (
                    <div key={url} className="flex flex-col items-center">
                      <div 
                        onClick={() => handlePDFClick(url, getPdfTitle(i))}
                        className="cursor-pointer group relative overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
                        style={{ width: '140px', height: '180px' }}
                      >
                        <div className="flex items-center justify-center w-full h-full">
                          <img
                            src={project.thumbUrl}
                            alt={getPdfTitle(i)}
                            className="w-full h-full object-contain"
                            style={{maxWidth: '100%', maxHeight: '100%'}}
                          />
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white p-2 shadow-lg">
                              <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 text-center" style={{ width: '140px' }}>
                        <h3 className="text-sm font-medium text-gray-800 group-hover:text-primary-600 transition-colors">
                          {getPdfTitle(i)}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : null}
          {!project.pdfUrls && project.pdfUrl && (
            <DearFlipViewer pdfUrl={project.pdfUrl} licenseKey={DEARFLIP_LICENSE_KEY} showIcons={true} />
          )}
          {/* Visualizza sempre le immagini se presenti */}
          {project.imageUrls && project.imageUrls.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
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

      {/* PDF Viewer Modal */}
      {selectedPDF && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold text-primary-800">{selectedPDF.title}</h3>
              <button
                onClick={closePDF}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="p-4 overflow-auto max-h-[calc(90vh-80px)]">
              <DearFlipViewer
                pdfUrl={selectedPDF.url}
                licenseKey={DEARFLIP_LICENSE_KEY}
                showIcons={true}
              />
            </div>
          </div>
        </div>
      )}
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
              to={`/tutti-i-lavori/${prevProject.id}`}
              className="flex items-center text-primary-700 hover:text-primary-500 transition-colors mb-4 md:mb-0"
            >
              <ArrowLeft size={20} className="mr-2" />
              <div>
                <span className="block text-sm text-neutral-500">Progetto precedente</span>
                <span className="font-medium">{prevProject.title}</span>
              </div>
            </Link>
            <Link
              to={`/tutti-i-lavori/${nextProject.id}`}
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