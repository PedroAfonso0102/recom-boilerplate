import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const steps = [
  {
    temp: "25ºC",
    title: "COMPRESSÃO ISOTÁTICA",
    description: "Pó de Tungstênio e Cobalto são prensados a 200MPa para formação do 'verde'.",
    color: "bg-neutral text-secondary",
  },
  {
    temp: "800ºC",
    title: "DESLIGAMENTO",
    description: "Remoção controlada de ligantes orgânicos para garantir a pureza estrutural.",
    color: "bg-amber-100 text-amber-900 border-amber-200",
  },
  {
    temp: "1400ºC",
    title: "SINTERIZAÇÃO",
    description: "O Cobalto funde, aglutinando os cristais de Tungstênio em dureza máxima.",
    color: "bg-orange-500 text-white border-orange-600 shadow-orange-500/20 shadow-lg",
  },
  {
    temp: "100ºC",
    title: "RESFRIAMENTO CRIOGÊNICO",
    description: "Estabilização molecular para eliminar tensões residuais pós-forja.",
    color: "bg-blue-500 text-white border-blue-600 shadow-blue-500/20 shadow-lg",
  },
]

export function ProcessReveal() {
  const containerRef = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="sticky top-24">
             <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-1">
               Processo Metalúrgico / Eng-01
             </span>
             <h2 className="text-5xl font-heading font-black text-secondary tracking-tighter uppercase leading-none">
               A Forja do <br/>Metal Duro
             </h2>
             <p className="mt-6 text-secondary/60 max-w-md font-mono text-xs uppercase leading-relaxed tracking-wider">
               A excelência da RECOM começa na base molecular. Cada ferramenta passa por um processo de sinterização a vácuo para garantir densidade absoluta.
             </p>
             
             <div className="mt-12 space-y-4">
                {steps.map((step, idx) => {
                  const opacity = useTransform(
                    scrollYProgress,
                    [idx * 0.25, (idx + 0.2) * 0.25],
                    [0.2, 1]
                  )
                  return (
                    <motion.div 
                      key={idx} 
                      style={{ opacity }}
                      className="flex items-center gap-4 border-l-2 border-secondary/10 pl-6 py-2"
                    >
                      <span className="text-2xl font-black text-primary w-24 tabular-nums">
                        {step.temp}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-secondary/40">
                        {step.title}
                      </span>
                    </motion.div>
                  )
                })}
             </div>
          </div>

          <div className="space-y-32 pt-24">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`p-10 border relative group overflow-hidden ${step.color}`}
                style={{ borderRadius: 0 }}
              >
                {/* Background number */}
                <span className="absolute -bottom-4 -right-2 text-9xl font-black opacity-[0.05] pointer-events-none">
                  0{idx + 1}
                </span>
                
                <div className="relative z-10">
                  <span className="inline-block py-1 px-3 bg-white/20 backdrop-blur-sm text-[10px] font-black uppercase mb-6 tracking-widest">
                    Stage {idx + 1} / {step.temp}
                  </span>
                  <h3 className="text-3xl font-heading font-black uppercase tracking-tight mb-4">
                    {step.title}
                  </h3>
                  <p className="text-sm font-mono uppercase tracking-wide leading-relaxed opacity-80">
                    {step.description}
                  </p>
                </div>

                {/* Industrial detail: Corner mark */}
                <div className="absolute top-0 right-0 w-8 h-8 opacity-20">
                  <div className="absolute top-4 right-4 w-px h-8 bg-current" />
                  <div className="absolute top-4 right-4 w-8 h-px bg-current" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
