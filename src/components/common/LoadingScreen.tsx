import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide loading screen after animation completes - reduced for better performance
    const timer = setTimeout(() => {
      setIsVisible(false);
      onLoadingComplete?.();
    }, 1500); // Total duration: 1.5 seconds (optimized)

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[10000] overflow-hidden"
        >
          {/* Left Panel - Split Screen */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ 
              duration: 0.6, 
              ease: [0.76, 0, 0.24, 1],
              delay: 0.9
            }}
            className="absolute top-0 left-0 w-1/2 h-full bg-primary flex items-center justify-end pr-4"
          >
            <div className="w-full h-full relative overflow-hidden">
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, hsl(229, 40%, 46%) 0%, hsl(229, 40%, 36%) 100%)"
                }}
                animate={{
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          {/* Right Panel - Split Screen */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ 
              duration: 0.6, 
              ease: [0.76, 0, 0.24, 1],
              delay: 0.9
            }}
            className="absolute top-0 right-0 w-1/2 h-full bg-white flex items-center justify-start pl-4"
          >
            <div className="w-full h-full relative overflow-hidden">
              {/* Subtle pattern */}
              <motion.div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: "radial-gradient(circle, hsl(229, 40%, 46%) 1px, transparent 1px)",
                  backgroundSize: "30px 30px"
                }}
              />
            </div>
          </motion.div>

          {/* Center Logo Container */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: 1, 
                scale: 1
              }}
              exit={{ 
                opacity: 0,
                scale: 1.2
              }}
              transition={{
                duration: 0.6,
                ease: [0.76, 0, 0.24, 1]
              }}
              className="relative"
            >
              {/* Logo background with white circle */}
              <motion.div
                className="bg-white rounded-2xl shadow-2xl p-8 relative"
                animate={{
                  boxShadow: [
                    "0 20px 60px -10px rgba(0, 0, 0, 0.3)",
                    "0 25px 80px -10px rgba(0, 0, 0, 0.4)",
                    "0 20px 60px -10px rgba(0, 0, 0, 0.3)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img
                  src="/logo.png"
                  alt="R Space"
                  className="h-32 w-auto relative z-10"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                {/* Fallback text logo */}
                <div className="hidden">
                  <h1 className="text-5xl font-bold text-primary tracking-wider">
                    R SPACE
                  </h1>
                </div>
              </motion.div>

              {/* Animated ring around logo */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-primary"
                initial={{ scale: 1, opacity: 0 }}
                animate={{ 
                  scale: [1, 1.1, 1.1],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            </motion.div>
          </div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute bottom-20 left-0 right-0 text-center z-10"
          >
            {/* <p className="text-white text-lg tracking-[0.3em] uppercase font-light mix-blend-difference">
              Royal Touch in Interiors
            </p> */}
          </motion.div>

          {/* Loading Progress Bar */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-10"
          >
            <motion.div
              className="h-full bg-white"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ 
                duration: 0.9,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
