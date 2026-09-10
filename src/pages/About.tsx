import { motion, useScroll, useTransform } from 'framer-motion';
import { PageTransition } from '../components/ui/PageTransition';
import { useRef } from 'react';
import { Target, TrendingUp, ShieldCheck, Users } from 'lucide-react';

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

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <PageTransition>
      <div ref={containerRef} className="bg-[#050505] min-h-screen text-[#f5f5f5] selection:bg-[#d49942] selection:text-black font-sans">
        
        {/* Dynamic Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Abstract Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#d49942]/10 rounded-full blur-[120px] mix-blend-screen" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#1e3a8a]/20 rounded-full blur-[100px] mix-blend-screen" />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
          </div>

          <motion.div 
            style={{ y: yHero, opacity: opacityHero }}
            className="container mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center pt-24"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-[10px] tracking-[0.3em] text-[#d49942] uppercase font-bold mb-6 block border border-[#d49942]/30 px-4 py-1.5 rounded-full"
            >
              Discover Our Legacy
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] text-white mb-8 tracking-tight"
            >
              Building The Future, <br />
              <span className="italic text-white/50">Honoring The Past.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="max-w-2xl text-lg md:text-xl text-white/60 font-light leading-relaxed"
            >
              M Groups is a dynamic conglomerate that redefines excellence across multiple industries, from sustainable agriculture to premium real estate and unmatched hospitality.
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100px" }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-[#d49942]/0 via-[#d49942] to-[#d49942]/0"
          />
        </section>

        {/* Philosophy / Ethos Section */}
        <section className="py-24 md:py-32 relative z-10 bg-[#0a0a0a]">
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
                <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-[2rem] overflow-hidden border border-white/10 p-2">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#d49942]/20 to-transparent rounded-[2rem] opacity-50" />
                  <img 
                    src="/assets/images/founder-portrait.png" 
                    alt="Founder" 
                    className="w-full h-full object-cover rounded-[1.5rem] grayscale hover:grayscale-0 transition-all duration-700"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.classList.add('bg-[#111]');
                      e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-white/20 font-serif text-2xl">Portrait</div>';
                    }}
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
