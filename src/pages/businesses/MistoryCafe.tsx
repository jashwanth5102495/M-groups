import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageTransition } from '../../components/ui/PageTransition';
import { Phone, Mail, MapPin, ChefHat, Leaf, Star, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const cafeDishes = [
  { name: "Filter Coffee", price: "₹90" },
  { name: "Samosa Chaat", price: "₹120" },
  { name: "Paneer Tikka Sandwich", price: "₹180" },
  { name: "Masala Chai", price: "₹60" },
  { name: "Vada Pav", price: "₹80" },
  { name: "Bombay Grilled Sandwich", price: "₹150" },
  { name: "Tandoori Momos", price: "₹200" },
  { name: "Chole Bhature", price: "₹220" },
  { name: "Kesar Pista Falooda", price: "₹160" },
  { name: "Masala Dosa", price: "₹140" }
];

const specialMenu = [
  { name: 'PANEER TIKKA MASALA', price: '₹280', img: '/MRC/menu1.jpg' },
  { name: 'MUTTON ROGAN JOSH', price: '₹450', img: '/MRC/menu2.jpg' },
  { name: 'CHICKEN BIRYANI', price: '₹350', img: '/MRC/menu3.jpg' },
  { name: 'DAL MAKHANI', price: '₹220', img: '/MRC/menu4.jpg' }
];

const heroImages = [
  '/MRC/1.webp',
  '/MRC/2.webp',
  '/MRC/3.webp',
  '/MRC/4.webp'
];

export const MistoryCafe = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [currentDishIndex, setCurrentDishIndex] = useState(0);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  // Auto rotate the hero background every 5 seconds
  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(heroInterval);
  }, []);

  // Auto rotate the glass box dishes every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDishIndex((prev) => (prev + 1) % cafeDishes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleBooking = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      date: formData.get('date'),
      time: formData.get('time'),
      guests: formData.get('guests'),
      request: formData.get('request'),
    };

    const text = `*Cafe Table Reservation*\n\n*Name:* ${data.name}\n*Phone:* ${data.phone}\n*Date:* ${data.date}\n*Time:* ${data.time}\n*Guests:* ${data.guests}\n*Special Request:* ${data.request || 'None'}`;
    const whatsappUrl = `https://wa.me/919743399992?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <PageTransition>
      <div className="w-full min-h-screen bg-[#070504] text-[#e8e4db] flex flex-col font-sans relative overflow-x-hidden">
        
        {/* Main Hero */}
        <main className="relative w-full h-screen min-h-[850px] flex items-center bg-[#070504] pt-20">
          
          {/* Animated Background Slider */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentHeroIndex}
                src={heroImages[currentHeroIndex]}
                alt="Cafe Dish"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
                className="w-full h-full object-cover object-right lg:object-center opacity-85"
              />
            </AnimatePresence>
            {/* Deep gradient to ensure text readability on the left */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#070504]/90 via-[#070504]/40 to-transparent w-full md:w-[70%]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#070504]/10 via-transparent to-[#070504]/80" />
          </div>

          {/* Navigation Arrows */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-30">
            <button 
              onClick={() => setCurrentHeroIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
              className="w-10 h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white hover:bg-[#d4a373] hover:text-black transition-colors backdrop-blur-sm"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30">
            <button 
              onClick={() => setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length)}
              className="w-10 h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white hover:bg-[#d4a373] hover:text-black transition-colors backdrop-blur-sm"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
            {heroImages.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentHeroIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${currentHeroIndex === idx ? 'bg-[#d4a373] scale-125' : 'bg-white/40 hover:bg-white/70'}`}
              />
            ))}
          </div>

          <div className="container mx-auto px-12 lg:px-20 flex flex-col lg:flex-row h-full">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center h-full relative z-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <h3 className="font-serif italic text-2xl md:text-3xl text-[#d4a373] mb-4">Mistory Roster Cafe</h3>
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-6">
                  <span className="text-white block">GOOD FOOD</span>
                  <span className="text-[#d4a373] block">GOOD MOOD</span>
                </h1>
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-12 bg-[#d4a373]/50"></div>
                  <div className="text-[#d4a373]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M11 11L7 15"/><path d="M15 7L11 11"/><path d="M11 11L15 15"/><path d="M7 7L11 11"/></svg>
                  </div>
                  <div className="h-[1px] w-12 bg-[#d4a373]/50"></div>
                </div>

                <p className="text-white/60 text-sm md:text-base max-w-[450px] mb-10 leading-relaxed">
                  Discover an exceptional dining experience with delicious food, warm ambiance and great service.
                </p>

                <div className="flex flex-wrap gap-4 mb-16">
                  <button onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#d4a373] hover:bg-[#c29161] text-[#070504] px-8 py-3.5 text-xs font-bold tracking-widest uppercase transition-colors rounded-sm">
                    BOOK A TABLE
                  </button>
                  <button onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })} className="border border-[#d4a373] text-[#d4a373] hover:bg-[#d4a373] hover:text-[#070504] px-8 py-3.5 text-xs font-bold tracking-widest uppercase transition-colors rounded-sm">
                    EXPLORE MENU
                  </button>
                </div>

                {/* Bottom Icons */}
                <div className="grid grid-cols-3 gap-6 max-w-[500px]">
                  <div className="flex flex-col gap-2">
                    <ChefHat className="text-[#d4a373]" size={24} />
                    <span className="text-[10px] font-bold tracking-wider uppercase text-white">EXPERT CHEFS</span>
                    <span className="text-[10px] text-white/50">Experienced & Passionate</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Leaf className="text-[#d4a373]" size={24} />
                    <span className="text-[10px] font-bold tracking-wider uppercase text-white">FRESH INGREDIENTS</span>
                    <span className="text-[10px] text-white/50">Local & Organic</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Star className="text-[#d4a373]" size={24} />
                    <span className="text-[10px] font-bold tracking-wider uppercase text-white">GREAT ATMOSPHERE</span>
                    <span className="text-[10px] text-white/50">Perfect Place to Dine</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Glass Box */}
            <div className="w-full lg:w-1/2 absolute right-0 top-0 bottom-0 z-0 lg:z-10 pointer-events-none">
              {/* Glass Texture Box for Rotating Prices */}
              <div className="absolute bottom-24 right-12 lg:right-24 z-20 w-48 pointer-events-auto">
                <motion.div 
                  className="bg-black/50 backdrop-blur-md border border-[#d4a373]/20 p-4 rounded-xl shadow-2xl relative overflow-hidden flex flex-col items-center justify-center text-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4a373] to-transparent opacity-50" />
                  
                  <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#d4a373] mb-2 opacity-80">Starting From</span>
                  
                  <div className="h-[60px] w-full relative flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentDishIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        className="absolute w-full px-2"
                      >
                        <h4 className="font-serif text-[15px] text-white/90 leading-tight mb-1 truncate">{cafeDishes[currentDishIndex].name}</h4>
                        <p className="text-xl font-bold text-[#d4a373]">{cafeDishes[currentDishIndex].price}</p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </main>

        {/* Special Menu Section */}
        <section id="menu" className="py-24 bg-[#0a0705] relative overflow-hidden border-t border-white/5">
          <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12 relative z-10">
            
            {/* Left Header */}
            <div className="lg:w-1/4 flex flex-col justify-center">
              <h3 className="font-serif italic text-2xl text-[#d4a373] mb-4">Our Special Menu</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-8 bg-[#d4a373]/50"></div>
                <div className="text-[#d4a373]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M11 11L7 15"/><path d="M15 7L11 11"/><path d="M11 11L15 15"/><path d="M7 7L11 11"/></svg>
                </div>
                <div className="h-[1px] w-8 bg-[#d4a373]/50"></div>
              </div>
              <h2 className="text-4xl lg:text-5xl font-serif text-white uppercase tracking-wide mb-6">
                DELICIOUS<br/>FLAVORS
              </h2>
              <p className="text-white/50 text-xs leading-relaxed max-w-xs mb-8">
                A perfect blend of taste, quality, and creativity. Every dish is crafted to perfection.
              </p>
              <button className="bg-[#d4a373] hover:bg-[#c29161] text-[#070504] px-8 py-3 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors rounded-sm w-max">
                VIEW FULL MENU
              </button>
            </div>

            {/* Right Menu Cards */}
            <div className="lg:w-3/4 flex flex-col">
              <div className="flex justify-end gap-6 mb-8 border-b border-white/5 pb-4">
                {['ALL', 'MAIN COURSE', 'DRINKS', 'DESSERTS'].map(filter => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`text-[10px] tracking-[0.15em] uppercase transition-colors font-bold ${
                      activeFilter === filter ? 'text-[#d4a373]' : 'text-white/40 hover:text-white'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {specialMenu.map((item, idx) => (
                  <div key={idx} className="bg-[#110c08] border border-white/5 hover:border-[#d4a373]/30 transition-all rounded-sm overflow-hidden flex flex-col">
                    <div className="h-48 w-full overflow-hidden">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-6 text-center flex flex-col items-center justify-center flex-grow">
                      <h4 className="text-[11px] font-bold tracking-widest text-white mb-4 uppercase">{item.name}</h4>
                      <span className="text-[#d4a373] font-serif text-xl mb-4">{item.price}</span>
                      <div className="text-[#d4a373]/40">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M11 11L7 15"/><path d="M15 7L11 11"/><path d="M11 11L15 15"/><path d="M7 7L11 11"/></svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </section>

        {/* Reservation Section */}
        <section id="reservation" className="py-24 bg-[#070504] relative border-t border-white/5">
          {/* Subtle Background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <img src="/MRC/1.webp" alt="Ambiance" className="w-full h-full object-cover blur-xl" />
            <div className="absolute inset-0 bg-[#070504]/80" />
          </div>

          <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10 items-center">
            
            {/* Left Info */}
            <div className="lg:w-5/12 flex flex-col">
              <h2 className="text-5xl md:text-6xl font-serif text-white uppercase tracking-wide leading-tight mb-8">
                BOOK YOUR <br/> <span className="text-[#d4a373]">TABLE</span>
              </h2>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-[#d4a373]/50"></div>
                <div className="text-[#d4a373]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M11 11L7 15"/><path d="M15 7L11 11"/><path d="M11 11L15 15"/><path d="M7 7L11 11"/></svg>
                </div>
                <div className="h-[1px] w-12 bg-[#d4a373]/50"></div>
              </div>

              <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-12">
                Reserve your table and enjoy a memorable dining experience.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-full border border-[#d4a373]/30 flex items-center justify-center text-[#d4a373]">
                    <Phone size={16} />
                  </div>
                  <span className="text-white/90 text-sm tracking-wide">+91 97433 99992</span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-full border border-[#d4a373]/30 flex items-center justify-center text-[#d4a373]">
                    <Mail size={16} />
                  </div>
                  <span className="text-white/90 text-sm tracking-wide">info@flavorrestaurant.com</span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-full border border-[#d4a373]/30 flex items-center justify-center text-[#d4a373]">
                    <MapPin size={16} />
                  </div>
                  <span className="text-white/90 text-sm tracking-wide">123 Culinary Street, Food City, FC 56789</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:w-7/12 w-full">
              <div className="bg-[#0f0a07] border border-white/10 rounded-xl p-8 md:p-12 relative">
                <div className="text-center mb-10">
                  <h3 className="font-serif text-xl text-[#d4a373] uppercase tracking-widest mb-4">RESERVATION</h3>
                  <div className="flex items-center justify-center gap-4">
                    <div className="h-[1px] w-8 bg-[#d4a373]/50"></div>
                    <div className="text-[#d4a373]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M11 11L7 15"/><path d="M15 7L11 11"/><path d="M11 11L15 15"/><path d="M7 7L11 11"/></svg>
                    </div>
                    <div className="h-[1px] w-8 bg-[#d4a373]/50"></div>
                  </div>
                </div>

                <form onSubmit={handleBooking} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input required name="name" type="text" placeholder="Your Name" className="bg-transparent border border-white/15 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#d4a373] transition-colors placeholder:text-white/30 rounded-md" />
                    <input required name="phone" type="tel" placeholder="Phone Number" className="bg-transparent border border-white/15 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#d4a373] transition-colors placeholder:text-white/30 rounded-md" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input required name="email" type="email" placeholder="Email Address" className="bg-transparent border border-white/15 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#d4a373] transition-colors placeholder:text-white/30 rounded-md" />
                    <div className="relative">
                      <input required name="date" type="date" className="w-full bg-transparent border border-white/15 px-4 py-3.5 text-sm text-white/50 focus:text-white focus:outline-none focus:border-[#d4a373] transition-colors rounded-md [color-scheme:dark]" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <select required name="time" className="w-full bg-transparent border border-white/15 px-4 py-3.5 text-sm text-white/50 focus:text-white focus:outline-none focus:border-[#d4a373] transition-colors rounded-md appearance-none">
                        <option value="" disabled selected hidden>Time</option>
                        <option value="18:00" className="bg-[#0f0a07]">18:00</option>
                        <option value="19:00" className="bg-[#0f0a07]">19:00</option>
                        <option value="20:00" className="bg-[#0f0a07]">20:00</option>
                        <option value="21:00" className="bg-[#0f0a07]">21:00</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" size={16} />
                    </div>
                    <div className="relative">
                      <select required name="guests" className="w-full bg-transparent border border-white/15 px-4 py-3.5 text-sm text-white/50 focus:text-white focus:outline-none focus:border-[#d4a373] transition-colors rounded-md appearance-none">
                        <option value="" disabled selected hidden>Guests</option>
                        <option value="1 Person" className="bg-[#0f0a07]">1 Person</option>
                        <option value="2 People" className="bg-[#0f0a07]">2 People</option>
                        <option value="3 People" className="bg-[#0f0a07]">3 People</option>
                        <option value="4 People" className="bg-[#0f0a07]">4 People</option>
                        <option value="5+ People" className="bg-[#0f0a07]">5+ People</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" size={16} />
                    </div>
                  </div>
                  <textarea name="request" rows={3} placeholder="Special Request" className="bg-transparent border border-white/15 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#d4a373] transition-colors placeholder:text-white/30 resize-none rounded-md mt-2"></textarea>
                  
                  <button type="submit" className="w-full bg-[#d4a373] hover:bg-[#c29161] text-[#070504] py-4 text-[12px] font-bold tracking-widest uppercase transition-colors rounded-md mt-4">
                    BOOK A TABLE NOW
                  </button>
                </form>
              </div>
            </div>

          </div>
        </section>

      </div>
    </PageTransition>
  );
};
