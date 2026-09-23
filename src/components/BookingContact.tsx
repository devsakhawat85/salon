import React, { useState } from 'react';
import { ARTIST_INFO } from '../data/content';
import { MapPin, Instagram, CheckCircle2, Clock, Send, Sparkles } from 'lucide-react';

interface BookingContactProps {
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export const BookingContact: React.FC<BookingContactProps> = ({
  isOpenModal = false,
  onCloseModal,
}) => {
  const [inquiryType, setInquiryType] = useState<'salon' | 'education' | 'collab'>('salon');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    hairHistory: '',
    notes: '',
    preferredTimeline: 'Flexible within 2-4 weeks',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const formContent = (
    <div className="w-full">
      {submitted ? (
        <div className="bg-[#16161c] border border-[#c5a880]/40 p-8 sm:p-12 text-center space-y-5 animate-in fade-in duration-300">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#c5a880]/10 text-[#c5a880] border border-[#c5a880]">
            <CheckCircle2 className="h-7 w-7" />
          </div>
          <h3 className="font-editorial text-3xl text-[#faf8f5]">
            Inquiry Received
          </h3>
          <p className="max-w-md mx-auto text-sm text-[#c2bdb5] font-light leading-relaxed">
            Thank you, {formData.name || 'friend'}. Your inquiry has been routed to Mark Lamas and the Panache Salon concierge team. We will review your hair history and respond within 24–48 business hours.
          </p>
          <div className="pt-4 border-t border-white/10 text-xs uppercase tracking-widest text-[#8c827a]">
            Panache — A Mark Lamas Salon · Bakersfield, CA
          </div>
          <button
            onClick={() => {
              setSubmitted(false);
              if (onCloseModal) onCloseModal();
            }}
            className="mt-4 px-6 py-2.5 border border-white/20 text-xs uppercase tracking-widest text-[#faf8f5] hover:border-white transition-colors"
          >
            {onCloseModal ? 'Close Window' : 'Submit Another Inquiry'}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Inquiry Type Tabs */}
          <div>
            <label className="text-xs uppercase tracking-widest text-[#8c827a] block mb-3 font-semibold">
              Select Inquiry Type
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setInquiryType('salon')}
                className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider border transition-all text-left ${
                  inquiryType === 'salon'
                    ? 'border-[#c5a880] bg-[#c5a880]/15 text-[#faf8f5]'
                    : 'border-white/10 bg-[#121216] text-[#8c827a] hover:border-white/20 hover:text-white'
                }`}
              >
                In-Salon Color
                <span className="block text-[10px] font-normal text-[#a39f99] mt-0.5 lowercase">
                  Panache (Bakersfield)
                </span>
              </button>

              <button
                type="button"
                onClick={() => setInquiryType('education')}
                className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider border transition-all text-left ${
                  inquiryType === 'education'
                    ? 'border-[#c5a880] bg-[#c5a880]/15 text-[#faf8f5]'
                    : 'border-white/10 bg-[#121216] text-[#8c827a] hover:border-white/20 hover:text-white'
                }`}
              >
                Redken Masterclass
                <span className="block text-[10px] font-normal text-[#a39f99] mt-0.5 lowercase">
                  Salon workshop / academy
                </span>
              </button>

              <button
                type="button"
                onClick={() => setInquiryType('collab')}
                className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider border transition-all text-left ${
                  inquiryType === 'collab'
                    ? 'border-[#c5a880] bg-[#c5a880]/15 text-[#faf8f5]'
                    : 'border-white/10 bg-[#121216] text-[#8c827a] hover:border-white/20 hover:text-white'
                }`}
              >
                Press & Brand
                <span className="block text-[10px] font-normal text-[#a39f99] mt-0.5 lowercase">
                  Editorial / partnerships
                </span>
              </button>
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs uppercase tracking-wider text-[#a39f99] block mb-2 font-medium">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Elena Rostova"
                className="w-full bg-[#141418] border border-white/10 px-4 py-3 text-sm text-[#faf8f5] placeholder-[#555] focus:outline-none focus:border-[#c5a880] transition-colors"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-[#a39f99] block mb-2 font-medium">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="elena@example.com"
                className="w-full bg-[#141418] border border-white/10 px-4 py-3 text-sm text-[#faf8f5] placeholder-[#555] focus:outline-none focus:border-[#c5a880] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs uppercase tracking-wider text-[#a39f99] block mb-2 font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="(661) 555-0199"
                className="w-full bg-[#141418] border border-white/10 px-4 py-3 text-sm text-[#faf8f5] placeholder-[#555] focus:outline-none focus:border-[#c5a880] transition-colors"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-[#a39f99] block mb-2 font-medium">
                Preferred Timeline
              </label>
              <select
                value={formData.preferredTimeline}
                onChange={(e) => setFormData({ ...formData, preferredTimeline: e.target.value })}
                className="w-full bg-[#141418] border border-white/10 px-4 py-3 text-sm text-[#faf8f5] focus:outline-none focus:border-[#c5a880] transition-colors"
              >
                <option value="Next 1-2 Weeks">Next 1–2 Weeks</option>
                <option value="Within this Month">Within this Month</option>
                <option value="Flexible / Educational Booking">Flexible / Educational Booking</option>
              </select>
            </div>
          </div>

          {/* Conditional field for salon hair history */}
          {inquiryType === 'salon' && (
            <div>
              <label className="text-xs uppercase tracking-wider text-[#a39f99] block mb-2 font-medium">
                Current Hair Color & Chemical History
              </label>
              <input
                type="text"
                value={formData.hairHistory}
                onChange={(e) => setFormData({ ...formData, hairHistory: e.target.value })}
                placeholder="e.g. Natural level 5 with grown-out highlights, colored 6 months ago"
                className="w-full bg-[#141418] border border-white/10 px-4 py-3 text-sm text-[#faf8f5] placeholder-[#555] focus:outline-none focus:border-[#c5a880] transition-colors"
              />
            </div>
          )}

          <div>
            <label className="text-xs uppercase tracking-wider text-[#a39f99] block mb-2 font-medium">
              {inquiryType === 'education'
                ? 'Salon Academy Details & Requested Workshop Theme'
                : 'Desired Color Vision or Notes'}
            </label>
            <textarea
              rows={4}
              required
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder={
                inquiryType === 'education'
                  ? 'Tell us about your team size, location, and whether you are interested in Root Smudge, Brunette Contouring, or Balayage technique...'
                  : 'Describe your hair goals, references, or specific concerns regarding tone and maintenance...'
              }
              className="w-full bg-[#141418] border border-white/10 px-4 py-3 text-sm text-[#faf8f5] placeholder-[#555] focus:outline-none focus:border-[#c5a880] transition-colors"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[11px] text-[#8c827a]">
              Appointments require a consultation deposit. Rescheduling requires 48h notice.
            </span>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#c5a880] bg-[#c5a880] hover:bg-[#dfc8aa] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#0a0a0c] transition-all disabled:opacity-50"
            >
              <Send className="h-3.5 w-3.5" />
              <span>{isSubmitting ? 'Transmitting...' : 'Send Inquiry'}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );

  // If used as a standalone section on the page:
  if (!isOpenModal) {
    return (
      <section id="contact" className="relative w-full bg-[#0a0a0c] py-28 md:py-36 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Salon Coordinates */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c5a880] mb-3 block">
                  Bespoke Consultation
                </span>
                <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#faf8f5] leading-tight">
                  LET&apos;S CREATE <br />
                  <span className="italic font-light text-[#dfc8aa]">SOMETHING BEAUTIFUL.</span>
                </h2>
              </div>

              <p className="text-sm sm:text-base font-light text-[#a39f99] leading-relaxed">
                Whether booking a signature dimensional transformation at Panache Salon or inquiring for a nationwide Redken masterclass workshop, we treat every appointment with meticulous preparation.
              </p>

              <div className="space-y-6 pt-6 border-t border-white/10">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-[#c5a880] shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#faf8f5]">
                      Flagship Studio
                    </h3>
                    <p className="text-sm font-light text-[#c2bdb5] mt-1">
                      {ARTIST_INFO.salon}
                    </p>
                    <p className="text-xs text-[#8c827a] mt-0.5">
                      Bakersfield, California
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Instagram className="h-5 w-5 text-[#c5a880] shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#faf8f5]">
                      Direct Visual Portfolio
                    </h3>
                    <a
                      href={ARTIST_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-light text-[#dfc8aa] hover:underline mt-1 block"
                    >
                      {ARTIST_INFO.handle}
                    </a>
                    <p className="text-xs text-[#8c827a] mt-0.5">
                      Direct inquiries & formulation insights
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-[#c5a880] shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#faf8f5]">
                      Salon & Workshop Hours
                    </h3>
                    <p className="text-xs text-[#a39f99] mt-1">
                      Tuesday – Saturday: By Private Appointment
                    </p>
                    <p className="text-xs text-[#8c827a]">
                      Sunday – Monday: Reserved for Redken Education & Platform Tours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7 bg-[#0f0f13] border border-white/10 p-8 sm:p-12 shadow-2xl">
              {formContent}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // If rendered as a Modal overlay
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onCloseModal}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0f0f13] border border-white/10 p-8 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onCloseModal}
          className="absolute top-4 right-4 text-[#8c827a] hover:text-white p-2"
          aria-label="Close booking modal"
        >
          ✕
        </button>

        <div className="mb-6">
          <span className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold block mb-1">
            Private Appointment & Education Desk
          </span>
          <h2 className="font-editorial text-3xl text-[#faf8f5]">
            Inquire With Mark Lamas
          </h2>
        </div>

        {formContent}
      </div>
    </div>
  );
};
