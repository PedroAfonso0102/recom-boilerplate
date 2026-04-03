import { motion, AnimatePresence } from "framer-motion"
import { X, ShieldCheck, Zap, BarChart, Download, ArrowRight } from "lucide-react"

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

interface ProductSheetProps {
  product: Product | null
  onClose: () => void
}

export function ProductSheet({ product, onClose }: ProductSheetProps) {
  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-secondary/80 backdrop-blur-sm z-[60]"
          />

          {/* Sheet */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-screen w-full max-w-xl bg-white z-[70] shadow-[-20px_0_50px_rgba(0,0,0,0.2)] flex flex-col"
            style={{ borderRadius: 0 }}
          >
            {/* Header */}
            <div className="p-8 border-b-4 border-secondary flex justify-between items-start">
              <div>
                <span className="text-primary font-bold text-[10px] tracking-widest uppercase block mb-1">
                  Especificações Técnicas
                </span>
                <h2 className="text-4xl font-heading font-black tracking-tighter text-secondary uppercase">
                  {product.code}
                </h2>
                <p className="text-secondary/40 font-mono text-[10px] mt-1 italic">
                  ID: {product.id.padStart(8, '0')} / RECOM METAL DURO
                </p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-neutral text-secondary transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 space-y-12">
              <section className="space-y-4">
                <h3 className="text-xs font-bold text-primary uppercase tracking-[0.3em] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Geral
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-neutral border border-secondary/10">
                    <span className="text-[8px] font-mono text-secondary/40 uppercase block">Material de Base</span>
                    <span className="font-bold text-secondary uppercase">{product.material}</span>
                  </div>
                  <div className="p-4 bg-neutral border border-secondary/10">
                    <span className="text-[8px] font-mono text-secondary/40 uppercase block">Cobertura</span>
                    <span className="font-bold text-secondary uppercase italic">{product.coating}</span>
                  </div>
                </div>
                <p className="text-sm text-secondary/70 leading-relaxed">
                  {product.description}. Desenvolvido para máxima performance em materiais endurecidos e ligas termoresistentes.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-xs font-bold text-primary uppercase tracking-[0.3em] flex items-center gap-2">
                  <BarChart className="w-4 h-4" /> Gráfico de Vida Útil
                </h3>
                <div className="h-32 w-full bg-neutral border border-secondary/10 flex items-end px-4 py-2 gap-1 overflow-hidden group">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${Math.random() * 80 + 20}%` }}
                      className="flex-1 bg-secondary hover:bg-primary transition-colors cursor-pointer"
                      style={{ borderRadius: 0 }}
                    />
                  ))}
                </div>
                <p className="text-[10px] font-mono text-secondary/40 uppercase tracking-widest text-center">
                  Expectativa de Desgaste (T) x Tempo de Corte (Min)
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-xs font-bold text-primary uppercase tracking-[0.3em] flex items-center gap-2">
                  <Zap className="w-4 h-4" /> Ações Rápidas
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  <button className="flex justify-between items-center p-4 border-2 border-secondary hover:bg-secondary hover:text-white transition-all group" style={{ borderRadius: 0 }}>
                    <span className="font-bold uppercase text-xs tracking-widest">Baixar DXF 2D/3D</span>
                    <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  </button>
                  <button className="flex justify-between items-center p-4 bg-primary text-white hover:bg-primary/90 transition-all group" style={{ borderRadius: 0 }}>
                    <span className="font-bold uppercase text-xs tracking-widest">Solicitar Cotação</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </section>
            </div>

            {/* Sticky Footer */}
            <div className="p-8 border-t border-secondary/10 bg-neutral/30 text-[8px] font-mono text-secondary/30 uppercase tracking-[0.5em] flex justify-between items-center">
              <span>REF: {product.code}</span>
              <span>VER: 4.2.0</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
