import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { ARTIST_INFO } from '../data/content';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0a0c]">
      {/* Background Image with Cinematic Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Mark Lamas - Master Colorist and Redken Artist in studio"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center scale-100 transition-transform duration-1000 ease-out md:scale-[1.02]"
        />
        {/* Editorial Gradients for Legibility & Magazine Feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/60 to-[#0a0a0c]/40" />
        <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_40%,_#0a0a0c_100%] opacity-70" />
        <div className="absolute inset-0 bg-grain pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 lg:px-12 flex flex-col items-start justify-center min-h-screen">
        {/* Eyebrow - Unboxed metadata per constitution */}
        <div className="flex items-center gap-3 text-xs md:text-sm font-medium uppercase tracking-[0.28em] text-[#c5a880] mb-6">
          <span>Redken Artist</span>
          <span aria-hidden="true" className="text-white/30">·</span>
          <span>Master Colorist</span>
          <span aria-hidden="true" className="text-white/30">·</span>
          <span>Educator</span>
        </div>

        {/* Large Editorial Headline */}
        <div className="max-w-4xl">
          <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight text-[#faf8f5] [text-wrap:balance]">
            COLOR IS MY <br className="hidden sm:inline" />
            <span className="italic font-light text-[#dfc8aa]">SIGNATURE.</span>
          </h1>
        </div>

        {/* Supporting Editorial Prose */}
        <p className="mt-8 max-w-2xl text-base sm:text-lg md:text-xl font-light leading-relaxed text-[#d4cfc7] [text-wrap:balance]">
          {ARTIST_INFO.heroSubtext}
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center gap-5">
          <a
            href="#portfolio"
            className="group relative inline-flex items-center justify-center border border-[#c5a880] bg-[#c5a880] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#0a0a0c] transition-all duration-300 hover:bg-[#dfc8aa] hover:border-[#dfc8aa] shadow-lg shadow-[#c5a880]/10"
          >
            <span>Explore The Work</span>
          </a>

          <a
            href="#about"
            className="inline-flex items-center justify-center border border-white/20 bg-black/30 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#faf8f5] backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10"
          >
            <span>Discover Mark</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#a39f99] transition-colors hover:text-[#c5a880] ml-2"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#c5a880]" />
            <span>Consultation & Inquiries</span>
          </button>
        </div>

        {/* Editorial Sub-Footer Metadata */}
        <div className="mt-auto pt-16 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10 text-xs text-[#8c827a] tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <span>Panache Salon</span>
            <span aria-hidden="true">·</span>
            <span>Bakersfield, CA</span>
          </div>

          <div className="flex items-center gap-2">
            <span>Specialist</span>
            <span aria-hidden="true">·</span>
            <span>Brunette Halo Contouring & Root Smudge</span>
          </div>

          {/* Scroll Indicator */}
          <a
            href="#intro"
            className="inline-flex items-center gap-2 text-[#a39f99] hover:text-[#faf8f5] transition-colors"
            aria-label="Scroll down to introduction"
          >
            <span>Scroll</span>
            <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
