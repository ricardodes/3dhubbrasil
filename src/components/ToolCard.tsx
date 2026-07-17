import type { ToolItem } from '../catalog';

interface ToolCardProps {
  item: ToolItem;
  index: number;
}

export default function ToolCard({ item, index }: ToolCardProps) {
  const isFree = item.type === 'FREE';

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col bg-card rounded-xl p-5 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 border border-white/5 hover:border-accent-from/40 animate-fade-up"
      style={{ animationDelay: `${Math.min(index * 40, 400)}ms` }}
    >
      {/* Badge */}
      {item.type && (
        <span
          className={`absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide ${
            isFree
              ? 'bg-free/15 text-free border border-free/30'
              : 'bg-freemium/15 text-freemium border border-freemium/30'
          }`}
        >
          {item.type}
        </span>
      )}

      <h3 className="font-heading font-semibold text-base md:text-lg text-white pr-16 group-hover:text-accent-from transition-colors">
        {item.name}
      </h3>
      <p className="mt-2 text-sm text-slate-400 leading-relaxed flex-1">
        {item.desc}
      </p>
      <div className="mt-4 flex items-center gap-1 text-xs font-medium text-slate-500 group-hover:text-accent-from transition-colors">
        Acessar
        <i className="fa-solid fa-arrow-up-right-from-square text-[10px] ml-1" />
      </div>
    </a>
  );
}
