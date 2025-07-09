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
      imageUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      id: 2,
      name: "Laura Rossi",
      company: "Boutique Eleganza",
      position: "Proprietaria",
      content: "Dopo anni di presenza online mediocre, il nostro sito web creato da Grecart Studio ha finalmente dato alla nostra boutique la visibilità che meritava. Design elegante, facile da navigare e perfettamente in linea con l'estetica del nostro brand. Le conversioni sono aumentate significativamente!",
      rating: 5,
      imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      id: 3,
      name: "Gianni Verdi",
      company: "TechNova",
      position: "CEO",
      content: "La campagna pubblicitaria sviluppata da Grecart Studio per il lancio del nostro nuovo prodotto ha superato ogni aspettativa. Creatività, attenzione ai dettagli e una profonda comprensione del nostro target hanno fatto la differenza. Continueremo sicuramente a collaborare per i nostri progetti futuri.",
      rating: 4,
      imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
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