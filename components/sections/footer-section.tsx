import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"

const footerLinks = {
  product: [
    { label: "Funciones", href: "#features" },
    { label: "Precios", href: "#pricing" },
    { label: "Documentación", href: "#" },
  ],
  company: [
    { label: "Sobre nosotros", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contacto", href: "#" },
  ],
  legal: [
    { label: "Privacidad", href: "#" },
    { label: "Términos", href: "#" },
  ],
}

export function FooterSection() {
  return (
    <footer className="px-4 sm:px-6 py-12 sm:py-16 relative noise-bg overflow-hidden">
      {/* Metallic separator top */}
      <div className="metallic-separator absolute top-0 left-0 right-0" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <Link href="/" className="font-display text-lg sm:text-xl font-semibold flex items-center gap-1.5">
              <span className="text-white">Vortex</span>
              <span className="text-silver-gradient">Control</span>
            </Link>
            <p className="mt-4 text-xs sm:text-sm text-[#9BA0A8] max-w-xs">
              La plataforma de gestión para tiendas de celulares y servicio técnico.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-heading text-xs sm:text-sm font-semibold text-white mb-4">Producto</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs sm:text-sm text-[#9BA0A8] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading text-xs sm:text-sm font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs sm:text-sm text-[#9BA0A8] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-heading text-xs sm:text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs sm:text-sm text-[#9BA0A8] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 sm:pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[#6b6f76] text-center sm:text-left">© {new Date().getFullYear()} Vortex Control. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-[#9BA0A8] hover:text-white transition-colors" aria-label="GitHub">
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link href="#" className="text-[#9BA0A8] hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link href="#" className="text-[#9BA0A8] hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
