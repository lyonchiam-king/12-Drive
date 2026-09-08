import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, HeartHandshake, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const AboutInstructor: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-surface border-b border-card">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Photo Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-card border-card overflow-hidden shadow-sm bg-bg">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1000&q=80"
                alt="12 Drive automatic instructor car on Manchester road"
                className="w-full h-80 sm:h-96 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-surface/95 backdrop-blur-md p-4 rounded-xl border border-card shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shrink-0">
                    M18
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-main">
                      Local M18 Automatic Specialist
                    </h4>
                    <p className="text-xs text-muted">
                      Serving Gorton, Abbey Hey, Openshaw & Levenshulme
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 space-y-5"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
              <HeartHandshake className="w-3.5 h-3.5 text-accent" />
              <span>Patience First Teaching</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-4xl text-main font-bold tracking-tight leading-tight">
              A calm, patient environment designed for nervous learners.
            </h2>

            <p className="font-body text-sm sm:text-base text-muted leading-relaxed">
              At <strong className="text-main font-semibold">12 Drive</strong>, we understand that getting behind the wheel can feel overwhelming, especially if you have had stressful experiences in the past. 
            </p>

            <p className="font-body text-sm sm:text-base text-muted leading-relaxed">
              We specialize strictly in <strong className="text-main font-semibold">automatic driving instruction</strong> in Manchester M18. By eliminating clutch control and gear stalling, we give you room to breathe, build confidence, and focus on safe, calm driving.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-card">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-main">
                  Dual-control modern vehicle for maximum safety
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-main">
                  In-depth knowledge of local M18 test routes
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-main">
                  Zero pressure, zero shouting, steady pace
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-main">
                  Door-to-door pick-up across Manchester M18
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
