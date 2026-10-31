import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Mail, Github, Linkedin, Copy, Check, Send, ArrowUpRight } from 'lucide-react';

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
      className="relative min-h-[85vh] w-full py-28 px-6 md:px-16 pointer-events-auto flex flex-col justify-between"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-white/[0.08]">
          <span className="text-xs font-sans text-neutral-400 font-medium tracking-wide block mb-2">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-3">
            Contact
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-xl font-normal leading-relaxed">
            I am always open to discussing software engineering opportunities, internships, hackathon collaborations, or technical projects.
          </p>
        </div>

        {/* Main Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Email Action Card */}
          <div className="lg:col-span-8 bg-[#13161c] border border-white/[0.08] rounded-xl p-8 md:p-12 flex flex-col justify-between shadow-2xl">
            <div>
              <h3 className="text-2xl sm:text-3xl font-medium text-white mb-4">
                Have an opportunity or an interesting project?
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 mb-8 max-w-lg leading-relaxed font-normal">
                Feel free to reach out via email. I will get back to you as soon as possible.
              </p>

              {/* Email Copier */}
              <div className="p-4 rounded-lg bg-white/[0.03] border border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                  <span className="text-sm sm:text-base text-white font-mono">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 hover:border-white/20 bg-white/[0.02] text-xs text-neutral-300 hover:text-white transition-all w-full sm:w-auto justify-center"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/[0.06]">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-neutral-950 hover:bg-neutral-200 text-xs font-medium transition-all"
              >
                <span>Compose Email</span>
                <Send className="w-3.5 h-3.5" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-md border border-white/10 hover:border-white/25 bg-white/[0.02] text-xs text-neutral-300 hover:text-white transition-all"
              >
                <Github className="w-4 h-4 text-neutral-400" />
                <span>GitHub Profile</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-md border border-white/10 hover:border-white/25 bg-white/[0.02] text-xs text-neutral-300 hover:text-white transition-all"
              >
                <Linkedin className="w-4 h-4 text-neutral-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Context Card */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <div className="bg-[#13161c] border border-white/[0.08] rounded-xl p-6 space-y-4 text-xs text-neutral-400 shadow-xl">
              <h4 className="text-sm font-medium text-white">
                Details
              </h4>
              <div>
                <span className="block text-neutral-500 text-[11px]">Name</span>
                <span className="text-neutral-200">{PERSONAL_INFO.name}</span>
              </div>
              <div>
                <span className="block text-neutral-500 text-[11px]">Academic Institution</span>
                <span className="text-neutral-200">{PERSONAL_INFO.college}</span>
              </div>
              <div>
                <span className="block text-neutral-500 text-[11px]">Standing</span>
                <span className="text-neutral-200">{PERSONAL_INFO.degree} • {PERSONAL_INFO.academicYear}</span>
              </div>
              <div>
                <span className="block text-neutral-500 text-[11px]">Location</span>
                <span className="text-neutral-200">{PERSONAL_INFO.location}</span>
              </div>
            </div>

            <div className="bg-[#13161c] border border-white/[0.08] rounded-xl p-6 shadow-xl">
              <h4 className="text-sm font-medium text-white mb-2">
                Resume
              </h4>
              <p className="text-xs text-neutral-400 mb-4 leading-relaxed font-normal">
                A formal summary of academic coursework, projects, hackathons, and technical experience.
              </p>
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Resume%20Request%20-%20Yaswanth`}
                className="inline-flex items-center justify-between w-full px-3 py-2 rounded-md border border-white/10 hover:border-white/25 bg-white/[0.02] text-xs text-neutral-300 hover:text-white transition-all"
              >
                <span>Request Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Minimal Footer */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            Yaswanth • B.Tech Computer Science and Engineering
          </div>
          <div>
            Built with React, Three.js & Tailwind CSS
          </div>
        </div>
      </div>
    </section>
  );
};
