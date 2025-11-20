import { motion } from 'framer-motion';
import { Mountain, Droplets, Thermometer, AlertCircle } from 'lucide-react';

const habitats = [
  {
    name: 'Saline Lakes',
    description: 'High-salt concentration environments',
    icon: Droplets,
    species: ['Greater', 'Chilean', 'Andean'],
    challenge: 'Extreme salinity limits other species',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    name: 'Alkaline Soda Lakes',
    description: 'High-pH chemical environments',
    icon: Thermometer,
    species: ['Lesser'],
    challenge: 'Caustic water chemistry',
    color: 'from-purple-400 to-pink-500'
  },
  {
    name: 'High-Altitude Wetlands',
    description: '13,000-16,000 feet elevation',
    icon: Mountain,
    species: ['Andean', "James's", 'Chilean'],
    challenge: 'Low oxygen, freezing temperatures',
    color: 'from-orange-400 to-red-500'
  }
];

export default function HabitatSection() {
  return (
    <section id="habitats" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-pink">
            Extreme Habitats
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Flamingos thrive in environments too harsh for most other animals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {habitats.map((habitat, index) => {
            const Icon = habitat.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 border-2 border-pink-100 shadow-2xl shadow-pink-200/30 h-full hover:border-pink-300 transition-all">
                  <motion.div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${habitat.color} flex items-center justify-center mb-5 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-9 h-9 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {habitat.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {habitat.description}
                  </p>

                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-pink-600 mb-1">
                        Species found here:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {habitat.species.map((species, i) => (
                          <span
                            key={i}
                            className="text-xs bg-pink-100 text-pink-700 px-3 py-1 rounded-full"
                          >
                            {species}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start gap-2 bg-orange-50 border border-orange-200 rounded-lg p-3">
                      <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-orange-800">
                        <strong>Challenge:</strong> {habitat.challenge}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Adaptation highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl p-8 md:p-12 text-white shadow-glow-pink-strong"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              The Extremophile Paradox
            </h3>
            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              Flamingos' specialization for extreme environments gives them a competitive advantage—
              few other species can survive in such harsh conditions. However, this same specialization
              makes them vulnerable: if their unique habitat is disrupted by pollution, drought, or
              climate change, they have nowhere else to go.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
