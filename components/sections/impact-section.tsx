"use client"

import { motion } from "framer-motion"

const metrics = [
  { value: "+1.000", label: "Dispositivos registrados", description: "En el inventario de nuestros clientes" },
  { value: "+500", label: "Reparaciones gestionadas", description: "A través del servicio técnico" },
  { value: "99.9%", label: "Disponibilidad del sistema", description: "Uptime garantizado del sistema" },
  { value: "+5", label: "Ciudades activas", description: "Usando Vortex Control hoy" },
]

export function ImpactSection() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-24 relative noise-bg overflow-hidden">
      {/* Metallic separator top */}
      <div className="metallic-separator absolute top-0 left-0 right-0" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Impact Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 px-2"
        >
          <p className="text-xs sm:text-sm font-medium text-[#9BA0A8] uppercase tracking-wider mb-4">Nuestro impacto</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Números que hablan por si solos
          </h2>
          <p className="text-[#9BA0A8] max-w-lg mx-auto text-balance text-sm sm:text-base">
            Miles de negocios ya organizan su inventario, ventas y reparaciones con nuestra plataforma.
          </p>
        </motion.div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-4 sm:p-6 rounded-2xl glass-card card-lift text-center relative overflow-hidden group"
            >
              {/* Subtle gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-silver-gradient mb-1">
                  {metric.value}
                </p>
                <p className="text-xs sm:text-sm font-medium text-[#9BA0A8] mb-1">{metric.label}</p>
                <p className="text-xs text-[#6b6f76]">{metric.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Metallic separator bottom */}
      <div className="metallic-separator absolute bottom-0 left-0 right-0" />
    </section>
  )
}
