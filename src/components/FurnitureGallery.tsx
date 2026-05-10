import { useState, useRef, useCallback } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../data';

export interface GalleryItem {
  name: string;
  image: string;
}

export interface GallerySection {
  title: string;
  items: GalleryItem[];
}

const GALLERY_DATA: GallerySection[] = [
  {
    title: 'Living Room Sets',
    items: [
      { name: 'Modern L-Shape Sofa', image: '/images/0hfvpTKH6RiitJ9zFmfivKBBNE.webp' },
      { name: 'Wooden Coffee Table', image: '/images/vFndoLcfA59aVF8pqjh2ugiHfE.webp' },
      { name: 'TV Entertainment Unit', image: '/images/olSpO4kbExsxcEunSV6aiqGIEc.webp' },
    ],
  },
  {
    title: 'Bedroom Furniture',
    items: [
      { name: 'King Size Bed Frame', image: '/images/tdbYj955g6CmqYHaCPdteCGNbQ8.webp' },
      { name: 'Sliding Wardrobe', image: '/images/8BoWPv6AfdFRTEBN3LdyWJo68YY.webp' },
      { name: 'Bedside Dresser', image: '/images/er9ElXqyF4wyN9WZZRVHGgH0IY.webp' },
    ],
  },
  {
    title: 'Dining & Kitchen',
    items: [
      { name: '6-Seater Dining Table', image: '/images/dQVBhioFSo1V7k0RuZBUvXHww90.webp' },
      { name: 'Modular Kitchen Cabinet', image: '/images/Im4wRuRxPa3ij9n8tGFDxaDAys.webp' },
      { name: 'Kitchen Island Unit', image: '/images/POxVH1JgZSlrsqIG0tAPuthBD8.webp' },
    ],
  },
  {
    title: 'Office & Study',
    items: [
      { name: 'Executive Work Desk', image: '/images/0boRvvQ1DjJHQaXT7ksu9cmVRA.webp' },
      { name: 'Bookshelf Wall Unit', image: '/images/6f942SvHyYRaCchW2zEcatndm0.webp' },
      { name: 'Study Corner Setup', image: '/images/ZQ3SNXxBqH4iRTn5KzvSUUfFkXU.webp' },
    ],
  },
];

interface Props {
  initialSection: number;
  onClose: () => void;
}

export default function FurnitureGallery({ initialSection, onClose }: Props) {
  const [activeSection, setActiveSection] = useState(initialSection);
  const [activeItem, setActiveItem] = useState(0);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const posStart = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const currentSection = GALLERY_DATA[activeSection];
  const currentItem = currentSection.items[activeItem];

  const handleSectionChange = (idx: number) => {
    setActiveSection(idx);
    setActiveItem(0);
    resetZoom();
  };

  const handleItemChange = (idx: number) => {
    setActiveItem(idx);
    resetZoom();
  };

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const zoomIn = () => setScale((s) => Math.min(s + 0.5, 4));
  const zoomOut = () => {
    setScale((s) => {
      const next = Math.max(s - 0.5, 1);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.2 : 0.2;
    setScale((s) => {
      const next = Math.min(Math.max(s + delta, 1), 4);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    posStart.current = { ...position };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    setPosition({ x: posStart.current.x + dx, y: posStart.current.y + dy });
  };

  const handleMouseUp = () => setDragging(false);

  return (
    <m.div
      className="fixed inset-0 z-[100] flex flex-col bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header - same as home page navbar */}
      <div className="flex items-center justify-between border-b border-gray-100 bg-brand-dark px-6 py-4">
        <a href="#hero" onClick={onClose} className="flex items-center gap-2" aria-label="SurfaceDesign - Home">
          <span className="text-[28px] font-medium tracking-tight text-white">SurfaceDesign</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={onClose} className="text-base text-brand-light/90 transition-colors duration-200 hover:text-white">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-brand-light/60 hidden lg:inline">Scroll to zoom • Drag to pan</span>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-orange"
            aria-label="Close gallery"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left sidebar */}
        <div className="w-56 flex-shrink-0 overflow-y-auto border-r border-gray-100 p-4">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-brand-gray">Categories</p>
          {GALLERY_DATA.map((section, idx) => (
            <button
              key={section.title}
              onClick={() => handleSectionChange(idx)}
              className={`mb-1 w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium transition ${
                activeSection === idx
                  ? 'bg-brand-orange text-white'
                  : 'text-brand-dark hover:bg-gray-50'
              }`}
            >
              {section.title}
            </button>
          ))}

          <div className="mt-4 border-t border-gray-100 pt-4">
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-brand-gray">Items</p>
            {currentSection.items.map((item, idx) => (
              <button
                key={item.name}
                onClick={() => handleItemChange(idx)}
                className={`mb-1 w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                  activeItem === idx
                    ? 'bg-brand-dark text-white'
                    : 'text-brand-gray hover:bg-gray-50 hover:text-brand-dark'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Right - full screen preview with zoom/pan */}
        <div
          ref={containerRef}
          className="relative flex-1 overflow-hidden bg-gray-50"
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ cursor: scale > 1 ? (dragging ? 'grabbing' : 'grab') : 'default' }}
        >
          <AnimatePresence mode="wait">
            <m.img
              key={`${activeSection}-${activeItem}`}
              src={currentItem.image}
              alt={currentItem.name}
              className="absolute inset-0 h-full w-full object-contain select-none"
              draggable={false}
              style={{
                transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                transformOrigin: 'center center',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          </AnimatePresence>

          {/* Item label */}
          <div className="absolute bottom-4 left-4 rounded-lg bg-black/70 px-4 py-2 backdrop-blur-sm">
            <p className="text-sm font-medium text-white">{currentItem.name}</p>
            <p className="text-xs text-white/70">{currentSection.title}</p>
          </div>

          {/* Zoom controls */}
          <div className="absolute bottom-4 right-4 flex items-center gap-1 rounded-lg bg-black/70 p-1 backdrop-blur-sm">
            <button
              onClick={zoomOut}
              className="flex h-8 w-8 items-center justify-center rounded text-white transition hover:bg-white/20"
              aria-label="Zoom out"
            >
              −
            </button>
            <span className="min-w-[3rem] text-center text-xs text-white">{Math.round(scale * 100)}%</span>
            <button
              onClick={zoomIn}
              className="flex h-8 w-8 items-center justify-center rounded text-white transition hover:bg-white/20"
              aria-label="Zoom in"
            >
              +
            </button>
            <button
              onClick={resetZoom}
              className="flex h-8 items-center justify-center rounded px-2 text-xs text-white transition hover:bg-white/20"
              aria-label="Reset zoom"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </m.div>
  );
}
