import HeroSection from './components/HeroSection';
import CollectionPreview from './components/CollectionPreview';
import ValueProposition from './components/ValueProposition';
import InstagramFeed from './components/InstagramFeed';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
      <Navbar />
      <HeroSection />
      <CollectionPreview />
      <ValueProposition />
      <InstagramFeed />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;