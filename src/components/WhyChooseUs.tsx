import { motion } from 'motion/react';
import { Ruler, Sparkles, Briefcase, Smile } from 'lucide-react';
import { BENEFITS } from '../data/content';

export default function WhyChooseUs() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Ruler':
        return <Ruler className="w-6 h-6 text-[#B99A68]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#B99A68]" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#B99A68]" />;
      case 'Smile':
      default:
        return <Smile className="w-6 h-6 text-[#B99A68]" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#202725] text-white relative overflow-hidden">
      {/* Subtle texture accent */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[2px] bg-[#B99A68]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B99A68]">
              Our Standards
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4 text-balance">
            Quality Is In The Details.
          </h2>
          <p className="text-base sm:text-lg text-[#D8D5CE] leading-relaxed">
            Every project deserves careful attention, quality finishes and a professional approach.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#B99A68]/50 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#B99A68]/15 border border-[#B99A68]/30 flex items-center justify-center mb-6">
                  {getIcon(benefit.iconName)}
                </div>
                <h3 className="font-serif text-xl font-medium text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[#D8D5CE] leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-[#B99A68] font-mono">
                <span>0{index + 1}</span>
                <span className="tracking-widest uppercase text-[10px]">Standard</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sheffield local craftsman note */}
        <div className="mt-16 pt-10 border-t border-white/10 text-center max-w-2xl mx-auto">
          <p className="text-sm text-[#D8D5CE]/80 leading-relaxed">
            Direct communication from initial quote to final silicone bead. No subcontractors,
            no cut corners — just reliable craftsmanship delivered cleanly into your home.
          </p>
        </div>
      </div>
    </section>
  );
}
