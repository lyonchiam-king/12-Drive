import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Check, ArrowRight, MessageSquare, RefreshCw, Send } from 'lucide-react';
import { MATCHER_OPTIONS, BUSINESS_INFO } from '../data/content';
import { MatcherState } from '../types';

interface AvailabilityMatcherProps {
  onCompleteMatcher: (state: MatcherState) => void;
}

export const AvailabilityMatcher: React.FC<AvailabilityMatcherProps> = ({ onCompleteMatcher }) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedState, setSelectedState] = useState<MatcherState>({
    experienceLevel: MATCHER_OPTIONS.experienceLevels[0].value,
    preferredTime: MATCHER_OPTIONS.preferredTimes[0].value,
    primaryGoal: MATCHER_OPTIONS.primaryGoals[0].value,
  });

  const handleSelectLevel = (val: string) => {
    setSelectedState((prev) => ({ ...prev, experienceLevel: val }));
    setStep(2);
  };

  const handleSelectTime = (val: string) => {
    setSelectedState((prev) => ({ ...prev, preferredTime: val }));
    setStep(3);
  };

  const handleSelectGoal = (val: string) => {
    setSelectedState((prev) => ({ ...prev, primaryGoal: val }));
    setStep(4);
  };

  const generatedWhatsAppMessage = `Hi 12 Drive, I'm a ${selectedState.experienceLevel} learner looking for ${selectedState.preferredTime} lessons in M18. Goal: ${selectedState.primaryGoal}.`;

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(generatedWhatsAppMessage)}`;

  return (
    <section id="availability-matcher" className="py-16 sm:py-24 bg-bg border-b border-card">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>Interactive Tool</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl text-main font-bold tracking-tight mb-3">
            Find Your Lesson Match in 3 Taps.
          </h2>
          <p className="font-body text-sm sm:text-base text-muted leading-relaxed">
            Select your driving background and schedule to compose a pre-filled inquiry. No hassle, no complicated forms.
          </p>
        </div>

        {/* Main Interactive Box */}
        <div className="max-w-2xl mx-auto bg-surface rounded-card border-card p-6 sm:p-8 shadow-xs">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs font-semibold text-muted mb-2 font-heading">
              <span>{step <= 3 ? `Step ${step} of 3` : 'Match Ready!'}</span>
              <span>
                {step === 1 && 'Experience Level'}
                {step === 2 && 'Preferred Time'}
                {step === 3 && 'Driving Goal'}
                {step === 4 && 'Your Customized Message'}
              </span>
            </div>

            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <motion.div
                className="bg-accent h-full rounded-full"
                animate={{
                  width: step === 1 ? '33%' : step === 2 ? '66%' : step === 3 ? '90%' : '100%',
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Active Step Content */}
          <AnimatePresence mode="wait">
            {/* STEP 1: Experience Level */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                <h3 className="font-heading text-lg font-bold text-main mb-1">
                  What is your driving experience level?
                </h3>
                <p className="text-xs text-muted mb-4">
                  Choose the option that best describes where you are starting from:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {MATCHER_OPTIONS.experienceLevels.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleSelectLevel(opt.value)}
                      className={`p-4 text-left rounded-card border transition-all active:scale-[0.98] focus-ring flex flex-col justify-between ${
                        selectedState.experienceLevel === opt.value
                          ? 'border-accent bg-emerald-50/50 shadow-2xs'
                          : 'border-card bg-surface hover:border-gray-300'
                      }`}
                    >
                      <span className="font-heading font-semibold text-sm text-main mb-1">
                        {opt.label}
                      </span>
                      <span className="text-xs text-muted leading-snug">
                        {opt.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 2: Preferred Time */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-heading text-lg font-bold text-main">
                    When do you prefer to take lessons?
                  </h3>
                  <button
                    onClick={() => setStep(1)}
                    className="text-xs text-accent hover:underline font-medium"
                  >
                    Change Step 1
                  </button>
                </div>
                <p className="text-xs text-muted mb-4">
                  Select your ideal lesson window in Manchester M18:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {MATCHER_OPTIONS.preferredTimes.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleSelectTime(opt.value)}
                      className={`p-4 text-left rounded-card border transition-all active:scale-[0.98] focus-ring flex flex-col justify-between ${
                        selectedState.preferredTime === opt.value
                          ? 'border-accent bg-emerald-50/50 shadow-2xs'
                          : 'border-card bg-surface hover:border-gray-300'
                      }`}
                    >
                      <span className="font-heading font-semibold text-sm text-main mb-1">
                        {opt.label}
                      </span>
                      <span className="text-xs text-muted leading-snug">
                        {opt.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 3: Goal */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-heading text-lg font-bold text-main">
                    What is your primary driving goal?
                  </h3>
                  <button
                    onClick={() => setStep(2)}
                    className="text-xs text-accent hover:underline font-medium"
                  >
                    Change Step 2
                  </button>
                </div>
                <p className="text-xs text-muted mb-4">
                  This helps us tailor your very first lesson plan:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {MATCHER_OPTIONS.primaryGoals.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleSelectGoal(opt.value)}
                      className={`p-4 text-left rounded-card border transition-all active:scale-[0.98] focus-ring flex flex-col justify-between ${
                        selectedState.primaryGoal === opt.value
                          ? 'border-accent bg-emerald-50/50 shadow-2xs'
                          : 'border-card bg-surface hover:border-gray-300'
                      }`}
                    >
                      <span className="font-heading font-semibold text-sm text-main mb-1">
                        {opt.label}
                      </span>
                      <span className="text-xs text-muted leading-snug">
                        {opt.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 4: RESULT / PRE-FILLED WHATSAPP */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="bg-emerald-50/70 border border-emerald-200 rounded-card p-5">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-emerald-200/80">
                    <span className="text-xs font-bold text-emerald-800 font-heading uppercase tracking-wider flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-600" />
                      Choices Selected
                    </span>
                    <button
                      onClick={() => setStep(1)}
                      className="text-xs text-emerald-700 hover:text-emerald-900 font-medium flex items-center gap-1"
                    >
                      <RefreshCw className="w-3 h-3" /> Start Over
                    </button>
                  </div>

                  {/* Summary Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-white text-main font-semibold px-2.5 py-1 rounded-md border border-emerald-200">
                      Level: {selectedState.experienceLevel}
                    </span>
                    <span className="text-xs bg-white text-main font-semibold px-2.5 py-1 rounded-md border border-emerald-200">
                      Time: {selectedState.preferredTime}
                    </span>
                    <span className="text-xs bg-white text-main font-semibold px-2.5 py-1 rounded-md border border-emerald-200">
                      Goal: {selectedState.primaryGoal}
                    </span>
                  </div>

                  {/* Generated WhatsApp Message Preview Box */}
                  <div className="bg-white rounded-lg p-3.5 border border-emerald-200 text-xs sm:text-sm font-mono text-slate-800 leading-relaxed shadow-2xs">
                    "{generatedWhatsAppMessage}"
                  </div>
                </div>

                {/* Final Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2 py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-heading font-semibold text-sm rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all focus-ring"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </a>

                  <button
                    onClick={() => onCompleteMatcher(selectedState)}
                    className="w-full sm:w-1/2 py-3.5 px-4 bg-accent hover:bg-[#047857] active:scale-95 text-white font-heading font-semibold text-sm rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all focus-ring"
                  >
                    <span>Check Availability</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
