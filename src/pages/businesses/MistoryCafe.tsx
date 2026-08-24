import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageTransition } from '../../components/ui/PageTransition';
import { Phone, Mail, MapPin, ChefHat, Leaf, Star, ChevronDown, ChevronLeft, ChevronRight, AtSign } from 'lucide-react';

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
  { 
    name: 'PANEER TIKKA MASALA', 
    price: '₹280', 
    img: '/MRC/menu1.jpg',
    desc: 'Cottage cheese marinated in yogurt and spices, grilled to perfection and served in a rich, creamy tomato gravy.'
  },
  { 
    name: 'MUTTON ROGAN JOSH', 
    price: '₹450', 
    img: '/MRC/menu2.jpg',
    desc: 'A robust and flavorful Kashmiri curry featuring tender mutton slow-cooked with aromatic spices and a touch of saffron.'
  },
  { 
    name: 'CHICKEN BIRYANI', 
    price: '₹350', 
    img: '/MRC/menu3.jpg',
    desc: 'Fragrant basmati rice cooked with tender chicken pieces, blended with our secret blend of Hyderabadi spices.'
  },
  { 
    name: 'DAL MAKHANI', 
    price: '₹220', 
    img: '/MRC/menu4.jpg',
    desc: 'Black lentils slowly simmered for hours with butter and cream, creating a deeply rich and comforting flavor profile.'
  }
];

