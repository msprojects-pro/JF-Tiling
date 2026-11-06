import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface NavbarProps {
  onQuoteClick: () => void;
}

export default function Navbar({ onQuoteClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#our-work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#202725]/95 backdrop-blur-md shadow-md py-3.5 border-b border-[#B99A68]/20'
          : 'bg-[#202725]/85 backdrop-blur-sm py-5 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Typographic Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex flex-col focus:outline-none"
            aria-label="J.F Tiling & Bathrooms Home"
          >
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[#B99A68] transition-colors leading-none">
              J.F
            </span>
            <span className="text-[10px] sm:text-xs font-medium tracking-[0.22em] text-[#B99A68] uppercase mt-1 leading-tight">
              Tiling & Bathrooms
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#D8D5CE] hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#B99A68] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Zone */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="flex items-center gap-2 text-xs lg:text-sm font-medium text-[#D8D5CE] hover:text-[#B99A68] transition-colors py-2 px-1"
              title="Call J.F Tiling"
            >
              <Phone className="w-3.5 h-3.5 text-[#B99A68]" />
              <span className="tabular-nums">{BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={onQuoteClick}
              className="px-5 py-2.5 text-xs lg:text-sm font-semibold tracking-wide text-[#202725] bg-[#B99A68] hover:bg-[#A68653] transition-colors rounded shadow-sm hover:shadow active:scale-[0.99] whitespace-nowrap"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onQuoteClick}
              className="px-3 py-1.5 text-xs font-semibold text-[#202725] bg-[#B99A68] rounded"
            >
              Free Quote
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#D8D5CE] hover:text-white focus:outline-none focus:ring-1 focus:ring-[#B99A68] rounded"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#202725] border-b border-[#B99A68]/20 px-4 pt-4 pb-6 transition-all duration-200">
          <div className="flex flex-col space-y-3 pb-4 border-b border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-[#D8D5CE] hover:text-white hover:text-[#B99A68] py-1.5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-[#D8D5CE] py-1">
              <span>Sheffield & Surrounding Areas</span>
              <span className="text-[#B99A68] font-medium">Mon - Sat</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-white/5 hover:bg-white/10 text-white rounded text-xs font-medium border border-white/10 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#B99A68]" />
                <span>Call Us</span>
              </a>
              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-emerald-300 rounded text-xs font-medium border border-[#25D366]/30 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onQuoteClick();
              }}
              className="w-full mt-1 py-3 text-center text-sm font-semibold text-[#202725] bg-[#B99A68] hover:bg-[#A68653] transition-colors rounded flex items-center justify-center gap-2 shadow"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
