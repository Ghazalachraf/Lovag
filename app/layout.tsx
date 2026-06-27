import type { Metadata } from 'next';
import { Manrope, Geist_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import Preloader from '@/components/Preloader';

const manrope = Manrope({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const logoFont = Playfair_Display({
  variable: '--font-logo',
  subsets: ['latin'],
  weight: ['500', '600'],
});

export const metadata: Metadata = {
  title: 'LOVAG. — Premium Web Engineering',
  description:
    'From custom full-stack development and tailored back-offices to advanced SEO engineering. LOVAG. delivers blazing-fast web ecosystems that turn visitors into revenue.',
  keywords: [
    'web development',
    'Next.js',
    'full-stack',
    'SEO',
    'digital agency',
    'Supabase',
    'performance',
  ],
  authors: [{ name: 'Achraf Ghazal' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'LOVAG. — Premium Web Engineering',
    description: 'Engineering premium web ecosystems for modern businesses.',
    type: 'website',
    locale: 'en_US',
    siteName: 'LOVAG.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LOVAG. — Premium Web Engineering',
    description: 'Engineering premium web ecosystems for modern businesses.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${geistMono.variable} ${logoFont.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-black">
        <Preloader />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
