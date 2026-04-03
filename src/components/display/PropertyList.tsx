import React from "react"

interface PropertyItem {
  label: string
  value: string
  unit?: string
}

interface PropertyListProps {
  title?: string
  properties: PropertyItem[]
  columns?: 1 | 2
}

export function PropertyList({ title, properties, columns = 2 }: PropertyListProps) {
  return (
    <div className="w-full space-y-4">
      {title && (
        <h3 className="font-heading font-black text-xs uppercase tracking-widest text-primary-500 border-b border-primary-500/10 pb-2">
          {title}
        </h3>
      )}
      
      <div className={`grid gap-x-8 gap-y-4 ${columns === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
        {properties.map((prop, idx) => (
          <div key={idx} className="flex justify-between items-baseline border-b border-secondary-500/5 pb-2 group hover:border-primary-500/20 transition-colors">
            <span className="text-[10px] font-mono uppercase tracking-tighter text-secondary-500/40 group-hover:text-secondary-900 transition-colors">
              {prop.label}
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-heading font-black text-xs uppercase tracking-tight text-secondary-900">
                {prop.value}
              </span>
              {prop.unit && (
                <span className="text-[8px] font-mono text-primary-500/60 font-bold uppercase">
                  {prop.unit}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
