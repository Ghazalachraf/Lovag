'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`fixed bottom-6 right-24 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white border border-neutral-200 text-black shadow-lg shadow-black/5 hover:border-neutral-900 hover:scale-110 active:scale-100 transition-all duration-300 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
            }`}
          />
        }
      >
        <ArrowUp size={18} />
      </TooltipTrigger>
      <TooltipContent side="left">Top</TooltipContent>
    </Tooltip>
  );
}
