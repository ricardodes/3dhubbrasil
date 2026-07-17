import { useEffect, useState } from 'react';
import type { Category } from '../catalog';

interface FloatingNavProps {
  categories: Category[];
  onReorder: (newOrder: Category[]) => void;
}

interface DragState {
  draggingIndex: number | null;
  overIndex: number | null;
  startX: number;
  offsetX: number;
  pointerId: number | null;
}

export default function FloatingNav({ categories, onReorder }: FloatingNavProps) {
  const [drag, setDrag] = useState<DragState>({
    draggingIndex: null,
    overIndex: null,
    startX: 0,
    offsetX: 0,
    pointerId: null,
  });
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 200;
      let current: string | null = null;
      for (const cat of categories) {
        const el = document.getElementById(cat.id);
        if (el && el.offsetTop <= y) current = cat.id;
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [categories]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const onPointerDown = (e: React.PointerEvent, index: number) => {
    if (e.button !== undefined && e.button !== 0) return;
    e.preventDefault();
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    setDrag({
      draggingIndex: index,
      overIndex: index,
      startX: e.clientX,
      offsetX: 0,
      pointerId: e.pointerId,
    });
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (drag.draggingIndex === null) return;
    const offsetX = e.clientX - drag.startX;
    setDrag((d) => ({ ...d, offsetX }));
    const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
    const target = el?.closest('[data-nav-item]') as HTMLElement | null;
    if (target) {
      const overIndex = Number(target.dataset.index);
      if (!Number.isNaN(overIndex) && overIndex !== drag.overIndex) {
        setDrag((d) => ({ ...d, overIndex }));
      }
    }
  };

  const finishDrag = () => {
    if (drag.draggingIndex === null) return;
    const from = drag.draggingIndex;
    const to = drag.overIndex;
    if (to !== null && to !== from) {
      const next = [...categories];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      onReorder(next);
    }
    setDrag({
      draggingIndex: null,
      overIndex: null,
      startX: 0,
      offsetX: 0,
      pointerId: null,
    });
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (drag.pointerId !== null) {
      (e.target as HTMLElement).releasePointerCapture?.(drag.pointerId);
    }
    if (drag.draggingIndex !== null && Math.abs(drag.offsetX) < 6) {
      const cat = categories[drag.draggingIndex];
      if (cat) scrollTo(cat.id);
    }
    finishDrag();
  };

  return (
    <div className="sticky top-[68px] md:top-[88px] z-30 px-2 sm:px-4 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-2xl bg-card/95 backdrop-blur-md border border-accent-from/30 shadow-card-hover p-2.5 sm:p-3">
          <div className="absolute -top-px left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-accent-from to-transparent" />

          <div className="flex items-center justify-center gap-1.5 mb-2 text-[10px] sm:text-xs uppercase tracking-wider text-accent-from font-semibold">
            <i className="fa-solid fa-grip-vertical" />
            Arraste para reordenar · Clique para ir
          </div>

          <div className="flex flex-wrap justify-center gap-2 select-none max-h-[40vh] overflow-y-auto no-scrollbar">
            {categories.map((cat, index) => {
              const isDragging = drag.draggingIndex === index;
              const isOver =
                drag.overIndex === index &&
                drag.draggingIndex !== null &&
                drag.draggingIndex !== index;
              const isActive = activeId === cat.id;
              return (
                <button
                  key={cat.id}
                  data-nav-item
                  data-index={index}
                  onPointerDown={(e) => onPointerDown(e, index)}
                  onPointerMove={onPointerMove}
                  onPointerUp={onPointerUp}
                  onPointerCancel={finishDrag}
                  onClick={(e) => e.preventDefault()}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all touch-none cursor-grab active:cursor-grabbing ${
                    isActive
                      ? 'bg-gradient-to-r from-accent-from to-accent-to text-white shadow-card-hover scale-105'
                      : 'bg-white/10 text-slate-200 hover:bg-white/15 hover:text-white border border-white/10 hover:border-accent-from/40'
                  } ${isDragging ? 'opacity-60 scale-95 ring-2 ring-accent-from' : ''} ${
                    isOver ? 'ring-2 ring-accent-from/70' : ''
                  }`}
                  style={
                    isDragging
                      ? { transform: `translateX(${drag.offsetX}px) scale(0.95)` }
                      : undefined
                  }
                  aria-label={cat.name}
                  title={cat.name}
                >
                  <i className={`fa-solid ${cat.icon} text-[11px]`} />
                  <span>{cat.name.replace(/^\S+\s/, '')}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
