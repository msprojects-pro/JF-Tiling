import { ArrowUp, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#our-work' },
    { name: 'About', href: '#about' },
    { name: 'Contact & Quotes', href: '#contact' },
  ];

  return (
    <footer className="bg-[#202725] text-white pt-16 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="flex flex-col mb-4">
              <span className="font-serif text-2xl font-bold tracking-tight text-white leading-none">
                J.F
              </span>
              <span className="text-xs font-semibold tracking-[0.22em] text-[#B99A68] uppercase mt-1">
                Tiling & Bathrooms
              </span>
            </div>
            <p className="text-sm text-[#D8D5CE] max-w-sm mb-6 leading-relaxed">
              Quality Tiling & Bathroom Services based in Sheffield, United Kingdom.
              Transforming homes with meticulous attention to detail and enduring craftsmanship.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-[#D8D5CE] hover:text-white transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-[#D8D5CE] hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#B99A68]" />
                <span>Call Josh</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B99A68] block mb-4">
              Quick Navigation
            </span>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#D8D5CE] hover:text-white hover:text-[#B99A68] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B99A68] block mb-4">
              Direct Contact
            </span>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3 text-[#D8D5CE]">
                <MapPin className="w-4 h-4 text-[#B99A68] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#B99A68] shrink-0" />
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="text-[#D8D5CE] hover:text-white transition-colors tabular-nums"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#B99A68] shrink-0" />
                <a
                  href={BUSINESS_INFO.emailHref}
                  className="text-[#D8D5CE] hover:text-white transition-colors break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8D5CE]/70">
          <p>© 2026 J.F Tiling & Bathrooms. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#D8D5CE] hover:text-[#B99A68] transition-colors p-1"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
