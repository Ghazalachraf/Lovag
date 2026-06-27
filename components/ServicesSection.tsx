'use client';

import {
  PhoneCall,
  FileText,
  Palette,
  Hammer,
  CheckCircle2,
  Rocket,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import Reveal from '@/components/Reveal';

const icons = [PhoneCall, FileText, Palette, Hammer, CheckCircle2, Rocket];

export default function ServicesSection() {
  const { lang } = useLanguage();
  const T = t[lang];

  return (
    <section id="services" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <Reveal className="text-center mb-20">
          <span className="inline-block text-xs font-semibold tracking-widest text-brand uppercase mb-4">
            {T.services.label}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">
            {T.services.title}
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto text-base leading-relaxed">
            {T.services.subtitle}
          </p>
        </Reveal>

        {/* Roadmap */}
        <div className="relative">
          {/* Connecting line */}
          <div
            aria-hidden
            className="absolute left-6 md:left-7 top-2 bottom-2 w-px bg-linear-to-b from-transparent via-neutral-200 to-transparent"
          />

          <div className="flex flex-col gap-12">
            {T.services.items.map((item, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={item.title} delay={i * 100}>
                  <div className="relative flex gap-6 md:gap-8">
                    {/* Node */}
                    <div className="relative shrink-0 flex flex-col items-center">
                      <div className="relative z-10 inline-flex items-center justify-center w-12 h-14 md:w-14 md:h-14 rounded-full bg-black ring-4 ring-white">
                        <Icon size={20} className="text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-2 pt-1">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-xs font-mono text-brand font-semibold">
                          0{i + 1}
                        </span>
                        <h3 className="text-lg md:text-xl font-semibold text-black leading-tight">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm md:text-base text-neutral-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
