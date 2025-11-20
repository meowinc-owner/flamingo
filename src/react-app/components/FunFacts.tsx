import { motion } from 'framer-motion';
import { Sparkles, Calendar, Egg, Ruler, Brain, History } from 'lucide-react';

const facts = [
  {
    icon: Calendar,
    title: '40-50 Years',
    description: 'Lifespan in the wild',
    detail: 'Flamingos are long-lived birds with slow maturation'
  },
  {
    icon: Egg,
    title: 'One Egg Per Year',
    description: 'Low reproductive rate',
    detail: 'Parents invest heavily in their single chick'
  },
  {
    icon: Ruler,
    title: '4 Pumps Per Second',
    description: 'Tongue pumping speed',
    detail: 'Rapid filtering allows high-volume water processing'
  },
  {
    icon: Brain,
    title: '5+ Year Friendships',
    description: 'Long-term social bonds',
    detail: 'Individual recognition and preference maintained'
  },
  {
    icon: History,
    title: 'Thought Extinct Until 1957',
    description: "James's Flamingo rediscovery",
    detail: 'Found in remote Laguna Colorada, Bolivia'
  },
  {
    icon: Sparkles,
    title: 'Born Gray, Not Pink',
    description: 'Coloration develops over time',
    detail: 'Chicks acquire color through carotenoid-rich diet'
  }
];

export default function FunFacts() {
  return (
    <section id="facts" className="py-24 px-6 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-pink">
            Amazing Facts
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover the extraordinary details that make flamingos unique
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((fact, index) => {
            const Icon = fact.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 border-2 border-pink-100 shadow-2xl shadow-pink-200/30 h-full group hover:border-pink-300 transition-all">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-5 shadow-lg"
                    whileHover={{ scale: 1.15, rotate: 360, transition: { duration: 0.4 } }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {fact.title}
                  </h3>
                  <p className="text-pink-600 font-semibold mb-3">
                    {fact.description}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {fact.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Cultural section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-16 bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 border-2 border-pink-100 shadow-2xl shadow-pink-200/30"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              From Ancient Gods to Lawn Ornaments
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Ancient Egyptians revered flamingos as embodiments of the Sun God Ra. The bird's
                hieroglyph represented the color red and fire, reflecting its brilliant plumage.
              </p>
              <p className="text-lg">
                In modern culture, the pink plastic lawn flamingo—designed in 1957 by Don Featherstone—
                became so iconic it earned him the Ig Nobel Prize for Art in 1996. This transformation
                from divine symbol to kitsch ornament mirrors humanity's changing relationship with nature.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
