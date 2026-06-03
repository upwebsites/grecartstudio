import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-24 pb-8 border-t border-light/5 relative overflow-hidden">
      {/* Abstract Footer Glow */}
      <div className="absolute bottom-[-50%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-accent/5 blur-[120px] mix-blend-screen opacity-50 z-0"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Logo and About (Spans 4 cols on large screens) */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center mb-6 pr-4">
              <Palette className="text-accent mr-3" size={36} />
              <span className="font-heading font-bold text-3xl tracking-wide uppercase">
                Grecart<span className="text-accent font-light">Studio</span>
              </span>
            </Link>
            <p className="text-light/60 mb-8 max-w-sm font-light leading-relaxed">
              Trasformiamo le tue idee in soluzioni creative che comunicano, ispirano e convertono. L'eccellenza del design al servizio del tuo brand.
            </p>
            <div className="flex space-x-5">
              <a href="https://instagram.com" className="text-light/50 hover:text-accent transition-colors">
                <Instagram size={22} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://facebook.com" className="text-light/50 hover:text-accent transition-colors">
                <Facebook size={22} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://linkedin.com" className="text-light/50 hover:text-accent transition-colors">
                <Linkedin size={22} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://twitter.com" className="text-light/50 hover:text-accent transition-colors">
                <Twitter size={22} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm tracking-widest text-white uppercase mb-6 font-semibold border-b border-light/10 pb-3 inline-block">Navigazione</h4>
            <ul className="space-y-4 font-light">
              <li>
                <Link to="/" className="text-light/60 hover:text-accent transition-colors text-sm uppercase tracking-wider">Home</Link>
              </li>
              <li>
                <Link to="/servizi" className="text-light/60 hover:text-accent transition-colors text-sm uppercase tracking-wider">Servizi</Link>
              </li>
              <li>
                <Link to="/tutti-i-lavori" className="text-light/60 hover:text-accent transition-colors text-sm uppercase tracking-wider">Portfolio</Link>
              </li>
              <li>
                <Link to="/come-lavoriamo" className="text-light/60 hover:text-accent transition-colors text-sm uppercase tracking-wider">Come Lavoriamo</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-sm tracking-widest text-white uppercase mb-6 font-semibold border-b border-light/10 pb-3 inline-block">Servizi</h4>
            <ul className="space-y-4 font-light">
              <li>
                <Link to="/servizi" className="text-light/60 hover:text-accent transition-colors text-sm uppercase tracking-wider">Grafica Pubblicitaria</Link>
              </li>
              <li>
                <Link to="/servizi" className="text-light/60 hover:text-accent transition-colors text-sm uppercase tracking-wider">Grafica Editoriale</Link>
              </li>
              <li>
                <Link to="/servizi" className="text-light/60 hover:text-accent transition-colors text-sm uppercase tracking-wider">Packaging</Link>
              </li>
              <li>
                <Link to="/servizi" className="text-light/60 hover:text-accent transition-colors text-sm uppercase tracking-wider">Web Design</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-sm tracking-widest text-white uppercase mb-6 font-semibold border-b border-light/10 pb-3 inline-block">Contatti</h4>
            <ul className="space-y-5 font-light">
              <li className="flex items-start">
                <MapPin className="mr-3 text-accent mt-1 flex-shrink-0" size={18} />
                <span className="text-light/60 text-sm">Viale Colli Aminei, 50<br />80131 Napoli, IT</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-accent flex-shrink-0" size={18} />
                <a href="tel:+3908118939338" className="text-light/60 hover:text-accent transition-colors text-sm">+39 081 1893 9338</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-accent flex-shrink-0" size={18} />
                <a href="mailto:info@grecartstudio.it" className="text-light/60 hover:text-accent transition-colors text-sm break-all">info@grecart.it</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-light/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-light/40 text-xs tracking-widest uppercase">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Grecart Studio.</p>
          <p>Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;