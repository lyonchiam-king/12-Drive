import React, { useState, useEffect } from 'react';
import { MapPin, Phone, MessageSquare, Send, CheckCircle2, AlertCircle, FileSpreadsheet } from 'lucide-react';
import { BUSINESS_INFO, MATCHER_OPTIONS } from '../data/content';
import { MatcherState } from '../types';

interface LocationContactProps {
  initialMatcherState?: MatcherState | null;
}

export const LocationContactSection: React.FC<LocationContactProps> = ({ initialMatcherState }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    postcode: 'M18',
    experienceLevel: 'Complete Beginner',
    preferredTime: 'Weekday Mornings',
    notes: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialMatcherState) {
      setFormData((prev) => ({
        ...prev,
        experienceLevel: initialMatcherState.experienceLevel || prev.experienceLevel,
        preferredTime: initialMatcherState.preferredTime || prev.preferredTime,
        notes: `Goal: ${initialMatcherState.primaryGoal}`,
      }));
    }
  }, [initialMatcherState]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setStatus('error');
      setErrorMessage('Please provide your name and contact phone number.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        const data = await response.json().catch(() => ({}));
        setStatus('error');
        setErrorMessage(data.error || 'Unable to record enquiry. Please call or WhatsApp us directly.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network connection issue. Please use WhatsApp or Phone to contact us directly.');
    }
  };

  const currentWhatsAppText = `Hi 12 Drive, I'm ${formData.name || 'a learner'} (${formData.phone || 'no phone provided'}) looking for ${formData.preferredTime} automatic lessons in ${formData.postcode || 'M18'}. Level: ${formData.experienceLevel}.`;
  const customWhatsAppUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(currentWhatsAppText)}`;

  return (
    <section id="contact" className="py-16 sm:py-24 bg-surface border-b border-card">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            <span>Location & Booking</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl text-main font-bold tracking-tight mb-3">
            Based in Manchester M18.
          </h2>
          <p className="font-body text-sm sm:text-base text-muted leading-relaxed">
            We cover Gorton, Abbey Hey, Openshaw, Levenshulme and surrounding east Manchester postcodes.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Map Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Google Map Box */}
            <div className="bg-bg rounded-card border-card overflow-hidden h-72 sm:h-80 relative shadow-2xs">
              <iframe
                title="12 Drive Location Google Map M18"
                src={BUSINESS_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Direct Contact Cards */}
            <div className="bg-bg rounded-card border-card p-5 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm text-main">Address</h4>
                  <p className="text-xs text-muted mb-1">{BUSINESS_INFO.address}</p>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent hover:underline font-semibold"
                  >
                    Open in Google Maps &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-card">
                <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm text-main">Phone & Text</h4>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="text-sm font-semibold text-main hover:text-accent font-mono"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <p className="text-[11px] text-muted">Direct line to instructor</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-bg rounded-card border-card p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-card">
              <div>
                <h3 className="font-heading text-xl font-bold text-main">
                  Check Lesson Availability
                </h3>
                <p className="text-xs text-muted">
                  Replies are recorded directly to our booking spreadsheet.
                </p>
              </div>

              {/* Spreadsheet logging indicator badge */}
              <div className="hidden xs:flex items-center gap-1.5 text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                <FileSpreadsheet className="w-3.5 h-3.5 text-accent" />
                <span>Instant Logging</span>
              </div>
            </div>

            {status === 'success' ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-card p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-heading text-lg font-bold text-emerald-900">
                  Enquiry Received!
                </h4>
                <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                  Thank you! Your details have been saved to our lesson sheet. We will review your preferred time and contact you shortly.
                </p>

                <div className="pt-2">
                  <a
                    href={customWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-heading text-xs font-semibold rounded-lg transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Or WhatsApp Us Instantly</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 p-3 rounded-lg text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-main mb-1 font-heading">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Miller"
                      className="w-full px-3.5 py-2.5 bg-surface border border-card rounded-lg text-sm text-main placeholder:text-muted focus-ring"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-main mb-1 font-heading">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 07123 456789"
                      className="w-full px-3.5 py-2.5 bg-surface border border-card rounded-lg text-sm text-main placeholder:text-muted focus-ring font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-main mb-1 font-heading">
                      Postcode Area
                    </label>
                    <input
                      type="text"
                      value={formData.postcode}
                      onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                      placeholder="e.g. M18"
                      className="w-full px-3.5 py-2.5 bg-surface border border-card rounded-lg text-sm text-main focus-ring uppercase font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-main mb-1 font-heading">
                      Experience Level
                    </label>
                    <select
                      value={formData.experienceLevel}
                      onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-surface border border-card rounded-lg text-xs sm:text-sm text-main focus-ring"
                    >
                      {MATCHER_OPTIONS.experienceLevels.map((lvl) => (
                        <option key={lvl.value} value={lvl.value}>
                          {lvl.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-main mb-1 font-heading">
                      Preferred Time
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-surface border border-card rounded-lg text-xs sm:text-sm text-main focus-ring"
                    >
                      {MATCHER_OPTIONS.preferredTimes.map((t) => (
                        <option key={t.value} value={t.value}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-main mb-1 font-heading">
                    Notes / Message
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us if you have a test date booked or need specific support..."
                    className="w-full px-3.5 py-2.5 bg-surface border border-card rounded-lg text-sm text-main placeholder:text-muted focus-ring"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-1/2 py-3.5 px-4 bg-accent hover:bg-[#047857] active:scale-95 text-white font-heading font-semibold text-sm rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all focus-ring disabled:opacity-60"
                  >
                    <Send className="w-4 h-4" />
                    <span>{status === 'submitting' ? 'Submitting...' : 'Submit Enquiry'}</span>
                  </button>

                  {/* WhatsApp Click-to-Chat Right Beside Form */}
                  <a
                    href={customWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2 py-3.5 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-heading font-semibold text-sm rounded-xl flex items-center justify-center gap-2 transition-all focus-ring"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Directly</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
