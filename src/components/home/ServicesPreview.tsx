import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, BookOpen, Package, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div 
      className="glass-panel p-10 hover:bg-dark-200/50 transition-all duration-500 group relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110 pointer-events-none">
        {React.cloneElement(icon as React.ReactElement, { size: 120 })}
      </div>
      
      <div className="text-accent mb-8">
        {icon}
      </div>
      <h3 className="text-2xl font-heading font-medium tracking-wide text-white mb-4 group-hover:text-accent transition-colors">{title}</h3>
      <p className="text-light/60 mb-8 font-light leading-relaxed relative z-10">{description}</p>
      
      <Link 
        to="/servizi" 
        className="inline-flex items-center text-sm uppercase tracking-widest text-white group-hover:text-accent transition-colors relative z-10"
      >
        Scopri
        <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
      </Link>
    </motion.div>
  );
};

const ServicesPreview: React.FC = () => {
  const services = [
    {
      icon: <Palette size={32} strokeWidth={1} />,
      title: "Brand Identity",
      description: "Creiamo identità visive uniche e scalabili che catturano l'essenza del tuo brand e lo posizionano al vertice del tuo settore."
    },
    {
      icon: <BookOpen size={32} strokeWidth={1} />,
      title: "Art Direction",
      description: "Curiamo l'estetica e la coerenza visiva in ogni touchpoint, garantendo una narrazione visiva impeccabile e memorabile."
    },
    {
      icon: <Globe size={32} strokeWidth={1} />,
      title: "Digital & Web",
      description: "Progettiamo interfacce, esperienze utente e siti web premium con tecnologie all'avanguardia per un impatto digitale di lusso."
    },
    {
      icon: <Package size={32} strokeWidth={1} />,
      title: "Packaging Design",
      description: "Sviluppiamo packaging funzionali e dal design scultoreo che si distinguono sugli scaffali e creano un'esperienza memorabile."
    }
  ];

  return (
    <section className="section bg-dark relative">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <motion.p 
              className="text-accent uppercase tracking-[0.2em] text-xs font-semibold mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Cosa Facciamo
            </motion.p>
            <motion.h2 
              className="text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Eccellenza in ogni <br/><span className="text-light/40">dettaglio visivo.</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 md:mt-0"
          >
            <Link to="/servizi" className="btn btn-outline text-xs">
              Vedi tutte le capabilities
            </Link>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              index={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;