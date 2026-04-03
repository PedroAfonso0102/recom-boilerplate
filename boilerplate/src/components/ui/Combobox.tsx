import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, ChevronDown, Check, X } from "lucide-react"

interface ComboboxOption {
  value: string
  label: string
  description?: string
}

interface ComboboxProps {
  options: ComboboxOption[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  label: string
}

export function Combobox({ options, value, onChange, placeholder = "PROCURAR SKU...", label }: ComboboxProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")
  const [isFocused, setIsFocused] = React.useState(false)

  const filtered = options.filter(opt => 
    opt.label.toLowerCase().includes(search.toLowerCase()) ||
    opt.value.toLowerCase().includes(search.toLowerCase())
  )

  const selected = options.find(opt => opt.value === value)

  return (
    <div className="w-full space-y-2">
      <label className="text-[10px] font-mono font-black uppercase tracking-widest text-secondary-500/60">
        {label}
      </label>
      
      <div className="relative">
        <div 
          className={`flex items-center gap-3 px-4 h-12 bg-white border-2 transition-all ${
            isFocused ? 'border-primary-500 ring-4 ring-primary-500/5' : 'border-secondary-500/10'
          } radius-0`}
        >
          <Search className={`w-4 h-4 transition-colors ${isFocused ? 'text-primary-500' : 'text-secondary-500/40'}`} />
          <input
            type="text"
            value={isOpen ? search : (selected?.label || "")}
            placeholder={placeholder}
            onFocus={() => { setIsOpen(true); setIsFocused(true) }}
            onBlur={() => { 
                setTimeout(() => { setIsOpen(false); setIsFocused(false); setSearch("") }, 200) 
            }}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none font-heading font-black text-xs uppercase tracking-tight text-secondary-900 placeholder:text-secondary-500/20"
          />
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute left-0 right-0 top-full mt-2 bg-white border-2 border-primary-500 shadow-2xl z-[60] max-h-60 overflow-y-auto radius-0 p-1"
            >
              {filtered.length > 0 ? (
                filtered.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => { onChange(opt.value); setIsOpen(false) }}
                    className={`w-full flex items-center justify-between p-3 hover:bg-neutral transition-colors text-left group ${
                        value === opt.value ? 'bg-primary-500/5' : ''
                    }`}
                  >
                    <div>
                      <div className="font-heading font-black text-xs uppercase tracking-tight text-secondary-900 group-hover:text-primary-500">
                        {opt.label}
                      </div>
                      {opt.description && (
                        <div className="text-[10px] font-mono text-secondary-500/40 uppercase tracking-tighter">
                          {opt.description}
                        </div>
                      )}
                    </div>
                    {value === opt.value && <Check className="w-4 h-4 text-primary-500" />}
                  </button>
                ))
              ) : (
                <div className="p-4 text-center text-[10px] font-mono text-secondary-500/40 uppercase tracking-widest">
                  SEM RESULTADOS
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
