"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Smartphone, ArrowRight } from "lucide-react"
import { AnimatedBorderCard } from "@/components/ui/animated-border-card"

function useTypingEffect(text: string, speed = 50, startDelay = 0) {
  const [displayed, setDisplayed] = useState("")
  const [done, setDone] = useState(false)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    let i = 0
    timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
      return () => clearInterval(interval)
    }, startDelay)
    return () => clearTimeout(timeout)
  }, [text, speed, startDelay])

  return { displayed, done }
}

function DashboardScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let start: number | null = null
    let raf: number
    let timeoutId: ReturnType<typeof setTimeout>
    const duration = 2400

    function step(ts: number) {
      if (document.hidden) {
        raf = requestAnimationFrame(step)
        return
      }
      if (!start) start = ts
      const elapsed = ts - start
      const p = Math.min(elapsed / duration, 1)
      setProgress(p)
      if (p < 1) {
        raf = requestAnimationFrame(step)
      } else {
        timeoutId = setTimeout(() => {
          start = null
          setProgress(0)
          raf = requestAnimationFrame(step)
        }, 1800)
      }
    }
    raf = requestAnimationFrame(step)
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(timeoutId)
    }
  }, [])

  const rawPoints: [number, number][] = [
    [0, 50], [40, 60], [80, 55], [120, 65], [160, 30], [200, 10],
  ]

  function buildPath(pts: [number, number][], t: number): string {
    if (pts.length < 2) return ""
    const totalSegments = pts.length - 1
    const drawn = t * totalSegments
    const fullSegments = Math.floor(drawn)
    const partial = drawn - fullSegments
    let d = `M ${pts[0][0]} ${pts[0][1]}`
    for (let i = 0; i < fullSegments && i < totalSegments; i++) {
      d += ` L ${pts[i + 1][0]} ${pts[i + 1][1]}`
    }
    if (fullSegments < totalSegments && partial > 0) {
      const p0 = pts[fullSegments]
      const p1 = pts[fullSegments + 1]
      d += ` L ${p0[0] + (p1[0] - p0[0]) * partial} ${p0[1] + (p1[1] - p0[1]) * partial}`
    }
    return d
  }

  const chartPath = buildPath(rawPoints, progress)
  const totalSegments = rawPoints.length - 1
  const drawn = progress * totalSegments
  const fullSegments = Math.min(Math.floor(drawn), totalSegments - 1)
  const partial = drawn - fullSegments
  const p0 = rawPoints[Math.min(fullSegments, rawPoints.length - 1)]
  const p1 = rawPoints[Math.min(fullSegments + 1, rawPoints.length - 1)]
  const dotX = p0[0] + (p1[0] - p0[0]) * partial
  const dotY = p0[1] + (p1[1] - p0[1]) * partial
  const showArrow = progress >= 0.92

  return (
    <div className="w-full h-full flex flex-col bg-[#050505] font-sans overflow-hidden">
      <div className="px-3 pt-3 pb-2 border-b border-white/[0.06]">
        <p className="text-[9px] font-semibold text-white/80 truncate">VortexControl Phone</p>
        <p className="text-[7px] text-[#6b6f76] mt-0.5">Actualizado hace 2 min</p>
      </div>
      <div className="px-2 pt-2 pb-1 grid grid-cols-3 gap-1">
        {[
          { label: "Ventas del mes", value: "$12,480", badge: "+18%", color: "text-emerald-400" },
          { label: "Stock", value: "84 eq.", badge: "disponible", color: "text-[#9BA0A8]" },
          { label: "Reparaciones", value: "12 eq.", badge: "activas", color: "text-amber-400" },
        ].map((m) => (
          <div key={m.label} className="bg-white/[0.04] rounded-lg p-1.5">
            <p className="text-[6.5px] text-[#6b6f76] leading-tight mb-0.5">{m.label}</p>
            <p className="text-[9px] font-bold text-white leading-tight">{m.value}</p>
            <p className={`text-[6.5px] font-medium leading-tight ${m.color}`}>{m.badge}</p>
          </div>
        ))}
      </div>
      <div className="flex-1 px-2 pb-2 flex flex-col min-h-0">
        <p className="text-[7px] text-[#6b6f76] mb-1">Ventas — últimos 6 meses</p>
        <div className="relative flex-1 min-h-0">
          <svg viewBox="0 0 200 80" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <filter id="lineGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <filter id="dotGlow" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(124,58,237,0.18)" />
                <stop offset="100%" stopColor="rgba(124,58,237,0)" />
              </linearGradient>
            </defs>
            <line x1="0" y1="75" x2="200" y2="75" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
            {[25, 50].map((y) => (
              <line key={y} x1="0" y1={y} x2="200" y2={y} stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
            ))}
            {progress > 0 && (
              <path d={`${chartPath} L ${dotX} 75 L ${rawPoints[0][0]} 75 Z`} fill="url(#fillGrad)" />
            )}
            {progress > 0 && (
              <path d={chartPath} fill="none" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#lineGlow)" />
            )}
            {progress > 0 && (
              <>
                <circle cx={dotX} cy={dotY} r="4" fill="rgba(168,85,247,0.25)" filter="url(#dotGlow)" />
                <circle cx={dotX} cy={dotY} r="2" fill="#A855F7" />
                <circle cx={dotX} cy={dotY} r="1" fill="white" />
              </>
            )}
            {rawPoints.map(([x, y], i) => {
              if (progress < i / totalSegments) return null
              return (
                <g key={i}>
                  <circle cx={x} cy={y} r="2.5" fill="rgba(168,85,247,0.15)" />
                  <circle cx={x} cy={y} r="1.2" fill="rgba(168,85,247,0.7)" />
                </g>
              )
            })}
            {showArrow && (
              <g
                transform={`translate(${rawPoints[rawPoints.length - 1][0] + 4}, ${rawPoints[rawPoints.length - 1][1] - 10})`}
                style={{ opacity: (progress - 0.92) / 0.08 }}
              >
                <path d="M0,8 L6,0 L12,8" fill="none" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6,0 L6,12" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" />
              </g>
            )}
          </svg>
        </div>
        <div className="flex items-center gap-1 mt-0.5">
          <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
          <p className="text-[6.5px] text-violet-400 font-medium">+18% vs mes anterior</p>
        </div>
      </div>
    </div>
  )
}

