'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const leftTransformX = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const rightTransformX = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  
  return (
    <section 
      ref={sectionRef}
      id="philosophy" 
      className="py-20 md:py-32 bg-esthete-bg-secondary relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-texture opacity-40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-12 lg:space-x-24">
          {/* Left column - Text */}
          <motion.div 
            className="w-full md:w-1/2 max-w-lg"
            style={{ 
              opacity,
              x: leftTransformX
            }}
          >
            <h2 className="text-3xl md:text-4xl font-spartan uppercase tracking-widest mb-10 leading-tight">
              Design Philosophy
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                House of Esthete is not just a home-decor brand—it is a philosophy. Every object is Unique, Timeless, Limited, and meticulously handcrafted.
              </p>
              
              <p className="text-lg leading-relaxed">
                It is a Collectible, not a commodity. Where Form finds Soul.
              </p>
              
              <div className="mt-8 hover-reveal interactive">
                <div className="font-spartan tracking-widest text-sm uppercase border-b border-esthete-accent inline-block pb-1">
                  Explore Origins
                </div>
                <div className="hover-reveal__inner bg-esthete-accent/20 rounded p-4 text-center">
                  <p className="italic">
                    "What began as sketches on napkins evolved into a philosophy of inhabitable art."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right column - Images */}
          <motion.div 
            className="w-full md:w-1/2 max-w-lg"
            style={{ 
              opacity,
              x: rightTransformX
            }}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/4846461/pexels-photo-4846461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Architectural sketch"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-esthete-neutral/10 hover:bg-transparent transition-all duration-500"></div>
              </div>
              
              <div className="relative aspect-[3/4] overflow-hidden mt-8">
                <Image
                  src="/images/Frame 4.png"
                  alt="Material texture"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-esthete-neutral/10 hover:bg-transparent transition-all duration-500"></div>
              </div>
              
              <div className="col-span-2 relative aspect-video overflow-hidden mt-6">
                <Image
                  src="/images/Frame 5.png"
                  alt="Design process"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-esthete-neutral/10 hover:bg-transparent transition-all duration-500"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}