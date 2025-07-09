import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import ServiceDetail from '../components/services/ServiceDetail';
import CtaSection from '../components/home/CtaSection';

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
      imageUrl: "/images/packaging",
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

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-500 py-20 md:py-32">
        <div className="container text-center">
          <h1 className="text-white mb-6">I nostri servizi</h1>
          <p className="text-xl text-neutral-200 max-w-3xl mx-auto">
            Soluzioni creative su misura per far crescere il tuo brand e comunicare in modo efficace con il tuo pubblico.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section">
        <div className="container">
          <SectionTitle 
            title="Cosa facciamo" 
            subtitle="Offriamo un'ampia gamma di servizi creativi per soddisfare tutte le tue esigenze di comunicazione"
            centered={true}
          />
          
          <div className="mt-12">
            {services.map((service, index) => (
              <ServiceDetail 
                key={index}
                title={service.title}
                description={service.description}
                benefits={service.benefits}
                imageUrl={service.imageUrl}
                reverse={service.reverse}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </>
  );
};

export default ServicesPage;