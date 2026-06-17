import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ConsultationModal from './components/ConsultationModal';

// Views
import HomeView from './components/views/HomeView';
import ServicesView from './components/views/ServicesView';
import AboutView from './components/views/AboutView';
import TestimonialsView from './components/views/TestimonialsView';
import ContactView from './components/views/ContactView';

import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [presetService, setPresetService] = useState<string>('');

  // Reset scroll position and optimize SEO metadata dynamically on page transition
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Page-specific Advanced SEO Meta Definitions
    const seoMap: Record<PageId, { title: string; desc: string }> = {
      home: {
        title: 'Bakewell Travel & Tours Limited | Premium Global Travel Consultancy',
        desc: 'Discover premium flight procurement, expert visa validation audits, and tailormade luxury vacation tours with Bakewell Travel & Tours Limited.'
      },
      services: {
        title: 'Premium Services Portfolio | Bakewell Travel & Tours Limited',
        desc: 'Explore our certified visa application audits, priority global ticket reservations, and curated leisure vacation packages for high-value clients.'
      },
      about: {
        title: 'Corporate Profile & Professional Philosophy | Bakewell Travel',
        desc: 'Operating with absolute accuracy and premium stewardship. Meet our certified advisors and explore our classic travel solutions.'
      },
      testimonials: {
        title: 'Client Reviews & Endorsements | Bakewell Tours & Travels',
        desc: 'Hear from corporate executives, business professionals, and luxury leisure travelers who experience uncompromised accuracy with Bakewell.'
      },
      contact: {
        title: 'Secure Consultation Desk | Bakewell Travel & Tours Limited',
        desc: 'Engage with a certified travel advisor. Request immediate documentation audits or a custom flight schedule appraisal today.'
      }
    };

    const activeSeo = seoMap[currentPage] || seoMap.home;

    // 1. Update Title
    document.title = activeSeo.title;

    // 2. Update Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', activeSeo.desc);
    }

    // 3. Update OG Properties
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', activeSeo.title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', activeSeo.desc);
    }
  }, [currentPage]);

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) {
      setPresetService(serviceName);
    } else {
      setPresetService('');
    }
    setIsConsultationOpen(true);
  };

  // Render active view with transition wrap
  const renderActiveView = () => {
    switch (currentPage) {
      case 'home':
        return (
          <motion.div
            key="home-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <HomeView 
              onOpenConsultation={handleOpenConsultation} 
              setCurrentPage={setCurrentPage} 
            />
          </motion.div>
        );
      case 'services':
        return (
          <motion.div
            key="services-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <ServicesView onOpenConsultation={handleOpenConsultation} />
          </motion.div>
        );
      case 'about':
        return (
          <motion.div
            key="about-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <AboutView />
          </motion.div>
        );
      case 'testimonials':
        return (
          <motion.div
            key="testimonials-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <TestimonialsView />
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div
            key="contact-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <ContactView />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-[#D4AF37]/30 selection:text-slate-900" id="bakewell-app-root">
      
      {/* 1. STICKY HEADER GATES */}
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        onOpenConsultation={() => handleOpenConsultation()} 
      />

      {/* 2. MAIN ACTIVE VIEWPORT */}
      <main className="flex-grow z-10">
        <AnimatePresence mode="wait">
          {renderActiveView()}
        </AnimatePresence>
      </main>

      {/* 3. COMPREHENSIVE FOOTER */}
      <Footer 
        setCurrentPage={setCurrentPage} 
        onOpenConsultation={() => handleOpenConsultation()} 
      />

      {/* 4. FLOATING CHAT ASSISTANT */}
      <WhatsAppButton />

      {/* 5. ADVISORY CONSULTATION DISPATCH MODAL */}
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
        presetService={presetService}
      />

    </div>
  );
}

