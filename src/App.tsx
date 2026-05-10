import { lazy, Suspense } from 'react';
import MotionProvider from './components/MotionProvider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Projects = lazy(() => import('./components/Projects'));
const Furniture = lazy(() => import('./components/Furniture'));
const CTA = lazy(() => import('./components/CTA'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <MotionProvider>
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <About />
        <Services />
        <Projects />
        <Furniture />
        <CTA />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </Suspense>
    </MotionProvider>
  );
}
