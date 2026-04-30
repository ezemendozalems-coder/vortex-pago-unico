"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#features", label: "Funciones" },
  { href: "#pricing", label: "Precios" },
  { href: "#testimonials", label: "Testimonios" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <nav className="max-w-5xl mx-auto flex items-center justify-between h-12 px-6 rounded-full glass-card">
        <Link href="/" className="font-display text-lg font-semibold flex items-center gap-0">
          <span className="text-white">VortexControl</span>
          <span className="text-violet-gradient ml-1">Phone</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 text-sm rounded-full transition-colors text-[#9BA0A8] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://vortexcontrolphone.online/login"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-1.5 text-sm rounded-full font-medium border border-white/[0.12] text-[#9BA0A8] hover:text-white hover:border-[rgba(124,58,237,0.4)] transition-all duration-200"
          >
            Login
          </Link>
          <Link
            href="https://vortexcontrolphone.online/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-violet ml-1 px-4 py-1.5 text-sm rounded-full font-medium"
          >
            Probar demo
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 text-[#9BA0A8] hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-4 right-4 bg-[#0E0E11] border border-[rgba(124,58,237,0.2)] rounded-2xl p-4 space-y-3 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm text-[#9BA0A8] hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://vortexcontrolphone.online/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block w-full px-4 py-2 text-sm font-medium text-center rounded-lg border border-white/[0.12] text-[#9BA0A8] hover:text-white transition-colors"
            >
              Login
            </Link>
            <Link
              href="https://vortexcontrolphone.online/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="btn-violet block w-full px-4 py-2 text-sm font-medium text-center rounded-lg"
            >
              Probar demo
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
