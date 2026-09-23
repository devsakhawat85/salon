import React from 'react';
import { ARTIST_INFO } from '../data/content';
import { Instagram, MapPin, Award, BookOpen } from 'lucide-react';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="relative w-full bg-[#0d0d10] py-28 md:py-36 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Large Editorial Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] overflow-hidden bg-[#121216] border border-white/10 shadow-2xl">
              <img
                src="/images/mark_lamas_portrait.jpg"
                alt="Mark Lamas - Master Colorist & Redken Artist"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-center grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d10] via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Location & Credential Tag */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#16161c] border border-white/10 p-5 shadow-2xl max-w-xs">
              <span className="text-[11px] uppercase tracking-widest text-[#c5a880] block mb-1 font-semibold">
                Creative Director
              </span>
              <p className="text-xs text-[#faf8f5] font-medium">
                {ARTIST_INFO.salon}
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-[#8c827a] mt-1">
                <MapPin className="h-3 w-3 text-[#c5a880]" />
                <span>{ARTIST_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Long-form Editorial Story */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c5a880] mb-3 block">
                The Biography
              </span>
              <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#faf8f5] leading-tight">
                THE ARTIST <br />
                <span className="italic font-light text-[#dfc8aa]">BEHIND THE COLOR.</span>
              </h2>
            </div>

            <div className="space-y-5 text-base sm:text-lg font-light leading-relaxed text-[#c2bdb5]">
              <p>
                Mark Lamas approaches hair coloring not as repetitive salon repetition, but as a discipline of customized optical balance. For over fifteen years, he has dedicated his craft to understanding the behavior of light across different hair textures, porosities, and cranial bone structures.
              </p>
              <p>
                As a designated <strong>Redken Artist</strong>, Mark stands at the intersection of product chemistry and high-fashion aesthetics. His workshops across North America have trained hundreds of stylists in the subtleties of the root smudge, brunette halo contouring, and non-damaging lift chemistry.
              </p>
              <p>
                At his flagship studio, <em>Panache — A Mark Lamas Salon</em> in Bakersfield, California, Mark curates an intimate, luxurious salon atmosphere where clients receive bespoke dimensional transformations designed for natural wearability and graceful grow-out.
              </p>
            </div>

            {/* Quick Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10 text-xs text-[#8c827a]">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#faf8f5] font-medium">
                  <Award className="h-4 w-4 text-[#c5a880]" />
                  <span>Redken Artist</span>
                </div>
                <p className="text-[#8c827a]">
                  National education platform representative translating color science into actionable artistry.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#faf8f5] font-medium">
                  <BookOpen className="h-4 w-4 text-[#c5a880]" />
                  <span>Panache Flagship</span>
                </div>
                <p className="text-[#8c827a]">
                  Bakersfield, California studio specializing in multidimensional balayage and corrective toning.
                </p>
              </div>
            </div>

            {/* Action Row */}
            <div className="pt-6 flex flex-wrap items-center gap-6">
              <button
                onClick={onOpenBooking}
                className="border border-[#c5a880] bg-[#c5a880] hover:bg-[#dfc8aa] px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#0a0a0c] transition-colors"
              >
                Inquire For Booking
              </button>

              <a
                href={ARTIST_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#faf8f5] hover:text-[#c5a880] transition-colors"
              >
                <Instagram className="h-4 w-4 text-[#c5a880]" />
                <span>Follow @hairmark1</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
