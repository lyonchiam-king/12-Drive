import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { CheckCircle2, Circle, AlertCircle, Sparkles } from 'lucide-react';
import { CONFIDENCE_STEPS } from '../data/content';

export const ConfidencePath: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 70%'],
  });

  // Calculate top position of dot along vertical timeline
  const dotTop = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  // Traveling dot color transitions: 0% -> Grey, 0.4 -> Amber, 1.0 -> Green
  const dotColor = useTransform(
    scrollYProgress,
    [0, 0.4, 0.9],
    ['#6B7280', '#D97706', '#059669']
  );

  return (
    <section id="confidence-path" className="py-16 sm:py-24 bg-bg border-b border-card overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>The Confidence Path</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl text-main font-bold tracking-tight mb-3">
            From Nervous First Lesson to Test Ready.
          </h2>
          <p className="font-body text-sm sm:text-base text-muted leading-relaxed">
            Every step is designed for nervous learners. No raised voices, no rush, just calm automatic driving instruction tailored to your pace in Manchester M18.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div ref={containerRef} className="relative max-w-2xl mx-auto pl-6 sm:pl-10">
          {/* Static Timeline Background Bar */}
          <div className="absolute left-2.5 sm:left-4 top-2 bottom-2 w-1 bg-gray-200 rounded-full" />

          {/* Animated Active Progress Line */}
          <motion.div
            className="absolute left-2.5 sm:left-4 top-2 w-1 rounded-full origin-top"
            style={{
              height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
              backgroundColor: dotColor,
            }}
          />

          {/* Animated Traveling Indicator Dot */}
          <motion.div
            className="absolute left-1 sm:left-2.5 -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-surface shadow-md z-20 transition-transform"
            style={{
              top: dotTop,
              backgroundColor: dotColor,
            }}
          />

          {/* Steps List */}
          <div className="space-y-10 sm:space-y-12">
            {CONFIDENCE_STEPS.map((step, index) => {
              const isNervous = step.stage === 'nervous';
              const isLearning = step.stage === 'learning';
              const isReady = step.stage === 'ready';

              return (
                <motion.div
                  key={step.stepNumber}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative group"
                >
                  {/* Step Node Icon on Line */}
                  <div className="absolute -left-[30px] sm:-left-[42px] top-1 z-10 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-surface border-2 border-card flex items-center justify-center shadow-2xs">
                    {isNervous && <AlertCircle className="w-3.5 h-3.5 text-gray-500" />}
                    {isLearning && <Circle className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />}
                    {isReady && <CheckCircle2 className="w-4 h-4 text-accent fill-accent text-white" />}
                  </div>

                  {/* Step Card Content */}
                  <div className="bg-surface rounded-card border-card p-5 sm:p-6 shadow-2xs hover:border-emerald-200 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="font-heading text-xs font-semibold uppercase tracking-wider text-muted">
                        {step.subtitle}
                      </span>
                      <span
                        className={`inline-flex items-center text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${step.badgeColor}`}
                      >
                        {isNervous && 'Stage 1: Nervous'}
                        {isLearning && `Stage ${step.stepNumber}: Building Skills`}
                        {isReady && 'Stage 4: Test Ready'}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg sm:text-xl font-bold text-main mb-2">
                      {step.title}
                    </h3>

                    <p className="font-body text-xs sm:text-sm text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
