import { PageTransition } from '../components/ui/PageTransition';
import { Hero } from '../components/home/Hero';
import { AboutSection } from '../components/home/AboutSection';
import { BusinessShowcase } from '../components/home/BusinessShowcase';
import { SignatureProjects } from '../components/home/SignatureProjects';
import { UpcomingVentures } from '../components/home/UpcomingVentures';
import { CompanyStats } from '../components/home/CompanyStats';

import { MapSection } from '../components/ui/MapSection';

export const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <AboutSection />
      <BusinessShowcase />
      <SignatureProjects />
      <CompanyStats />
      <UpcomingVentures />
      <MapSection />
    </PageTransition>
  );
};
