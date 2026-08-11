import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Pause, Play, ChevronDown } from 'lucide-react';
import { businesses } from '../../data/businesses';

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % businesses.length);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <section className="relative w-full h-[100vh] min-h-[700px] overflow-hidden bg-[#020202]">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={businesses[currentIndex].image}
            alt={businesses[currentIndex].name}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop';
            }}
          />
        </AnimatePresence>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent w-full md:w-[80%] z-10" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#020202] to-transparent z-10" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#020202]/80 to-transparent z-10" />
        
        {/* Dotted Mesh Overlay */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay z-10 pointer-events-none"
          style={{ 
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '6px 6px'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container relative z-20 mx-auto px-6 md:px-16 h-full flex flex-col justify-center pt-[10vh]">
        <div className="w-full max-w-[700px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              {/* Category Tag */}
              <div className="bg-[#004b73] text-white text-[11px] font-bold tracking-[0.1em] px-4 py-1.5 inline-block mb-6 uppercase">
                {businesses[currentIndex].category}
              </div>
              
              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-[1.1] font-bold tracking-tight">
                {businesses[currentIndex].name}
              </h1>

              {/* Description */}
              <div className="border-l-[3px] border-white/20 pl-6 mb-10">
                <p className="text-white/80 text-lg md:text-xl font-sans max-w-[500px] leading-relaxed">
                  At M Groups, {businesses[currentIndex].description.toLowerCase()}
                </p>
              </div>

              {/* Action Button */}
              {businesses[currentIndex].status === 'Upcoming' ? (
                <div className="inline-flex items-center gap-3 bg-[#d68a28] text-white px-8 py-3.5 text-sm font-semibold rounded-sm opacity-80 cursor-not-allowed">
                  Coming Soon
                </div>
              ) : businesses[currentIndex].route.startsWith('http') ? (
                <a
                  href={businesses[currentIndex].route}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#d68a28] hover:bg-[#b5731f] text-white px-8 py-3.5 text-sm font-semibold transition-colors rounded-sm group"
                >
                  Explore <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              ) : (
                <Link
                  to={businesses[currentIndex].route}
                  className="inline-flex items-center gap-3 bg-[#d68a28] hover:bg-[#b5731f] text-white px-8 py-3.5 text-sm font-semibold transition-colors rounded-sm group"
                >
                  Explore <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Footer Controls */}
      <div className="absolute bottom-10 left-0 w-full z-30 px-6 md:px-16">
        <div className="container mx-auto flex items-end justify-between">
          
          {/* Slider Progress Bars & Play/Pause */}
          <div className="flex items-center gap-6">
            <button onClick={togglePlay} className="text-white/70 hover:text-white flex items-center gap-4 transition-colors">
              {isPlaying ? <Pause size={18} /> : <Play size={18} fill="currentColor" />}
              <span className="text-sm font-medium tracking-widest w-12 text-center">
                {currentIndex + 1} / {businesses.length}
              </span>
            </button>
            
            <div className="flex gap-2 w-48 md:w-96">
              {businesses.map((_, index) => (
                <div 
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsPlaying(false);
                  }}
                  className="h-[3px] flex-1 bg-white/20 cursor-pointer overflow-hidden relative"
                >
                  <div 
                    className="absolute top-0 left-0 h-full bg-[#d68a28] transition-all duration-300"
                    style={{ width: index < currentIndex ? '100%' : '0%' }}
                  />
                  {index === currentIndex && isPlaying && (
                    <motion.div 
                      key={`progress-${currentIndex}`}
                      className="absolute top-0 left-0 h-full bg-[#d68a28]"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 5, ease: "linear" }}
                    />
                  )}
                  {index === currentIndex && !isPlaying && (
                    <div className="absolute top-0 left-0 h-full bg-[#d68a28] w-full" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="flex flex-col items-center text-white/40 hover:text-white transition-colors cursor-pointer" onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}>
            <ChevronDown size={28} className="-mb-4" />
            <ChevronDown size={28} />
          </div>
        </div>
      </div>

    </section>
  );
};
