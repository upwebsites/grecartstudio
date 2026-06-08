import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Chapter {
  id: number;
  title: string;
  paragraphs: string[];
  highlight: string;
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean;
}

const chapters: Chapter[] = [
  {
    id: 1,
    title: "La Prestampa secondo Grecart",
    paragraphs: [
      "Nel cuore pulsante del nostro laboratorio creativo, ogni stampa inizia molto prima della carta: nasce dalla precisione invisibile della prestampa.",
      "Con tecnologia Esko Artwork e stazioni di lavoro su ambienti Mac e Windows, plasmiamo ogni progetto con strumenti aggiornati e raffinati. Ogni file PDF è accolto, analizzato e trasformato attraverso Colorbox di Enfocus, con un controllo Preflight che funziona come un direttore d'orchestra: esamina, corregge, ottimizza.",
      "Le tue idee viaggiano su linee in fibra ottica dedicate e si imprimono su lastre attraverso due linee Kodak Creo completamente automatizzate, con preset di stampa CIP3: il massimo della coerenza cromatica, la minima possibilità di errore.",
    ],
    highlight: "Noi di Grecart non stampiamo solo: mettiamo a punto la sinfonia tecnica che precede l'inchiostro.",
    imageUrl: "/images/comelavoriamo/prestampa.webp",
    imageAlt: "Prestampa laboratorio creativo",
    reverse: false,
  },
  {
    id: 2,
    title: "Creatività & Strategia: il nostro carburante",
    paragraphs: [
      "In oltre trent'anni di esperienza nel mondo della comunicazione, abbiamo imparato che per far brillare un'idea bisogna governare ogni suo battito.",
      "Noi di Grecart non ci limitiamo a stampare: costruiamo strategie, raccontiamo storie, progettiamo esperienze visive che parlano al cuore del cliente.",
      "Dalla carta al digitale, dalla stampa al web, mettiamo insieme creatività e tecnologia per offrire soluzioni agili, moderne e davvero su misura.",
    ],
    highlight: "Non inseguire i cambiamenti: con noi, anticipali.",
    imageUrl: "/images/comelavoriamo/creativita.png",
    imageAlt: "Team creativo in riunione",
    reverse: true,
  },
  {
    id: 3,
    title: "Stampa Roto-Offset: il respiro lungo della comunicazione",
    paragraphs: [
      "La stampa roto-offset è il nostro motore per l'alta tiratura, perfetta per chi ha bisogno di parlare in grande.",
      "Volantini, giornali, riviste, brochure: grazie a macchine rotative a bobina, stampiamo su carta leggera con una velocità e precisione sorprendenti.",
      "Affidati a Grecart per raggiungere ogni casa, ogni lettore, ogni passante.",
    ],
    highlight: "La nostra squadra assicura uniformità cromatica, fedeltà ai dettagli e performance costanti, anche sui supporti più delicati.",
    imageUrl: "/images/comelavoriamo/rotoffset.jpg",
    imageAlt: "Stampa roto-offset in azione",
    reverse: false,
  },
  {
    id: 4,
    title: "Stampa Offset: precisione, eleganza, impatto",
    paragraphs: [
      "Quando il dettaglio fa la differenza, entra in scena la nostra stampa offset.",
      "Su carta o cartone, a tirature elevate o per progetti editoriali e commerciali di grande valore, Grecart trasforma ogni file in una stampa che colpisce, persuade, comunica.",
    ],
    highlight: "I nostri impianti offset dialogano con il territorio: mettiamo le nostre macchine a disposizione anche delle tipografie locali, perché fare rete è parte della nostra identità.",
    imageUrl: "/images/comelavoriamo/offset.jpg",
    imageAlt: "Stampa offset su carta e cartone",
    reverse: true,
  },
  {
    id: 5,
    title: "GDO: Dati, Grafica, Velocità.",
    paragraphs: [
      "La Grande Distribuzione ha i suoi tempi. Noi li anticipiamo.",
      "Con un archivio proprietario di oltre 100.000 immagini e schede prodotto, sistemi automatici di impaginazione e stampa, e la capacità di gestire dati variabili su larga scala, Grecart è il partner ideale per la GDO.",
      "Stampiamo tutto, dal biglietto da visita al poster 6×3, anche in pochissime copie. Personalizziamo ogni kit, spediamo ovunque.",
    ],
    highlight: "Il tuo punto vendita può ordinare direttamente con i nostri sistemi \"web to point\", e noi ci occupiamo del resto: grafica, stampa, logistica.",
    imageUrl: "/images/comelavoriamo/gdo.jpg",
    imageAlt: "Gestione dati e grafica per la GDO",
    reverse: false,
  },
  {
    id: 6,
    title: "Volantini Promozionali: milioni di copie, un solo cuore creativo",
    paragraphs: [
      "Ogni anno stampiamo milioni di volantini promozionali per le insegne più importanti, in Italia e in Europa.",
      "Ma non è solo quantità: è qualità, tempestività e personalizzazione.",
      "Ogni volantino può essere un messaggio unico per un target preciso. Non ci limitiamo a stampare: analizziamo i dati, personalizziamo, ottimizziamo.",
    ],
    highlight: "La comunicazione di massa ha bisogno di dettagli, e noi li conosciamo tutti.",
    imageUrl: "/images/comelavoriamo/volantini.jpg",
    imageAlt: "Volantini promozionali in stampa",
    reverse: true,
  },
  {
    id: 7,
    title: "Allestimento Punti Vendita: rendiamo visibile la tua voce",
    paragraphs: [
      "Là dove il cliente sceglie, ogni elemento conta.",
      "Con la nostra divisione dedicata agli allestimenti per il punto vendita, trasformiamo spazi in esperienze.",
      "Stampiamo manifesti, roll-up, pannelli, stopper, pendolini, display, su ogni tipo di materiale e in qualsiasi formato.",
    ],
    highlight: "Che siano promozioni o branding, ogni messaggio trova il suo supporto ideale, pronto a stupire, convincere, vendere.",
    imageUrl: "/images/comelavoriamo/allestimento.jpg",
    imageAlt: "Allestimento punto vendita",
    reverse: false,
  },
  {
    id: 8,
    title: "Siti Web & E-Commerce: la tua identità, il nostro design",
    paragraphs: [
      "Un sito web è più di una vetrina: è la prima impressione che lasci.",
      "A Grecart partiamo da un ascolto profondo: capiamo chi sei, dove vuoi andare, e costruiamo un sito che lo racconti con precisione visiva e funzionale.",
      "Ogni progetto è responsive, pensato per offrire la miglior esperienza da ogni dispositivo. UX, UI, copy, immagini: ogni elemento è progettato per farti emergere online.",
    ],
    highlight: "E se vendi online, lo facciamo diventare il tuo miglior venditore.",
    imageUrl: "/images/comelavoriamo/ecommerce.jpg",
    imageAlt: "Siti web e e-commerce design",
    reverse: true,
  },
];

