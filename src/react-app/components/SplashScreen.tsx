import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const FUN_FACTS = [
  "Flamingos are born with gray feathers, not pink!",
  "A group of flamingos is called a 'flamboyance'",
  "Flamingos can fly up to 35 miles in a single night",
  "Flamingos get their pink color from their food",
  "A flamingo can drink boiling water from hot springs",
  "Flamingos are filter feeders like whales",
  "Baby flamingos are called chicks or fluffy chicks",
  "Flamingos can live up to 50 years in the wild",
  "Flamingos produce a red milk to feed their young",
  "Flamingos stand on one leg to conserve body heat",
  "There are 6 species of flamingos in the world",
  "Flamingos sleep standing on one leg while flying",
  "A flamingo's heart is the size of a marble",
  "Flamingos are extremely social birds",
  "Flamingos mate for life and are monogamous",
  "The Andes are home to the rarest flamingo species",
  "Flamingos communicate through various sounds and displays",
  "Flamingos can turn their heads 270 degrees",
  "Lake Nakuru in Kenya has over 2 million flamingos",
  "Flamingos have special salt glands in their beaks"
];

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);
  const [shouldFade, setShouldFade] = useState(false);
  const [funFact] = useState(() => FUN_FACTS[Math.floor(Math.random() * FUN_FACTS.length)]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 2;
        if (newProgress >= 85 && !shouldFade) {
          setShouldFade(true);
        }
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [shouldFade]);

  useEffect(() => {
    if (shouldFade) {
      const fadeTimeout = setTimeout(onComplete, 500);
      return () => clearTimeout(fadeTimeout);
    }
  }, [shouldFade, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-rose-50 overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: shouldFade ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
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
              {/* Body */}
              <motion.ellipse
                cx="60"
                cy="70"
                rx="16"
                ry="20"
                fill="url(#gradient)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              />
              {/* Long curved neck */}
              <motion.path
                d="M65 52 Q72 40, 70 25 Q69 15, 65 10"
                stroke="url(#gradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
              {/* Head */}
              <motion.circle
                cx="63"
                cy="8"
                r="4"
                fill="url(#gradient)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
              {/* Beak */}
              <motion.path
                d="M66 7 L78 5 Q80 5, 79 7 L67 9 Z"
                fill="url(#gradient)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              />
              {/* Left leg */}
              <motion.path
                d="M58 88 L56 105"
                stroke="url(#gradient)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              />
              {/* Right leg */}
              <motion.path
                d="M62 88 L64 105"
                stroke="url(#gradient)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.45, duration: 0.8 }}
              />
              {/* Left foot */}
              <motion.path
                d="M54 105 L58 105"
                stroke="url(#gradient)"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.7, duration: 0.4 }}
              />
              {/* Right foot */}
              <motion.path
                d="M62 105 L66 105"
                stroke="url(#gradient)"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.75, duration: 0.4 }}
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

          <motion.h2
            className="text-3xl font-bold text-gradient-pink mb-0"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            FlamingoLab
          </motion.h2>

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
            className="mt-8 text-xs text-gray-600 font-medium max-w-xs italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            💡 {funFact}
          </motion.p>

          <motion.p
            className="mt-4 text-sm text-gray-500 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
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
