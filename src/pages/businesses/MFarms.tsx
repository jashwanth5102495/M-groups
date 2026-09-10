import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageTransition } from '../../components/ui/PageTransition';
import { ArrowUpRight, X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const galleryImages = [
  "1.jpeg",
  "1.webp",
  "2.webp",
  "WhatsApp Image 2026-09-09 at 10.11.10 PM.jpeg",
  "WhatsApp Image 2026-09-09 at 10.11.12 PM.jpeg",
  "WhatsApp Image 2026-09-09 at 10.11.15 PM.jpeg",
  "WhatsApp Image 2026-09-09 at 10.16.03 PM.jpeg",
  "WhatsApp Image 2026-09-09 at 10.16.09 PM.jpeg",
  "WhatsApp Image 2026-09-09 at 10.16.12 PM.jpeg",
  "WhatsApp Image 2026-09-09 at 10.16.19 PM.jpeg",
  "WhatsApp Image 2026-09-09 at 10.22.35 PM.jpeg",
  "WhatsApp Image 2026-09-09 at 10.23.06 PM.jpeg",
  "WhatsApp Image 2026-09-09 at 10.23.12 PM.jpeg",
  "WhatsApp Image 2026-09-09 at 10.23.14 PM.jpeg",
  "WhatsApp Image 2026-09-09 at 10.33.05 PM.jpeg",
  "WhatsApp Image 2026-09-09 at 10.33.08 PM (1).jpeg",
  "WhatsApp Image 2026-09-09 at 10.33.08 PM.jpeg",
  "WhatsApp Image 2026-09-09 at 10.33.09 PM.jpeg",
  "WhatsApp Image 2026-09-09 at 10.33.11 PM.jpeg",
  "WhatsApp Image 2026-09-09 at 10.33.12 PM.jpeg",
  "WhatsApp Image 2026-09-09 at 10.33.14 PM.jpeg",
  "WhatsApp Image 2026-09-09 at 10.33.15 PM.jpeg"
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

export const MFarms = () => {
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
      <div className="w-full min-h-screen bg-[#faf9f6] text-[#1a1a1a] font-sans selection:bg-[#fae8b1] selection:text-black">
        
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden bg-[#faf9f3] pt-20 pb-24 lg:pb-32">
          {/* Background Image blending into left side */}
          <div className="absolute top-0 right-0 w-[70%] h-full z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#faf9f3] via-[#faf9f3]/90 to-transparent z-10 w-1/2"></div>
            <img src="/farms/1.webp" alt="Field" className="w-full h-full object-cover object-right" />
          </div>

          <div className="container mx-auto px-6 md:px-12 relative z-20">
            
            {/* Top Content Row */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mt-2 lg:mt-6">
              {/* Left Text */}
              <div className="w-full lg:w-1/2 max-w-2xl relative z-30">
                <motion.h1 
                  initial="hidden" animate="show" variants={fadeUp}
                  className="text-5xl md:text-6xl lg:text-[72px] leading-[1.05] font-medium tracking-tight mb-8 text-[#1a1a1a]"
                >
                  M Farms one of the largest <br/>
                  <span className="text-[#6b6b6b]">producers</span> of agricultural <br/>
                  <span className="text-[#6b6b6b]">products in India</span>
                </motion.h1>
                
                <motion.div initial="hidden" animate="show" variants={fadeUp} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-12">
                  <p className="text-[#6b6b6b] text-sm max-w-[280px] leading-relaxed border-l-2 border-[#f4b840]/30 pl-4">
                    M Farms is a leader in the Indian market and one of the leading wheat producers in the region. Modern technologies and quality control guarantee the reliability of our products.
                  </p>
                  <button className="bg-[#111] text-white pl-6 pr-2 py-2 rounded-full text-sm font-medium hover:bg-black transition-colors flex items-center gap-6 group shadow-2xl">
                    See catalog
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black group-hover:bg-[#f4b840] group-hover:text-white transition-colors">
                      <ArrowUpRight size={18} />
                    </div>
                  </button>
                </motion.div>
              </div>
            </div>

            {/* Bottom Content Row (Stat Cards) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap items-center gap-4 mt-20 relative z-30"
            >
              <div className="bg-[#fae8b1] rounded-[1.5rem] p-6 w-[180px] h-[160px] flex flex-col justify-center shadow-lg border border-[#f4b840]/20">
                <h3 className="text-3xl font-bold mb-2 text-[#111]">100%</h3>
                <p className="text-[10px] text-[#8c7a4d] uppercase tracking-wider font-semibold leading-relaxed">quality of<br/>production</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-[1.5rem] p-6 w-[180px] h-[160px] flex flex-col justify-center shadow-lg border border-white">
                <h3 className="text-3xl font-bold mb-2 text-[#111]">50+</h3>
                <p className="text-[10px] text-[#6b6b6b] uppercase tracking-wider font-semibold leading-relaxed">modern agricultural<br/>technologies</p>
              </div>
              <div className="bg-white/70 backdrop-blur-md rounded-[1.5rem] p-6 w-[180px] h-[160px] flex flex-col justify-center shadow-lg border border-white">
                <h3 className="text-3xl font-bold mb-2 text-[#111]">10+</h3>
                <p className="text-[10px] text-[#6b6b6b] uppercase tracking-wider font-semibold leading-relaxed">transport products<br/>to countries</p>
              </div>
            </motion.div>

          </div>
        </section>

        {/* About Section */}
        <section className="px-6 md:px-12 py-16 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-32">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-[#f4b840] flex items-center justify-center text-white font-bold text-[10px]">M</div>
            <span className="font-medium text-sm tracking-tight">M Farms</span>
          </div>
          
          <div className="w-full lg:w-3/4 text-left relative">
            <h3 className="text-xl md:text-2xl font-medium text-[#4a4a4a] leading-snug">
              <strong>M Farms</strong> is a dedicated agricultural enterprise based in Karnataka, rooted in traditional farming practices and a commitment to sustainable, chemical-free cultivation. We grow a diverse range of fresh vegetables, fruits, and flowers using organic and natural farming methods that respect the land, preserve soil health, and promote biodiversity. By combining time-tested agricultural traditions with responsible modern practices, M Farms strives to deliver naturally grown, high-quality produce while supporting a healthier environment and a sustainable future for farming.
            </h3>
            
            {/* Decorative images floating around text */}
            <div className="absolute -left-20 -bottom-8 w-16 h-10 rounded-full overflow-hidden hidden lg:block">
              <img src="/farms/WhatsApp%20Image%202026-09-09%20at%2010.11.10%20PM.jpeg" className="w-full h-full object-cover" alt="Wheat" />
            </div>
            <div className="absolute -right-16 -top-4 w-12 h-12 rounded-xl overflow-hidden hidden lg:block">
              <img src="/farms/2.webp" className="w-full h-full object-cover" alt="Farm Detail" />
            </div>
          </div>
        </section>

        {/* Leadership Cards Section */}
        <section className="px-4 md:px-12 py-12">
          <div className="bg-[#242424] rounded-[2.5rem] p-8 md:p-16 flex flex-col lg:flex-row items-stretch gap-8">
            <div className="lg:w-1/3 text-white flex flex-col justify-between">
              <h2 className="text-3xl lg:text-4xl font-medium mb-12">Rooted in tradition.<br/>Growing naturally.</h2>
              <p className="text-white/50 text-xs leading-relaxed max-w-xs">
                M Farms is committed to natural and sustainable farming practices rooted in the traditional agricultural culture of Karnataka. We cultivate fresh vegetables, fruits, and flowers without the use of chemical-based growing methods, caring for the soil, crops, and environment at every stage.
              </p>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#fae8b1] rounded-[2rem] p-10 flex flex-col justify-between aspect-square md:aspect-auto shadow-inner">
                <h3 className="text-2xl font-medium">Our Mission</h3>
                <div>
                  <p className="text-[#8c7a4d] text-sm font-medium leading-relaxed mt-12 mb-6">
                    To grow naturally, preserve traditional farming wisdom, and provide fresh, wholesome produce while nurturing the land for generations to come.
                  </p>
                  <p className="text-[#8c7a4d]/70 text-[10px] font-bold uppercase tracking-widest border-t border-[#8c7a4d]/20 pt-4">
                    Vegetables · Fruits · Flowers
                  </p>
                </div>
              </div>
              <div className="rounded-[2rem] overflow-hidden aspect-square md:aspect-auto">
                <img src="/farms/2.webp" alt="Indian Farm" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="px-6 md:px-12 py-24">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#f4b840] flex items-center justify-center text-white font-bold text-[10px]">M</div>
              <span className="font-medium text-sm tracking-tight text-[#6b6b6b]">Our Produce</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-medium max-w-sm leading-tight text-center md:text-left">
              Fresh from the land,<br/>grown naturally
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Vegetables', desc: 'Seasonal vegetables · Leafy greens · Root vegetables', text: 'Fresh, naturally cultivated vegetables grown with traditional farming practices.', img: '/farms/WhatsApp%20Image%202026-09-09%20at%2010.11.12%20PM.jpeg' },
              { title: 'Fruits', desc: 'Seasonal fruits · Orchard fruits · Fresh produce', text: 'Naturally grown seasonal fruits, cultivated with care using sustainable farming practices.', img: '/farms/WhatsApp%20Image%202026-09-09%20at%2010.11.15%20PM.jpeg' },
              { title: 'Flowers', desc: 'Seasonal flowers · Garden flowers · Fresh blooms', text: 'Fresh flowers cultivated naturally for their beauty, fragrance, and quality.', img: '/farms/WhatsApp%20Image%202026-09-09%20at%2010.16.03%20PM.jpeg' }
            ].map((prod, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] p-6 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] group hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all h-[360px]">
                <div className="w-full h-1/2 rounded-xl overflow-hidden mb-6 bg-[#faf9f6] flex items-center justify-center">
                  <img src={prod.img} alt={prod.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex items-end justify-between mt-auto">
                  <div className="pr-4">
                    <h4 className="font-medium text-lg mb-1">{prod.title}</h4>
                    <p className="text-[#a0a0a0] text-[10px] uppercase tracking-wider mb-2">{prod.desc}</p>
                    <p className="text-[#6b6b6b] text-[11px] leading-relaxed">{prod.text}</p>
                  </div>
                  <button className="w-8 h-8 bg-[#f4b840] rounded-full flex items-center justify-center text-white shrink-0 group-hover:bg-[#1a1a1a] transition-colors shadow-sm mb-2">
                    <ArrowUpRight size={14} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <a href="https://wa.me/919743399992" target="_blank" rel="noopener noreferrer" className="bg-[#1a1a1a] text-white pl-6 pr-2 py-2 rounded-full text-sm font-medium hover:bg-black transition-colors flex items-center gap-4 group shadow-xl shadow-black/10">
              Explore our produce
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black group-hover:bg-[#f4b840] group-hover:text-white transition-colors">
                <ArrowUpRight size={16} />
              </div>
            </a>
          </div>
        </section>

        {/* Scale & Quality Field Overlay Section */}
        <section className="px-4 md:px-12 py-12">
          <div className="relative w-full h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col p-10 md:p-16 justify-between">
            <img src="/farms/WhatsApp%20Image%202026-09-09%20at%2010.16.09%20PM.jpeg" alt="Wheat Sunrise" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
            
            <div className="relative z-10 flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#f4b840] flex items-center justify-center text-white font-bold text-[10px]">M</div>
                <span className="font-medium text-sm tracking-tight text-white/80">M Farms</span>
              </div>
              <div className="text-right">
                <p className="text-white/60 text-xs font-medium uppercase tracking-widest max-w-[120px]">30 years of success</p>
              </div>
            </div>

            <div className="relative z-10">
              <h2 className="text-white text-5xl md:text-7xl font-medium tracking-tight mb-2">Impressive scale.</h2>
              <h2 className="text-white/80 text-5xl md:text-7xl font-medium tracking-tight mb-8">Convincing quality.</h2>
            </div>
            
            <h1 className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30 text-[10vw] md:text-[180px] font-bold tracking-tighter leading-none pointer-events-none uppercase">
              M FARMS
            </h1>

            {/* Floating Stat Cards */}
            <div className="absolute top-1/2 right-12 md:right-32 flex gap-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-[1.5rem] p-5 text-center shadow-2xl hover:-translate-y-2 transition-transform cursor-default">
                <h3 className="text-3xl font-bold mb-1">100%</h3>
                <p className="text-[10px] text-[#6b6b6b] uppercase tracking-wider">quality of<br/>production</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-[1.5rem] p-5 text-center shadow-2xl hover:-translate-y-2 transition-transform cursor-default">
                <h3 className="text-3xl font-bold mb-1">50+</h3>
                <p className="text-[10px] text-[#6b6b6b] uppercase tracking-wider">modern agricultural<br/>technologies</p>
              </div>
            </div>

            <div className="absolute bottom-12 left-12 bg-[#1a1a1a]/80 backdrop-blur-md rounded-3xl p-6 shadow-2xl text-white border border-white/10 hidden md:block w-48">
              <h3 className="text-2xl font-bold mb-1">Nº2</h3>
              <p className="text-white/60 text-[10px] leading-relaxed mb-4">in field crop production in India</p>
              <button className="w-8 h-8 bg-[#f4b840] rounded-full flex items-center justify-center text-white shrink-0 hover:bg-white hover:text-black transition-colors shadow-sm">
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </section>

        {/* Farm Gallery Section */}
        <section className="px-6 md:px-12 py-24 bg-[#faf9f3]">
          <div className="flex flex-col mb-16">
            <motion.span variants={fadeUp} className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-[#8c7a4d] mb-4">
              FARM GALLERY
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-medium tracking-tight text-[#1a1a1a]">
              A Glimpse into Our Farms
            </motion.h2>
          </div>

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
                  className="flex-none w-[280px] sm:w-[320px] h-[400px] group relative overflow-hidden rounded-[2rem] snap-center cursor-pointer shadow-lg"
                  onClick={() => setSelectedGalleryIndex(idx)}
                >
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 z-10 pointer-events-none" />
                  <img 
                    src={`/farms/${encodeURIComponent(img)}`}
                    alt={`Farm image ${idx + 1}`}
                    loading={idx < 4 ? "eager" : "lazy"}
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out origin-center" 
                  />
                  
                  <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg text-black">
                      <ArrowUpRight size={18} />
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

                <div className="relative w-full max-w-5xl h-[60vh] sm:h-[70vh] flex items-center justify-center mb-6">
                  <motion.img
                    key={selectedGalleryIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    src={`/farms/${encodeURIComponent(galleryImages[selectedGalleryIndex])}`}
                    alt="Gallery Selected"
                    className="max-w-full max-h-full object-contain rounded-md"
                  />
                  
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

                <div className="w-full max-w-5xl overflow-x-auto flex gap-2 pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  {galleryImages.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedGalleryIndex(idx)}
                      className={`flex-none w-20 h-20 sm:w-24 sm:h-24 cursor-pointer rounded-md overflow-hidden transition-all duration-300 ${selectedGalleryIndex === idx ? 'ring-2 ring-[#f4b840] opacity-100 scale-105' : 'opacity-40 hover:opacity-100'}`}
                    >
                      <img
                        src={`/farms/${encodeURIComponent(img)}`}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Bottom Info Section */}
        <section className="px-6 md:px-12 py-24 pb-32">
          <div className="flex flex-col xl:flex-row gap-16 justify-between items-start">
            
            <div className="xl:w-1/3 max-w-sm">
              <div className="flex gap-2 mb-12">
                {['Info', 'Contact', 'Quality'].map((tag, i) => (
                  <span key={i} className="px-4 py-1.5 rounded-full border border-[#e0e0e0] text-[#6b6b6b] text-[10px] uppercase tracking-wider bg-white shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-3xl font-medium mb-6 leading-tight">M Farms is a reliable supplier of agricultural products</h2>
              <p className="text-[#888] text-xs leading-relaxed mb-10">
                We cooperate with processors, distributors and retail chains, ensuring stable supplies and high-quality standards.
              </p>
              <a href="https://wa.me/919743399992" target="_blank" rel="noopener noreferrer" className="bg-[#1a1a1a] text-white pl-6 pr-2 py-2 rounded-full text-sm font-medium hover:bg-black transition-colors flex items-center gap-4 group shadow-xl shadow-black/10 w-max">
                Contact us
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black group-hover:bg-[#f4b840] group-hover:text-white transition-colors">
                  <ArrowUpRight size={16} />
                </div>
              </a>
            </div>

            <div className="xl:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div className="bg-[#fae8b1] rounded-[2rem] p-8 shadow-inner flex flex-col justify-center h-48 hover:-translate-y-1 transition-transform">
                <h4 className="font-medium text-lg mb-2">Direct deliveries without intermediaries</h4>
                <p className="text-[#8c7a4d] text-xs">We deliver products directly from the manufacturer, ensuring freshness and favorable terms.</p>
              </div>
              
              <div className="bg-white border border-[#e0e0e0] rounded-[2rem] p-8 shadow-sm flex flex-col justify-center h-48 hover:-translate-y-1 transition-transform">
                <h4 className="font-medium text-lg mb-2">Quality confirmed by certificates</h4>
                <p className="text-[#888] text-xs">All products are officially certified and fully traceable — from the field to the shelf.</p>
              </div>

              <div className="bg-white border border-[#e0e0e0] rounded-[2rem] p-8 shadow-sm flex flex-col justify-center h-48 hover:-translate-y-1 transition-transform">
                <h4 className="font-medium text-lg mb-2">Sustainable growth and innovations</h4>
                <p className="text-[#888] text-xs">We implement modern technologies and sustainable processes to develop agriculture and deliver long-term value.</p>
              </div>

              <div className="rounded-[2rem] overflow-hidden shadow-md h-48">
                <img src="/farms/WhatsApp%20Image%202026-09-09%20at%2010.16.12%20PM.jpeg" alt="Indian Farm Landscape" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>

          </div>
        </section>

      </div>
    </PageTransition>
  );
};
