import { LayoutDashboard, Package, FileText, Settings, LogOut, ChevronRight, Globe, BarChart3, Menu } from "lucide-react"

interface AdminSidebarProps {
  currentView: "marketing" | "internal"
  onNavigate: (view: string) => void
  isCollapsed: boolean
  onToggleCollapse: () => void
}

export function AdminSidebar({ currentView, onNavigate, isCollapsed, onToggleCollapse }: AdminSidebarProps) {
  const menuItems = [
    { icon: Globe, label: "Portal Público", view: "marketing" },
    { icon: LayoutDashboard, label: "Dashboard CRM", view: "internal" },
    { icon: Package, label: "Inventário B2B", view: "internal" },
    { icon: BarChart3, label: "Relatórios", view: "internal" },
    { icon: FileText, label: "Catálogos", view: "internal" },
    { icon: Settings, label: "Style Guide", view: "style-guide" },
  ]

  return (
    <aside className={`relative h-screen bg-secondary flex flex-col border-r border-tertiary transition-all duration-300 z-50 shadow-2xl ${isCollapsed ? "w-20" : "w-64"}`}>
      {/* Brand Header */}
      <div className={`p-6 border-b border-tertiary flex items-center ${isCollapsed ? "justify-center" : "justify-between"}`}>
        {!isCollapsed && (
          <div>
            <h1 className="text-primary text-xl font-heading tracking-widest font-black">RECOM</h1>
            <p className="text-white/20 text-[10px] font-mono mt-1 uppercase">Control v1.0.4</p>
          </div>
        )}
        <button
          onClick={onToggleCollapse}
          className="p-2 hover:bg-tertiary text-primary transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Dynamic Navigation */}
      <nav className="flex-1 mt-6 px-3 space-y-1">
        {menuItems.map((item, idx) => {
          const isActive = currentView === item.view && (item.view === 'marketing' ? item.label === "Portal Público" : item.label !== "Portal Público");
          // Simple logic: if label is Portal Publico, it maps to marketing. Others map to internal dashboard.
          const isButtonActive = (item.view === 'marketing' && currentView === 'marketing' && item.label === "Portal Público") ||
            (item.view === 'internal' && currentView === 'internal' && item.label !== "Portal Público");

          return (
            <div
              key={idx}
              onClick={() => onNavigate(item.view)}
              className={`flex items-center gap-4 px-4 py-3 cursor-pointer transition-all duration-200 group relative
                ${isButtonActive ? "bg-primary text-white" : "text-white/40 hover:bg-tertiary hover:text-white"}`}
              style={{ borderRadius: 0 }}
            >
              <item.icon className={`w-5 h-5 min-w-[20px] ${isButtonActive ? "text-white" : "group-hover:text-primary"}`} />
              {!isCollapsed && (
                <span className="text-sm font-bold tracking-tighter whitespace-nowrap uppercase italic">{item.label}</span>
              )}

              {/* Tooltip for collapsed mode */}
              {isCollapsed && (
                <div className="absolute left-full ml-4 px-2 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 whitespace-nowrap">
                  {item.label}
                </div>
              )}
            </div>
          )
        })}
      </nav>

      <div className="p-4 border-t border-tertiary">
        <div className={`flex items-center gap-4 px-4 py-3 text-white/30 hover:text-primary cursor-pointer transition-colors group ${isCollapsed ? "justify-center" : ""}`}>
          <LogOut className="w-5 h-5 min-w-[20px]" />
          {!isCollapsed && <span className="text-sm font-bold uppercase tracking-tighter italic">Sair</span>}
        </div>
      </div>
    </aside>
  )
}
