import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ContactPage from './pages/ContactPage';
import ComeLavoriamoPage from './pages/ComeLavoriamoPage';
import AllWorksPage from './pages/AllWorksPage';
import PopupLatestWorks from './components/common/PopupLatestWorks';

function App() {
  const [popupOpen, setPopupOpen] = useState(true);

  // Optional: se non vuoi che riappare più dopo chiusura puoi usare localStorage o sessionStorage
  // altrimenti popup si riapre a ogni refresh del sito.

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <PopupLatestWorks open={popupOpen} onClose={() => setPopupOpen(false)} />
      <main className="min-h-screen pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servizi" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:projectId" element={<ProjectDetailPage />} />
          <Route path="/contatti" element={<ContactPage />} />
          <Route path="/come-lavoriamo" element={<ComeLavoriamoPage />} />
          <Route path="/tutti-i-lavori" element={<AllWorksPage />} />
          <Route path="/tutti-i-lavori/:projectId" element={<ProjectDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;