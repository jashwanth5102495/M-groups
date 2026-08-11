import { motion } from 'framer-motion';
import { businesses } from '../../data/businesses';

export const UpcomingVentures = () => {
  const upcoming = businesses.filter(b => b.status === 'Upcoming');

  return (
    <section className="py-32 bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="container mx-auto px-6 md:px-12 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-[0.2em] text-accent uppercase font-medium mb-4 block">
            Future Focus
          </span>
          <h2 className="text-5xl md:text-7xl font-serif text-secondary">
            THE NEXT CHAPTER.
          </h2>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {upcoming.map((business, index) => (
            <motion.div
              key={business.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group overflow-hidden bg-primary border border-[#1a1a1a]"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <img 
                  src={business.image} 
                  alt={business.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-80"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1541888018151-5464101ebc6f?q=80&w=2000&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/80 backdrop-blur-sm border border-accent/30 px-8 py-4">
                    <span className="text-accent tracking-[0.2em] uppercase text-sm font-medium">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-12">
                <span className="text-xs tracking-[0.2em] text-secondary/40 uppercase mb-2 block">
                  {business.category}
                </span>
                <h3 className="text-3xl font-serif text-secondary mb-4">
                  {business.name}
                </h3>
                <p className="text-secondary/60">
                  {business.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
