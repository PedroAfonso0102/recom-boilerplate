import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Drill as DrillIcon, Scissors, Zap } from "lucide-react"

const sections = [
  {
    id: "turning",
    title: "Torneamento",
    subtitle: "ALTA PRODUTIVIDADE",
    description: "Inserto de Metal Duro com quebra-cavaco avançado para acabamento espelhado e desbaste pesado.",
    icon: Scissors,
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800",
    color: "bg-primary",
    tag: "ISO-P / ISO-K",
  },
  {
    id: "milling",
    title: "Fresamento",
    subtitle: "GEOMETRIA DE PRECISÃO",
    description: "Fresas de topo e cabeçotes intercambiáveis para máxima remoção de material em ligas especiais.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&q=80&w=800",
    color: "bg-secondary",
    tag: "3-AXIS / 5-AXIS",
  },
  {
    id: "drilling",
    title: "Furação",
    subtitle: "PONTAS E BROCAS",
    description: "Brocas de Metal Duro com refrigeração interna e pontas de alta performance para furos profundos.",
    icon: DrillIcon,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800",
    color: "bg-neutral",
    tag: "Holemaking / HPC",
  },
]

export function InteractiveHero() {
  const [hovered, setHovered] = React.useState<string | null>(null)

  return (
    <div className="relative w-full h-[600px] flex border-b border-secondary/10 bg-secondary overflow-hidden">
      {sections.map((section) => (
        <motion.div
          key={section.id}
          onMouseEnter={() => setHovered(section.id)}
          onMouseLeave={() => setHovered(null)}
          animate={{
            width: hovered === section.id ? "50%" : hovered ? "25%" : "33.33%",
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full flex flex-col justify-end p-12 cursor-pointer border-r border-white/5 last:border-r-0 group overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
             <img 
               src={section.image} 
               alt={section.title}
               className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-700 scale-105 group-hover:scale-100"
             />
             <div className={`absolute inset-0 opacity-40 mix-blend-multiply ${section.color}`} />
          </div>

          <div className="relative z-10 text-white">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-[10px] font-black uppercase mb-4 tracking-widest border border-white/10">
              {section.tag}
            </span>
            <div className="flex items-center gap-4 mb-4">
               <section.icon className="w-8 h-8 text-primary" />
               <h3 className="text-3xl lg:text-5xl font-heading font-black uppercase tracking-tighter leading-none break-words">
                 {section.title}
               </h3>
            </div>
            
            <motion.div
              animate={{ 
                height: hovered === section.id ? "auto" : 0,
                opacity: hovered === section.id ? 1 : 0
              }}
              className="overflow-hidden"
            >
              <p className="text-sm font-mono uppercase tracking-widest leading-relaxed text-white/70 max-w-md mt-4">
                {section.description}
              </p>
              <button className="mt-8 flex items-center gap-2 group/btn">
                <span className="text-[10px] font-black uppercase tracking-widest">Acessar Catálogo</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Decorative index */}
          <span className="absolute top-12 left-12 text-[10px] font-black opacity-40 tracking-[1em] text-white">
            0{sections.indexOf(section) + 1}
          </span>
        </motion.div>
      ))}
    </div>
  )
}
