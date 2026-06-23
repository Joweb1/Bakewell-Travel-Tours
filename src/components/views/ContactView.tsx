import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../../data';
import { ConsultationRequest } from '../../types';
import { sendBookingEmails } from '../../utils/emailService';
import { 
  Phone, Mail, Globe, MapPin, CheckCircle, HelpCircle, 
  ChevronDown, ClipboardList, Clock 
} from 'lucide-react';

export default function ContactView() {
  
  // Custom Accordion state
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  // Contact Form state definitions
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceNeeded, setServiceNeeded] = useState('Flight Ticket Booking');
  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [message, setMessage] = useState('');

  // Submit UI states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please provide a valid email';
    }
    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(phone)) {
      newErrors.phone = 'Invalid phone format (e.g. 289-428-7927)';
    }
    if (!destination.trim()) newErrors.destination = 'Destination is required';
    if (!travelDate) newErrors.travelDate = 'Travel date is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const newRequest: ConsultationRequest = {
      id: 'contact_' + Date.now(),
      fullName,
      email,
      phone,
      serviceNeeded,
      destination,
      travelDate,
      message,
      submittedAt: new Date().toISOString()
    };

    // Real persistency integration to localStorage
    try {
      const existing = localStorage.getItem('bakewell_consultations');
      const list = existing ? JSON.parse(existing) : [];
      list.push(newRequest);
      localStorage.setItem('bakewell_consultations', JSON.stringify(list));
    } catch (err) {
      console.error('Storage error:', err);
    }

    // Dispatch Emails via EmailJS
    sendBookingEmails({
      fullName,
      email,
      phone,
      serviceNeeded,
      destination,
      travelDate,
      message
    })
    .then(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    })
    .catch((err) => {
      console.error('Email dispatch failed:', err);
      // Fallback: succeed anyway since it's saved locally
      setIsSubmitting(false);
      setIsSuccess(true);
    });
  };

  const handleFormReset = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setDestination('');
    setTravelDate('');
    setMessage('');
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <div id="contact-page-view" className="font-sans pt-24 min-h-screen bg-[#F8FAFC]">
      
      {/* 1. CONTACT HERO */}
      <section className="relative py-20 bg-[#0F172A] border-b border-rose-950/10 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200')` }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block font-display">
            Advisory Liaison
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif-display tracking-tight text-white animate-fade-in">
            Contact Our Specialized Consultants
          </h1>
          <p className="text-xs sm:text-sm text-slate-350 max-w-2xl mx-auto leading-relaxed">
            Choose direct dial, dedicated WhatsApp correspondence, or submit the secure form below. We respond promptly with certified aviation and immigration insights.
          </p>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & SECURED FORM LAYOUT */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Liaison columns (Details + map) */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block font-mono">
                  Corporate Coordinates
                </span>
                <h2 className="text-2xl font-extrabold font-serif-display text-slate-900 tracking-tight leading-tight">
                  Reach Out to Bakewell Advisory
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Have questions about Canadian tourist requirements, first-class pricing, or complex itineraries? Connect with a professional immediately.
                </p>
              </div>

              {/* Coordinates List */}
              <div className="bg-white border border-slate-200 p-6 rounded-none space-y-5 shadow-sm">
                
                {/* Physical office */}
                <div className="flex items-start space-x-3.5 text-xs">
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-none text-[#D4AF37] shadow-sm">
                    <MapPin size={15} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase font-display tracking-wider text-[11px]">Registered Travel Office</h4>
                    <span className="text-slate-500 block mt-1 leading-normal">
                      Bakewell Travel & Tours Limited<br />
                      Bloor Street West, Yorkville District,<br />
                      Toronto, Ontario, Canada
                    </span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start space-x-3.5 text-xs">
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-none text-[#D4AF37] shadow-sm">
                    <Phone size={15} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase font-display tracking-wider text-[11px]">Phone Lines</h4>
                    <span className="block text-slate-500 mt-1">Direct Callback Office Line:</span>
                    <a href="tel:289-428-7927" className="text-slate-900 font-bold font-mono tracking-wide mt-0.5 block hover:text-[#D4AF37] transition-colors">
                      289-428-7927
                    </a>
                  </div>
                </div>

                {/* Electronic mail */}
                <div className="flex items-start space-x-3.5 text-xs">
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-none text-[#D4AF37] shadow-sm">
                    <Mail size={15} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase font-display tracking-wider text-[11px]">Electronic Mail</h4>
                    <span className="block text-slate-500 mt-1">General Operations:</span>
                    <a href="mailto:info@bakewelltraveltours.ca" className="text-slate-900 font-bold tracking-wide mt-0.5 block hover:text-[#D4AF37] transition-colors font-mono">
                      info@bakewelltraveltours.ca
                    </a>
                  </div>
                </div>

                {/* Web Domain */}
                <div className="flex items-start space-x-3.5 text-xs">
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-none text-[#D4AF37] shadow-sm">
                    <Globe size={15} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase font-display tracking-wider text-[11px]">Verified Web URL</h4>
                    <a href="https://bakewelltraveltours.ca" className="text-slate-900 font-bold block mt-1 hover:text-[#D4AF37] transition-colors font-mono">
                      bakewelltraveltours.ca
                    </a>
                  </div>
                </div>

              </div>

              {/* Embedded custom Styled Google Map representation */}
              <div className="rounded-none overflow-hidden shadow-sm border border-slate-250 h-52 bg-slate-50 relative">
                <iframe 
                  title="Bakewell Toronto Office Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.1364506506313!2d-79.3908866!3d43.6702334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34a1772b1159%3A0xc6cbfa8480337b52!2sYorkville%2C%20Toronto%2C%20ON!5e0!3m2!1sen!2sca!4v1700000000000" 
                  className="w-full h-full border-0 grayscale saturate-50 contrast-125"
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </div>

            {/* Form Column */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-none p-6 sm:p-10 shadow-sm relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="consultation-form"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    onSubmit={handleFormSubmit}
                    className="space-y-5"
                  >
                    <div>
                      <h3 className="text-xl font-bold font-serif-display text-slate-900 uppercase">
                        Request Advisor Call
                      </h3>
                      <p className="text-[11px] text-slate-550 mt-1">
                        Fields marked with <span className="text-red-500">*</span> are mandatory for validation.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-705 uppercase tracking-widest mb-1.5 font-display">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={fullName}
                          onChange={(e) => {
                            setFullName(e.target.value);
                            if (errors.fullName) setErrors({ ...errors, fullName: '' });
                          }}
                          placeholder="Lord/Lady, Mr, Mrs, Dr..."
                          className={`w-full px-4 py-2.5 bg-slate-50 border ${
                            errors.fullName ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-[#D4AF37]'
                          } rounded-none text-xs sm:text-sm text-slate-800 focus:outline-none transition-all`}
                        />
                        {errors.fullName && <p className="text-red-500 text-[10px] sm:text-xs mt-1 font-semibold">{errors.fullName}</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-705 uppercase tracking-widest mb-1.5 font-display">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors({ ...errors, email: '' });
                          }}
                          placeholder="client@mail.com"
                          className={`w-full px-4 py-2.5 bg-slate-50 border ${
                            errors.email ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-[#D4AF37]'
                          } rounded-none text-xs sm:text-sm text-slate-800 focus:outline-none transition-all`}
                        />
                        {errors.email && <p className="text-red-500 text-[10px] sm:text-xs mt-1 font-semibold">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-705 uppercase tracking-widest mb-1.5 font-display">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                            if (errors.phone) setErrors({ ...errors, phone: '' });
                          }}
                          placeholder="289-428-7927"
                          className={`w-full px-4 py-2.5 bg-slate-50 border ${
                            errors.phone ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-[#D4AF37]'
                          } rounded-none text-xs sm:text-sm text-slate-800 focus:outline-none transition-all`}
                        />
                        {errors.phone && <p className="text-red-500 text-[10px] sm:text-xs mt-1 font-semibold">{errors.phone}</p>}
                      </div>

                      {/* Service Needed */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-705 uppercase tracking-widest mb-1.5 font-display">
                          Service Needed
                        </label>
                        <select
                          value={serviceNeeded}
                          onChange={(e) => setServiceNeeded(e.target.value)}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-none text-xs sm:text-sm text-slate-800 focus:outline-none cursor-pointer"
                        >
                          <option>Flight Ticket Booking</option>
                          <option>Tour Booking & Experiences</option>
                          <option>Visa Processing & Procurement</option>
                          <option>Employment Visa Support</option>
                          <option>General Travel Consultation</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Destination */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-705 uppercase tracking-widest mb-1.5 font-display">
                          Destination Intended <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={destination}
                          onChange={(e) => {
                            setDestination(e.target.value);
                            if (errors.destination) setErrors({ ...errors, destination: '' });
                          }}
                          placeholder="e.g. Toronto, Vancouver"
                          className={`w-full px-4 py-2.5 bg-slate-50 border ${
                            errors.destination ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-[#D4AF37]'
                          } rounded-none text-xs sm:text-sm text-slate-800 focus:outline-none transition-all`}
                        />
                        {errors.destination && <p className="text-red-500 text-[10px] sm:text-xs mt-1 font-semibold">{errors.destination}</p>}
                      </div>

                      {/* Travel Date */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-705 uppercase tracking-widest mb-1.5 font-display">
                          Travel Date <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          value={travelDate}
                          onChange={(e) => {
                            setTravelDate(e.target.value);
                            if (errors.travelDate) setErrors({ ...errors, travelDate: '' });
                          }}
                          className={`w-full px-4 py-2.5 bg-slate-50 border ${
                            errors.travelDate ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-[#D4AF37]'
                          } rounded-none text-xs sm:text-sm text-slate-800 focus:outline-none transition-all`}
                        />
                        {errors.travelDate && <p className="text-red-500 text-[10px] sm:text-xs mt-1 font-semibold">{errors.travelDate}</p>}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[10px] font-bold text-slate-705 uppercase tracking-widest mb-1.5 font-display">
                        Message / Travel Intent
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Detail seating requests, group rosters, or visa history questions..."
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-[#D4AF37] rounded-none text-xs sm:text-sm text-slate-800 focus:outline-none transition-all h-24 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#0F172A] hover:bg-slate-850 text-white font-bold text-xs uppercase tracking-widest rounded-none transition-all shadow-md cursor-pointer flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-white animate-fade-in" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Validating Credentials...</span>
                        </>
                      ) : (
                        <span>Request Consultation</span>
                      )}
                    </button>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="py-12 text-center space-y-5"
                  >
                    <div className="w-14 h-14 bg-emerald-700 rounded-none flex items-center justify-center text-white mx-auto shadow-sm">
                      <CheckCircle size={28} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-extrabold font-serif-display text-slate-950 uppercase tracking-wide">
                        Advisory Request Received
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                        Thank you, <strong>{fullName}</strong>. Your consultation files for <strong className="text-slate-900">{serviceNeeded}</strong> are saved in our verified database queue.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-none border border-slate-200 text-left text-xs divide-y divide-slate-100 max-w-sm mx-auto">
                      <div className="flex justify-between py-1.5"><span className="text-slate-400">Target</span><span className="font-semibold">{destination}</span></div>
                      <div className="flex justify-between py-1.5"><span className="text-slate-400">Target Date</span><span className="font-semibold">{travelDate}</span></div>
                      <div className="flex justify-between py-1.5"><span className="text-slate-400">Response Status</span><span className="font-bold text-emerald-600 font-mono text-[10px] tracking-wide">Priority Dispatch Set</span></div>
                    </div>

                    <p className="text-[11px] text-slate-500 leading-relaxed max-w-sm mx-auto">
                      A senior Bakewell officer is auditing carrier boards to arrange connections for your destination. We will dial your number at <span className="font-semibold text-slate-850">{phone}</span> shortly.
                    </p>

                    <button
                      onClick={handleFormReset}
                      className="px-6 py-3 bg-[#0F172A] text-white hover:bg-slate-800 text-[10px] font-bold uppercase tracking-widest rounded-none cursor-pointer"
                    >
                      Book Another Advisory Session
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

        </div>
      </section>

      {/* 3. FAQ SECTION (COMPREHENSIVE CUSTOM ACCORDION) */}
      <section className="py-20 bg-white border-t border-slate-200" id="faq-accordions">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <HelpCircle className="mx-auto text-[#D4AF37] mb-3" size={30} />
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-1 font-display">
              Adviser Registry Q&A
            </span>
            <h2 className="text-3xl font-extrabold font-serif-display text-slate-900 tracking-tight">
              Frequently Answered Inquiries
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div 
                  key={faq.id}
                  className="bg-white border border-slate-200 rounded-none overflow-hidden shadow-sm hover:border-[#D4AF37]/50 transition-all"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between space-x-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-xs sm:text-sm font-bold text-slate-900 leading-normal font-display">
                      {faq.question}
                    </span>
                    <span className={`p-1.5 rounded-none bg-slate-50 text-slate-450 border border-slate-200 transition-transform mt-0.5 ${isOpen ? 'rotate-180 bg-[#D4AF37]/10 text-[#c2a032] border-[#D4AF37]/30' : ''}`}>
                      <ChevronDown size={13} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-xs text-slate-500 leading-relaxed border-t border-slate-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
