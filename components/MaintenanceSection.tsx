'use client';

import {
  DatabaseBackup,
  ShieldCheck,
  Activity,
  Headset,
  Globe,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import { Card, CardContent } from '@/components/ui/card';
import Reveal from '@/components/Reveal';

const icons = [DatabaseBackup, ShieldCheck, Activity, Headset, Globe];

export default function MaintenanceSection() {
  const { lang } = useLanguage();
  const T = t[lang];

  return (
    <section id="maintenance" className="relative py-24 px-4 bg-[#0a0a0a] overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(128,0,32,0.15),transparent)] pointer-events-none"
      />
      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <Reveal className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-brand uppercase mb-4">
            {T.maintenance.label}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {T.maintenance.title}
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto text-base leading-relaxed">
            {T.maintenance.subtitle}
          </p>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {T.maintenance.items.map((item, i) => {
            const Icon = icons[i];
            const isLast = i === T.maintenance.items.length - 1;
            return (
              <Reveal
                key={item.title}
                delay={i * 80}
                className={isLast ? 'md:col-span-2' : undefined}
              >
                <Card className="group relative h-full p-7! gap-0! rounded-3xl border border-white/10 ring-0 bg-white/5 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 inline-flex items-center justify-center w-11 h-11 bg-white rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Icon size={20} className="text-black" />
                    </div>
                    <CardContent className="p-0!">
                      <h3 className="text-base font-semibold text-white mb-2 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
