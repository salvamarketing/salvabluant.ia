/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9 } from './slides';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (window.scrollY > 250) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      {/* Background Decorative Shapes */}
      <div className="fixed top-0 right-0 w-1/3 h-full bg-accent/5 -z-10 translate-x-12 skew-x-[-10deg] pointer-events-none"></div>
      
      {/* Header - hides smoothly on scroll */}
      <header 
        className={`fixed top-0 left-0 w-full p-4 md:p-6 md:px-12 md:py-8 flex justify-center items-center z-50 pointer-events-none transition-all duration-300 ease-in-out ${
          scrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        <div className="flex items-center justify-center pointer-events-auto">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="h-6 md:h-8 object-contain opacity-90"
          />
        </div>
      </header>

      {/* Main Content Area */}
      <div className="relative w-full flex flex-col">
        <Slide1 />
        <Slide2 />
        <Slide3 />
        <Slide4 />
        <Slide5 />
        <Slide6 />
        <Slide7 />
        <Slide8 />
        <Slide9 />
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 w-11 h-11 bg-primary text-white rounded-full shadow-xl shadow-primary/30 flex items-center justify-center hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all duration-300 ${
          showBackToTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        title="Voltar ao topo"
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}
