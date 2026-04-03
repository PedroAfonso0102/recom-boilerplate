import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Folder, FileText, Database, Layers } from "lucide-react"

interface CatalogItem {
  id: string
  title: string
  type: "folder" | "file"
  children?: CatalogItem[]
  specs?: string[]
}

const catalogData: CatalogItem[] = [
  {
    id: "turning",
    title: "Torneamento (Turning)",
    type: "folder",
    children: [
      {
        id: "iso-p",
        title: "Aço (ISO-P)",
        type: "folder",
        children: [
          { id: "p01", title: "CNMG 120408-GM", type: "file", specs: ["Raio: 0.8", "Classe: RM25", "Avanço: 0.3-0.5"] },
          { id: "p02", title: "TNMG 160404-MS", type: "file", specs: ["Raio: 0.4", "Classe: RM15", "Avanço: 0.2-0.4"] },
        ]
      },
      {
        id: "iso-k",
        title: "Ferro Fundido (ISO-K)",
        type: "folder",
        children: [
          { id: "k01", title: "WNMG 080412-KR", type: "file", specs: ["Raio: 1.2", "Classe: RK30", "Avanço: 0.4-0.6"] },
        ]
      }
    ]
  },
  {
    id: "milling",
    title: "Fresamento (Milling)",
    type: "folder",
    children: [
      {
        id: "endmills",
        title: "Fresas de Topo (Endmills)",
        type: "folder",
        children: [
          { id: "e01", title: "Fresa 4 Cortes Ø10", type: "file", specs: ["Material: HRC55", "Cobertura: TiAlN", "Z=4"] },
          { id: "e02", title: "Fresa 2 Cortes Ø6", type: "file", specs: ["Material: HRC45", "Cobertura: AlTiN", "Z=2"] },
        ]
      }
    ]
  }
]

interface SidebarItemProps {
  item: CatalogItem
  level: number
  onSelect: (item: CatalogItem) => void
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item, level, onSelect }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const hasChildren = item.children && item.children.length > 0

  return (
    <div className="select-none">
      <div 
        onClick={() => {
          if (hasChildren) setIsOpen(!isOpen)
          onSelect(item)
        }}
        className={`flex items-center gap-2 py-2 px-3 hover:bg-secondary/5 cursor-pointer border-l-2 transition-colors ${isOpen ? 'border-primary bg-secondary/5 font-bold' : 'border-transparent font-medium'}`}
        style={{ paddingLeft: `${level * 16 + 12}px` }}
      >
        {hasChildren ? (
          <ChevronRight className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
        ) : (
          <div className="w-4" />
        )}
        {item.type === "folder" ? <Folder className="w-4 h-4 text-primary" /> : <FileText className="w-4 h-4 text-secondary/40" />}
        <span className="text-xs uppercase tracking-tight truncate">{item.title}</span>
      </div>
      
      <AnimatePresence>
        {isOpen && hasChildren && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-neutral/30"
          >
            {item.children!.map(child => (
              <SidebarItem key={child.id} item={child} level={level + 1} onSelect={onSelect} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function NestedCatalog() {
  const [selected, setSelected] = React.useState<CatalogItem | null>(null)

  return (
    <div className="flex h-[500px] border border-secondary/10 bg-white shadow-xl relative overflow-hidden" style={{ borderRadius: 0 }}>
      {/* Sidebar navigation */}
      <div className="w-80 border-r border-secondary/10 overflow-y-auto bg-neutral/20 scrollbar-thin">
        <div className="p-4 border-b border-secondary/10 bg-white">
           <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary flex items-center gap-2">
             <Database className="w-3 h-3" /> Catálogo Técnico RECOM
           </h3>
        </div>
        <div>
          {catalogData.map(item => (
            <SidebarItem key={item.id} item={item} level={0} onSelect={setSelected} />
          ))}
        </div>
      </div>
      
      {/* Content display */}
      <div className="flex-1 flex flex-col bg-white">
        {selected ? (
          <div className="p-10 flex-1">
             <div className="flex items-center gap-3 mb-8">
                <span className="p-2 bg-primary/10 text-primary">
                   {selected.type === "folder" ? <Layers className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
                </span>
                <div>
                  <h2 className="text-3xl font-heading font-black uppercase tracking-tighter text-secondary leading-none">
                    {selected.title}
                  </h2>
                  <p className="text-[10px] font-mono text-secondary/40 uppercase tracking-widest mt-1">
                    SKU: RECOM-{selected.id.toUpperCase()} / {selected.type.toUpperCase()}
                  </p>
                </div>
             </div>

             {selected.specs && (
               <div className="grid grid-cols-2 gap-4 max-w-lg mt-12 pt-8 border-t border-secondary/5">
                 {selected.specs.map((spec, i) => {
                    const [k, v] = spec.split(": ")
                    return (
                      <div key={i} className="border-b border-secondary/5 pb-2">
                         <span className="text-[10px] font-mono text-secondary/30 uppercase block">{k}</span>
                         <span className="text-xs font-bold text-secondary uppercase tabular-nums">{v}</span>
                      </div>
                    )
                 })}
               </div>
             )}

             {selected.type === "folder" && (
                <div className="mt-12 flex items-center justify-center border-2 border-dashed border-secondary/5 h-48 bg-neutral/10">
                   <p className="text-[10px] font-black uppercase tracking-widest text-secondary/20">Selecione uma especificação técnica</p>
                </div>
             )}
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
             <Database className="w-16 h-16 text-secondary/5 mb-6" />
             <h3 className="text-xl font-heading font-black uppercase tracking-tighter text-secondary/30">
               Explorador de <br/>Ligas e Ferramentas
             </h3>
             <p className="max-w-xs text-[10px] font-mono text-secondary/20 uppercase tracking-widest mt-4">
               Selecione uma categoria na árvore ao lado para visualizar os parâmetros técnicos de usinagem.
             </p>
          </div>
        )}
        
        {/* Footer info bar */}
        <div className="p-2 bg-secondary text-[8px] font-mono text-white/40 uppercase tracking-widest flex justify-between items-center px-4">
           <span>DB_VERSION: v2.0.26_RECOM</span>
           <span>STATUS: AGNOSTIC DATA SYNC OK</span>
        </div>
      </div>
    </div>
  )
}