const fullMenuData: Record<string, {name: string, price: string}[]> = {
  "TANDOOR VEG": [
    { name: "PANEER TIKKA", price: "₹ 220" },
    { name: "MUSHROOM ACHARI", price: "₹ 220" },
    { name: "MUSHROOM MALAI TIKKA", price: "₹ 220" },
    { name: "MUSHROOM NILGIRI", price: "₹ 220" },
    { name: "MUSHROOM TANDOORI", price: "₹ 220" },
    { name: "MUSHROOM SPECIAL (STUFFED)", price: "₹ 280" },
    { name: "MUSHROOM DUPLEX (MYSTERY SPECIAL)", price: "₹ 280" },
    { name: "PANEER MALAI TIKKA", price: "₹ 220" },
    { name: "PANEER NILGIRI", price: "₹ 220" },
    { name: "PANEER SPECIAL (STUFFED)", price: "₹ 300" },
    { name: "PANEER TIKKA PERI PERI", price: "₹ 220" },
    { name: "VEG TANDOOR PLATTER", price: "₹ 800" },
    { name: "BABY CORN TIKKA", price: "₹ 200" },
    { name: "BABY CORN PESHAWARI", price: "₹ 200" },
    { name: "HARA BARA KEBAB", price: "₹ 220" }
  ],
  "TANDOOR NON VEG": [
    { name: "CHICKEN MALAI (BONE)", price: "₹ 220" },
    { name: "CHICKEN MALAI (BONELESS)", price: "₹ 260" },
    { name: "CHICKEN NILGIRI (BONE)", price: "₹ 220" },
    { name: "CHICKEN NILGIRI (BONELESS)", price: "₹ 260" },
    { name: "CHICKEN SHOLAY KEBAB", price: "₹ 220" },
    { name: "CHICKEN PESHAWARI", price: "₹ 220" },
    { name: "CHICKEN TIKKA (BONE)", price: "₹ 220" },
    { name: "CHICKEN TIKKA (BONELESS)", price: "₹ 260" },
    { name: "CHICKEN ALFAHAM", price: "₹ 650" },
    { name: "CHICKEN BBQ", price: "₹ 650" },
    { name: "HARIYALI KEBAB", price: "₹ 220" },
    { name: "CHICKEN TANDOOR HALF", price: "₹ 300" },
    { name: "CHICKEN TANDOOR FULL", price: "₹ 500" },
    { name: "NON VEG TANDOOR PLATTER", price: "₹ 900" },
    { name: "TANDOOR SPECIAL", price: "₹ 300" }
  ],
  "TANDOORI SEA FOOD": [
    { name: "FISH TIKKA", price: "₹ 300" },
    { name: "FISH FINGERS", price: "₹ 320" },
    { name: "AMRITSARI FISH TIKKA", price: "₹ 300" },
    { name: "PRAWN POPCORN", price: "₹ 360" },
    { name: "PRAWN TIKKA", price: "₹ 350" },
    { name: "PRAWN HUNGARY KEBAB", price: "₹ 350" },
    { name: "PRAWN GHEE ROAST", price: "₹ 380" },
    { name: "FISH GHEE ROAST", price: "₹ 380" }
  ],
  "ADD ON'S": [
    { name: "CHICKEN POP CORN", price: "₹ 180" },
    { name: "CHICKEN LOLLIPOP", price: "₹ 220" },
    { name: "CHICKEN LOLLIPOP MANCHURIAN", price: "₹ 280" },
    { name: "FRIED CHICKEN", price: "₹ 220" },
    { name: "CHICKEN KABAB", price: "₹ 200" },
    { name: "EGG BHURJI", price: "₹ 100" },
    { name: "BOILED EGG", price: "₹ 30" },
    { name: "ALOO CORN TIKKA", price: "₹ 220" },
    { name: "FRIED KAJU", price: "₹ 300" },
    { name: "FRENCH FRIES", price: "₹ 150" },
    { name: "FRENCH FRIES PERI PERI", price: "₹ 170" },
    { name: "CRISPY CORN", price: "₹ 220" },
    { name: "GREEN SALAD", price: "₹ 70" },
    { name: "ONION PAKODA", price: "₹ 120" },
    { name: "PANEER PAKODA", price: "₹ 200" },
    { name: "PEANUT MASALA", price: "₹ 100" }
  ],
  "CHINESE VEG": [
    { name: "BABY CORN CHILLY", price: "₹ 220" },
    { name: "BABY CORN MANCHURIAN", price: "₹ 220" },
    { name: "BABY CORN PEPPER DRY", price: "₹ 220" },
    { name: "MUSHROOM CHILLY", price: "₹ 220" },
    { name: "MUSHROOM MANCHURIAN", price: "₹ 220" },
    { name: "MUSHROOM PEPPER DRY", price: "₹ 250" },
    { name: "MUSHROOM DUPLEX (CHEF SPECIAL)", price: "₹ 300" },
    { name: "PANEER CHILLY", price: "₹ 220" },
    { name: "PANEER MANCHURIAN", price: "₹ 220" },
    { name: "PANEER PEPPER DRY", price: "₹ 220" },
    { name: "GOBI MANCHURIAN", price: "₹ 200" }
  ],
  "CHINESE NON VEG": [
    { name: "CHICKEN MANCHURIAN", price: "₹ 220" },
    { name: "CHICKEN 65", price: "₹ 220" },
    { name: "CHICKEN PEPPER DRY", price: "₹ 220" },
    { name: "CHILLY CHICKEN", price: "₹ 220" },
    { name: "CHINESE SPECIAL (CHEF SPECIAL)", price: "₹ 260" },
    { name: "DRAGON CHICKEN", price: "₹ 260" },
    { name: "EGG CHILLY", price: "₹ 220" },
    { name: "EGG MANCHURIAN", price: "₹ 220" },
    { name: "GUNTUR CHICKEN", price: "₹ 220" },
    { name: "LEMON CHICKEN", price: "₹ 220" },
    { name: "ANDHRA STYLE CHILLY CHICKEN", price: "₹ 250" }
  ],
  "BREADS": [
    { name: "ROTI", price: "₹ 35" },
    { name: "BUTTER ROTI", price: "₹ 40" },
    { name: "KULCHA", price: "₹ 55" },
    { name: "BUTTER KULCHA", price: "₹ 60" },
    { name: "NAAN", price: "₹ 50" },
    { name: "BUTTER NAAN", price: "₹ 55" },
    { name: "CHEESE GARLIC NAAN", price: "₹ 80" },
    { name: "BUTTER GARLIC NAAN", price: "₹ 75" },
    { name: "LACHHA PAROTA", price: "₹ 40" },
    { name: "BUTTER LACHHA PAROTA", price: "₹ 45" }
  ],
  "INDIAN CURRY VEG": [
    { name: "PANEER LABABDAR", price: "₹ 180" },
    { name: "PANEER KHOLAPURI", price: "₹ 180" },
    { name: "PANEER TIKKA MASALA", price: "₹ 200" },
    { name: "PANEER BUTTER MASALA", price: "₹ 180" },
    { name: "KHADAI PANEER", price: "₹ 180" },
    { name: "MUTTER PANEER", price: "₹ 180" },
    { name: "MUSHROOM MUTTER", price: "₹ 180" },
    { name: "MUSHROOM MASALA", price: "₹ 180" },
    { name: "KHADAI MUSHROOM", price: "₹ 170" },
    { name: "MIX VEG CURRY", price: "₹ 170" },
    { name: "VEG HYDERBADI", price: "₹ 180" },
    { name: "DAL TADKA", price: "₹ 160" },
    { name: "DAL FRY", price: "₹ 140" },
    { name: "SAMBJE MELONE", price: "₹ 180" },
    { name: "KAJU MASALA", price: "₹ 260" },
    { name: "VEG KHADAI", price: "₹ 180" }
  ],
  "INDIAN CURRY NON VEG": [
    { name: "KHADAI CHICKEN", price: "₹ 180" },
    { name: "CHICKEN TIKKA MASALA", price: "₹ 200" },
    { name: "CHICKEN KOLHAPURI", price: "₹ 180" },
    { name: "CHICKEN DO PYAZA", price: "₹ 180" },
    { name: "CHICKEN LABABDAR", price: "₹ 180" },
    { name: "CHICKEN HANDI", price: "₹ 180" },
    { name: "BHUNA CHICKEN", price: "₹ 180" },
    { name: "MUTTON ROGAN JOSH", price: "₹ 300" },
    { name: "MUTTON CURRY", price: "₹ 280" },
    { name: "MUTTON BHUNA JOSH", price: "₹ 300" },
    { name: "FISH CURRY", price: "₹ 280" },
    { name: "FISH KOLIWADA", price: "₹ 320" },
    { name: "PRAWN CURRY", price: "₹ 300" },
    { name: "PRAWN JHINGA JHAL FAREJI", price: "₹ 300" },
    { name: "CHICKEN BUTTER MASALA", price: "₹ 200" },
    { name: "CHICKEN MUGHLAI", price: "₹ 260" },
    { name: "EGG CURRY", price: "₹ 180" }
  ],
  "BIRIYANI": [
    { name: "VEG BIRIYANI", price: "₹ 220" },
    { name: "MUSHROOM BIRIYANI", price: "₹ 220" },
    { name: "MYSTERY CHICKEN DUM BIRIYANI", price: "₹ 250" },
    { name: "MYSTERY MUTTON DUM BIRIYANI", price: "₹ 360" },
    { name: "FISH BIRIYANI", price: "₹ 360" },
    { name: "PRAWN BIRIYANI", price: "₹ 360" }
  ],
  "RICE": [
    { name: "CHICKEN FRIED RICE", price: "₹ 180" },
    { name: "EGG FRIED RICE", price: "₹ 160" },
    { name: "CURD RICE", price: "₹ 130" },
    { name: "DAL KICHADI", price: "₹ 150" },
    { name: "GHEE RICE", price: "₹ 150" },
    { name: "JEERA RICE", price: "₹ 140" },
    { name: "KAJU FRIED RICE", price: "₹ 200" },
    { name: "MUSHROOM FRIED RICE", price: "₹ 180" },
    { name: "STEAM RICE", price: "₹ 120" },
    { name: "VEG FRIED RICE", price: "₹ 150" }
  ],
  "BEVERAGES": [
    { name: "TEA", price: "₹ 30" },
    { name: "COFFEE", price: "₹ 30" },
    { name: "LEMON TEA", price: "₹ 30" },
    { name: "GREEN TEA", price: "₹ 30" },
    { name: "LEMON ICE TEA", price: "₹ 130" },
    { name: "PEACH ICE TEA", price: "₹ 130" },
    { name: "FRESH LIME SODA", price: "₹ 110" },
    { name: "SOFT DRINKS", price: "₹ 50" },
    { name: "SOFT DRINKS 1L", price: "₹ 100" },
    { name: "WATER", price: "₹ 30" }
  ],
  "MILK SHAKES": [
    { name: "COLD COFFEE", price: "₹ 120" },
    { name: "FERROROCHER SHAKE", price: "₹ 170" },
    { name: "REDVELVET SHAKE", price: "₹ 150" },
    { name: "BLACK BERRY SHAKE", price: "₹ 140" },
    { name: "OREO MILK SHAKE", price: "₹ 140" },
    { name: "KIT KAT SHAKE", price: "₹ 150" },
    { name: "BLACK FORREST SHAKE", price: "₹ 160" },
    { name: "CHOCOLATE SHAKE", price: "₹ 120" },
    { name: "VANILLA SHAKE", price: "₹ 120" },
    { name: "BUTTER SCOTCH SHAKE", price: "₹ 150" }
  ],
  "MOCKTAIL DRINKS": [
    { name: "BERRY BERRY SURPRISE", price: "₹ 140" },
    { name: "BLACK BEAUTY", price: "₹ 130" },
    { name: "BULL POWER", price: "₹ 180" },
    { name: "KIWI KISS", price: "₹ 140" }
  ],
  "DESSERTS": [
    { name: "CHOCOLATE ICE CREAM", price: "₹ 100" },
    { name: "VANILLA ICE CREAM", price: "₹ 80" },
    { name: "BUTTER SCOTCH ICE CREAM", price: "₹ 120" },
    { name: "BROWNIE WITH ICE CREAM", price: "₹ 180" },
    { name: "SIZZLING BROWNIE", price: "₹ 250" }
  ],
  "BREAKFAST": [
    { name: "VEG SANDWICH", price: "₹ 120" },
    { name: "PANEER PARATHA", price: "₹ 120" },
    { name: "ALOO PARATHA", price: "₹ 100" },
    { name: "PLAIN PARATHA WITH CURD", price: "₹ 70" },
    { name: "BREAD OMELETTE", price: "₹ 100" },
    { name: "EGG OMELETTE", price: "₹ 60" }
  ]
};

