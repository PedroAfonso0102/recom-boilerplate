import { Search, Filter, Download } from "lucide-react"

interface Product {
  id: string
  code: string
  description: string
  material: string
  coating: string
  stock: number
  price: number
  status: "OK" | "LOW" | "CRIT"
}

const mockData: Product[] = [
  { id: "1", code: "RD-MT-01", description: "Fresa de Topo 4 Cortes Z4", material: "Metal Duro", coating: "TiAlN", stock: 120, price: 85.50, status: "OK" },
  { id: "2", code: "RD-DR-22", description: "Broca de Centro 60° DIN333", material: "HSS-Co", coating: "TiN", stock: 4, price: 32.20, status: "CRIT" },
  { id: "3", code: "RD-IN-05", description: "Inserto TNMG 160408-MA", material: "CVD Coated", coating: "Black", stock: 15, price: 12.90, status: "LOW" },
  { id: "4", code: "RD-XL-99", description: "Alargador de Máquina H7", material: "Metal Duro", coating: "Uncoated", stock: 82, price: 142.00, status: "OK" },
  { id: "5", code: "RD-SC-44", description: "Fresa de Escarear 90°", material: "Metal Duro", coating: "AlTiN", stock: 12, price: 54.10, status: "LOW" },
  { id: "6", code: "RD-MT-02", description: "Fresa Circular DIN 1897", material: "Metal Duro", coating: "TiCN", stock: 45, price: 67.80, status: "OK" },
  { id: "7", code: "RD-IN-08", description: "Inserto WNMG 080408-PM", material: "CVD Coated", coating: "Yellow", stock: 8, price: 14.50, status: "LOW" },
]

interface InventoryTableProps {
  onProductSelect: (product: Product) => void
}

export function InventoryTable({ onProductSelect }: InventoryTableProps) {
  return (
    <div className="w-full bg-white relative border-2 border-secondary/5" style={{ borderRadius: 0 }}>
      {/* Table Toolbar */}
      <div className="p-4 bg-neutral border-b border-secondary/10 flex flex-wrap gap-4 items-center justify-between">
        <div className="flex bg-white border border-secondary/20 p-2 items-center gap-3 w-full max-w-md" style={{ borderRadius: 0 }}>
          <Search className="w-4 h-4 text-secondary/40" />
          <input 
            type="text" 
            placeholder="BUSCAR SKU / CÓDIGO TÉCNICO..." 
            className="bg-transparent border-none outline-none text-[10px] font-mono uppercase tracking-widest w-full"
          />
        </div>
        
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-secondary/20 bg-white hover:bg-neutral transition-colors">
            <Filter className="w-3 h-3 text-secondary/60" />
            <span className="text-[10px] font-black uppercase tracking-widest">Filtros</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-white hover:bg-primary transition-colors">
            <Download className="w-3 h-3" />
            <span className="text-[10px] font-black uppercase tracking-widest">Exportar PDF</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto overflow-y-auto max-h-[600px] scrollbar-thin">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead className="bg-secondary text-white sticky top-0 z-20">
            <tr>
              <th className="px-4 py-3 text-[9px] font-black uppercase tracking-[0.2em] border-r border-white/5 w-12 text-center">STS</th>
              <th className="px-4 py-3 text-[9px] font-black uppercase tracking-[0.2em] border-r border-white/5">CÓDIGO (SAP/SKU)</th>
              <th className="px-4 py-3 text-[9px] font-black uppercase tracking-[0.2em] border-r border-white/5">DESCRIÇÃO TÉCNICA DO ATIVO</th>
              <th className="px-4 py-3 text-[9px] font-black uppercase tracking-[0.2em] border-r border-white/5">SUBSTRATO</th>
              <th className="px-4 py-3 text-[9px] font-black uppercase tracking-[0.2em] border-r border-white/5">GEOMETRIA</th>
              <th className="px-4 py-3 text-[9px] font-black uppercase tracking-[0.2em] border-r border-white/5 text-right w-24">ESTOQUE</th>
              <th className="px-4 py-3 text-[9px] font-black uppercase tracking-[0.2em] text-right w-32">PREÇO UNIT.</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-secondary/5">
            {mockData.map((item) => (
              <tr 
                key={item.id} 
                onClick={() => onProductSelect(item)}
                className="hover:bg-primary/5 group transition-colors cursor-pointer border-l-4 border-l-transparent hover:border-l-primary"
              >
                <td className="px-4 py-2 text-center">
                  <div className={`w-2.5 h-2.5 mx-auto ${
                    item.status === 'OK' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]' : 
                    item.status === 'LOW' ? 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.3)]' : 'bg-primary shadow-[0_0_8px_rgba(204,0,0,0.3)]'
                  }`} style={{ borderRadius: 0 }} />
                </td>
                <td className="px-4 py-2 font-mono text-xs text-primary font-black uppercase tracking-tighter border-r border-secondary/5">{item.code}</td>
                <td className="px-4 py-2 text-[11px] text-secondary font-bold uppercase tracking-tight border-r border-secondary/5 leading-none">
                  {item.description}
                  <span className="block text-[8px] opacity-40 font-mono mt-0.5 tracking-normal">REV_CONTROL: 2026_01A</span>
                </td>
                <td className="px-4 py-2 text-[10px] text-secondary/70 font-bold border-r border-secondary/5 uppercase">{item.material}</td>
                <td className="px-4 py-2 text-[9px] text-secondary/40 font-mono border-r border-secondary/5 uppercase">{item.coating}</td>
                <td className={`px-4 py-2 text-xs text-right font-black border-r border-secondary/5 tabular-nums ${item.status === 'CRIT' ? 'text-primary animate-pulse' : 'text-secondary'}`}>
                  {item.stock.toString().padStart(3, '0')}
                </td>
                <td className="px-4 py-2 text-xs text-right text-secondary/80 font-mono tabular-nums font-bold">
                  {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Industrial Pagination */}
      <div className="p-3 bg-neutral border-t border-secondary/10 flex justify-between items-center text-[9px] text-secondary/60 font-mono tracking-widest uppercase">
        <div className="flex gap-4">
          <button className="bg-white border border-secondary/10 px-3 py-1 hover:bg-primary hover:text-white transition-all disabled:opacity-30">◄ ANTERIOR</button>
          <button className="bg-white border border-secondary/10 px-3 py-1 hover:bg-primary hover:text-white transition-all">PRÓXIMO ►</button>
        </div>
        <div className="flex gap-8">
          <span className="hidden sm:inline">DATABASE_LATENCY: 14ms</span>
          <span>MOSTRANDO <span className="font-bold text-secondary">{mockData.length}</span> DE <span className="font-bold text-secondary">2.842</span> SKUS</span>
        </div>
      </div>
    </div>
  )
}

