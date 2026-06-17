import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Plane, Compass, FileCheck, CheckCircle2, ShieldCheck, Star } from 'lucide-react';
import { SERVICES, DESTINATIONS, TRUST_BADGES, WHY_CHOOSE_REASONS } from '../../data';
import ProcessTimeline from '../ProcessTimeline';
import TestimonialSlider from '../TestimonialSlider';
import { PageId } from '../../types';

interface HomeViewProps {
  onOpenConsultation: (service?: string) => void;
  setCurrentPage: (page: PageId) => void;
}

export default function HomeView({ onOpenConsultation, setCurrentPage }: HomeViewProps) {
  
  // Icon selector helper
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'PlaneTakeoff':
        return <Plane size={24} className="text-[#D4AF37]" />;
      case 'Compass':
        return <Compass size={24} className="text-[#D4AF37]" />;
      case 'FileCheck':
        return <FileCheck size={24} className="text-[#D4AF37]" />;
      default:
        return <Compass size={24} className="text-[#D4AF37]" />;
    }
  };

  return (
    <div id="homepage-view" className="font-sans bg-[#F8FAFC]">
      
      {/* 1. HERO SECTION (EDITORIAL DUAL-AXIS CONTRAST) */}
      <section className="relative min-h-[95vh] pt-20 lg:pt-24 flex flex-col lg:flex-row items-stretch overflow-hidden border-b border-slate-200">
        
        {/* Left Editorial Slate Panel */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-20 flex flex-col justify-center relative z-10 bg-white">
          <div className="w-12 h-1 bg-[#D4AF37] mb-6"></div>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37] block mb-4 font-display">
            Bakewell Travel & Tours Limited
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif-display text-[#0F172A] leading-[1.15] tracking-tight mb-6">
            Explore The <span className="italic font-normal font-serif text-[#D4AF37]">World</span> <br className="hidden sm:block" />
            With <span className="italic font-normal font-serif">Absolute</span> Confidence.
          </h1>
          
          <p className="text-sm sm:text-base text-slate-600 mb-10 leading-relaxed lg:pr-12">
            Your premier travel partner for bespoke flight reservations, expert visa processing, and curated global tours. Experience luxury redefined through personalized guidance and absolute accuracy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onOpenConsultation()}
              className="bg-[#D4AF37] hover:bg-[#c2a032] text-slate-950 font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-none shadow-lg shadow-yellow-950/10 cursor-pointer transition-colors"
            >
              Start Your Journey
            </button>
            <button
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="border-2 border-[#0F172A] hover:bg-slate-50 text-[#0F172A] font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-none cursor-pointer transition-colors"
            >
              Contact Us
            </button>
          </div>
          
          <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap gap-8 items-center">
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold text-[#0F172A] font-display">15k+</span>
              <span className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-wider mt-1">Happy Clients</span>
            </div>
            <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold text-[#0F172A] font-display">99.4%</span>
              <span className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-wider mt-1">Visa Success</span>
            </div>
            <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold text-[#0F172A] font-display">120+</span>
              <span className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-wider mt-1">Destinations</span>
            </div>
          </div>
        </div>

        {/* Right Sided Contrast Canvas & Underlayer Graphic */}
        <div className="w-full lg:w-1/2 p-12 lg:p-0 min-h-[450px] lg:min-h-0 bg-[#0F172A] relative flex items-center justify-center overflow-hidden">
          {/* Subtle Grid Accent */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #3B82F6 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          
          {/* Giant watermark branding */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 text-white/[0.04] font-extrabold text-[120px] sm:text-[180px] leading-none select-none tracking-tighter uppercase pointer-events-none hidden lg:block" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg) translateY(50%)' }}>
            BAKEWELL
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent pointer-events-none z-10"></div>
          
          {/* Sharp gold background graphic frame */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 sm:w-80 sm:h-96 border border-[#D4AF37]/30 z-0"></div>

          {/* Staggered Frame 1: Banff Glacial */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-[12%] right-[8%] sm:right-[15%] w-48 h-64 sm:w-60 sm:h-80 bg-slate-900 z-10 shadow-2xl overflow-hidden border-4 border-white"
          >
            <div className="w-full h-full relative group">
              <img 
                src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=800" 
                alt="Banff Lake" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                <p className="text-[9px] uppercase tracking-widest font-bold font-display text-[#D4AF37]">Featured</p>
                <p className="text-sm font-bold font-serif-display">Bespoke Journeys</p>
              </div>
            </div>
          </motion.div>

          {/* Staggered Frame 2: Visa Experts */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-[10%] left-[8%] sm:left-[10%] w-40 h-52 sm:w-52 sm:h-68 bg-slate-800 z-20 shadow-2xl overflow-hidden border-4 border-white"
          >
            <div className="w-full h-full relative group">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800" 
                alt="Visa Procurement" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-white">
                <p className="text-[9px] uppercase tracking-widest font-bold font-display text-[#D4AF37]">Experts</p>
                <p className="text-xs font-bold font-serif-display">Visa Procurement</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUSTED TRAVEL EXPERTS (COMPACT PORTFOLIO OVERVIEW) */}
      <section className="bg-[#0F172A] py-14 border-b border-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.25em] font-display">
              Established Credibility
            </span>
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] font-mono text-slate-300 mt-2">
              Our Accreditation Frameworks
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {TRUST_BADGES.map((badge, idx) => (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-[#0F172A] p-5 rounded-none border border-slate-800 flex flex-col justify-between hover:border-[#D4AF37]/35 transition-colors"
              >
                <div>
                  <div className="w-8 h-8 rounded-none bg-slate-950 flex items-center justify-center text-[#D4AF37] mb-4">
                    <ShieldCheck size={15} />
                  </div>
                  <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-display">
                    {badge.title}
                  </h4>
                  <p className="text-[11px] text-slate-450 leading-relaxed mt-2.5">
                    {badge.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION (EDITORIAL SPREADS) */}
      <section className="py-20 bg-white" id="services-intro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-2 font-display">
              Our Advisory Pillars
            </span>
            <h2 className="text-3xl font-extrabold font-serif-display text-slate-900 tracking-tight">
              Bespoke Services For Seamless Journeys
            </h2>
            <p className="text-sm text-slate-500 mt-3.5 leading-relaxed">
              We move away from automated search interfaces to offer meticulous, direct support for all aspects of booking and documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-none shadow-sm hover:shadow-lg border border-slate-200 overflow-hidden flex flex-col justify-between transition-all group"
              >
                <div>
                  {/* Service image */}
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 p-2.5 bg-slate-900/95 text-white backdrop-blur-md rounded-none border border-white/10">
                      {getServiceIcon(service.iconName)}
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold font-serif-display text-slate-900">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mt-5 space-y-2">
                      {service.features.slice(0, 2).map((feat) => (
                        <div key={feat} className="flex items-center space-x-2 text-xs text-slate-600">
                          <CheckCircle2 size={12} className="text-[#D4AF37] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setCurrentPage('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs font-bold font-display text-[#0F172A] uppercase tracking-wider flex items-center space-x-1 group/btn cursor-pointer hover:text-[#D4AF37] transition-colors"
                  >
                    <span>Read Details</span>
                    <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenConsultation(service.title)}
                    className="px-4 py-2 bg-[#0F172A] hover:bg-slate-800 text-white rounded-none text-[10px] font-bold uppercase tracking-widest transition-colors cursor-pointer"
                  >
                    Assess Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. WHY CHOOSE BAKEWELL */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Column Left (Promo description) */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block font-display">
                The Bakewell Distinction
              </span>
              <h2 className="text-3xl font-extrabold font-serif-display text-slate-900 tracking-tight leading-tight">
                Why Discerning Travelers Choose Our Practice
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                As a specialized boutique operation, we have structural relationships that automated booking platforms will never match. We prioritize personal attention over transactional scale.
              </p>

              {/* Quick stats panel */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-white rounded-none border border-slate-200 shadow-sm text-center">
                  <span className="block text-2xl font-bold text-slate-950 font-display">
                    99.4%
                  </span>
                  <span className="block text-[10.5px] uppercase font-bold text-[#D4AF37] tracking-wider mt-1">
                    Visa Success Audit
                  </span>
                </div>
                <div className="p-4 bg-white rounded-none border border-slate-200 shadow-sm text-center">
                  <span className="block text-2xl font-bold text-slate-950 font-display">
                    &lt; 2 Hrs
                  </span>
                  <span className="block text-[10.5px] uppercase font-bold text-[#D4AF37] tracking-wider mt-1">
                    Response Guarantee
                  </span>
                </div>
              </div>
            </div>

            {/* Column Right (Durable highlights bento grid) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {WHY_CHOOSE_REASONS.map((reason, idx) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-white p-5 rounded-none border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-2.5"
                >
                  <div className="w-7 h-7 rounded-none border border-[#D4AF37]/35 bg-slate-50 text-[#D4AF37] flex items-center justify-center font-bold text-xs font-mono">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-display">
                    {reason.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 5. FEATURED CANADA DESTINATIONS (Immediate credibility visual section) */}
      <section className="py-20 bg-white" id="canada-destinations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-2 font-display">
                Canada Portfolio Spec
              </span>
              <h2 className="text-3xl font-extrabold font-serif-display text-slate-900 tracking-tight">
                Featured Canada Destinations
              </h2>
            </div>
            
            <p className="text-xs text-slate-500 max-w-sm mt-3 md:mt-0 italic leading-relaxed">
              These primary visual highlights establish our physical networks in Canada and connect the brand directly with authentic local experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESTINATIONS.map((dest, idx) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-none border border-slate-200 text-slate-900 overflow-hidden shadow-sm hover:shadow-md hover:border-slate-350 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 overflow-hidden bg-slate-200">
                    <img
                      src={dest.imageUrl}
                      alt={dest.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                    
                    {/* Location Badge */}
                    <span className="absolute bottom-3 left-3 px-2 py-0.5 bg-[#0F172A] text-[9px] font-mono font-bold tracking-widest uppercase text-[#D4AF37] border border-white/10 rounded-none">
                      {dest.province}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-bold font-serif-display text-slate-900">
                      {dest.name}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-2 line-clamp-3">
                      {dest.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2">
                  <div className="border-t border-slate-100 pt-3 space-y-1.5 mb-4">
                    <span className="text-[9px] uppercase font-bold text-slate-400 tracking-widest block font-display">
                      Featured Excursions
                    </span>
                    {dest.highlights.slice(0, 2).map((hl) => (
                      <div key={hl} className="flex items-center space-x-1.5 text-xs text-slate-700">
                        <div className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenConsultation(`Tour Booking in ${dest.name}`)}
                    className="w-full py-2.5 bg-[#0F172A] hover:bg-slate-800 text-white font-bold text-[10px] uppercase tracking-widest rounded-none transition-colors cursor-pointer"
                  >
                    Request Route Info
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. PROCESS SECTION */}
      <section className="py-20 bg-slate-950 text-white border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProcessTimeline />
        </div>
      </section>

      {/* 7. TESTIMONIAL PREVIEW */}
      <section className="py-20 bg-[#F8FAFC]/40" id="testimonials-mini">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-2 font-display">
              Adviser Appraisals
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-serif-display text-slate-900 tracking-tight">
              Testimonials From Trusted Clients
            </h2>
          </div>

          <TestimonialSlider />

          <div className="text-center mt-8">
            <button
              onClick={() => {
                setCurrentPage('testimonials');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-slate-950 transition-colors flex items-center justify-center space-x-1 mx-auto cursor-pointer font-display"
            >
              <span>Explore All Client Stories</span>
              <ArrowRight size={12} className="text-[#D4AF37]" />
            </button>
          </div>

        </div>
      </section>

      {/* 8. FINAL CTA (Airplane Over Canadian Mountain landscape style) */}
      <section className="relative py-24 sm:py-32 text-white overflow-hidden font-sans border-t border-slate-900">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.65)), url('https://images.unsplash.com/photo-1506164332921-4706790247a6?auto=format&fit=crop&q=80&w=1600')` 
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-6">
            
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block font-display">
              Schedule Your Voyage
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif-display leading-tight text-white tracking-tight">
              Ready To Begin Your Authentic Journey?
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Do not leave complex flight routes, immigration permits, and bespoke wilderness itineraries to speculative algorithms. Work directly with certified Bakewell travel consultants and secure peace of mind.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => onOpenConsultation()}
                className="px-8 py-4 bg-[#D4AF37] hover:bg-[#c2a032] text-slate-950 font-bold text-xs uppercase tracking-widest rounded-none transition-all shadow-lg shadow-yellow-950/10 cursor-pointer text-center"
              >
                Book Consultation
              </button>
              
              <a 
                href="mailto:info@bakewelltraveltours.com"
                className="px-8 py-4 rounded-none border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-widest transition-colors text-center"
              >
                Inquire Directly
              </a>
            </div>

            <div className="flex items-center space-x-3 text-xs text-slate-400 font-mono pt-4 border-t border-white/10 max-w-md">
              <span className="text-[#D4AF37]">● Registered Travel partner</span>
              <span>•</span>
              <span>289-428-7927</span>
              <span>•</span>
              <span>Toronto, Canada</span>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