const heroImages = [
  '/MRC/1.webp',
  '/MRC/2.webp',
  '/MRC/3.webp',
  '/MRC/4.webp'
];

export const MistoryCafe = () => {
  const menuCategories = Object.keys(fullMenuData);
  const [activeFilter, setActiveFilter] = useState(menuCategories[0]);
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


  const currentItems = fullMenuData[activeFilter] || [];
  const midIndex = Math.ceil(currentItems.length / 2);
  const leftItems = currentItems.slice(0, midIndex);
  const rightItems = currentItems.slice(midIndex);

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
                  <a href="https://resto-pilot-frontend-gamma.vercel.app/order/mystery-roaster-cafe-346" target="_blank" rel="noreferrer" className="inline-block bg-[#d4a373] hover:bg-[#c29161] text-[#070504] px-8 py-3.5 text-xs font-bold tracking-widest uppercase transition-colors rounded-sm">
                    ORDER NOW
                  </a>
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
          <div className="container mx-auto px-6 lg:px-12 flex flex-col relative z-10">
            
            <div className="flex flex-col items-center text-center mb-16">
              <h3 className="font-serif italic text-2xl text-[#d4a373] mb-4">Our Special Menu</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-8 bg-[#d4a373]/50"></div>
                <div className="text-[#d4a373]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M11 11L7 15"/><path d="M15 7L11 11"/><path d="M11 11L15 15"/><path d="M7 7L11 11"/></svg>
                </div>
                <div className="h-[1px] w-8 bg-[#d4a373]/50"></div>
              </div>
              <h2 className="text-4xl lg:text-5xl font-serif text-white uppercase tracking-wide mb-6">
                DELICIOUS FLAVORS
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 mb-24 min-h-[600px] border border-white/5 rounded-sm overflow-hidden">
              
              {/* Item 1 - Left Tall Image */}
              <div className="lg:col-span-1 relative group overflow-hidden bg-[#070504] min-h-[400px] lg:min-h-full">
                <img src={specialMenu[0].img} alt={specialMenu[0].name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 absolute inset-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-xl font-bold tracking-widest text-white mb-2 uppercase">{specialMenu[0].name}</h3>
                  <p className="text-white/60 text-[11px] leading-relaxed mb-4">{specialMenu[0].desc}</p>
                  <span className="text-[#d4a373] font-serif text-lg">{specialMenu[0].price}</span>
                </div>
              </div>

              {/* Item 2 - Text Top, Image Bottom */}
              <div className="lg:col-span-1 flex flex-col h-full border-b lg:border-b-0 lg:border-r border-white/5">
                <div className="flex-1 bg-[#110c08] p-8 flex flex-col justify-center items-center text-center">
                  <h3 className="text-[13px] font-bold tracking-widest text-white mb-3 uppercase">{specialMenu[1].name}</h3>
                  <p className="text-white/50 text-[10px] leading-relaxed mb-4">{specialMenu[1].desc}</p>
                  <span className="text-[#d4a373] font-serif text-sm">{specialMenu[1].price}</span>
                </div>
                <div className="flex-1 overflow-hidden relative min-h-[250px] lg:min-h-0">
                  <img src={specialMenu[1].img} alt={specialMenu[1].name} className="w-full h-full object-cover absolute inset-0 transition-transform duration-1000 hover:scale-105" />
                </div>
              </div>

              {/* Item 3 - Image Top, Text Bottom */}
              <div className="lg:col-span-1 flex flex-col h-full border-b lg:border-b-0 lg:border-r border-white/5">
                <div className="flex-1 overflow-hidden relative min-h-[250px] lg:min-h-0">
                  <img src={specialMenu[2].img} alt={specialMenu[2].name} className="w-full h-full object-cover absolute inset-0 transition-transform duration-1000 hover:scale-105" />
                </div>
                <div className="flex-1 bg-[#0a0705] p-8 flex flex-col justify-center items-center text-center">
                  <h3 className="text-[13px] font-bold tracking-widest text-white mb-3 uppercase">{specialMenu[2].name}</h3>
                  <p className="text-white/50 text-[10px] leading-relaxed mb-4">{specialMenu[2].desc}</p>
                  <span className="text-[#d4a373] font-serif text-sm">{specialMenu[2].price}</span>
                </div>
              </div>

              {/* Item 4 - Text Top, Image Bottom */}
              <div className="lg:col-span-1 flex flex-col h-full">
                <div className="flex-1 bg-[#110c08] p-8 flex flex-col justify-center items-center text-center">
                  <h3 className="text-[13px] font-bold tracking-widest text-white mb-3 uppercase">{specialMenu[3].name}</h3>
                  <p className="text-white/50 text-[10px] leading-relaxed mb-4">{specialMenu[3].desc}</p>
                  <span className="text-[#d4a373] font-serif text-sm">{specialMenu[3].price}</span>
                </div>
                <div className="flex-1 overflow-hidden relative min-h-[250px] lg:min-h-0">
                  <img src={specialMenu[3].img} alt={specialMenu[3].name} className="w-full h-full object-cover absolute inset-0 transition-transform duration-1000 hover:scale-105" />
                </div>
              </div>

            </div>
            
            {/* Full Menu Section */}
            <div className="flex flex-col mx-auto w-full max-w-[1400px]">
              
              {/* Header */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="h-[1px] w-12 bg-[#d4a373]/30"></div>
                  <h3 className="font-serif italic text-2xl lg:text-3xl text-[#d4a373]">Explore</h3>
                  <div className="h-[1px] w-12 bg-[#d4a373]/30"></div>
                </div>
                <h2 className="text-3xl lg:text-4xl font-serif text-white uppercase tracking-widest">
                  OUR FULL MENU
                </h2>
              </div>

              {/* Category Tabs */}
              <div className="flex flex-wrap justify-center gap-4 lg:gap-8 mb-16 border-b border-white/5 pb-6 max-w-5xl mx-auto">
                {menuCategories.map(filter => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`text-xs md:text-sm tracking-[0.15em] uppercase transition-colors font-bold pb-2 border-b-2 ${
                      activeFilter === filter ? 'text-[#d4a373] border-[#d4a373]' : 'text-white/40 hover:text-white border-transparent'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* Menu Items Layout */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeFilter}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-16 w-full"
                >
                  
                  {/* Left Column */}
                  <div className="flex-1 flex flex-col gap-8 lg:max-w-[400px]">
                    {leftItems.map((item, idx) => (
                      <div key={`left-${idx}`} className="flex gap-4">
                        {/* Thumbnail */}
                        <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-[#d4a373]/20">
                          <img src={heroImages[idx % heroImages.length]} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        {/* Content */}
                        <div className="flex-grow flex flex-col">
                          <div className="flex justify-between items-baseline gap-2 mb-1 w-full">
                            <h5 className="text-[11px] font-bold tracking-widest text-white uppercase shrink-0">{item.name}</h5>
                            <div className="flex-grow border-b border-dashed border-white/20 relative top-[-4px]"></div>
                            <span className="text-[#d4a373] font-bold text-sm shrink-0">{item.price}</span>
                          </div>
                          <p className="text-white/40 text-[9px] leading-relaxed mb-2">Authentic recipe crafted with premium ingredients for the perfect taste.</p>
                          <div className="flex gap-1 text-[#d4a373]">
                            {[1, 2, 3, 4, 5].map(star => <Star key={star} size={8} fill="currentColor" />)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Center Chef Image */}
                  <div className="hidden lg:flex shrink-0 w-[320px] items-center justify-center">
                    <div className="w-full h-[520px] rounded-[160px] overflow-hidden border-4 border-[#110c08] shadow-2xl relative">
                      <img src="/MRC/chef_portrait.jpg" alt="Master Chef" className="w-full h-full object-cover" />
                      {/* Gradient overlay to blend with dark bg */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0705]/90 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="flex-1 flex flex-col gap-8 lg:max-w-[400px]">
                    {rightItems.map((item, idx) => (
                      <div key={`right-${idx}`} className="flex gap-4">
                        {/* Thumbnail */}
                        <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-[#d4a373]/20">
                          <img src={heroImages[(idx + leftItems.length) % heroImages.length]} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        {/* Content */}
                        <div className="flex-grow flex flex-col">
                          <div className="flex justify-between items-baseline gap-2 mb-1 w-full">
                            <h5 className="text-[11px] font-bold tracking-widest text-white uppercase shrink-0">{item.name}</h5>
                            <div className="flex-grow border-b border-dashed border-white/20 relative top-[-4px]"></div>
                            <span className="text-[#d4a373] font-bold text-sm shrink-0">{item.price}</span>
                          </div>
                          <p className="text-white/40 text-[9px] leading-relaxed mb-2">Authentic recipe crafted with premium ingredients for the perfect taste.</p>
                          <div className="flex gap-1 text-[#d4a373]">
                            {[1, 2, 3, 4, 5].map(star => <Star key={star} size={8} fill="currentColor" />)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                </motion.div>
              </AnimatePresence>

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
                ORDER <br/> <span className="text-[#d4a373]">ONLINE</span>
              </h2>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-[#d4a373]/50"></div>
                <div className="text-[#d4a373]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M11 11L7 15"/><path d="M15 7L11 11"/><path d="M11 11L15 15"/><path d="M7 7L11 11"/></svg>
                </div>
                <div className="h-[1px] w-12 bg-[#d4a373]/50"></div>
              </div>

              <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-12">
                Order your favorite dishes online for a quick pickup or seamless delivery experience.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-full border border-[#d4a373]/30 flex items-center justify-center text-[#d4a373] shrink-0">
                    <Phone size={16} />
                  </div>
                  <span className="text-white/90 text-sm tracking-wide">+91 8260217213 <br className="md:hidden" /> <span className="hidden md:inline">|</span> +91 9035910552</span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-full border border-[#d4a373]/30 flex items-center justify-center text-[#d4a373] shrink-0">
                    <AtSign size={16} />
                  </div>
                  <a href="https://instagram.com/__roaster__cafe___" target="_blank" rel="noreferrer" className="text-white/90 text-sm tracking-wide hover:text-[#d4a373] transition-colors">
                    @__roaster__cafe___
                  </a>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-full border border-[#d4a373]/30 flex items-center justify-center text-[#d4a373] shrink-0">
                    <MapPin size={16} />
                  </div>
                  <span className="text-white/90 text-sm tracking-wide leading-relaxed">
                    Foot Hills of SKANDAGIRI, <br/>
                    kalavara, Chickballapur-562101
                  </span>
                </div>
              </div>
            </div>

            {/* Right Action */}
            <div className="lg:w-7/12 w-full">
              <div className="bg-[#0f0a07] border border-white/10 rounded-xl p-8 md:p-12 relative flex flex-col items-center justify-center min-h-[400px] text-center">
                <div className="text-center mb-10">
                  <h3 className="font-serif text-2xl text-[#d4a373] uppercase tracking-widest mb-4">CRAVING SOMETHING?</h3>
                  <div className="flex items-center justify-center gap-4">
                    <div className="h-[1px] w-8 bg-[#d4a373]/50"></div>
                    <div className="text-[#d4a373]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M11 11L7 15"/><path d="M15 7L11 11"/><path d="M11 11L15 15"/><path d="M7 7L11 11"/></svg>
                    </div>
                    <div className="h-[1px] w-8 bg-[#d4a373]/50"></div>
                  </div>
                </div>

                <p className="text-white/60 mb-10 max-w-md">
                  Explore our full menu online and place your order instantly. Fresh, hot, and ready when you are!
                </p>

                <a 
                  href="https://resto-pilot-frontend-gamma.vercel.app/order/mystery-roaster-cafe-346" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-[#d4a373] hover:bg-[#c29161] text-[#070504] px-12 py-5 text-sm font-bold tracking-widest uppercase transition-colors rounded-md inline-block shadow-lg shadow-[#d4a373]/20"
                >
                  ORDER NOW
                </a>
              </div>
            </div>

          </div>
        </section>

      </div>
    </PageTransition>
  );
};
