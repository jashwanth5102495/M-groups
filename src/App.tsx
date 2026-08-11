import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { BusinessesList } from './pages/BusinessesList';
import { BusinessDetail } from './pages/BusinessDetail';
import { MistoryCafe } from './pages/businesses/MistoryCafe';
import { MistoryFamilyRestaurant } from './pages/businesses/MistoryFamilyRestaurant';
import { MFarms } from './pages/businesses/MFarms';
import { MInteriors } from './pages/businesses/MInteriors';
import { MRealEstate } from './pages/businesses/MRealEstate';
import { Projects } from './pages/Projects';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { AnimatePresence } from 'framer-motion';
import { IntroSequence } from './components/ui/IntroSequence';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/businesses" element={<BusinessesList />} />
        <Route path="/businesses/mistory-roster-cafe" element={<MistoryCafe />} />
        <Route path="/businesses/mistory-family-restaurant" element={<MistoryFamilyRestaurant />} />
        <Route path="/businesses/m-farms" element={<MFarms />} />
        <Route path="/businesses/m-interiors" element={<MInteriors />} />
        <Route path="/m-real-estate" element={<MRealEstate />} />
        <Route path="/businesses/m-real-estate" element={<MRealEstate />} />
        <Route path="/businesses/:id" element={<BusinessDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  // Check session storage to only show intro once per session, or always show it on hard refresh
  const [showIntro, setShowIntro] = useState(() => {
    return !sessionStorage.getItem('introPlayed');
  });

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem('introPlayed', 'true');
  };

  return (
    <Router>
      {showIntro && <IntroSequence onComplete={handleIntroComplete} />}
      <CustomCursor />
      {/* Hide the main app layout until intro is completely finished so it doesn't interfere, or just let it sit underneath */}
      <div className={`flex flex-col min-h-screen bg-primary transition-opacity duration-1000 ${showIntro ? 'opacity-0 pointer-events-none fixed inset-0 overflow-hidden' : 'opacity-100'}`}>
        <Navbar />
        <main className="flex-grow relative z-10">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
