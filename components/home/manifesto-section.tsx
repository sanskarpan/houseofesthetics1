'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ManifestoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);
  
  return (
    <section 
      ref={sectionRef}
      className="relative py-24 md:py-36 overflow-hidden"
    >
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute object-cover w-full h-full"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-craftsman-sanding-down-a-piece-of-wood-14117-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-esthete-neutral/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center text-white"
          style={{ opacity, scale }}
        >
          <h2 className="text-3xl md:text-4xl font-spartan uppercase tracking-widest mb-10 leading-tight">
            Our Manifesto
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl">
            <p className="leading-relaxed">
              House of Esthete is where Form finds Soul.
            </p>
            
            <p className="leading-relaxed">
              We believe in the transformative power of objects that exist beyond trends and commerce. Each creation represents our commitment to excellence, sustainability, and the preservation of craft.
            </p>
            
            <p className="leading-relaxed">
              To own an Esthete piece is to participate in a dialogue between past and future, between artisan and inhabitant. It is to value the unseen details, the hours of dedication, and the philosophy embedded in every curve and texture.
            </p>
            
            <div className="pt-8">
              <span className="font-spartan uppercase tracking-ultra-wide text-lg">
                Unique. Timeless. Limited.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}