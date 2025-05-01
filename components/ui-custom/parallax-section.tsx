'use client';

import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  children: ReactNode;
  bgImage?: string;
  bgColor?: string;
  speed?: number;
}

export default function ParallaxSection({ 
  children, 
  bgImage, 
  bgColor = '#E9E9E7',
  speed = 0.5 
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 150 * speed]);
  
  return (
    <section 
      ref={sectionRef}
      className="parallax-section relative min-h-[50vh] overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {bgImage && (
        <motion.div 
          className="parallax-bg"
          style={{ 
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y
          }}
        />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}