import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AdminSidebar } from "./components/internal/AdminSidebar"
import { InventoryTable } from "./components/internal/InventoryTable"
import { StatsCards } from "./components/internal/StatsCards"
import { CommandMenu } from "./components/internal/CommandMenu"
import { BudgetForm } from "./components/internal/BudgetForm"
import { HeroBranding } from "./components/marketing/HeroBranding"
import { BentoDisplay } from "./components/marketing/BentoDisplay"
import { LogoMarquee } from "./components/marketing/LogoMarquee"
import { PartnerMarquee } from "./components/marketing/PartnerMarquee"
import { ProcessReveal } from "./components/marketing/ProcessReveal"
import { InteractiveHero } from "./components/marketing/InteractiveHero"
import { NestedCatalog } from "./components/internal/NestedCatalog"
import { QuoteStepper } from "./components/internal/QuoteStepper"
import { StyleGuideView } from "./views/StyleGuideView"
import { ProductSheet } from "./components/internal/ProductSheet"
import { ToastProvider, useToast } from "./components/ui/Toasts"
import { SkeletonInventory } from "./components/ui/SkeletonLoader"
import "./app.css"

type View = "marketing" | "internal" | "style-guide"

function AppContent() {
  const [view, setView] = React.useState<View>("marketing")
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false)
  const [selectedProduct, setSelectedProduct] = React.useState<any>(null)
  const [isLoading, setIsLoading] = React.useState(false)
  const { addToast } = useToast()

  const handleNavigate = (v: string) => {
    setIsLoading(true)
    setView(v as View)
    setTimeout(() => {
      setIsLoading(false)
      addToast(`Navegando para: ${v.toUpperCase()}`, "info")
    }, 800)
  }

  return (
    <div className="relative flex min-h-screen bg-neutral selection:bg-primary selection:text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#cc000010_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 brightness-150" />
      </div>

      <CommandMenu />
      
      <ProductSheet 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />

      <AdminSidebar 
        currentView={view === 'style-guide' ? 'internal' : view} 
        onNavigate={handleNavigate} 
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />
      
      <main className="flex-1 relative z-10 overflow-y-auto h-screen">
        <AnimatePresence mode="wait">
          {view === "marketing" ? (
            <motion.div
              key="marketing"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              <HeroBranding />
              <InteractiveHero />
              <LogoMarquee />
              <PartnerMarquee />
              <ProcessReveal />
              
              <section className="max-w-7xl mx-auto px-8 py-24">
                <div className="mb-16">
                  <h2 className="text-4xl font-heading font-black text-secondary tracking-tighter uppercase">
                    Hub de Ferramentas Técnicas
                  </h2>
                  <p className="text-secondary/40 font-mono text-[10px] mt-2 tracking-[0.3em]">
                    DIRECT ACCESS TO RECOM ENGINEERING UTILITIES & CALCULATORS
                  </p>
                </div>
                <BentoDisplay />
              </section>
            </motion.div>
          ) : view === "internal" ? (
            <motion.div
              key="internal"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-full bg-white min-h-screen"
            >
              <div className="max-w-[1600px] mx-auto px-8 py-12">
                <header className="mb-12 flex justify-between items-end border-b-2 border-secondary pb-8">
                  <div>
                    <span className="text-primary font-bold text-xs uppercase tracking-widest">Workspace / Dashboard</span>
                    <h1 className="text-4xl font-heading font-black text-secondary tracking-tighter uppercase mt-1">
                      Gestão de Inventário Técnico
                    </h1>
                  </div>
                </header>
                
                {isLoading ? (
                  <SkeletonInventory />
                ) : (
                  <section className="space-y-16">
                    <StatsCards />
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                       <div className="lg:col-span-8 border border-secondary/10 shadow-sm relative overflow-hidden bg-neutral/30 p-1">
                          <InventoryTable onProductSelect={setSelectedProduct} />
                       </div>
                       <div className="lg:col-span-4 space-y-8">
                          <div className="p-6 bg-secondary text-white">
                             <h3 className="text-sm font-heading font-black uppercase tracking-widest mb-4">Ações Rápidas</h3>
                             <div className="grid grid-cols-1 gap-2">
                                <button className="p-4 border border-white/10 hover:bg-white/5 text-[10px] font-bold uppercase tracking-widest text-left">Novo Item Inventário</button>
                                <button className="p-4 border border-white/10 hover:bg-white/5 text-[10px] font-bold uppercase tracking-widest text-left">Relatório de Consumo</button>
                                <button className="p-4 border border-white/10 hover:bg-white/5 text-[10px] font-bold uppercase tracking-widest text-left">Sincronizar ERP</button>
                             </div>
                          </div>
                          <div className="p-6 border border-secondary/10 bg-white">
                             <h3 className="text-sm font-heading font-black uppercase tracking-widest text-secondary mb-4">Alertas de Sistema</h3>
                             <div className="space-y-3">
                                <div className="p-3 bg-primary/5 border-l-4 border-primary text-[9px] font-mono text-primary font-bold uppercase">4 SKUS ABAIXO DO MÍNIMO</div>
                                <div className="p-3 bg-amber-500/5 border-l-4 border-amber-500 text-[9px] font-mono text-amber-600 font-bold uppercase">ENVIO PENDENTE: ORD_772</div>
                             </div>
                          </div>
                       </div>
                    </div>

                    <div className="space-y-8">
                       <h2 className="text-2xl font-heading font-black text-secondary tracking-tighter uppercase border-l-4 border-primary pl-4">
                         Explorador de Catálogo Profundo
                       </h2>
                       <NestedCatalog />
                    </div>
                    
                    <div className="space-y-8 pt-12 border-t border-secondary/5">
                       <h2 className="text-2xl font-heading font-black text-secondary tracking-tighter uppercase border-l-4 border-primary pl-4">
                         Solicitação de Orçamento Industrial
                       </h2>
                       <QuoteStepper />
                       <div className="max-w-4xl mt-8">
                         <BudgetForm />
                       </div>
                    </div>
                  </section>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="style-guide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full"
            >
              <StyleGuideView />
            </motion.div>
          )}
        </AnimatePresence>

        <footer className={`py-8 px-8 text-center font-mono text-[10px] tracking-[0.5em] uppercase border-t transition-colors ${view === 'marketing' ? 'bg-secondary text-white/20 border-white/5' : 'bg-white text-secondary/30 border-secondary/10'}`}>
          RECOM METAL DURO © 2026 / HUB DE ENGENHARIA DE PRECISÃO / {view.toUpperCase()} CONTEXT
        </footer>
      </main>
    </div>
  )
}

function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  )
}

export default App
