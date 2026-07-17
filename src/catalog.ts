export type ToolType = 'FREE' | 'FREEMIUM';

export interface ToolItem {
  name: string;
  link: string;
  desc: string;
  type?: ToolType;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  isLinkList?: boolean;
  items: ToolItem[];
}

export const categories: Category[] = [
  {
    id: 'modelagem',
    name: '🛠️ Modelagem 3D',
    icon: 'fa-cube',
    items: [
      { name: 'Blender', link: 'https://blender.org', desc: 'Open-source completo: modelagem, escultura, animação.', type: 'FREE' },
      { name: 'FreeCAD', link: 'https://freecad.org', desc: 'CAD paramétrico open-source para peças mecânicas.', type: 'FREE' },
      { name: 'Tinkercad', link: 'https://tinkercad.com', desc: 'Modelagem simples no navegador, ideal para iniciantes.', type: 'FREE' },
      { name: 'OpenSCAD', link: 'https://openscad.org', desc: 'CAD programático — modele escrevendo código.', type: 'FREE' },
      { name: 'Wings 3D', link: 'https://wings3d.com', desc: 'Modelador open-source de subdivisão.', type: 'FREE' },
      { name: 'SolveSpace', link: 'https://solveospace.com', desc: 'CAD paramétrico leve e open-source.', type: 'FREE' },
      { name: 'Parama Craft', link: 'https://paramacraft.com', desc: 'Modelagem 3D paramétrica no navegador.', type: 'FREE' },
      { name: 'Fusion 360', link: 'https://autodesk.com/products/fusion-360', desc: 'CAD/CAM profissional. Grátis para uso pessoal.', type: 'FREEMIUM' },
      { name: 'Onshape', link: 'https://onshape.com', desc: 'CAD na nuvem com colaboração em tempo real.', type: 'FREEMIUM' },
      { name: 'SketchUp', link: 'https://app.sketchup.com', desc: 'Modelagem 3D intuitiva no navegador.', type: 'FREEMIUM' },
      { name: 'Sharp3D', link: 'https://sharp3d.com', desc: 'CAD intuitivo para iPad com Apple Pencil.', type: 'FREEMIUM' },
      { name: 'Plasticity', link: 'https://plasticity.xyz', desc: 'CAD com modelagem direta estilo SubD.', type: 'FREEMIUM' },
      { name: 'Bento3D Tray', link: 'https://bento3d.design/tray', desc: 'Tray online para organizar e visualizar modelos 3D.', type: 'FREE' },
      { name: 'Mini Skyline', link: 'https://miniskyline.com', desc: 'Gerador de paisagens urbanas 3D de alta qualidade.', type: 'FREE' },
    ],
  },
  {
    id: 'ia',
    name: '✨ Modelagem com IA',
    icon: 'fa-brain',
    items: [
      { name: 'Tencent Hunyuan3D', link: 'https://3d.hunyuan.tencent.com', desc: 'IA GRATUITA: texto/imagem para 3D.', type: 'FREE' },
      { name: 'TripoSR', link: 'https://github.com/VAST-AI-Research/TripoSR', desc: 'Open-source: imagem para 3D em <1s.', type: 'FREE' },
      { name: 'Stable Fast 3D', link: 'https://huggingface.co/spaces/stabilityai/stable-fast-3d', desc: 'Stability AI: imagem para 3D texturizado.', type: 'FREE' },
      { name: 'InstantMesh', link: 'https://huggingface.co/spaces/TencentARC/InstantMesh', desc: 'Tencent ARC: reconstrução 3D de imagens.', type: 'FREE' },
      { name: 'CRM', link: 'https://huggingface.co/spaces/thu-ml/CRM', desc: 'Reconstrução 3D da Tsinghua. Open-source.', type: 'FREE' },
      { name: 'Shap-E (OpenAI)', link: 'https://github.com/openai/shap-e', desc: 'OpenAI: texto para 3D. Open-source.', type: 'FREE' },
      { name: 'Point-E (OpenAI)', link: 'https://github.com/openai/point-e', desc: 'OpenAI: nuvens de pontos 3D.', type: 'FREE' },
      { name: 'Make-3D', link: 'https://make3d.app', desc: 'Online: fotos para modelos 3D.', type: 'FREE' },
      { name: 'Smoothie-3D', link: 'https://smoothie-3d.com', desc: 'Imagens 2D para modelos 3D.', type: 'FREE' },
      { name: 'Meshy', link: 'https://meshy.ai', desc: 'Texto/imagem para 3D. Créditos grátis.', type: 'FREEMIUM' },
      { name: 'Tripo3D', link: 'https://tripo3d.ai', desc: 'Geração 3D em segundos. Plano grátis.', type: 'FREEMIUM' },
      { name: 'Luma AI', link: 'https://lumalabs.ai', desc: 'Modelos 3D de vídeos/fotos. Plano grátis.', type: 'FREEMIUM' },
      { name: 'CSM AI', link: 'https://csm.ai', desc: 'Imagens/texto para 3D. Créditos grátis.', type: 'FREEMIUM' },
      { name: 'Sloyd', link: 'https://sloyd.ai', desc: 'Gerador 3D com IA. Plano grátis.', type: 'FREEMIUM' },
      { name: 'Leonardo AI', link: 'https://leonardo.ai', desc: 'IA generativa com recursos 3D. 150 tokens/dia.', type: 'FREEMIUM' },
      { name: 'ToolTrace AI', link: 'https://tooltrace.ai', desc: 'Rastreamento e otimização de ferramentas com IA.', type: 'FREE' },
      { name: 'BumpMesh', link: 'https://bumpmesh.com', desc: 'Malhas 3D a partir de mapas bump/normal com IA.', type: 'FREE' },
    ],
  },
  {
    id: 'slicers',
    name: '☰ Fatiadores (Slicers)',
    icon: 'fa-layer-group',
    items: [
      { name: 'Cura', link: 'https://ultimaker.com/software/ultimaker-cura', desc: 'Slicer mais popular, open-source.', type: 'FREE' },
      { name: 'PrusaSlicer', link: 'https://prusa3d.com/prusaslicer', desc: 'Open-source com suportes orgânicos.', type: 'FREE' },
      { name: 'OrcaSlicer', link: 'https://github.com/SoftFever/OrcaSlicer', desc: 'Fork do Bambu Studio. Open-source.', type: 'FREE' },
      { name: 'Bambu Studio', link: 'https://bambulab.com/en/bambu-studio', desc: 'Slicer oficial da Bambu Lab.', type: 'FREE' },
      { name: 'SuperSlicer', link: 'https://github.com/supermerill/SuperSlicer', desc: 'PrusaSlicer com features extras.', type: 'FREE' },
      { name: 'IdeaMaker', link: 'https://raise3d.com/ideamaker', desc: 'Slicer gratuito da Raise3D.', type: 'FREE' },
      { name: 'Creality Print', link: 'https://creality.com/pages/download', desc: 'Slicer oficial da Creality.', type: 'FREE' },
      { name: 'Kiri:Moto', link: 'https://grid.space/kiri', desc: 'Slicer online no navegador.', type: 'FREE' },
      { name: 'ChiTuBox', link: 'https://chitubox.com', desc: 'Slicer para resina/DLP. Versão grátis.', type: 'FREEMIUM' },
      { name: 'Lychee Slicer', link: 'https://mango3d.io/lychee-slicer', desc: 'Slicer para resina. Plano grátis.', type: 'FREEMIUM' },
    ],
  },
  {
    id: 'filamentos',
    name: '🧵 Filamentos (Menores Preços)',
    icon: 'fa-spool',
    isLinkList: true,
    items: [
      { name: 'PLA 1kg', link: 'https://www.google.com/search?q=filamento+PLA+1kg+preço', desc: 'Filamento PLA 1kg — do mais barato no Google Shopping.' },
      { name: 'PETG 1kg', link: 'https://www.google.com/search?q=filamento+PETG+1kg+preço', desc: 'Filamento PETG 1kg — do mais barato no Google Shopping.' },
      { name: 'TPU 1kg', link: 'https://www.google.com/search?q=filamento+TPU+1kg+preço', desc: 'Filamento TPU/Flex 1kg — do mais barato no Google Shopping.' },
      { name: 'ABS 1kg', link: 'https://www.google.com/search?q=filamento+ABS+1kg+preço', desc: 'Filamento ABS 1kg — do mais barato no Google Shopping.' },
      { name: 'ASA 1kg', link: 'https://www.google.com/search?q=filamento+ASA+1kg+preço', desc: 'Filamento ASA 1kg (UV) — do mais barato no Google Shopping.' },
      { name: 'Nylon 1kg', link: 'https://www.google.com/search?q=filamento+Nylon+1kg+preço', desc: 'Filamento Nylon/PA 1kg — do mais barato no Google Shopping.' },
      { name: 'Resina 1kg', link: 'https://www.google.com/search?q=resina+UV+1kg+preço', desc: 'Resina UV 1kg — do mais barato no Google Shopping.' },
    ],
  },
  {
    id: 'impressoras',
    name: '🖨️ Impressoras (Menores Preços)',
    icon: 'fa-print',
    isLinkList: true,
    items: [
      { name: 'FDM', link: 'https://www.google.com/search?q=impressora+3D+FDM+preço', desc: 'Impressora 3D FDM — do mais barato.' },
      { name: 'Resina', link: 'https://www.google.com/search?q=impressora+3D+resina+preço', desc: 'Impressora 3D DLP/SLA — do mais barato.' },
      { name: 'Bambu A1', link: 'https://www.google.com/search?q=Bambu+Lab+A1+preço', desc: 'Bambu Lab A1.' },
      { name: 'Bambu P1S', link: 'https://www.google.com/search?q=Bambu+Lab+P1S+preço', desc: 'Bambu Lab P1S.' },
      { name: 'Ender 3 V3', link: 'https://www.google.com/search?q=Creality+Ender+3+V3+preço', desc: 'Creality Ender 3 V3.' },
      { name: 'Creality K1', link: 'https://www.google.com/search?q=Creality+K1+preço', desc: 'Creality K1.' },
      { name: 'Prusa MK4', link: 'https://www.google.com/search?q=Prusa+MK4+preço', desc: 'Prusa MK4.' },
      { name: 'Peças', link: 'https://www.google.com/search?q=peças+impressora+3D+preço', desc: 'Peças e acessórios para impressoras 3D.' },
    ],
  },
  {
    id: 'lojas',
    name: '🏪 Lojas Online',
    icon: 'fa-store',
    isLinkList: true,
    items: [
      { name: 'Mercado Livre', link: 'https://mercadolivre.com.br', desc: 'Maior marketplace da América Latina.' },
      { name: 'Amazon Vendas', link: 'https://sellercentral.amazon.com.br', desc: 'Venda na maior loja online. Cadastro grátis.' },
      { name: 'Shopee', link: 'https://shopee.com.br', desc: 'Comissões baixas e frete grátis.' },
      { name: 'Magalu Parceiro', link: 'https://magazineluiza.com.br/parceiro', desc: 'Seja vendedor do Magalu.' },
      { name: 'TikTok Shop', link: 'https://tiktok.com/shop', desc: 'Venda viralizando vídeos.' },
      { name: 'Elo7', link: 'https://elo7.com.br', desc: 'Marketplace BR de artesanais.' },
      { name: 'Etsy', link: 'https://etsy.com/sell', desc: 'Venda para o mundo.' },
      { name: 'Enjoei', link: 'https://enjoei.com.br', desc: 'Usados e artesanais.' },
      { name: 'Shein', link: 'https://shein.com.br', desc: 'Miniaturas e decor 3D.' },
      { name: 'Nuvemshop', link: 'https://nuvemshop.com.br', desc: 'Crie sua loja online. Plano grátis.' },
      { name: 'Tray', link: 'https://tray.com.br', desc: 'E-commerce. Teste grátis.' },
    ],
  },
  {
    id: 'stls',
    name: '📦 STLs Grátis',
    icon: 'fa-download',
    items: [
      { name: 'Thingiverse', link: 'https://thingiverse.com', desc: 'Maior comunidade de modelos 3D gratuitos.', type: 'FREE' },
      { name: 'Printables', link: 'https://printables.com', desc: 'Prusa: modelos de alta qualidade.', type: 'FREE' },
      { name: 'Thangs', link: 'https://thangs.com', desc: 'Busca inteligente por geometria 3D.', type: 'FREE' },
      { name: 'MakerWorld', link: 'https://makerworld.com', desc: 'Bambu Lab: modelos e perfis.', type: 'FREE' },
      { name: 'Yeggi', link: 'https://yeggi.com', desc: 'Buscador de modelos em dezenas de repositórios.', type: 'FREE' },
      { name: 'STL Finder', link: 'https://stfinder.com', desc: 'Busca de modelos em múltiplos sites.', type: 'FREE' },
      { name: 'NIH 3D Print', link: 'https://3dprint.nih.gov', desc: 'Repositório científico.', type: 'FREE' },
      { name: 'GrabCAD', link: 'https://grabcad.com/library', desc: 'Modelos CAD e projetos mecânicos.', type: 'FREE' },
      { name: 'Cults3D', link: 'https://cults3d.com', desc: 'Modelos gratuitos e pagos.', type: 'FREEMIUM' },
      { name: 'MyMiniFactory', link: 'https://myminifactory.com', desc: 'Miniaturas tabletop curadas.', type: 'FREEMIUM' },
      { name: 'CGTrader', link: 'https://cgtrader.com', desc: '2M+ modelos 3D, muitos grátis.', type: 'FREEMIUM' },
      { name: 'Sketchfab', link: 'https://sketchfab.com', desc: 'Viewer WebGL e downloads grátis.', type: 'FREEMIUM' },
      { name: 'MakerOnline', link: 'https://makeronline.com', desc: 'Modelos 3D gratuitos para impressão imediata.', type: 'FREE' },
      { name: 'MakeWorld', link: 'https://makeworld.com', desc: 'Plataforma de modelos 3D e comunidade maker global.', type: 'FREE' },
    ],
  },
  {
    id: 'utilitarios',
    name: '🔧 Utilitários',
    icon: 'fa-tools',
    items: [
      { name: 'Meshmixer', link: 'https://meshmixer.com', desc: 'Edição de malhas e suportes.', type: 'FREE' },
      { name: 'MeshLab', link: 'https://meshlab.net', desc: 'Limpeza de malhas open-source.', type: 'FREE' },
      { name: '3D Viewer', link: 'https://3dviewer.net', desc: 'Visualizador STL/OBJ online.', type: 'FREE' },
      { name: 'Gridfinity Builder', link: 'https://gridfinity.perplexinglabs.com', desc: 'Gerador de organizadores paramétricos.', type: 'FREE' },
      { name: 'UVtools', link: 'https://github.com/sn4k3/UVtools', desc: 'Validação de arquivos de resina.', type: 'FREE' },
      { name: 'Netfabb', link: 'https://autodesk.com/products/netfabb', desc: 'Reparo profissional. Versão grátis.', type: 'FREEMIUM' },
      { name: 'Convertio', link: 'https://convertio.co', desc: 'Conversor universal: STL, OBJ, STEP, 3MF e mais.', type: 'FREEMIUM' },
      { name: 'CloudConvert 3D', link: 'https://cloudconvert.com/3d-converter', desc: 'Conversor online de formatos 3D com alta qualidade.', type: 'FREEMIUM' },
      { name: 'AnyConv 3D', link: 'https://anyconv.com/pt/conversao-3d', desc: 'Conversor de modelos 3D simples e rápido.', type: 'FREE' },
      { name: 'QR Code to STL', link: 'https://qrcode2st.printer.tools', desc: 'Converta QR codes em modelos STL 3D imprimíveis.', type: 'FREE' },
      { name: 'Formware STL Repair', link: 'https://formware.co/onlinestrepair', desc: 'Reparo online de arquivos STL corrompidos.', type: 'FREE' },
      { name: '3DPE Calc', link: 'https://3dprintingcosts.com', desc: 'Calculadora completa FDM e resina.', type: 'FREE' },
      { name: 'PrintPal Calc', link: 'https://printpal.io/tools/3d-print-cost-calculator', desc: 'Calculadora com filamento, eletricidade e depreciação.', type: 'FREE' },
      { name: 'OmniCalc 3D', link: 'https://omnicalculator.com/other/3d-printing', desc: 'Calculadora completa para orçamento profissional.', type: 'FREE' },
      { name: '3D PrintForce', link: 'https://3dprintforce.com/3d-printing-calculator', desc: 'Calculadora com lucro, taxas e falhas.', type: 'FREE' },
    ],
  },
  {
    id: 'github',
    name: '🐙 GitHub & Projetos',
    icon: 'fa-code',
    items: [
      { name: 'Awesome 3D Printing', link: 'https://github.com/ad-si/awesome-3d-printing', desc: 'Catálogo completo de recursos 3D open-source.', type: 'FREE' },
      { name: 'Awesome OpenSCAD', link: 'https://github.com/opensecad/awesome-opensecad', desc: 'Catálogo de recursos OpenSCAD.', type: 'FREE' },
      { name: '3D Printing Cheat Sheet', link: 'https://github.com/3dprintingchek/3d-printing-cheat-sheet', desc: 'Guia rápido de configurações.', type: 'FREE' },
      { name: 'Voron Design', link: 'https://github.com/VoronDesign', desc: 'Projetos de impressoras coreXY open-source.', type: 'FREE' },
      { name: 'EVA3D', link: 'https://github.com/EVA-3D', desc: 'Toolhead universal open-source.', type: 'FREE' },
      { name: '3DMRP', link: 'https://github.com/MKloberg/3drmp', desc: 'ERP: pedidos, fila de impressão, estoque.', type: 'FREE' },
      { name: 'Manyfold', link: 'https://github.com/manyfold3d/manyfold', desc: 'Gerenciador de biblioteca 3D self-hosted.', type: 'FREE' },
      { name: 'printBed', link: 'https://github.com/prosthetichead/printBed', desc: 'Gestão de assets 3D: classifique e organize.', type: 'FREE' },
      { name: 'Spoolman', link: 'https://github.com/Donkie/Spoolman', desc: 'Gerenciador de filamentos: peso, marca e uso.', type: 'FREE' },
    ],
  },
  {
    id: 'gestao',
    name: '📊 Gestão & Monitoramento',
    icon: 'fa-chart-line',
    items: [
      { name: 'OctoPrint', link: 'https://octoprint.org', desc: 'Controle remoto open-source.', type: 'FREE' },
      { name: 'Mainsail', link: 'https://docs.mainsail.xyz', desc: 'Interface moderna para Klipper.', type: 'FREE' },
      { name: 'Fluidd', link: 'https://docs.fluidd.xyz', desc: 'Interface leve para Klipper.', type: 'FREE' },
      { name: 'Klipper', link: 'https://klipper3d.org', desc: 'Firmware avançado de alta velocidade.', type: 'FREE' },
      { name: 'Marlin', link: 'https://marlinfw.org', desc: 'Firmware open-source mais usado.', type: 'FREE' },
      { name: 'Spoolman', link: 'https://github.com/Donkie/Spoolman', desc: 'Gerenciador de filamentos.', type: 'FREE' },
      { name: 'Creality Cloud', link: 'https://crealitycloud.com', desc: 'App com monitoramento remoto.', type: 'FREE' },
      { name: 'Obico', link: 'https://obico.io', desc: 'Monitoramento com IA. Plano grátis.', type: 'FREE' },
      { name: 'SimplyPrint', link: 'https://simplyprint.io', desc: 'Cloud printing. Plano grátis.', type: 'FREE' },
    ],
  },
];

export const totalTools = categories.reduce((sum, cat) => sum + cat.items.length, 0);
