import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import SectionBadge from './SectionBadge';
import { Reveal, fadeUp, staggerContainer } from './Motion';
import FurnitureGallery from './FurnitureGallery';

const FURNITURE = [
  {
    title: 'Living Room Sets',
    description: 'Elegant sofas, coffee tables, and entertainment units crafted for comfort.',
    image: '/images/0hfvpTKH6RiitJ9zFmfivKBBNE.webp',
  },
  {
    title: 'Bedroom Furniture',
    description: 'Beds, wardrobes, and dressers designed for restful living.',
    image: '/images/tdbYj955g6CmqYHaCPdteCGNbQ8.webp',
  },
  {
    title: 'Dining & Kitchen',
    description: 'Custom dining tables, chairs, and modular kitchen cabinetry.',
    image: '/images/dQVBhioFSo1V7k0RuZBUvXHww90.webp',
  },
  {
    title: 'Office & Study',
    description: 'Functional desks, shelving, and ergonomic setups for productivity.',
    image: '/images/0boRvvQ1DjJHQaXT7ksu9cmVRA.webp',
  },
];

export default function Furniture() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(0);

  const openGallery = (index: number) => {
    setSelectedSection(index);
    setGalleryOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setGalleryOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <section id="furniture" className="bg-brand-surface py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center">
            <Reveal><SectionBadge label="Furniture" /></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Custom <span className="text-brand-orange">Furniture</span> Built for Your Space
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mx-auto mt-4 max-w-xl text-lg text-brand-gray">
                From concept to creation — handcrafted furniture that blends style, durability, and function.
              </p>
            </Reveal>
          </div>

          <m.div
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {FURNITURE.map((item, index) => (
              <m.div
                key={item.title}
                className="group cursor-pointer overflow-hidden rounded-xl bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                variants={fadeUp}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                onClick={() => openGallery(index)}
              >
                <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-medium text-brand-dark">{item.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-brand-gray">{item.description}</p>
                  <p className="mt-3 text-xs font-medium text-brand-orange">View Gallery →</p>
                </div>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      <AnimatePresence>
        {galleryOpen && (
          <FurnitureGallery initialSection={selectedSection} onClose={closeGallery} />
        )}
      </AnimatePresence>
    </>
  );
}
