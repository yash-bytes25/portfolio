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
    { label: 'Work', href: '#projects-section' },
    { label: 'About', href: '#about-section' },
    { label: 'Journey', href: '#journey-section' },
    { label: 'Skills', href: '#skills-section' },
    { label: 'Contact', href: '#contact-section' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060608]/85 backdrop-blur-md border-b border-white/[0.08] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand identity */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded border border-white/20 flex items-center justify-center bg-white/[0.03] group-hover:border-white/50 transition-colors">
            <span className="font-mono text-xs font-semibold text-white">Y</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-wider uppercase text-white group-hover:text-chrome transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="font-mono text-[10px] text-zinc-400 tracking-tight">
              CSE • 2ND YR // SRKR
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact-section"
            className="flex items-center gap-2 px-4 py-2 rounded-sm border border-white/20 bg-white/[0.02] hover:bg-white/10 hover:border-white/40 text-xs font-mono uppercase tracking-wider text-zinc-200 hover:text-white transition-all duration-200"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-zinc-300 hover:text-white p-2"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#060608]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono uppercase tracking-widest text-zinc-300 hover:text-white py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact-section"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-between px-4 py-3 rounded border border-white/20 bg-white/5 text-xs font-mono uppercase tracking-wider text-white"
            >
              <span>Connect with Yaswanth</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
