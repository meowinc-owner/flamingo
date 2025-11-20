import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { AlertTriangle, Factory, Thermometer, Droplet, Shield } from 'lucide-react';

const conservationData = [
  { name: 'Greater', status: 'LC', value: 3, color: '#22c55e' },
  { name: 'American', status: 'LC', value: 3, color: '#22c55e' },
  { name: 'Chilean', status: 'NT', value: 2, color: '#eab308' },
  { name: 'Lesser', status: 'NT', value: 2, color: '#eab308' },
  { name: "James's", status: 'NT', value: 2, color: '#eab308' },
  { name: 'Andean', status: 'VU', value: 1, color: '#f97316' }
];

const threats = [
  {
    icon: Factory,
    title: 'Pollution',
    description: 'Industrial runoff introduces toxins and destabilizes water chemistry',
    color: 'from-gray-600 to-gray-800'
  },
  {
    icon: Thermometer,
    title: 'Climate Change',
    description: 'Droughts and temperature shifts reduce available habitat',
    color: 'from-orange-500 to-red-600'
  },
  {
    icon: Droplet,
    title: 'Toxic Algae Blooms',
    description: 'Cyanobacteria blooms cause mass mortality events',
    color: 'from-green-600 to-teal-700'
  },
  {
    icon: Shield,
    title: 'Habitat Loss',
    description: 'Mining and development destroy critical wetland ecosystems',
    color: 'from-blue-600 to-purple-700'
  }
];

export default function ConservationStatus() {
  return (
    <section id="conservation" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-300 rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="w-5 h-5 text-orange-600" />
            <span className="text-sm font-semibold text-orange-700">Conservation Alert</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-pink">
            Under Threat
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Four out of six species face conservation challenges
          </p>
        </motion.div>

        {/* Conservation status chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 border-2 border-pink-100 shadow-2xl shadow-pink-200/30 mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            IUCN Red List Status
          </h3>
          
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={conservationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#fecdd3" />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" ticks={[1, 2, 3]} domain={[0, 3]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid #fbcfe8',
                  borderRadius: '12px',
                  padding: '12px'
                }}
                formatter={(value: number) => {
                  const statusLabels = ['', 'Vulnerable', 'Near Threatened', 'Least Concern'];
                  return [statusLabels[value], 'Status'];
                }}
              />
              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                {conservationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          <div className="flex justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-green-500" />
              <span className="text-sm text-gray-700">Least Concern (LC)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-yellow-500" />
              <span className="text-sm text-gray-700">Near Threatened (NT)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-orange-500" />
              <span className="text-sm text-gray-700">Vulnerable (VU)</span>
            </div>
          </div>
        </motion.div>

        {/* Threats grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {threats.map((threat, index) => {
            const Icon = threat.icon;
            
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
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${threat.color} flex items-center justify-center mb-5 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {threat.title}
                  </h3>
                  <p className="text-gray-700">
                    {threat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Critical insight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-gradient-to-br from-red-500 to-pink-600 rounded-3xl p-8 md:p-12 text-white shadow-glow-pink-strong"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              The Andean Crisis
            </h3>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                The Andean Flamingo is the rarest of all six species, with only ~38,000 individuals worldwide.
                It faces a unique challenge: its habitat spans four countries (Peru, Bolivia, Chile, Argentina),
                requiring international cooperation for protection.
              </p>
              <p>
                High-altitude mining operations threaten the delicate saline lakes these birds depend on.
                Their slow reproduction rate—reaching maturity at 3-5 years and laying only one egg per season—
                means populations recover very slowly from disturbances.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
