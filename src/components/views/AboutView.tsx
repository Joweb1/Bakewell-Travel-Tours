import React from 'react';
import { motion } from 'motion/react';
import { Shield, Medal, Briefcase, Heart, CheckCircle2, Award, History, Landmark } from 'lucide-react';

export default function AboutView() {
  
  const values = [
    {
      title: 'Integrity First',
      icon: Shield,
      desc: 'We operate with absolute transparency. There are no hidden fees, dynamic price surges, or false visa promises. Honest council drives our practice.'
    },
    {
      title: 'Excellence in Planning',
      icon: Medal,
      desc: 'Our specialists audit flight routes, seating maps, layovers, and visa application fields with absolute precision to assure zero-error rates.'
    },
    {
      title: 'Elite Professionalism',
      icon: Briefcase,
      desc: 'From polite elite communication to on-time itinerary delivery, our practices reflect standards typical of high-end private wealth advisory firm settings.'
    },
    {
      title: 'Uncompromised Satisfaction',
      icon: Heart,
      desc: 'We are on-call 24 hours a day to resolve connection hiccups, weather disruptions, or gate changes. Your peace of mind is our benchmark.'
    }
  ];

  return (
    <div id="about-page-view" className="font-sans pt-24 min-h-screen bg-white">
      
      {/* 1. ABOUT HERO */}
      <section className="relative py-24 bg-[#0F172A] border-b border-rose-900/10 text-white overflow-hidden">
        
        {/* Cinematic Team Office Background */}
        <div className="absolute inset-0 z-0 opacity-15">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200')` }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block font-display">
            Corporation Overview
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif-display text-white tracking-tight leading-tight">
            Our Legacy of Trust & Expertise
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Discover the philosophies that position Bakewell Travel & Tours Limited as an unrivaled luxury travel consultancy provider.
          </p>
        </div>
      </section>

      {/* 2. COMPANY STORY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Image Panel */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative rounded-none overflow-hidden shadow-sm border border-slate-200 group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800" 
                  alt="Corporate consulting desk" 
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] object-cover grayscale brightness-95 group-hover:scale-[1.02] duration-500"
                />
                
                {/* Visual stamp */}
                <div className="absolute bottom-6 right-6 p-4 bg-[#0F172A] text-white rounded-none border border-white/10 max-w-[200px]">
                  <span className="block text-2xl font-bold font-display text-[#D4AF37]">
                    Est. 2026
                  </span>
                  <span className="block text-[9px] uppercase tracking-wider text-slate-400 mt-1">
                    Tailored Travel Solutions
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Compelling Brand Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block font-display">
                  The Bakewell Chronicle
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-serif-display text-slate-900 tracking-tight leading-tight">
                  Forging Confidence Across International Borders
                </h2>
              </div>

              <div className="text-xs sm:text-sm text-slate-600 space-y-4 leading-relaxed">
                <p>
                  Bakewell Travel & Tours Limited was established with a singular, clear mandate: to dismantle the complex, stressful friction points of international travel and replace them with robust, curated confidence.
                </p>
                <p>
                  We recognized that in an era of digital automation, travelers were increasingly isolated. Booking engines treat ticketing as sterile data blocks, leaving clients helpless in the face of sudden cancellations, missed connecting steps, and complex visa legislation. 
                </p>
                <p>
                  We positioned our practice differently. By establishing structured networks across major airlines, premium hospitality portfolios, and consul desks, we act as an authoritative intermediary. Whether securing an elusive first-class seat to Montreal, arranging private vineyard tours in Niagara, or meticulous documentation auditing for Canadian Study Permits, we perform our services with precise accuracy.
                </p>
              </div>

              {/* Story Badges list */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-center space-x-2.5 text-xs font-semibold text-slate-800">
                  <History className="text-[#D4AF37]" size={16} />
                  <span className="font-display uppercase tracking-wider text-[11px]">Experienced Practitioners</span>
                </div>
                <div className="flex items-center space-x-2.5 text-xs font-semibold text-slate-800">
                  <Landmark className="text-[#D4AF37]" size={16} />
                  <span className="font-display uppercase tracking-wider text-[11px]">TICO & IATA Framework Aligned</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MISSION, VISION, STRATEGY */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Mission Card */}
            <div className="p-8 bg-white border border-slate-200 rounded-none shadow-sm space-y-4 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-slate-100 opacity-80 pointer-events-none select-none">
                <Award size={40} className="text-[#D4AF37]/20" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] block font-display">
                Primary Mission Statement
              </span>
              <h3 className="text-lg font-bold font-serif-display text-slate-900 uppercase">
                Helping People Travel Confidently
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our mission is to empower individuals, families, corporate leaders, and students with uncompromised clarity and seamless logistics. We eliminate risk from booking systems through active manual monitoring, detailed application checks, and handcrafted travel itineraries.
              </p>
              <div className="flex items-center space-x-2 text-xs text-slate-500 pt-2 font-mono">
                <span>✓ Seamless</span>
                <span>•</span>
                <span>✓ Verified</span>
                <span>•</span>
                <span>✓ Monitored</span>
              </div>
            </div>

            {/* Vision Card */}
            <div className="p-8 bg-white border border-slate-200 rounded-none shadow-sm space-y-4 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-slate-150 opacity-80 pointer-events-none select-none">
                <Award size={40} className="text-[#D4AF37]/20" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] block font-display">
                Corporate Vision
              </span>
              <h3 className="text-lg font-bold font-serif-display text-slate-900 uppercase">
                Leading the Travel & Tourism Consultancy Space
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our vision is to expand our physical footprints in Canada and abroad as a premier travel boutique, establishing highly dynamic digital frameworks without ever sacrificing the elite, personalized client-partner touch relationships that define our reputation.
              </p>
              <div className="flex items-center space-x-2 text-xs text-slate-500 pt-2 font-mono">
                <span>✓ Integrity</span>
                <span>•</span>
                <span>✓ Excellence</span>
                <span>•</span>
                <span>✓ Global Scope</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. VALUES SECTION */}
      <section className="py-20 bg-white" id="brand-values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-2 font-display">
              Our Bedrock Foundations
            </span>
            <h2 className="text-3xl font-extrabold font-serif-display text-slate-900 tracking-tight">
              Values That Define Our Practice
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-3.5 leading-relaxed">
              We stand against structural shortcuts. These four elements dictate how we speak, write invoices, and submit visa documentation portfolios.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => {
              const ValIcon = val.icon;
              return (
                <div
                  key={val.title}
                  className="p-6 bg-white border border-slate-200 rounded-none hover:border-[#D4AF37]/50 transition-colors flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="inline-flex p-3 bg-slate-50 border border-slate-200 rounded-none text-[#D4AF37]">
                      <ValIcon size={20} />
                    </div>
                    <h3 className="text-base font-bold font-serif-display text-slate-900">
                      {val.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
