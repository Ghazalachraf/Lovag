'use client';

import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Logo from '@/components/Logo';
import { useActiveSection } from '@/hooks/useActiveSection';

export default function Navbar() {
  const { lang, toggle } = useLanguage();
  const T = t[lang];
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: T.nav.services, href: '#services' },
    { label: T.nav.about, href: '#about' },
    { label: T.nav.faq, href: '#faq' },
    { label: T.nav.contact, href: '#booking' },
  ];

  const activeId = useActiveSection(links.map((link) => link.href.slice(1)));

  const handleMobileLink = () => setMobileOpen(false);

  return (
    <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[calc(100%-2rem)] max-w-3xl ${
          scrolled ? 'shadow-lg shadow-black/5' : ''
        }`}
      >
        <div className="flex items-center bg-white/90 backdrop-blur-md border border-neutral-200/80 rounded-full px-5 py-2.5 gap-4">
          {/* Logo */}
          <a href="#" className="shrink-0 hover:opacity-75 transition-opacity">
            <Logo />
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-5 mx-auto">
            {links.map((link) => {
              const isActive = activeId === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors duration-200 font-medium ${
                    isActive ? 'text-brand' : 'text-neutral-500 hover:text-brand'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={toggle}
              aria-label="Toggle language"
              className="hidden md:flex items-center text-xs font-semibold text-neutral-500 hover:text-black transition-colors duration-200 border border-neutral-200 rounded-full px-3 py-1 hover:border-neutral-400"
            >
              {lang === 'en' ? 'FR' : 'EN'}
            </button>

            <a
              href="#booking"
              className="hidden md:flex items-center bg-black text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-neutral-800 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              {T.nav.contactBtn}
            </a>

            <SheetTrigger
              aria-label="Toggle mobile menu"
              className="md:hidden text-black p-1.5 rounded-full hover:bg-neutral-100 transition-colors"
            >
              <Menu size={18} />
            </SheetTrigger>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <SheetContent side="right" className="w-full sm:max-w-full px-8 pt-28 pb-12 gap-0">
        <SheetHeader className="sr-only">
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleMobileLink}
              className="text-3xl font-bold tracking-tight text-black hover:text-brand transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto flex items-center gap-3">
          <button
            onClick={toggle}
            className="text-sm font-semibold text-neutral-600 border border-neutral-200 rounded-full px-5 py-3 hover:border-neutral-900 transition-colors"
          >
            {lang === 'en' ? '🇫🇷 FR' : '🇬🇧 EN'}
          </button>
          <a
            href="#booking"
            onClick={handleMobileLink}
            className="flex-1 text-center bg-black text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors"
          >
            {T.nav.contactBtn}
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
