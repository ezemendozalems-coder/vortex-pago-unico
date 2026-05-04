"use client"

import { motion } from "framer-motion"
import { AnimatedBorderCard } from "@/components/ui/animated-border-card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="px-4 sm:px-6 py-16 sm:py-24 relative noise-bg overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <p className="text-xs sm:text-sm font-medium text-[#9BA0A8] uppercase tracking-wider mb-4">Funcionalidades</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Todo lo que necesita tu negocio
          </h2>
          <p className="text-[#9BA0A8] max-w-xl mx-auto text-balance text-sm sm:text-base px-2">
            Herramientas diseñadas específicamente para tiendas de celulares y servicios técnicos.
          </p>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <AnimatedBorderCard
            borderRadius={20}
            borderWidth={1}
            speed={0.35}
            opacity={0.6}
            innerClassName="bg-[#0a0a0d]"
            className="w-full"
          >
            <div className="relative w-full overflow-hidden rounded-2xl bg-[#050505]">
              {/* Violet radial glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(124,58,237,0.1),transparent_70%)] pointer-events-none z-10" />
              {/* 16:9 aspect ratio container */}
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <div
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  dangerouslySetInnerHTML={{
                    __html: `
                      <iframe
                        id="panda-a9506aba-4f1a-444d-bed8-04d98096e9b2"
                        src="https://player-vz-9d63c2fb-f2f.tv.pandavideo.com/embed/?v=a9506aba-4f1a-444d-bed8-04d98096e9b2"
                        style="border:none;width:100%;height:100%;"
                        allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                        allowfullscreen="true"
                        fetchpriority="high"
                      ></iframe>
                      <script>
                        if(!document.querySelector('script[src="https://player.pandavideo.com.br/api.v2.js"]')){
                          let s=document.createElement('script');
                          s.src='https://player.pandavideo.com.br/api.v2.js';
                          s.async=true;
                          document.head.appendChild(s);
                        }
                        window.pandascripttag = window.pandascripttag || [];
                        window.pandascripttag.push(function (){
                          const panda_id_player = 'panda-a9506aba-4f1a-444d-bed8-04d98096e9b2';
                          const p=new PandaPlayer(panda_id_player,{
                            onReady(){p.pipScrollFollow({panda_id_player});}
                          });
                        });
                      </script>
                    `,
                  }}
                />
              </div>
            </div>
          </AnimatedBorderCard>
        </motion.div>

        {/* Demo Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="https://vortexcontrolphone.online/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-violet inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base sm:text-lg shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all duration-300 group"
          >
            <span>Probar demo</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
