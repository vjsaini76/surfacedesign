import { FormEvent, useState } from 'react';
import { m } from 'framer-motion';
import SectionBadge from './SectionBadge';
import { Reveal } from './Motion';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log('Form submitted:', Object.fromEntries(data));
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-16 px-6 lg:flex-row">
        <div className="lg:w-[45%]">
          <Reveal><SectionBadge label="Request a Quote" /></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Let's Talk <span className="text-brand-orange">Renovation</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-lg text-brand-gray">
              Have a renovation in mind? Fill out the form and we'll get in touch within 24 hours to discuss your project.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-8 hidden overflow-hidden rounded-xl lg:block">
            <div style={{ aspectRatio: '3/2' }}>
              <img src="/images/8BoWPv6AfdFRTEBN3LdyWJo68YY.webp" alt="Modern living room with vertical garden" className="h-full w-full object-cover rounded-xl" loading="lazy" />
            </div>
          </Reveal>
        </div>

        <div className="lg:w-[55%]">
          {submitted ? (
            <m.div
              className="flex h-full items-center justify-center rounded-xl bg-brand-surface p-12 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              role="status"
            >
              <div>
                <p className="text-2xl font-semibold text-brand-dark">Thank you! 🎉</p>
                <p className="mt-2 text-brand-gray">We'll be in touch within 24 hours.</p>
              </div>
            </m.div>
          ) : (
            <Reveal delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-sm text-brand-gray">Full Name <span className="text-brand-orange" aria-hidden="true">*</span></label>
                  <input id="contact-name" name="name" type="text" required placeholder="Jane Smith" autoComplete="name" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/30" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 block text-sm text-brand-gray">Email Address <span className="text-brand-orange" aria-hidden="true">*</span></label>
                    <input id="contact-email" name="email" type="email" required placeholder="jane@example.com" autoComplete="email" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/30" />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="mb-1.5 block text-sm text-brand-gray">Phone Number (optional)</label>
                    <input id="contact-phone" name="phone" type="tel" placeholder="+91 08527120888" autoComplete="tel" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/30" />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-location" className="mb-1.5 block text-sm text-brand-gray">Project Location <span className="text-brand-orange" aria-hidden="true">*</span></label>
                    <input id="contact-location" name="location" type="text" required placeholder="India" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/30" />
                  </div>
                  <div>
                    <label htmlFor="contact-type" className="mb-1.5 block text-sm text-brand-gray">Type of Renovation <span className="text-brand-orange" aria-hidden="true">*</span></label>
                    <select id="contact-type" name="type" required defaultValue="" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/30">
                      <option value="" disabled>Select…</option>
                      <option value="kitchen">Kitchen</option>
                      <option value="bathroom">Bathroom</option>
                      <option value="full-home">Full Home</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-sm text-brand-gray">Message / Project Brief</label>
                  <textarea id="contact-message" name="message" rows={4} placeholder="Write your project details..." className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/30" />
                </div>
                <m.button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-dark px-8 py-3 text-lg text-brand-light transition-all duration-300 hover:bg-brand-orange"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10">Request Free Quote</span>
                  <span className="relative z-10 inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-orange text-white text-sm transition-colors duration-300 group-hover:bg-white group-hover:text-brand-orange" aria-hidden="true">→</span>
                </m.button>
              </form>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
