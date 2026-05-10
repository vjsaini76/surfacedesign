import { useState, useEffect, useCallback } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../data';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handler = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          onScroll();
          ticking = false;
        });
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [onScroll]);

  return (
    <m.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
      initial={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-2" aria-label="SurfaceDesign - Home">
          <span className="text-[28px] font-medium tracking-tight text-white">SurfaceDesign</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="group relative text-lg text-brand-light/90 transition-colors duration-200 hover:text-white">
              {l.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brand-orange transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 group rounded-full border border-brand-light/50 bg-brand-light px-6 py-2.5 text-lg text-brand-dark transition-all duration-300 hover:bg-brand-orange hover:text-white hover:border-brand-orange"
        >
          <span className="relative z-10">Contact Us</span>
          <span className="relative z-10 ml-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-orange text-white text-sm transition-colors duration-300 group-hover:bg-white group-hover:text-brand-orange" aria-hidden="true">→</span>
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-black/95 px-6 md:hidden"
          >
            <div className="pb-6">
              {NAV_LINKS.map((l, i) => (
                <m.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-lg text-brand-light/90"
                  initial={{ opacity: 0, translateX: -15 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  {l.label}
                </m.a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-3 block rounded-full bg-brand-light px-6 py-3 text-center text-brand-dark">
                Contact Us
              </a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </m.nav>
  );
}
