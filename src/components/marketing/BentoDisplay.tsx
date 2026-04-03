import * as React from "react"
import { Calculator, FileText, Headphones, Globe, Zap, Settings, ShieldAlert, Cpu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { MachiningCalculator } from "../internal/MachiningCalculator"

const actions = [
  {
    title: "Calculadora Técnica",
    description: "Cálculo de VC, Avanço e RPM para fresamento e furação.",
    icon: Calculator,
    color: "bg-primary text-white",
    span: "group-hover:translate-x-2",
  },
  {
    title: "Catálogos 2026",
    description: "Download imediato de bibliotecas DXF e PDFs técnicos.",
    icon: FileText,
    color: "bg-secondary text-primary",
    span: "group-hover:translate-y-2",
  },
  {
    title: "Suporte Especializado",
    description: "Chat direto com engenharia de aplicação RECOM.",
    icon: Headphones,
    color: "bg-neutral text-secondary",
    span: "group-hover:scale-105",
  },
  {
    title: "RECOM Cloud",
    description: "Sincronização de ferramentas e vida útil em tempo real.",
    icon: Globe,
    color: "bg-white border-2 border-secondary",
    span: "group-hover:-translate-x-2",
  },
  {
    title: "Performance Turbo",
    description: "Otimização de processos para redução de setup.",
    icon: Zap,
    color: "bg-primary/20 text-primary",
    span: "group-hover:rotate-12",
  },
  {
    title: "Configurações",
    description: "Personalização de interface e alertas de estoque.",
    icon: Settings,
    color: "bg-secondary/10 text-secondary",
    span: "group-hover:opacity-50",
  },
  {
    title: "Alertas de Risco",
    description: "Monitoramento de estoque baixo e previsões mensais.",
    icon: ShieldAlert,
    color: "bg-emerald-50 text-emerald-600",
    span: "group-hover:skew-x-2",
  },
  {
    title: "Integração API",
    description: "Conecte sua fábrica ao ecossistema RECOM.",
    icon: Cpu,
    color: "bg-neutral border border-secondary/10",
    span: "group-hover:brightness-125",
  },
]

export function BentoDisplay() {
  const [isCalcOpen, setIsCalcOpen] = React.useState(false)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <>
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {actions.map((action, idx) => (
          <motion.div
            key={idx}
            variants={item}
            whileHover={{ y: -5 }}
            onClick={() => action.title === "Calculadora Técnica" && setIsCalcOpen(true)}
            className={`group relative p-6 border border-secondary/10 transition-all duration-300 cursor-pointer overflow-hidden ${action.color}`}
            style={{ borderRadius: 0 }}
          >
          {/* Subtle grid background for each card */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#333_1px,transparent_1px)] bg-[size:10px_10px]" />
          
          <div className="relative z-10">
            <div className={`p-3 w-fit mb-4 mb-4 transition-transform ${action.span}`} style={{ borderRadius: 0 }}>
              <action.icon className="w-6 h-6" />
            </div>
            
            <h3 className="text-lg font-heading font-black uppercase tracking-tighter mb-2 leading-none">
              {action.title}
            </h3>
            
            <p className="text-[10px] font-mono leading-tight opacity-60 uppercase tracking-widest leading-relaxed">
              {action.description}
            </p>
          </div>
          
          {/* Industrial detail: corner mark */}
          <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-current opacity-20" />
          <div className="absolute bottom-4 right-6 text-xs font-black opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
            GO
          </div>
        </motion.div>
      ))}
    </motion.div>

    {/* CALCULATOR MODAL */}
      <AnimatePresence>
        {isCalcOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCalcOpen(false)}
              className="fixed inset-0 bg-secondary/80 backdrop-blur-md z-[100]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="fixed inset-0 m-auto w-full max-w-4xl h-fit z-[110] p-4"
            >
              <div className="relative">
                <button 
                  onClick={() => setIsCalcOpen(false)}
                  className="absolute -top-12 right-0 p-2 text-white hover:text-primary transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
                <MachiningCalculator />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
