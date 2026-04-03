import * as React from "react"
import { Command } from "cmdk"
import { Search, Package, FileText, Settings, User, Globe, Calculator } from "lucide-react"

export function CommandMenu() {
  const [open, setOpen] = React.useState(false)

  // Toggle the menu when ⌘K is pressed
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] bg-secondary/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="w-full max-w-2xl bg-white border-2 border-primary shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        style={{ borderRadius: 0 }}
      >
        <Command className="p-4 flex flex-col h-full max-h-[450px]">
          <div className="flex items-center border-b border-secondary/10 pb-4 mb-4">
            <Search className="w-5 h-5 text-secondary/40 mr-3" />
            <Command.Input 
              placeholder="Pesquisar catálogo, pedidos ou ferramentas..." 
              className="flex-1 bg-transparent border-none outline-none text-secondary font-body placeholder:text-secondary/40"
              autoFocus
            />
            <div className="text-[10px] font-mono text-secondary/20 uppercase tracking-widest border border-secondary/10 px-2 py-1">
              ESC para fechar
            </div>
          </div>

          <Command.List className="overflow-y-auto space-y-4">
            <Command.Empty className="text-center py-8 text-secondary/40">
              Nenhum resultado encontrado.
            </Command.Empty>

            <Command.Group heading={<span className="text-[10px] font-bold text-primary uppercase tracking-widest ml-1">NAVEGAÇÃO RÁPIDA</span>}>
              <Command.Item className="flex items-center gap-3 p-3 text-secondary font-medium hover:bg-neutral cursor-pointer select-none">
                <Package className="w-4 h-4 text-primary" />
                <span>Gestão de Inventário</span>
              </Command.Item>
              <Command.Item className="flex items-center gap-3 p-3 text-secondary font-medium hover:bg-neutral cursor-pointer select-none">
                <FileText className="w-4 h-4 text-primary" />
                <span>Catálogos Técnicos (PDF)</span>
              </Command.Item>
              <Command.Item className="flex items-center gap-3 p-3 text-secondary font-medium hover:bg-neutral cursor-pointer select-none">
                <Calculator className="w-4 h-4 text-primary" />
                <span>Calculadora de Usinagem</span>
              </Command.Item>
            </Command.Group>

            <Command.Separator className="h-[1px] bg-secondary/10 my-4" />

            <Command.Group heading={<span className="text-[10px] font-bold text-primary uppercase tracking-widest ml-1">SUPORTE & CONTA</span>}>
              <Command.Item className="flex items-center gap-3 p-3 text-secondary font-medium hover:bg-neutral cursor-pointer select-none">
                <User className="w-4 h-4 text-secondary/60" />
                <span>Meu Perfil de Engenheiro</span>
              </Command.Item>
              <Command.Item className="flex items-center gap-3 p-3 text-secondary font-medium hover:bg-neutral cursor-pointer select-none">
                <Globe className="w-4 h-4 text-secondary/60" />
                <span>RECOM Global Infrastructure</span>
              </Command.Item>
              <Command.Item className="flex items-center gap-3 p-3 text-secondary font-medium hover:bg-neutral cursor-pointer select-none">
                <Settings className="w-4 h-4 text-secondary/60" />
                <span>Configurações do Workspace</span>
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  )
}
