import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  position: string;
  content: string;
  rating: number;
  imageUrl: string;
  date: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Marco Bianchi",
      company: "NapoliFood",
      position: "Direttore Marketing",
      content: "Grecart Studio ha reinventato completamente la nostra identità visiva. Dall'aggiornamento del logo alla creazione del packaging per la nostra nuova linea di prodotti, hanno interpretato perfettamente la nostra visione. Grazie al loro lavoro, abbiamo registrato un aumento del 30% nelle vendite nei primi tre mesi dal lancio.",
      rating: 5,
      imageUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: "Marzo 2024"
    },
    {
      id: 2,
      name: "Laura Rossi",
      company: "Boutique Eleganza",
      position: "Proprietaria",
      content: "Dopo anni di presenza online mediocre, il nostro sito web creato da Grecart Studio ha finalmente dato alla nostra boutique la visibilità che meritava. Design elegante, facile da navigare e perfettamente in linea con l'estetica del nostro brand. Le conversioni sono aumentate significativamente!",
      rating: 5,
      imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: "Aprile 2024"
    },
    {
      id: 3,
      name: "Gianni Verdi",
      company: "TechNova",
      position: "CEO",
      content: "La campagna pubblicitaria sviluppata da Grecart Studio per il lancio del nostro nuovo prodotto ha superato ogni aspettativa. Creatività, attenzione ai dettagli e una profonda comprensione del nostro target hanno fatto la differenza. Continueremo sicuramente a collaborare per i nostri progetti futuri.",
      rating: 4,
      imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: "Maggio 2024"
    },
    {
      id: 4,
      name: "Sofia Conti",
      company: "Caffè Roma",
      position: "Manager",
      content: "Il rebranding completo della nostra catena di caffè è stato un successo totale. Grecart Studio ha saputo catturare l'essenza del nostro brand e trasformarla in una identità visiva moderna e accattivante. I clienti si fermano sempre a complimentarsi per l'eleganza del design!",
      rating: 5,
      imageUrl: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: "Giugno 2024"
    },
    {
      id: 5,
      name: "Alessandro Marino",
      company: "FitnessPro",
      position: "Founder",
      content: "Il packaging dei nostri integratori è passato da anonimo a iconico grazie a Grecart Studio. Ogni prodotto ora racconta una storia e i clienti apprezzano la qualità visiva. Vendite aumentate del 45% in 6 mesi!",
      rating: 5,
      imageUrl: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: "Luglio 2024"
    },
    {
      id: 6,
      name: "Chiara Ferretti",
      company: "Studio Legale Ferretti",
      position: "Avvocato Senior",
      content: "Il sito istituzionale che Grecart Studio ha creato per il nostro studio legale trasmette professionalità e affidabilità. Il feedback dei clienti è stato entusiasta e abbiamo già ricevuto diverse richieste di contatto grazie alla nuova presenza online.",
      rating: 5,
      imageUrl: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: "Agosto 2024"
    },
    {
      id: 7,
      name: "Roberto Neri",
      company: "Oro & Argento",
      position: "Gioielliere",
      content: "La campagna social media gestita da Grecart Studio ha trasformato la nostra piccola gioielleria in un brand riconoscibile. La strategia di content marketing ha portato nuovi clienti e aumentato significativamente la nostra visibilità online.",
      rating: 4,
      imageUrl: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: "Settembre 2024"
    },
    {
      id: 8,
      name: "Valentina De Luca",
      company: "Bellezza Naturale",
      position: "Responsabile Produzione",
      content: "Il design del packaging per la nostra nuova linea di cosmetici biologici è semplicemente straordinario. Grecart Studio ha capito perfettamente l'anima green del brand e l'ha trasformata in un design elegante e innovativo che spicca sugli scaffali.",
      rating: 5,
      imageUrl: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: "Ottobre 2024"
    },
    {
      id: 9,
      name: "Francesco Rizzo",
      company: "Gusto Nostrale",
      position: "Proprietario",
      content: "Dalla carta menù al design del locale, Grecart Studio ha dato un volto completamente nuovo al nostro ristorante. L'identità visiva ora racconta la nostra storia di tradizione e qualità. Le recensioni hanno fatto un salto di qualità!",
      rating: 5,
      imageUrl: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: "Novembre 2024"
    },
    {
      id: 10,
      name: "Elena Moretti",
      company: "Wellness Center",
      position: "Direttrice",
      content: "Il progetto completo di branding per il nostro centro benessere ha superato ogni aspettativa. Grazie al lavoro di Grecart Studio abbiamo una presenza coesa su tutti i canali, dal sito web alle brochure fino ai social media. Il risultato parla da solo: +60% nuovi iscritti!",
      rating: 5,
      imageUrl: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: "Dicembre 2024"
    },
    {
      id: 11,
      name: "Luca Santoro",
      company: "AutoSport Italia",
      position: "Manager Marketing",
      content: "La campagna per il lancio della nostra nuova linea di accessori auto è stata un capolavoro di creatività. Grecart Studio ha saputo catturare lo spirito sportivo del brand e tradurlo in una comunicazione visiva d'impatto che ha risuonato perfettamente con il nostro target.",
      rating: 5,
      imageUrl: "https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: "Gennaio 2025"
    },
    {
      id: 12,
      name: "Giulia Romano",
      company: "Casa del Design",
      position: "Arredatrice",
      content: "Il catalogo prodotto che Grecart Studio ha creato per il nostro showroom è un'opera d'arte. Ogni pagina è curata nei minimi dettagli e il layout valorizza perfettamente i nostri mobili di design. I clienti lo conservano come oggetto da collezione!",
      rating: 5,
      imageUrl: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: "Febbraio 2025"
    },
    {
      id: 13,
      name: "Daniele Colombo",
      company: "TechLog Solutions",
      position: "CTO",
      content: "Il branding aziendale che Grecart Studio ha sviluppato per TechLog Solutions ci ha dato un'identità professionale e moderna. Il sito web è diventato uno strumento chiave per acquisire nuovi clienti enterprise. Partner eccezionali!",
      rating: 5,
      imageUrl: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: "Marzo 2025"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="section bg-primary-500 text-white">
      <div className="container">
        <SectionTitle 
          title="Cosa dicono di noi"
          subtitle="Scopri le esperienze dei nostri clienti"
          centered={true}
          light={true}
        />
        
        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Content */}
          <div className="bg-white rounded-lg shadow-custom p-8 text-neutral-800 relative z-10">
            <div className="flex items-center gap-2 mb-4">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} size={20} className="text-accent-500 fill-accent-500" />
              ))}
              {[...Array(5 - testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i + testimonials[activeIndex].rating} size={20} className="text-neutral-300" />
              ))}
            </div>
            
            <blockquote className="mb-6 text-lg italic">
              "{testimonials[activeIndex].content}"
            </blockquote>
            
            <div className="flex items-center">
              <img 
                src={testimonials[activeIndex].imageUrl} 
                alt={testimonials[activeIndex].name} 
                className="w-14 h-14 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-semibold text-primary-800">{testimonials[activeIndex].name}</p>
                <p className="text-neutral-600">{testimonials[activeIndex].position}, {testimonials[activeIndex].company}</p>
                <p className="text-sm text-neutral-500 mt-1">{testimonials[activeIndex].date}</p>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button 
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors focus:outline-none"
              aria-label="Testimonianza precedente"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-accent-500' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Vai alla testimonianza ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors focus:outline-none"
              aria-label="Testimonianza successiva"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;