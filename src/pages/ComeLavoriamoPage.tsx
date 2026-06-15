import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';

interface Chapter {
  id: number;
  title: string;
  paragraphs: string[];
  highlight: string;
  imageUrl: string;
  imageAlt: string;
}

const chapters: Chapter[] = [
  {
    id: 1,
    title: "Creatività & Strategia: il nostro carburante",
    paragraphs: [
      "In oltre trent'anni di esperienza nel mondo della comunicazione, abbiamo imparato che per far brillare un'idea bisogna governare ogni suo battito.",
      "Noi di Grecart non ci limitiamo a stampare: costruiamo strategie, raccontiamo storie, progettiamo esperienze visive che parlano al cuore del cliente.",
      "Dalla carta al digitale, dalla stampa al web, mettiamo insieme creatività e tecnologia per offrire soluzioni agili, moderne e davvero su misura.",
    ],
    highlight: "Non inseguire i cambiamenti: con noi, anticipali.",
    imageUrl: "/images/comelavoriamo/creativita.png",
    imageAlt: "Team creativo in riunione",
  },
  {
    id: 2,
    title: "La Prestampa secondo Grecart",
    paragraphs: [
      "Nel cuore pulsante del nostro laboratorio creativo, ogni stampa inizia molto prima della carta: nasce dalla precisione invisibile della prestampa.",
      "Con tecnologia Esko Artwork e stazioni di lavoro su ambienti Mac e Windows, plasmiamo ogni progetto con strumenti aggiornati e raffinati. Ogni file PDF è accolto, analizzato e trasformato attraverso Colorbox di Enfocus, con un controllo Preflight che funziona come un direttore d'orchestra: esamina, corregge, ottimizza.",
      "Le tue idee viaggiano su linee in fibra ottica dedicate e si imprimono su lastre attraverso due linee Kodak Creo completamente automatizzate, con preset di stampa CIP3: il massimo della coerenza cromatica, la minima possibilità di errore.",
    ],
    highlight: "Noi di Grecart non stampiamo solo: mettiamo a punto la sinfonia tecnica che precede l'inchiostro.",
    imageUrl: "/images/comelavoriamo/prestampa.webp",
    imageAlt: "Prestampa laboratorio creativo",
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
  },
];

const ComeLavoriamoPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const isHero = currentStep === 0;
  const isFinal = currentStep === chapters.length + 1;
  const activeChapter = isHero ? null : chapters[currentStep - 1];

  const nextStep = () => {
    if (currentStep < chapters.length + 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <div className="bg-dark min-h-screen text-white overflow-hidden relative font-sans">
      {/* Dynamic Background Gradients */}
       <div className="absolute inset-0 z-0 pointer-events-none">
         <div 
           className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-accent/20 blur-[120px] mix-blend-screen"
         />
         <div 
           className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-light/10 blur-[100px] mix-blend-screen"
         />
       </div>

      {/* Progress Bar */}
      {!isHero && !isFinal && (
        <div className="fixed top-0 left-0 w-full h-1 z-50 bg-white/10">
          <motion.div 
            className="h-full bg-accent"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / (chapters.length + 1)) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      )}

      <AnimatePresence mode="wait">
        {isHero && (
          <motion.section 
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="relative h-screen flex items-center justify-center text-center px-6"
          >
            <div className="max-w-5xl mx-auto z-10">
              <motion.p 
                className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-6 flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="w-12 h-[1px] bg-accent mr-4 inline-block"></span>
                Il Nostro Processo
                <span className="w-12 h-[1px] bg-accent ml-4 inline-block"></span>
              </motion.p>

              <motion.h1 
                className="text-5xl md:text-8xl font-heading mb-8 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Come <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light italic font-light">Lavoriamo.</span>
              </motion.h1>

              <motion.p 
                className="text-xl md:text-2xl text-light/60 font-light max-w-3xl mx-auto mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Dalla prestampa alla distribuzione, ogni fase del nostro processo è orchestrata con precisione, creatività e tecnologia d'avanguardia.
              </motion.p>

               <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                 <motion.button 
                   onClick={nextStep}
                   className="group relative px-8 py-4 bg-transparent border border-accent text-accent overflow-hidden transition-all hover:text-white"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 1 }}
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                 >
                   <span className="relative z-10 flex items-center gap-2 font-semibold uppercase tracking-widest text-sm">
                     Inizia l'esperienza <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                   </span>
                   <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                 </motion.button>

                 <motion.button 
                   onClick={() => setShowSummary(true)}
                   className="px-8 py-4 bg-transparent border border-white/20 text-white/60 hover:text-white hover:border-white transition-all"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 1.2 }}
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                 >
                   <span className="font-semibold uppercase tracking-widest text-sm">
                     Leggi il resoconto
                   </span>
                 </motion.button>
               </div>
            </div>
          </motion.section>
        )}

        {!isHero && !isFinal && activeChapter && (
          <motion.section 
            key={`chapter-${activeChapter.id}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-screen flex items-center justify-center px-6 relative"
          >
            <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-8 z-10">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-4">
                    Step 0{activeChapter.id} / 08
                  </p>
                  <h2 className="text-4xl md:text-6xl font-heading mb-6 leading-tight">
                    {activeChapter.title}
                  </h2>
                </motion.div>

                <div className="space-y-6">
                  {activeChapter.paragraphs.map((p, i) => (
                    <motion.p 
                      key={i} 
                      className="text-light/60 font-light text-lg md:text-xl leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + (i * 0.2) }}
                    >
                      {p}
                    </motion.p>
                  ))}
                </div>

                <motion.div 
                  className="border-l-4 border-accent pl-6 py-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                >
                  <p className="text-light/80 italic font-light text-xl leading-relaxed">
                    {activeChapter.highlight}
                  </p>
                </motion.div>
              </div>

              {/* Image Content */}
              <motion.div 
                className="relative group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-2xl border border-white/10">
                  <motion.img
                    src={activeChapter.imageUrl}
                    alt={activeChapter.imageAlt}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60" />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-accent/30 pointer-events-none" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-accent/30 pointer-events-none" />
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <div className="fixed bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6 z-50">
              <button 
                onClick={prevStep}
                className="p-4 rounded-full border border-white/20 hover:border-accent hover:text-accent transition-all bg-dark/50 backdrop-blur-md"
                title="Precedente"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="flex gap-2">
                {chapters.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 rounded-full transition-all duration-500 ${currentStep === i + 1 ? 'w-8 bg-accent' : 'w-2 bg-white/20'}`} 
                  />
                ))}
              </div>

              <button 
                onClick={nextStep}
                className="p-4 rounded-full border border-white/20 hover:border-accent hover:text-accent transition-all bg-dark/50 backdrop-blur-md"
                title="Successivo"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </motion.section>
        )}

        {isFinal && (
          <motion.section 
            key="final"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="h-screen flex items-center justify-center px-6 relative"
          >
            <div className="container max-w-4xl mx-auto text-center glass-panel p-12 md:p-20 rounded-3xl border border-white/10 backdrop-blur-xl relative z-10">
              <motion.h2 
                className="text-4xl md:text-6xl font-heading mb-8 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Sei pronto a raccontare chi sei, <span className="italic font-light text-light/70">davvero</span>?
              </motion.h2>
              <motion.p 
                className="text-xl text-light/50 font-light max-w-2xl mx-auto mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Siamo Grecart, e la nostra missione è trasformare ogni tua esigenza comunicativa in una storia stampata, digitale, reale. Contattaci, iniziamo a scrivere la tua.
              </motion.p>
               <div className="flex flex-col items-center gap-6">
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: 0.4 }}
                 >
                   <Link to="/contatti" className="btn btn-primary px-12 py-5 inline-flex items-center gap-3 text-lg font-semibold">
                     Contattaci ora <ArrowRight size={20} />
                   </Link>
                 </motion.div>

                 <motion.button 
                   onClick={() => setShowSummary(true)}
                   className="text-light/60 hover:text-white transition-colors underline underline-offset-4 text-sm uppercase tracking-widest"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 0.6 }}
                 >
                   Rileggi il resoconto del metodo
                 </motion.button>
               </div>
            </div>
            
            {/* Final Background Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[80vw] h-[80vw] rounded-full bg-accent/10 blur-[150px]" />
            </div>
          </motion.section>
        )}
       </AnimatePresence>

       {/* Summary Overlay */}
       <AnimatePresence>
         {showSummary && (
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-2xl overflow-y-auto p-6 md:p-12"
           >
             <div className="max-w-4xl mx-auto">
               <div className="flex justify-between items-center mb-12">
                 <h2 className="text-3xl md:text-5xl font-heading">Il Metodo <span className="italic font-light text-accent">Grecart</span></h2>
                 <button 
                   onClick={() => setShowSummary(false)}
                   className="p-2 rounded-full border border-white/20 hover:border-white transition-all"
                 >
                   <span className="text-xs uppercase tracking-widest">Chiudi</span>
                 </button>
               </div>

               <div className="space-y-16">
                 {chapters.map((chapter, i) => (
                   <div key={chapter.id} className="group">
                     <div className="flex items-baseline gap-4 mb-4">
                       <span className="text-accent font-heading text-2xl">0{i+1}</span>
                       <h3 className="text-2xl md:text-3xl font-heading group-hover:text-accent transition-colors">{chapter.title}</h3>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-4">
                         {chapter.paragraphs.map((p, pi) => (
                           <p key={pi} className="text-light/60 font-light leading-relaxed">{p}</p>
                         ))}
                       </div>
                       <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                         <p className="text-accent italic font-light text-lg leading-relaxed">
                           "{chapter.highlight}"
                         </p>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>

               <div className="mt-20 text-center">
                 <button 
                   onClick={() => setShowSummary(false)}
                   className="px-8 py-4 border border-accent text-accent hover:bg-accent hover:text-white transition-all uppercase tracking-widest text-sm font-semibold"
                 >
                   Torna all'esperienza
                 </button>
               </div>
             </div>
           </motion.div>
         )}
       </AnimatePresence>
     </div>
  );
};

export default ComeLavoriamoPage;
