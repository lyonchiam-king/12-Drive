import React from 'react';
import { Phone, MapPin, Shield, MessageSquare, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 py-12 sm:py-16">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-accent text-white flex items-center justify-center font-bold text-base">
                12
              </div>
              <span className="font-heading font-bold text-xl text-white">
                12 Drive
              </span>
            </div>

            <p className="font-body text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Patient automatic driving lessons in Manchester for nervous learners. Based in M18, serving Gorton, Abbey Hey, Openshaw & Levenshulme.
            </p>

            <div className="pt-1 text-xs text-slate-400 font-mono">
              Instructor Direct: <a href={`tel:${BUSINESS_INFO.phone}`} className="text-emerald-400 hover:underline">{BUSINESS_INFO.phoneDisplay}</a>
            </div>
          </div>

          {/* Quick Links & Location */}
          <div className="md:col-span-6 space-y-3">
            <h4 className="font-heading font-semibold text-xs text-slate-200 uppercase tracking-wider">
              Service Area & Location
            </h4>
            <p className="text-xs text-slate-400 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{BUSINESS_INFO.address}</span>
            </p>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:underline font-medium pt-1"
            >
              <span>View on Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} 12 Drive Manchester M18. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#confidence-path" className="hover:text-slate-300 transition-colors">Confidence Path</a>
            <a href="#services" className="hover:text-slate-300 transition-colors">Services</a>
            <a href="#availability-matcher" className="hover:text-slate-300 transition-colors">Availability Matcher</a>
            <a href="#contact" className="hover:text-slate-300 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
