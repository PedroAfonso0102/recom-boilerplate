import React from "react"
import { motion } from "framer-motion"
import { Check, Clock, AlertTriangle, Hammer, ShieldCheck } from "lucide-react"

interface Record {
  date: string
  title: string
  description: string
  type: 'maintenance' | 'approval' | 'warning' | 'info'
}

interface TimelineProps {
  records: Record[]
}

export function Timeline({ records }: TimelineProps) {
  const icons = {
    maintenance: <Hammer className="w-3 h-3" />,
    approval: <ShieldCheck className="w-3 h-3" />,
    warning: <AlertTriangle className="w-3 h-3" />,
    info: <Clock className="w-3 h-3" />,
  }

  const colors = {
    maintenance: "bg-amber-500",
    approval: "bg-emerald-500",
    warning: "bg-primary-500",
    info: "bg-secondary-500",
  }

  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-4 before:-translate-x-px before:h-full before:w-0.5 before:bg-secondary-500/10">
      {records.map((record, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="relative flex items-center justify-between md:justify-start md:odd:flex-row-reverse group"
        >
          <div className={`flex items-center justify-center w-8 h-8 ${colors[record.type]} text-white z-10 radius-0 transition-transform group-hover:scale-110 shadow-lg`}>
            {icons[record.type]}
          </div>
          
          <div className="w-[calc(100%-4rem)] ml-8 md:ml-4 p-4 bg-white border border-secondary-500/10 shadow-sm radius-0 group-hover:border-primary-500/20 transition-colors">
            <div className="flex items-center justify-between mb-1">
               <time className="text-[10px] font-mono font-bold text-secondary-500/40 uppercase tracking-widest">{record.date}</time>
               <span className={`text-[8px] font-mono uppercase font-black px-2 py-0.5 border ${record.type === 'approval' ? 'text-emerald-500 border-emerald-500/20 bg-emerald-50' : 'text-secondary-500/60 border-secondary-500/10 bg-secondary-50'}`}>
                  {record.type}
               </span>
            </div>
            <h4 className="font-heading font-black text-xs uppercase tracking-tight text-secondary-900 mb-1">{record.title}</h4>
            <p className="text-[10px] font-mono text-secondary-500 font-medium leading-tight opacity-60">
              {record.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
