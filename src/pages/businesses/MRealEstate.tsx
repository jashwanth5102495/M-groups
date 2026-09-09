import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageTransition } from '../../components/ui/PageTransition';
import { MapSection } from '../../components/ui/MapSection';
import { ArrowRight, ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  "WhatsApp Image 2026-09-01 at 7.33.41 PM.webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (1).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (10).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (11).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (12).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (13).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (14).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (15).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (16).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (17).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (18).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (19).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (2).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (20).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (21).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (22).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (23).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (24).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (25).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (26).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (27).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (28).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (29).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (3).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (30).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (31).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (32).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (33).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (34).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (35).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (36).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (37).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (38).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (39).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (4).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (40).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (41).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (42).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (5).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (6).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (7).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (8).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM (9).webp",
  "WhatsApp Image 2026-09-01 at 7.33.53 PM.webp"
];

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
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState<number | null>(null);
  const galleryScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (galleryScrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = galleryScrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          galleryScrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          galleryScrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(scrollInterval);
  }, []);

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

            {/* Properties Gallery (Horizontal Scroll) */}
            <div className="relative">
              <div 
                ref={galleryScrollRef}
                className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              >
                {galleryImages.map((img, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: Math.min(idx, 10) * 0.05 }}
                    className="flex-none w-[280px] sm:w-[320px] h-[400px] group relative overflow-hidden rounded-[4px] snap-center cursor-pointer"
                    onClick={() => setSelectedGalleryIndex(idx)}
                  >
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 z-10 pointer-events-none" />
                    <img 
                      src={`/real/toWEBP/${encodeURIComponent(img)}`}
                      alt={`Property image ${idx + 1}`}
                      loading={idx < 4 ? "eager" : "lazy"}
                      className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out origin-center" 
                    />
                    
                    {/* Subtle overlay icon on hover */}
                    <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg">
                        <ArrowUpRight size={18} className="text-[#111]" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Gallery Modal */}
            <AnimatePresence>
              {selectedGalleryIndex !== null && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[110] flex flex-col items-center justify-center bg-black/95 p-4 sm:p-8"
                >
                  <button
                    onClick={() => setSelectedGalleryIndex(null)}
                    className="absolute top-6 right-6 text-white/70 hover:text-white z-[120] p-2 bg-black/50 rounded-full"
                  >
                    <X size={24} />
                  </button>

                  {/* Main Image */}
                  <div className="relative w-full max-w-5xl h-[60vh] sm:h-[70vh] flex items-center justify-center mb-6">
                    <motion.img
                      key={selectedGalleryIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      src={`/real/toWEBP/${encodeURIComponent(galleryImages[selectedGalleryIndex])}`}
                      alt="Gallery Selected"
                      className="max-w-full max-h-full object-contain rounded-md"
                    />
                    
                    {/* Navigation Arrows */}
                    <button 
                      onClick={(e) => { e.stopPropagation(); setSelectedGalleryIndex(prev => prev === 0 ? galleryImages.length - 1 : prev! - 1); }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors z-[120]"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setSelectedGalleryIndex(prev => prev === galleryImages.length - 1 ? 0 : prev! + 1); }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors z-[120]"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>

                  {/* Thumbnails */}
                  <div className="w-full max-w-5xl overflow-x-auto flex gap-2 pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {galleryImages.map((img, idx) => (
                      <div
                        key={idx}
                        onClick={() => setSelectedGalleryIndex(idx)}
                        className={`flex-none w-20 h-20 sm:w-24 sm:h-24 cursor-pointer rounded-md overflow-hidden transition-all duration-300 ${selectedGalleryIndex === idx ? 'ring-2 ring-white opacity-100 scale-105' : 'opacity-40 hover:opacity-100'}`}
                      >
                        <img
                          src={`/real/toWEBP/${encodeURIComponent(img)}`}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

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
