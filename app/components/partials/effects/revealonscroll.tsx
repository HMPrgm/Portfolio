'use client'
import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  duration?:number;
  translate?:string;
}

const Reveal: React.FC<RevealProps> = ({ children, className = '', duration=1000,translate='translate-y-10'}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[${duration}ms] ${isVisible ? 'opacity-100' : `opacity-0 ${translate}`} ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;