const ComeLavoriamoPage: React.FC = () => {
  return (
    <div className="bg-dark min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/5 rounded-full blur-[120px] z-0"></div>
        <div className="container relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-6"
          >
            Il Nostro Processo
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white mb-6"
          >
            Come <span className="italic font-light text-light/70">Lavoriamo</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-light/60 font-light text-lg max-w-2xl mx-auto"
          >
            Dalla prestampa alla distribuzione, ogni fase del nostro processo è orchestrata con precisione, creatività e tecnologia d'avanguardia.
          </motion.p>
        </div>
      </section>

      {/* Chapters */}
      <section className="pb-32 bg-dark-100 border-t border-light/5">
        <div className="container">
          {chapters.map((ch) => (
            <motion.div
              key={ch.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="py-20 border-b border-light/5 last:border-b-0"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}>
                {/* Text */}
                <div className={ch.reverse ? 'order-1 lg:order-2' : 'order-1'}>
                  <p className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-4">
                    0{ch.id}
                  </p>
                  <h2 className="text-white text-3xl md:text-4xl font-heading mb-6 leading-snug">{ch.title}</h2>
                  <div className="space-y-4 mb-8">
                    {ch.paragraphs.map((p, i) => (
                      <p key={i} className="text-light/60 font-light text-lg leading-relaxed">{p}</p>
                    ))}
                  </div>
                  <blockquote className="border-l-2 border-accent pl-6 py-1">
                    <p className="text-light/80 italic font-light leading-relaxed">{ch.highlight}</p>
                  </blockquote>
                </div>

                {/* Image */}
                <div className={`${ch.reverse ? 'order-2 lg:order-1' : 'order-2'} relative`}>
                  <div className="relative overflow-hidden rounded-sm bg-dark-200 border border-light/5 aspect-[4/3]">
                    <img
                      src={ch.imageUrl}
                      alt={ch.imageAlt}
                      className="w-full h-full object-cover opacity-70 hover:opacity-90 transition-opacity duration-700 hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute top-0 left-0 w-16 h-[2px] bg-accent"></div>
                    <div className="absolute top-0 left-0 w-[2px] h-16 bg-accent"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[80vw] h-[80vw] rounded-full bg-accent/10 blur-[150px]"></div>
        </div>
        <div className="container relative z-10 text-center glass-panel p-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading mb-6 text-white">
            Sei pronto a raccontare chi sei, <span className="italic font-light text-light/70">davvero</span>?
          </h2>
          <p className="text-xl text-light/50 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Siamo Grecart, e la nostra missione è trasformare ogni tua esigenza comunicativa in una storia stampata, digitale, reale. Contattaci, iniziamo a scrivere la tua.
          </p>
          <Link to="/contatti" className="btn btn-primary px-12 py-5">
            Contattaci ora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ComeLavoriamoPage;