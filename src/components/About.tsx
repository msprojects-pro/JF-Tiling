import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO, IMAGES } from '../data/content';

interface AboutProps {
  onQuoteClick: () => void;
}

export default function About({ onQuoteClick }: AboutProps) {
  const craftPoints = [
    'Clean, dust-controlled workspace maintained daily',
    'Laser-guided leveling for razor-sharp tile alignment',
    'Direct communication with your local Sheffield tradesman',
    'Full waterproofing tanking systems for total peace of mind',
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#D8D5CE]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Photograph */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#D8D5CE] aspect-[4/3] bg-neutral-200">
              <img
                src={IMAGES.aboutProject}
                alt="Professional bathroom tiling project with walk-in shower and freestanding bathtub in Sheffield"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#202725]/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-[#D8D5CE] shadow-md flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#B99A68] block">
                    Sheffield & Region
                  </span>
                  <span className="font-serif text-sm sm:text-base font-medium text-[#202725]">
                    Local & Trustworthy Tiling Craft
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#202725] text-[#B99A68] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Subtle background frame */}
            <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-[#B99A68]/30 rounded-2xl -z-10 pointer-events-none" />
          </motion.div>

          {/* Right Column: About Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2"
          >
            {/* Small label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[2px] bg-[#B99A68]" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B99A68]">
                About J.F Tiling & Bathrooms
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#202725] mb-6 text-balance">
              Bringing Your Bathroom Vision To Life.
            </h2>

            {/* Paragraph (Exact requested copy) */}
            <p className="text-base sm:text-lg text-[#202725]/80 leading-relaxed mb-6">
              At J.F Tiling & Bathrooms, the focus is on quality tiling, beautiful bathroom spaces and
              carefully finished projects. Whether you're updating your bathroom or planning a
              completely new look, get in touch to discuss your project.
            </p>

            {/* Craft points */}
            <div className="space-y-3 mb-8 pt-4 border-t border-[#D8D5CE]/60">
              {craftPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B99A68] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#202725]/85">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onQuoteClick}
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#B99A68] hover:bg-[#A68653] text-[#202725] font-semibold text-sm rounded shadow-sm hover:shadow transition-all duration-200 active:scale-[0.99]"
              >
                <span>Let's Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#F7F5F0] hover:bg-[#ECEAE4] text-[#202725] text-sm font-medium rounded border border-[#D8D5CE] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#B99A68]" />
                <span className="tabular-nums">{BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
