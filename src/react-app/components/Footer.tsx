import { motion } from 'framer-motion';
import { BookOpen, Users, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-pink-600 to-rose-700 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6" />
              <h3 className="text-xl font-bold">Educational Resource</h3>
            </div>
            <p className="text-pink-100 leading-relaxed">
              FlamingoLab provides Grade 7 students with an interactive, engaging way to learn
              about biology, ecology, and conservation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-6 h-6" />
              <h3 className="text-xl font-bold">Conservation Groups</h3>
            </div>
            <ul className="space-y-2 text-pink-100">
              <li>• IUCN SSC Flamingo Specialist Group</li>
              <li>• Wetlands International</li>
              <li>• Local Andean conservation organizations</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-6 h-6" />
              <h3 className="text-xl font-bold">Learn More</h3>
            </div>
            <p className="text-pink-100 leading-relaxed">
              Continue your flamingo education with reputable sources like Britannica School,
              National Geographic, and peer-reviewed scientific journals.
            </p>
          </motion.div>
        </div>

        <div className="border-t border-pink-400 pt-8">
          <div className="text-center">
            <motion.h2
              className="text-4xl font-bold mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              FlamingoLab
            </motion.h2>
            <p className="text-pink-100">
              An interactive learning experience powered by scientific research
            </p>
            <p className="text-pink-200 text-sm mt-4">
              Based on comprehensive research about the Phoenicopteridae family
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
