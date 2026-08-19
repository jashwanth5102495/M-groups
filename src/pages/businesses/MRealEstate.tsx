import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageTransition } from '../../components/ui/PageTransition';
import { MapSection } from '../../components/ui/MapSection';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } as any }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 } as any
  }
};

export const MRealEstate = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <PageTransition>
      <div className="w-full min-h-screen bg-[#faf9f6] text-[#111] font-sans selection:bg-black selection:text-white">
        
        {/* Hero Section */}
        <section className="relative w-full h-[95vh] min-h-[700px] flex flex-col justify-center overflow-hidden pt-20">
          
          {/* Hero Background */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/real.webp" 
              alt="Premium Architecture" 
              className="w-full h-full object-cover object-right"
            />
            {/* Gradient to ensure text readability on the left */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#faf9f6] via-[#faf9f6]/90 to-transparent w-full md:w-[70%] lg:w-[60%]" />
            <div className="absolute inset-0 bg-white/10" />
          </div>

          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <motion.div 
              className="w-full lg:w-1/2 flex flex-col"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={fadeUp} className="mb-6">
                <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-[#8b7355]">
                  PREMIUM REAL ESTATE
                </span>
              </motion.div>
              
              <motion.h1 
                variants={fadeUp}
                className="text-5xl md:text-6xl lg:text-[76px] leading-[1.05] font-serif tracking-tight text-[#111] mb-6"
              >
                Prime Land & <br />
                Properties.
              </motion.h1>
              
              <motion.p 
                variants={fadeUp}
                className="text-[#444] text-sm md:text-base leading-relaxed max-w-md mb-10 font-medium"
              >
                Explore exceptional plots, strategic rental lands, premium lease properties, and scenic farm lands tailored for your future.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-16">
                <a href="#featured" className="inline-flex items-center justify-center gap-4 bg-[#111] text-white px-8 py-4 text-xs tracking-widest uppercase font-medium hover:bg-black transition-colors shadow-lg">
                  Explore Properties
                  <ArrowRight size={16} />
                </a>
                <a href="#projects" className="inline-flex items-center justify-center gap-2 bg-transparent text-[#111] px-2 py-4 text-xs tracking-widest uppercase font-medium hover:opacity-60 transition-opacity border-b-2 border-transparent hover:border-[#111]">
                  Discover Our Projects
                </a>
              </motion.div>

              {/* Trust Points */}
              <motion.div 
                variants={fadeUp}
                className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-[#111]/10 max-w-xl"
              >
                <div>
                  <h4 className="text-[#111] text-xs font-bold uppercase tracking-wider mb-2">Premium Properties</h4>
                  <p className="text-[#666] text-[11px] leading-relaxed">Carefully selected homes and developments</p>
                </div>
                <div>
                  <h4 className="text-[#111] text-xs font-bold uppercase tracking-wider mb-2">Trusted Expertise</h4>
                  <p className="text-[#666] text-[11px] leading-relaxed">Professional guidance from search to possession</p>
                </div>
                <div>
                  <h4 className="text-[#111] text-xs font-bold uppercase tracking-wider mb-2">Exceptional Spaces</h4>
                  <p className="text-[#666] text-[11px] leading-relaxed">Designed around comfort, quality and lifestyle</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Properties Section */}
        <section id="featured" className="bg-[#faf9f6] py-32 overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            
            {/* Section Header */}
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-col mb-20"
            >
              <motion.span variants={fadeUp} className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-[#8b7355] mb-6">
                FEATURED PROPERTIES
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-serif tracking-tight text-[#111] mb-8">
                Invest in Your <br/>
                Future.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-[#555] text-sm md:text-base leading-relaxed max-w-lg font-medium">
                Discover a curated collection of prime plots, agricultural farm lands, and strategic properties available for rent or lease.
              </motion.p>
            </motion.div>

            {/* Properties Grid */}
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12"
            >
              {[
                { 
                  name: "Plots", 
                  location: "Premium Locations", 
                  details: "Residential & Commercial Plots", 
                  img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop" 
                },
                { 
                  name: "Rental Land", 
                  location: "Strategic Areas", 
                  details: "Short & Long-term Rentals", 
                  img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=800&auto=format&fit=crop" 
                },
                { 
                  name: "Lease Properties", 
                  location: "Prime Business Hubs", 
                  details: "Commercial & Industrial Leases", 
                  img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" 
                },
                { 
                  name: "Farm Lands", 
                  location: "Scenic Countryside", 
                  details: "Agriculture & Weekend Farming", 
                  img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop" 
                }
              ].map((prop, idx) => (
                <motion.div key={idx} variants={fadeUp} className="group cursor-pointer flex flex-col">
                  {/* Image Container */}
                  <div className="w-full aspect-[4/3] rounded-[2px] overflow-hidden mb-8 relative">
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                    <img 
                      src={prop.img} 
                      alt={prop.name} 
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out origin-center" 
                    />
                  </div>
                  
                  {/* Card Content */}
                  <div className="flex items-end justify-between px-2 transform group-hover:-translate-y-1 transition-transform duration-500 ease-out">
                    <div className="flex flex-col">
                      <h3 className="text-xl font-serif text-[#111] mb-2">{prop.name}</h3>
                      <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#666] mb-4">{prop.location}</p>
                      <p className="text-sm text-[#888] font-medium">{prop.details}</p>
                    </div>
                    
                    {/* Arrow Button */}
                    <div className="w-10 h-10 rounded-full border border-[#ddd] flex items-center justify-center group-hover:bg-[#111] group-hover:border-[#111] transition-colors duration-500 shrink-0">
                      <ArrowUpRight size={16} className="text-[#111] group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-24 flex justify-center"
            >
              <button onClick={() => setShowPopup(true)} className="inline-flex items-center gap-4 border-b-2 border-[#111] pb-2 text-sm tracking-[0.15em] uppercase font-bold text-[#111] hover:text-[#8b7355] hover:border-[#8b7355] transition-colors cursor-pointer">
                View All Properties
                <ArrowRight size={16} />
              </button>
            </motion.div>

          </div>
        </section>
        
        <MapSection />

        {/* Popup */}
        <AnimatePresence>
          {showPopup && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowPopup(false)}
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white p-10 max-w-md w-full rounded-[2px] shadow-2xl text-center relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-16 h-[2px] bg-[#8b7355] mx-auto mb-6"></div>
                <h3 className="text-2xl font-serif text-[#111] mb-4">Properties Coming Soon</h3>
                <p className="text-[#555] leading-relaxed mb-8">
                  Our comprehensive list of properties is currently being prepared and will be listed here shortly. Stay tuned!
                </p>
                <button 
                  onClick={() => setShowPopup(false)}
                  className="bg-[#111] text-white px-8 py-3 text-xs tracking-widest uppercase font-medium hover:bg-[#8b7355] transition-colors"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </PageTransition>
  );
};
