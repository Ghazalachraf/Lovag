'use client';

import Image from 'next/image';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';

export default function HeroSection() {
  const { lang } = useLanguage();
  const T = t[lang];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-24 overflow-hidden"
    >
      {/* Subtle radial gradient background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(128,0,32,0.08),transparent)] pointer-events-none"
      />

      {/* Founder avatar */}
      <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-md ring-2 ring-white ring-offset-2 mb-8">
        <Image
          src="/Achraf.jpg"
          alt="Achraf Ghazal"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Headline */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black max-w-4xl leading-[1.08] mb-6">
        {T.hero.headline}
      </h1>

      {/* Sub-headline */}
      <p className="text-base md:text-lg text-neutral-500 max-w-2xl leading-relaxed mb-10">
        {T.hero.subheadline}
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <a
          href="#booking"
          className="btn-shine group flex items-center gap-2 bg-black text-white font-semibold px-8 py-3.5 rounded-full hover:bg-neutral-800 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-sm shadow-lg shadow-black/10"
        >
          {T.hero.cta1}
          <ArrowRight
            size={14}
            className="group-hover:translate-x-0.5 transition-transform duration-200"
          />
        </a>
        <a
          href="#services"
          className="flex items-center gap-2 bg-white text-black font-semibold px-8 py-3.5 rounded-full border border-neutral-200 hover:border-neutral-900 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-sm"
        >
          {T.hero.cta2}
        </a>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        aria-label="Scroll down"
        className="absolute bottom-8 text-neutral-400 hover:text-black transition-colors animate-bounce"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  );
}
