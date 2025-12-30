import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Palette className="text-accent-500 mr-2" size={28} />
              <span className="font-montserrat font-bold text-xl">
                Grecart<span className="text-accent-500">Studio</span>
              </span>
            </Link>
            <p className="text-neutral-300 mb-6">
              Trasformiamo le tue idee in soluzioni creative che comunicano, ispirano e convertono.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-neutral-300 hover:text-accent-500 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://facebook.com" className="text-neutral-300 hover:text-accent-500 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://linkedin.com" className="text-neutral-300 hover:text-accent-500 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://twitter.com" className="text-neutral-300 hover:text-accent-500 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white">Navigazione</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-accent-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/servizi" className="text-neutral-300 hover:text-accent-500 transition-colors">Servizi</Link>
              </li>
              <li>
                <Link to="/tutti-i-lavori" className="text-neutral-300 hover:text-accent-500 transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/come-lavoriamo" className="text-neutral-300 hover:text-accent-500 transition-colors">Come Lavoriamo</Link>
              </li>
              <li>
                <Link to="/contatti" className="text-neutral-300 hover:text-accent-500 transition-colors">Contatti</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white">Servizi</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/servizi" className="text-neutral-300 hover:text-accent-500 transition-colors">Grafica Pubblicitaria</Link>
              </li>
              <li>
                <Link to="/servizi" className="text-neutral-300 hover:text-accent-500 transition-colors">Grafica Editoriale</Link>
              </li>
              <li>
                <Link to="/servizi" className="text-neutral-300 hover:text-accent-500 transition-colors">Packaging Design</Link>
              </li>
              <li>
                <Link to="/servizi" className="text-neutral-300 hover:text-accent-500 transition-colors">Sviluppo Web</Link>
              </li>
              <li>
                <Link to="/servizi" className="text-neutral-300 hover:text-accent-500 transition-colors">Social Media</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white">Contattaci</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-accent-500 mt-1 flex-shrink-0" size={18} />
                <span className="text-neutral-300">Viale Colli Aminei, 50<br />80131 Napoli, Italia</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-accent-500 flex-shrink-0" size={18} />
                <a href="tel:+3908118939338" className="text-neutral-300 hover:text-accent-500 transition-colors">+39 081 1893 9338</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-accent-500 flex-shrink-0" size={18} />
                <a href="mailto:info@grecartstudio.it" className="text-neutral-300 hover:text-accent-500 transition-colors">info@grecartstudio.it</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-12 pt-8 text-center text-neutral-400">
          <p>&copy; {new Date().getFullYear()} Grecart Studio. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;