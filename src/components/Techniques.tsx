import React, { useState } from 'react';
import { TECHNIQUES } from '../data/content';
import { ChevronDown, Sparkles, Check } from 'lucide-react';

interface TechniquesProps {
  onOpenBooking: () => void;
}

export const Techniques: React.FC<TechniquesProps> = ({ onOpenBooking }) => {
  const [expandedId, setExpandedId] = useState<string | null>(TECHNIQUES[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="techniques" className="relative w-full bg-[#0a0a0c] py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl pb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c5a880] mb-3 block">
            Signature Repertoire
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#faf8f5] leading-tight">
            Master Techniques
          </h2>
          <p className="mt-4 text-base sm:text-lg font-light text-[#a39f99] leading-relaxed">
            Every technique is engineered with deliberate brush angles, foil tension, and acidic tone chemistry to guarantee flawless blending and effortless longevity.
          </p>
        </div>

        {/* Technique Accordion Stack */}
        <div className="space-y-4">
          {TECHNIQUES.map((tech, index) => {
            const isExpanded = expandedId === tech.id;
            return (
              <div
                key={tech.id}
                className={`border transition-all duration-300 ${
                  isExpanded
                    ? 'border-[#c5a880]/50 bg-[#121216]'
                    : 'border-white/10 bg-[#0d0d10] hover:border-white/20'
                }`}
              >
                {/* Header Bar */}
                <button
                  onClick={() => toggleExpand(tech.id)}
                  className="w-full p-6 sm:p-8 flex items-center justify-between text-left transition-colors"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-6 sm:gap-10">
                    <span className="font-editorial text-base sm:text-lg text-[#8c827a] font-light">
                      0{index + 1}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#c5a880] mb-1 font-medium">
                        <span>{tech.category}</span>
                        <span aria-hidden="true" className="text-white/20">·</span>
                        <span>{tech.subtitle}</span>
                      </div>
                      <h3 className="font-editorial text-2xl sm:text-3xl text-[#faf8f5]">
                        {tech.name}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="hidden sm:inline text-xs uppercase tracking-widest text-[#8c827a]">
                      {isExpanded ? 'Collapse' : 'Inspect'}
                    </span>
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-[#faf8f5] transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 bg-[#c5a880] text-[#0a0a0c]' : ''
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                </button>

                {/* Expanded Details Pane */}
                {isExpanded && (
                  <div className="px-6 pb-8 sm:px-8 sm:pb-10 pt-2 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-300">
                    {/* Visual Preview */}
                    {tech.image && (
                      <div className="lg:col-span-4 aspect-[4/3] overflow-hidden bg-black border border-white/10">
                        <img
                          src={tech.image}
                          alt={tech.name}
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}

                    {/* Technique Methodology */}
                    <div className={`${tech.image ? 'lg:col-span-8' : 'lg:col-span-12'} space-y-6`}>
                      <p className="text-sm sm:text-base font-light leading-relaxed text-[#c2bdb5]">
                        {tech.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        {tech.keyBenefits.map((benefit, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2.5 text-xs text-[#d4cfc7]">
                            <Check className="h-4 w-4 text-[#c5a880] shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {/* Formula Insight */}
                      <div className="bg-[#18181f] p-4 border border-white/5 flex items-start gap-3">
                        <Sparkles className="h-4 w-4 text-[#c5a880] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[11px] uppercase tracking-wider text-[#dfc8aa] font-medium block">
                            Formulation Insight
                          </span>
                          <p className="text-xs text-[#a39f99] font-mono mt-1">
                            {tech.formulaInsight}
                          </p>
                        </div>
                      </div>

                      <div className="pt-2 flex items-center justify-between">
                        <span className="text-xs uppercase tracking-widest text-[#8c827a]">
                          Taught in Redken Artist masterclasses & practiced at Panache
                        </span>
                        <button
                          onClick={onOpenBooking}
                          className="text-xs font-semibold uppercase tracking-wider text-[#c5a880] hover:text-[#dfc8aa] transition-colors"
                        >
                          Book consultation for this technique →
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
