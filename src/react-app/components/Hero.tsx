import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-[600px] h-[600px] bg-gradient-to-br from-pink-300 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 gpu-accelerated"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ willChange: 'transform' }}
        />
        <motion.div
          className="absolute top-40 right-20 w-[600px] h-[600px] bg-gradient-to-br from-rose-300 to-rose-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 gpu-accelerated"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ willChange: 'transform' }}
        />
        <motion.div
          className="absolute -bottom-20 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-pink-400 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 gpu-accelerated"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 60, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ willChange: 'transform' }}
        />
        <motion.div
          className="absolute bottom-40 right-40 w-[400px] h-[400px] bg-gradient-to-br from-orange-300 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25 gpu-accelerated"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ willChange: 'transform' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border-2 border-pink-200 rounded-full px-5 py-2.5 mb-8 shadow-xl shadow-pink-200/50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(244, 114, 182, 0.3)' }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-5 h-5 text-pink-500" />
            </motion.div>
            <span className="text-sm font-semibold text-pink-700">Interactive Grade 7 Science</span>
          </motion.div>

          <motion.h1
            className="text-7xl md:text-9xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.span 
              className="inline-block text-gradient-pink"
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(244, 114, 182, 0)',
                  '0 0 30px rgba(244, 114, 182, 0.3)',
                  '0 0 20px rgba(244, 114, 182, 0)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Flamingo
            </motion.span>
            <br />
            <span className="text-gray-900">Lab</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Explore the fascinating world of flamingos through interactive science.
            Discover their unique anatomy, extreme habitats, and remarkable behaviors.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.button
              onClick={() => {
                document.getElementById('species')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative px-10 py-5 bg-gradient-to-r from-pink-500 via-pink-600 to-rose-600 text-white rounded-full font-bold text-lg shadow-2xl shadow-pink-500/50 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
              <span className="relative z-10">Start Exploring</span>
            </motion.button>
            
            <motion.button
              onClick={() => {
                document.getElementById('conservation')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-10 py-5 bg-white/90 backdrop-blur-sm text-pink-700 rounded-full font-bold text-lg border-2 border-pink-300 shadow-xl shadow-pink-200/30"
              whileHover={{ scale: 1.05, borderColor: 'rgb(244 114 182)', boxShadow: '0 20px 40px rgba(244, 114, 182, 0.3)' }}
              whileTap={{ scale: 0.98 }}
            >
              Conservation Status
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-20"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown className="w-8 h-8 text-pink-400 mx-auto" />
        </motion.div>
      </div>

      {/* Decorative flamingo silhouette */}
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 opacity-5"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.05, x: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-pink-600">
          <path
            fill="currentColor"
            d="M50 20 Q45 15, 40 20 L35 40 Q30 45, 35 50 L40 80 Q45 90, 50 80 L50 50 L60 30 Q55 20, 50 20"
          />
        </svg>
      </motion.div>
    </div>
  );
}
