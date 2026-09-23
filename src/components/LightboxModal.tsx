import React, { useEffect } from 'react';
import { X, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';
import { PortfolioItem } from '../types';

interface LightboxModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onOpenBooking,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#0a0a0c]/90 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#121216] border border-white/10 rounded-none shadow-2xl flex flex-col lg:flex-row no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center bg-[#0a0a0c]/80 text-[#faf8f5] hover:text-[#c5a880] transition-colors border border-white/10"
          aria-label="Close project view"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Media Frame */}
        <div className="w-full lg:w-7/12 relative min-h-[360px] lg:min-h-[560px] bg-[#0a0a0c] flex items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover max-h-[75vh]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent lg:hidden opacity-80" />
        </div>

        {/* Editorial Details & Formulation Pane */}
        <div className="w-full lg:w-5/12 p-8 sm:p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            {/* Category metadata */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a880]">
              <span>{item.categoryLabel}</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span>Archived Work</span>
            </div>

            <h2 id="modal-title" className="font-editorial text-3xl sm:text-4xl font-normal text-[#faf8f5] leading-tight">
              {item.title}
            </h2>

            <p className="text-sm sm:text-base font-light leading-relaxed text-[#c2bdb5]">
              {item.description}
            </p>

            {/* Technical Breakdown */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#8c827a] block mb-1">
                  Technique Method
                </span>
                <span className="text-sm font-medium text-[#faf8f5]">
                  {item.technique}
                </span>
              </div>

              {item.formulaNote && (
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#8c827a] block mb-1">
                    Formulation & Chemistry
                  </span>
                  <div className="flex items-start gap-2 text-xs font-mono text-[#dfc8aa] bg-[#1a1a20] p-3 border border-white/5">
                    <Sparkles className="h-4 w-4 shrink-0 text-[#c5a880] mt-0.5" />
                    <span>{item.formulaNote}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#c5a880] hover:bg-[#dfc8aa] text-[#0a0a0c] py-3 text-xs font-semibold uppercase tracking-[0.2em] transition-all"
            >
              <span>Consult on Similar Formulation</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>

            <a
              href="https://www.instagram.com/hairmark1/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#a39f99] hover:text-[#faf8f5] py-2 transition-colors"
            >
              <span>View More on Instagram (@hairmark1)</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
