import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HighlightsStrip } from './components/HighlightsStrip';
import { ConfidencePath } from './components/ConfidencePath';
import { ServicesSection } from './components/ServicesSection';
import { AvailabilityMatcher } from './components/AvailabilityMatcher';
import { AboutInstructor } from './components/AboutInstructor';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationContactSection } from './components/LocationContactSection';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { Footer } from './components/Footer';
import { MatcherState } from './types';

export default function App() {
  const [selectedMatcherState, setSelectedMatcherState] = useState<MatcherState | null>(null);

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMatcherComplete = (state: MatcherState) => {
    setSelectedMatcherState(state);
    scrollToContact();
  };

  const handleSelectService = (serviceName: string) => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg text-main pb-20 sm:pb-0 font-body antialiased">
      {/* Header */}
      <Header onCheckAvailabilityClick={scrollToContact} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero onCheckAvailabilityClick={scrollToContact} />

        {/* 2. Highlights Strip */}
        <HighlightsStrip />

        {/* 3. Confidence Path (Vertical Timeline - Signature Moment) */}
        <ConfidencePath />

        {/* 4. Services (What They Offer) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 5. Availability Matcher (The Interactive Piece) */}
        <AvailabilityMatcher onCompleteMatcher={handleMatcherComplete} />

        {/* 6. About Instructor */}
        <AboutInstructor />

        {/* 7. Testimonials */}
        <TestimonialsSection />

        {/* 8. Location & Contact */}
        <LocationContactSection initialMatcherState={selectedMatcherState} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Bar on Mobile */}
      <FloatingMobileBar />
    </div>
  );
}
