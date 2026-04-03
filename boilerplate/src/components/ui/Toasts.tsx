import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle, AlertCircle, Info } from "lucide-react"

type ToastType = "success" | "error" | "info"

interface Toast {
  id: string
  message: string
  type: ToastType
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([])

  const addToast = (message: string, type: ToastType = "info") => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts((prev) => [...prev, { id, message, type }])
    setTimeout(() => removeToast(id), 5000)
  }

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed top-8 right-8 z-[100] space-y-3 w-80">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              className={`flex items-start gap-3 p-4 border shadow-2xl relative overflow-hidden bg-white
                ${toast.type === 'success' ? 'border-emerald-500/20' : 
                  toast.type === 'error' ? 'border-primary/20' : 'border-secondary/20'}`}
              style={{ borderRadius: 0 }}
            >
              {/* Vertical accent */}
              <div className={`absolute top-0 left-0 w-1 h-full 
                ${toast.type === 'success' ? 'bg-emerald-500' : 
                  toast.type === 'error' ? 'bg-primary' : 'bg-secondary'}`} />
              
              <div className="mt-0.5">
                {toast.type === 'success' && <CheckCircle className="w-4 h-4 text-emerald-500" />}
                {toast.type === 'error' && <AlertCircle className="w-4 h-4 text-primary" />}
                {toast.type === 'info' && <Info className="w-4 h-4 text-secondary/60" />}
              </div>
              
              <div className="flex-1">
                <p className="text-[10px] font-bold text-secondary uppercase tracking-widest leading-tight">
                  {toast.type === 'success' ? 'Operação Concluída' : 
                   toast.type === 'error' ? 'Erro de Sistema' : 'Notificação'}
                </p>
                <p className="text-xs text-secondary/60 mt-1 leading-relaxed">
                  {toast.message}
                </p>
              </div>

              <button 
                onClick={() => removeToast(toast.id)}
                className="text-secondary/20 hover:text-secondary p-1"
              >
                <X className="w-3 h-3" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}

const ToastContext = React.createContext<{ addToast: (msg: string, type?: ToastType) => void } | undefined>(undefined)

export const useToast = () => {
  const context = React.useContext(ToastContext)
  if (!context) throw new Error("useToast must be used within a ToastProvider")
  return context
}
