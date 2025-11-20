import { motion } from 'framer-motion';
import { MapPin, AlertTriangle, Info } from 'lucide-react';

// To use your own photos: Replace the 'image' URL with your own image URLs
const species = [
  {
    name: 'Greater Flamingo',
    scientific: 'Phoenicopterus roseus',
    location: 'Africa, Middle East, India, Southern Europe',
    status: 'Least Concern',
    statusColor: 'bg-green-500',
    color: 'from-pink-400 to-pink-500',
    size: 'Largest species',
    diet: 'Crustaceans, mollusks, larvae',
    fact: 'Most widespread flamingo species',
    image: 'https://a-z-animals.com/media/2018/09/Flamingo-standing-on-one-leg.jpg'
  },
  {
    name: 'American Flamingo',
    scientific: 'Phoenicopterus ruber',
    location: 'Caribbean, West Indies',
    status: 'Least Concern',
    statusColor: 'bg-green-500',
    color: 'from-rose-500 to-red-500',
    size: 'Large',
    diet: 'Algae, shrimp, mollusks',
    fact: 'Deepest crimson coloration',
    image: 'https://www.allaboutbirds.org/guide/assets/og/622776602-1200px.jpg'
  },
  {
    name: 'Chilean Flamingo',
    scientific: 'Phoenicopterus chilensis',
    location: 'Southern South America',
    status: 'Near Threatened',
    statusColor: 'bg-yellow-500',
    color: 'from-pink-300 to-pink-400',
    size: 'Large',
    diet: 'Algae, invertebrates',
    fact: 'Gray legs with pink joints',
    image: 'https://www.patagonjournal.com/images/stories/fe03-487-flamingos.jpg'
  },
  {
    name: 'Lesser Flamingo',
    scientific: 'Phoeniconaias minor',
    location: 'Africa, India',
    status: 'Near Threatened',
    statusColor: 'bg-yellow-500',
    color: 'from-pink-400 to-rose-400',
    size: 'Smallest species',
    diet: 'Microscopic algae (Spirulina)',
    fact: 'Most specialized filter feeder',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Flock_of_Lesser_Flamingo_along_with_juvenile_near_Jamnagar_railway_stationDSCN1798_1.jpg'
  },
  {
    name: 'Andean Flamingo',
    scientific: 'Phoenicoparrus andinus',
    location: 'High Andes Mountains',
    status: 'Vulnerable',
    statusColor: 'bg-orange-500',
    color: 'from-pink-300 to-yellow-300',
    size: 'Medium-large',
    diet: 'Diatoms, algae',
    fact: 'Rarest flamingo species',
    image: 'https://news.iu.edu/live/image/gid/2/width/1000/height/667/11299_Ossian_Lindholm_A71_0685.rev.1709588022.jpg'
  },
  {
    name: "James's Flamingo",
    scientific: 'Phoenicoparrus jamesi',
    location: 'High Andes (Altiplano)',
    status: 'Near Threatened',
    statusColor: 'bg-yellow-500',
    color: 'from-pink-400 to-orange-300',
    size: 'Small-medium',
    diet: 'Diatoms, algae',
    fact: 'Thought extinct until 1957',
    image: 'https://www.mediamatic.net/image/2016/12/15/james_s_flamingo_mating_ritual.jpg%28mediaclass-full-width.c3083fedae46a95f1139ff9d5833b1b6b8e20a69%29.jpg'
  }
];

export default function SpeciesGrid() {
  return (
    <section id="species" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-pink">
            Six Spectacular Species
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Learn about the unique characteristics of all six flamingo species
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {species.map((s, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4, ease: "easeOut" }}
              whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.25 } }}
            >
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 border-2 border-pink-100 shadow-2xl shadow-pink-200/30 h-full transition-all hover:shadow-glow-pink-strong hover:border-pink-300">
                <div className="w-full h-40 rounded-2xl mb-5 relative overflow-hidden shadow-lg">
                  <img 
                    src={s.image} 
                    alt={s.name}
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                  />
                  <motion.div
                    className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity"
                  />
                  <div className="absolute top-4 right-4">
                    <motion.div 
                      className={`${s.statusColor} w-4 h-4 rounded-full shadow-lg ring-2 ring-white`}
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-1">{s.name}</h3>
                <p className="text-sm italic text-gray-600 mb-4">{s.scientific}</p>

                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{s.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <AlertTriangle className="w-4 h-4 text-pink-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{s.status}</span>
                  </div>

                  <div className="pt-3 border-t border-pink-200 space-y-2 text-sm">
                    <p className="text-gray-700"><strong>Size:</strong> {s.size}</p>
                    <p className="text-gray-700"><strong>Diet:</strong> {s.diet}</p>
                    <div className="flex items-start gap-2 bg-pink-50 rounded-lg p-2 mt-2">
                      <Info className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">{s.fact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
