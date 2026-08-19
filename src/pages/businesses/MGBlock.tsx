import { motion } from 'framer-motion';
import { PageTransition } from '../../components/ui/PageTransition';
import { MapSection } from '../../components/ui/MapSection';
import { ArrowRight, Box, CheckCircle2, Truck, Settings } from 'lucide-react';

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

export const MGBlock = () => {
  return (
    <PageTransition>
      <div className="w-full min-h-screen bg-[#faf9f6] text-[#111] font-sans selection:bg-[#4a5d23] selection:text-white">
        
        {/* Hero Section */}
        <section className="relative w-full h-[95vh] min-h-[700px] flex flex-col justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <img 
              src="/m-block/hero.jpg" 
              alt="M Block Manufacturing" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-[#111]/80 to-transparent w-full md:w-[70%] lg:w-[60%]" />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <motion.div 
              className="w-full lg:w-1/2 flex flex-col"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={fadeUp} className="mb-6">
                <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-[#a9b09f]">
                  MANUFACTURING
                </span>
              </motion.div>
              
              <motion.h1 
                variants={fadeUp}
                className="text-5xl md:text-6xl lg:text-[76px] leading-[1.05] font-serif tracking-tight text-white mb-6"
              >
                M Block
              </motion.h1>
              
              <motion.p 
                variants={fadeUp}
                className="text-[#e0e0e0] text-lg md:text-xl leading-relaxed max-w-md mb-10 font-medium"
              >
                Reliable concrete blocks, built for every construction requirement.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-16">
                <a href="#about" className="inline-flex items-center justify-center gap-4 bg-[#4a5d23] text-white px-8 py-4 text-xs tracking-widest uppercase font-medium hover:bg-[#3a4d13] transition-colors shadow-lg">
                  Discover More
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-white relative">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="w-full lg:w-1/2"
              >
                <motion.span variants={fadeUp} className="text-xs font-bold tracking-[0.2em] uppercase text-[#4a5d23] mb-6 block">About the Business</motion.span>
                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif text-[#111] mb-8 leading-[1.2]">
                  Built for construction.<br/>Backed by M Groups.
                </motion.h2>
                <motion.p variants={fadeUp} className="text-[#555] text-base leading-relaxed mb-6">
                  M Block is the manufacturing arm of <strong className="text-[#111]">M Groups</strong>, specializing in the production of high-quality concrete blocks for residential, commercial, industrial, and infrastructure requirements.
                </motion.p>
                <motion.p variants={fadeUp} className="text-[#555] text-base leading-relaxed mb-8">
                  From standard hollow and solid blocks to customized solutions, M Block focuses on delivering products that meet project-specific requirements with <strong className="text-[#111]">consistent quality, dependable production, and timely delivery</strong>.
                </motion.p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2"
              >
                <div className="aspect-square md:aspect-[4/3] rounded-[2px] overflow-hidden relative">
                  <img src="/m-block/closeup.jpg" alt="Concrete Block Close Up" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-24 bg-[#faf9f6]">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif text-[#111] mb-6">What We Do</motion.h2>
              <motion.div variants={fadeUp} className="w-16 h-[2px] bg-[#4a5d23] mx-auto"></motion.div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Box size={32} strokeWidth={1.5} />, title: "Concrete Block Manufacturing", desc: "Manufacturing a range of concrete blocks designed to meet diverse construction requirements." },
                { icon: <Settings size={32} strokeWidth={1.5} />, title: "Customized Solutions", desc: "Producing blocks according to specific project requirements, dimensions, and applications." },
                { icon: <CheckCircle2 size={32} strokeWidth={1.5} />, title: "Quality & Consistency", desc: "Maintaining a strong focus on material quality, production consistency, and finished-product standards." },
                { icon: <Truck size={32} strokeWidth={1.5} />, title: "Reliable Delivery", desc: "Efficient production and order planning to support construction schedules and deliver requirements on time." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="bg-white p-8 border border-[#eaeaea] hover:border-[#4a5d23]/30 transition-colors group"
                >
                  <div className="text-[#4a5d23] mb-6 group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
                  <h3 className="text-lg font-serif text-[#111] mb-4">{item.title}</h3>
                  <p className="text-[#666] text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach & Highlights Split */}
        <section className="py-24 bg-white border-t border-[#eaeaea]">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Approach */}
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h3 variants={fadeUp} className="text-3xl font-serif text-[#111] mb-6">Our Approach</motion.h3>
                <motion.p variants={fadeUp} className="text-[#555] leading-relaxed mb-6">
                  At M Block, we understand that every construction project has different requirements. Our approach is built around three essentials:
                </motion.p>
                <motion.div variants={fadeUp} className="bg-[#faf9f6] p-8 border-l-4 border-[#4a5d23] mb-8">
                  <p className="text-xl font-serif text-[#111] italic">Quality. Precision. Reliability.</p>
                </motion.div>
                <motion.p variants={fadeUp} className="text-[#555] leading-relaxed mb-10">
                  From production to delivery, we focus on providing dependable construction materials that help projects move forward without unnecessary delays.
                </motion.p>
                <motion.div variants={fadeUp}>
                  <img src="/m-block/construction.jpg" alt="Construction Site" className="w-full h-64 object-cover rounded-[2px]" />
                </motion.div>
              </motion.div>

              {/* Highlights & Part of M Groups */}
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="flex flex-col justify-center"
              >
                <motion.h3 variants={fadeUp} className="text-3xl font-serif text-[#111] mb-8">Key Highlights</motion.h3>
                <div className="flex flex-col gap-6 mb-12">
                  {[
                    { title: "Hollow & Solid Blocks", desc: "A range of concrete block solutions for different construction applications." },
                    { title: "Custom Manufacturing", desc: "Solutions tailored to specific project requirements." },
                    { title: "Consistent Quality", desc: "A continued focus on reliable and consistent production." },
                    { title: "On-Time Supply", desc: "Production and delivery planned around customer requirements." }
                  ].map((hl, idx) => (
                    <motion.div variants={fadeUp} key={idx} className="flex gap-4">
                      <div className="mt-1 text-[#4a5d23]"><CheckCircle2 size={18} /></div>
                      <div>
                        <h4 className="text-[#111] font-bold mb-1">{hl.title}</h4>
                        <p className="text-[#666] text-sm">{hl.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div variants={fadeUp} className="bg-[#111] text-white p-10 mt-auto">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#a9b09f] mb-4 block">Part of M Groups</span>
                  <p className="text-[#ccc] text-sm leading-relaxed mb-6">
                    M Block is a proud business of M Groups, contributing to the group's growing presence in the manufacturing and construction sector. With the strength of M Groups behind it, M Block is focused on building long-term relationships with builders, contractors, developers, and construction partners.
                  </p>
                  <p className="text-lg font-serif italic text-[#a9b09f]">
                    Building the foundation for better construction.
                  </p>
                </motion.div>

              </motion.div>
            </div>
          </div>
        </section>

        <MapSection />

      </div>
    </PageTransition>
  );
};
