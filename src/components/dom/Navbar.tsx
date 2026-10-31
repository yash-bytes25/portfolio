import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { num: '01', label: 'INIT', href: '#hero-section' },
    { num: '02', label: 'LOG', href: '#journey-section' },
    { num: '03', label: 'PROJECTS', href: '#projects-section' },
    { num: '04', label: 'ARSENAL', href: '#skills-section' },
    { num: '05', label: 'TRANSMIT', href: '#contact-section' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#101214]/92 backdrop-blur-md border-b border-lab py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand & Technical Lab Node */}
        <a href="#hero-section" className="flex items-center gap-3 group">
          <div className="w-8 h-8 border border-lab bg-surface-dark flex items-center justify-center group-hover:border-signal-orange transition-colors">
            <span className="font-mono text-xs font-semibold text-warm-white group-hover:text-signal-orange transition-colors">
              Y
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-sm tracking-wider uppercase text-warm-white">
                {PERSONAL_INFO.name}
              </span>
              <span className="inline-block w-1.5 h-1.5 bg-signal-orange animate-pulse" />
            </div>
            <span className="font-mono text-[10px] text-muted-steel tracking-wider">
              ENG.LAB // 2ND YR CSE
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex items-center gap-1.5 text-xs font-mono tracking-widest text-muted-steel hover:text-warm-white transition-colors"
            >
              <span className="text-signal-orange opacity-70 group-hover:opacity-100 text-[10px]">
                {link.num}
              </span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Action Button & Telemetry */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 border border-lab-subtle bg-surface-dark font-mono text-[10px] text-muted-steel">
            <span className="text-signal-orange font-bold">LOC:</span>
            <span>SRKR // 16.54°N 81.52°E</span>
          </div>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-1.5 border border-lab bg-surface-dark hover:border-signal-orange text-xs font-mono uppercase tracking-wider text-warm-white hover:text-signal-orange transition-all"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-muted-steel group-hover:text-signal-orange" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-warm-white hover:text-signal-orange p-1.5 border border-lab"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-deep-black/95 backdrop-blur-xl border-b border-lab px-6 py-6 transition-all">
          <div className="font-mono text-[11px] text-signal-orange mb-4 uppercase tracking-widest">
            // LAB DIRECTORY
          </div>
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-muted-steel hover:text-warm-white py-2 border-b border-lab-subtle"
              >
                <span>{link.label}</span>
                <span className="text-signal-orange">{link.num}</span>
              </a>
            ))}
            <div className="pt-3 flex gap-3">
              <a
                href="#contact-section"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 py-2 text-center border border-signal-orange text-signal-orange text-xs font-mono uppercase tracking-wider"
              >
                Transmit
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 text-center border border-lab text-warm-white text-xs font-mono uppercase tracking-wider"
              >
                GitHub
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
