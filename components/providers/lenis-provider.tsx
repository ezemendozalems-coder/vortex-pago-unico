"use client"

import { ReactLenis } from "@studio-freight/react-lenis"
import type { ReactNode } from "react"
import type React from "react"

interface LenisProviderProps {
  children: ReactNode
}

export function LenisProvider({ children }: LenisProviderProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.5,
        smoothWheel: true,
        // Disable on touch devices — native scroll is already smooth
        prevent: (node) => node.classList.contains("no-lenis"),
      }}
      props={{ style: { position: "relative" } as React.CSSProperties }}
    >
      {children}
    </ReactLenis>
  )
}
