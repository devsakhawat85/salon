import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'border-b border-white/5 bg-[#0a0a0c]/85 py-4 backdrop-blur-md'
            : 'border-b border-transparent bg-gradient-to-b from-[#0a0a0c]/80 to-transparent py-6'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
          {/* Zone 1: Brand title, single element */}
          <a
            href="#"
            className="group flex flex-col tracking-widest transition-opacity hover:opacity-90"
          >
            <span className="font-editorial text-xl font-semibold tracking-[0.2em] text-[#faf8f5] md:text-2xl">
              MARK LAMAS
            </span>
          </a>

          {/* Zone 2: 4–6 text navigation links */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#portfolio"
              className="text-xs font-medium uppercase tracking-[0.2em] text-[#a39f99] transition-colors duration-200 hover:text-[#faf8f5]"
            >
              Work
            </a>
            <a
              href="#philosophy"
              className="text-xs font-medium uppercase tracking-[0.2em] text-[#a39f99] transition-colors duration-200 hover:text-[#faf8f5]"
            >
              Philosophy
            </a>
            <a
              href="#transformation"
              className="text-xs font-medium uppercase tracking-[0.2em] text-[#a39f99] transition-colors duration-200 hover:text-[#faf8f5]"
            >
              Transformation
            </a>
            <a
              href="#education"
              className="text-xs font-medium uppercase tracking-[0.2em] text-[#a39f99] transition-colors duration-200 hover:text-[#faf8f5]"
            >
              Education
            </a>
            <a
              href="#techniques"
              className="text-xs font-medium uppercase tracking-[0.2em] text-[#a39f99] transition-colors duration-200 hover:text-[#faf8f5]"
            >
              Techniques
            </a>
            <a
              href="#about"
              className="text-xs font-medium uppercase tracking-[0.2em] text-[#a39f99] transition-colors duration-200 hover:text-[#faf8f5]"
            >
              About
            </a>
          </nav>

          {/* Zone 3: 1–2 primary actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="group relative hidden items-center gap-2 overflow-hidden border border-[#c5a880]/40 bg-[#c5a880]/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#faf8f5] transition-all duration-300 hover:border-[#c5a880] hover:bg-[#c5a880] hover:text-[#0a0a0c] md:inline-flex"
            >
              <span>Book Appointment</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center text-[#faf8f5] transition-colors md:hidden"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#0a0a0c] px-8 pt-24 pb-12 md:hidden">
          <div className="flex justify-between items-center pb-6 border-b border-white/10">
            <span className="font-editorial text-xl font-semibold tracking-[0.2em] text-[#faf8f5]">
              MARK LAMAS
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-[#faf8f5]"
              aria-label="Close navigation menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="my-auto flex flex-col gap-6 text-center">
            <a
              href="#portfolio"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-editorial text-2xl tracking-[0.15em] text-[#faf8f5] transition-colors hover:text-[#c5a880]"
            >
              Work
            </a>
            <a
              href="#philosophy"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-editorial text-2xl tracking-[0.15em] text-[#faf8f5] transition-colors hover:text-[#c5a880]"
            >
              Philosophy
            </a>
            <a
              href="#transformation"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-editorial text-2xl tracking-[0.15em] text-[#faf8f5] transition-colors hover:text-[#c5a880]"
            >
              Transformation
            </a>
            <a
              href="#education"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-editorial text-2xl tracking-[0.15em] text-[#faf8f5] transition-colors hover:text-[#c5a880]"
            >
              Education
            </a>
            <a
              href="#techniques"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-editorial text-2xl tracking-[0.15em] text-[#faf8f5] transition-colors hover:text-[#c5a880]"
            >
              Techniques
            </a>
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-editorial text-2xl tracking-[0.15em] text-[#faf8f5] transition-colors hover:text-[#c5a880]"
            >
              About
            </a>
          </nav>

          <div className="space-y-4 pt-6 border-t border-white/10 text-center">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full border border-[#c5a880] bg-[#c5a880] py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#0a0a0c]"
            >
              Book an Appointment
            </button>
            <p className="text-[11px] uppercase tracking-widest text-[#8c827a]">
              Panache — A Mark Lamas Salon · Bakersfield, CA
            </p>
          </div>
        </div>
      )}
    </>
  );
};
