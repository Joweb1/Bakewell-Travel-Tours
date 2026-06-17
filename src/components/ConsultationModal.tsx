import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, User, Mail, Phone, MapPin, MessageSquare, CheckCircle, ShieldCheck } from 'lucide-react';
import { ConsultationRequest } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetService?: string;
}

export default function ConsultationModal({ isOpen, onClose, presetService }: ConsultationModalProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceNeeded, setServiceNeeded] = useState(presetService || 'Flight Ticket Booking');
  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Sync presetService if it changes
  React.useEffect(() => {
    if (presetService) {
      setServiceNeeded(presetService);
    }
  }, [presetService]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate luxury dispatching
    setTimeout(() => {
      const newRequest: ConsultationRequest = {
        id: 'req_' + Date.now(),
        fullName,
        email,
        phone,
        serviceNeeded,
        destination,
        travelDate,
        message,
        submittedAt: new Date().toISOString()
      };

      // Save to local storage for authentic persistence
      try {
        const existing = localStorage.getItem('bakewell_consultations');
        const list = existing ? JSON.parse(existing) : [];
        list.push(newRequest);
        localStorage.setItem('bakewell_consultations', JSON.stringify(list));
      } catch (err) {
        console.error('Storage error:', err);
      }

      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setDestination('');
    setTravelDate('');
    setMessage('');
    setErrors({});
    setIsSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10" id="consultation-modal-root">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative bg-white w-full max-w-2xl rounded-none shadow-2xl border-2 border-[#D4AF37]/40 overflow-hidden z-10 font-sans"
        >
          {/* Header */}
          <div className="bg-[#0F172A] text-white p-6 relative flex items-center justify-between border-b border-[#D4AF37]/35">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-1 block font-display">
                Signature Travel Advisory Service
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold font-serif-display tracking-tight text-white leading-tight">
                Schedule Advisory Session
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white hover:bg-slate-800 p-2 rounded-none transition-all border border-transparent hover:border-slate-700"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Form / Success Content */}
          <div className="max-h-[75vh] overflow-y-auto p-6 sm:p-8 bg-white">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <p className="text-xs text-slate-550 leading-relaxed max-w-xl">
                    Thank you for choosing Bakewell Travel & Tours Limited. Please furnish your contact coordinates and itinerary goals. A senior travel specialist will research your request prior to our call.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[10px] font-bold text-slate-705 mb-1.5 uppercase tracking-widest font-display">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                          <User size={15} />
                        </span>
                        <input
                          type="text"
                          value={fullName}
                          onChange={(e) => {
                            setFullName(e.target.value);
                            if (errors.fullName) setErrors({ ...errors, fullName: '' });
                          }}
                          placeholder="Lord/Lady, Mr, Mrs, Dr..."
                          className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border ${
                            errors.fullName ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-[#D4AF37]'
                          } rounded-none focus:outline-none text-xs sm:text-sm text-slate-800 transition-all`}
                        />
                      </div>
                      {errors.fullName && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.fullName}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[10px] font-bold text-slate-705 mb-1.5 uppercase tracking-widest font-display">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                          <Mail size={15} />
                        </span>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors({ ...errors, email: '' });
                          }}
                          placeholder="client@mail.com"
                          className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border ${
                            errors.email ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-[#D4AF37]'
                          } rounded-none focus:outline-none text-xs sm:text-sm text-slate-800 transition-all`}
                        />
                      </div>
                      {errors.email && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label className="block text-[10px] font-bold text-slate-705 mb-1.5 uppercase tracking-widest font-display">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                          <Phone size={15} />
                        </span>
                        <input
                          type="text"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                            if (errors.phone) setErrors({ ...errors, phone: '' });
                          }}
                          placeholder="289-428-7927"
                          className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border ${
                            errors.phone ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-[#D4AF37]'
                          } rounded-none focus:outline-none text-xs sm:text-sm text-slate-800 transition-all`}
                        />
                      </div>
                      {errors.phone && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.phone}</p>}
                    </div>

                    {/* Service needed */}
                    <div>
                      <label className="block text-[10px] font-bold text-slate-705 mb-1.5 uppercase tracking-widest font-display">
                        Exclusive Service Needed
                      </label>
                      <select
                        value={serviceNeeded}
                        onChange={(e) => setServiceNeeded(e.target.value)}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-none focus:outline-none focus:border-[#D4AF37] text-xs sm:text-sm text-slate-800 transition-all cursor-pointer"
                      >
                        <option>Flight Ticket Booking</option>
                        <option>Tour Booking & Experiences</option>
                        <option>Visa Processing & Procurement</option>
                        <option>General Travel Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Preferred Destination */}
                    <div>
                      <label className="block text-[10px] font-bold text-slate-705 mb-1.5 uppercase tracking-widest font-display">
                        Destination <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                          <MapPin size={15} />
                        </span>
                        <input
                          type="text"
                          value={destination}
                          onChange={(e) => {
                            setDestination(e.target.value);
                            if (errors.destination) setErrors({ ...errors, destination: '' });
                          }}
                          placeholder="e.g. Toronto, Banff, Geneva"
                          className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border ${
                            errors.destination ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-[#D4AF37]'
                          } rounded-none focus:outline-none text-xs sm:text-sm text-slate-800 transition-all`}
                        />
                      </div>
                      {errors.destination && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.destination}</p>}
                    </div>

                    {/* Travel Date */}
                    <div>
                      <label className="block text-[10px] font-bold text-slate-705 mb-1.5 uppercase tracking-widest font-display">
                        Intended Travel Date <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                          <Calendar size={15} />
                        </span>
                        <input
                          type="date"
                          value={travelDate}
                          onChange={(e) => {
                            setTravelDate(e.target.value);
                            if (errors.travelDate) setErrors({ ...errors, travelDate: '' });
                          }}
                          className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border ${
                            errors.travelDate ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-[#D4AF37]'
                          } rounded-none focus:outline-none text-xs sm:text-sm text-slate-800 transition-all`}
                        />
                      </div>
                      {errors.travelDate && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.travelDate}</p>}
                    </div>
                  </div>

                  {/* Special Requests / Message */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-705 mb-1.5 uppercase tracking-widest font-display">
                      Special Requests or Notes (Optional)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-slate-400 font-display">
                        <MessageSquare size={15} />
                      </span>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about complex routes, multi-generational traveler counts, dietary choices, or urgent timelines..."
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-[#D4AF37] rounded-none focus:outline-none text-xs sm:text-sm text-slate-800 transition-all h-24 resize-none"
                      />
                    </div>
                  </div>

                  {/* Anti-spam Trust Note */}
                  <div className="flex items-start space-x-2.5 p-3.5 bg-slate-50 rounded-none border border-slate-200">
                    <ShieldCheck className="text-[#D4AF37] mt-0.5 flex-shrink-0" size={15} />
                    <p className="text-[10px] text-slate-500 leading-relaxed font-sans">
                      We treat your personal credentials with uncompromising confidentiality. No spam. Direct verification details are strictly shared with aviation bodies & visa registries only.
                    </p>
                  </div>

                  {/* Footer CTAs */}
                  <div className="flex items-center justify-end space-x-3 pt-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-5 py-2.5 rounded-none border border-slate-250 hover:border-slate-400 text-slate-650 font-semibold font-display uppercase tracking-wider text-[10px] bg-white transition-all cursor-pointer hover:bg-slate-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2.5 rounded-none bg-[#0F172A] border border-slate-950 hover:bg-slate-850 active:bg-slate-950 text-white font-bold font-display uppercase tracking-widest text-[10px] transition-all shadow-sm flex items-center space-x-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Validating...</span>
                        </>
                      ) : (
                        <span>Request Consultation</span>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-10 text-center flex flex-col items-center space-y-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 10, stiffness: 100 }}
                    className="w-16 h-16 bg-emerald-700 rounded-none flex items-center justify-center text-white"
                  >
                    <CheckCircle size={36} />
                  </motion.div>

                  <h4 className="text-xl font-bold font-serif-display text-slate-900">
                    Consultation Request Lodged
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-550 max-w-sm leading-relaxed mx-auto">
                    Excellent, <strong>{fullName}</strong>. Your custom inquiry for <strong className="text-slate-850">{serviceNeeded}</strong> has been successfully persistent-registered!
                  </p>
                  <div className="bg-slate-50 p-4 rounded-none border border-slate-200 text-left text-xs max-w-md w-full divide-y divide-slate-155">
                    <div className="flex justify-between py-1.5"><span className="text-slate-400">Target Destination</span><span className="font-semibold text-slate-700">{destination}</span></div>
                    <div className="flex justify-between py-1.5"><span className="text-slate-400">Proposed Departure</span><span className="font-semibold text-slate-700">{travelDate}</span></div>
                    <div className="flex justify-between py-1.5"><span className="text-slate-400">Advisory Status</span><span className="font-semibold text-emerald-600 font-mono text-[10px]">Pending Review</span></div>
                  </div>
                  <p className="text-[11px] text-slate-500 max-w-xs mx-auto pt-2 leading-relaxed">
                    A senior Bakewell travel strategist is already matching this request against carrier boards and visa directives. We will phone you shortly at <span className="text-slate-750 font-semibold">{phone}</span>.
                  </p>

                  <button
                    onClick={handleReset}
                    className="px-6 py-3 bg-[#0F172A] hover:bg-slate-800 text-white rounded-none font-bold text-[10px] uppercase tracking-widest transition-all mt-4"
                  >
                    Close Window
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
