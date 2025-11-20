import { motion } from 'framer-motion';
import { Droplet, Zap, Eye, Palette } from 'lucide-react';

const anatomyFeatures = [
  {
    icon: Droplet,
    title: 'Filter Feeding',
    description: 'Specialized bill filters microscopic food from water',
    color: 'from-blue-400 to-cyan-400'
  },
  {
    icon: Palette,
    title: 'Pink Coloration',
    description: 'Color comes from carotenoids in their diet',
    color: 'from-pink-400 to-rose-400'
  },
  {
    icon: Zap,
    title: 'One-Legged Standing',
    description: 'Conserves energy through passive joint mechanism',
    color: 'from-purple-400 to-pink-400'
  },
  {
    icon: Eye,
    title: 'Crop Milk',
    description: 'Parents produce nutrient-rich secretion for chicks',
    color: 'from-orange-400 to-pink-400'
  }
];

export default function AnatomySection() {
  return (
    <section id="anatomy" className="py-24 px-6 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-pink">
            Unique Adaptations
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Specialized features that make flamingos extraordinary
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {anatomyFeatures.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 border-2 border-pink-100 shadow-2xl shadow-pink-200/30 h-full hover:border-pink-300 transition-all">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
