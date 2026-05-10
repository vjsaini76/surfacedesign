import { m } from 'framer-motion';
import { NAV_LINKS } from '../data';
import { Reveal } from './Motion';

const FOOTER_LINKS = [...NAV_LINKS, { label: 'Contact Us', href: '#contact' }];

export default function Footer() {
  return (
    <footer className="bg-brand-dark pt-20 pb-10">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <Reveal className="max-w-sm">
            <h3 className="text-2xl font-semibold leading-tight text-white">
              Your trusted partner in<br />home renovation &amp; interiors.
            </h3>
            <m.a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-full border border-brand-light/50 bg-brand-light px-6 py-2.5 text-base text-brand-dark transition-all duration-300 hover:bg-brand-orange hover:text-white hover:border-brand-orange"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">Request Free Quote</span>
              <span className="relative z-10 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-orange text-white text-xs transition-colors duration-300 group-hover:bg-white group-hover:text-brand-orange" aria-hidden="true">→</span>
            </m.a>
          </Reveal>

          <Reveal delay={0.1}>
            <nav aria-label="Footer navigation">
              <p className="text-sm text-brand-gray">Quick Links</p>
              <div className="mt-3 flex flex-col gap-2">
                {FOOTER_LINKS.map((l) => (
                  <a key={`${l.label}-${l.href}`} href={l.href} className="group relative text-sm text-brand-muted transition hover:text-white w-fit">
                    {l.label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-brand-orange transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>
            </nav>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              <p className="text-sm text-brand-gray">Contact Us</p>
              <address className="mt-3 flex flex-col gap-2 text-sm text-brand-muted not-italic">
                <p>Near Jalsa Lounge, DLF-Phase I<br />Gurgaon, Haryana</p>
                <a href="tel:+9108527120888" className="transition hover:text-white">+91 08527120888</a>
                <a href="mailto:info@surfacedesign.in" className="transition hover:text-white">info@surfacedesign.in</a>
              </address>
            </div>
          </Reveal>
        </div>

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-brand-gray sm:flex-row">
          <p>© 2026 SurfaceDesign</p>
        </div>
      </div>
    </footer>
  );
}
