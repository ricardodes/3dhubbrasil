import { useEffect, useRef, useState } from 'react';
import { totalTools } from '../catalog';

export default function Hero() {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    const target = totalTools;
    const duration = 1800;
    const startTime = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const scrollToCatalog = () => {
    document.getElementById('modelagem')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[82vh] flex items-center justify-center hero-overlay overflow-hidden"
    >
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent-from/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-to/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 md:py-28">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-free animate-pulse-glow" />
          <span className="text-xs sm:text-sm text-slate-300">
            Comunidade 3DHubBrasil · Catálogo Open
          </span>
        </div>

        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight animate-fade-up">
          Tudo para <span className="gradient-text">Impressão 3D</span>
          <br className="hidden sm:block" /> num só lugar
        </h1>

        <p
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.1s' }}
        >
          Modelagem, IA, slicers, filamentos, impressoras, STLs, utilitários e
          projetos open-source. Curado pela comunidade brasileira de impressão 3D.
        </p>

        {/* Counter */}
        <div
          className="mt-10 inline-flex flex-col items-center animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="flex items-baseline gap-2">
            <span className="font-heading font-extrabold text-5xl sm:text-6xl md:text-7xl gradient-text tabular-nums">
              {count}
            </span>
            <span className="text-xl sm:text-2xl text-slate-400 font-medium">
              ferramentas
            </span>
          </div>
          <p className="mt-2 text-xs sm:text-sm text-slate-400">
            em 10 categorias · 100% grátis ou freemium
          </p>
        </div>

        <div
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          <button
            onClick={scrollToCatalog}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-accent-from to-accent-to text-white font-semibold shadow-card-hover hover:scale-[1.03] active:scale-95 transition-transform"
          >
            Explorar catálogo
            <i className="fa-solid fa-arrow-down ml-2" />
          </button>
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            <i className="fa-solid fa-users mr-2" />
            Entrar na comunidade
          </a>
        </div>
      </div>
    </section>
  );
}
