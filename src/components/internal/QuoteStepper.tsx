import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, ChevronRight, ChevronLeft, Send, ClipboardCheck, Settings, Package, User } from "lucide-react"

const steps = [
  { id: "customer", title: "IDENTIFICAÇÃO", icon: User },
  { id: "parts", title: "ESPECIFICAÇÕES", icon: Settings },
  { id: "shipping", title: "LOGÍSTICA", icon: Package },
  { id: "review", title: "RESUMO", icon: ClipboardCheck },
]

export function QuoteStepper() {
  const [currentStep, setCurrentStep] = React.useState(0)
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleNext = () => currentStep < steps.length - 1 && setCurrentStep(currentStep + 1)
  const handleBack = () => currentStep > 0 && setCurrentStep(currentStep - 1)
  
  const handleFinish = () => {
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setCurrentStep(0)
      alert("Solicitação de Orçamento enviada com sucesso!")
    }, 2000)
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white border border-secondary/10 shadow-2xl p-1 relative overflow-hidden" style={{ borderRadius: 0 }}>
      {/* Header Stepper Index */}
      <div className="flex bg-neutral/30 border-b border-secondary/5">
        {steps.map((step, idx) => (
          <div 
            key={step.id} 
            className={`flex-1 flex items-center gap-3 py-6 px-8 transition-colors relative border-r last:border-r-0 border-secondary/5 ${idx <= currentStep ? 'bg-white' : 'opacity-40 grayscale'}`}
          >
            <div className={`w-8 h-8 flex items-center justify-center font-black text-[10px] ${idx < currentStep ? 'bg-emerald-500 text-white' : idx === currentStep ? 'bg-primary text-white' : 'bg-secondary/10 text-secondary'}`} style={{ borderRadius: 0 }}>
               {idx < currentStep ? <Check className="w-4 h-4" /> : `0${idx + 1}`}
            </div>
            <div>
              <p className={`text-[10px] font-black uppercase tracking-widest leading-none ${idx === currentStep ? 'text-primary' : 'text-secondary/40'}`}>
                {step.title}
              </p>
              <div className="h-0.5 w-[20px] bg-secondary/10 mt-2" />
            </div>
            {/* Active Indicator Bar */}
            {idx === currentStep && (
               <motion.div layoutId="activeStep" className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
            )}
          </div>
        ))}
      </div>

      <div className="p-12 min-h-[400px] flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
            className="flex-1"
          >
            {/* Step 1: Customer */}
            {currentStep === 0 && (
              <div className="space-y-8">
                <div className="max-w-md">
                   <h2 className="text-3xl font-heading font-black uppercase tracking-tighter text-secondary mb-2">
                     Dados do Solicitante
                   </h2>
                   <p className="text-[10px] font-mono text-secondary/40 uppercase tracking-widest leading-relaxed">
                     Informe os detalhes corporativos para processamento da ordem.
                   </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-secondary/60 block">Empresa / CNPJ</label>
                    <input type="text" className="w-full p-4 border border-secondary/10 focus:border-primary outline-none text-sm font-mono uppercase bg-neutral/10" placeholder="RAZÃO SOCIAL" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-secondary/60 block">E-mail Corporativo</label>
                    <input type="email" className="w-full p-4 border border-secondary/10 focus:border-primary outline-none text-sm font-mono uppercase bg-neutral/10" placeholder="EMAIL@EMPRESA.COM" />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Parts */}
            {currentStep === 1 && (
              <div className="space-y-8">
                <div className="max-w-md">
                   <h2 className="text-3xl font-heading font-black uppercase tracking-tighter text-secondary mb-2">
                     Configuração Técnica
                   </h2>
                   <p className="text-[10px] font-mono text-secondary/40 uppercase tracking-widest leading-relaxed">
                     Especifique o material e os parâmetros de corte requeridos.
                   </p>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-secondary/60 block">Material Base</label>
                    <select className="w-full p-4 border border-secondary/10 focus:border-primary outline-none text-xs font-black uppercase bg-neutral/10" style={{ borderRadius: 0 }}>
                       <option>ISO P (Aço)</option>
                       <option>ISO M (Inox)</option>
                       <option>ISO K (Ferro Fundido)</option>
                       <option>ISO S (Superligas)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-secondary/60 block">Operação</label>
                    <select className="w-full p-4 border border-secondary/10 focus:border-primary outline-none text-xs font-black uppercase bg-neutral/10" style={{ borderRadius: 0 }}>
                       <option>Torneamento</option>
                       <option>Fresamento</option>
                       <option>Furação</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-secondary/60 block">Volume Mensal</label>
                    <input type="number" className="w-full p-4 border border-secondary/10 focus:border-primary outline-none text-sm font-mono uppercase bg-neutral/10" placeholder="000 UNIDADES" />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Logistics */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <div className="max-w-md">
                   <h2 className="text-3xl font-heading font-black uppercase tracking-tighter text-secondary mb-2">
                     Preferências de Entrega
                   </h2>
                   <p className="text-[10px] font-mono text-secondary/40 uppercase tracking-widest leading-relaxed">
                     Defina prazos e modalidade de frete para o suprimento.
                   </p>
                </div>
                
                <div className="flex gap-4">
                   {["Normal (7-10d)", "Urgente (48h)", "FOB - Retirada"].map(type => (
                     <button key={type} className="flex-1 p-6 border border-secondary/10 hover:border-primary hover:bg-primary/5 transition-all flex flex-col items-center gap-3">
                        <Package className="w-6 h-6 opacity-30" />
                        <span className="text-[10px] font-black uppercase tracking-widest">{type}</span>
                     </button>
                   ))}
                </div>
              </div>
            )}

            {/* Step 4: Summary */}
            {currentStep === 3 && (
              <div className="space-y-8">
                <div className="max-w-md">
                   <h2 className="text-3xl font-heading font-black uppercase tracking-tighter text-secondary mb-2">
                     Revisão da Ordem
                   </h2>
                   <p className="text-[10px] font-mono text-secondary/40 uppercase tracking-widest leading-relaxed">
                     Confirme os dados antes de submeter para nossa engenharia.
                   </p>
                </div>
                
                <div className="bg-neutral/30 p-8 border border-secondary/5 font-mono text-xs space-y-4">
                   <div className="flex justify-between border-b border-secondary/5 pb-2">
                      <span className="opacity-40 uppercase">EMPRESA:</span>
                      <span className="font-bold">INDÚSTRIAS XPTO LTDA</span>
                   </div>
                   <div className="flex justify-between border-b border-secondary/5 pb-2">
                      <span className="opacity-40 uppercase">MATERIAL:</span>
                      <span className="font-bold">ISO P / TORNEAMENTO</span>
                   </div>
                   <div className="flex justify-between border-b border-secondary/5 pb-2">
                      <span className="opacity-40 uppercase">LOGÍSTICA:</span>
                      <span className="font-bold">URGENTE (48H)</span>
                   </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-auto pt-12 flex justify-between items-center border-t border-secondary/5">
           <button 
             onClick={handleBack}
             disabled={currentStep === 0}
             className="flex items-center gap-2 group px-6 py-4 hover:bg-neutral transition-colors disabled:opacity-20"
           >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-widest">Voltar</span>
           </button>
           
           {currentStep < steps.length - 1 ? (
             <button 
               onClick={handleNext}
               className="flex items-center gap-2 group px-8 py-4 bg-secondary text-white hover:bg-primary transition-colors"
             >
                <span className="text-[10px] font-black uppercase tracking-widest">Avançar Etapa</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </button>
           ) : (
             <button 
               onClick={handleFinish}
               disabled={isSubmitting}
               className="flex items-center gap-4 group px-12 py-4 bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
             >
                <span className="text-[10px] font-black uppercase tracking-widest">
                  {isSubmitting ? "Processando..." : "Submeter Solicitação"}
                </span>
                <Send className="w-4 h-4 group-hover:-rotate-45 group-hover:translate-x-1 transition-all" />
             </button>
           )}
        </div>
      </div>
      
      {/* Side visual background detail */}
      <div className="absolute top-0 right-0 w-32 h-full opacity-[0.02] bg-[radial-gradient(#333_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
    </div>
  )
}
