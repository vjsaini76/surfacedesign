import { m } from 'framer-motion';

const words = 'Building Spaces That Reflect You — With Craft, Care and Complete Control'.split(' ');

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img
          src="/images/tUSgx4XMKr8Q8ZDMyDkJGYJXE.webp"
          alt="Modern indoor space with large glass doors and lush greenery"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 pt-32 pb-20">
        <h1 className="max-w-4xl text-2xl font-semibold leading-tight tracking-tight text-brand-light md:text-4xl lg:text-5xl">
          {words.map((word, i) => (
            <m.span
              key={`${word}-${i}`}
              className="mr-[0.3em] inline-block"
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.035, ease: 'easeOut' }}
            >
              {word}
            </m.span>
          ))}
        </h1>

        <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <m.div
            className="max-w-lg"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p className="text-lg leading-relaxed text-brand-muted">
              SurfaceDesign transforms homes with timeless design, superior materials, and detail-driven construction — all managed with care from concept to completion.
            </p>
            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-brand-light/50 bg-brand-light px-8 py-3 text-lg text-brand-dark transition-all duration-300 hover:bg-brand-orange hover:text-white hover:border-brand-orange"
            >
              <span className="relative z-10">Request Free Quote</span>
              <span className="relative z-10 inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-orange text-white text-sm transition-colors duration-300 group-hover:bg-white group-hover:text-brand-orange" aria-hidden="true">→</span>
            </a>
          </m.div>

          <m.div
            className="hidden max-w-sm rounded-xl bg-white/20 p-5 backdrop-blur-md lg:block"
            initial={{ opacity: 0, translateX: 30 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <p className="text-sm leading-relaxed text-brand-muted">
              "SurfaceDesign made our renovation easy and seamless. The results were better than we imagined, and the team was professional from start to finish."
            </p>
            <p className="mt-3 text-sm font-semibold italic text-white">- Sunita R., Gurgaon</p>
          </m.div>
        </div>
      </div>
    </section>
  );
}
