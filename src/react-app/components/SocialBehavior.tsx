import { motion } from 'framer-motion';
import { Users, Heart, Music, Baby } from 'lucide-react';

const behaviors = [
  {
    title: 'Flamboyances',
    description: 'Flamingos are extremely social, living in groups called "flamboyances" that can number in the tens of thousands.',
    icon: Users,
    color: 'from-blue-400 to-purple-500'
  },
  {
    title: 'Long-term Friendships',
    description: 'Individual flamingos form strong social bonds that last 5+ years, including same-sex and mixed-sex friendships.',
    icon: Heart,
    color: 'from-pink-400 to-rose-500'
  },
  {
    title: 'Synchronized Courtship',
    description: 'Hundreds of birds perform elaborate, synchronized dance rituals including head-flagging, wing-salutes, and marching.',
    icon: Music,
    color: 'from-orange-400 to-pink-500'
  },
  {
    title: 'Communal Creches',
    description: 'Chicks gather in large nursery groups while parents locate their own offspring using unique vocal calls.',
    icon: Baby,
    color: 'from-purple-400 to-pink-400'
  }
];

const courtshipMoves = [
  'Head-flag: Neck stretched high, head turns side to side',
  'Wing-salute: Wings spread to show black flight feathers',
  'Inverted wing-salute: Head down, tail up, wings partially open',
  'Twist-preen: Neck twisted back, appearing to preen wing',
  'Marching: Synchronized group stepping in formation'
];

export default function SocialBehavior() {
  return (
    <section id="behavior" className="py-24 px-6 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-pink">
            Social Intelligence
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Complex relationships and synchronized behaviors
          </p>
        </motion.div>

        {/* Behavior cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {behaviors.map((behavior, index) => {
            const Icon = behavior.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 border-2 border-pink-100 shadow-2xl shadow-pink-200/30 h-full hover:border-pink-300 transition-all">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${behavior.color} flex items-center justify-center mb-5 shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {behavior.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {behavior.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Courtship display section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 border-2 border-pink-100 shadow-2xl shadow-pink-200/30"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                The Courtship Dance
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Before breeding, flamingos perform one of nature's most spectacular synchronized displays.
                Hundreds or thousands of birds move together in perfectly timed sequences.
              </p>

              <div className="space-y-3">
                {courtshipMoves.map((move, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 pt-1">{move}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-pink-200 via-rose-200 to-pink-300 rounded-2xl relative overflow-hidden">
                {/* Animated dancing flamingos representation */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    rotate: [0, 3, -3, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  <div className="grid grid-cols-3 gap-4">
                    {[...Array(9)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-8 h-16 bg-white/40 rounded-full"
                        animate={{
                          scaleY: [1, 1.2, 1],
                          opacity: [0.4, 0.6, 0.4],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.1,
                          ease: 'easeInOut'
                        }}
                      />
                    ))}
                  </div>
                </motion.div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-sm font-semibold text-pink-600 text-center">
                      Synchronized Movement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
