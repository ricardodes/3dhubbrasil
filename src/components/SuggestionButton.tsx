import { useState } from 'react';
import { Send, X, MessageSquare, Loader2 } from 'lucide-react';

const SuggestionButton = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<'ferramenta' | 'filamento' | 'site' | 'outro'>('ferramenta');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || '';
  const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID || '@richardcal';

  const typeLabels = {
    ferramenta: '🔧 Nova Ferramenta',
    filamento: '🧵 Novo Filamento',
    site: '🌐 Melhoria no Site',
    outro: '💡 Outra Sugestão'
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      setErrorMsg('Preencha título e descrição');
      return;
    }
    setStatus('sending');
    setErrorMsg('');

    const message = `
<b>${typeLabels[type]}</b>
━━━━━━━━━━━━━━━
<b>Título:</b> ${title}
<b>Descrição:</b> ${description}
${email ? `<b>Email:</b> ${email}` : ''}
<b>Enviado em:</b> ${new Date().toLocaleString('pt-BR')}
    `.trim();

    try {
      const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'HTML',
          disable_web_page_preview: true
        })
      });

      const data = await res.json();
      if (!data.ok) throw new Error(data.description || 'Falha ao enviar');

      setStatus('success');
      setTimeout(() => {
        setOpen(false);
        setStatus('idle');
        setTitle('');
        setDescription('');
        setEmail('');
      }, 2000);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Erro ao enviar. Tente novamente.');
    }
  };

  if (status === 'success') {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-green-500/90 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-slide-up">
          <MessageSquare size={20} />
          <span className="font-semibold">Sugestão enviada com sucesso!</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-2 font-semibold text-sm hover:scale-105 transition-all duration-200 border border-white/20"
        aria-label="Enviar sugestão"
      >
        <MessageSquare size={18} />
        <span className="hidden sm:inline">Enviar Sugestão</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div className="bg-[#0F1C2E] border border-white/10 rounded-2xl w-full max-w-md overflow-hidden animate-slide-up" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h2 className="text-xl font-poppins font-bold text-white">Enviar Sugestão</h2>
              <button onClick={() => setOpen(false)} className="p-1 rounded-lg hover:bg-white/10 transition-colors">
                <X size={20} className="text-white/60" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-4 space-y-4">
              <div>
                <label className="block text-xs font-medium text-white/60 mb-2">Tipo</label>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(typeLabels).map(([key, label]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setType(key as typeof type)}
                      className={`px-3 py-2 rounded-lg text-xs font-medium text-center transition-all ${
                        type === key
                          ? 'bg-[#00A8FF] text-white'
                          : 'bg-white/5 text-white/60 hover:bg-white/10'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/60 mb-1">Título *</label>
                <input
                  type="text"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  placeholder="Ex: Adicionar Cura 5.8 na lista de slicers"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/30 focus:border-[#00A8FF]/50 focus:outline-none focus:ring-1 focus:ring-[#00A8FF]/50 transition-all"
                  required
                  maxLength={80}
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white/60 mb-1">Descrição *</label>
                <textarea
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  placeholder="Descreva sua sugestão com detalhes... (link, parâmetros, por que seria útil, etc.)"
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/30 focus:border-[#00A8FF]/50 focus:outline-none focus:ring-1 focus:ring-[#00A8FF]/50 transition-all resize-none"
                  required
                  maxLength={1000}
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white/60 mb-1">Seu email (opcional)</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="seu@email.com (para retorno)"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/30 focus:border-[#00A8FF]/50 focus:outline-none focus:ring-1 focus:ring-[#00A8FF]/50 transition-all"
                  maxLength={100}
                />
              </div>

              {errorMsg && (
                <div className="bg-red-500/20 border border-red-500/30 text-red-400 text-sm px-3 py-2 rounded-lg">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold text-sm hover:from-purple-400 hover:to-pink-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Enviar para Telegram
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SuggestionButton;