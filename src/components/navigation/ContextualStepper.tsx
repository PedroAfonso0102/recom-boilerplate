import React from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

interface Step {
  title: string
  status: 'complete' | 'current' | 'upcoming'
}

interface StepperProps {
  steps: Step[]
}

export function ContextualStepper({ steps }: StepperProps) {
  return (
    <div className="flex items-center gap-4 w-full">
      {steps.map((step, idx) => (
        <React.Fragment key={idx}>
          <div className="flex-1 flex items-center gap-3">
            <div 
              className={`w-8 h-8 flex items-center justify-center font-mono text-xs font-bold transition-all radius-0 ${
                step.status === 'complete' 
                  ? 'bg-primary-500 text-white' 
                  : step.status === 'current'
                    ? 'bg-secondary-900 text-white ring-4 ring-secondary-900/10'
                    : 'bg-secondary-100 text-secondary-500/40'
              }`}
            >
              {step.status === 'complete' ? <Check className="w-4 h-4" /> : idx + 1}
            </div>
            <div className="flex flex-col">
              <span className={`text-[10px] font-mono uppercase tracking-widest leading-none mb-1 ${
                step.status === 'upcoming' ? 'text-secondary-500/30' : 'text-secondary-900'
              }`}>
                {step.title}
              </span>
              <span className="text-[8px] font-bold text-primary-500 tracking-tighter uppercase">
                {step.status === 'current' ? 'Processando' : ''}
              </span>
            </div>
          </div>
          
          {idx < steps.length - 1 && (
            <div className="w-12 h-[2px] bg-secondary-100 relative overflow-hidden">
               {step.status === 'complete' && (
                 <motion.div 
                   initial={{ scaleX: 0 }}
                   animate={{ scaleX: 1 }}
                   className="absolute inset-0 bg-primary-500 origin-left"
                 />
               )}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}
