'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import Reveal from '@/components/Reveal';

export default function BookingSection() {
  const { lang } = useLanguage();
  const T = t[lang];
  const B = T.booking;
  const [loaded, setLoaded] = useState(false);

  return (
    <section id="booking" className="py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Header */}
        <Reveal>
          <span className="inline-block text-xs font-semibold tracking-widest text-brand uppercase mb-4">
            {B.label}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-3">
            {B.title}
          </h2>
          <p className="text-neutral-500 text-sm md:text-base mb-8 max-w-xl mx-auto">
            {B.subtitle}
          </p>
        </Reveal>
      </div>

      {/* Cal.com live embed */}
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl border border-neutral-100 bg-white overflow-hidden shadow-sm shadow-black/5">
          {!loaded && (
            <div
              aria-hidden
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white animate-pulse"
            >
              <div className="w-10 h-10 rounded-full border-2 border-neutral-200 border-t-brand animate-spin" />
              <div className="h-3 w-32 rounded-full bg-neutral-100" />
            </div>
          )}
          <iframe
            src="https://cal.com/achraf-ghazal-avuvqs/30min?embed=true&theme=light&layout=month_view"
            width="100%"
            height="560"
            style={{ border: 'none' }}
            title="Book a 30-min meeting with LOVAG."
            className="w-full relative"
            onLoad={() => setLoaded(true)}
          />
        </div>
      </div>
    </section>
  );
}
