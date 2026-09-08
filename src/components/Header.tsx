import React from 'react';
import { Phone, MessageSquare, MapPin, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface HeaderProps {
  onCheckAvailabilityClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCheckAvailabilityClick }) => {
  return (
    <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-md border-b border-card transition-all">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group focus-ring rounded-lg p-1">
          <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center font-extrabold text-lg shadow-sm tracking-tight group-hover:bg-[#047857] transition-colors">
            12
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg sm:text-xl text-main leading-none">
              12 Drive
            </span>
            <span className="text-[11px] sm:text-xs text-muted flex items-center gap-1 mt-0.5 font-medium">
              <MapPin className="w-3 h-3 text-accent shrink-0" />
              Manchester M18
            </span>
          </div>
        </a>

        {/* Action Buttons & Phone */}
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-main hover:text-accent transition-colors px-3 py-2 rounded-lg border border-card bg-bg focus-ring"
            aria-label="Call 12 Drive instructor"
          >
            <Phone className="w-4 h-4 text-accent" />
            <span>{BUSINESS_INFO.phoneDisplay}</span>
          </a>

          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hi 12 Drive, I'd like to check automatic driving lesson availability in M18.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-2.5 sm:px-3 py-2 rounded-lg transition-colors focus-ring"
            aria-label="WhatsApp 12 Drive"
          >
            <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
            <span className="hidden xs:inline">WhatsApp</span>
          </a>

          <button
            onClick={onCheckAvailabilityClick}
            className="inline-flex items-center justify-center text-xs sm:text-sm font-semibold text-white bg-accent hover:bg-[#047857] active:scale-95 transition-all px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg shadow-sm focus-ring"
          >
            Check Availability
          </button>
        </div>
      </div>
    </header>
  );
};
