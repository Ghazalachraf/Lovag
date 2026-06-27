'use client';

import { Mail, MapPin } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import Logo from '@/components/Logo';

export default function Footer() {
  const { lang } = useLanguage();
  const T = t[lang];

  const navLinks = [
    { label: T.nav.services, href: '#services' },
    { label: T.maintenance.label, href: '#maintenance' },
    { label: T.projects.label, href: '#projects' },
    { label: T.nav.about, href: '#about' },
    { label: T.faq.label, href: '#faq' },
  ];

  return (
    <footer className="relative bg-[#0a0a0a] text-white overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(128,0,32,0.15),transparent)] pointer-events-none"
      />
      <div className="relative max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-12">
          {/* Brand column */}
          <div>
            <a href="#" className="inline-block hover:opacity-75 transition-opacity">
              <Logo dark />
            </a>
            <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xs">
              {T.footer.description}
            </p>

            <div className="mt-6 flex items-center gap-2">
              <a
                href="https://www.linkedin.com/company/lovag"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LOVAG on LinkedIn"
                className="group inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-white/70 hover:border-white hover:text-white transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 group-hover:scale-110 transition-transform"
                  aria-hidden
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/lovag.agency"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LOVAG on Instagram"
                className="group inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-white/70 hover:border-white hover:text-white transition-all duration-200"
              >
                <SiInstagram size={15} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-white/50 uppercase mb-4">
              {T.footer.navLabel}
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-white/50 uppercase mb-4">
              {T.footer.contactLabel}
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:contact@lovag.agency"
                  className="group flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors duration-200"
                >
                  <Mail size={14} className="text-white/50 group-hover:text-white transition-colors duration-200" />
                  contact@lovag.agency
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/80">
                <MapPin size={14} className="text-white/50" />
                {T.footer.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">{T.footer.rights}</p>
          <p className="text-xs text-white/50 font-medium">{T.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
