'use client';

import Image from 'next/image';
import { Code2, Zap, Globe } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import Reveal from '@/components/Reveal';

export default function AboutSection() {
  const { lang } = useLanguage();
  const T = t[lang];
  const A = T.about;

  return (
    <section id="about" className="relative py-24 px-4 bg-[#0a0a0a] overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(128,0,32,0.15),transparent)] pointer-events-none"
      />
      <div className="relative max-w-5xl mx-auto">
        {/* Section label */}
        <Reveal className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-brand uppercase mb-4">
            {A.label}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            {A.title}
          </h2>
        </Reveal>

        {/* Profile card */}
        <Reveal delay={100} className="relative rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 overflow-hidden">
          {/* Subtle background */}
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_100%,rgba(128,0,32,0.1),transparent)] pointer-events-none"
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* Photo placeholder */}
            <div className="shrink-0 flex flex-col items-center gap-4">
              <div className="relative w-36 h-36 rounded-full overflow-hidden ring-4 ring-white/10">
                <Image
                  src="/Achraf.jpg"
                  alt="Achraf Ghazal"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Social / link buttons */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                <a
                  href="https://www.linkedin.com/in/achraf-ghazal-16a51333a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-xs font-semibold text-white/70 border border-white/15 rounded-full px-4 py-2 hover:border-[#0A66C2] hover:text-[#0A66C2] transition-all duration-200"
                >
                  {/* LinkedIn SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-3.5 h-3.5 group-hover:scale-110 transition-transform"
                    aria-hidden
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  {A.linkedin}
                </a>

                <a
                  href="https://github.com/Ghazalachraf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-xs font-semibold text-white/70 border border-white/15 rounded-full px-4 py-2 hover:border-white hover:text-white transition-all duration-200"
                >
                  <SiGithub className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  {A.github}
                </a>

                <a
                  href="https://achrafghazal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-xs font-semibold text-white/70 border border-white/15 rounded-full px-4 py-2 hover:border-white hover:text-white transition-all duration-200"
                >
                  <Globe size={14} className="group-hover:scale-110 transition-transform" />
                  {A.portfolio}
                </a>
              </div>
            </div>

            {/* Text content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-bold text-white tracking-tight mb-1">
                {A.name}
              </h3>
              <p className="text-sm font-medium text-neutral-400 mb-6">
                {A.role}
              </p>

              <p className="text-neutral-300 leading-relaxed text-base md:text-lg max-w-lg">
                {A.bio}
              </p>

              {/* Skill chips */}
              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-2">
                {A.skills.map((label, i) => {
                  const Icon = [Code2, Zap][i % 2];
                  return (
                    <span
                      key={label}
                      className="inline-flex items-center gap-2 text-xs font-medium bg-white/5 border border-white/10 text-neutral-300 rounded-full px-4 py-2"
                    >
                      <Icon size={12} />
                      {label}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
