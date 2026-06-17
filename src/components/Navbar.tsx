import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Phone, Compass, Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export default function Navbar({ currentPage, setCurrentPage, onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background shift
      setIsScrolled(window.scrollY > 20);

      // Scroll progress computation
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Our Services' },
    { id: 'about', label: 'About Us' },
    { id: 'testimonials', label: 'Client Stories' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Compute if the header currently renders as dark (white text) or light (dark text)
  const isDarkHeader = !isScrolled && currentPage === 'home';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3.5 border-b border-slate-200 text-slate-900'
          : currentPage === 'home'
            ? 'bg-transparent py-5/5 text-white'
            : 'bg-white border-b border-slate-200 py-5 text-[#0F172A]'
      }`}
      id="main-navigation"
    >
      {/* Scroll Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-[3px] bg-[#D4AF37] transition-all duration-75 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo Group */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 text-left focus:outline-none group cursor-pointer"
          >
            <div className="w-10 h-10 bg-[#0F172A] flex items-center justify-center border border-slate-800 shadow-sm transition-transform group-hover:scale-105">
              <div className="w-5 h-5 border-t-2 border-r-2 border-[#D4AF37] rotate-45 translate-y-1 -translate-x-1"></div>
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-bold font-display tracking-tighter leading-none uppercase ${
                isDarkHeader ? 'text-white' : 'text-[#0F172A]'
              }`}>
                BAKEWELL
              </span>
              <span className="text-[9px] tracking-[0.3em] font-medium text-[#D4AF37] uppercase leading-none mt-1">
                Travel & Tours
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-2 text-[11px] font-bold uppercase tracking-widest transition-colors cursor-pointer font-display ${
                    isActive 
                      ? 'text-[#D4AF37]' 
                      : isDarkHeader
                        ? 'text-slate-350 hover:text-white'
                        : 'text-slate-650 hover:text-slate-950'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.span 
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Sided Phone & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <a 
              href="tel:289-428-7927"
              className={`flex items-center space-x-2 text-[11px] transition-colors font-mono tracking-wider ${
                isDarkHeader ? 'text-slate-350 hover:text-white' : 'text-slate-650 hover:text-slate-950'
              }`}
            >
              <div className="w-7 h-7 rounded-sm bg-slate-100 flex items-center justify-center border border-slate-200">
                <Phone size={11} className="text-[#D4AF37]" />
              </div>
              <span className="font-bold">289-428-7927</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className={`px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-colors cursor-pointer rounded-none border border-transparent ${
                isDarkHeader 
                  ? 'bg-[#D4AF37] hover:bg-[#c2a032] text-slate-950 hover:shadow-lg hover:shadow-yellow-950/10' 
                  : 'bg-[#0F172A] hover:bg-slate-800 text-white'
              }`}
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Action */}
          <div className="flex items-center space-x-3 lg:hidden">
            <a 
              href="tel:289-428-7927"
              className={`w-9 h-9 rounded-none flex items-center justify-center border ${
                isDarkHeader 
                  ? 'bg-slate-800/85 border-slate-700/50 text-white' 
                  : 'bg-slate-100 border-slate-200 text-slate-800'
              }`}
              aria-label="Call Bakewell Support"
            >
              <Phone size={14} className="text-[#D4AF37]" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-none border ${
                isDarkHeader 
                  ? 'bg-slate-800/85 text-slate-200 hover:text-white border-slate-700/50' 
                  : 'bg-slate-100 text-slate-800 hover:text-slate-950 border-slate-200'
              } cursor-pointer`}
              aria-label="Open primary menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={`lg:hidden border-t overflow-hidden ${
              isDarkHeader 
                ? 'bg-slate-950 border-slate-800' 
                : 'bg-white border-slate-200'
            }`}
          >
            <div className="px-4 py-6 space-y-4">
              <div className="grid grid-cols-1 gap-2">
                {navItems.map((item) => {
                  const isActive = currentPage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`text-left px-4 py-3 rounded-none text-xs font-bold font-display tracking-widest uppercase transition-colors flex items-center justify-between ${
                        isActive
                          ? isDarkHeader 
                            ? 'bg-slate-800 text-[#D4AF37]'
                            : 'bg-slate-100 text-[#0F172A]'
                          : isDarkHeader
                            ? 'text-slate-350 hover:bg-slate-900/50 hover:text-white'
                            : 'text-slate-650 hover:bg-slate-50 hover:text-slate-950'
                      }`}
                    >
                      <span>{item.label}</span>
                      <Globe size={14} className={isActive ? 'text-[#D4AF37]' : isDarkHeader ? 'text-slate-600' : 'text-slate-400'} />
                    </button>
                  );
                })}
              </div>

              <div className={`pt-4 border-t space-y-3 ${isDarkHeader ? 'border-slate-850' : 'border-slate-100'}`}>
                <div className="flex items-center space-x-3 px-4 py-1">
                  <Phone size={15} className="text-[#D4AF37]" />
                  <a href="tel:289-428-7927" className={`font-semibold text-xs font-mono ${isDarkHeader ? 'text-slate-300' : 'text-slate-800'}`}>
                    289-428-7927
                  </a>
                </div>
                
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-3.5 rounded-none bg-[#D4AF37] text-slate-900 font-bold text-xs uppercase tracking-widest transition-all text-center"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
