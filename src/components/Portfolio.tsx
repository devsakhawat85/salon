import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/content';
import { PortfolioCategory, PortfolioItem } from '../types';
import { LightboxModal } from './LightboxModal';
import { ArrowUpRight } from 'lucide-react';

interface PortfolioProps {
  onOpenBooking: () => void;
}

const CATEGORIES: { id: PortfolioCategory; label: string }[] = [
  { id: 'ALL', label: 'All Works' },
  { id: 'COLOR', label: 'Color' },
  { id: 'BLONDE', label: 'Blonde' },
  { id: 'BRUNETTE', label: 'Brunette' },
  { id: 'BALAYAGE', label: 'Balayage' },
  { id: 'SOMBRÉ', label: 'Sombré' },
  { id: 'TRANSFORMATIONS', label: 'Transformations' },
  { id: 'EDUCATION', label: 'Education' },
];

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('ALL');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems =
    activeCategory === 'ALL'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="relative w-full bg-[#0a0a0c] py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c5a880] mb-3 block">
              Curated Portfolio
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#faf8f5]">
              Signature Works
            </h2>
          </div>

          <p className="max-w-md text-sm font-light text-[#a39f99] leading-relaxed">
            Every piece reflects bespoke formulation, multi-zone smudging, and seamless grow-out architecture. Click any piece to examine placement and chemistry notes.
          </p>
        </div>

        {/* Filter Navigation - Clean segmented controls */}
        <div className="py-8 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] transition-all duration-200 border ${
                  isActive
                    ? 'border-[#c5a880] bg-[#c5a880]/10 text-[#faf8f5]'
                    : 'border-transparent text-[#8c827a] hover:text-[#faf8f5] hover:border-white/10'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-6">
          {filteredItems.map((item, index) => {
            // Give alternating editorial weights: first item or featured gets col-span-8 or col-span-7
            const isWide = index === 0 || index === 3;
            const colSpan = isWide ? 'md:col-span-7 lg:col-span-8' : 'md:col-span-5 lg:col-span-4';

            return (
              <div
                key={item.id}
                data-cursor="view"
                onClick={() => setSelectedItem(item)}
                className={`group relative cursor-pointer overflow-hidden bg-[#121216] border border-white/5 transition-all duration-500 hover:border-white/20 ${colSpan}`}
              >
                {/* Image Container with smooth zoom */}
                <div className={`relative overflow-hidden ${isWide ? 'aspect-[16/10] sm:aspect-[16/9]' : 'aspect-[4/5]'}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle Contrast Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Corner Accent Icon */}
                  <div className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center bg-[#0a0a0c]/60 text-white backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="h-4 w-4 text-[#c5a880]" />
                  </div>

                  {/* Bottom Editorial Content Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex flex-col justify-end">
                    {/* Unboxed Metadata */}
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#c5a880] mb-2 font-medium">
                      <span>{item.categoryLabel}</span>
                      <span aria-hidden="true" className="text-white/20">·</span>
                      <span className="text-[#a39f99] truncate">{item.technique}</span>
                    </div>

                    <h3 className="font-editorial text-2xl sm:text-3xl text-[#faf8f5] group-hover:text-[#dfc8aa] transition-colors leading-tight">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs font-light text-[#c2bdb5] line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Portfolio Footer Link */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs uppercase tracking-widest text-[#8c827a]">
          <span>Full editorial archive & formula breakdowns available during consultations</span>
          <a
            href="https://www.instagram.com/hairmark1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c5a880] hover:text-[#faf8f5] transition-colors inline-flex items-center gap-2"
          >
            <span>Explore 1,000+ works on @hairmark1</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Lightbox / Formulation Modal */}
      <LightboxModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onOpenBooking={onOpenBooking}
      />
    </section>
  );
};
