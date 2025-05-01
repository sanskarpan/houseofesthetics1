'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface TimelineItemProps {
  title: string;
  description: string;
  imageSrc: string;
  reverse?: boolean;
}

const TimelineItem = ({ title, description, imageSrc, reverse = false }: TimelineItemProps) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center mb-24 last:mb-0`}>
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <div className={`relative aspect-[4/3] overflow-hidden ${reverse ? 'md:ml-10' : 'md:mr-10'}`}>
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>
      
      <div className="w-full md:w-1/2 px-4">
        <h3 className="text-xl font-spartan uppercase tracking-widest mb-4">{title}</h3>
        <p className="text-esthete-neutral/80">{description}</p>
      </div>
    </div>
  );
};

const timelineItems = [
  {
    title: "MATERIAL SELECTION",
    description: "We source only the finest materials from ethical suppliers around the world. Each piece of wood, metal, and fabric is personally selected for its unique character and sustainability.",
    imageSrc: "/images/Frame 6.png"
  },
  {
    title: "DESIGN DEVELOPMENT",
    description: "Our design process blends traditional sketching with advanced 3D modeling to refine every aspect of form, function, and material interaction. Each piece is studied from all angles.",
    imageSrc: "/images/Frame 7.png",
    reverse: true
  },
  {
    title: "MASTER ARTISANSHIP",
    description: "House of Esthete partners with artisans who have dedicated decades to perfecting their craft. Their hands bring our designs to life through techniques passed down through generations.",
    imageSrc: "/images/Frame 8.png"
  }
];

export default function CraftsmanshipSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);
  
  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-32 bg-esthete-bg-secondary relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-xl mx-auto mb-20"
          style={{ opacity, y }}
        >
          <h2 className="text-3xl md:text-4xl font-spartan uppercase tracking-widest mb-6 leading-tight">
            Craftsmanship
          </h2>
          <p className="text-lg text-esthete-neutral/80">
            What the machine cannot replicate. The soul of House of Esthete lives in the hands of our master craftspeople.
          </p>
        </motion.div>
        
        <motion.div style={{ opacity }}>
          {timelineItems.map((item, index) => (
            <TimelineItem
              key={index}
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
              reverse={item.reverse}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}