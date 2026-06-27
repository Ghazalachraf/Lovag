'use client';

import Image from 'next/image';
import { LayoutTemplate } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import { projects } from '@/lib/projects-data';
import { Badge } from '@/components/ui/badge';
import Reveal from '@/components/Reveal';

export default function ProjectsSection() {
  const { lang } = useLanguage();
  const T = t[lang];

  return (
    <section id="projects" className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <Reveal className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-brand uppercase mb-6">
            {T.projects.label}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4 text-black">
            {T.projects.title}
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto text-base leading-relaxed">
            {T.projects.subtitle}
          </p>
        </Reveal>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 80}>
              <a
                href={project.link ?? undefined}
                target={project.link ? '_blank' : undefined}
                rel={project.link ? 'noopener noreferrer' : undefined}
                className={`group block ${project.link ? '' : 'cursor-default'}`}
              >
                {/* Thumbnail */}
                <div className="relative aspect-16/10 rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-100">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        aria-hidden
                        className="absolute inset-0 opacity-[0.05]"
                        style={{
                          backgroundImage:
                            'linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)',
                          backgroundSize: '28px 28px',
                        }}
                      />
                      <LayoutTemplate
                        size={32}
                        className="relative z-10 text-neutral-300 group-hover:text-neutral-400 transition-colors duration-300"
                      />
                    </div>
                  )}

                  {project.status !== 'live' && (
                    <Badge
                      variant="outline"
                      className="absolute top-4 right-4 h-auto bg-white/90 backdrop-blur text-neutral-500 border-neutral-200 rounded-full px-3 py-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                      {T.projects.comingSoon}
                    </Badge>
                  )}
                </div>

                {/* Name + year */}
                <div className="flex items-center justify-between mt-4">
                  <h3 className="text-lg font-medium text-black group-hover:text-brand transition-colors duration-200">
                    {project.name}
                  </h3>
                  <span className="text-sm text-neutral-400">{project.year}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* See all projects */}
        <div className="flex justify-center mt-14">
          <span className="inline-flex items-center bg-black text-white text-sm font-semibold px-6 py-3 rounded-full cursor-default">
            {T.projects.seeAll}
          </span>
        </div>
      </div>
    </section>
  );
}
