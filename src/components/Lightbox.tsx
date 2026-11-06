import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { GalleryProject } from '../types';

interface LightboxProps {
  project: GalleryProject | null;
  projects: GalleryProject[];
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

export default function Lightbox({ project, projects, onClose, onNavigate }: LightboxProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate('prev');
      if (e.key === 'ArrowRight') onNavigate('next');
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose, onNavigate]);

  if (!project) return null;

  const currentIndex = projects.findIndex((p) => p.id === project.id);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 lg:p-8"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative max-w-5xl w-full max-h-[90vh] bg-[#202725] rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with project category & close button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#202725]/80">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B99A68]">
              {project.categoryLabel}
            </span>
            <span className="text-white/30" aria-hidden="true">·</span>
            <span className="text-xs text-[#D8D5CE] flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#B99A68]" />
              Sheffield Project
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[#D8D5CE] font-mono tabular-nums">
              {currentIndex + 1} / {projects.length}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main image viewer with navigation arrows */}
        <div className="relative flex-1 bg-black/40 min-h-[300px] sm:min-h-[440px] flex items-center justify-center overflow-hidden">
          <img
            src={project.image}
            alt={project.alt}
            className="w-full h-full max-h-[65vh] object-contain mx-auto"
            referrerPolicy="no-referrer"
          />

          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate('prev');
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#202725]/80 text-white hover:bg-[#B99A68] hover:text-[#202725] border border-white/10 transition-all focus:outline-none shadow-lg"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate('next');
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#202725]/80 text-white hover:bg-[#B99A68] hover:text-[#202725] border border-white/10 transition-all focus:outline-none shadow-lg"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption & details bar */}
        <div className="px-6 py-4 bg-[#202725] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h4 className="font-serif text-lg sm:text-xl font-medium text-white mb-1">
              {project.title}
            </h4>
            <p className="text-xs sm:text-sm text-[#D8D5CE]">
              {project.description}
            </p>
          </div>

          <a
            href="#contact"
            onClick={onClose}
            className="inline-flex items-center justify-center px-4 py-2 bg-[#B99A68] hover:bg-[#A68653] text-[#202725] text-xs font-semibold rounded whitespace-nowrap transition-colors"
          >
            Enquire About Similar Project
          </a>
        </div>
      </div>
    </div>
  );
}
