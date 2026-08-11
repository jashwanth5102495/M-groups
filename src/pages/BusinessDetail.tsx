import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/ui/PageTransition';
import { businesses } from '../data/businesses';
import { ArrowRight } from 'lucide-react';

export const BusinessDetail = () => {
  const { id } = useParams<{ id: string }>();
  const business = businesses.find(b => b.id === id);

  if (!business) {
    return <Navigate to="/businesses" replace />;
  }

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-end pb-24 pt-32">
        <div className="absolute inset-0 z-0">
          <img 
            src={business.image} 
            alt={business.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-xs tracking-[0.2em] text-accent uppercase font-medium mb-4 block">
              {business.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-secondary mb-6 max-w-4xl">
              {business.name}
            </h1>
            {business.status === 'Upcoming' && (
              <span className="inline-block bg-accent/20 text-accent border border-accent/30 px-6 py-3 text-sm tracking-[0.2em] uppercase font-medium mb-6">
                Coming Soon
              </span>
            )}
          </motion.div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-24 bg-primary border-t border-[#1a1a1a]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="w-full md:w-1/3">
              <h2 className="text-3xl font-serif text-secondary mb-6">About the Business</h2>
              <div className="w-12 h-[2px] bg-accent" />
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-xl md:text-2xl text-secondary/80 font-light leading-relaxed mb-12">
                {business.description}
              </p>
              
              {/* Temporary Placeholder for extended content */}
              <div className="prose prose-invert prose-lg text-secondary/60">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <div className="mt-16 pt-16 border-t border-[#1a1a1a]">
                <a href="#contact" className="inline-flex items-center gap-3 text-sm tracking-wider font-medium text-secondary hover:text-accent transition-colors duration-300">
                  ENQUIRE ABOUT {business.name.toUpperCase()} <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
