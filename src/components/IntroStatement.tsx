import React from 'react';
import { ARTIST_INFO } from '../data/content';

export const IntroStatement: React.FC = () => {
  return (
    <section id="intro" className="relative w-full bg-[#0d0d10] py-28 md:py-36 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Statement */}
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a880] mb-4 block">
              The Perspective
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.12] text-[#faf8f5] [text-wrap:balance]">
              &ldquo;Where technical precision <br />
              <span className="italic font-light text-[#dfc8aa]">meets creative expression.&rdquo;</span>
            </h2>

            <div className="mt-8 space-y-5 text-base sm:text-lg font-light leading-relaxed text-[#c2bdb5]">
              <p>
                Hair color is more than a service—it is architectural light design. Every head of hair is an uncharted canvas governed by underlying natural pigments, face geometry, and hair fiber integrity.
              </p>
              <p>
                As a dedicated Redken Artist and salon owner at Panache in Bakersfield, California, Mark Lamas blends the rigorous chemistry of modern color science with an editorial, effortless American beauty aesthetic.
              </p>
            </div>
          </div>

          {/* Right Column: Verified Professional Attributes */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-10 lg:border-l lg:border-white/10 lg:pl-12">
            <div className="space-y-6">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8c827a] block">
                Professional Positioning
              </span>

              <ul className="space-y-5 text-sm sm:text-base font-light text-[#e2ded6]">
                <li className="flex items-start gap-4">
                  <span className="font-editorial text-lg text-[#c5a880] mt-0.5">01</span>
                  <div>
                    <h3 className="font-medium text-[#faf8f5]">Redken Artist & Platform Educator</h3>
                    <p className="text-xs text-[#9a948c] mt-1 leading-normal">
                      Touring academies and salons to teach root smudging, brunette contouring, and advanced formulation science.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="font-editorial text-lg text-[#c5a880] mt-0.5">02</span>
                  <div>
                    <h3 className="font-medium text-[#faf8f5]">Specialist in Dimensional Color</h3>
                    <p className="text-xs text-[#9a948c] mt-1 leading-normal">
                      Renowned for high-longevity balayage, soft sombré gradients, and multi-zone toning with zero line of demarcation.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="font-editorial text-lg text-[#c5a880] mt-0.5">03</span>
                  <div>
                    <h3 className="font-medium text-[#faf8f5]">Panache — A Mark Lamas Salon</h3>
                    <p className="text-xs text-[#9a948c] mt-1 leading-normal">
                      Bakersfield, California creative headquarters cultivating excellence in client care and bespoke color design.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Instagram callout */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs uppercase tracking-widest text-[#a39f99]">
              <span>Follow Daily Work</span>
              <a
                href={ARTIST_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#c5a880] hover:text-[#dfc8aa] transition-colors"
              >
                @hairmark1 →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
