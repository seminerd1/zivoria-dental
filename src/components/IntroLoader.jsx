import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const IntroLoader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Total intro duration: ~2.4 seconds, then start exit animation
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = () => {
    if (!isVisible && onComplete) {
      onComplete();
    }
  };

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          key="intro-screen"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[100] bg-[#0a184e] flex flex-col items-center justify-center overflow-hidden text-white"
          onAnimationComplete={handleAnimationComplete}
        >
          {/* Subtle background radial light pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,178,0.15)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center [perspective:1000px]">
            
            {/* Teeth Vector Graphic: Comes up, then 360-degree 3D horizontal Y-axis spin */}
            <motion.div
              initial={{ y: 90, opacity: 0, scale: 0.5, rotateY: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1, 
                scale: 1,
                rotateY: [0, 0, 360],
              }}
              transition={{
                y: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.5 },
                scale: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                rotateY: { 
                  duration: 1.2, 
                  delay: 0.5, 
                  ease: [0.25, 1, 0.35, 1],
                  times: [0, 0.25, 1]
                }
              }}
              className="relative p-7 rounded-full bg-[#112d80]/90 border border-[#00f2b2]/40 backdrop-blur-md shadow-[0_0_50px_rgba(0,242,178,0.25)] [transform-style:preserve-3d]"
            >
              {/* Premium Tooth Vector SVG */}
              <svg 
                viewBox="0 0 100 100" 
                className="w-20 h-20 text-[#00f2b2] filter drop-shadow-[0_0_15px_rgba(0,242,178,0.7)]" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                {/* Tooth Crown & Roots */}
                <path d="M 50 12 C 34 12, 20 20, 20 38 C 20 54, 26 66, 32 76 C 36 83, 38 90, 42 94 C 44 96, 47 95, 48 89 C 49 84, 50 74, 50 65 C 50 74, 51 84, 52 89 C 53 95, 56 96, 58 94 C 62 90, 64 83, 68 76 C 74 66, 80 54, 80 38 C 80 20, 66 12, 50 12 Z" />
                {/* Crown Contour Highlights */}
                <path d="M 36 30 C 42 26, 58 26, 64 30" strokeWidth="2" strokeOpacity="0.7" />
                <path d="M 44 24 C 48 22, 52 22, 56 24" strokeWidth="1.5" strokeOpacity="0.5" />
                <circle cx="50" cy="46" r="3" fill="currentColor" fillOpacity="0.6" />
              </svg>

              {/* Orbiting accent ring during rotation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 1.4] }}
                transition={{ duration: 1.2, delay: 0.8 }}
                className="absolute inset-0 rounded-full border border-[#00f2b2]/60 pointer-events-none"
              />
            </motion.div>

            {/* Editorial Brand Reveal Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-center space-y-2"
            >
              <h1 className="editorial-serif text-3xl sm:text-4xl text-white tracking-[0.2em] uppercase font-normal">
                Zivora <span className="font-light text-[#00f2b2]">Speciality</span>
              </h1>
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-200">
                Dental Clinic
              </p>
            </motion.div>

            {/* Subtle progress indicator line */}
            <motion.div 
              className="mt-10 w-48 h-[2px] bg-[#2a3430] overflow-hidden relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div 
                className="h-full bg-[#adbdb6]"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
