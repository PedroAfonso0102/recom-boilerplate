import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calculator, X, RotateCcw, ArrowRight } from "lucide-react"

export function MachiningCalculator() {
  const [diameter, setDiameter] = React.useState<number>(10)
  const [vc, setVc] = React.useState<number>(120)
  const [fz, setFz] = React.useState<number>(0.05)
  const [z, setZ] = React.useState<number>(4)

  const rpm = Math.round((vc * 1000) / (Math.PI * diameter))
  const feed = Math.round(rpm * fz * z)

  return (
    <div className="bg-secondary p-8 border-l-4 border-primary shadow-2xl relative overflow-hidden" style={{ borderRadius: 0 }}>
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:10px_10px]" />
      
      <header className="mb-8 relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <Calculator className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-heading font-black text-white italic uppercase tracking-tighter">
            Calculadora de Parâmetros / V1.2
          </h2>
        </div>
        <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
          ESTIMATIVA TÉCNICA DE USINAGEM - RECOM METAL DURO
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        <div className="space-y-6">
          <div className="space-y-4">
            <label className="block">
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">Diâmetro da Ferramenta (mm)</span>
              <input 
                type="number" 
                value={diameter} 
                onChange={(e) => setDiameter(Number(e.target.value))}
                className="w-full bg-white/5 border border-white/20 p-4 text-white font-mono text-xl focus:border-primary outline-none transition-all"
                style={{ borderRadius: 0 }}
              />
            </label>
            <label className="block">
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">Velocidade de Corte (VC m/min)</span>
              <input 
                type="number" 
                value={vc} 
                onChange={(e) => setVc(Number(e.target.value))}
                className="w-full bg-white/5 border border-white/20 p-4 text-white font-mono text-xl focus:border-primary outline-none transition-all"
                style={{ borderRadius: 0 }}
              />
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label>
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">Avanço (fz mm/z)</span>
                <input 
                  type="number" 
                  step="0.01"
                  value={fz} 
                  onChange={(e) => setFz(Number(e.target.value))}
                  className="w-full bg-white/5 border border-white/20 p-4 text-white font-mono text-sm focus:border-primary outline-none transition-all"
                  style={{ borderRadius: 0 }}
                />
              </label>
              <label>
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">Nº de Cortes (Z)</span>
                <input 
                  type="number" 
                  value={z} 
                  onChange={(e) => setZ(Number(e.target.value))}
                  className="w-full bg-white/5 border border-white/20 p-4 text-white font-mono text-sm focus:border-primary outline-none transition-all"
                  style={{ borderRadius: 0 }}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="bg-tertiary p-8 border border-white/5 flex flex-col justify-center space-y-8 shadow-inner">
          <div>
            <span className="text-primary font-bold text-[10px] tracking-widest uppercase block mb-1">Rotação Estimada</span>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-heading font-black text-white">{rpm}</span>
              <span className="text-white/20 font-mono text-xs italic">RPM</span>
            </div>
          </div>
          
          <div>
            <span className="text-primary font-bold text-[10px] tracking-widest uppercase block mb-1">Avanço de Mesa</span>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-heading font-black text-white">{feed}</span>
              <span className="text-white/20 font-mono text-xs italic">mm/min</span>
            </div>
          </div>

          <button className="w-full bg-primary text-white py-4 font-bold text-xs uppercase tracking-[0.3em] hover:bg-primary/90 transition-all flex items-center justify-center gap-2" style={{ borderRadius: 0 }}>
            ENVIAR PARA ORÇAMENTO <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {/* Industrial footer for calculator */}
      <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center text-[8px] font-mono text-white/20 tracking-[0.5em] uppercase">
        <span>Model: RC-CALC-SPA-2026</span>
        <span>Precision Level: ±0.01%</span>
      </div>
    </div>
  )
}
