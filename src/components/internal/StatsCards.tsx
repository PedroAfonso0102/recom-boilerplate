import { TrendingUp, Package, Activity } from "lucide-react"

const stats = [
  {
    title: "Total Itens Ativos",
    value: "12,482",
    change: "+12.5%",
    trend: "up",
    icon: Package,
  },
  {
    title: "Saúde de Estoque",
    value: "92.4%",
    change: "+2.1%",
    trend: "up",
    icon: Activity,
  },
  {
    title: "Volume Mensal",
    value: "R$ 428k",
    change: "+8.4%",
    trend: "up",
    icon: TrendingUp,
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="border border-secondary/20 bg-white p-6 relative overflow-hidden"
          style={{ borderRadius: 0 }}
        >
          {/* Subtle industrial accent */}
          <div className="absolute top-0 left-0 w-1 h-full bg-primary/10" />
          
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-mono text-secondary/40 uppercase tracking-widest mb-1">
                {stat.title}
              </p>
              <h3 className="text-3xl font-heading font-bold text-secondary">
                {stat.value}
              </h3>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5" style={{ borderRadius: 0 }}>
                  {stat.change}
                </span>
                <span className="text-[10px] text-secondary/30 font-mono italic">vs. last month</span>
              </div>
            </div>
            <div className="p-3 bg-neutral border border-secondary/5">
              <stat.icon className="w-5 h-5 text-primary" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
