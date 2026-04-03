import React from "react"

interface RangeSliderProps {
  min: number
  max: number
  step?: number
  value: number
  onChange: (value: number) => void
  label: string
  unit?: string
}

export function RangeSlider({ min, max, step = 1, value, onChange, label, unit = "mm" }: RangeSliderProps) {
  return (
    <div className="w-full space-y-4">
      <div className="flex justify-between items-end">
        <label className="text-[10px] font-mono font-black uppercase tracking-widest text-secondary-500/60">
          {label}
        </label>
        <div className="flex items-baseline gap-1">
          <span className="text-xl font-heading font-black text-secondary-900 leading-none">
            {value}
          </span>
          <span className="text-[10px] font-mono text-primary-500 font-bold uppercase">
            {unit}
          </span>
        </div>
      </div>
      
      <div className="relative h-6 flex items-center">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-1 bg-secondary-100 appearance-none cursor-pointer accent-primary-500"
        />
        <div 
          className="absolute h-1 bg-primary-500 pointer-events-none"
          style={{ width: `${((value - min) / (max - min)) * 100}%` }}
        />
      </div>
      
      <div className="flex justify-between text-[8px] font-mono text-secondary-500/30 uppercase tracking-tighter">
        <span>MIN {min}{unit}</span>
        <span>MAX {max}{unit}</span>
      </div>
    </div>
  )
}
