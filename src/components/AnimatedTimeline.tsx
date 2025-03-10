import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  date: string;
  description: string;
  status?: 'completed' | 'in-progress' | 'upcoming';
  icon?: React.ReactNode;
}

export const AnimatedTimeline = ({ 
  items,
  className = ''
}: { 
  items: TimelineItemProps[];
  className?: string;
}) => {
  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-300"></div>
        
        {/* Timeline items */}
        <div className="relative">
          {items.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              position={index % 2 === 0 ? 'left' : 'right'}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TimelineItem = ({ 
  item, 
  position,
  index 
}: { 
  item: TimelineItemProps;
  position: 'left' | 'right';
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  // Different animations based on position
  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };
  
  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };
  
  const statusColors = {
    'completed': 'bg-gray-600',
    'in-progress': 'bg-gray-400',
    'upcoming': 'bg-gray-200'
  };
  
  return (
    <div className={`mb-12 flex justify-center items-center`} ref={ref}>
      {/* Content */}
      <motion.div
        className={`flex ${position === 'left' ? 'flex-row' : 'flex-row-reverse'} items-center w-full`}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={position === 'left' ? leftVariants : rightVariants}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {/* Card */}
        <div className={`w-5/12 ${position === 'left' ? 'text-right pr-8' : 'text-left pl-8'}`}>
          <div className="bg-white p-6 shadow-md rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{item.date}</p>
            <p className="text-gray-600 mt-3">{item.description}</p>
          </div>
        </div>
        
        {/* Center dot */}
        <div className="relative w-2/12 flex justify-center">
          <motion.div
            className={`w-6 h-6 rounded-full ${item.status ? statusColors[item.status] : 'bg-gray-400'} border-4 border-white z-10 flex items-center justify-center`}
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
          >
            {item.icon && <span className="text-white text-xs">{item.icon}</span>}
          </motion.div>
        </div>
        
        {/* Empty space for opposite side */}
        <div className="w-5/12"></div>
      </motion.div>
    </div>
  );
}; 