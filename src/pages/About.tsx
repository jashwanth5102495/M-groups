import { motion } from 'framer-motion';
import { PageTransition } from '../components/ui/PageTransition';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Building2, 
  Home as HomeIcon, 
  Sprout, 
  Coffee, 
  Utensils, 
  Layers,
  Award,
  ShieldCheck,
  Lightbulb,
  HeartHandshake,
  Compass,
  Users,
  TrendingUp,
  Globe
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const businessesData = [
  {
    num: "01",
    name: "MS Builders & Developers",
    tagline: "Building spaces for tomorrow.",
    description: "MS Builders & Developers focuses on construction and development, creating thoughtfully planned spaces with an emphasis on quality, functionality, and lasting value.",
    img: "/landing/MS Builders & Developers.webp",
    link: "/businesses",
    icon: <Building2 className="w-6 h-6 text-[#E65100]" />
  },
  {
    num: "02",
    name: "M Real Estate",
    tagline: "Connecting people with the right spaces.",
    description: "M Real Estate operates across the property sector, helping customers discover opportunities in residential, commercial, and real-estate investments.",
    img: "/landing/M Real Estate.webp",
    link: "/businesses/m-real-estate",
    icon: <HomeIcon className="w-6 h-6 text-[#E65100]" />
  },
  {
    num: "03",
    name: "M Farms",
    tagline: "Growing with nature.",
    description: "M Farms represents our connection to agriculture and sustainable growth. With a focus on responsible farming and productive land use, the venture aims to create value from the ground up.",
    img: "/landing/M Farms.webp",
    link: "/businesses/m-farms",
    icon: <Sprout className="w-6 h-6 text-[#E65100]" />
  },
  {
    num: "04",
    name: "Mystery Roster Cafe",
    tagline: "Where conversations meet great food.",
    description: "Mystery Roster Cafe brings together food, coffee, ambience, and experiences in a space designed for people to connect, relax, and enjoy.",
    img: "/landing/Mystery Roster Café.webp",
    link: "/businesses/Mystery-roster-cafe",
    icon: <Coffee className="w-6 h-6 text-[#E65100]" />
  },
  {
    num: "05",
    name: "Mystery Family Restaurant",
    tagline: "Good food. Great moments.",
    description: "Mystery Family Restaurant is built around the simple idea that food brings people together. We aim to create welcoming dining experiences for families, friends, and communities.",
    img: "/landing/Mystery Family Restaurant.webp",
    link: "/businesses/Mystery-family-restaurant",
    icon: <Utensils className="w-6 h-6 text-[#E65100]" />
  },
  {
    num: "06",
    name: "MG Blocks & Interiors",
    tagline: "From structure to style.",
    description: "MG Blocks & Interiors combines construction materials and interior solutions to help transform ideas into functional and aesthetically refined spaces.",
    img: "/landing/MG Block.webp",
    link: "/businesses/mg-block",
    icon: <Layers className="w-6 h-6 text-[#E65100]" />
  }
];

const valuesData = [
  {
    title: "QUALITY",
    description: "We believe quality is the foundation of every successful business.",
    icon: <Award className="w-8 h-8 text-[#E65100] mb-4" />
  },
  {
    title: "TRUST",
    description: "We build lasting relationships through transparency, reliability, and integrity.",
    icon: <ShieldCheck className="w-8 h-8 text-[#E65100] mb-4" />
  },
  {
    title: "INNOVATION",
    description: "We continuously look for better ways to create, operate, and serve.",
    icon: <Lightbulb className="w-8 h-8 text-[#E65100] mb-4" />
  },
  {
    title: "RESPONSIBILITY",
    description: "We believe businesses have a responsibility toward their customers, communities, and environment.",
    icon: <HeartHandshake className="w-8 h-8 text-[#E65100] mb-4" />
  }
];

