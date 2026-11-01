import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send, FileText, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

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
        <div className="mb-16 pb-6 border-b border-white/[0.08] relative z-10">
          <span className="text-xs font-sans text-neutral-400 font-medium tracking-wide block mb-2">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-3">
            Let&rsquo;s build something meaningful.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-xl font-normal leading-relaxed">
            I&rsquo;m always interested in learning, building useful software, and connecting with people who enjoy solving challenging problems.
          </p>
        </div>

        {/* Main Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Email & Invitation Card */}
          <div className="lg:col-span-8 bg-[#13161c] border border-white/[0.08] rounded-xl p-8 sm:p-10 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-xl sm:text-2xl font-medium text-white mb-3">
                Open for collaborations & engineering opportunities
              </h3>
              <p className="text-sm text-neutral-300 mb-8 max-w-xl leading-relaxed font-normal">
                Whether you have an interesting software challenge, an internship opportunity, a hackathon project, or simply want to talk engineering—my inbox is open.
              </p>

              {/* Email Address with Copy Trigger */}
              <div className="p-4 sm:p-5 rounded-lg bg-white/[0.03] border border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-white/[0.05] flex items-center justify-center text-orange-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 block mb-0.5 font-sans">
                      Primary Email
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm sm:text-base text-white hover:text-orange-400 font-mono transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  type="button"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-md border border-white/10 hover:border-white/20 bg-white/[0.04] text-xs text-neutral-200 hover:text-white transition-all w-full sm:w-auto justify-center"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copied to Clipboard</span>
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
            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/[0.06]">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-neutral-950 hover:bg-neutral-200 text-xs font-medium transition-all"
              >
                <span>Write an Email</span>
                <Send className="w-3.5 h-3.5" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Resume%20Request%20-%20Yaswanth`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-white/10 hover:border-white/25 bg-white/[0.02] text-xs text-neutral-200 hover:text-white transition-all"
              >
                <FileText className="w-3.5 h-3.5 text-neutral-400" />
                <span>Request Resume</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-white/10 hover:border-white/25 bg-white/[0.02] text-xs text-neutral-300 hover:text-white transition-all"
              >
                <Github className="w-3.5 h-3.5 text-neutral-400" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-neutral-500" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-white/10 hover:border-white/25 bg-white/[0.02] text-xs text-neutral-300 hover:text-white transition-all"
              >
                <Linkedin className="w-3.5 h-3.5 text-neutral-400" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-neutral-500" />
              </a>
            </div>
          </div>

          {/* Details & Academic Summary */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <div className="bg-[#13161c] border border-white/[0.08] rounded-xl p-6 space-y-4 text-xs shadow-xl">
              <h4 className="text-sm font-medium text-white mb-3">
                Academic & Location
              </h4>

              <div>
                <span className="block text-neutral-500 text-[11px] mb-0.5">Institution</span>
                <span className="text-neutral-200 font-medium">{PERSONAL_INFO.college}</span>
              </div>

              <div>
                <span className="block text-neutral-500 text-[11px] mb-0.5">Degree & Year</span>
                <span className="text-neutral-200">{PERSONAL_INFO.degree}</span>
                <span className="block text-neutral-400 text-[11px] mt-0.5">{PERSONAL_INFO.academicYear} • CGPA {PERSONAL_INFO.cgpa}</span>
              </div>

              <div>
                <span className="block text-neutral-500 text-[11px] mb-0.5">Location & Timezone</span>
                <span className="text-neutral-200">{PERSONAL_INFO.location}</span>
                <span className="block text-neutral-400 text-[11px] mt-0.5">{PERSONAL_INFO.timezone}</span>
              </div>
            </div>

            <div className="bg-[#13161c] border border-white/[0.08] rounded-xl p-6 text-xs shadow-xl">
              <h4 className="text-sm font-medium text-white mb-2">
                Resume Overview
              </h4>
              <p className="text-neutral-400 mb-4 leading-relaxed font-normal">
                Includes academic coursework, projects, hackathon achievements, and verified competencies.
              </p>
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Resume%20Request%20-%20Yaswanth`}
                className="inline-flex items-center justify-between w-full px-3.5 py-2.5 rounded-md border border-white/10 hover:border-white/25 bg-white/[0.02] text-xs text-neutral-200 hover:text-white transition-all"
              >
                <span>Request Full Resume (PDF)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
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
