'use client';

import { useEffect, useRef } from 'react';

interface MaskedTextProps {
  text: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: string;
  delay?: number;
}

export default function MaskedText({ 
  text, 
  tag = 'div', 
  className = '', 
  delay = 0 
}: MaskedTextProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add('revealed');
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [delay]);
  
  const TagName = tag as keyof JSX.IntrinsicElements;
  
  return (
    <div ref={elementRef} className={`text-mask ${className}`}>
      <TagName>{text}</TagName>
    </div>
  );
}