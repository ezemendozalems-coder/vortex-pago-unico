"use client"

import { motion } from "framer-motion"
import { AnimatedBorderCard } from "@/components/ui/animated-border-card"

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
                        id="panda-b3350e06-399b-4b35-ad8c-3440c3c19b22"
                        src="https://player-vz-8861c0e6-4f7.tv.pandavideo.com/embed/?v=b3350e06-399b-4b35-ad8c-3440c3c19b22"
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
                          const panda_id_player = 'panda-b3350e06-399b-4b35-ad8c-3440c3c19b22';
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

      </div>
    </section>
  )
}