function IPhoneMockup({ size = "default" }: { size?: "default" | "small" }) {
  const isSmall = size === "small"
  return (
    <div className="relative animate-float">
      <AnimatedBorderCard
        borderRadius={isSmall ? 36 : 48}
        borderWidth={2}
        speed={0.5}
        opacity={0.75}
        innerClassName="bg-transparent"
      >
        <div
          className={`relative bg-gradient-to-b from-[#1a1a1d] to-[#0E0E11] shadow-2xl ${
            isSmall
              ? "w-[200px] h-[415px] rounded-[2.2rem] p-1.5 shadow-[0_0_40px_rgba(124,58,237,0.15)]"
              : "w-[260px] h-[538px] sm:w-[280px] sm:h-[580px] rounded-[2.9rem] p-2 shadow-[0_0_60px_rgba(124,58,237,0.2)]"
          }`}
        >
          <div className={`w-full h-full bg-[#050505] overflow-hidden relative ${isSmall ? "rounded-[2rem]" : "rounded-[2.5rem]"}`}>
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 bg-[#050505] rounded-b-2xl z-20 ${isSmall ? "w-20 h-5" : "w-28 h-7"}`} />
            <div className={`w-full h-full ${isSmall ? "pt-7" : "pt-10"} flex flex-col`}>
              <DashboardScreen />
            </div>
          </div>
          <div className="absolute right-[-2px] top-28 w-1 h-12 bg-gradient-to-b from-[#2a2a2d] to-[#1a1a1d] rounded-l-sm" />
          <div className="absolute left-[-2px] top-24 w-1 h-8 bg-gradient-to-b from-[#2a2a2d] to-[#1a1a1d] rounded-r-sm" />
          <div className="absolute left-[-2px] top-36 w-1 h-12 bg-gradient-to-b from-[#2a2a2d] to-[#1a1a1d] rounded-r-sm" />
          <div className="absolute left-[-2px] top-52 w-1 h-12 bg-gradient-to-b from-[#2a2a2d] to-[#1a1a1d] rounded-r-sm" />
        </div>
      </AnimatedBorderCard>
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-4 bg-[rgba(124,58,237,0.15)] rounded-full blur-xl" />
    </div>
  )
}

export function HeroSection() {
  const line1 = "Controla todo tu"
  const line2 = "negocio de celulares"
  const { displayed: text1, done: done1 } = useTypingEffect(line1, 55, 600)
  const { displayed: text2 } = useTypingEffect(line2, 55, done1 ? 0 : 99999)
  const [line2Started, setLine2Started] = useState(false)

  useEffect(() => {
    if (done1) setLine2Started(true)
  }, [done1])

  const showCursor1 = !done1
  const showCursor2 = line2Started && text2.length < line2.length

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24 pb-16 sm:pb-20 relative overflow-hidden noise-bg hero-radial">
      {/* Violet radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(124,58,237,0.1),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-[radial-gradient(ellipse,rgba(168,85,247,0.07),transparent_70%)]" />
      </div>

      {/* Subtle device silhouettes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-64 border border-[rgba(124,58,237,0.05)] rounded-[2rem] rotate-12 hidden sm:block" />
        <div className="absolute bottom-32 left-[15%] w-24 h-48 border border-[rgba(124,58,237,0.04)] rounded-[1.5rem] -rotate-6 hidden sm:block" />
        <div className="absolute top-40 right-[20%] w-20 h-40 border border-[rgba(124,58,237,0.04)] rounded-[1.5rem] rotate-6 hidden md:block" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12 items-center w-full">
        <div className="text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass-card-violet mb-6 sm:mb-8"
          >
            <Smartphone className="w-3 h-3 sm:w-4 sm:h-4 text-violet-400 shrink-0" />
            <span className="text-xs sm:text-sm text-[#9BA0A8]">Plataforma de gestión para tiendas de celulares</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 min-h-[2.4em] sm:min-h-[2.2em]"
          >
            <span className="text-white block">
              {text1}
              {showCursor1 && (
                <span className="inline-block w-[3px] h-[0.85em] bg-white ml-1 align-middle animate-blink" />
              )}
            </span>
            <span className="text-violet-gradient block">
              {line2Started ? text2 : ""}
              {showCursor2 && (
                <span className="inline-block w-[3px] h-[0.85em] bg-violet-400 ml-1 align-middle animate-blink" />
              )}
              {line2Started && text2.length >= line2.length && (
                <span className="inline-block w-[3px] h-[0.85em] bg-violet-400 ml-1 align-middle animate-blink" />
              )}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-[#9BA0A8] max-w-xl mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed text-balance px-2 sm:px-0"
          >
            Gestioná inventario, ventas, reparaciones y clientes en tiempo real, sin errores.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
          >
            <Link
              href="https://vortexcontrolphone.online/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-violet inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base"
            >
              Probar demo
            </Link>
            <Link
              href="#features"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#9BA0A8] hover:text-white border border-white/[0.08] rounded-full hover:border-[rgba(124,58,237,0.3)] transition-all duration-300"
            >
              <span>Ver cómo funciona</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 sm:mt-12"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Avatar de usuario"
                    loading="lazy"
                    decoding="async"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#050505] hover:-translate-y-1 transition object-cover"
                    style={{ zIndex: i + 1 }}
                  />
                ))}
              </div>
              <div className="h-8 w-px bg-white/10 hidden sm:block" />
              <div className="flex flex-col items-center sm:items-start gap-0.5">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#FACC15" stroke="#FACC15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                    </svg>
                  ))}
                  <span className="text-[#9BA0A8] font-medium ml-1 text-xs sm:text-sm">5.0</span>
                </div>
                <p className="text-xs sm:text-sm text-[#9BA0A8] text-center sm:text-left">
                  Usado por <span className="text-white font-medium">dueños de tiendas</span> y técnicos
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mobile iPhone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="lg:hidden flex justify-center mt-12 relative"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 bg-[radial-gradient(circle,rgba(124,58,237,0.1),transparent_70%)]" />
            </div>
            <IPhoneMockup size="small" />
          </motion.div>
        </div>

        {/* iPhone — desktop */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative hidden lg:flex justify-center items-center"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-80 bg-[radial-gradient(circle,rgba(124,58,237,0.12),transparent_70%)] animate-subtle-pulse" />
          </div>
          <IPhoneMockup size="default" />
        </motion.div>
      </div>
    </section>
  )
}
