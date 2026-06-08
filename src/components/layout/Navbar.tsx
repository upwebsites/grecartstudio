import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Palette } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navbarClass = isScrolled
    ? 'bg-dark/80 backdrop-blur-lg border-b border-light/5 shadow-glass py-4'
    : 'bg-transparent py-6';

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Servizi', path: '/servizi' },
    { name: 'Tutti i Lavori', path: '/tutti-i-lavori' },
    { name: 'Come Lavoriamo', path: '/come-lavoriamo' },
    { name: 'Contatti', path: '/contatti' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${navbarClass}`}>
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center group relative z-50" onClick={closeMenu}>
          <motion.div 
            whileHover={{ rotate: 180 }} 
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Palette className="text-accent mr-3" size={32} />
          </motion.div>
          <span className="font-heading font-bold text-2xl text-white tracking-widest uppercase">
            Grecart<span className="text-accent font-light">Studio</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm tracking-widest uppercase transition-colors ${
                  isActive ? 'text-accent link-hover after:w-full' : 'text-light/70 link-hover hover:text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Parla con noi
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none relative z-50 p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-dark z-40 md:hidden pt-32 pb-10 overflow-y-auto flex flex-col justify-center border-b border-light/5 shadow-glass"
          >
            <nav className="container flex flex-col items-center space-y-8 text-center px-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-3xl font-heading font-medium tracking-wide w-full pb-4 border-b border-light/5 ${
                      isActive ? 'text-accent' : 'text-light/80'
                    }`
                  }
                  onClick={closeMenu}
                >
                  {link.name}
                </NavLink>
              ))}
              <a
                href="#contact"
                className="btn btn-primary w-full max-w-xs mt-8"
                onClick={(e) => {
                  closeMenu();
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Parla con noi
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;