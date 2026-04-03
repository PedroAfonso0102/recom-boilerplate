import React from "react"
import { motion } from "framer-motion"

interface ToggleSwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
}

export function ToggleSwitch({ checked, onChange, disabled }: ToggleSwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer overflow-hidden border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ${
        checked ? 'bg-primary-500' : 'bg-secondary-100'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      style={{ borderRadius: 0 }}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none inline-block h-5 w-5 bg-white shadow ring-0 transition duration-200 ease-in-out ${
          checked ? 'translate-x-5' : 'translate-x-0'
        }`}
        style={{ borderRadius: 0 }}
      />
    </button>
  )
}
