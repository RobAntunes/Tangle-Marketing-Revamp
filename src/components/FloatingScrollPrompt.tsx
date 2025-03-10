import { useEffect } from 'react';
import { motion } from 'framer-motion';

export const FloatingScrollPrompt = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const prompt = document.getElementById('scroll-prompt');
      
      // Hide the scroll prompt when user scrolls down
      if (prompt) {
        if (scrollY > 100) {
          prompt.style.opacity = '0';
        } else {
          prompt.style.opacity = '1';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div 
      id="scroll-prompt"
      className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-50 cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
    >
      <motion.p 
        className="text-gray-500 text-sm mb-2 font-light"
      >
        Scroll to explore
      </motion.p>
      <motion.div 
        className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1"
      >
        <motion.div 
          className="w-1 h-2 bg-gray-400 rounded-full"
          animate={{ 
            y: [0, 8, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  );
}; 