import { m } from 'framer-motion';
import SectionBadge from './SectionBadge';
import { Reveal, fadeUp, staggerContainer } from './Motion';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 lg:flex-row">
        <div className="lg:w-[55%]">
          <Reveal><SectionBadge label="Testimonials" /></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              What Our <span className="text-brand-orange">Clients </span>Are Saying
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 text-lg text-brand-gray">Real Stories from Homeowners Who Trusted SurfaceDesign for Their Home</p>
          </Reveal>

          <m.div
            className="mt-10 grid gap-5 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {TESTIMONIALS.map((t) => (
              <m.div
                key={t.name}
                className="rounded-xl bg-brand-surface p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                variants={fadeUp}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <p className="text-sm leading-relaxed text-brand-gray">{t.quote}</p>
                <div className="mt-4 flex items-center gap-3">
                  <img src={t.image} alt={t.name} className="h-10 w-10 rounded-full object-cover" loading="lazy" />
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-brand-gray">{t.location}</p>
                  </div>
                </div>
              </m.div>
            ))}
          </m.div>
        </div>

        <Reveal className="relative hidden overflow-hidden rounded-xl lg:block lg:w-[45%]" delay={0.2}>
          <img src="/images/olSpO4kbExsxcEunSV6aiqGIEc.webp" alt="Luxurious living room" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 flex flex-col justify-end bg-[rgb(23,23,23)]/80 p-8">
            <p className="text-sm leading-relaxed text-brand-muted">
              "From the very first consultation, SurfaceDesign felt like the right choice. The team was organized, transparent, and truly cared about the details. Our home feels brand new."
            </p>
            <p className="mt-3 text-sm font-semibold italic text-white">- Tanya L., Delhi</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
