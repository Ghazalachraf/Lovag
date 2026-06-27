'use client';

import { LayoutDashboard } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import { Badge } from '@/components/ui/badge';
import Reveal from '@/components/Reveal';

export default function PromiseSection() {
  const { lang } = useLanguage();
  const T = t[lang];
  const P = T.promise;

  return (
    <section className="relative py-24 px-4 bg-[#0a0a0a] text-white overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(128,0,32,0.15),transparent)] pointer-events-none"
      />
      <div className="relative max-w-3xl mx-auto text-center">
        <Reveal className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-8">
            <LayoutDashboard size={24} className="text-white" />
          </div>

          <span className="inline-block text-xs font-semibold tracking-widest text-brand uppercase mb-5">
            {P.label}
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
            {P.headline}
          </h2>

          <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-xl mb-8">
            {P.body}
          </p>

          <Badge
            variant="outline"
            className="h-auto bg-white/5 text-neutral-300 border-white/10 rounded-full px-4 py-2 text-xs font-semibold"
          >
            {P.badge}
          </Badge>
        </Reveal>
      </div>
    </section>
  );
}
