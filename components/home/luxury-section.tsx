'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface CarouselItemProps {
  index: number;
  title: string;
  description: string;
  imageSrc: string;
}

const CarouselItem = ({ index, title, description, imageSrc }: CarouselItemProps) => {
  return (
    <div className="keen-slider__slide">
      <div className="relative h-full w-full overflow-hidden rounded-lg">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-esthete-neutral/70 via-transparent to-transparent flex flex-col justify-end p-8">
          <h3 className="text-2xl font-spartan text-white tracking-widest mb-2">{title}</h3>
          <p className="text-white/80 max-w-md">{description}</p>
        </div>
      </div>
    </div>
  );
};

const carouselItems = [
  {
    title: "ETHEREAL LIGHTING",
    description: "Cast metal fixtures that transform light into an elemental experience.",
    imageSrc: "https://images.pexels.com/photos/2079670/pexels-photo-2079670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "SCULPTURAL SEATING",
    description: "Forms that challenge the boundary between furniture and art.",
    imageSrc: "https://images.pexels.com/photos/6527191/pexels-photo-6527191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "TEXTILE EXPRESSIONS",
    description: "Limited edition textiles that merge traditional craft with contemporary design.",
    imageSrc: "https://images.pexels.com/photos/3926542/pexels-photo-3926542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export default function LuxurySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  
  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-32 relative bg-esthete-bg-primary overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-xl mx-auto mb-16"
          style={{ opacity, y }}
        >
          <h2 className="text-3xl md:text-4xl font-spartan uppercase tracking-widest mb-6 leading-tight">
            Surreal Luxury
          </h2>
          <p className="text-lg text-esthete-neutral/80">
            Objects suspended between reality and dream. Functional art that transforms spaces into experiences.
          </p>
        </motion.div>
        
        <motion.div 
          className="relative"
          style={{ opacity }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[500px]">
            {carouselItems.map((item, index) => (
              <CarouselItem 
                key={index}
                index={index}
                title={item.title}
                description={item.description}
                imageSrc={item.imageSrc}
              />
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          style={{ opacity, y }}
        >
          <a href="/collections" className="inline-block border-b border-esthete-accent text-esthete-neutral font-spartan tracking-widest py-2 interactive">
            VIEW COLLECTIONS
          </a>
        </motion.div>
      </div>
    </section>
  );
}