"use client"

import { motion } from "framer-motion"
import { Smartphone, Wrench, ShoppingCart, ArrowLeftRight, Package, Cpu } from "lucide-react"

const chips = [
  { label: "iPhone", icon: Smartphone, description: "Todos los modelos" },
  { label: "Android", icon: Cpu, description: "Cualquier marca" },
  { label: "Servicio técnico", icon: Wrench, description: "Reparaciones" },
  { label: "Venta de equipos", icon: ShoppingCart, description: "Nuevos y usados" },
  { label: "Accesorios", icon: Package, description: "Fundas, cables y más" },
  { label: "Canjes", icon: ArrowLeftRight, description: "Equipos usados como pago" },
]

export function CompatibilitySection() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-24 relative noise-bg overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-xs sm:text-sm font-medium text-[#9BA0A8] uppercase tracking-wider mb-4">Compatibilidad</p>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Compatible con todas las tiendas de celulares
          </h2>
          <p className="text-[#9BA0A8] max-w-2xl mx-auto text-balance text-sm sm:text-base">
            Diseñado para negocios que venden, reparan o gestionan smartphones.
          </p>
        </motion.div>

        {/* Chips grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {chips.map((chip, i) => {
            const Icon = chip.icon
            return (
              <motion.div
                key={chip.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3 sm:py-4 glass-card rounded-2xl border border-white/[0.08] card-lift cursor-default"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:border-white/[0.15] transition-colors">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#9BA0A8] group-hover:text-white transition-colors" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-semibold text-white truncate">{chip.label}</p>
                  <p className="text-xs text-[#6b6f76] truncate">{chip.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom tag line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-xs sm:text-sm text-[#6b6f76] mt-8 sm:mt-10"
        >
          Si vendés o reparás celulares, <span className="text-[#9BA0A8]">Vortex Control es para tu negocio.</span>
        </motion.p>
      </div>
    </section>
  )
}
