import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, AlertCircle, Info, CheckCircle, HelpCircle } from "lucide-react"

export type ModalType = 'default' | 'danger' | 'success' | 'info'

interface ModalDialogProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description?: string
  children?: React.ReactNode
  footer?: React.ReactNode
  type?: ModalType
}

export function ModalDialog({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  type = 'default'
}: ModalDialogProps) {
  const icons = {
    danger: <AlertCircle className="w-12 h-12 text-primary-500" />,
    success: <CheckCircle className="w-12 h-12 text-emerald-500" />,
    info: <Info className="w-12 h-12 text-sky-500" />,
    default: <HelpCircle className="w-12 h-12 text-secondary-500/20" />,
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-secondary-900/80 backdrop-blur-sm z-[200]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="fixed inset-0 m-auto w-full max-w-lg h-fit bg-white shadow-2xl z-[210] overflow-hidden radius-0 flex flex-col"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-primary-500/10">
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                className={`h-full origin-left ${type === 'danger' ? 'bg-primary-500' : type === 'success' ? 'bg-emerald-500' : 'bg-primary-500'}`} 
              />
            </div>
            
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-secondary-500/40 hover:text-primary-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-10 flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-neutral border border-secondary-500/5 radius-0">
                {icons[type]}
              </div>
              
              <h3 className="font-heading font-black text-2xl uppercase tracking-tighter text-secondary-900 mb-2">
                {title}
              </h3>
              
              {description && (
                <p className="text-[11px] font-mono font-medium text-secondary-500/60 uppercase tracking-widest leading-relaxed">
                  {description}
                </p>
              )}

              {children && (
                <div className="mt-8 w-full border-t border-secondary-500/5 pt-8">
                  {children}
                </div>
              )}
            </div>

            {footer && (
              <div className="p-6 bg-neutral border-t border-secondary-500/5 flex justify-end gap-4">
                {footer}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
