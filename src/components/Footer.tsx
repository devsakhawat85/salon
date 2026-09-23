import React from 'react';
import { ARTIST_INFO } from '../data/content';
import { ArrowUp, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#070709] border-t border-white/5 py-16 text-[#8c827a]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 pb-12 border-b border-white/5">
          {/* Brand Info */}
          <div className="space-y-4 max-w-sm">
            <span className="font-editorial text-2xl font-semibold tracking-[0.2em] text-[#faf8f5] block">
              MARK LAMAS
            </span>
            <p className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-medium">
              Redken Artist · Master Colorist · Educator
            </p>
            <p className="text-xs font-light text-[#9a948c] leading-relaxed">
              Bespoke hair color architecture, root smudge science, and dimensional brunette contouring. Panache Salon, Bakersfield, California.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap gap-12 sm:gap-16 text-xs uppercase tracking-widest">
            <div className="space-y-3">
              <span className="text-[#faf8f5] font-semibold block mb-4">
                Navigation
              </span>
              <ul className="space-y-2.5">
                <li><a href="#portfolio" className="hover:text-[#faf8f5] transition-colors">Portfolio</a></li>
                <li><a href="#philosophy" className="hover:text-[#faf8f5] transition-colors">Philosophy</a></li>
                <li><a href="#transformation" className="hover:text-[#faf8f5] transition-colors">Transformation</a></li>
                <li><a href="#education" className="hover:text-[#faf8f5] transition-colors">Education</a></li>
                <li><a href="#techniques" className="hover:text-[#faf8f5] transition-colors">Techniques</a></li>
                <li><a href="#about" className="hover:text-[#faf8f5] transition-colors">About</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-[#faf8f5] font-semibold block mb-4">
                Connect
              </span>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href={ARTIST_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#c5a880] hover:text-[#dfc8aa] transition-colors"
                  >
                    <Instagram className="h-3.5 w-3.5" />
                    <span>Instagram (@hairmark1)</span>
                  </a>
                </li>
                <li><a href="#contact" className="hover:text-[#faf8f5] transition-colors">Panache Salon Desk</a></li>
                <li><a href="#contact" className="hover:text-[#faf8f5] transition-colors">Redken Education Inquiries</a></li>
              </ul>
            </div>
          </div>

          {/* Back to top */}
          <div className="flex items-start md:justify-end">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 border border-white/10 px-4 py-2.5 text-xs uppercase tracking-widest text-[#a39f99] hover:text-[#faf8f5] hover:border-white/30 transition-all"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Legal & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6b6560]">
          <p>
            © {new Date().getFullYear()} Mark Lamas. All rights reserved. Panache — A Mark Lamas Salon.
          </p>
          <div className="flex items-center gap-6">
            <span>Redken Artist Professional Portfolio</span>
            <span aria-hidden="true">·</span>
            <span>Bakersfield, California</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
