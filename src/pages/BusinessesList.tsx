import { PageTransition } from '../components/ui/PageTransition';
import { businesses } from '../data/businesses';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const BusinessesList = () => {
  return (
    <PageTransition>
      <section className="pt-48 pb-24 bg-primary min-h-screen">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-6xl md:text-8xl font-serif text-secondary mb-16">
            OUR <span className="text-accent italic">BUSINESSES.</span>
          </h1>
          
          <div className="grid grid-cols-1 gap-8">
            {businesses.map((business, index) => (
              <motion.div 
                key={business.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative h-[40vh] min-h-[300px] overflow-hidden bg-[#050505] flex items-end p-8 md:p-12 border border-[#111]"
              >
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img 
                    src={business.image} 
                    alt={business.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-40 group-hover:opacity-70"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
                </div>
                
                <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                  <div>
                    <span className="text-xs tracking-[0.2em] text-accent uppercase font-medium mb-3 block">
                      {business.category}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif text-secondary mb-3">
                      {business.name}
                    </h2>
                    <p className="text-secondary/70 max-w-xl">
                      {business.description}
                    </p>
                  </div>
                  
                  {business.status === 'Upcoming' ? (
                     <span className="shrink-0 bg-accent/20 text-accent border border-accent/30 px-6 py-3 text-sm tracking-[0.2em] uppercase font-medium">
                       Coming Soon
                     </span>
                  ) : (
                    business.route.startsWith('http') ? (
                      <a 
                        href={business.route}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 flex items-center justify-center gap-3 bg-white text-black px-8 py-4 font-medium text-sm tracking-wider hover:bg-accent hover:text-white transition-colors duration-300"
                      >
                        EXPLORE <ArrowRight size={18} />
                      </a>
                    ) : (
                      <Link 
                        to={business.route}
                        className="shrink-0 flex items-center justify-center gap-3 bg-white text-black px-8 py-4 font-medium text-sm tracking-wider hover:bg-accent hover:text-white transition-colors duration-300"
                      >
                        EXPLORE <ArrowRight size={18} />
                      </Link>
                    )
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
