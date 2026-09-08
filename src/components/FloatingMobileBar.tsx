import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const FloatingMobileBar: React.FC = () => {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating bar after scrolling past 300px (hero section)
      if (window.scrollY > 300) {
        setShowBar(true);
      } else {
        setShowBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappMessage = encodeURIComponent("Hi 12 Drive, I'm checking availability for automatic driving lessons in M18.");
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <AnimatePresence>
      {showBar && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-lg border-t border-card shadow-lg p-3 sm:hidden"
          style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
        >
          <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
            {/* Call Instructor */}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-3 px-3 bg-slate-800 active:bg-slate-900 text-white font-heading text-xs font-semibold rounded-xl active:scale-[0.98] transition-all focus-ring shadow-xs"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Instructor</span>
            </a>

            {/* WhatsApp Us */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-3 bg-accent active:bg-[#047857] text-white font-heading text-xs font-semibold rounded-xl active:scale-[0.98] transition-all focus-ring shadow-xs"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
