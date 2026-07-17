import { useEffect, useState } from 'react';

interface HeaderProps {
  query: string;
  onQueryChange: (q: string) => void;
}

export default function Header({ query, onQueryChange }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/90 backdrop-blur-md shadow-lg shadow-black/30 border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          {/* Logo */}
          <button
            onClick={goTop}
            className="flex items-center gap-2 shrink-0 group"
          >
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-from to-accent-to flex items-center justify-center shadow-card-hover group-hover:scale-105 transition-transform">
              <i className="fa-solid fa-cube text-white text-lg" />
            </span>
            <span className="font-heading font-bold text-lg md:text-xl tracking-tight">
              3D<span className="gradient-text">Hub</span>Brasil
            </span>
          </button>

          {/* Search (desktop) */}
          <div className="hidden md:flex items-center relative w-64 lg:w-80">
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
            <input
              type="text"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Buscar ferramenta..."
              className="w-full pl-9 pr-3 py-2 text-sm rounded-lg bg-white/5 border border-white/10 focus:border-accent-from focus:ring-2 focus:ring-accent-from/30 outline-none transition-all placeholder:text-slate-500"
            />
          </div>

          {/* Mobile search toggle hint */}
          <div className="md:hidden relative flex-1 max-w-xs">
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
            <input
              type="text"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Buscar ferramenta..."
              className="w-full pl-9 pr-3 py-2 text-sm rounded-lg bg-white/5 border border-white/10 focus:border-accent-from focus:ring-2 focus:ring-accent-from/30 outline-none transition-all placeholder:text-slate-500"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
