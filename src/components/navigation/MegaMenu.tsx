import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Wrench, Settings, Shield, Cpu, ChevronDown, ArrowRight } from "lucide-react"

interface MegaMenuItem {
  title: string
  description: string
  icon: any
}

interface MegaMenuCategory {
  title: string
  items: MegaMenuItem[]
}

export function MegaMenu() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-2 font-heading font-black text-sm uppercase tracking-tighter hover:text-primary-500 transition-colors py-8">
        PRODUTOS <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.2 }}
              className="fixed left-0 right-0 bg-white border-b-4 border-primary-500 shadow-2xl z-[100] px-8 py-16"
              style={{ top: '80px' }}
            >
              <div className="max-w-7xl mx-auto grid grid-cols-4 gap-12">
                {categories.map((cat, idx) => (
                  <div key={idx} className="space-y-6">
                    <h3 className="font-heading font-black text-primary-500 text-xs uppercase tracking-widest border-b border-primary-500/10 pb-4">
                      {cat.title}
                    </h3>
                    <div className="space-y-4">
                      {cat.items.map((item, itemIdx) => (
                        <a 
                          key={itemIdx}
                          href="#"
                          className="group flex items-start gap-4 p-4 hover:bg-neutral transition-colors radius-0"
                        >
                          <div className="p-2 bg-secondary-900 text-white transition-transform group-hover:scale-110">
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-heading font-black text-xs uppercase tracking-tight text-secondary-900 group-hover:text-primary-500 transition-colors mb-1">
                              {item.title}
                            </div>
                            <div className="text-[10px] font-mono text-secondary-500/60 leading-tight">
                              {item.description}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-secondary-900/40 backdrop-blur-sm z-[90]"
              style={{ top: '80px' }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

const categories: MegaMenuCategory[] = [
  {
    title: "FRESEMENTO DE ALTA PERFORMANCE",
    items: [
      { title: "Fresas de Topo", description: "Linha Gold para aços endurecidos.", icon: Wrench },
      { title: "Fresas de Desbaste", description: "Remoção massiva com vibração zero.", icon: Wrench },
    ]
  },
  {
    title: "FURAÇÃO E ROSCAMENTO",
    items: [
      { title: "Brocas de Metal Duro", description: "Eficiência máxima em furos profundos.", icon: Cpu },
      { title: "Machos de Precisão", description: "Roscas perfeitas em materiais exóticos.", icon: Settings },
    ]
  },
  {
    title: "SOLUÇÕES ESPECIAIS (PCD)",
    items: [
      { title: "PCD Diamond Line", description: "Durabilidade extrema em compósitos.", icon: Shield },
      { title: "Ferramentas Customizadas", description: "Projetos sob medida para sua planta.", icon: Settings },
    ]
  },
  {
    title: "SISTEMAS DE FIXAÇÃO",
    items: [
      { title: "Mandris Hidráulicos", description: "Batimento próximo de zero microns.", icon: Cpu },
      { title: "Sistemas Termo", description: "Fixação por indução térmica.", icon: Shield },
    ]
  }
]
