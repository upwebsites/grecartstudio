import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { allProjects } from '../data/projectsData';
import PDFThumbnail from '../components/portfolio/PDFThumbnail';
import DearFlipViewer from '../components/portfolio/DearFlipViewer';

const DEARFLIP_LICENSE_KEY = 'sk_vzsTC&B*#5mKQ6Gc*lV+CEKXe:VJ1';

const AllWorksPage: React.FC = () => {
  const [selectedPDF, setSelectedPDF] = useState<{url: string, title: string} | null>(null);

  // Raccogli tutti i PDF da tutti i progetti
  const allPDFs = allProjects.flatMap(project => {
    const pdfs = [];
    
    if (project.pdfUrl) {
      pdfs.push({
        url: project.pdfUrl,
        title: project.title,
        projectId: project.id,
        thumbUrl: project.thumbUrl
      });
    }
    
    if (project.pdfUrls) {
      project.pdfUrls.forEach((url, index) => {
        pdfs.push({
          url: url,
          title: `${project.title} - PDF ${index + 1}`,
          projectId: project.id,
          thumbUrl: project.thumbUrl
        });
      });
    }
    
    return pdfs;
  });

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
          <h1 className="text-white mb-4">Tutti i Nostri Lavori</h1>
          <p className="text-white text-lg opacity-90">
            Esplora tutti i volantini e cataloghi che abbiamo realizzato per i nostri clienti
          </p>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">Portfolio</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              I progetti che valorizzano la nostra esperienza creativa
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-x-48 gap-y-8">
            {allProjects.map(project => (
              <Link
                key={project.id}
                to={`/tutti-i-lavori/${project.id}`}
                className="cursor-pointer group"
              >
                <div className="relative overflow-hidden shadow-md hover:shadow-lg transition-transform duration-500 bg-white group-hover:scale-110 group-hover:rotate-[10deg]" style={{ width: '140px', height: '180px' }}>
                  <div className="flex items-center justify-center w-full h-full">
                    <img
                      src={project.thumbUrl}
                      alt={project.title}
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
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
            </div>
          </div>
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

      {/* CTA Section */}
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

export default AllWorksPage;
