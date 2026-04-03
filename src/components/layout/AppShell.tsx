import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, ChevronLeft, Bell, Search, User } from "lucide-react"

interface AppShellProps {
  children: React.ReactNode
  sidebar: React.ReactNode
  headerActions?: React.ReactNode
  isSidebarOpen: boolean
  onToggleSidebar: () => void
}

export function AppShell({ 
  children, 
  sidebar, 
  headerActions,
  isSidebarOpen,
  onToggleSidebar 
}: AppShellProps) {
  return (
    <div className="flex min-h-screen bg-neutral text-secondary-500 overflow-hidden">
      {/* SIDEBAR WRAPPER */}
      <motion.aside
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="fixed inset-y-0 left-0 bg-secondary-900 border-r border-white/5 z-50 flex flex-col"
      >
        <div className="p-6 flex items-center justify-between border-b border-white/5 h-20">
          <AnimatePresence mode="wait">
            {isSidebarOpen ? (
              <motion.div
                key="logo-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="font-heading font-black text-white text-xl tracking-tighter"
              >
                RECOM<span className="text-primary-500">.</span>
              </motion.div>
            ) : (
              <motion.div
                key="logo-icon"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="font-heading font-black text-primary-500 text-xl"
              >
                R
              </motion.div>
            )}
          </AnimatePresence>
          
          <button 
            onClick={onToggleSidebar}
            className="p-2 text-white/40 hover:text-white transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overflow-x-hidden py-6">
          {sidebar}
        </div>

        <div className="p-4 border-t border-white/5 text-[10px] font-mono text-white/20 uppercase tracking-widest text-center">
          {isSidebarOpen ? "EC-SYSTEM v2.6" : "V2"}
        </div>
      </motion.aside>

      {/* MAIN CONTENT AREA */}
      <motion.main
        animate={{ marginLeft: isSidebarOpen ? 280 : 80 }}
        className="flex-1 min-h-screen flex flex-col relative"
      >
        {/* FIXED HEADER */}
        <header className="h-20 bg-white border-b border-secondary-500/10 flex items-center justify-between px-8 sticky top-0 z-40 backdrop-blur-md bg-white/80">
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2 text-secondary-500/40">
                <Search className="w-4 h-4" />
                <span className="text-[10px] font-mono uppercase tracking-widest">Search CMD+K</span>
             </div>
          </div>

          <div className="flex items-center gap-4">
            {headerActions}
            <button className="p-2 text-secondary-500/40 hover:text-primary-500 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-primary-500 radius-0" />
            </button>
            <div className="h-8 w-8 bg-secondary-100 flex items-center justify-center border border-secondary-500/10">
              <User className="w-4 h-4 text-secondary-500" />
            </div>
          </div>
        </header>

        {/* VIEWPORT */}
        <div className="flex-1 overflow-y-auto px-8 py-10">
          {children}
        </div>
      </motion.main>
    </div>
  )
}
