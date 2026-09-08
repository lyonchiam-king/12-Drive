import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-bg border-b border-card">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold mb-3">
            <MessageCircle className="w-3.5 h-3.5 text-accent" />
            <span>Learner Reviews</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl text-main font-bold tracking-tight mb-3">
            Real Stories From Nervous Learners.
          </h2>
          <p className="font-body text-sm sm:text-base text-muted leading-relaxed">
            Read how past students in Manchester M18 built confidence, overcame test anxiety, and earned their license with patient automatic tuition.
          </p>
        </div>

        {/* Carousel / Grid Display */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={TESTIMONIALS[currentIndex].id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-surface rounded-card border-card p-6 sm:p-10 shadow-xs relative overflow-hidden"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-100/80 -rotate-12 pointer-events-none" />

              {/* Stars */}
              <div className="flex items-center gap-1 text-amber-500 mb-4">
                {[...Array(TESTIMONIALS[currentIndex].stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="font-body text-base sm:text-lg text-main leading-relaxed mb-6 italic">
                "{TESTIMONIALS[currentIndex].quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-card">
                <div>
                  <h4 className="font-heading font-bold text-sm sm:text-base text-main">
                    {TESTIMONIALS[currentIndex].author}
                  </h4>
                  <p className="text-xs text-muted">
                    {TESTIMONIALS[currentIndex].area}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                  <span>{TESTIMONIALS[currentIndex].outcome}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6 px-2">
            <div className="flex items-center gap-1.5">
              {TESTIMONIALS.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === currentIndex ? 'w-8 bg-accent' : 'w-2.5 bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-lg bg-surface border border-card hover:bg-bg text-main flex items-center justify-center shadow-2xs focus-ring"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-lg bg-surface border border-card hover:bg-bg text-main flex items-center justify-center shadow-2xs focus-ring"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
