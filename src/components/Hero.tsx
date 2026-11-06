import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_INFO, IMAGES } from '../data/content';

interface HeroProps {
  onQuoteClick: () => void;
}

export default function Hero({ onQuoteClick }: HeroProps) {
  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-[#F7F5F0] overflow-hidden">
      {/* Background Architectural Accent lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#202725_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Introductory Label (No pill, elegant editorial styling) */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[2px] bg-[#B99A68]" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#B99A68]">
                Quality Tiling & Bathroom Services
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#202725] leading-[1.12] mb-6 text-balance">
              Beautiful Bathrooms.
              <span className="block italic font-normal text-[#202725]/90">
                Expertly Finished.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#202725]/80 leading-relaxed max-w-xl mb-8">
              Transforming bathrooms with quality tiling, attention to detail and professional
              craftsmanship in Sheffield and surrounding areas.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onQuoteClick}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#B99A68] hover:bg-[#A68653] text-[#202725] font-semibold text-sm rounded shadow-sm hover:shadow transition-all duration-200 active:scale-[0.99]"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#202725] hover:bg-[#202725]/90 text-white font-medium text-sm rounded transition-all duration-200 border border-[#202725]/20 shadow-sm active:scale-[0.99]"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Trust Indicator (Clean unboxed typographic separators) */}
            <div className="pt-6 border-t border-[#D8D5CE]/60 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm font-medium text-[#202725]/75">
              <span>Professional Tiling</span>
              <span className="text-[#B99A68] font-bold" aria-hidden="true">·</span>
              <span>Quality Finishes</span>
              <span className="text-[#B99A68] font-bold" aria-hidden="true">·</span>
              <span>Attention to Detail</span>
            </div>

            {/* Sheffield Location Marker */}
            <div className="mt-4 flex items-center gap-2 text-xs text-[#202725]/60">
              <MapPin className="w-3.5 h-3.5 text-[#B99A68]" />
              <span>Based in Sheffield, South Yorkshire · Available for local surveys</span>
            </div>
          </motion.div>

          {/* Right Column: Hero Real Photography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Photographic Container with soft shadow and champagne hairline border */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#D8D5CE] aspect-[16/11] lg:aspect-[4/3] bg-neutral-200">
              <img
                src={IMAGES.hero}
                alt="Luxury contemporary bathroom with walk-in shower, porcelain wall tiles and freestanding bathtub completed by J.F Tiling"
                className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="eager"
              />

              {/* Subtle gradient vignette for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Discrete In-Photo Overlay Note */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto bg-[#202725]/90 backdrop-blur-md text-white p-3 sm:px-4 sm:py-3 rounded-lg border border-white/10 shadow-lg max-w-sm">
                <div className="flex items-center gap-2 text-[#B99A68] text-xs font-semibold uppercase tracking-wider mb-0.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Excellence In Finish</span>
                </div>
                <p className="text-xs text-[#D8D5CE] leading-relaxed">
                  Porcelain & ceramic tiling, wet rooms, and full bathroom renovations tailored to your home.
                </p>
              </div>
            </div>

            {/* Decorative background geometry */}
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-[#B99A68]/10 rounded-2xl -z-10 blur-xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
