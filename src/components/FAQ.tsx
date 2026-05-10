import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import SectionBadge from './SectionBadge';
import { Reveal, fadeUp, staggerContainer } from './Motion';
import { FAQS } from '../data';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="bg-brand-surface py-24">
      <div className="mx-auto max-w-[700px] px-6">
        <div className="text-center">
          <Reveal><SectionBadge label="FAQ's" /></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Frequently Asked <span className="text-brand-orange">Questions</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-lg text-brand-gray">
              We know home renovation comes with big questions. Here are answers to the ones we hear most.
            </p>
          </Reveal>
        </div>

        <m.div
          className="mt-12 space-y-3"
          role="list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {FAQS.map((f, i) => {
            const isOpen = openIdx === i;
            const panelId = `faq-panel-${i}`;
            const triggerId = `faq-trigger-${i}`;

            return (
              <m.div
                key={f.question}
                className="overflow-hidden rounded-xl bg-white"
                role="listitem"
                variants={fadeUp}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <button
                  id={triggerId}
                  onClick={() => setOpenIdx(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors duration-200 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50 focus-visible:ring-inset rounded-xl"
                >
                  <span className="text-base font-medium">{f.question}</span>
                  <m.span
                    className="ml-4 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-lg"
                    aria-hidden="true"
                    animate={{
                      rotate: isOpen ? 45 : 0,
                      backgroundColor: isOpen ? 'rgb(234, 88, 12)' : 'rgb(245, 245, 245)',
                      color: isOpen ? 'rgb(255,255,255)' : 'rgb(10,10,10)',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    +
                  </m.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-sm leading-relaxed text-brand-gray">
                        {f.answer}
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </m.div>
            );
          })}
        </m.div>
      </div>
    </section>
  );
}
