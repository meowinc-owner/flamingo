import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);
  const [particles] = useState(Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.5,
    duration: 2 + Math.random() * 1,
  })));

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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-rose-50 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-pink-400 rounded-full"
          style={{ left: `${particle.left}%`, top: 0 }}
          animate={{
            y: ['0vh', '100vh'],
            opacity: [0, 1, 1, 0],
            x: [0, (Math.random() - 0.5) * 50],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
      {/* Animated background elements */}
      <motion.div
        className="absolute -inset-32 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-10 left-20 w-32 h-32 bg-gradient-to-r from-pink-300 to-pink-400 rounded-full blur-2xl opacity-25"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-10 right-20 w-32 h-32 bg-gradient-to-r from-rose-300 to-rose-400 rounded-full blur-2xl opacity-25"
        animate={{
          y: [0, -30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="relative z-10">
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
        
        {/* Additional glow layer for more polish */}
        <motion.div
          className="absolute -inset-32 bg-gradient-to-r from-pink-200/50 to-rose-200/50 rounded-full blur-2xl opacity-20"
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
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
            className="mb-8 relative"
          >
            {/* Glow effect around logo */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400/30 to-rose-400/30 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <svg
              viewBox="0 0 120 120"
              className="w-32 h-32 mx-auto relative z-10"
              fill="none"
            >
              <motion.circle
                cx="60"
                cy="60"
                r="50"
                stroke="url(#gradient)"
                strokeWidth="4"
                fill="none"
                initial={{ pathLength: 0, rotate: 0 }}
                animate={{ pathLength: 1, rotate: 360 }}
                transition={{ duration: 2, ease: "easeInOut", rotate: { duration: 8, repeat: Infinity, ease: "linear" } }}
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
            <motion.span
              style={{ display: "inline-block" }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
            >
              F
            </motion.span>
            <motion.span
              style={{ display: "inline-block" }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
            >
              l
            </motion.span>
            <motion.span
              style={{ display: "inline-block" }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            >
              a
            </motion.span>
            <motion.span
              style={{ display: "inline-block" }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
            >
              m
            </motion.span>
            <motion.span
              style={{ display: "inline-block" }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            >
              i
            </motion.span>
            <motion.span
              style={{ display: "inline-block" }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
            >
              n
            </motion.span>
            <motion.span
              style={{ display: "inline-block" }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            >
              g
            </motion.span>
            <motion.span
              style={{ display: "inline-block" }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.45 }}
            >
              o
            </motion.span>
            <motion.span
              style={{ display: "inline-block" }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              L
            </motion.span>
            <motion.span
              style={{ display: "inline-block" }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.55 }}
            >
              a
            </motion.span>
            <motion.span
              style={{ display: "inline-block" }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            >
              b
            </motion.span>
          </motion.h1>

          <motion.div
            className="w-64 h-2 bg-pink-100 rounded-full overflow-hidden mx-auto shadow-lg shadow-pink-200/50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-pink-500 via-pink-600 to-rose-600 rounded-full shadow-lg shadow-pink-500/50"
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
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              Loading interactive science
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            >
              .
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            >
              .
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            >
              .
            </motion.span>
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
