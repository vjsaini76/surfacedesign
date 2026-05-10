import { m } from 'framer-motion';
import SectionBadge from './SectionBadge';
import { Reveal } from './Motion';

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-black py-24">
      <div className="absolute inset-0">
        <img
          src="/images/vFndoLcfA59aVF8pqjh2ugiHfE.webp"
          alt="Modern cabin"
          className="h-full w-full object-cover opacity-30"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 text-center">
        <Reveal><SectionBadge label="Book Now" /></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-brand-light md:text-4xl">
            Ready to Start Your <span className="text-brand-orange">Renovation?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-4 max-w-xl text-lg text-brand-muted">
            Let's bring your space to life with craftsmanship, clarity, and care. Whether it's a full remodel or a custom home build, SurfaceDesign makes the process smooth, transparent, and beautifully executed.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <m.a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-brand-light/50 bg-brand-light px-8 py-3 text-lg text-brand-dark transition-all duration-300 hover:bg-brand-orange hover:text-white hover:border-brand-orange"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">Request Free Quote</span>
              <span className="relative z-10 inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-orange text-white text-sm transition-colors duration-300 group-hover:bg-white group-hover:text-brand-orange">→</span>
            </m.a>
            <m.a
              href="tel:+9108527120888"
              className="inline-flex items-center gap-2 rounded-full border border-brand-light/50 px-8 py-3 text-lg text-brand-light transition hover:bg-white/10"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Call Us Now
            </m.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
