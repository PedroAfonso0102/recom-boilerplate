import React from "react"
import { motion } from "framer-motion"
import { MoreVertical, Layers, Clock, AlertCircle } from "lucide-react"

interface KanbanCard {
  id: string
  title: string
  sku: string
  priority: 'high' | 'medium' | 'low'
  date: string
}

interface KanbanColumn {
  title: string
  cards: KanbanCard[]
  color: string
}

interface KanbanBoardProps {
  columns: KanbanColumn[]
}

export function KanbanBoard({ columns }: KanbanBoardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start h-full">
      {columns.map((column, idx) => (
        <div key={idx} className="flex flex-col h-full bg-secondary-900/5 p-4 border-t-2 border-primary-500/20 radius-0">
          <header className={`flex items-center justify-between mb-6 pb-2 border-b border-secondary-900/10 ${column.color}`}>
             <div className="flex items-center gap-2">
                <div className={`w-2 h-2 radius-0 ${column.color.replace('text-', 'bg-')}`} />
                <h3 className="font-heading font-black text-xs uppercase tracking-widest text-secondary-900">
                  {column.title}
                </h3>
             </div>
             <span className="font-mono text-[10px] font-bold text-secondary-500/40">
                {column.cards.length}
             </span>
          </header>

          <div className="space-y-4 flex-1 overflow-y-auto min-h-[500px]">
             {column.cards.map((card) => (
               <motion.div
                 key={card.id}
                 layout
                 className="p-4 bg-white border border-secondary-500/10 shadow-sm radius-0 group hover:border-primary-500/40 transition-colors cursor-pointer"
               >
                  <div className="flex justify-between items-start mb-3">
                     <span className={`text-[8px] font-mono font-black px-2 py-0.5 border ${
                        card.priority === 'high' ? 'text-primary-500 border-primary-500/20 bg-primary-50' : 'text-secondary-500/60 border-secondary-500/10'
                     }`}>
                        {card.priority}
                     </span>
                     <button className="text-secondary-500/20 hover:text-secondary-900">
                        <MoreVertical className="w-4 h-4" />
                     </button>
                  </div>
                  
                  <h4 className="font-heading font-black text-xs uppercase tracking-tight text-secondary-900 mb-2 leading-tight">
                    {card.title}
                  </h4>
                  
                  <div className="flex flex-col gap-2 border-t border-secondary-500/5 pt-3 mt-3">
                     <div className="flex items-center gap-2 text-[10px] font-mono text-secondary-500/40 uppercase">
                        <Layers className="w-3 h-3" /> {card.sku}
                     </div>
                     <div className="flex items-center gap-2 text-[10px] font-mono text-secondary-500/40 uppercase tracking-tighter">
                        <Clock className="w-3 h-3" /> {card.date}
                     </div>
                  </div>
               </motion.div>
             ))}
          </div>
          
          <button className="mt-4 w-full py-3 border border-dashed border-secondary-500/20 text-[10px] font-mono text-secondary-500/40 uppercase tracking-widest hover:bg-white hover:text-primary-500 transition-all">
             Adicionar Tarefa +
          </button>
        </div>
      ))}
    </div>
  )
}
