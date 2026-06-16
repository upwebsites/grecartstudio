import React, { useState, useEffect, useCallback } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { X, Palette, ArrowUpRight, Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Servizi', path: '/servizi' },
  { name: 'Prodotti', path: '/prodotti-che-stampiamo' },
  { name: 'Come Lavoriamo', path: '/come-lavoriamo' },
  { name: 'Contatti', path: '/contatti' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setIsScrolled(currentScrollY > 30);

    if (currentScrollY > 100) {
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    } else {
      setIsHidden(false);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          y: isHidden ? -100 : 0,
        }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 w-full z-[110] transition-all duration-500 ${
          isScrolled
            ? 'bg-dark/70 backdrop-blur-2xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
            : 'bg-transparent'
        }`}
      >
        <div className="container flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group relative z-[60]" onClick={closeMenu}>
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Palette className="text-accent mr-3" size={32} />
            </motion.div>
            <span className="font-heading font-bold text-xl sm:text-2xl text-white tracking-widest uppercase">
              Grecart<span className="text-accent font-light">Studio</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-300 rounded-lg ${
                    isActive
                      ? 'text-accent'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-accent/10 border border-accent/20 rounded-lg -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/tutti-i-lavori"
              className="group flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 text-white/70 text-xs uppercase tracking-widest font-medium hover:bg-white hover:text-dark hover:border-white transition-all duration-300"
            >
              Portfolio
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              to="/contatti"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-dark text-xs uppercase tracking-widest font-semibold hover:bg-accent-light hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300"
            >
              Parla con noi
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-[110] w-10 h-10 flex items-center justify-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 w-full h-[1.5px] bg-white origin-center"
                style={{ top: 0 }}
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1.5px] bg-white"
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 w-full h-[1.5px] bg-white origin-center"
                style={{ bottom: 0 }}
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[105] lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-dark/95 backdrop-blur-2xl"
              onClick={toggleMenu}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-dark-100/80 backdrop-blur-3xl border-l border-white/5 overflow-y-auto"
            >
              <div className="flex flex-col min-h-full p-6 sm:p-8 pt-24 pb-10">
                {/* Navigation Links */}
                <nav className="flex-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.06 }}
                    >
                      <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                          `group flex items-center justify-between py-5 border-b border-white/5 transition-colors ${
                            isActive ? 'text-accent' : 'text-white/70 hover:text-white'
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <span className="text-xl sm:text-2xl font-heading font-medium tracking-wide">{link.name}</span>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                              isActive ? 'bg-accent text-dark' : 'bg-white/5 text-white/30 group-hover:bg-white/10 group-hover:text-white/60'
                            }`}>
                              <ArrowUpRight size={14} />
                            </div>
                          </>
                        )}
                      </NavLink>
                    </motion.div>
                  ))}
                </nav>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-10 pt-8 border-t border-white/5"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium mb-5">Contatti</p>
                  <div className="space-y-4">
                    <a href="tel:+3908118939338" className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                        <Phone size={14} />
                      </div>
                      <span className="text-sm font-light">+39 081 1893 9338</span>
                    </a>
                    <a href="mailto:info@grecartstudio.it" className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                        <Mail size={14} />
                      </div>
                      <span className="text-sm font-light">info@grecart.it</span>
                    </a>
                    <div className="flex items-center gap-3 text-white/60">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                        <MapPin size={14} />
                      </div>
                      <span className="text-sm font-light">Viale Colli Aminei, 50, Napoli</span>
                    </div>
                  </div>

                  {/* Social + CTA */}
                  <div className="flex items-center justify-between mt-8">
                    <a
                      href="https://www.instagram.com/grecartstudio/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-accent hover:text-dark hover:border-accent transition-all duration-300"
                    >
                      <Instagram size={18} />
                    </a>
                    <Link
                      to="/contatti"
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-dark text-xs uppercase tracking-widest font-semibold hover:bg-accent-light transition-all duration-300"
                    >
                      Parla con noi
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
