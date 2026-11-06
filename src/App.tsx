/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';
import QuickContactBar from './components/QuickContactBar';
import { GALLERY_PROJECTS } from './data/content';
import { GalleryProject } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Bathroom Renovations');
  const [lightboxProject, setLightboxProject] = useState<GalleryProject | null>(null);

  const handleQuoteClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Set focus to the first input field after scrolling completes
      setTimeout(() => {
        const input = document.getElementById('name');
        if (input) input.focus();
      }, 500);
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const input = document.getElementById('name');
        if (input) input.focus();
      }, 500);
    }
  };

  const handleLightboxNavigate = (direction: 'prev' | 'next') => {
    if (!lightboxProject) return;
    const currentIndex = GALLERY_PROJECTS.findIndex((p) => p.id === lightboxProject.id);
    if (currentIndex === -1) return;

    if (direction === 'prev') {
      const prevIndex = (currentIndex - 1 + GALLERY_PROJECTS.length) % GALLERY_PROJECTS.length;
      setLightboxProject(GALLERY_PROJECTS[prevIndex]);
    } else {
      const nextIndex = (currentIndex + 1) % GALLERY_PROJECTS.length;
      setLightboxProject(GALLERY_PROJECTS[nextIndex]);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#202725] selection:bg-[#B99A68]/30 selection:text-[#202725]">
      {/* Sticky Navigation Header */}
      <Navbar onQuoteClick={handleQuoteClick} />

      {/* Main Page Flow */}
      <main>
        {/* 1. Hero Section */}
        <Hero onQuoteClick={handleQuoteClick} />

        {/* 2. Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* 3. Why Choose Us Section (Dark Charcoal) */}
        <WhyChooseUs />

        {/* 4. Project Gallery ("Our Work") with Lightbox */}
        <Gallery onOpenLightbox={(project) => setLightboxProject(project)} />

        {/* 5. About Section */}
        <About onQuoteClick={handleQuoteClick} />

        {/* 6. Contact / Free Quote Section */}
        <Contact selectedService={selectedService} />
      </main>

      {/* Dark Charcoal Footer */}
      <Footer />

      {/* Lightbox Modal for Gallery Exploration */}
      <Lightbox
        project={lightboxProject}
        projects={GALLERY_PROJECTS}
        onClose={() => setLightboxProject(null)}
        onNavigate={handleLightboxNavigate}
      />

      {/* Mobile Sticky Quick Contact Pill */}
      <QuickContactBar />
    </div>
  );
}
