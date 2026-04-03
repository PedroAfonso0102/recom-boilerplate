import * as React from "react"
import { motion } from "framer-motion"

const partners = [
  { name: "MITSUBISHI MATERIALS", logo: "https://via.placeholder.com/150?text=MMC" },
  { name: "7LEADERS", logo: "https://via.placeholder.com/150?text=7L" },
  { name: "BTFIXO", logo: "https://via.placeholder.com/150?text=BTF" },
  { name: "KIFIX", logo: "https://via.placeholder.com/150?text=KFX" },
  { name: "RECOM PRECISION", logo: "https://via.placeholder.com/150?text=RECOM" },
]

export function PartnerMarquee() {
  return (
    <div className="w-full bg-secondary border-y border-white/5 py-12 overflow-hidden select-none relative">
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-secondary to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-secondary to-transparent z-10" />
      
      <div className="max-w-7xl mx-auto px-8 mb-6">
        <h2 className="text-[10px] font-mono text-white/40 uppercase tracking-[0.5em]">
          Authorized Industrial Distribution Network
        </h2>
      </div>

      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap gap-20 items-center px-10"
        >
          {[...partners, ...partners].map((partner, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center gap-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-crosshair group"
            >
              <div className="h-12 w-32 flex items-center justify-center p-2 border border-white/10 group-hover:border-primary transition-colors bg-white/5">
                 <span className="text-white font-heading font-black text-xs tracking-tighter text-center">
                    {partner.name}
                 </span>
              </div>
              <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest group-hover:text-primary transition-colors">
                Certified Partner 2026
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
