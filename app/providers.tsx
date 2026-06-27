'use client';

import { LanguageProvider } from '@/context/LanguageContext';
import { TooltipProvider } from '@/components/ui/tooltip';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <TooltipProvider>{children}</TooltipProvider>
    </LanguageProvider>
  );
}
