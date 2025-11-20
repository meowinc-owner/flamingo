import Navigation from '@/react-app/components/Navigation';
import Hero from '@/react-app/components/Hero';
import SpeciesGrid from '@/react-app/components/SpeciesGrid';
import AnatomySection from '@/react-app/components/AnatomySection';
import HabitatSection from '@/react-app/components/HabitatSection';
import SocialBehavior from '@/react-app/components/SocialBehavior';
import ConservationStatus from '@/react-app/components/ConservationStatus';
import FunFacts from '@/react-app/components/FunFacts';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <SpeciesGrid />
      <AnatomySection />
      <HabitatSection />
      <SocialBehavior />
      <ConservationStatus />
      <FunFacts />
      <Footer />
    </div>
  );
}
