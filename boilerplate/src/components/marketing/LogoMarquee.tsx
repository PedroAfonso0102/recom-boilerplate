import { motion } from "framer-motion"
import { ShieldCheck, Drill, Truck, Search, Gauge, BoxSelect, Cpu, Cog } from "lucide-react"

const logos = [
  { name: "CERTIFIED ISO 9001", icon: ShieldCheck },
  { name: "RECOM PRECISION", icon: Drill },
  { name: "LOGISTICS 360", icon: Truck },
  { name: "R&D INNOVATION", icon: Search },
  { name: "PERFORMANCE LAB", icon: Gauge },
  { name: "METAL DUR-A", icon: BoxSelect },
  { name: "TECH SYSTEM", icon: Cpu },
  { name: "INDUSTRIAL GEAR", icon: Cog },
]

export function LogoMarquee() {
  return (
    <div className="w-full bg-secondary py-8 overflow-hidden border-y border-white/5 select-none">
      <div className="max-w-7xl mx-auto mb-4 px-8">
        <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.5em]">
          Certificações & Redes de Distribuição Global
        </span>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          className="flex whitespace-nowrap gap-12 py-4"
        >
          {/* First set of logos */}
          {logos.map((logo, idx) => (
            <div key={idx} className="flex items-center gap-3 text-white/30 hover:text-primary transition-colors group">
              <logo.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-mono font-bold tracking-widest uppercase">{logo.name}</span>
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {logos.map((logo, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-3 text-white/30 hover:text-primary transition-colors group">
              <logo.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-mono font-bold tracking-widest uppercase">{logo.name}</span>
            </div>
          ))}
        </motion.div>
        
        {/* Repeating for triple-length to ensure no gaps */}
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          className="flex whitespace-nowrap gap-12 py-4"
        >
          {logos.map((logo, idx) => (
            <div key={`dup2-${idx}`} className="flex items-center gap-3 text-white/30 hover:text-primary transition-colors group">
              <logo.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-mono font-bold tracking-widest uppercase">{logo.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative gradient masks for a "fade" effect at the edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />
    </div>
  )
}
