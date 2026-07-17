const VENDEDORES = [
  { name: "Mercado Livre", link: "https://www.mercadolivre.com.br/anuncie", favicon: "/favicons/www.mercadolivre.com.br.png" },
  { name: "Amazon BR", link: "https://sellercentral.amazon.com.br", favicon: "/favicons/sellercentral.amazon.com.br.png" },
  { name: "Shopee", link: "https://seller.shopee.com.br", favicon: "/favicons/seller.shopee.com.br.png" },
  { name: "Magalu", link: "https://www.magazineluiza.com.br/parceiro", favicon: "/favicons/www.magazineluiza.com.br.png" },
  { name: "TikTok Shop", link: "https://seller-br.tiktok.com", favicon: "/favicons/seller-br.tiktok.com.png" },
  { name: "Etsy", link: "https://www.etsy.com/sell", favicon: "/favicons/www.etsy.com.png" },
  { name: "Enjoei", link: "https://www.enjoei.com.br", favicon: "/favicons/www.enjoei.com.br.png" },
  { name: "Nuvemshop", link: "https://www.nuvemshop.com.br", favicon: "/favicons/www.nuvemshop.com.br.png" },
  { name: "Tray", link: "https://www.tray.com.br", favicon: "/favicons/www.tray.com.br.png" },
];

const VendedorBar = () => {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
      <div className="flex items-center gap-1.5 flex-wrap justify-center">
        <span className="text-[10px] font-semibold text-white/40 mr-1 uppercase tracking-wider">Onde Vender</span>
        {VENDEDORES.map((v, i) => (
          <a
            key={i}
            href={v.link}
            target="_blank"
            rel="noopener noreferrer"
            title={v.name}
            className="group flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/5 border border-white/10 hover:border-[#00A8FF]/30 hover:bg-[#00A8FF]/5 transition-all"
          >
            <img
              src={`${base}${v.favicon.replace(/^\//, '')}`}
              alt={v.name}
              className="w-4 h-4 rounded-full object-cover"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <span className="text-[9px] text-white/60 group-hover:text-[#00A8FF] transition-colors hidden sm:inline">{v.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default VendedorBar;
