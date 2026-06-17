import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../../data';
import { Star, Quote, ShieldCheck, Milestone, ThumbsUp, Users, Award } from 'lucide-react';

export default function TestimonialsView() {
  
  const stats = [
    { label: 'Visa Success Ratio', value: '99.4%', description: 'Dossiers passing direct embassy checks on first submission.' },
    { label: 'Active Travelers', value: '4,850+', description: 'Individuals, corporate leaders, and students managed globally.' },
    { label: 'Client Advisory Rating', value: '4.95', description: 'Average rating based on independent post-boarding feedback.' },
    { label: 'Pooled Advisory Years', value: '25+', description: 'Aggregate career years of our travel specialists.' }
  ];

  return (
    <div id="testimonials-page-view" className="font-sans pt-24 min-h-screen bg-[#F8FAFC]">
      
      {/* 1. TESTIMONIALS HERO */}
      <section className="relative py-20 bg-[#0F172A] border-b border-rose-950/10 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506164332921-4706790247a6?auto=format&fit=crop&q=80&w=1600')` }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block font-display">
            Adviser Appraisals & feedback
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif-display tracking-tight text-white">
            Client Success Stories & Board Logs
          </h1>
          <p className="text-xs sm:text-sm text-slate-350 max-w-2xl mx-auto leading-relaxed">
            Read direct personal reflections from corporate executives, families, and high-achieving students who rely on Bakewell Travel & Tours Limited.
          </p>
        </div>
      </section>

      {/* 2. CORE STATISTICS SECTION */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white p-6 rounded-none border border-slate-200 shadow-sm text-center space-y-2 cursor-default hover:border-[#D4AF37]/50 hover:shadow-sm transition-all"
              >
                <span className="block text-3xl sm:text-4xl font-extrabold font-serif-display text-slate-950">
                  {item.value}
                </span>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] font-display">
                  {item.label}
                </h4>
                <p className="text-[11px] text-slate-500 leading-normal font-sans">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MASONRY LAYOUT GRID */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-2 font-display">
              Verified Affidavits
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-serif-display text-slate-900 tracking-tight">
              Honorable Mentions from Global Travelers & Families
            </h2>
          </div>

          {/* Masonry or flexible flex layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-slate-200 rounded-none p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-[#D4AF37]/60 transition-all relative group"
              >
                
                {/* Visual quote indicator */}
                <div className="absolute top-4 right-4 text-slate-100 pointer-events-none select-none">
                  <Quote size={40} className="opacity-80" />
                </div>

                <div className="space-y-4 relative z-10">
                  
                  {/* Rating block */}
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>

                  {/* Verbal Quote text */}
                  <p className="text-xs sm:text-sm text-slate-605 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Identity line */}
                <div className="flex items-center space-x-4 pt-6 mt-6 border-t border-slate-200 relative z-10">
                  <img
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-none object-cover grayscale brightness-95 shadow border border-slate-200"
                  />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold font-serif-display text-slate-900">{testimonial.name}</h4>
                    <span className="block text-[9px] text-[#D4AF37] font-mono uppercase mt-0.5 tracking-wider">
                      {testimonial.role} — {testimonial.location}
                    </span>
                    <span className="inline-flex mt-1.5 items-center px-1.5 py-0.5 rounded-none border border-[#D4AF37]/35 bg-slate-50 text-[#c2a032] text-[9px] font-semibold tracking-wider font-mono">
                      {testimonial.serviceUsed}
                    </span>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

          {/* Luxury visual footer stamp */}
          <div className="mt-16 text-center border-t border-slate-200 pt-10">
            <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#0F172A] text-white rounded-none border border-slate-800 font-mono text-[9px] uppercase tracking-widest font-bold">
              <ShieldCheck size={13} className="text-[#D4AF37]" />
              <span>Accredited Client Testimonials Review Ledger</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
