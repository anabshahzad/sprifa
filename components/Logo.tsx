export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 34C8 18 20 6 36 6H50V30C50 33.3 47.3 36 44 36H24C24 47 33 56 44 56H50V94H36C20 94 8 82 8 66V34Z"
        fill="url(#sprifa-g1)"
      />
      <circle cx="78" cy="24" r="18" fill="url(#sprifa-g2)" />
      <path
        d="M56 44H86C88.2 44 90 45.8 90 48V70C90 83.3 79.3 94 66 94H56V44Z"
        fill="url(#sprifa-g3)"
      />
      <rect x="8" y="60" width="34" height="34" rx="12" fill="url(#sprifa-g4)" />
      <defs>
        <linearGradient id="sprifa-g1" x1="8" y1="6" x2="50" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A8E85F" />
          <stop offset="1" stopColor="#72D85A" />
        </linearGradient>
        <linearGradient id="sprifa-g2" x1="60" y1="6" x2="96" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#72D85A" />
          <stop offset="1" stopColor="#00D8D0" />
        </linearGradient>
        <linearGradient id="sprifa-g3" x1="56" y1="44" x2="90" y2="94" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00D8D0" />
          <stop offset="1" stopColor="#007F7A" />
        </linearGradient>
        <linearGradient id="sprifa-g4" x1="8" y1="60" x2="42" y2="94" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00F0F0" />
          <stop offset="1" stopColor="#006B68" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function LogoFull({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-full w-auto aspect-square" />
      <span className="text-[1.35em] font-bold tracking-tight text-fg">
        spri<span className="text-teal">fa</span>
      </span>
    </div>
  );
}
