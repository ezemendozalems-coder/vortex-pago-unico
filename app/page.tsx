import dynamic from "next/dynamic"
import { Navbar } from "@/components/ui/navbar"
import { HeroSection } from "@/components/sections/hero-section"

// Lazy-load everything below the fold
const ImpactSection = dynamic(() => import("@/components/sections/impact-section").then(m => ({ default: m.ImpactSection })))
const ProductShowcaseSection = dynamic(() => import("@/components/sections/product-showcase-section").then(m => ({ default: m.ProductShowcaseSection })))
const CompatibilitySection = dynamic(() => import("@/components/sections/compatibility-section").then(m => ({ default: m.CompatibilitySection })))
const FeaturesSection = dynamic(() => import("@/components/sections/features-section").then(m => ({ default: m.FeaturesSection })))
const TestimonialsSection = dynamic(() => import("@/components/sections/testimonials-section").then(m => ({ default: m.TestimonialsSection })))
const PricingSection = dynamic(() => import("@/components/sections/pricing-section").then(m => ({ default: m.PricingSection })))
const CtaSection = dynamic(() => import("@/components/sections/cta-section").then(m => ({ default: m.CtaSection })))
const FooterSection = dynamic(() => import("@/components/sections/footer-section").then(m => ({ default: m.FooterSection })))

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] relative">
      <Navbar />
      <HeroSection />
      <ImpactSection />
      <ProductShowcaseSection />
      <CompatibilitySection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <CtaSection />
      <FooterSection />
    </main>
  )
}
