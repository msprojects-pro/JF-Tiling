import { motion } from 'motion/react';
import { ArrowUpRight, Check } from 'lucide-react';
import { SERVICES } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#D8D5CE]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[2px] bg-[#B99A68]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B99A68]">
              What We Do
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#202725] mb-4 text-balance">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-[#202725]/75 leading-relaxed">
            Quality workmanship and attention to detail for your bathroom and tiling projects.
          </p>
        </div>

        {/* 5 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service: ServiceItem, index: number) => {
            // Give subtle layout variation for the 5 items
            const isWideOnDesktop = index === 3 || index === 4;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group flex flex-col bg-[#F7F5F0] rounded-xl overflow-hidden border border-[#D8D5CE] hover:border-[#B99A68]/70 hover:shadow-xl transition-all duration-300 ${
                  isWideOnDesktop ? 'lg:col-span-1' : ''
                }`}
              >
                {/* Photographic Card Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Clean numerical index badge (editorial styling) */}
                  <span className="absolute top-3.5 left-3.5 px-2.5 py-1 text-[11px] font-medium tracking-wider text-white bg-[#202725]/85 backdrop-blur-sm rounded">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#202725] mb-2.5 group-hover:text-[#202725] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#202725]/75 leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2 mb-6 pt-4 border-t border-[#D8D5CE]/60">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-[#202725]/80">
                          <Check className="w-3.5 h-3.5 text-[#B99A68] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action link */}
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center justify-between w-full pt-3 text-xs font-semibold uppercase tracking-wider text-[#202725] hover:text-[#B99A68] border-t border-[#D8D5CE]/40 group/btn transition-colors focus:outline-none"
                  >
                    <span>Enquire for this service</span>
                    <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#202725] group-hover/btn:bg-[#B99A68] group-hover/btn:text-white transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Guarantee Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl bg-[#202725] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl font-normal mb-1">
              Have a custom tiling design in mind?
            </h4>
            <p className="text-sm text-[#D8D5CE]">
              We work with porcelain, marble, ceramic, natural stone, mosaic, and herringbone patterns.
            </p>
          </div>
          <button
            onClick={() => onSelectService('Custom Tiling Project')}
            className="px-6 py-3 bg-[#B99A68] hover:bg-[#A68653] text-[#202725] text-xs font-bold uppercase tracking-wider rounded whitespace-nowrap transition-colors"
          >
            Discuss Your Space
          </button>
        </div>
      </div>
    </section>
  );
}
