import React from "react"
import { Upload, File, X, CheckCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface FileUploaderProps {
  onFileSelect: (file: File) => void
  accept?: string
}

export function FileUploader({ onFileSelect, accept = ".pdf,.dxf,.dwg" }: FileUploaderProps) {
  const [file, setFile] = React.useState<File | null>(null)
  const [isDragging, setIsDragging] = React.useState(false)

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile) {
      setFile(droppedFile)
      onFileSelect(droppedFile)
    }
  }

  return (
    <div className="w-full">
       <div 
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true) }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={`relative border-2 border-dashed transition-all p-12 flex flex-col items-center justify-center text-center gap-4 radius-0 ${
          isDragging ? 'border-primary-500 bg-primary-500/5' : 'border-secondary-500/20 bg-neutral/50'
        }`}
       >
          <AnimatePresence mode="wait">
            {!file ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="p-4 bg-white shadow-sm border border-secondary-500/10">
                  <Upload className="w-8 h-8 text-secondary-500/40" />
                </div>
                <div>
                   <h4 className="font-heading font-black text-xs uppercase tracking-widest text-secondary-900 mb-2">
                     Arraste desenhos técnicos
                   </h4>
                   <p className="text-[10px] font-mono text-secondary-500/40 uppercase tracking-tighter">
                     Formatos aceitos: {accept} (Max 20MB)
                   </p>
                </div>
                <input 
                  type="file" 
                  accept={accept}
                  onChange={(e) => {
                    const selected = e.target.files?.[0]
                    if (selected) {
                      setFile(selected)
                      onFileSelect(selected)
                    }
                  }}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </motion.div>
            ) : (
              <motion.div
                key="file"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-6 p-6 bg-white border border-secondary-500/10 w-full"
              >
                <div className="p-3 bg-secondary-900 text-white">
                  <File className="w-6 h-6" />
                </div>
                <div className="flex-1 text-left">
                   <div className="font-heading font-black text-xs uppercase tracking-tight text-secondary-900 mb-1">
                      {file.name}
                   </div>
                   <div className="text-[10px] font-mono text-secondary-500/40 uppercase">
                      {(file.size / 1024 / 1024).toFixed(2)} MB • READY TO IMPORT
                   </div>
                </div>
                <div className="flex items-center gap-4">
                   <CheckCircle className="w-5 h-5 text-emerald-500" />
                   <button 
                    onClick={() => setFile(null)}
                    className="p-2 hover:bg-neutral transition-colors text-secondary-500/40 hover:text-primary-500"
                   >
                     <X className="w-4 h-4" />
                   </button>
                </div>
              </motion.div>
            )
          }
          </AnimatePresence>
       </div>
    </div>
  )
}
