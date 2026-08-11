import { motion } from 'framer-motion';
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
                Spaces Designed <br />
                for Better Living.
              </motion.h1>
              
              <motion.p 
                variants={fadeUp}
                className="text-[#444] text-sm md:text-base leading-relaxed max-w-md mb-10 font-medium"
              >
                Explore exceptional residences and thoughtfully crafted developments where architecture, comfort, and timeless design come together.
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
                Spaces Worth <br/>
                Coming Home To.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-[#555] text-sm md:text-base leading-relaxed max-w-lg font-medium">
                Explore a curated collection of thoughtfully designed residences and properties, selected for their location, architecture, quality, and lasting value.
              </motion.p>
            </motion.div>

            {/* Properties Grid */}
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12"
            >
              {[
                { 
                  name: "Modern Villa", 
                  location: "Bangalore, Karnataka", 
                  details: "4 BHK · 3,200 sq.ft.", 
                  img: "https://images.unsplash.com/photo-1613490908592-fd5e679a973d?q=80&w=800&auto=format&fit=crop" 
                },
                { 
                  name: "Luxury Residence", 
                  location: "Bangalore, Karnataka", 
                  details: "3 BHK · 2,450 sq.ft.", 
                  img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" 
                },
                { 
                  name: "Contemporary Home", 
                  location: "Mysore, Karnataka", 
                  details: "3 BHK · 1,850 sq.ft.", 
                  img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop" 
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
              <a href="#properties" className="inline-flex items-center gap-4 border-b-2 border-[#111] pb-2 text-sm tracking-[0.15em] uppercase font-bold text-[#111] hover:text-[#8b7355] hover:border-[#8b7355] transition-colors">
                View All Properties
                <ArrowRight size={16} />
              </a>
            </motion.div>

          </div>
        </section>
        
        <MapSection />

      </div>
    </PageTransition>
  );
};
