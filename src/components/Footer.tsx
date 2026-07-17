import { totalTools, categories } from '../catalog';

export default function Footer() {
  const socials = [
    { name: 'Telegram', icon: 'fa-telegram', href: '#' },
    { name: 'WhatsApp', icon: 'fa-whatsapp', href: '#' },
    { name: 'YouTube', icon: 'fa-youtube', href: '#' },
  ];

  return (
    <footer id="contato" className="relative mt-12 border-t border-white/5 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-from to-accent-to flex items-center justify-center">
                <i className="fa-solid fa-cube text-white text-lg" />
              </span>
              <span className="font-heading font-bold text-lg">
                3D<span className="gradient-text">Hub</span>Brasil
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Catálogo open-source de ferramentas para impressão 3D. Feito pela
              comunidade, para a comunidade.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-accent-from hover:text-white hover:border-accent-from transition-all hover:-translate-y-0.5"
                >
                  <i className={`fa-brands ${s.icon}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">
              Números
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center justify-between">
                <span>Ferramentas catalogadas</span>
                <span className="font-heading font-bold text-accent-from">
                  {totalTools}
                </span>
              </li>
              <li className="flex items-center justify-between">
                <span>Categorias</span>
                <span className="font-heading font-bold text-accent-from">
                  {categories.length}
                </span>
              </li>
              <li className="flex items-center justify-between">
                <span>Custo</span>
                <span className="font-heading font-bold text-free">R$ 0</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">
              Navegação
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {categories.map((c) => (
                <li key={c.id}>
                  <a
                    href={`#${c.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById(c.id)
                        ?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-accent-from transition-colors"
                  >
                    {c.name.replace(/^\S+\s/, '')}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>Feito pela comunidade 3DHubBrasil.</p>
          <p>
            <i className="fa-regular fa-copyright mr-1" />
            {new Date().getFullYear()} · Open-source · Distribuição livre.
          </p>
        </div>
      </div>
    </footer>
  );
}
