"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Check } from "lucide-react"
import Link from "next/link"
import { AnimatedBorderCard } from "@/components/ui/animated-border-card"
import { useEffect, useState } from "react"

// La oferta finaliza el 19 de septiembre de 2026 a las 23:59:59 UTC-3
const DEADLINE = new Date("2026-09-19T23:59:59-03:00")

function useCountdown(target: Date) {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now())
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    }
  }
  // Start from a deterministic value so the server and client render the same HTML.
  // The real countdown is calculated only after hydration in the effect below.
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    setTime(calc())
    const id = setInterval(() => setTime(calc()), 1000)
    return () => clearInterval(id)
  }, [target])
  return time
}

function CountUnit({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, "0")
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center overflow-hidden shadow-[0_0_12px_rgba(123,77,255,0.12)]">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={display}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="font-display text-2xl sm:text-3xl font-bold text-white tabular-nums"
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-[10px] sm:text-xs text-[#9BA0A8] uppercase tracking-wider">{label}</span>
    </div>
  )
}

const plans = [
  {
    name: "Básico",
    tag: "Ideal para empezar",
    description: "Para tiendas pequeñas que necesitan ordenar inventario y ventas.",
    price: "$27",
    originalPrice: "$54",
    period: "USD/mes",
    features: [
      "Hasta 500 equipos en stock",
      "Módulo de ventas",
      "Módulo de clientes",
      "Inventario básico",
      "Reportes básicos",
      "Soporte por email",
    ],
    cta: "Empezar ahora",
    highlighted: false,
  },
  {
    name: "Pro",
    tag: "Mas elegido",
    description: "Para negocios activos con reparaciones y múltiples ventas diarias.",
    price: "$50",
    originalPrice: "$100",
    period: "USD/mes",
    features: [
      "Stock ilimitado",
      "Servicio técnico completo",
      "Gestión de técnicos",
      "Canjes de equipos",
      "Reportes avanzados",
      "Soporte prioritario",
      "Acceso a la API",
    ],
    extras: [
      "Soporte prioritario",
      "Funciones avanzadas",
      "Escalable para negocios grandes",
    ],
    cta: "Probar gratis 14 días",
    highlighted: true,
  },
]

export function PricingSection() {
  const { days, hours, minutes, seconds } = useCountdown(DEADLINE)

  return (
    <section id="pricing" className="px-4 sm:px-6 py-16 sm:py-24 relative noise-bg overflow-hidden">
      {/* Subtle violet radial glow behind section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(123,77,255,0.07),transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs sm:text-sm font-medium text-[#9BA0A8] uppercase tracking-wider mb-4">Planes</p>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Precios simples y transparentes
          </h2>
          <p className="text-[#9BA0A8] max-w-xl mx-auto text-balance text-base sm:text-lg px-2">
            Sin costos ocultos. Elige el plan que mejor se adapta a tu negocio.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              {plan.highlighted ? (
                <AnimatedBorderCard
                  borderRadius={16}
                  borderWidth={1.5}
                  speed={0.6}
                  opacity={0.75}
                  innerClassName="bg-[#0d0b14]"
                  className="h-full"
                >
                  <div className="p-6 sm:p-8 flex flex-col h-full card-lift">
                    <PlanCardContent plan={plan} />
                  </div>
                </AnimatedBorderCard>
              ) : (
                <AnimatedBorderCard
                  borderRadius={16}
                  borderWidth={1}
                  speed={0.35}
                  opacity={0.45}
                  innerClassName="bg-[#0a0a0d]"
                  className="h-full"
                >
                  <div className="p-6 sm:p-8 flex flex-col h-full card-lift">
                    <PlanCardContent plan={plan} />
                  </div>
                </AnimatedBorderCard>
              )}
            </motion.div>
          ))}
        </div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 flex flex-col items-center gap-5"
        >
          <p className="text-xs sm:text-sm text-[#9BA0A8] tracking-wide">Esta oferta finaliza en:</p>

          <div className="flex items-end gap-2 sm:gap-3">
            <CountUnit value={days} label="días" />
            <span className="text-2xl font-bold text-[#7B4DFF] mb-7">:</span>
            <CountUnit value={hours} label="horas" />
            <span className="text-2xl font-bold text-[#7B4DFF] mb-7">:</span>
            <CountUnit value={minutes} label="min" />
            <span className="text-2xl font-bold text-[#7B4DFF] mb-7">:</span>
            <CountUnit value={seconds} label="seg" />
          </div>

          <div className="text-center space-y-1">
            <p className="text-xs sm:text-sm text-white/80">Promoción válida hasta el 30 de abril</p>
            <p className="text-xs text-[#9BA0A8]">Luego vuelve a su precio normal</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function PlanCardContent({ plan }: { plan: (typeof plans)[number] }) {
  return (
    <>
      {/* Tag */}
      <div className="mb-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7B4DFF]/15 border border-[#7B4DFF]/25 text-[#A78BFA] text-xs font-medium">
          {plan.highlighted && <span>🔥</span>}
          {plan.tag}
        </span>
      </div>

      {/* Plan Name + Description */}
      <div className="mb-5">
        <h3 className="font-heading text-lg sm:text-xl font-semibold text-white mb-1.5">{plan.name}</h3>
        <p className="text-xs sm:text-sm text-[#9BA0A8]">{plan.description}</p>
      </div>

      {/* Price block */}
      <div className="mb-6">
        <p className="text-xs text-[#9BA0A8] mb-1.5 font-normal">Precio promocional por lanzamiento</p>
        <div className="flex items-center gap-3 flex-wrap">
          <span className="font-display text-3xl sm:text-4xl font-bold text-white">{plan.price}</span>
          <span className="text-sm text-[#9BA0A8]">{plan.period}</span>
          <span className="text-sm text-[#6b6f76] line-through">{plan.originalPrice}</span>
          {/* -50% badge */}
          <motion.span
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
            className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#7B4DFF] text-white text-xs font-semibold shadow-[0_0_10px_rgba(123,77,255,0.35)]"
          >
            -50% OFF
          </motion.span>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-6 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="w-4 h-4 shrink-0 mt-0.5 text-[#7B4DFF]" />
            <span className="text-xs sm:text-sm text-[#9BA0A8]">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Pro extras */}
      {plan.extras && (
        <div className="mb-6 pt-4 border-t border-white/[0.06] space-y-2">
          {plan.extras.map((extra) => (
            <p key={extra} className="flex items-center gap-2 text-xs text-[#A78BFA]">
              <span className="text-[#7B4DFF]">✔</span>
              {extra}
            </p>
          ))}
        </div>
      )}

      {/* CTA */}
      <Link
        href={plan.highlighted ? "https://vortexcontrolphone.online/register" : "https://vortexcontrolphone.online/register"}
        target="_blank"
        rel="noopener noreferrer"
        className={`group block w-full py-3 px-4 sm:px-6 text-center rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 mt-auto ${
          plan.highlighted
            ? "btn-violet"
            : "bg-white/[0.06] border border-white/[0.1] text-white hover:bg-white/10 hover:shadow-[0_0_14px_rgba(123,77,255,0.2)]"
        }`}
        style={{ transition: "transform 0.2s, box-shadow 0.2s" }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.03)" }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)" }}
      >
        {plan.cta}
      </Link>
    </>
  )
}
