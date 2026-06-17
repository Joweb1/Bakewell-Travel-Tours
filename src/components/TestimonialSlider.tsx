import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { ChevronLeft, ChevronRight, Star, Quote, ShieldAlert } from 'lucide-react';

export default function TestimonialSlider() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIdx];

  return (
    <div className="relative py-8 font-sans" id="testimonial-slider-container">
      <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-none p-6 sm:p-12 shadow-sm overflow-hidden relative">
        
        {/* Large Decorative Quote Symbol */}
        <div className="absolute -top-4 -right-2 text-slate-100 pointer-events-none select-none">
          <Quote size={180} className="opacity-30" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            {/* Customer Portrait Column */}
            <div className="col-span-1 md:col-span-4 flex flex-col items-center text-center">
              <div className="relative">
                {/* Gold ring around image */}
                <div className="absolute inset-0 rounded-none border border-[#D4AF37]/40 scale-[1.05]" />
                <img
                  src={current.imageUrl}
                  alt={current.name}
                  referrerPolicy="no-referrer"
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-none object-cover grayscale brightness-95 relative z-10"
                />
              </div>

              <div className="mt-4">
                <h4 className="font-bold font-serif-display text-sm text-slate-900">{current.name}</h4>
                <p className="text-[10px] text-[#D4AF37] font-mono mt-0.5 uppercase tracking-wider">
                  {current.role}
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5 font-display">
                  {current.location}
                </p>
              </div>
            </div>

            {/* Testimonial Quote Column */}
            <div className="col-span-1 md:col-span-8 flex flex-col justify-between space-y-4">
              
              {/* Star Evaluation */}
              <div className="flex items-center space-x-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} size={13} className="fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>

              {/* Quote Content */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans italic">
                "{current.quote}"
              </p>

              {/* Tag/Service Label */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-display">
                    Procured Journey
                  </span>
                  <span className="text-xs font-semibold text-slate-800 uppercase tracking-wider block mt-0.5 font-display">
                    {current.serviceUsed}
                  </span>
                </div>
                
                {/* Advisory Badge */}
                <span className="px-2.5 py-1.5 rounded-none bg-slate-50 border border-[#D4AF37]/30 text-[#c2a032] text-[9px] font-mono uppercase font-semibold">
                  Verified Client
                </span>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Control Buttons */}
        <div className="flex items-center justify-end space-x-2 mt-6 md:mt-2 relative z-20">
          <button
            onClick={prevSlide}
            className="p-2 rounded-none bg-white border border-slate-200 hover:border-slate-350 hover:bg-slate-50 text-slate-600 transition-all cursor-pointer shadow-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={15} />
          </button>
          
          <span className="text-[9px] font-semibold text-slate-450 font-mono px-1">
            {currentIdx + 1} / {TESTIMONIALS.length}
          </span>

          <button
            onClick={nextSlide}
            className="p-2 rounded-none bg-white border border-slate-200 hover:border-slate-350 hover:bg-slate-50 text-slate-600 transition-all cursor-pointer shadow-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight size={15} />
          </button>
        </div>

      </div>
    </div>
  );
}
