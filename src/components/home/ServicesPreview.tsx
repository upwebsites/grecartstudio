import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, BookOpen, Package, Globe, Instagram } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="service-item card p-8 hover:shadow-lg hover:translate-y-[-5px] group">
      <div className="service-icon text-primary-500 mb-5 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-primary-800">{title}</h3>
      <p className="text-neutral-600 mb-4">{description}</p>
      <Link 
        to="/servizi" 
        className="inline-flex items-center text-primary-500 font-medium hover:text-accent-500 transition-colors"
      >
        Scopri di più
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

const ServicesPreview: React.FC = () => {
  const services = [
    {
      icon: <Palette size={42} />,
      title: "Grafica Pubblicitaria",
      description: "Creiamo visual accattivanti per campagne pubblicitarie che catturano l'attenzione e comunicano il tuo messaggio in modo efficace."
    },
    {
      icon: <BookOpen size={42} />,
      title: "Grafica Editoriale",
      description: "Progettiamo layout eleganti per riviste, brochure e cataloghi che valorizzano i tuoi contenuti e rafforzano l'identità del brand."
    },
    {
      icon: <Package size={42} />,
      title: "Packaging",
      description: "Sviluppiamo packaging funzionali e distintivi che si distinguono sugli scaffali e creano un'esperienza memorabile per il consumatore."
    },
    {
      icon: <Globe size={42} />,
      title: "Siti Web",
      description: "Realizziamo siti web responsive e user-friendly che rappresentano al meglio la tua attività online e convertono i visitatori in clienti."
    },
    {
      icon: <Instagram size={42} />,
      title: "Social Media",
      description: "Gestiamo la tua presenza sui social con contenuti creativi e strategie mirate per aumentare l'engagement e la visibilità del tuo brand."
    }
  ];

  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <SectionTitle 
          title="I nostri servizi"
          subtitle="Soluzioni creative su misura per ogni esigenza di comunicazione"
          centered={true}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/servizi" className="btn btn-primary">
            Esplora tutti i servizi
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;