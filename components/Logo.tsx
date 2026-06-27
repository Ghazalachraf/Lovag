interface LogoProps {
  className?: string;
  /** Use on dark backgrounds (e.g. the Projects section) */
  dark?: boolean;
}

export default function Logo({ className = '', dark = false }: LogoProps) {
  return (
    <span
      className={`font-(family-name:--font-logo) font-medium text-xl tracking-widest ${dark ? 'text-white' : 'text-[#1A1A1A]'} ${className}`}
    >
      LOV<span className="text-[#8B1E28]">A</span>G
      <sup className="ml-1 text-[0.4em] font-medium tracking-normal text-[#8B1E28]">TM</sup>
    </span>
  );
}
