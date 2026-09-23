import React, { useState } from 'react';
import { COLOR_PILLARS } from '../data/content';
import { Sparkles, ArrowRight } from 'lucide-react';

export const Philosophy: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activePillar = COLOR_PILLARS[activeIdx];

  return (
    <section id="philosophy" className="relative w-full bg-[#0d0d10] py-28 md:py-36 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl pb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c5a880] mb-3 block">
            Artistic Methodology
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#faf8f5] leading-tight">
            The Philosophy of Color
          </h2>
          <p className="mt-4 text-base sm:text-lg font-light text-[#a39f99] leading-relaxed">
            Hair color is an interplay between optical light, cranial architecture, and delicate hair fiber health. We design every formula around six guiding principles.
          </p>
        </div>

        {/* Interactive Philosophy Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Typographic Pillar List */}
          <div className="lg:col-span-6 space-y-2">
            {COLOR_PILLARS.map((pillar, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={pillar.title}
                  onClick={() => setActiveIdx(idx)}
                  className={`group cursor-pointer p-6 transition-all duration-300 border-l-2 ${
                    isActive
                      ? 'border-[#c5a880] bg-white/[0.03]'
                      : 'border-white/10 hover:border-white/30 hover:bg-white/[0.01]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-4">
                      <span className="font-editorial text-sm text-[#8c827a] font-light">
                        0{idx + 1}
                      </span>
                      <h3
                        className={`font-editorial text-2xl sm:text-3xl tracking-wide transition-colors ${
                          isActive ? 'text-[#dfc8aa]' : 'text-[#faf8f5] group-hover:text-white'
                        }`}
                      >
                        {pillar.title}
                      </h3>
                    </div>

                    <ArrowRight
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isActive
                          ? 'text-[#c5a880] translate-x-1'
                          : 'text-white/20 group-hover:text-white/40'
                      }`}
                    />
                  </div>

                  <p className="mt-2 text-xs font-light text-[#8c827a] pl-8">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep Architectural Focus Card */}
          <div className="lg:col-span-6 bg-[#141418] border border-white/10 p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between min-h-[420px]">
            {/* Ambient Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#c5a880] mb-6">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Pillar Principle 0{activeIdx + 1}</span>
              </div>

              <h4 className="font-editorial text-3xl sm:text-4xl text-[#faf8f5] leading-tight">
                {activePillar.title}
              </h4>
              <p className="font-serif italic text-lg text-[#dfc8aa] mt-1 mb-8">
                {activePillar.subtitle}
              </p>

              <blockquote className="border-l border-[#c5a880]/40 pl-6 my-6 text-base sm:text-lg font-light leading-relaxed text-[#c2bdb5]">
                &ldquo;{activePillar.description}&rdquo;
              </blockquote>

              <p className="text-sm font-light leading-relaxed text-[#9a948c] mt-6">
                {activePillar.detail}
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between text-xs uppercase tracking-widest text-[#8c827a]">
              <span>Formulated with Redken Science</span>
              <span>Bakersfield & National</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
