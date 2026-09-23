import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';

export const TransformationSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percentage = (clampedX / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section id="transformation" className="relative w-full bg-[#0a0a0c] py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl pb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c5a880] mb-3 block">
            Tactile Case Study
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#faf8f5] leading-tight">
            Before & After Transformation
          </h2>
          <p className="mt-4 text-base sm:text-lg font-light text-[#a39f99] leading-relaxed">
            Drag the interactive slider to inspect the transition from uneven brassy banding into a seamless cool-beige dimensional melt with an intentional shadow root.
          </p>
        </div>

        {/* Transformation Split Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Draggable Slider Viewport (7 Cols) */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              data-cursor="drag"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden select-none bg-[#121216] border border-white/10 shadow-2xl cursor-ew-resize"
            >
              {/* After Image (Full background) */}
              <img
                src="/src/assets/images/transform_after_color_1790180981725.jpg"
                alt="Hair Color After: Luminous Champagne Sombré with Root Smudge"
                referrerPolicy="no-referrer"
                className="absolute inset-0 h-full w-full object-cover pointer-events-none"
              />

              {/* Before Image (Clipped overlay) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src="/src/assets/images/transform_before_color_1790180969678.jpg"
                  alt="Hair Color Before: Faded brassy uneven grown-out color"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 h-full w-full object-cover max-w-none pointer-events-none"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                    height: '100%',
                  }}
                />
              </div>

              {/* Floating Text Indicators */}
              <div className="absolute top-6 left-6 z-20 pointer-events-none">
                <span className="bg-[#0a0a0c]/80 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#faf8f5] border border-white/10">
                  Before
                </span>
              </div>

              <div className="absolute top-6 right-6 z-20 pointer-events-none">
                <span className="bg-[#0a0a0c]/80 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c5a880] border border-[#c5a880]/30">
                  After
                </span>
              </div>

              {/* Center Divider Line & Tactile Handle */}
              <div
                className="absolute top-0 bottom-0 z-30 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-0 bottom-0 -left-px w-0.5 bg-[#faf8f5] shadow-[0_0_12px_rgba(255,255,255,0.7)]" />
                <div className="absolute top-1/2 -left-5 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-[#0a0a0c] text-[#c5a880] border-2 border-[#faf8f5] shadow-2xl">
                  <ArrowLeftRight className="h-4 w-4" />
                </div>
              </div>

              {/* Interactive prompt overlay */}
              <div className="absolute bottom-4 inset-x-0 text-center pointer-events-none">
                <span className="bg-black/60 backdrop-blur-sm px-4 py-1 text-[10px] uppercase tracking-widest text-[#a39f99] border border-white/5">
                  Drag or touch to compare
                </span>
              </div>
            </div>

            {/* Quick Preset Buttons */}
            <div className="mt-4 flex items-center justify-between text-xs text-[#8c827a]">
              <button
                onClick={() => setSliderPosition(15)}
                className="hover:text-[#faf8f5] transition-colors"
              >
                Reveal 85% After
              </button>
              <button
                onClick={() => setSliderPosition(50)}
                className="hover:text-[#c5a880] transition-colors"
              >
                Center 50/50
              </button>
              <button
                onClick={() => setSliderPosition(85)}
                className="hover:text-[#faf8f5] transition-colors"
              >
                Reveal 85% Before
              </button>
            </div>
          </div>

          {/* Case Study Technical Breakdown (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border-b border-white/10 pb-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold block mb-2">
                Case Study 01 · Overhaul
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl text-[#faf8f5] leading-tight">
                Warm Brass to Luminous Champagne Sombré
              </h3>
            </div>

            {/* Case Details */}
            <div className="space-y-6 text-sm font-light leading-relaxed text-[#c2bdb5]">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#faf8f5] mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400/80" />
                  Initial Canvas & Challenge
                </h4>
                <p className="text-xs text-[#9a948c]">
                  Client arrived with 3 inches of natural level 5 regrowth, followed by uneven copper/gold banding and overly porous fragile ends from prior highlight services.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#c5a880] mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#c5a880]" />
                  The Formulative Strategy
                </h4>
                <p className="text-xs text-[#9a948c]">
                  Controlled lifting with low-volume bond-protected lightener, followed by a targeted Zone 1 root smudge to eliminate demarcation, and a multi-zone demi-permanent gloss (Redken Shades EQ) for pearlescent clarity.
                </p>
              </div>

              <div className="bg-[#141418] p-5 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#dfc8aa] font-medium uppercase tracking-wider">
                  <Sparkles className="h-3.5 w-3.5 text-[#c5a880]" />
                  <span>Formula Blueprint</span>
                </div>
                <ul className="text-xs font-mono text-[#a39f99] space-y-1.5">
                  <li><strong className="text-white/80">Lightener:</strong> Flash Lift + Bonder Inside (20 vol)</li>
                  <li><strong className="text-white/80">Zone 1 (Root Smudge):</strong> Shades EQ 06N + 06NA</li>
                  <li><strong className="text-white/80">Zone 2 & 3 (Glaze):</strong> Shades EQ 09V + 09GI + Clear</li>
                  <li className="flex items-center gap-1.5 pt-1 text-[#c5a880]">
                    <Clock className="h-3 w-3" />
                    <span>Processing: 20 min ambient</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <span className="text-xs uppercase tracking-widest text-[#8c827a] block mb-1">
                  Wearability & Maintenance
                </span>
                <p className="text-xs text-[#9a948c]">
                  Estimated wearability is 14–16 weeks with zero harsh line of demarcation. Color requires only a simple gloss refresh at 8 weeks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
