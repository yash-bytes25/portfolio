import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero-section' },
    { label: 'About', href: '#about-section' },
    { label: 'Projects', href: '#projects-section' },
    { label: 'Skills', href: '#skills-section' },
    { label: 'Contact', href: '#contact-section' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0d0f12]/85 backdrop-blur-md border-b border-white/[0.06] py-3.5'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand identity */}
        <a href="#hero-section" className="flex items-center gap-2 group">
          <span className="font-sans font-medium text-sm text-white tracking-normal group-hover:text-neutral-300 transition-colors">
            {PERSONAL_INFO.name}
          </span>
          <span className="text-xs text-neutral-500 font-normal">/ Portfolio</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-sans text-neutral-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* External Link */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-white/10 hover:border-white/25 bg-white/[0.02] text-xs font-sans text-neutral-300 hover:text-white transition-all"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-neutral-400 hover:text-white p-2"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0f12]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-sans text-neutral-300 hover:text-white py-1 border-b border-white/[0.04]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white py-1"
              >
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
