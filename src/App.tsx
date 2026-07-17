import { useEffect, useMemo, useState } from 'react';
import { categories as defaultCategories, type Category } from './catalog';
import ScrollProgress from './components/ScrollProgress';
import Header from './components/Header';
import Hero from './components/Hero';
import FloatingNav from './components/FloatingNav';
import CategorySection from './components/CategorySection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import NoResults from './components/NoResults';

const STORAGE_KEY = '3dhub_category_order';

function loadOrder(): Category[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return defaultCategories;
    const ids: string[] = JSON.parse(saved);
    const map = new Map(defaultCategories.map((c) => [c.id, c]));
    const ordered = ids
      .map((id) => map.get(id))
      .filter((c): c is Category => Boolean(c));
    for (const c of defaultCategories) {
      if (!ordered.find((o) => o.id === c.id)) ordered.push(c);
    }
    return ordered.length === defaultCategories.length
      ? ordered
      : defaultCategories;
  } catch {
    return defaultCategories;
  }
}

export default function App() {
  const [query, setQuery] = useState('');
  const [categories, setCategories] = useState<Category[]>(loadOrder);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(categories.map((c) => c.id))
    );
  }, [categories]);

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [query, categories]);

  const q = query.trim().toLowerCase();
  const hasResults = useMemo(() => {
    if (!q) return true;
    return categories.some((cat) =>
      cat.items.some(
        (it) =>
          it.name.toLowerCase().includes(q) || it.desc.toLowerCase().includes(q)
      )
    );
  }, [q, categories]);

  return (
    <div className="min-h-screen bg-bg text-slate-100">
      <ScrollProgress />
      <Header query={query} onQueryChange={setQuery} />

      <main>
        <Hero />

        <FloatingNav categories={categories} onReorder={setCategories} />

        {hasResults ? (
          <div className="pt-4">
            {categories.map((cat) => (
              <CategorySection key={cat.id} category={cat} query={query} />
            ))}
          </div>
        ) : (
          <NoResults query={query} onClear={() => setQuery('')} />
        )}
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
