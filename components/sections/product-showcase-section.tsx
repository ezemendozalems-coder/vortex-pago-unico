"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { TrendingUp, Package, Wrench } from "lucide-react"

// ─── Mini screen content for each phone ──────────────────────────────────────

function InventoryScreen() {
  const items = [
    { model: "iPhone 15 Pro", stock: 4, icon: "📱" },
    { model: "iPhone 14", stock: 8, icon: "📱" },
    { model: "Samsung S24", stock: 3, icon: "📱" },
    { model: "iPhone 13 Mini", stock: 6, icon: "📱" },
    { model: "Pixel 8", stock: 2, icon: "📱" },
  ]
  return (
    <div className="flex flex-col h-full bg-[#050505] p-3 gap-2">
      <div className="flex items-center gap-1.5 mb-1">
        <Package className="w-3 h-3 text-[#9BA0A8]" />
        <span className="text-[10px] font-semibold text-white">Inventario inteligente</span>
      </div>
      <div className="flex flex-col gap-1.5">
        {items.map((item, i) => (
          <motion.div
            key={item.model}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.08 }}
            className="flex items-center justify-between bg-white/[0.04] border border-white/[0.06] rounded-lg px-2 py-1.5"
          >
            <span className="text-[9px] text-[#9BA0A8]">{item.model}</span>
            <span className="text-[9px] font-semibold text-white">{item.stock} uds.</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function SalesScreen() {
  const bars = [30, 50, 35, 70, 45, 85, 55, 90, 60, 75, 80, 95]
  return (
    <div className="flex flex-col h-full bg-[#050505] p-3 gap-2">
      <div className="flex items-center gap-1.5 mb-1">
        <TrendingUp className="w-3 h-3 text-[#9BA0A8]" />
        <span className="text-[10px] font-semibold text-white">Ventas del día</span>
      </div>
      {/* Metric */}
      <div className="bg-white/[0.04] border border-white/[0.06] rounded-lg px-2 py-2">
        <p className="text-[8px] text-[#9BA0A8] mb-0.5">Ingresos del mes</p>
        <motion.p
          className="text-sm font-bold text-silver-gradient"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          $142.800
        </motion.p>
      </div>
      {/* Chart with dip-then-rise animation */}
      <div className="flex items-end gap-0.5 h-14 mt-auto">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-gradient-to-t from-[#9BA0A8] to-[#e6e8ec] rounded-sm origin-bottom"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: h / 100 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.05, ease: "easeOut" }}
          />
        ))}
      </div>
      {/* Arrow up */}
      <motion.div
        className="flex items-center justify-end gap-1"
        initial={{ opacity: 0, y: 4 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2 }}
      >
        <TrendingUp className="w-3 h-3 text-[#c9ccd3]" />
        <span className="text-[9px] text-[#c9ccd3] font-semibold">+18% este mes</span>
      </motion.div>
    </div>
  )
}

function RepairsScreen() {
  const repairs = [
    { device: "iPhone 12", tech: "Carlos R.", status: "En progreso" },
    { device: "Samsung A54", tech: "Laura M.", status: "Listo" },
    { device: "iPhone 14 Pro", tech: "Diego P.", status: "Diagnosticando" },
    { device: "Motorola G84", tech: "Ana S.", status: "En progreso" },
  ]
  const statusColor: Record<string, string> = {
    "En progreso": "bg-yellow-400/20 text-yellow-300",
    "Listo": "bg-green-400/20 text-green-300",
    "Diagnosticando": "bg-blue-400/20 text-blue-300",
  }
  return (
    <div className="flex flex-col h-full bg-[#050505] p-3 gap-2">
      <div className="flex items-center gap-1.5 mb-1">
        <Wrench className="w-3 h-3 text-[#9BA0A8]" />
        <span className="text-[10px] font-semibold text-white">Reparaciones activas</span>
      </div>
      <div className="flex flex-col gap-1.5">
        {repairs.map((r, i) => (
          <motion.div
            key={r.device}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.08 }}
            className="bg-white/[0.04] border border-white/[0.06] rounded-lg px-2 py-1.5"
          >
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-[9px] font-medium text-white">{r.device}</span>
              <span className={`text-[8px] px-1.5 py-0.5 rounded-full ${statusColor[r.status]}`}>{r.status}</span>
            </div>
            <span className="text-[8px] text-[#6b6f76]">{r.tech}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// ─── Single iPhone frame ──────────────────────────────────────────────────────

interface PhoneProps {
  rotateY?: number
  rotateZ?: number
  scale?: number
  zIndex?: number
  parallaxY: ReturnType<typeof useTransform>
  children: React.ReactNode
  label: string
  delay?: number
}

function PerspectivePhone({ rotateY = 0, rotateZ = 0, scale = 1, zIndex = 1, parallaxY, children, label, delay = 0 }: PhoneProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      style={{ y: parallaxY, zIndex }}
      className="relative flex flex-col items-center"
    >
      <div
        style={{
          transform: `perspective(900px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
          transformOrigin: "center center",
        }}
        className="relative"
      >
        {/* Phone shell */}
        <div className="relative w-[180px] h-[370px] bg-gradient-to-b from-[#1c1c1f] to-[#0e0e11] rounded-[2.4rem] p-[6px] shadow-2xl shadow-black/70 border border-white/[0.10]">
          {/* Screen */}
          <div className="w-full h-full bg-[#050505] rounded-[2rem] overflow-hidden relative">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#050505] rounded-b-xl z-20" />
            <div className="w-full h-full pt-6">
              {children}
            </div>
          </div>
          {/* Side buttons */}
          <div className="absolute right-[-3px] top-20 w-[3px] h-10 bg-[#2a2a2d] rounded-l-sm" />
          <div className="absolute left-[-3px] top-16 w-[3px] h-6 bg-[#2a2a2d] rounded-r-sm" />
          <div className="absolute left-[-3px] top-26 w-[3px] h-10 bg-[#2a2a2d] rounded-r-sm" />
        </div>
        {/* Ground shadow */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-3 bg-black/40 rounded-full blur-md" />
      </div>
      <p className="mt-8 text-xs text-[#9BA0A8] font-medium tracking-wide">{label}</p>
    </motion.div>
  )
}

// ─── Section ──────────────────────────────────────���───────────────────────────

export function ProductShowcaseSection() {
  const ref = useRef<HTMLDivElement>(null)

  // Track window scroll progress — avoids the "non-static container" warning
  // that fires when using `target` before the element is positioned on mount.
  const { scrollYProgress } = useScroll()

  // Different parallax speeds for each phone
  const yLeft = useTransform(scrollYProgress, [0, 1], [40, -60])
  const yCenter = useTransform(scrollYProgress, [0, 1], [20, -40])
  const yRight = useTransform(scrollYProgress, [0, 1], [60, -80])

  return (
    <section ref={ref} className="px-4 sm:px-6 py-20 sm:py-32 noise-bg overflow-hidden">
      {/* Top separator */}
      <div className="metallic-separator absolute top-0 left-0 right-0" />

      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[400px] bg-[radial-gradient(ellipse,rgba(255,255,255,0.04),transparent_70%)]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-xs sm:text-sm font-medium text-[#9BA0A8] uppercase tracking-wider mb-4">El producto</p>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Todo tu negocio en un solo sistema
          </h2>
          <p className="text-[#9BA0A8] max-w-xl mx-auto text-balance text-sm sm:text-base">
            Inventario, ventas, reparaciones y métricas en tiempo real.
          </p>
        </motion.div>

        {/* 3 iPhones in perspective — hidden on small mobile, visible from sm up */}
        <div className="hidden sm:flex items-end justify-center gap-4 md:gap-10 pb-8">
          <PerspectivePhone
            rotateY={14}
            rotateZ={1.5}
            scale={0.88}
            zIndex={1}
            parallaxY={yLeft}
            label="Inventario"
            delay={0.1}
          >
            <InventoryScreen />
          </PerspectivePhone>

          <PerspectivePhone
            rotateY={0}
            rotateZ={0}
            scale={1}
            zIndex={3}
            parallaxY={yCenter}
            label="Ventas"
            delay={0}
          >
            <SalesScreen />
          </PerspectivePhone>

          <PerspectivePhone
            rotateY={-14}
            rotateZ={-1.5}
            scale={0.88}
            zIndex={1}
            parallaxY={yRight}
            label="Reparaciones"
            delay={0.2}
          >
            <RepairsScreen />
          </PerspectivePhone>
        </div>

        {/* Mobile fallback: stacked cards with screen previews */}
        <div className="sm:hidden flex flex-col gap-4">
          {[
            { label: "Inventario inteligente", Screen: InventoryScreen },
            { label: "Ventas del día", Screen: SalesScreen },
            { label: "Reparaciones activas", Screen: RepairsScreen },
          ].map(({ label, Screen }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden border border-white/[0.08]"
            >
              <div className="px-4 pt-4 pb-2 border-b border-white/[0.06]">
                <p className="text-xs font-semibold text-white">{label}</p>
              </div>
              <div className="h-52 overflow-hidden">
                <Screen />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom separator */}
      <div className="metallic-separator absolute bottom-0 left-0 right-0" />
    </section>
  )
}
