"use client"

import { motion } from "framer-motion"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

const testimonials = [
  {
    text: "Antes tenía todo desordenado entre Excel y WhatsApp. Ahora controlo inventario, ventas y reparaciones desde un solo panel.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    name: "Laura Mendez",
    role: "Dueña de TechCell",
  },
  {
    text: "Los canjes de equipos antes los manejaba en papel. Con esta plataforma quedan registrados automáticamente y se agregan al stock.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Rodrigo Fernandez",
    role: "Dueño de MovilStore",
  },
  {
    text: "El módulo de reparaciones cambió todo. Ahora sé exactamente qué equipo está con qué técnico y en qué estado.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Valentina Torres",
    role: "Técnica y socia de CelularFix",
  },
  {
    text: "Mis clientes me preguntan por el estado de su reparación y en segundos puedo responderles. Antes tardaba minutos buscando en papeles.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Martin Gomez",
    role: "Técnico en SmartRepair",
  },
  {
    text: "Los reportes de ventas me ayudan a entender qué modelos se venden más y cuándo comprar más stock. Es muy práctico.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "Camila Rios",
    role: "Administradora en PhoneZone",
  },
  {
    text: "Tengo dos sucursales y puedo ver el inventario de ambas desde el mismo lugar. Antes era un caos total.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Sebastian Vargas",
    role: "Propietario de MegaCell",
  },
  {
    text: "La gestión de clientes es excelente. Puedo ver el historial completo de cada uno y ofrecerles un mejor servicio.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    name: "Florencia Navarro",
    role: "Vendedora en CelularTech",
  },
  {
    text: "Empecé a usarla hace tres meses y ya no me imagino manejar el negocio sin ella. Todo queda ordenado y claro.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    name: "Diego Herrera",
    role: "Dueño de iShop",
  },
  {
    text: "El registro de ventas con descuentos y múltiples formas de pago me ahorra muchísimo tiempo al cierre del día.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Paula Castillo",
    role: "Encargada en TelefoníaPlus",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const logos = ["TechCell", "MovilStore", "CelularFix", "SmartRepair", "PhoneZone", "MegaCell"]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-4 sm:px-6 py-16 sm:py-24 relative noise-bg overflow-hidden">
      <div className="metallic-separator absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-xl mx-auto mb-12 px-2"
        >
          <div className="border border-white/[0.08] py-1.5 px-4 rounded-full text-xs sm:text-sm text-[#9BA0A8] glass-card">
            Testimonios
          </div>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white mt-6 text-center tracking-tight">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-center mt-4 text-[#9BA0A8] text-sm sm:text-lg text-balance px-2">
            Dueños de tiendas y técnicos que transformaron la gestión de su negocio.
          </p>
        </motion.div>

        <div className="hidden md:flex justify-center gap-4 lg:gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} duration={17} />
        </div>

        <div className="md:hidden flex justify-center [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[600px] overflow-hidden">
          <TestimonialsColumn testimonials={testimonials} duration={25} />
        </div>

        <div className="mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-white/[0.08]">
          <p className="text-center text-xs sm:text-sm text-[#9BA0A8] mb-8">Usado por negocios de todo el país</p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              className="flex gap-8 sm:gap-12 md:gap-16"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ x: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" } }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <span
                  key={`${logo}-${index}`}
                  className="text-base sm:text-lg md:text-xl font-semibold text-white/20 whitespace-nowrap flex-shrink-0"
                >
                  {logo}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
