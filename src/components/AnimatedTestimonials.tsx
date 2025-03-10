import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TestimonialProps {
  quote: string;
  author: string;
  title?: string;
  avatar?: string;
}

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
  interval = 5000,
  className = ''
}: {
  testimonials: TestimonialProps[];
  autoplay?: boolean;
  interval?: number;
  className?: string;
}) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const next = () => {
    setDirection(1);
    setCurrent((prevCurrent) => 
      prevCurrent === testimonials.length - 1 ? 0 : prevCurrent + 1
    );
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prevCurrent) => 
      prevCurrent === 0 ? testimonials.length - 1 : prevCurrent - 1
    );
  };

  useEffect(() => {
    if (autoplay) {
      timeoutRef.current = setTimeout(() => {
        next();
      }, interval);
    }
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [current, autoplay, interval]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="flex justify-center items-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="w-full max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="bg-white rounded-lg p-8 shadow-md"
            >
              <div className="mb-4">
                <svg width="45" height="36" className="mb-5 mx-auto opacity-20" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.4 35.5998L20.55 22.9498V0.599805H0V22.9498H9.2L3.8 35.5998H13.4ZM37.85 35.5998L45 22.9498V0.599805H24.45V22.9498H33.65L28.25 35.5998H37.85Z" fill="currentColor"/>
                </svg>
              </div>
              <p className="text-xl mb-6 text-gray-800">{testimonials[current].quote}</p>
              <div className="flex items-center justify-center">
                {testimonials[current].avatar && (
                  <img 
                    src={testimonials[current].avatar} 
                    alt={testimonials[current].author}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                )}
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">{testimonials[current].author}</h4>
                  {testimonials[current].title && (
                    <p className="text-sm text-gray-500">{testimonials[current].title}</p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1);
              setCurrent(index);
            }}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === current ? 'bg-gray-800' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:px-10">
        <button 
          onClick={prev}
          className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-800 opacity-50 hover:opacity-100 transition-opacity duration-300"
          aria-label="Previous testimonial"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button 
          onClick={next}
          className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-800 opacity-50 hover:opacity-100 transition-opacity duration-300"
          aria-label="Next testimonial"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}; 