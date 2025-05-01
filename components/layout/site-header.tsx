'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Logo from './logo';
import NavMenu from './nav-menu';
import { cn } from '@/lib/utils';

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close menu when route changes
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header 
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12",
          scrolled 
            ? "py-3 bg-esthete-bg-primary/90 backdrop-blur-sm shadow-sm" 
            : "py-6 bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Logo 
            isMenu={true} 
            onClick={toggleMenu} 
            className="interactive"
          />
          
          <div className="relative w-40 h-20">
            <Image
              src="/images/logo.png"
              alt="House of Esthete"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </motion.header>
      
      <NavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}