import type { ToolItem } from '../catalog';

interface LinkListItemProps {
  item: ToolItem;
  index: number;
}

export default function LinkListItem({ item, index }: LinkListItemProps) {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 bg-card rounded-xl p-4 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 border border-white/5 hover:border-accent-from/40 animate-fade-up"
      style={{ animationDelay: `${Math.min(index * 40, 400)}ms` }}
    >
      <span className="w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br from-accent-from/20 to-accent-to/20 flex items-center justify-center text-accent-from">
        <i className="fa-solid fa-tag" />
      </span>
      <div className="flex-1 min-w-0">
        <h3 className="font-heading font-semibold text-sm md:text-base text-white group-hover:text-accent-from transition-colors truncate">
          {item.name}
        </h3>
        <p className="text-xs md:text-sm text-slate-400 leading-relaxed truncate">
          {item.desc}
        </p>
      </div>
      <span className="shrink-0 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-300 group-hover:bg-accent-from group-hover:text-white group-hover:border-accent-from transition-all whitespace-nowrap">
        <i className="fa-solid fa-magnifying-glass mr-1.5" />
        Ver preços
      </span>
    </a>
  );
}
