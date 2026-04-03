import React from "react"
import { motion } from "framer-motion"
import { Wrench, Settings, Bell, Menu, Layers } from "lucide-react"

// Import New Taxonomy Components
import { Breadcrumbs } from "../components/navigation/Breadcrumbs"
import { ContextualStepper } from "../components/navigation/ContextualStepper"
import { MegaMenu } from "../components/navigation/MegaMenu"
import { ToggleSwitch } from "../components/ui/ToggleSwitch"
import { RangeSlider } from "../components/ui/RangeSlider"
import { FileUploader } from "../components/ui/FileUploader"
import { Combobox } from "../components/ui/Combobox"
import { StatusBadge } from "../components/ui/StatusBadge"
import { PropertyList } from "../components/display/PropertyList"
import { Timeline } from "../components/display/Timeline"
import { KanbanBoard } from "../components/display/KanbanBoard"
import { ModalDialog } from "../components/ui/ModalDialog"

export function StyleGuideView() {
  const [toggle, setToggle] = React.useState(false)
  const [range, setRange] = React.useState(25)
  const [sku, setSku] = React.useState("R-500")
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  return (
    <div className="bg-neutral min-h-screen text-secondary-900 selection:bg-primary-500 selection:text-white p-12">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* HEADER SECTION */}
        <header className="border-b-4 border-secondary-900 pb-12 flex justify-between items-end">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-12 bg-secondary-900 flex items-center justify-center font-heading font-black text-white text-2xl">R</span>
              <h1 className="text-6xl font-heading font-black tracking-tighter uppercase leading-[0.9]">
                Taxonomia <span className="text-primary-500">v2.0</span>
              </h1>
            </div>
            <p className="text-xs font-mono font-bold text-secondary-500/40 uppercase tracking-[0.5em]">
              Design Governance / Industrial Visual System / RECOM Metal Duro
            </p>
          </div>
          <div className="text-right">
             <StatusBadge status="success" label="PRONTO PARA PRODUÇÃO" />
          </div>
        </header>

        {/* 1. FOUNDATIONS: COLOR MATRIX & TYPOGRAPHY */}
        <section className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-secondary-900 border border-white/10 shadow-lg">
              <Settings className="w-5 h-5 text-primary-500" />
            </div>
            <h2 className="text-3xl font-heading font-black tracking-tighter uppercase">01 / Fundamentos</h2>
            <div className="flex-1 h-px bg-secondary-500/10" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Color Matrix */}
            <div className="space-y-8">
              <h3 className="font-heading font-black text-xs uppercase tracking-widest text-primary-500">Color Matrix (100-900)</h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-1">
                  <div className="flex h-12 w-full">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
                      <div key={n} className={`flex-1 hover:scale-y-110 transition-transform`} style={{ backgroundColor: `var(--primary-${n}00)` }} title={`primary-${n}00`} />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono opacity-40 uppercase tracking-tighter">Primary Red Matrix</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex h-12 w-full">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
                      <div key={n} className={`flex-1 hover:scale-y-110 transition-transform`} style={{ backgroundColor: `var(--secondary-${n}00)` }} title={`secondary-${n}00`} />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono opacity-40 uppercase tracking-tighter">Secondary Grey Matrix</span>
                </div>
              </div>
            </div>

            {/* Typography Scale */}
            <div className="space-y-8">
              <h3 className="font-heading font-black text-xs uppercase tracking-widest text-primary-500">Typography Scale</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-6xl font-heading font-black tracking-tighter uppercase leading-[0.9]">Heading 01</div>
                  <span className="text-[10px] font-mono opacity-40 uppercase">Public Sans 72px / tracking-tighter / uppercase</span>
                </div>
                <div>
                  <div className="text-3xl font-heading font-black tracking-tighter uppercase">Heading 02</div>
                  <span className="text-[10px] font-mono opacity-40 uppercase tracking-tighter">Public Sans 36px / tracking-tighter / uppercase</span>
                </div>
                <div>
                  <div className="body opacity-100">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Curabitur blandit tempus porttitor.</div>
                  <span className="text-[10px] font-mono opacity-40 uppercase tracking-tighter">Inter 16px / leading-relaxed / opacity-80</span>
                </div>
                <div>
                  <div className="caption tracking-[0.5em] opacity-100 italic">Technical Meta Caption Text</div>
                  <span className="text-[10px] font-mono opacity-40 uppercase tracking-tighter">Inter Mono 10px / uppercase / tracking-widest</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. NAVIGATION & STRUCTURE */}
        <section className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-secondary-900 border border-white/10 shadow-lg">
              <Menu className="w-5 h-5 text-primary-500" />
            </div>
            <h2 className="text-3xl font-heading font-black tracking-tighter uppercase">02 / Estrutura e Navegação</h2>
            <div className="flex-1 h-px bg-secondary-500/10" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
             <div className="p-8 bg-white border border-secondary-500/10 space-y-12 radius-0">
                <div className="space-y-4">
                  <h4 className="font-heading font-black text-xs uppercase tracking-widest text-secondary-500/40">Breadcrumbs (Angular)</h4>
                  <Breadcrumbs items={[
                    { label: "Dashboard", href: "#" },
                    { label: "Inventário", href: "#" },
                    { label: "R-500 High Impact", active: true },
                  ]} />
                </div>

                <div className="space-y-4">
                  <h4 className="font-heading font-black text-xs uppercase tracking-widest text-secondary-500/40">Contextual Stepper</h4>
                  <ContextualStepper steps={[
                    { title: "Geometria", status: "complete" },
                    { title: "Material", status: "current" },
                    { title: "Confirmar", status: "upcoming" },
                  ]} />
                </div>
             </div>

             <div className="space-y-8">
               <h3 className="font-heading font-black text-xs uppercase tracking-widest text-primary-500">Marketing Mega Menu</h3>
               <div className="p-8 bg-secondary-900">
                  <header className="flex justify-between items-center border-b border-white/10">
                     <MegaMenu />
                  </header>
                  <p className="text-[10px] font-mono text-white/20 mt-4 uppercase tracking-widest">Hover to activate full-screen categories</p>
               </div>
             </div>
          </div>
        </section>

        {/* 3. FORMS & INPUTS (INDUSTRIAL) */}
        <section className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-secondary-900 border border-white/10 shadow-lg">
              <Wrench className="w-5 h-5 text-primary-500" />
            </div>
            <h2 className="text-3xl font-heading font-black tracking-tighter uppercase">03 / Entrada de Dados</h2>
            <div className="flex-1 h-px bg-secondary-500/10" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="p-8 bg-white border border-secondary-500/10 space-y-10 radius-0 lg:col-span-1">
               <div className="flex justify-between items-center">
                  <span className="font-heading font-black text-xs uppercase tracking-tight">Status do Canal</span>
                  <ToggleSwitch checked={toggle} onChange={setToggle} />
               </div>
               
               <RangeSlider 
                label="Diâmetro de Corte"
                min={0}
                max={100}
                value={range}
                onChange={setRange}
               />
               
               <Combobox 
                label="Selecionar SKU"
                options={[
                  { value: "R-500", label: "RECOM R-500 Gold", description: "Fresa de Topo 4 Cortes" },
                  { value: "R-800", label: "RECOM R-800 Diamond", description: "PCD Diamond Line" },
                  { value: "B-200", label: "RECOM B-200 Titan", description: "Broca Metal Duro" },
                ]}
                value={sku}
                onChange={setSku}
               />
            </div>

            <div className="lg:col-span-2">
               <FileUploader onFileSelect={(f) => console.log(f)} />
            </div>
          </div>
        </section>

        {/* 4. DATA DISPLAY (HIGH DENSITY) */}
        <section className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-secondary-900 border border-white/10 shadow-lg">
              <Layers className="w-5 h-5 text-primary-500" />
            </div>
            <h2 className="text-3xl font-heading font-black tracking-tighter uppercase">04 / Exibição Técnica</h2>
            <div className="flex-1 h-px bg-secondary-500/10" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
             <div className="lg:col-span-4 p-8 bg-white border border-secondary-500/10 radius-0">
                <Timeline records={[
                  { date: "15 MAR 2026", title: "Manutenção Preventiva", description: "Troca de óleo e calibração de batimento.", type: "maintenance" },
                  { date: "10 MAR 2026", title: "Certificação ISO", description: "Aprovação de qualidade lote #502.", type: "approval" },
                  { date: "02 MAR 2026", title: "Alerta de Desgaste", description: "Sensor detectou vibração acima de 5μm.", type: "warning" },
                ]} />
             </div>

             <div className="lg:col-span-8 space-y-8">
                <div className="p-8 bg-neutral border border-secondary-500/5 radius-0">
                  <PropertyList title="Especificações de Material" properties={[
                    { label: "Dureza", value: "65", unit: "HRC" },
                    { label: "Composição", value: "WC-Co", unit: "90/10" },
                    { label: "Cobertura", value: "AlTiN-Plus" },
                    { label: "Densidade", value: "14.5", unit: "g/cm³" },
                  ]} />
                </div>
                
                <div className="w-full">
                  <KanbanBoard columns={[
                    { title: "Backlog", color: "text-secondary-500", cards: [{ id: "1", title: "Lote #500", sku: "Fresa R-500", priority: "medium", date: "24/05" }] },
                    { title: "Processando", color: "text-amber-500", cards: [{ id: "2", title: "Lote #502", sku: "Broca B-200", priority: "high", date: "22/05" }] },
                    { title: "Qualidade", color: "text-sky-500", cards: [] },
                    { title: "Pronto", color: "text-emerald-500", cards: [{ id: "3", title: "Lote #498", sku: "Macho M-10", priority: "low", date: "20/05" }] },
                  ]} />
                </div>
             </div>
          </div>
        </section>

        {/* 5. FEEDBACK PRIMITIVES */}
        <section className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-secondary-900 border border-white/10 shadow-lg">
              <Bell className="w-5 h-5 text-primary-500" />
            </div>
            <h2 className="text-3xl font-heading font-black tracking-tighter uppercase">05 / Feedback e Interação</h2>
            <div className="flex-1 h-px bg-secondary-500/10" />
          </div>

          <div className="flex flex-wrap gap-6">
             <button 
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-primary-500 text-white font-heading font-black text-xs uppercase tracking-widest radius-0 shadow-lg hover:bg-primary-600 transition-all"
             >
                Testar Modal de Sistema
             </button>
             
             <ModalDialog 
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Ação do Sistema Impactante"
              description="RECOM.EC detectou uma alteração estrutural no registro de inventário. Esta ação não pode ser desfeita após a sincronização com a planta."
              type="danger"
              footer={
                <div className="flex gap-4">
                  <button onClick={() => setIsModalOpen(false)} className="px-6 py-2 font-mono text-[10px] uppercase font-bold text-secondary-500/40">Cancelar</button>
                  <button className="px-6 py-2 bg-primary-500 text-white font-heading font-black text-[10px] uppercase tracking-widest radius-0">Confirmar Sincronização</button>
                </div>
              }
             />
          </div>
        </section>

      </div>
    </div>
  )
}
