'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import Reveal from '@/components/Reveal';

export default function FAQSection() {
  const { lang } = useLanguage();
  const T = t[lang];

  return (
    <section id="faq" className="relative py-24 px-4 bg-neutral-50 overflow-hidden">
      {/* Decorative background question marks */}
      <span
        aria-hidden
        className="absolute -top-10 left-[6%] text-[10rem] font-bold text-black/[0.03] select-none pointer-events-none"
      >
        ?
      </span>
      <span
        aria-hidden
        className="absolute top-[20%] right-[8%] text-[7rem] font-bold text-brand/[0.06] select-none pointer-events-none"
      >
        ?
      </span>
      <span
        aria-hidden
        className="absolute bottom-[8%] left-[12%] text-[6rem] font-bold text-black/[0.03] select-none pointer-events-none"
      >
        ?
      </span>
      <span
        aria-hidden
        className="absolute bottom-[-2%] right-[18%] text-[9rem] font-bold text-black/[0.03] select-none pointer-events-none"
      >
        ?
      </span>

      <div className="relative max-w-3xl mx-auto">
        {/* Header */}
        <Reveal className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest text-brand uppercase mb-4">
            {T.faq.label}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
            {T.faq.title}
          </h2>
        </Reveal>

        {/* Accordion */}
        <Accordion className="flex flex-col gap-3">
          {T.faq.items.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-white border border-neutral-100 rounded-2xl px-6 overflow-hidden data-[state=open]:border-neutral-200 transition-all duration-200 hover:border-neutral-200"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-black py-5 hover:no-underline [&>svg]:text-neutral-400 [&>svg]:transition-transform [&>svg]:duration-300">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-neutral-500 text-sm leading-relaxed pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
