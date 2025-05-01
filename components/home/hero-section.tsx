'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  
  // Animate text reveal on load
  useEffect(() => {
    const textElements = document.querySelectorAll('.text-mask');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });
    
    textElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      textElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);
  
  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video/image */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ opacity, scale }}
      >
        <div className="relative h-full w-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute object-cover w-full h-full"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-marble-texture-in-detail-part-i-11048-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-esthete-bg-primary/20 via-transparent to-esthete-bg-primary"></div>
        </div>
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="staggered-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-spartan uppercase tracking-ultra-wide mb-6 max-w-4xl mx-auto leading-tight text-esthete-neutral">
            <div className="text-mask mb-2">
              <span>Beyond the</span>
            </div>
            <div className="text-mask">
              <span>Threshold</span>
            </div>
          </h1>
          
          <p className="text-esthete-neutral/80 max-w-lg mx-auto mt-8 mb-12 tracking-widest">
            A moment. A feeling. Your Curated Encounter.
          </p>
          
          <div className="mt-12">
            <a href="#philosophy" className="inline-block border-b border-esthete-accent text-esthete-neutral font-spartan tracking-widest py-2 interactive">
              DISCOVER THE ESSENCE
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="line"></div>
        <p className="text-xs tracking-widest mt-2 opacity-60">SCROLL</p>
      </div>
    </section>
  );
}