'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface NavMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/origins', label: 'Origins' },
  { href: '/process', label: 'Process' },
  { href: '/collections', label: 'Collections' },
  { href: '/journal', label: 'Journal' },
  { href: '/contact', label: 'Contact' },
];

const containerVariants = {
  closed: {
    opacity: 0,
    x: '-100%',
    transition: {
      type: 'tween',
      duration: 0.5,
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: 'afterChildren',
    },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.5,
      staggerChildren: 0.1,
      delayChildren: 0.2,
      when: 'beforeChildren',
    },
  },
};

const itemVariants = {
  closed: { opacity: 0, y: 20 },
  open: { opacity: 1, y: 0 },
};

export default function NavMenu({ isOpen, onClose }: NavMenuProps) {
  const pathname = usePathname();
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-esthete-bg-primary z-40 flex items-center justify-center overflow-hidden"
          initial="closed"
          animate="open"
          exit="closed"
          variants={containerVariants}
        >
          <div 
            className="absolute inset-0 bg-texture opacity-20"
            onClick={onClose}
          />
          
          <motion.nav className="relative z-50 w-full max-w-md px-8 py-16">
            <ul className="space-y-6 text-center">
              {navLinks.map((link, index) => (
                <motion.li key={link.href} variants={itemVariants}>
                  <Link 
                    href={link.href}
                    className={cn(
                      "nav-link text-xl md:text-2xl",
                      pathname === link.href && "active"
                    )}
                    onClick={onClose}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            
            <motion.div 
              className="absolute bottom-0 left-0 w-full text-center mt-12 pb-8"
              variants={itemVariants}
            >
              <p className="text-sm tracking-widest opacity-70">
                Curated to endure.
              </p>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}