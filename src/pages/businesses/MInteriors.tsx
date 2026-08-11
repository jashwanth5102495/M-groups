import { motion } from 'framer-motion';
import { PageTransition } from '../../components/ui/PageTransition';
import { MapSection } from '../../components/ui/MapSection';
import { ArrowRight, Play, LayoutGrid, Paintbrush, Sofa } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export const MInteriors = () => {
  return (
    <PageTransition>
      <div className="w-full min-h-screen bg-[#faf9f6] text-[#1a1a1a] font-sans selection:bg-black selection:text-white">
        
        {/* Hero Section */}
        <section className="relative w-full h-screen min-h-[700px] flex items-center pt-20 overflow-hidden">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/interior/1.webp" 
              alt="M Interiors Background" 
              className="w-full h-full object-cover object-right-top" 
            />
            {/* Gradients for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#eae8e3]/95 via-[#eae8e3]/80 to-transparent w-full lg:w-[65%]" />
            <div className="absolute inset-0 bg-white/10" />
          </div>

          <div className="container mx-auto px-6 md:px-12 relative z-10">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 lg:pr-12">
              <motion.div initial="hidden" animate="show" variants={fadeUp}>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#666] mb-6 drop-shadow-sm">Interior Design Studio</p>
                <h1 className="text-5xl md:text-7xl lg:text-[84px] leading-[1.05] font-serif tracking-tight mb-8 text-[#222]">
                  We Create <br/>
                  Beautiful Interior <br/>
                  Design
                </h1>
                <p className="text-[#444] text-sm md:text-base leading-relaxed max-w-md mb-10 font-medium">
                  We are an award winning interior design agency that strongly believes in the power of creative ideas & great design.
                </p>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                  <a href="https://wa.me/919743399992" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-[#111] text-white px-8 py-4 text-xs tracking-widest uppercase font-medium hover:bg-black transition-colors shadow-xl">
                    View Our Projects
                    <ArrowRight size={16} />
                  </a>
                  
                  {/* Play Button */}
                  <div className="flex items-center gap-4 cursor-pointer hover:opacity-70 transition-opacity">
                    <div className="w-12 h-12 rounded-full border border-black/30 flex items-center justify-center bg-white/40 backdrop-blur-sm shadow-lg">
                      <Play size={14} className="ml-1 text-[#111]" />
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#111]">Watch Intro</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Marquee Section */}
        <section className="py-16 bg-[#fdfce6] overflow-hidden border-b border-[#f0eed9]">
          <div className="container mx-auto px-6 mb-12 text-center">
            <p className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-[#888]">Engineered with industry-leading brands</p>
          </div>
          <div className="relative w-full flex overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap items-center shrink-0 gap-16 md:gap-24 px-8"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
              style={{ width: "max-content" }}
            >
              {[...Array(8), ...Array(8)].map((_, idx) => (
                <img 
                  key={idx} 
                  src={`/interior/mat/${(idx % 8) + 1}.webp`} 
                  alt="Brand Partner" 
                  className="h-12 md:h-16 w-auto min-w-[120px] max-w-[180px] object-contain shrink-0 mix-blend-multiply" 
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats & Services Section */}
        <section className="bg-[#faf9f6] py-24 border-b border-[#e5e5e5]">
          <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-start justify-between gap-16">
            
            {/* Left Stats */}
            <div className="w-full lg:w-1/3 flex flex-col sm:flex-row items-start gap-8">
              <div>
                <h2 className="text-7xl lg:text-[100px] font-serif leading-none tracking-tighter text-[#222]">15</h2>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#666] mt-4">Years Of<br/>Experience</p>
              </div>
              <div className="pt-4">
                <p className="text-[#555] text-sm leading-relaxed mb-6">
                  We craft exceptional interior experiences that combine functionality and aesthetics.
                </p>
                <div className="font-serif italic text-3xl text-[#a09c96]">M Interiors</div>
              </div>
            </div>

            {/* Right Services */}
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-12 lg:pl-16">
              {[
                { icon: <LayoutGrid size={24} strokeWidth={1} />, title: "Space Planning", desc: "We plan and design functional spaces that enhance the way you live and work." },
                { icon: <Paintbrush size={24} strokeWidth={1} />, title: "Interior Design", desc: "From concept to completion, we deliver beautiful interiors tailored to your taste." },
                { icon: <Sofa size={24} strokeWidth={1} />, title: "Furniture Design", desc: "We design custom furniture pieces that bring elegance and comfort." }
              ].map((service, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="mb-6 text-[#222]">{service.icon}</div>
                  <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase mb-4">{service.title}</h4>
                  <p className="text-[#777] text-xs leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Projects Gallery */}
        <section className="bg-white py-32">
          <div className="container mx-auto px-6 md:px-12">
            
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#666] mb-4">Our Projects</p>
                <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#222]">
                  Bringing Spaces<br/>To Life
                </h2>
              </div>
              <a href="https://wa.me/919743399992" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">
                View All Projects <ArrowRight size={14} />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Modern Minimal House", type: "Residential", img: "/interior/Modern Minimal House.webp" },
                { name: "Luxury Penthouse", type: "Residential", img: "/interior/Luxury Penthouse.webp" },
                { name: "Corporate Office", type: "Commercial", img: "/interior/Corporate Office.webp" },
                { name: "Bistro Restaurant", type: "Hospitality", img: "/interior/Bistro Restaurant.webp" }
              ].map((proj, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="w-full h-[280px] overflow-hidden mb-6 bg-[#f5f5f5]">
                    <img src={proj.img} alt={proj.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-medium text-[#222] mb-1">{proj.name}</h4>
                      <p className="text-[10px] text-[#888]">{proj.type}</p>
                    </div>
                    <ArrowRight size={14} className="text-[#222] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* About Section */}
        <section className="bg-[#faf9f6] py-32 overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-16">
            
            {/* Left Image + Stats */}
            <div className="w-full lg:w-5/12 relative">
              <div className="w-full h-[500px] lg:h-[650px] overflow-hidden">
                <img src="/interior/2.webp" alt="M Interiors About" className="w-full h-full object-cover" />
              </div>
              
              <div className="absolute -bottom-8 -right-8 md:bottom-12 md:-right-12 bg-[#faf9f6] p-10 shadow-2xl border border-white max-w-[280px]">
                <div className="mb-8">
                  <h3 className="text-4xl font-serif text-[#222] mb-2">120+</h3>
                  <p className="text-[10px] text-[#777] uppercase tracking-wider">Projects Completed</p>
                </div>
                <div className="w-full h-[1px] bg-[#e5e5e5] mb-8"></div>
                <div>
                  <h3 className="text-4xl font-serif text-[#222] mb-2">98%</h3>
                  <p className="text-[10px] text-[#777] uppercase tracking-wider">Client Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Center Content */}
            <div className="w-full lg:w-4/12 mt-16 lg:mt-0 z-10 px-4">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#666] mb-6">About Us</p>
              <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#222] leading-tight mb-8">
                Designing Spaces That Inspire
              </h2>
              <p className="text-[#555] text-sm leading-relaxed mb-12">
                Our mission is to create timeless interiors that reflect your personality, enhance comfort, and elevate everyday living.
              </p>
              <a href="https://wa.me/919743399992" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-[#666461] text-white px-8 py-4 text-xs tracking-widest uppercase font-medium hover:bg-[#222] transition-colors">
                More About Us
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Right Narrow Image */}
            <div className="hidden lg:block w-3/12 h-[650px] overflow-hidden mt-24">
              <img src="/interior/inter.webp" alt="Interior Detail" className="w-full h-full object-cover" />
            </div>

          </div>
        </section>

        <MapSection />
      </div>
    </PageTransition>
  );
};
