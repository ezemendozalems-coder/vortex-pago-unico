"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { LiquidCtaButton } from "@/components/buttons/liquid-cta-button"

export function CtaSection() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-24 relative overflow-hidden noise-bg">
      {/* Metallic separator top */}
      <div className="metallic-separator absolute top-0 left-0 right-0" />
      
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] sm:w-[600px] h-[250px] sm:h-[400px] bg-[radial-gradient(ellipse,rgba(255,255,255,0.04),transparent_70%)]" />
      </div>
      
      {/* Subtle device outlines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-[10%] w-16 h-32 border border-white/[0.02] rounded-2xl rotate-12 hidden sm:block" />
        <div className="absolute bottom-10 right-[15%] w-20 h-40 border border-white/[0.02] rounded-2xl -rotate-6 hidden sm:block" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center relative z-10 px-2"
      >
        <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
          Empieza a ordenar tu negocio hoy.
        </h2>
        <p className="text-sm sm:text-lg text-[#9BA0A8] mb-8 sm:mb-10 text-balance">
          Gestiona inventario, ventas, reparaciones y clientes en una sola plataforma.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link href="https://vortexcontrolphone.online/dashboard" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <div className="w-full sm:w-auto">
              <LiquidCtaButton>Probar demo</LiquidCtaButton>
            </div>
          </Link>
          <Link
            href="https://vortexcontrolphone.online/register"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-medium text-[#9BA0A8] hover:text-white transition-colors w-full sm:w-auto"
          >
            <span>Solicitar acceso</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
