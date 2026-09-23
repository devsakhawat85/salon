import React, { useState } from 'react';
import { EDUCATION_WORKSHOPS } from '../data/content';
import { ArrowRight, BookOpen, GraduationCap, CheckCircle2 } from 'lucide-react';

interface EducationProps {
  onOpenBooking: () => void;
}

export const Education: React.FC<EducationProps> = ({ onOpenBooking }) => {
  const [selectedWorkshopId, setSelectedWorkshopId] = useState(EDUCATION_WORKSHOPS[0].id);

  return (
    <section id="education" className="relative w-full bg-[#0d0d10] py-28 md:py-36 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16 border-b border-white/10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c5a880] mb-3 block">
              Redken Artist & Professional Mentorship
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#faf8f5] leading-tight">
              FROM THE CHAIR <br />
              <span className="italic font-light text-[#dfc8aa]">TO THE CLASSROOM.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm font-light text-[#a39f99] leading-relaxed">
            True mastery is measured by the ability to demystify complex color chemistry and empower fellow salon professionals with repeatable, high-revenue placement techniques.
          </p>
        </div>

        {/* Cinematic Education Banner */}
        <div className="relative my-16 overflow-hidden bg-[#121216] border border-white/10">
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
            <img
              src="/src/assets/images/education_workshop_redken_1790180955055.jpg"
              alt="Mark Lamas conducting a professional hair color masterclass"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent" />

            {/* Floating Banner Tagline */}
            <div className="absolute bottom-8 left-8 sm:left-12 max-w-xl z-10">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-medium block mb-2">
                Live Academy Demonstration
              </span>
              <h3 className="font-editorial text-2xl sm:text-4xl text-[#faf8f5] leading-snug">
                Formulation Science · Root Smudge Geometry · Brunette Contouring
              </h3>
            </div>
          </div>
        </div>

        {/* Workshop Modules Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4">
          {/* Workshop Selection List */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8c827a] font-semibold block mb-4">
              Curated Educational Modules
            </span>

            {EDUCATION_WORKSHOPS.map((ws) => {
              const isSelected = selectedWorkshopId === ws.id;
              return (
                <div
                  key={ws.id}
                  onClick={() => setSelectedWorkshopId(ws.id)}
                  className={`cursor-pointer p-6 transition-all duration-300 border ${
                    isSelected
                      ? 'border-[#c5a880] bg-white/[0.04]'
                      : 'border-white/10 bg-[#121216]/50 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-[#c5a880] uppercase tracking-wider mb-2">
                    <span>{ws.type}</span>
                    <span className="text-[#8c827a]">{ws.format}</span>
                  </div>

                  <h4 className="font-editorial text-xl sm:text-2xl text-[#faf8f5] mb-2">
                    {ws.title}
                  </h4>

                  <p className="text-xs font-light text-[#9a948c] line-clamp-2">
                    {ws.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Detailed Syllabus Pane */}
          <div className="lg:col-span-7 bg-[#141418] border border-white/10 p-8 sm:p-12 flex flex-col justify-between">
            {(() => {
              const current =
                EDUCATION_WORKSHOPS.find((w) => w.id === selectedWorkshopId) ||
                EDUCATION_WORKSHOPS[0];
              return (
                <div>
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#c5a880] mb-4">
                    <GraduationCap className="h-4 w-4" />
                    <span>Detailed Syllabus · {current.type}</span>
                  </div>

                  <h3 className="font-editorial text-3xl sm:text-4xl text-[#faf8f5] mb-4">
                    {current.title}
                  </h3>

                  <div className="text-xs font-mono text-[#dfc8aa] bg-[#1a1a20] p-3 border border-white/5 mb-6">
                    Core Focus: {current.focus}
                  </div>

                  <p className="text-sm font-light leading-relaxed text-[#c2bdb5] mb-8">
                    {current.description}
                  </p>

                  <div className="space-y-3 pt-6 border-t border-white/10">
                    <span className="text-xs uppercase tracking-widest text-[#8c827a] block mb-2">
                      Key Educational Takeaways
                    </span>
                    {current.keyTakeaways.map((takeaway, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#e2ded6]">
                        <CheckCircle2 className="h-4 w-4 text-[#c5a880] shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}

            <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs uppercase tracking-widest text-[#8c827a]">
                Available for salon in-house clinics & regional masterclasses
              </span>
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#c5a880] bg-[#c5a880] hover:bg-[#dfc8aa] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#0a0a0c] transition-colors"
              >
                <span>Request Workshop</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
