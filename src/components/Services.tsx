import { m } from 'framer-motion';
import SectionBadge from './SectionBadge';
import { Reveal, fadeUp, staggerContainer } from './Motion';
import { SERVICES } from '../data';

export default function Services() {
  return (
    <section id="services" className="bg-brand-surface py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <Reveal><SectionBadge label="Our Services" /></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Custom <span className="text-brand-orange">Renovation</span> Services Designed to Fit Your Life
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="max-w-md">
              <p className="text-lg leading-relaxed text-brand-gray">
                From design to delivery, we offer end-to-end solutions tailored to your space, style, and schedule.
              </p>
              <m.a
                href="#contact"
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-brand-dark px-8 py-3 text-lg text-brand-light transition-all duration-300 hover:bg-brand-orange"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10">Request Free Quote</span>
                <span className="relative z-10 inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-orange text-white text-sm transition-colors duration-300 group-hover:bg-white group-hover:text-brand-orange">→</span>
              </m.a>
            </div>
          </Reveal>
        </div>

        <m.div
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {SERVICES.map((s) => (
            <m.div
              key={s.title}
              className="group relative overflow-hidden rounded-xl cursor-pointer transition-transform duration-300 hover:-translate-y-2"
              style={{ aspectRatio: '3/4' }}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(23,23,23)] via-[rgb(23,23,23)]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h4 className="text-lg font-medium text-brand-surface">{s.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-brand-muted opacity-80 transition-opacity duration-300 group-hover:opacity-100">{s.description}</p>
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
