import React from 'react';
import { HeartHandshake, Shield, MapPin } from 'lucide-react';
import { HIGHLIGHT_BADGES } from '../data/content';

export const HighlightsStrip: React.FC = () => {
  const icons = [
    <HeartHandshake className="w-4 h-4 text-accent shrink-0" key="1" />,
    <Shield className="w-4 h-4 text-accent shrink-0" key="2" />,
    <MapPin className="w-4 h-4 text-accent shrink-0" key="3" />,
  ];

  return (
    <section className="w-full bg-surface border-b border-card py-4 sm:py-6 shadow-xs">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-3 sm:gap-6">
          {HIGHLIGHT_BADGES.map((badge, index) => (
            <div
              key={badge}
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-bg border border-card text-main font-heading text-xs sm:text-sm font-semibold tracking-tight shadow-2xs"
            >
              {icons[index]}
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
