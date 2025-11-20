import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-rose-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <motion.div
          className="absolute -inset-20 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ willChange: 'transform' }}
        />
        
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 0.8
            }}
            className="mb-8"
          >
            <svg
              viewBox="0 0 120 120"
              className="w-32 h-32 mx-auto"
              fill="none"
            >
              <motion.circle
                cx="60"
                cy="60"
                r="50"
                stroke="url(#gradient)"
                strokeWidth="4"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.path
                d="M60 30 Q55 25, 50 30 L45 50 Q40 55, 45 60 L50 90 Q55 100, 60 90 L60 60 L70 40 Q65 30, 60 30"
                fill="url(#gradient)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="50%" stopColor="#db2777" />
                  <stop offset="100%" stopColor="#be185d" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          <motion.h1
            className="text-5xl font-bold text-gradient-pink mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            FlamingoLab
          </motion.h1>

          <motion.div
            className="w-64 h-2 bg-pink-100 rounded-full overflow-hidden mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-pink-500 via-pink-600 to-rose-600 rounded-full"
              style={{
                width: `${progress}%`,
                willChange: 'width'
              }}
              transition={{ duration: 0.1 }}
            />
          </motion.div>

          <motion.p
            className="mt-4 text-sm text-gray-500 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.4 }}
          >
            Loading interactive science...
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
