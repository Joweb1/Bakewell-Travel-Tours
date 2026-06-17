import React from 'react';
import { PageId } from '../types';
import { Compass, Mail, Phone, MapPin, ExternalLink, Calendar, ShieldCheck, HeartHandshake } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export default function Footer({ setCurrentPage, onOpenConsultation }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const trustBadges = [
    { title: 'Visa Audits', desc: 'Pre-flight screening ensures absolute approval rates.' },
    { title: 'Secure Ledger', desc: 'Direct secure bank routing and ticketing.' },
    { title: 'Concierge Backing', desc: 'Real professionals monitoring systems 24/7.' }
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 font-sans mt-auto" id="main-footer">
      {/* Top Value Bar */}
      <div className="border-b border-slate-900 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:divide-x md:divide-slate-900">
            {trustBadges.map((badge, idx) => (
              <div 
                key={badge.title} 
                className={`flex items-start space-x-3.5 ${idx > 0 ? 'md:pl-8' : ''}`}
              >
                <div className="p-2 bg-slate-900 border border-slate-850 rounded-none shrink-0 mt-0.5">
                  <ShieldCheck size={18} className="text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-display uppercase text-slate-100 tracking-wider">{badge.title}</h4>
                  <p className="text-[11px] text-slate-450 mt-1 leading-normal">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-left">
              <div className="w-9 h-9 bg-[#0F172A] flex items-center justify-center border border-[#D4AF37]/30">
                <span className="text-base font-extrabold font-serif-display text-[#D4AF37] leading-none">B</span>
              </div>
              <div>
                <span className="block text-sm font-bold font-display tracking-widest text-[#D4AF37] uppercase">
                  BAKEWELL
                </span>
                <span className="block text-[9px] text-slate-400 tracking-widest font-light uppercase">
                  Travel & Tours Limited
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed pt-2">
              Positioned as a premier boutique travel consultancy, we assist families, professionals, and students navigate aviation paths and international boundaries with absolute confidence.
            </p>
            <div className="flex items-center space-x-2 pt-2">
              <HeartHandshake size={14} className="text-[#D4AF37]" />
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Approved Luxury Advisory Partner</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-bold text-slate-100 uppercase tracking-widest font-display">
              Portals & Services
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <button 
                  onClick={() => handleNavClick('home')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer flex items-center space-x-1"
                >
                  <span>Home Landing</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('services')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer flex items-center space-x-1"
                >
                  <span>Consulting Services</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('about')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer flex items-center space-x-1"
                >
                  <span>Our Corporate Story</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('testimonials')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer flex items-center space-x-1"
                >
                  <span>Client Testimonials</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer flex items-center space-x-1"
                >
                  <span>Request Support / FAQ</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contacts coordinates */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-bold text-slate-100 uppercase tracking-widest font-display">
              Contact Advisory
            </h4>
            <ul className="space-y-3.5 text-xs font-medium">
              <li className="flex items-start space-x-2.5">
                <MapPin size={15} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-normal">
                  Registered Travel Office<br />Toronto, Ontario, Canada
                </span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone size={15} className="text-[#D4AF37]" />
                <a href="tel:289-428-7927" className="hover:text-[#D4AF37] font-mono transition-colors font-bold">
                  289-428-7927
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail size={15} className="text-[#D4AF37]" />
                <a href="mailto:info@bakewelltraveltours.com" className="hover:text-[#D4AF37] transition-colors">
                  info@bakewelltraveltours.com
                </a>
              </li>
            </ul>
          </div>

          {/* Operating hours & Call */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-bold text-slate-100 uppercase tracking-widest font-display">
              Consulting Hours
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between border-b border-slate-900 pb-1.5 font-mono">
                <span className="text-slate-500 font-sans font-medium">Mon - Fri</span>
                <span className="font-semibold text-slate-300">08:00 AM - 06:05 PM</span>
              </div>
              <div className="flex justify-between border-b border-slate-900 pb-1.5 font-mono">
                <span className="text-slate-500 font-sans font-medium">Saturday</span>
                <span className="font-semibold text-slate-300">10:00 AM - 04:00 PM</span>
              </div>
              <div className="flex justify-between pb-1 font-mono">
                <span className="text-slate-500 font-sans font-medium">Sunday</span>
                <span className="font-semibold text-[#D4AF37]">Advisory on-call only</span>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full mt-2 py-3 bg-transparent hover:bg-[#D4AF37]/5 text-[#D4AF37] border border-[#D4AF37]/35 rounded-none text-[11px] font-bold uppercase tracking-widest transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
            >
              <span>Schedule Call</span>
              <ExternalLink size={11} />
            </button>
          </div>

        </div>
      </div>

      {/* Corporate Copyright Bar */}
      <div className="bg-slate-950 py-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-500 space-y-3 md:space-y-0">
          <div>
            © {currentYear} Bakewell Travel & Tours Limited. All rights reserved. 
          </div>
          <div className="flex space-x-6 text-[10px] uppercase font-bold tracking-widest font-display">
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Privacy Charter</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Luggage Directive</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Air Passenger Rights</span>
            <span className="font-mono text-slate-600 font-normal normal-case">Domain: bakewelltraveltours.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
