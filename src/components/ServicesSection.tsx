import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, ArrowRight, ShieldCheck, Car, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/content';
import { ServiceOffer } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedService, setSelectedService] = useState<ServiceOffer | null>(null);

  return (
    <section id="services" className="py-16 sm:py-24 bg-surface border-b border-card">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold mb-3">
            <Car className="w-3.5 h-3.5 text-accent" />
            <span>What We Offer</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl text-main font-bold tracking-tight mb-3">
            Automatic Lessons Tailored to You.
          </h2>
          <p className="font-body text-sm sm:text-base text-muted leading-relaxed">
            All lessons are strictly automatic in our modern dual-control car, taught with complete patience and zero pressure.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group bg-bg rounded-card border-card overflow-hidden flex flex-col justify-between hover:border-emerald-300 transition-all shadow-2xs hover:shadow-sm"
            >
              <div>
                {/* Image Area */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.imageUrl}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Service Badge Overlay */}
                  <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-xs text-main font-heading text-xs font-bold px-2.5 py-1 rounded-md border border-card shadow-xs">
                    Automatic Only
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 sm:p-6">
                  <h3 className="font-heading text-xl font-bold text-main mb-2">
                    {service.name}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-muted mb-4 leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>

                  {/* Benefit Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 text-[11px] font-medium bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-md"
                      >
                        <Check className="w-3 h-3 text-accent shrink-0" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Tap Target */}
              <div className="p-5 sm:p-6 pt-0 mt-auto">
                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full py-2.5 px-4 bg-surface hover:bg-emerald-50 text-accent font-heading text-xs sm:text-sm font-semibold rounded-lg border border-emerald-200 flex items-center justify-center gap-2 active:scale-95 transition-all focus-ring"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Shared-Element Expanded Showcase Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs">
            {/* Modal Backdrop click */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
              onClick={() => setSelectedService(null)}
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-lg bg-surface rounded-card border-card shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header Image */}
              <div className="relative h-48 w-full bg-slate-100 shrink-0">
                <img
                  src={selectedService.imageUrl}
                  alt={selectedService.imageAlt}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface/90 text-main hover:bg-surface flex items-center justify-center shadow-md focus-ring"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="absolute bottom-3 left-3 bg-accent text-white text-xs font-semibold px-2.5 py-1 rounded-md">
                  12 Drive M18
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-4">
                <h3 className="font-heading text-2xl font-bold text-main">
                  {selectedService.name}
                </h3>

                <p className="font-body text-sm text-muted leading-relaxed">
                  {selectedService.fullDesc}
                </p>

                <div className="pt-2 border-t border-card">
                  <h4 className="font-heading text-xs font-semibold text-main uppercase tracking-wider mb-3">
                    Key Lesson Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selectedService.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-main font-medium">
                        <ShieldCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="p-4 sm:p-6 bg-bg border-t border-card flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const name = selectedService.name;
                    setSelectedService(null);
                    onSelectService(name);
                  }}
                  className="w-full py-3 px-4 bg-accent hover:bg-[#047857] text-white font-heading font-semibold text-sm rounded-lg shadow-sm active:scale-95 transition-all focus-ring"
                >
                  Check Availability For {selectedService.name}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
