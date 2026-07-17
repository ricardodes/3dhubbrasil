import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Voltar ao topo"
      className="fixed bottom-5 right-5 z-40 w-12 h-12 rounded-full bg-gradient-to-br from-accent-from to-accent-to text-white shadow-card-hover flex items-center justify-center hover:scale-110 active:scale-95 transition-transform animate-fade-up"
    >
      <i className="fa-solid fa-arrow-up" />
    </button>
  );
}
