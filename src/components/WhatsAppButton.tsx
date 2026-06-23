import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send } from 'lucide-react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('General Consultation');
  const [customMessage, setCustomMessage] = useState('');

  const topics = [
    'Flight Ticket Booking',
    'Tour Packages & Experiences',
    'Visa Processing Support',
    'Employment Visa Support',
    'General Consultation'
  ];

  const handleStartChat = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = '289-428-7927';
    const introduction = `Hello Bakewell Travel & Tours, I would like to consult about: *${selectedTopic}*.\n`;
    const bodyText = customMessage ? `${introduction}Additional Details: ${customMessage}` : introduction;
    const url = `https://wa.me/12894287927?text=${encodeURIComponent(bodyText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans" id="whatsapp-widget">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="mb-4 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-emerald-600 text-white p-5 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg text-white">
                    B
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-emerald-600 rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Bakewell Travel Advisory</h4>
                  <p className="text-xs text-emerald-100">Typically replies within minutes</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-emerald-200 transition-colors p-1 rounded-full hover:bg-emerald-700/50"
                aria-label="Close chat window"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content Form */}
            <form onSubmit={handleStartChat} className="p-5 bg-slate-50 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Select Consultation Category
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {topics.map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => setSelectedTopic(topic)}
                      className={`text-left p-2 rounded-lg border text-xs font-medium transition-all ${
                        selectedTopic === topic
                          ? 'border-emerald-600 bg-emerald-50/50 text-emerald-800 shadow-sm'
                          : 'border-slate-200 bg-white hover:border-slate-300 text-slate-600'
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Optional Note
                </label>
                <textarea
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  placeholder="Tell us about your travel dates, count, or destinations..."
                  className="w-full h-20 p-2 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500 text-slate-700 resize-none transition-all placeholder:text-slate-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-medium rounded-xl text-xs transition-all flex items-center justify-center space-x-2 shadow-md shadow-emerald-600/15 group"
              >
                <span>Connect via WhatsApp</span>
                <Send size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>

            <div className="bg-white px-5 py-3 text-center border-t border-slate-100">
              <p className="text-[10px] text-slate-400">
                Authorized travel partners. Securing journeys with confidence since registration.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary Floating Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all hover:shadow-emerald-600/20 active:bg-emerald-700 border border-emerald-500/20"
        aria-label="Open travel support on WhatsApp"
      >
        <MessageSquare size={22} className="text-white fill-current" />
        <span className="hidden sm:inline font-semibold text-sm tracking-wide">
          Consult Experts
        </span>
      </motion.button>
    </div>
  );
}
