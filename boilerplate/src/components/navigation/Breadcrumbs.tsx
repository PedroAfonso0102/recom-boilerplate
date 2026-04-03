import React from "react"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

interface BreadcrumbItem {
  label: string
  href?: string
  active?: boolean
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-secondary-500/40">
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <motion.div
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`flex items-center gap-2 ${item.active ? 'text-primary-500 font-bold' : 'hover:text-secondary-500 transition-colors'}`}
          >
            {item.href && !item.active ? (
              <a href={item.href} className="cursor-pointer">
                {item.label}
              </a>
            ) : (
              <span>{item.label}</span>
            )}
          </motion.div>
          
          {idx < items.length - 1 && (
            <ChevronRight className="w-3 h-3 text-secondary-500/20" />
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}
