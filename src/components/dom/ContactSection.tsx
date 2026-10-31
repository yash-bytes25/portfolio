import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Mail, Github, Linkedin, FileText, ArrowUpRight, Copy, Check, Send, Terminal } from 'lucide-react';

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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-lab pb-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-signal-orange font-mono text-xs font-bold">[05]</span>
              <span className="font-mono text-xs uppercase tracking-widest text-muted-steel">
                // TRANSMISSION & CONNECTION
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase text-warm-white">
              Initiate <span className="text-signal-orange">Connection</span>
            </h2>
          </div>
          <div className="max-w-md p-3.5 border border-lab bg-surface-dark/85 backdrop-blur-md">
            <p className="text-xs sm:text-sm font-sans text-muted-steel leading-relaxed">
              Open to technical conversations, ambitious software engineering internships, hackathon team formations, and systems collaborations.
            </p>
          </div>
        </div>

        {/* Transmission Terminal Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Main Transmission Card */}
          <div className="lg:col-span-8 lab-panel tech-corners p-8 md:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-lab mb-8">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-signal-orange animate-pulse" />
                  <span className="font-mono text-xs text-warm-white uppercase tracking-widest">
                    PRIMARY TRANSMISSION CHANNEL ACTIVE
                  </span>
                </div>
                <span className="font-mono text-xs text-muted-steel">
                  {PERSONAL_INFO.timezone}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-warm-white mb-4 leading-tight">
                Let&rsquo;s engineer reliable, high-impact systems together.
              </h3>

              <p className="text-sm font-sans text-muted-steel leading-relaxed mb-8 max-w-xl">
                Whether you want to discuss deterministic rule engines, agricultural supply chain platforms, computer science fundamentals, or explore an engineering internship opportunity, my inbox is always open.
              </p>

              {/* Interactive Email Bar */}
              <div className="p-4 border border-lab bg-surface-dark flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-signal-orange shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-warm-white tracking-wide">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-2 px-3 py-1.5 border border-lab hover:border-signal-orange bg-surface-raised/60 text-xs font-mono text-warm-white hover:text-signal-orange transition-all w-full sm:w-auto justify-center"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-signal-orange" />
                      <span>Copied Address</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-muted-steel" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-lab-subtle">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2.5 px-6 py-3 border border-signal-orange bg-signal-orange text-deep-black hover:bg-signal-orange/90 font-mono text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                <span>Compose Direct Email</span>
                <Send className="w-3.5 h-3.5" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 border border-lab bg-surface-dark hover:border-muted-steel text-warm-white font-mono text-xs uppercase tracking-wider transition-colors"
              >
                <Github className="w-4 h-4 text-muted-steel" />
                <span>GitHub Profile</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 border border-lab bg-surface-dark hover:border-muted-steel text-warm-white font-mono text-xs uppercase tracking-wider transition-colors"
              >
                <Linkedin className="w-4 h-4 text-muted-steel" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Side Telemetry & Institutional Identity */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="lab-panel p-6 border-lab flex-1">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-lab">
                <Terminal className="w-3.5 h-3.5 text-signal-orange" />
                <span className="font-mono text-xs uppercase tracking-widest text-warm-white">
                  IDENTITY & LOCATION
                </span>
              </div>
              <div className="space-y-4 text-xs font-mono">
                <div>
                  <span className="text-muted-steel block text-[10px] uppercase">CANDIDATE</span>
                  <span className="text-warm-white font-semibold">{PERSONAL_INFO.name}</span>
                </div>
                <div>
                  <span className="text-muted-steel block text-[10px] uppercase">INSTITUTION</span>
                  <span className="text-warm-white">{PERSONAL_INFO.college}</span>
                </div>
                <div>
                  <span className="text-muted-steel block text-[10px] uppercase">PROGRAM & STANDING</span>
                  <span className="text-warm-white">{PERSONAL_INFO.degree}</span>
                  <span className="block text-signal-orange">{PERSONAL_INFO.academicYear} (CGPA: {PERSONAL_INFO.cgpa})</span>
                </div>
                <div>
                  <span className="text-muted-steel block text-[10px] uppercase">GEOGRAPHIC BASE</span>
                  <span className="text-warm-white">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            <div className="lab-panel p-6 border-lab">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-warm-white">
                  CURRICULUM VITAE
                </span>
                <FileText className="w-4 h-4 text-signal-orange" />
              </div>
              <p className="text-xs font-sans text-muted-steel leading-relaxed mb-4">
                Structured technical resume outlining projects, coursework, hackathons, and systems experience.
              </p>
              <a
                href="#contact-section"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Resume document available upon request via direct transmission: " + PERSONAL_INFO.email);
                }}
                className="inline-flex items-center justify-between w-full px-4 py-2 border border-lab hover:border-signal-orange bg-surface-dark font-mono text-xs text-warm-white hover:text-signal-orange transition-all"
              >
                <span>Request Formal Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Technical Colophon & Footer */}
        <div className="pt-8 border-t border-lab flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-muted-steel">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-signal-orange" />
            <span>INTERACTIVE ENGINEERING LAB // YASWANTH</span>
          </div>
          <div>
            <span>SYSTEM REVISION: 2.0 // THREE.JS + R3F + GSAP</span>
          </div>
        </div>
      </div>
    </section>
  );
};
