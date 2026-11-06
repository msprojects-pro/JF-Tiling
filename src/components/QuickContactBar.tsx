import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export default function QuickContactBar() {
  return (
    <div className="fixed bottom-5 right-5 z-40">
      <a
        href={BUSINESS_INFO.phoneHref}
        className="group flex items-center gap-2.5 px-4 py-2.5 bg-[#202725] hover:bg-[#2a3330] text-white border border-[#B99A68]/40 hover:border-[#B99A68] rounded-full shadow-2xl transition-all duration-200 active:scale-95"
        aria-label="Call Josh at J.F Tiling & Bathrooms"
      >
        <span className="w-8 h-8 rounded-full bg-[#B99A68] text-[#202725] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
          <Phone className="w-4 h-4 fill-current" />
        </span>
        <div className="flex flex-col text-left pr-1">
          <span className="text-xs font-bold text-white tracking-wide leading-tight">
            Call Josh
          </span>
          <span className="text-[10px] text-[#B99A68] font-mono tabular-nums leading-tight">
            {BUSINESS_INFO.phone}
          </span>
        </div>
      </a>
    </div>
  );
}
