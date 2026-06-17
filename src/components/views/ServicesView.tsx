import React from 'react';
import { motion } from 'motion/react';
import { Plane, Compass, FileCheck, CheckCircle2, PhoneCall, ShieldCheck, Mail } from 'lucide-react';
import { SERVICES } from '../../data';

interface ServicesViewProps {
  onOpenConsultation: (service?: string) => void;
}

export default function ServicesView({ onOpenConsultation }: ServicesViewProps) {
  
  const detailedServices = [
    {
      id: 'flights',
      title: 'Flight Ticket Booking',
      icon: Plane,
      coverUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200',
      tagline: 'Premium Air Procurement & Priority Routings',
      desc: 'At Bakewell, flight ticket booking is handled with paramount expertise. We go far beyond standard search portals. We work in direct coordination with global airline networks to secure optimal business routing, premium cabin inventories, corporate charter arrangements, and complex multi-destination layovers.',
      categories: [
        { name: 'International Flights', desc: 'Global routes in First and Business cabins, direct connections, and premium lounges.' },
        { name: 'Domestic Flights', desc: 'Rapid, reliable transcontinental or regional flight patterns within Canada.' },
        { name: 'Group Travel Booking', desc: 'Simultaneous ticketing for multi-generational families, events, or student delegations.' },
        { name: 'Business Travel Portals', desc: 'Expedited arrangements for corporate clients seeking absolute flexibility.' }
      ]
    },
    {
      id: 'tours',
      title: 'Tour Booking & Experiences',
      icon: Compass,
      coverUrl: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=1200',
      tagline: 'Authentic Canada Experiences & Curated International Leisure',
      desc: 'Our bespoke tour team crafts highly tailored journeys based on your specific travel values. From the rocky, emerald-green peaks of Banff National Park to the historic cobblestone sectors of Quebec and majestic coastal floatplane tours in Vancouver, every destination card is fully managed to exceed the ultimate expectations of high-net-worth clients.',
      categories: [
        { name: 'Bespoke Vacation Packages', desc: 'Handcrafted luxury accommodation, private vehicles, and specialized local guides.' },
        { name: 'Multi-generational Family Tours', desc: 'Balanced, stress-free pacing with curated educational, culinary, and historic excursions.' },
        { name: 'Exotic Honeymoon Trips', desc: 'Uncompromised privacy, romantic ocean hideaways, and celebratory amenities.' },
        { name: 'Guided Adventure & Outdoors', desc: 'Helicopter alpine flightseeing, glacier scaling, and deep-wilderness fishing.' }
      ]
    },
    {
      id: 'visa',
      title: 'Visa Processing & Procurement',
      icon: FileCheck,
      coverUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
      tagline: 'Rigorous Dossier Auditing & Absolute Embassy Alignment',
      desc: 'Acquiring travel permits can be a grueling process. Our expert visa processing and procurement office removes all ambiguity. We conduct structured assessments, analyze potential document discrepancies, perform detailed translations, and submit aligned folders directly to the corresponding embassy or consulate.',
      categories: [
        { name: 'Tourist Visa Procurement', desc: 'Assistance with required financial declarations, hotel vouchers, and invitation layouts.' },
        { name: 'Student Visa Support', desc: 'Careful alignment with institutional acceptances, study permit guidelines, and financial backing proofs.' },
        { name: 'Corporate Business Visa', desc: 'Fast-tracked approvals for executive travel, trade summits, and multi-entry business clearances.' },
        { name: 'Pre-flight Travel Consultations', desc: 'One-on-one document audit, mock interview coaching, and consular guidance.' }
      ]
    }
  ];

  return (
    <div id="services-page-view" className="font-sans pt-24 min-h-screen bg-[#F8FAFC]">
      
      {/* 1. SERVICES HERO */}
      <section className="relative py-20 bg-[#0F172A] border-b border-rose-950/10 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=1600')` }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block font-display">
            Executive Services Directory
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif-display tracking-tight text-white">
            Bespoke Portfolios For Discerning Clients
          </h1>
          <p className="text-xs sm:text-sm text-slate-350 max-w-2xl mx-auto leading-relaxed">
            Discover how Bakewell Travel & Tours Limited positions expert advisory, precise visa audits, and premium aviation logistics as a singular, unified platform.
          </p>
        </div>
      </section>

      {/* 2. DETAILED SERVICE SECTIONS */}
      <section className="py-16 space-y-24">
        {detailedServices.map((section, sIdx) => {
          const SectionIcon = section.icon;
          const isEven = sIdx % 2 === 0;

          return (
            <div 
              key={section.id} 
              id={`service-section-${section.id}`}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 cursor-default animate-fade-in"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Visual Imagery Column */}
                <div className={`col-span-1 lg:col-span-5 ${!isEven ? 'lg:order-last' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative rounded-none overflow-hidden shadow-sm border border-slate-250 group"
                  >
                    <div className="absolute inset-0 bg-slate-900/10 z-10 transition-colors group-hover:bg-transparent" />
                    <img 
                      src={section.coverUrl} 
                      alt={section.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-[380px] object-cover duration-500 scale-100 group-hover:scale-[1.03] grayscale brightness-95"
                    />
                    
                    {/* Glowing Accent Indicator */}
                    <div className="absolute top-4 left-4 p-3 bg-slate-950 text-white backdrop-blur-md rounded-none border border-[#D4AF37]/35 z-20 shadow-lg">
                      <SectionIcon size={20} className="text-[#D4AF37]" />
                    </div>
                  </motion.div>
                </div>

                {/* Core Descriptive Text & Categories */}
                <div className="col-span-1 lg:col-span-7 space-y-6">
                  
                  <div>
                    <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest block font-mono">
                      Department {sIdx + 1} of 3
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold font-serif-display text-slate-900 tracking-tight mt-1.5">
                      {section.title}
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-1 font-display">
                      {section.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                    {section.desc}
                  </p>

                  {/* Categories Breakdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {section.categories.map((cat) => (
                      <div 
                        key={cat.name}
                        className="p-4 bg-white border border-slate-200 rounded-none hover:border-[#D4AF37]/45 transition-colors space-y-1.5 shadow-sm"
                      >
                        <div className="flex items-center space-x-2 text-slate-900">
                          <CheckCircle2 size={12} className="text-[#D4AF37] flex-shrink-0" />
                          <h4 className="text-xs font-bold uppercase tracking-wider font-display">
                            {cat.name}
                          </h4>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-normal pl-5">
                          {cat.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Actions Bar */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-slate-200">
                    <button
                      onClick={() => onOpenConsultation(section.title)}
                      className="px-6 py-3.5 bg-[#D4AF37] hover:bg-[#c2a032] text-slate-950 font-bold text-xs uppercase tracking-widest rounded-none transition-all shadow-md shadow-yellow-950/10 cursor-pointer"
                    >
                      Enquire Department
                    </button>
                    
                    <a
                      href="tel:289-428-7927"
                      className="flex items-center space-x-2 text-xs font-mono font-bold text-slate-700 hover:text-slate-950 transition-colors"
                    >
                      <PhoneCall size={13} className="text-[#D4AF37]" />
                      <span>289-428-7927</span>
                    </a>
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* 3. TRUST BANNER WITH BACKGROUND */}
      <section className="bg-[#0F172A] text-white py-16 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <ShieldCheck className="mx-auto text-[#D4AF37]" size={36} />
          <h3 className="text-xl sm:text-2xl font-bold font-serif-display tracking-tight text-white">
            Uncompromising Professionalism & Global Security Standards
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            By acting as an authorized boutique consultancy, we handle sensitive client credentials with strict confidentiality. From airline priority blocks to direct diplomatic submissions, your travel path is verified manually by experienced agents.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4 sm:gap-6 text-xs text-slate-400 font-mono">
            <span>● 24/7 Client Advisory Gate</span>
            <span>● Secured Client Vault</span>
            <span>● Comprehensive Rebooking Guarantees</span>
          </div>
        </div>
      </section>

    </div>
  );
}
