import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Palette } from 'lucide-react';

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navbarClass = isScrolled
    ? 'bg-white shadow-md py-3'
    : 'bg-transparent py-5';

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarClass}`}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <Palette className="text-primary-500 mr-2" size={32} />
          <span className="font-montserrat font-bold text-xl text-primary-500">
            Grecart<span className="text-accent-500">Studio</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium hover:text-primary-500 transition-colors ${
                isActive ? 'text-primary-500 link-hover after:w-full' : 'text-neutral-700 link-hover'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/servizi"
            className={({ isActive }) =>
              `font-medium hover:text-primary-500 transition-colors ${
                isActive ? 'text-primary-500 link-hover after:w-full' : 'text-neutral-700 link-hover'
              }`
            }
          >
            Servizi
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `font-medium hover:text-primary-500 transition-colors ${
                isActive ? 'text-primary-500 link-hover after:w-full' : 'text-neutral-700 link-hover'
              }`
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contatti"
            className={({ isActive }) =>
              `font-medium hover:text-primary-500 transition-colors ${
                isActive ? 'text-primary-500 link-hover after:w-full' : 'text-neutral-700 link-hover'
              }`
            }
          >
            Contatti
          </NavLink>
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={() => {
              closeMenu();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Parla con noi
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary-500 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } pt-24`}
      >
        <nav className="container flex flex-col space-y-6 text-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-xl font-medium py-2 ${isActive ? 'text-primary-500' : 'text-neutral-700'}`
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/servizi"
            className={({ isActive }) =>
              `text-xl font-medium py-2 ${isActive ? 'text-primary-500' : 'text-neutral-700'}`
            }
            onClick={closeMenu}
          >
            Servizi
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `text-xl font-medium py-2 ${isActive ? 'text-primary-500' : 'text-neutral-700'}`
            }
            onClick={closeMenu}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contatti"
            className={({ isActive }) =>
              `text-xl font-medium py-2 ${isActive ? 'text-primary-500' : 'text-neutral-700'}`
            }
            onClick={closeMenu}
          >
            Contatti
          </NavLink>
          <a
            href="#contact"
            className="btn btn-primary mt-4 mx-auto"
            onClick={() => {
              closeMenu();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Parla con noi
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;