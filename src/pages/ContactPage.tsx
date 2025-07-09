import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import ContactForm from '../components/common/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-500 py-20 md:py-32">
        <div className="container text-center">
          <h1 className="text-white mb-6">Contattaci</h1>
          <p className="text-xl text-neutral-200 max-w-3xl mx-auto">
            Hai un progetto in mente? Parliamone insieme. Siamo qui per trasformare le tue idee in realtà.
          </p>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="section" id="contact">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <SectionTitle 
                title="Parliamo del tuo progetto" 
                subtitle="Compila il form per raccontarci la tua idea o contattaci direttamente tramite i canali indicati"
              />
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary-100 text-primary-500 rounded-full">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Sede</h3>
                    <p className="text-neutral-600">
                      Viale Colli Aminei, 50<br />
                      80131 Napoli, Italia
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary-100 text-primary-500 rounded-full">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Telefono</h3>
                    <p className="text-neutral-600">
                      <a href="tel:+3908118939338" className="hover:text-primary-500 transition-colors">
                        +39 081 1893 9338
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary-100 text-primary-500 rounded-full">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-neutral-600">
                      <a href="mailto:info@grecartstudio.it" className="hover:text-primary-500 transition-colors">
                        info@grecartstudio.it
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary-100 text-primary-500 rounded-full">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Orari</h3>
                    <p className="text-neutral-600">
                      Lunedì - Venerdì: 9:00 - 18:00<br />
                      Sabato - Domenica: Chiuso
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Google Maps */}
              <div className="h-[300px] bg-neutral-200 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24097.984455729404!2d14.21517!3d40.85177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b0a3c328c13fd%3A0xedd23d0bd709e293!2sNapoli%20NA!5e0!3m2!1sit!2sit!4v1684144200547!5m2!1sit!2sit"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa della sede di Grecart Studio"
                ></iframe>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-custom p-8">
              <h3 className="text-2xl font-semibold text-primary-800 mb-6">
                Inviaci un messaggio
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Social Media Section */}
      <section className="section bg-neutral-50">
        <div className="container text-center">
          <SectionTitle 
            title="Seguici sui social" 
            subtitle="Resta aggiornato sui nostri progetti e scopri le ultime novità"
            centered={true}
          />
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-500">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
            
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-500">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-500">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-500">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;