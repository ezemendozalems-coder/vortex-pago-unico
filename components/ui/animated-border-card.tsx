"use client"

import type React from "react"
import { LiquidMetalBorder } from "@/components/ui/liquid-metal-border"
import { cn } from "@/lib/utils"

interface AnimatedBorderCardProps {
  children: React.ReactNode
  className?: string
  innerClassName?: string
  borderRadius?: number
  borderWidth?: number
  /** "always" shows the border permanently; "hover" only on hover (requires group on parent) */
  mode?: "always" | "hover"
  speed?: number
  opacity?: number
}

export function AnimatedBorderCard({
  children,
  className,
  innerClassName,
  borderRadius = 16,
  borderWidth = 1,
  mode = "always",
  speed = 0.4,
  opacity = 0.55,
}: AnimatedBorderCardProps) {
  return (
    <LiquidMetalBorder
      borderRadius={borderRadius}
      borderWidth={borderWidth}
      speed={speed}
      opacity={opacity}
      scale={3}
      distortion={0.08}
      contour={0.35}
      softness={0.05}
      repetition={6}
      className={cn("gradient-border-glow", className)}
    >
      <div
        className={cn(
          "w-full h-full bg-[#0E0E11]",
          innerClassName,
        )}
        style={{ borderRadius: borderRadius - borderWidth }}
      >
        {children}
      </div>
    </LiquidMetalBorder>
  )
}
