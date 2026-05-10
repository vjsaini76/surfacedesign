import { useState } from 'react';
import { m } from 'framer-motion';
import SectionBadge from './SectionBadge';
import { Reveal } from './Motion';
import { PROJECTS } from '../data';

export default function Projects() {
  const [active, setActive] = useState(1);

  const prev = () => setActive((a) => (a - 1 + PROJECTS.length) % PROJECTS.length);
  const next = () => setActive((a) => (a + 1) % PROJECTS.length);

  return (
    <section id="works" className="bg-white py-24 overflow-hidden" aria-label="Our project transformations">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center">
          <Reveal><SectionBadge label="Portfolio - Our Transformations" /></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Real Homes. <span className="text-brand-orange">Remarkable Results.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-4 max-w-xl text-lg text-brand-gray">
              See how we turn everyday spaces into extraordinary living experiences — one project at a time.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Mobile: stacked cards */}
      <div className="mt-14 flex flex-col gap-6 px-6 md:hidden">
        {PROJECTS.map((p) => (
          <div key={p.title} className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '3/2' }}>
            <img src={p.image} alt={p.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgb(23,23,23)] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-semibold text-brand-surface">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{p.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: carousel */}
      <div className="relative mt-14 hidden md:block">
        <div className="flex items-center justify-center gap-8">
          {PROJECTS.map((p, i) => {
            const isActive = i === active;
            const offset = i - active;
            const absOffset = Math.abs(offset);

            if (absOffset > 1) return null;

            return (
              <m.div
                key={p.title}
                className="relative flex-shrink-0 overflow-hidden rounded-2xl cursor-pointer"
                style={{ width: 600, aspectRatio: '3/2' }}
                animate={{
                  opacity: isActive ? 1 : 0.7,
                  scale: isActive ? 1 : 0.88,
                  zIndex: isActive ? 10 : 1,
                }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                onClick={() => !isActive && setActive(i)}
                role="group"
                aria-label={`Project: ${p.title}`}
                aria-current={isActive ? 'true' : undefined}
              >
                <img src={p.image} alt={p.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(23,23,23)] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-semibold text-brand-surface">{p.title}</h3>
                  {isActive && (
                    <m.p
                      className="mt-2 text-sm leading-relaxed text-brand-muted"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.15, duration: 0.3 }}
                    >
                      {p.description}
                    </m.p>
                  )}
                </div>
              </m.div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={prev}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange text-white text-lg transition-transform hover:scale-110 active:scale-90"
            aria-label="Previous project"
          >
            ←
          </button>
          <button
            onClick={next}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange text-white text-lg transition-transform hover:scale-110 active:scale-90"
            aria-label="Next project"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
