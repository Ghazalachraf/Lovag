'use client';

import type { IconType } from 'react-icons';
import { Database, Search, Cloud } from 'lucide-react';
import {
  SiWordpress,
  SiPrestashop,
  SiWoocommerce,
  SiReact,
  SiNextdotjs,
  SiLaravel,
  SiOdoo,
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiSass,
  SiTailwindcss,
  SiFigma,
  SiPython,
  SiOpenjdk,
  SiMysql,
  SiMariadb,
  SiPostgresql,
  SiSupabase,
  SiGit,
  SiDocker,
  SiNodedotjs,
  SiJira,
  SiTrello,
  SiGooglecloud,
  SiVercel,
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiStripe,
  SiPaypal,
} from 'react-icons/si';

interface TechItem {
  name: string;
  icon: IconType;
  /** Official brand color (hex). Generic fallback icons use a neutral gray. */
  color: string;
}

const STACK: TechItem[] = [
  { name: 'WordPress', icon: SiWordpress, color: '#21759B' },
  { name: 'PrestaShop', icon: SiPrestashop, color: '#DF0067' },
  { name: 'WooCommerce', icon: SiWoocommerce, color: '#96588A' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
  { name: 'Odoo', icon: SiOdoo, color: '#714B67' },
  { name: 'PHP', icon: SiPhp, color: '#777BB4' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: SiCss, color: '#1572B6' },
  { name: 'Sass', icon: SiSass, color: '#CC6699' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Java', icon: SiOpenjdk, color: '#ED8B00' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'MariaDB', icon: SiMariadb, color: '#003545' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'PL/SQL', icon: Database, color: '#64748B' },
  { name: 'Supabase', icon: SiSupabase, color: '#3FCF8E' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Jira', icon: SiJira, color: '#0052CC' },
  { name: 'Trello', icon: SiTrello, color: '#0052CC' },
  { name: 'AWS', icon: Cloud, color: '#FF9900' },
  { name: 'Google Cloud', icon: SiGooglecloud, color: '#4285F4' },
  { name: 'Vercel', icon: SiVercel, color: '#000000' },
  { name: 'Google Analytics', icon: SiGoogleanalytics, color: '#E37400' },
  { name: 'Search Console', icon: SiGooglesearchconsole, color: '#458CF5' },
  { name: 'Stripe', icon: SiStripe, color: '#635BFF' },
  { name: 'PayPal', icon: SiPaypal, color: '#00457C' },
  { name: 'SEO', icon: Search, color: '#64748B' },
];

export default function TechMarquee() {
  // Duplicate the list so the CSS animation can loop seamlessly
  const items = [...STACK, ...STACK];

  return (
    <div className="relative border-y border-neutral-100 bg-white py-6 overflow-hidden">
      {/* Single accessible announcement instead of letting screen readers read the duplicated decorative icons */}
      <p className="sr-only">
        Technologies we work with: {STACK.map((item) => item.name).join(', ')}.
      </p>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-white to-transparent z-10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-white to-transparent z-10"
      />

      <div aria-hidden className="flex w-max animate-marquee gap-12">
        {items.map((item, i) => (
          <item.icon
            key={`${item.name}-${i}`}
            size={28}
            color={item.color}
            className="shrink-0 hover:scale-110 transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
}
