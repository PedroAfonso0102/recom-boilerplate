import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Calculator, Send, AlertCircle } from "lucide-react"

const formSchema = z.object({
  toolType: z.string().min(1, "Selecione o tipo de ferramenta"),
  diameter: z.string().min(1, "Diâmetro é obrigatório"),
  material: z.string().min(1, "Material da peça é obrigatório"),
  quantity: z.number().min(1, "Mínimo 1 unidade"),
  notes: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export function BudgetForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: 1,
    },
  })

  const onSubmit = async (data: FormData) => {
    console.log("Budget request submitted:", data)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    alert("Solicitação de orçamento enviada com sucesso! Protocolo: RECOM-2026-X83")
    reset()
  }

  return (
    <div className="border-2 border-secondary bg-white p-8 mb-12 relative overflow-hidden" style={{ borderRadius: 0 }}>
      {/* Industrial detail: Ruler background accent */}
      <div className="absolute top-0 right-0 h-full w-24 bg-[linear-gradient(to_bottom,#33333320_1px,transparent_1px)] bg-[size:100%_10px] opacity-10 pointer-events-none" />
      
      <div className="flex items-center gap-3 mb-8">
        <Calculator className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-heading font-bold text-secondary uppercase tracking-tighter">
          SOLICITAÇÃO DE ORÇAMENTO TÉCNICO
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold text-secondary/60 uppercase tracking-widest ml-1">
              Tipo de Ferramenta
            </label>
            <select
              {...register("toolType")}
              className="w-full h-12 bg-neutral border border-secondary/20 px-4 text-sm font-medium focus:border-primary outline-none transition-all"
              style={{ borderRadius: 0 }}
            >
              <option value="">Selecione...</option>
              <option value="fresa">Fresa de Topo (End Mill)</option>
              <option value="broca">Broca de Metal Duro (Drill)</option>
              <option value="inserto">Inserto Intercambiável</option>
              <option value="especial">Ferramenta Especial (Custom)</option>
            </select>
            {errors.toolType && (
              <span className="text-[10px] text-primary font-bold flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.toolType.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold text-secondary/60 uppercase tracking-widest ml-1">
              Diâmetro Nominal (mm)
            </label>
            <input
              {...register("diameter")}
              placeholder="Ex: 12.50"
              className="w-full h-12 bg-neutral border border-secondary/20 px-4 text-sm font-medium focus:border-primary outline-none transition-all"
              style={{ borderRadius: 0 }}
            />
            {errors.diameter && (
              <span className="text-[10px] text-primary font-bold flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.diameter.message}
              </span>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold text-secondary/60 uppercase tracking-widest ml-1">
              Material da Peça (Workpiece)
            </label>
            <select
              {...register("material")}
              className="w-full h-12 bg-neutral border border-secondary/20 px-4 text-sm font-medium focus:border-primary outline-none transition-all"
              style={{ borderRadius: 0 }}
            >
              <option value="">Selecione...</option>
              <option value="aco">Aço Carbono / Liga</option>
              <option value="inox">Aço Inoxidável</option>
              <option value="aluminio">Alumínio / Ligas Leves</option>
              <option value="titânio">Titânio / Inconel</option>
            </select>
            {errors.material && (
              <span className="text-[10px] text-primary font-bold flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.material.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold text-secondary/60 uppercase tracking-widest ml-1">
              Quantidade Estimada
            </label>
            <input
              type="number"
              {...register("quantity", { valueAsNumber: true })}
              className="w-full h-12 bg-neutral border border-secondary/20 px-4 text-sm font-medium focus:border-primary outline-none transition-all"
              style={{ borderRadius: 0 }}
            />
            {errors.quantity && (
              <span className="text-[10px] text-primary font-bold flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.quantity.message}
              </span>
            )}
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col gap-2">
          <label className="text-[10px] font-bold text-secondary/60 uppercase tracking-widest ml-1">
            Observações Técnicas / Notas Adicionais
          </label>
          <textarea
            {...register("notes")}
            placeholder="Especifique tolerâncias, coberturas desejadas ou aplicação..."
            className="w-full h-32 bg-neutral border border-secondary/20 p-4 text-sm font-medium focus:border-primary outline-none transition-all resize-none"
            style={{ borderRadius: 0 }}
          />
        </div>

        <div className="md:col-span-2 pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto px-12 py-4 bg-primary text-white font-bold text-sm tracking-widest uppercase hover:bg-primary/90 transition-all flex items-center justify-center gap-3 disabled:bg-secondary/40"
            style={{ borderRadius: 0 }}
          >
            {isSubmitting ? "Enviando..." : "SOLICITAR ORÇAMENTO AGORA"}
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  )
}
