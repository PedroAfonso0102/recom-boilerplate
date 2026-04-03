import React from "react"

export type StatusType = 'success' | 'warning' | 'error' | 'info' | 'neutral'

interface StatusBadgeProps {
  status: StatusType
  label: string
}

export function StatusBadge({ status, label }: StatusBadgeProps) {
  const styles = {
    success: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    warning: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    error: "bg-primary-500/10 text-primary-500 border-primary-500/20",
    info: "bg-sky-500/10 text-sky-600 border-sky-500/20",
    neutral: "bg-secondary-100 text-secondary-500/60 border-secondary-500/10",
  }

  return (
    <div className={`
      inline-flex items-center gap-2 px-3 py-1 border font-mono text-[9px] font-black uppercase tracking-widest transition-all radius-0
      ${styles[status]}
    `}>
      <span className={`w-1.5 h-1.5 radius-0 ${
        status === 'success' ? 'bg-emerald-500' : 
        status === 'warning' ? 'bg-amber-500' :
        status === 'error' ? 'bg-primary-500' :
        status === 'info' ? 'bg-sky-500' : 'bg-secondary-500/40'
      }`} />
      {label}
    </div>
  )
}
