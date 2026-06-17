import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquareText, ShieldAlert, CheckCircle, PlaneTakeoff, ShieldCheck } from 'lucide-react';

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: '1. Contact Us',
      subtitle: 'Initiate Correspondence',
      description: 'Reach out via our digital secure form, direct phone line, or bespoke WhatsApp widget to request an evaluation.',
      details: ['Average response under 2 hours', 'Specialist matching based on intent', 'Initial documentation pre-check list'],
      icon: Mail
    },
    {
      title: '2. Professional Consultation',
      subtitle: 'Bespoke Travel Mapping',
      description: 'Engage with a seasoned travel advisor to audit your documentation and design custom flight routings and itinerary outlines.',
      details: ['Comprehensive dossier evaluation', 'Custom hotel and aircraft allocations', 'Transparent budget and advisory schedules'],
      icon: MessageSquareText
    },
    {
      title: '3. Diligent Processing',
      subtitle: 'Procurement & Approvals',
      description: 'Our specialists coordinate with diplomatic channels and carrier networks to secure seats, ticket codes, and visa paperwork.',
      details: ['Secure direct booking systems', 'Rigorous embassy checks', 'Active updates on application tracking'],
      icon: ShieldCheck
    },
    {
      title: '4. Set Travel Path',
      subtitle: 'Global Embarkation',
      description: 'Receive your complete travel pack comprising fully checked tickets, accommodation vouchers, visa dossiers, and lounge access cards.',
      details: ['Live 24/7 travel flight tracking', 'Continuous emergency support line', 'Disruption and schedule change handling'],
      icon: PlaneTakeoff
    }
  ];

  return (
    <div className="py-16 px-4 bg-slate-950 border border-slate-900 rounded-none overflow-hidden font-sans relative" id="process-timeline-root">
      {/* Absolute elegant glowing grid decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-transparent to-slate-950 opacity-80 pointer-events-none" />

      <div className="relative z-10">
        
        {/* Header content */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block mb-2 font-display">
            The Advisory Roadmap
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-serif-display text-white tracking-tight mb-4">
            Our Elite Four-Step Journey
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            From your introductory inquiry to international boarding, your journey is accompanied by unwavering attention to security and luxury.
          </p>
        </div>

        {/* Desktop Horizontal Line Timeline (rendered on md and up) */}
        <div className="hidden md:block relative max-w-6xl mx-auto mb-14">
          
          {/* Background Connecting Line */}
          <div className="absolute top-[28px] left-[5%] right-[5%] h-[1px] bg-slate-800 pointer-events-none">
            {/* Animated progress fill */}
            <motion.div 
              className="h-full bg-gradient-to-r from-[#D4AF37] to-blue-500"
              animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          </div>

          <div className="grid grid-cols-4 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              const isActive = activeStep === idx;
              const isPassed = activeStep > idx;

              return (
                <div key={step.title} className="text-center">
                  {/* Step bubble marker */}
                  <button
                    onClick={() => setActiveStep(idx)}
                    className="mx-auto flex items-center justify-center p-1.5 focus:outline-none cursor-pointer group"
                  >
                    <motion.div
                      animate={{ 
                        scale: isActive ? 1.12 : 1,
                        borderColor: isActive ? '#D4AF37' : (isPassed ? '#3B82F6' : '#334155'),
                        backgroundColor: isActive ? '#0F172A' : (isPassed ? '#1e293b' : '#0f172a')
                      }}
                      transition={{ duration: 0.3 }}
                      className={`w-12 h-12 rounded-none border flex items-center justify-center text-white shadow-xl`}
                    >
                      <StepIcon 
                        size={16} 
                        className={`transition-colors ${
                          isActive ? 'text-[#D4AF37]' : (isPassed ? 'text-[#3B82F6]' : 'text-slate-400')
                        }`} 
                      />
                    </motion.div>
                  </button>

                  {/* Labels */}
                  <div className="mt-4">
                    <button 
                      onClick={() => setActiveStep(idx)}
                      className={`text-xs font-bold font-display uppercase tracking-wider block mx-auto transition-colors focus:outline-none ${
                        isActive ? 'text-[#D4AF37]' : 'text-slate-350 hover:text-white'
                      }`}
                    >
                      {step.title}
                    </button>
                    <span className="text-[9px] text-slate-500 uppercase tracking-widest block mt-1">
                      {step.subtitle}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Selected Step Detail Panel */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-5 gap-8 bg-slate-950/60 p-6 sm:p-8 rounded-none border border-slate-850"
          >
            {/* Step Icon & Left Column */}
            <div className="md:col-span-2 space-y-4">
              <div className="inline-flex p-3.5 bg-[#0F172A] border border-slate-800 rounded-none text-[#D4AF37]">
                {React.createElement(steps[activeStep].icon, { size: 24 })}
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest block font-mono">
                  Phase {activeStep + 1} of 4
                </span>
                <h4 className="text-xl font-bold font-serif-display text-white mt-1">
                  {steps[activeStep].title.split('.')[1] || steps[activeStep].title}
                </h4>
                <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest font-mono">
                  {steps[activeStep].subtitle}
                </p>
              </div>
            </div>

            {/* Right Column details */}
            <div className="md:col-span-3 space-y-5 flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-slate-350 leading-relaxed">
                {steps[activeStep].description}
              </p>

              <div className="space-y-2.5">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]/90 block font-display">
                  Commitments & Deliverables
                </span>
                <div className="grid grid-cols-1 gap-2">
                  {steps[activeStep].details.map((detail) => (
                    <div key={detail} className="flex items-center space-x-2.5 text-xs text-slate-300">
                      <div className="w-1 h-1 rounded-none bg-[#D4AF37]" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Navigation helpers for mobile */}
              <div className="flex md:hidden items-center justify-between pt-4 border-t border-slate-800/60">
                <button
                  type="button"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(activeStep - 1)}
                  className={`text-xs font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-wider disabled:opacity-20 cursor-pointer`}
                >
                  ← Prior Step
                </button>
                <button
                  type="button"
                  disabled={activeStep === steps.length - 1}
                  onClick={() => setActiveStep(activeStep + 1)}
                  className={`text-xs font-bold text-[#D4AF37] hover:text-white transition-colors uppercase tracking-wider disabled:opacity-20 cursor-pointer`}
                >
                  Next Step →
                </button>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
