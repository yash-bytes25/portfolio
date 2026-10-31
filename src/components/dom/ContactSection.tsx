import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Mail, Github, Linkedin, FileText, ArrowUpRight, Copy, Check, Globe, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact-section"
      className="relative min-h-screen w-full py-28 px-6 md:px-16 pointer-events-auto flex flex-col justify-between"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                05 // TRANSMISSION & NETWORK
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase text-white">
              Initiate <span className="text-chrome">Contact</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm font-sans text-zinc-400 leading-relaxed">
              Open for software engineering internships, technical collaborations, and demanding engineering challenges at ambitious technology teams.
            </p>
          </div>
        </div>

        {/* Main Transmission Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Direct Communication Terminal */}
          <div className="lg:col-span-7 chrome-card tech-bracket p-8 md:p-12 rounded-lg border border-white/[0.1] bg-[#0c0d13]/85 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-8">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-mono text-xs text-zinc-300 uppercase tracking-widest">
                    DIRECT CHANNEL READY
                  </span>
                </div>
                <span className="font-mono text-xs text-zinc-400">
                  {PERSONAL_INFO.timezone}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Let&rsquo;s engineer something impactful together.
              </h3>

              <p className="text-sm sm:text-base font-sans text-zinc-400 leading-relaxed mb-8 max-w-xl">
                Whether discussing deterministic systems, AI governance frameworks, hackathon collaborations, or engineering internship opportunities, my transmission line is always open.
              </p>

              {/* Email interaction bar */}
              <div className="p-4 rounded border border-white/[0.12] bg-white/[0.02] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-zinc-400 shrink-0" />
                  <span className="font-mono text-sm sm:text-base text-white tracking-wide">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded border border-white/20 hover:border-white/40 bg-white/[0.04] text-xs font-mono text-zinc-300 hover:text-white transition-all w-full sm:w-auto justify-center"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/[0.06]">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 px-6 py-3 rounded border border-white bg-white text-[#060608] hover:bg-zinc-200 transition-colors font-mono text-xs uppercase tracking-wider font-semibold"
              >
                <span>Compose Email</span>
                <Send className="w-3.5 h-3.5" />
              </a>

              <a
                href="#hero-section"
                className="flex items-center gap-2 px-6 py-3 rounded border border-white/20 hover:border-white/40 bg-white/[0.03] text-zinc-300 hover:text-white transition-colors font-mono text-xs uppercase tracking-wider"
              >
                <span>Back to Zenith</span>
              </a>
            </div>
          </div>

          {/* Social Profiles & Resume Links */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="chrome-card p-6 rounded-lg border border-white/[0.08] hover:border-white/25 transition-all group flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded border border-white/10 bg-white/[0.03] flex items-center justify-center group-hover:border-white/30 transition-colors">
                  <Github className="w-5 h-5 text-zinc-300 group-hover:text-white" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block">
                    CODE REPOSITORY
                  </span>
                  <h4 className="font-display text-lg font-bold text-white group-hover:text-chrome transition-colors">
                    GitHub Profile
                  </h4>
                  <span className="font-mono text-xs text-zinc-400">
                    {PERSONAL_INFO.github.replace('https://github.com/', '@')}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="chrome-card p-6 rounded-lg border border-white/[0.08] hover:border-white/25 transition-all group flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded border border-white/10 bg-white/[0.03] flex items-center justify-center group-hover:border-white/30 transition-colors">
                  <Linkedin className="w-5 h-5 text-zinc-300 group-hover:text-white" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block">
                    PROFESSIONAL NETWORK
                  </span>
                  <h4 className="font-display text-lg font-bold text-white group-hover:text-chrome transition-colors">
                    LinkedIn Network
                  </h4>
                  <span className="font-mono text-xs text-zinc-400">
                    {PERSONAL_INFO.linkedin.replace('https://linkedin.com/', '')}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* Resume Dossier Card */}
            <div className="chrome-card p-6 rounded-lg border border-white/[0.08] hover:border-white/25 transition-all group flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded border border-white/10 bg-white/[0.03] flex items-center justify-center group-hover:border-white/30 transition-colors">
                  <FileText className="w-5 h-5 text-zinc-300 group-hover:text-white" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block">
                    ENGINEERING DOSSIER
                  </span>
                  <h4 className="font-display text-lg font-bold text-white group-hover:text-chrome transition-colors">
                    Curriculum Vitae
                  </h4>
                  <span className="font-mono text-xs text-zinc-400">
                    BTech CSE • 2nd Year (SRKR)
                  </span>
                </div>
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Requesting%20Yaswanth%27s%20Resume`}
                className="px-3.5 py-1.5 rounded border border-white/20 hover:border-white/40 bg-white/[0.04] text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white transition-colors"
              >
                Request
              </a>
            </div>

            {/* Location & Status Info */}
            <div className="p-6 rounded border border-white/[0.06] bg-black/40 text-xs font-mono space-y-2">
              <div className="flex items-center justify-between text-zinc-400">
                <span className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5" />
                  <span>LOCATION</span>
                </span>
                <span className="text-zinc-200">{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center justify-between text-zinc-400">
                <span>TIMEZONE</span>
                <span className="text-zinc-200">{PERSONAL_INFO.timezone}</span>
              </div>
              <div className="flex items-center justify-between text-zinc-400">
                <span>EDUCATION</span>
                <span className="text-zinc-200">SRKR Engg College</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Minimalist Footer */}
      <footer className="w-full pt-8 pb-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
        <div className="flex items-center gap-3">
          <span className="text-zinc-400">© 2026 YASWANTH</span>
          <span className="text-zinc-400">•</span>
          <span>SRKR CSE</span>
        </div>
        <div className="flex items-center gap-6">
          <span>CHROME / CINEMATIC 3D ENGINE</span>
          <span className="hidden sm:inline text-zinc-400">•</span>
          <span className="hidden sm:inline text-zinc-400">REACT THREE FIBER & GSAP</span>
        </div>
      </footer>
    </section>
  );
};
