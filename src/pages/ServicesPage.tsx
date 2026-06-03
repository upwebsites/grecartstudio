import React from 'react';
import ServiceDetail from '../components/services/ServiceDetail';
import CtaSection from '../components/home/CtaSection';
import { motion } from 'framer-motion';
import { Palette, BookOpen, Package, Globe, Instagram } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "Grafica Pubblicitaria",
      description: "Creiamo campagne pubblicitarie d'impatto che catturano l'attenzione del pubblico e comunicano efficacemente il messaggio del tuo brand. Dal concept creativo alla realizzazione finale, sviluppiamo soluzioni visive che si distinguono e lasciano il segno.",
      benefits: [
        "Visual accattivanti per campagne online e offline",
        "Manifesti, locandine e materiali promozionali",
        "Banner e inserzioni digitali ottimizzati per ogni piattaforma",
        "Concept creativi personalizzati e strategici"
      ],
      imageUrl: "https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1600",
      reverse: false
    },
    {
      title: "Grafica Editoriale",
      description: "Progettiamo layout eleganti e funzionali per pubblicazioni cartacee e digitali che valorizzano i contenuti e riflettono l'identità del brand. Dalla scelta tipografica alla composizione delle pagine, curiamo ogni dettaglio per creare esperienze di lettura ottimali.",
      benefits: [
        "Design di riviste, brochure e cataloghi",
        "Layout intuitivi e gerarchie visive efficaci",
        "Selezione tipografica accurata e studiata",
        "Equilibrio perfetto tra testo e immagini"
      ],
      imageUrl: "/images/editorial.webp",
      reverse: true
    },
    {
      title: "Packaging Design",
      description: "Creiamo packaging che non sono solo contenitori, ma vere e proprie esperienze di marca. Progettiamo soluzioni che combinano estetica, funzionalità e storytelling per distinguerti sugli scaffali e creare un legame emotivo con i consumatori.",
      benefits: [
        "Design di packaging distintivi e memorabili",
        "Soluzioni che bilanciano estetica e funzionalità",
        "Esperienza di unboxing coinvolgente",
        "Coerenza con l'identità di marca"
      ],
      imageUrl: "https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=1600",
      reverse: false
    },
    {
      title: "Siti Web",
      description: "Realizziamo siti web responsive, intuitivi e coinvolgenti che rappresentano al meglio la tua attività online. Dalla struttura all'esperienza utente, sviluppiamo piattaforme digitali che non solo attraggono visitatori, ma li convertono in clienti.",
      benefits: [
        "Design responsive ottimizzato per tutti i dispositivi",
        "Interfacce intuitive centrate sull'utente",
        "Tempi di caricamento veloci e ottimizzazione SEO",
        "Integrazioni con sistemi di e-commerce e CRM"
      ],
      imageUrl: "https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1600",
      reverse: true
    },
    {
      title: "Social Media",
      description: "Gestiamo la tua presenza sui social media con contenuti creativi e strategie mirate per aumentare engagement, visibilità e conversioni. Creiamo un ecosistema digitale coerente che rafforza la tua identità di marca e costruisce relazioni durature con il tuo pubblico.",
      benefits: [
        "Strategie personalizzate per ogni piattaforma",
        "Contenuti visivi di qualità e coinvolgenti",
        "Pianificazione editoriale strategica",
        "Monitoraggio e analisi delle performance"
      ],
      imageUrl: "https://images.pexels.com/photos/177557/pexels-photo-177557.jpeg?auto=compress&cs=tinysrgb&w=1600",
      reverse: false
    }
  ];

  const serviceIcons = [Palette, BookOpen, Package, Globe, Instagram];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/5 rounded-full blur-[120px] z-0"></div>
        <div className="container relative z-10 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-6"
          >
            Cosa Facciamo
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white mb-6"
          >
            I nostri <span className="italic font-light text-light/70">servizi</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-light/60 font-light text-lg max-w-2xl mx-auto"
          >
            Soluzioni creative su misura per far crescere il tuo brand e comunicare in modo straordinariamente efficace con il tuo pubblico.
          </motion.p>
        </div>
      </section>

      {/* Service Capsule List */}
      <section className="py-16 bg-dark border-b border-light/5">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service, i) => {
              const Icon = serviceIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="flex items-center gap-3 px-6 py-3 glass-panel text-sm text-light/70 hover:text-accent hover:border-accent/30 transition-colors cursor-default"
                >
                  <Icon size={14} className="text-accent" />
                  {service.title}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Detail List */}
      <section className="section bg-dark-100">
        <div className="container">
          {services.map((service, index) => (
            <ServiceDetail 
              key={index}
              index={index}
              title={service.title}
              description={service.description}
              benefits={service.benefits}
              imageUrl={service.imageUrl}
              reverse={service.reverse}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </>
  );
};

export default ServicesPage;