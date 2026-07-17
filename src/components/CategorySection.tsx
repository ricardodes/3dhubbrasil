import type { Category } from '../catalog';
import ToolCard from './ToolCard';
import LinkListItem from './LinkListItem';

interface CategorySectionProps {
  category: Category;
  query: string;
}

export default function CategorySection({ category, query }: CategorySectionProps) {
  const q = query.trim().toLowerCase();
  const filtered = q
    ? category.items.filter(
        (it) =>
          it.name.toLowerCase().includes(q) || it.desc.toLowerCase().includes(q)
      )
    : category.items;

  if (q && filtered.length === 0) return null;

  return (
    <section
      id={category.id}
      className="scroll-mt-[180px] md:scroll-mt-[200px] py-12 md:py-16 reveal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <span className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-accent-from/20 to-accent-to/20 border border-white/10 flex items-center justify-center text-accent-from text-lg md:text-xl shrink-0">
            <i className={`fa-solid ${category.icon}`} />
          </span>
          <div className="min-w-0">
            <h2 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl text-white tracking-tight">
              {category.name}
            </h2>
            <p className="text-xs md:text-sm text-slate-400 mt-0.5">
              {filtered.length} {filtered.length === 1 ? 'item' : 'itens'}
              {q && (
                <span className="text-accent-from">
                  {' '}
                  · filtrando por "{query}"
                </span>
              )}
            </p>
          </div>
        </div>

        {category.isLinkList ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {filtered.map((item, i) => (
              <LinkListItem key={item.name} item={item} index={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
            {filtered.map((item, i) => (
              <ToolCard key={item.name} item={item} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
