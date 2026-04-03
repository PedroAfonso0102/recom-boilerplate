import { motion } from "framer-motion"

interface SkeletonProps {
  className?: string
  variant?: "title" | "body" | "card" | "table-row"
}

export function Skeleton({ className = "", variant = "body" }: SkeletonProps) {
  const baseClasses = "relative overflow-hidden bg-neutral-200"
  
  const variantClasses = {
    title: "h-8 w-48 mb-6",
    body: "h-4 w-full mb-3",
    card: "h-[300px] w-full",
    "table-row": "h-12 w-full",
  }

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{ borderRadius: 0 }}
    >
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "linear",
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
      />
    </div>
  )
}

export function SkeletonInventory() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-end mb-8">
        <Skeleton variant="title" />
        <Skeleton className="w-32 h-10" />
      </div>
      <div className="space-y-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} variant="table-row" />
        ))}
      </div>
    </div>
  )
}
