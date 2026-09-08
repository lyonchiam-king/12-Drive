import React from 'react';
import { Shield, CheckCircle, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO, PROOF_POINTS } from '../data/content';

interface HeroProps {
  onCheckAvailabilityClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCheckAvailabilityClick }) => {
  return (
    <section className="relative w-full bg-slate-900 text-white overflow-hidden">
      {/* Full-bleed background image with subtle warm overlay for readability */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=2000&q=80"
          alt="Modern dual-control automatic driving school car in Manchester"
          className="w-full h-full object-cover object-center opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-slate-900/60" />
      </div>

      <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-12 sm:pb-16 flex flex-col items-center text-center">
        {/* Localized Location Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm">
          <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>Manchester M18 &bull; Gorton, Abbey Hey & Levenshulme</span>
        </div>

        {/* Exact Headline as written */}
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] max-w-3xl mb-4 sm:mb-6">
          Finally feel confident behind the wheel.
        </h1>

        {/* Exact Subcopy as written */}
        <p className="font-body text-base sm:text-xl text-slate-200 leading-relaxed max-w-2xl mb-8 font-normal">
          Patient automatic driving lessons in Manchester for learners who need extra support.
        </p>

        {/* Primary CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md mb-10">
          <button
            onClick={onCheckAvailabilityClick}
            className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-[#047857] text-white font-heading font-semibold text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl active:scale-[0.98] transition-all focus-ring"
          >
            Check Availability
          </button>
          
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="w-full sm:w-auto px-6 py-4 bg-slate-800/80 hover:bg-slate-800 text-slate-100 font-heading font-medium text-base rounded-xl border border-slate-700/80 flex items-center justify-center gap-2 transition-all focus-ring"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Call Instructor</span>
          </a>
        </div>

        {/* Verified Proof Badges */}
        <div className="grid grid-cols-1 xs:grid-cols-3 gap-2 sm:gap-4 w-full max-w-2xl pt-6 border-t border-slate-800/80 text-left sm:text-center">
          {PROOF_POINTS.map((proof, idx) => (
            <div key={idx} className="flex items-center sm:justify-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{proof}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
