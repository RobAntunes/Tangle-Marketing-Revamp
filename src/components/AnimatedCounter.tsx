import { useEffect, useRef, useState } from 'react';
import { useInView, motion } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

export const AnimatedCounter = ({
  value,
  prefix = '',
  suffix = '',
  duration = 2,
  className = '',
  decimals = 0
}: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const stepTime = Math.abs(Math.floor(duration * 1000 / end));
      
      // Handle case where stepTime is too small
      const minStepTime = 50;
      const actualStepTime = Math.max(stepTime, minStepTime);
      const steps = Math.ceil(duration * 1000 / actualStepTime);
      const increment = end / steps;
      
      const timer = setInterval(() => {
        start += increment;
        setDisplayValue(start);
        
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        }
      }, actualStepTime);
      
      return () => {
        clearInterval(timer);
      };
    }
  }, [inView, value, duration]);
  
  return (
    <motion.div 
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4 }}
    >
      {prefix}{displayValue.toFixed(decimals)}{suffix}
    </motion.div>
  );
};

export const AnimatedStatGroup = ({ 
  children, 
  className = '',
  title = ''
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div 
      ref={ref}
      className={`${className}`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ staggerChildren: 0.2 }}
    >
      {title && <h3 className="text-xl font-medium text-gray-600 mb-4">{title}</h3>}
      <div className="flex flex-wrap gap-6 justify-around">
        {children}
      </div>
    </motion.div>
  );
};

export const StatCard = ({
  label,
  value,
  prefix = '',
  suffix = '',
  icon,
  className = ''
}: {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  icon?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col items-center p-4 ${className}`}>
      {icon && <div className="mb-2 text-gray-500">{icon}</div>}
      <AnimatedCounter 
        value={value} 
        prefix={prefix} 
        suffix={suffix} 
        className="text-4xl font-bold text-gray-800"
      />
      <p className="text-sm text-gray-500 mt-2">{label}</p>
    </div>
  );
}; 