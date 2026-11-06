import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, Sparkles } from 'lucide-react';
import { GALLERY_PROJECTS } from '../data/content';
import { GalleryProject } from '../types';

interface GalleryProps {
  onOpenLightbox: (project: GalleryProject) => void;
}

export default function Gallery({ onOpenLightbox }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'Renovation' | 'Tiling' | 'Shower' | 'Flooring'>('all');

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'Renovation', label: 'Bathroom Renovations' },
    { key: 'Shower', label: 'Wet Rooms & Showers' },
    { key: 'Tiling', label: 'Wall & Floor Tiling' },
  ] as const;

  const filteredProjects = activeFilter === 'all'
    ? GALLERY_PROJECTS
    : GALLERY_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="our-work" className="py-20 lg:py-28 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[2px] bg-[#B99A68]" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B99A68]">
                Portfolio
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#202725] mb-3 text-balance">
              Our Work
            </h2>
            <p className="text-base sm:text-lg text-[#202725]/75 leading-relaxed">
              Explore beautiful tiling and bathroom inspiration completed with precision craftsmanship.
            </p>
          </div>

          {/* Interactive Filter Tabs (functional buttons with click handlers) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#D8D5CE]/40 rounded-lg border border-[#D8D5CE]">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key as any)}
                className={`px-3.5 py-2 text-xs font-medium rounded-md transition-all whitespace-nowrap cursor-pointer ${
                  activeFilter === cat.key
                    ? 'bg-[#202725] text-white shadow-sm'
                    : 'text-[#202725]/80 hover:text-[#202725] hover:bg-white/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              // Asymmetric span for marquee project
              const isMarquee = idx === 0 && activeFilter === 'all';

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => onOpenLightbox(project)}
                  className={`group relative rounded-xl overflow-hidden bg-neutral-200 border border-[#D8D5CE] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 ${
                    isMarquee ? 'sm:col-span-2 lg:col-span-2 aspect-[16/10]' : 'aspect-[4/3]'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Scrim for crisp text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#202725]/85 via-[#202725]/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 text-[11px] font-medium tracking-wide text-white bg-[#202725]/80 backdrop-blur-sm rounded border border-white/10">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Top Right Expand Icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#202725]/80 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all border border-white/10 shadow">
                    <Maximize2 className="w-4 h-4 text-[#B99A68]" />
                  </div>

                  {/* Bottom Text Details */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white transform translate-y-1 group-hover:translate-y-0 transition-transform">
                    <h3 className="font-serif text-lg sm:text-xl font-medium text-white mb-1 drop-shadow-sm">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#D8D5CE] line-clamp-2 drop-shadow-sm">
                      {project.description}
                    </p>
                    <span className="inline-block mt-2 text-[11px] font-medium text-[#B99A68] uppercase tracking-wider">
                      Click to view gallery image →
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Gallery Trust Note */}
        <div className="mt-12 text-center flex items-center justify-center gap-2 text-xs text-[#202725]/70">
          <Sparkles className="w-4 h-4 text-[#B99A68]" />
          <span>All gallery photography reflects genuine finished installations with premium materials.</span>
        </div>
      </div>
    </section>
  );
}
