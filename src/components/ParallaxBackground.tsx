import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  intensity?: number;
  className?: string;
}

export const ParallaxBackground = ({ 
  children, 
  intensity = 0.2,
  className = "" 
}: ParallaxBackgroundProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Transform the scroll progress into a parallax effect
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${intensity * 100}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-60" />
        <div className="absolute inset-0 grid grid-cols-12 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div 
              key={i} 
              className="relative h-full"
            >
              <div 
                className={`absolute h-full w-px bg-gray-200 opacity-${Math.floor(Math.random() * 30) + 10}`}
                style={{ 
                  left: `${Math.floor(Math.random() * 100)}%`,
                }}
              />
            </div>
          ))}
        </div>
      </motion.div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// A component that provides a subtle fade-in animation as elements enter the viewport
export const FadeInSection = ({ 
  children, 
  className = "" 
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <motion.div 
      ref={ref}
      className={className}
      style={{ opacity, y }}
    >
      {children}
    </motion.div>
  );
};

// A simple dot grid background that can be used as a pattern
export const DotGrid = ({ 
  className = "",
  dotColor = "bg-gray-200",
  dotSize = 1,
  gap = 24
}: {
  className?: string;
  dotColor?: string;
  dotSize?: number;
  gap?: number;
}) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundImage: `radial-gradient(${dotColor} ${dotSize}px, transparent 0)`,
          backgroundSize: `${gap}px ${gap}px`
        }}
      />
    </div>
  );
}; 