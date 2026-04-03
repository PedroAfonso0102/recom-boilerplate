import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function HeroBranding() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section className="relative w-full min-h-[600px] flex items-center justify-center bg-white overflow-hidden p-8 border-y-2 border-secondary/10">
      {/* Background patterns: Industrial Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl text-center"
      >
        <motion.span 
          variants={itemVariants}
          className="inline-block bg-primary text-white text-[10px] font-mono px-3 py-1 mb-6 tracking-[0.2em] uppercase"
        >
          Industrial Grade Tools
        </motion.span>
        
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-8xl font-heading font-black text-secondary leading-[0.9] mb-8 tracking-tighter"
        >
          MAXIMIZE SUA <br /> 
          <span className="relative inline-block text-primary italic">
            PERFORMANCE
            {/* Underline accent */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="absolute -bottom-2 left-0 w-full h-1 bg-primary/20 origin-left"
            />
          </span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-secondary/60 font-body max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Ferramentas rotativas de alta precisão para a indústria metal-mecânica global. 
          Engenharia alemã com suporte local especializado em canais B2B.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          {/* Enhanced button with Border Beam simulation */}
          <div className="relative group overflow-hidden">
            <button className="relative z-10 px-12 py-5 bg-primary text-white font-bold text-sm tracking-[0.15em] uppercase transition-all hover:bg-primary/90 active:scale-95" style={{ borderRadius: 0 }}>
              Catálogo 2026
            </button>
            {/* Border Beam Animation */}
            <motion.div 
              animate={{
                background: [
                  "conic-gradient(from 0deg, transparent 0%, #ff4d4d 20%, transparent 40%)",
                  "conic-gradient(from 360deg, transparent 0%, #ff4d4d 20%, transparent 40%)"
                ],
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute inset-[-4px] opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </div>
          
          <button className="group flex items-center gap-2 px-12 py-5 border-2 border-secondary bg-transparent text-secondary font-bold text-sm tracking-[0.15em] uppercase hover:bg-neutral transition-all active:scale-95" style={{ borderRadius: 0 }}>
            Falar com especialista
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </motion.div>

      {/* Decorative side accents */}
      <div className="absolute left-8 bottom-8 text-[10px] font-mono text-secondary/20 vertical-text origin-bottom rotate-180 uppercase tracking-[0.5em] hidden md:block">
        © RECOM METAL DURO / GLOBAL INFRASTRUCTURE
      </div>
    </section>
  )
}
