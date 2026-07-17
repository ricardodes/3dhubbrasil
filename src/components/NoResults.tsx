interface NoResultsProps {
  query: string;
  onClear: () => void;
}

export default function NoResults({ query, onClear }: NoResultsProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <div className="inline-flex w-16 h-16 rounded-2xl bg-white/5 border border-white/10 items-center justify-center mb-4">
        <i className="fa-solid fa-magnifying-glass text-2xl text-slate-400" />
      </div>
      <h3 className="font-heading font-semibold text-xl text-white">
        Nenhum resultado para "{query}"
      </h3>
      <p className="mt-2 text-sm text-slate-400">
        Tente outro termo ou limpe a busca para ver tudo.
      </p>
      <button
        onClick={onClear}
        className="mt-5 px-5 py-2.5 rounded-lg bg-gradient-to-r from-accent-from to-accent-to text-white text-sm font-semibold hover:scale-[1.03] active:scale-95 transition-transform"
      >
        Limpar busca
      </button>
    </div>
  );
}
