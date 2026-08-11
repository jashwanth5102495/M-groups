import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { businesses } from '../../data/businesses';

export const BusinessShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[400vh] bg-[#020202]"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        
        {/* Section Heading Fixed */}
        <div className="absolute top-32 left-6 md:left-12 z-20 mix-blend-difference pointer-events-none">
          <h2 className="text-secondary/30 text-xs tracking-[0.3em] uppercase">Our Businesses</h2>
        </div>

        <motion.div style={{ x }} className="flex gap-16 md:gap-32 px-6 md:px-32 pt-20 h-[60vh] md:h-[70vh]">
          {businesses.map((business, index) => (
            <div 
              key={business.id} 
              className="relative w-[85vw] md:w-[60vw] h-full shrink-0 group flex flex-col justify-end overflow-hidden"
            >
              {/* Image */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={business.image} 
                  alt={business.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 md:p-16 w-full md:w-3/4">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-accent text-xl font-serif">{(index + 1).toString().padStart(2, '0')}</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-secondary/80">{business.category}</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-serif text-secondary mb-4">
                  {business.name}
                </h3>
                
                <p className="text-secondary/70 text-lg mb-8 line-clamp-2">
                  "{business.description}"
                </p>

                {business.status === 'Upcoming' ? (
                  <span className="inline-block bg-accent/20 text-accent border border-accent/30 px-4 py-2 text-xs tracking-[0.2em] uppercase font-medium">
                    Coming Soon
                  </span>
                ) : (
                  business.route.startsWith('http') ? (
                    <a 
                      href={business.route}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-sm tracking-wider font-medium text-secondary hover:text-accent transition-colors duration-300"
                      data-hoverable
                    >
                      EXPLORE <ArrowRight size={18} />
                    </a>
                  ) : (
                    <Link 
                      to={business.route}
                      className="inline-flex items-center gap-3 text-sm tracking-wider font-medium text-secondary hover:text-accent transition-colors duration-300"
                      data-hoverable
                    >
                      EXPLORE <ArrowRight size={18} />
                    </Link>
                  )
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
