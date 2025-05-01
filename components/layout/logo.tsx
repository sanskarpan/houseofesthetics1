'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  isMenu?: boolean;
  onClick?: () => void;
}

export default function Logo({ className, isMenu = false, onClick }: LogoProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn("relative cursor-pointer w-40 h-12 flex items-center", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Link href="/" className="block w-full h-full relative">
        {isMenu ? (
          <div className="flex flex-col space-y-2 justify-center h-full">
            <div className={`h-0.5 w-6 bg-esthete-neutral transition-all duration-300 ${isHovered ? 'w-8' : ''}`} />
            <div className={`h-0.5 w-6 bg-esthete-neutral transition-all duration-300 ${isHovered ? 'w-7' : ''}`} />
            <div className={`h-0.5 w-6 bg-esthete-neutral transition-all duration-300 ${isHovered ? 'w-6' : ''}`} />
          </div>
        ) : (
          <Image
            src="/images/logo.png"
            alt="House of Esthete"
            fill
            className="object-contain"
            priority
          />
        )}
      </Link>
    </motion.div>
  );
}