const whyUsData = [
  {
    title: "Diverse Expertise",
    description: "Experience across multiple sectors.",
    icon: <Compass className="w-6 h-6 text-[#E65100]" />
  },
  {
    title: "Customer Focused",
    description: "Businesses built around real customer needs.",
    icon: <Users className="w-6 h-6 text-[#E65100]" />
  },
  {
    title: "Long-Term Vision",
    description: "Focused on sustainable and meaningful growth.",
    icon: <TrendingUp className="w-6 h-6 text-[#E65100]" />
  },
  {
    title: "Local Impact",
    description: "Creating businesses, opportunities, and experiences within the communities we serve.",
    icon: <Globe className="w-6 h-6 text-[#E65100]" />
  }
];

export const About = () => {
  return (
    <PageTransition>
      <div className="bg-[#121212] min-h-screen text-[#E5E3DC] font-sans overflow-x-hidden selection:bg-[#E65100] selection:text-white">
        
        {/* =========================================================================
            1. HERO SECTION (Redesigned to exact layout of reference image)
           ========================================================================= */}
        <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-[#141414] border-b border-white/10">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              
              {/* Left Column: Graphic Typography "ABOUT US" matching screenshot */}
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="lg:col-span-5 flex items-center justify-center lg:justify-start"
              >
                <div className="flex items-center font-['Bebas_Neue'] leading-none tracking-tight select-none py-4">
                  <span className="text-[#E5E3DC] text-[110px] sm:text-[150px] md:text-[180px] xl:text-[210px] font-normal uppercase">
                    ABO
                  </span>
                  <span className="text-[#E65100] text-[130px] sm:text-[180px] md:text-[215px] xl:text-[250px] font-black uppercase -mx-1 sm:-mx-2 z-10 scale-y-110">
                    US
                  </span>
                  <span className="text-[#E5E3DC] text-[110px] sm:text-[150px] md:text-[180px] xl:text-[210px] font-normal uppercase">
                    T
                  </span>
                </div>
              </motion.div>

              {/* Middle Column: Copy details */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
                className="lg:col-span-4 flex flex-col justify-center space-y-6"
              >
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#E65100] font-semibold block mb-2">
                    Hero — About M Groups
                  </span>
                  <h1 className="text-2xl md:text-3xl font-serif text-white font-semibold leading-snug">
                    Building Businesses. <br />
                    Creating Experiences. <br />
                    <span className="text-[#E65100] italic">Shaping Futures.</span>
                  </h1>
                </div>

                <div className="space-y-4 text-white/70 text-sm md:text-base leading-relaxed font-light">
                  <p>
                    M Groups is a diversified business group bringing together ventures across construction, real estate, hospitality, agriculture, and interior solutions.
                  </p>
                  <p>
                    We believe every successful venture begins with a strong foundation — and our businesses are built around quality, trust, innovation, and long-term value.
                  </p>
                </div>

                <div className="pt-2">
                  <Link 
                    to="/businesses"
                    className="inline-flex items-center gap-3 px-6 py-3 border border-white/30 text-xs font-semibold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-300 group"
                  >
                    <span>Explore Our Businesses</span>
                    <ArrowRight className="w-4 h-4 text-[#E65100] group-hover:text-black transition-colors" />
                  </Link>
                </div>
              </motion.div>

              {/* Right Column: Tall Vertical Grayscale Photo matching reference screenshot */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
                className="lg:col-span-3 flex justify-center lg:justify-end"
              >
                <div className="relative w-full max-w-[280px] lg:max-w-none h-[380px] md:h-[460px] overflow-hidden border border-white/10 shadow-2xl group">
                  <img 
                    src="/landing/MS Builders & Developers.webp" 
                    alt="M Groups Architecture" 
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 right-4 text-xs tracking-wider text-white/60 font-mono">
                    M GROUPS ARCHIVE // 2026
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>


        {/* =========================================================================
            2. WHO WE ARE SECTION
           ========================================================================= */}
        <section className="py-20 md:py-28 bg-[#181818] border-b border-white/5">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <motion.span variants={fadeUp} className="text-xs uppercase tracking-[0.25em] text-[#E65100] font-semibold block mb-3">
                WHO WE ARE
              </motion.span>
              
              <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
                More Than a Group. <br />
                <span className="italic text-white/60">A Growing Ecosystem.</span>
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <motion.p variants={fadeUp} className="text-white/70 text-base leading-relaxed font-light">
                  M Groups is a diversified business organization with interests across multiple industries. From creating spaces and developing properties to serving memorable food, cultivating agriculture, and delivering interior solutions, our businesses are connected by one common vision — to create meaningful value for people and communities.
                </motion.p>
                <motion.p variants={fadeUp} className="text-white/70 text-base leading-relaxed font-light">
                  With each venture operating with its own expertise and identity, M Groups brings together diverse capabilities under one growing organization.
                </motion.p>
              </div>

              {/* 3 Pillars */}
              <motion.div variants={fadeUp} className="pt-6 border-t border-white/10">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#E65100] mb-6">
                  Our approach is simple:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { label: "Build with purpose.", num: "01" },
                    { label: "Operate with integrity.", num: "02" },
                    { label: "Grow with vision.", num: "03" },
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      className="p-6 bg-[#121212] border border-white/10 rounded-none flex flex-col justify-between hover:border-[#E65100]/50 transition-colors duration-300"
                    >
                      <span className="text-2xl font-['Bebas_Neue'] text-[#E65100] mb-4">{item.num}</span>
                      <h3 className="text-lg font-medium text-white">{item.label}</h3>
                    </div>
                  ))}
                </div>
              </motion.div>

            </motion.div>
          </div>
        </section>


        {/* =========================================================================
            3. OUR BUSINESSES SECTION
           ========================================================================= */}
        <section className="py-20 md:py-28 bg-[#121212] border-b border-white/5">
          <div className="container mx-auto px-6 md:px-12">
            
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mb-16 max-w-3xl"
            >
              <span className="text-xs uppercase tracking-[0.25em] text-[#E65100] font-semibold block mb-3">
                OUR BUSINESSES
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">
                Diverse Industries. One Vision.
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed">
                Our portfolio spans multiple sectors, allowing us to serve different needs while continuously exploring new opportunities.
              </p>
            </motion.div>

            {/* Grid of 6 Businesses */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {businessesData.map((biz, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="bg-[#181818] border border-white/10 group hover:border-[#E65100]/60 transition-all duration-500 flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    {/* Image Header */}
                    <div className="relative h-48 overflow-hidden bg-black/40">
                      <img 
                        src={biz.img} 
                        alt={biz.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className="absolute top-4 left-4 bg-[#121212]/90 backdrop-blur-md px-3 py-1 text-xs font-mono font-bold text-[#E65100] border border-white/10">
                        {biz.num}
                      </div>
                    </div>

                    <div className="p-6 md:p-8 space-y-4">
                      <div className="flex items-center gap-3">
                        {biz.icon}
                        <h3 className="text-xl font-serif text-white font-semibold">
                          {biz.name}
                        </h3>
                      </div>
                      
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#E65100]">
                        {biz.tagline}
                      </p>

                      <p className="text-white/60 text-sm leading-relaxed font-light">
                        {biz.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 md:px-8 pb-6 pt-2">
                    <Link 
                      to={biz.link}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-white/80 group-hover:text-[#E65100] transition-colors"
                    >
                      <span>Explore Division</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>


        {/* =========================================================================
            4. OUR VISION SECTION
           ========================================================================= */}
        <section className="py-20 md:py-28 bg-[#161616] border-b border-white/5 relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="max-w-4xl mx-auto">
              
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-8"
              >
                <motion.span variants={fadeUp} className="text-xs uppercase tracking-[0.25em] text-[#E65100] font-semibold block">
                  OUR VISION
                </motion.span>

                <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-serif text-white leading-tight">
                  Creating a Group That Grows With Purpose
                </motion.h2>

                <div className="space-y-6 text-white/70 text-lg leading-relaxed font-light">
                  <motion.p variants={fadeUp}>
                    Our vision is to build M Groups into a trusted and diversified organization with a strong presence across industries.
                  </motion.p>
                  <motion.p variants={fadeUp}>
                    We continuously look for opportunities where we can combine entrepreneurship, innovation, quality, and responsible business practices to create long-term value.
                  </motion.p>
                </div>

                {/* Callout Quote */}
                <motion.div 
                  variants={fadeUp}
                  className="p-8 md:p-12 bg-[#101010] border-l-4 border-[#E65100] border-y border-r border-white/10 mt-8"
                >
                  <p className="text-white/60 text-lg md:text-xl font-light mb-2">
                    We don't believe growth is simply about becoming bigger.
                  </p>
                  <p className="text-2xl md:text-4xl font-serif text-white font-semibold italic text-[#E65100]">
                    Growth is about becoming better.
                  </p>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </section>


        {/* =========================================================================
            5. OUR VALUES SECTION (4 Cards)
           ========================================================================= */}
        <section className="py-20 md:py-28 bg-[#121212] border-b border-white/5">
          <div className="container mx-auto px-6 md:px-12">
            
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mb-16 text-center max-w-2xl mx-auto"
            >
              <span className="text-xs uppercase tracking-[0.25em] text-[#E65100] font-semibold block mb-3">
                OUR VALUES
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                Built on Unshakable Principles
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valuesData.map((val, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12, duration: 0.6 }}
                  className="p-8 bg-[#181818] border border-white/10 hover:border-[#E65100] transition-colors duration-300 flex flex-col items-start"
                >
                  {val.icon}
                  <h3 className="text-xl font-['Bebas_Neue'] text-white tracking-wider mb-3">
                    {val.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed font-light">
                    {val.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>


        {/* =========================================================================
            6. OUR JOURNEY SECTION
           ========================================================================= */}
        <section className="py-20 md:py-28 bg-[#181818] border-b border-white/5">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-8"
              >
                <motion.span variants={fadeUp} className="text-xs uppercase tracking-[0.25em] text-[#E65100] font-semibold block">
                  OUR JOURNEY
                </motion.span>

                <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-serif text-white">
                  From One Venture to a Growing Group
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/70 text-base leading-relaxed font-light">
                  <motion.p variants={fadeUp}>
                    M Groups continues to evolve through entrepreneurship, new ideas, and a commitment to creating businesses that serve real-world needs.
                  </motion.p>
                  <motion.p variants={fadeUp}>
                    What began with individual ventures has grown into a diverse portfolio spanning construction, real estate, agriculture, hospitality, and interiors.
                  </motion.p>
                </div>

                <motion.div variants={fadeUp} className="pt-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-3">
                    As we move forward, our focus remains the same:
                  </p>
                  <div className="flex items-center gap-4 text-3xl md:text-5xl font-['Bebas_Neue'] text-[#E65100] tracking-wider">
                    <span>CREATE.</span>
                    <span className="text-white/20">•</span>
                    <span>GROW.</span>
                    <span className="text-white/20">•</span>
                    <span>BUILD.</span>
                  </div>
                </motion.div>

              </motion.div>

            </div>
          </div>
        </section>


        {/* =========================================================================
            7. WHY M GROUPS? SECTION
           ========================================================================= */}
        <section className="py-20 md:py-28 bg-[#121212] border-b border-white/5">
          <div className="container mx-auto px-6 md:px-12">
            
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="max-w-3xl mb-16"
            >
              <span className="text-xs uppercase tracking-[0.25em] text-[#E65100] font-semibold block mb-3">
                WHY M GROUPS?
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">
                One Group. Multiple Possibilities.
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed">
                Our diverse portfolio gives us the ability to operate across different industries while creating opportunities for collaboration between our businesses.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUsData.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="p-8 bg-[#161616] border border-white/10 hover:border-[#E65100]/60 transition-colors duration-300"
                >
                  <div className="p-3 bg-[#121212] border border-white/10 w-fit mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>


        {/* =========================================================================
            8. CTA SECTION
           ========================================================================= */}
        <section className="py-24 md:py-36 bg-[#0E0E0E] relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-3xl">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-serif text-white font-semibold leading-tight">
                Let's Build What's Next.
              </motion.h2>

              <motion.p variants={fadeUp} className="text-white/70 text-lg leading-relaxed font-light">
                Whether you're looking for a property, exploring a business opportunity, planning your next space, or simply looking for a place to enjoy good food — M Groups is building businesses designed to be part of everyday life.
              </motion.p>

              <motion.div variants={fadeUp} className="pt-4">
                <Link
                  to="/businesses"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#E65100] text-white text-sm font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-xl group"
                >
                  <span>Explore Our Businesses</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};
