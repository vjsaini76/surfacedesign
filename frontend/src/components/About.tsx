import { m } from 'framer-motion';
import SectionBadge from './SectionBadge';
import { Reveal, staggerContainer, fadeUp } from './Motion';
import { useCountUp } from '../hooks/useCountUp';

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const num = parseInt(value);
  const suffix = value.replace(/\d+/, '');
  const { count, ref } = useCountUp(num);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-semibold text-brand-dark">{count}{suffix}</p>
      <p className="mt-1 text-sm text-brand-gray">{label}</p>
    </div>
  );
}

const STATS = [
  { value: '15+', label: 'Years of Experience' },
  { value: '40+', label: 'Projects Completed' },
  { value: '100%', label: 'Client Satisfaction' },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-16 px-6 lg:flex-row">
        <m.div
          className="flex gap-4 lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          <m.div className="w-[55%] overflow-hidden rounded-xl" variants={fadeUp} transition={{ duration: 0.5, ease: 'easeOut' }}>
            <img src="/images/vFndoLcfA59aVF8pqjh2ugiHfE.webp" alt="Outdoor seating area" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
          </m.div>
          <div className="flex w-[45%] flex-col gap-4">
            <m.div className="flex-1 overflow-hidden rounded-xl" variants={fadeUp} transition={{ duration: 0.5, ease: 'easeOut' }}>
              <img src="/images/tdbYj955g6CmqYHaCPdteCGNbQ8.webp" alt="Modern bathroom" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
            </m.div>
            <m.div className="flex-1 overflow-hidden rounded-xl" variants={fadeUp} transition={{ duration: 0.5, ease: 'easeOut' }}>
              <img src="/images/0boRvvQ1DjJHQaXT7ksu9cmVRA.webp" alt="Modern living room" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
            </m.div>
          </div>
        </m.div>

        <div className="lg:w-1/2">
          <Reveal><SectionBadge label="About SurfaceDesign" /></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Transforming Indian Homes with <span className="text-brand-orange">Vision, Craft, and Care.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-lg leading-relaxed text-brand-gray">
              At SurfaceDesign, we specialize in bringing your renovation dreams to life — with thoughtful design, expert craftsmanship, and an obsessive attention to detail. Based in India and proudly serving homeowners since 2008, we're more than just a renovation firm.
            </p>
          </Reveal>
          <div className="mt-10 flex gap-8">
            {STATS.map((s) => (
              <AnimatedStat key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
