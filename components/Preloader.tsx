'use client';

import { useEffect, useState } from 'react';

const LETTERS = ['L', 'O', 'V', 'A', 'G'];

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const exitTimer = setTimeout(() => setExiting(true), 1500);
    const removeTimer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = '';
    }, 2100);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = '';
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a] transition-opacity duration-500 ${
        exiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(128,0,32,0.18),transparent)] pointer-events-none"
      />

      <div className="relative flex items-baseline font-(family-name:--font-logo) font-medium text-4xl md:text-6xl tracking-widest text-white">
        {LETTERS.map((letter, i) => (
          <span
            key={i}
            className="inline-block opacity-0 animate-fade-up"
            style={{
              animationDelay: `${i * 90}ms`,
              animationFillMode: 'forwards',
              color: letter === 'A' ? '#8B1E28' : undefined,
            }}
          >
            {letter}
          </span>
        ))}
      </div>

      <div className="relative mt-8 h-px w-24 overflow-hidden bg-white/10 rounded-full">
        <div className="h-full bg-brand animate-preloader-bar" />
      </div>
    </div>
  );
}
