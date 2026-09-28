import { motion } from 'framer-motion';
import { PageTransition } from '../components/ui/PageTransition';
import { useRef, useState, useEffect } from 'react';
import { Target, TrendingUp, ShieldCheck, Users, ArrowDown, ChevronRight, ChevronLeft } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } as any }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 } as any
  }
};

const heroCards = [
  {
    id: 'real-estate',
    title: 'Smart Homes, Smarter Future: Integrating Technology in Eco-Friendly Designs',
    img: '/landing/M Real Estate.webp'
  },
  {
    id: 'interiors',
    title: 'Minimalism in Interior Design: Increasing Tranquility for Modern Living',
    img: '/landing/M Interiors.webp'
  },
  {
    id: 'farms',
    title: 'Sustainable Agriculture: Harmonizing Nature & Future Yields',
    img: '/landing/M Farms.webp'
  },
  {
    id: 'builders',
    title: 'Architectural Excellence: Crafting Sustainable Landmarks of Tomorrow',
    img: '/landing/MS Builders & Developers.webp'
  }
];

export const About = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCardIndex = (index: number) => {
    const nextIndex = (index + heroCards.length) % heroCards.length;
    setActiveIndex(nextIndex);
    if (sliderRef.current && sliderRef.current.children[nextIndex]) {
      const targetCard = sliderRef.current.children[nextIndex] as HTMLElement;
      sliderRef.current.scrollTo({
        left: targetCard.offsetLeft,
        behavior: 'smooth'
      });
    }
  };

  // Auto-play slide transition every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      scrollToCardIndex(activeIndex + 1);
    }, 4000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <PageTransition>
      <div className="bg-[#050505] min-h-screen text-[#f5f5f5] selection:bg-[#d49942] selection:text-black font-sans">
        
        {/* SVG Clip-Path Definition for Responsive Notched Card Shape */}
        <svg width="0" height="0" className="absolute pointer-events-none w-0 h-0 overflow-hidden" aria-hidden="true">
          <defs>
            <clipPath id="cardNotchClip" clipPathUnits="objectBoundingBox">
              <path d="
                M 0.05 0 
                L 0.95 0 
                A 0.05 0.035 0 0 1 1 0.035 
                L 1 0.965 
                A 0.05 0.035 0 0 1 0.95 1 
                L 0.64 1 
                A 0.05 0.035 0 0 1 0.58 0.965 
                L 0.58 0.74 
                A 0.04 0.03 0 0 0 0.53 0.705 
                L 0.05 0.705 
                A 0.05 0.035 0 0 1 0 0.67 
                L 0 0.035 
                A 0.05 0.035 0 0 1 0.05 0 
                Z
              " />
            </clipPath>
          </defs>
        </svg>

        {/* ========================================================================= */}
        {/* HERO SECTION - RESPONSIVE & PIXEL-PERFECT ACROSS ALL SCREEN SIZES        */}
        {/* ========================================================================= */}
        <section className="bg-[#FFFFFF] text-neutral-900 min-h-[92vh] pt-24 md:pt-28 lg:pt-32 pb-10 px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col justify-between relative border-b border-neutral-200 overflow-hidden">
          <div className="container mx-auto max-w-[1440px] flex-grow flex flex-col justify-between">
            
            {/* Top Bar Navigation / Header Indicator */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-between mb-6 md:mb-8 lg:mb-10"
            >
              {/* Left Brand Badge */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-mono font-bold text-xs shadow-sm">
                  M
                </div>
                <span className="text-xs font-bold tracking-[0.2em] text-neutral-900 uppercase">
                  M GROUPS
                </span>
              </div>

              {/* Slider Controls & Active Page Indicator */}
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold font-mono tracking-widest text-neutral-400">
                  0{activeIndex + 1} / 0{heroCards.length}
                </span>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => scrollToCardIndex(activeIndex - 1)}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-black hover:text-white hover:border-black transition-all cursor-pointer"
                    aria-label="Previous card"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button 
                    onClick={() => scrollToCardIndex(activeIndex + 1)}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-black hover:text-white hover:border-black transition-all cursor-pointer"
                    aria-label="Next card"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Main Section Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch flex-grow my-auto py-2">
              
              {/* Left Column */}
              <div className="lg:col-span-4 flex flex-col justify-between pr-0 lg:pr-4">
                <div>
                  <motion.h1 
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-sans font-bold tracking-tighter text-neutral-950 uppercase leading-none mb-6"
                  >
                    ABOUT
                  </motion.h1>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mt-8 lg:mt-auto pt-4"
                >
                  <p className="text-neutral-600 text-xs sm:text-sm md:text-base font-normal leading-relaxed max-w-xs mb-6 sm:mb-8">
                    Explore the secrets of design innovation, modern living, and architectural insights through our engaging portfolio.
                  </p>

                  <a 
                    href="#ethos"
                    className="inline-flex items-center gap-3 group cursor-pointer"
                  >
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-900 group-hover:text-black transition-colors">
                      EXPLORE
                    </span>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-neutral-800 transition-all shadow-md">
                      <ArrowDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
                    </div>
                  </a>
                </motion.div>
              </div>

              {/* Right Column: Hero Showcase Cards Carousel */}
              <div className="lg:col-span-8 relative flex items-center overflow-hidden">
                <div 
                  ref={sliderRef}
                  className="w-full flex gap-6 md:gap-8 overflow-x-auto no-scrollbar py-2 px-1 scroll-smooth snap-x snap-mandatory items-center"
                >
                  {heroCards.map((card, idx) => (
                    <motion.div 
                      key={card.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
                      className="snap-start min-w-[290px] sm:min-w-[420px] md:min-w-[500px] lg:min-w-[580px] xl:min-w-[640px] h-[440px] sm:h-[500px] md:h-[540px] lg:h-[560px] xl:h-[600px] max-h-[75vh] relative flex-shrink-0 group cursor-pointer"
                      onClick={() => scrollToCardIndex(idx)}
                    >
                      {/* Clipped Image Container */}
                      <div 
                        className="w-full h-full overflow-hidden transition-transform duration-1000 ease-out group-hover:scale-[1.01]"
                        style={{ clipPath: 'url(#cardNotchClip)', WebkitClipPath: 'url(#cardNotchClip)' }}
                      >
                        <img 
                          src={card.img} 
                          alt={card.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Text positioned directly inside the white notch cutout area */}
                      <div className="absolute bottom-0 left-0 w-[54%] sm:w-[52%] h-[29.5%] p-3 sm:p-5 flex flex-col justify-end text-neutral-900 z-10 pointer-events-none">
                        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-neutral-900 leading-tight tracking-tight font-sans line-clamp-3">
                          {card.title}
                        </h3>
                      </div>
                    </motion.div>
                  ))}

                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Philosophy / Ethos Section */}
        <section id="ethos" className="py-24 md:py-32 relative z-10 bg-[#0a0a0a]">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div>
                <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
                  A Commitment to <br />
                  <span className="text-[#d49942] italic">Excellence.</span>
                </motion.h2>
                <motion.p variants={fadeUp} className="text-white/60 text-lg leading-relaxed mb-6 font-light">
                  What started as a singular vision has evolved into a multifaceted group of companies. At M Groups, we don't just participate in industries; we aim to elevate them.
                </motion.p>
                <motion.p variants={fadeUp} className="text-white/60 text-lg leading-relaxed mb-8 font-light">
                  Our portfolio is diverse, but our approach is singular: uncompromising quality, innovative thinking, and a dedication to creating lasting value for our clients, partners, and communities.
                </motion.p>
                
                <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-8 mt-12">
                  {[
                    { icon: <Target className="text-[#d49942] mb-3" size={28} />, title: "Visionary Approach", desc: "Looking beyond the horizon." },
                    { icon: <ShieldCheck className="text-[#d49942] mb-3" size={28} />, title: "Unmatched Quality", desc: "Excellence in every detail." },
                    { icon: <Users className="text-[#d49942] mb-3" size={28} />, title: "Community First", desc: "Building for the people." },
                    { icon: <TrendingUp className="text-[#d49942] mb-3" size={28} />, title: "Sustainable Growth", desc: "Long-term value creation." },
                  ].map((item, idx) => (
                    <motion.div variants={fadeUp} key={idx}>
                      {item.icon}
                      <h4 className="text-white font-medium mb-1 text-sm">{item.title}</h4>
                      <p className="text-white/40 text-xs">{item.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              
              <motion.div variants={fadeUp} className="relative h-[600px] w-full rounded-[2rem] overflow-hidden group">
                <div className="absolute inset-0 bg-[#d49942]/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700" />
                <img 
                  src="/landing/M Real Estate.webp" 
                  alt="M Groups Ethos" 
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Diverse Portfolio Section */}
        <section className="py-24 md:py-32 bg-[#050505]">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Our Core Divisions</h2>
              <p className="text-white/50 text-lg font-light leading-relaxed">
                A tapestry of businesses, each operating with independent agility while drawing on the collective strength and resources of M Groups.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Real Estate & Construction", img: "/landing/MS Builders & Developers.webp", desc: "Developing premium residential and commercial spaces that redefine modern living." },
                { title: "Agriculture & Food", img: "/landing/M Farms.webp", desc: "Embracing sustainable farming practices to produce high-quality, organic yields." },
                { title: "Hospitality & Lifestyle", img: "/landing/Mystery Roster Café.webp", desc: "Creating memorable culinary and atmospheric experiences for our patrons." },
              ].map((sector, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.8 }}
                  className="group relative h-[450px] rounded-[1.5rem] overflow-hidden cursor-pointer"
                >
                  <img src={sector.img} alt={sector.title} className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-serif text-white mb-3">{sector.title}</h3>
                    <p className="text-white/70 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {sector.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-24 md:py-32 bg-[#0a0a0a] border-t border-white/5">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center"
            >
              <motion.div variants={fadeUp} className="w-full md:w-5/12">
                <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-[2rem] overflow-hidden border border-white/10 p-2 shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#d49942]/20 to-transparent rounded-[2rem] opacity-40 pointer-events-none z-10" />
                  <img 
                    src="/take1.webp" 
                    alt="Founder & Director" 
                    className="w-full h-full object-cover rounded-[1.5rem] transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>
              
              <motion.div variants={fadeUp} className="w-full md:w-7/12 relative">
                <div className="text-[120px] font-serif text-[#d49942]/10 absolute -top-16 -left-8 pointer-events-none select-none leading-none">
                  "
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-8 leading-snug relative z-10">
                  We believe that true success is not measured by the number of businesses we build, but by the <span className="text-[#d49942] italic">lasting impact</span> those businesses have on our communities.
                </h2>
                <div className="w-16 h-[1px] bg-[#d49942] mb-8" />
                <h4 className="text-xl text-white tracking-wide mb-1">Founder & Director</h4>
                <p className="text-white/40 uppercase tracking-[0.2em] text-xs font-bold">M Groups</p>
                
                <p className="text-white/60 leading-relaxed mt-8 font-light max-w-xl">
                  Under visionary leadership, M Groups has expanded from a solitary ambition into a powerhouse of diverse industries. Driven by a passion for quality and an unwavering commitment to ethical practices, the group continues to set new benchmarks in every sector it enters.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};
