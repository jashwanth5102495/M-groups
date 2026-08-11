import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageTransition } from '../../components/ui/PageTransition';
import { ArrowRight, CheckCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';

const dishes = [
  {
    id: 1,
    name: "Hyderabadi Biryani",
    desc: "Fragrant basmati rice layered with tender meat, aromatic spices, and the authentic flavours of Hyderabad.",
    img: "/fam/Hyderabadi Biryani.webp"
  },
  {
    id: 2,
    name: "Butter Garlic Naan",
    desc: "Soft tandoor-baked naan brushed with butter and finished with fresh garlic and herbs.",
    img: "/fam/Butter Garlic Naan.webp"
  },
  {
    id: 3,
    name: "Chilli Chicken",
    desc: "Tender chicken tossed with peppers, onions, and our signature spicy Indo-Chinese sauce.",
    img: "/fam/Chilli Chicken.webp"
  },
  {
    id: 4,
    name: "Chicken Tikka",
    desc: "Juicy pieces of marinated chicken grilled to perfection with traditional Indian spices.",
    img: "/fam/Chicken Tikka.webp"
  },
  {
    id: 5,
    name: "Paneer Tikka Masala",
    desc: "Char-grilled paneer simmered in a rich, creamy and aromatic tomato-based masala.",
    img: "/fam/Paneer Tikka Masala.webp"
  },
  {
    id: 6,
    name: "Mutton Rogan Josh",
    desc: "Slow-cooked tender mutton prepared with aromatic spices in a rich traditional Kashmiri-style gravy.",
    img: "/fam/Mutton Rogan Josh.webp"
  }
];

export const MistoryFamilyRestaurant = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '1 Guest',
    request: ''
  });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStatus('submitting');
    
    const message = `*New Table Reservation*%0A%0A*Name:* ${bookingData.name}%0A*Phone:* ${bookingData.phone}%0A*Date:* ${bookingData.date}%0A*Time:* ${bookingData.time}%0A*Guests:* ${bookingData.guests}%0A*Special Request:* ${bookingData.request || 'None'}`;
    const whatsappUrl = `https://wa.me/919743399992?text=${message}`;

    setTimeout(() => {
      setBookingStatus('success');
      window.open(whatsappUrl, '_blank');
      // Reset form after a few seconds
      setTimeout(() => {
        setBookingStatus('idle');
        setBookingData({ name: '', phone: '', date: '', time: '', guests: '1 Guest', request: '' });
      }, 3000);
    }, 1000);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % dishes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <PageTransition>
      <div className="w-full min-h-screen bg-[#0a0a0a] text-[#e8e4db] font-sans selection:bg-[#d49942] selection:text-[#0a0a0a]">
        
        {/* Hero Section */}
        <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center pt-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/fam.webp" 
              alt="Mistory Family Restaurant" 
              className="w-full h-full object-cover" 
            />
            {/* Removed the blue tint overlay, keeping it dark neutral at the bottom for smooth transition */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#0a0a0a]" />
          </div>

          <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center -mt-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-[#ef4444] animate-pulse" />
              <span className="text-xs tracking-[0.3em] font-bold uppercase text-[#ef4444] border border-[#ef4444]/30 bg-[#ef4444]/10 px-4 py-1.5 rounded-full">
                Coming Soon
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-[80px] font-serif leading-[1.1] text-white tracking-tight mb-8 drop-shadow-2xl"
            >
              Mistory Family <br /> Restaurant
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-white/80 text-base md:text-lg max-w-xl mx-auto font-medium"
            >
              A new premium dining experience is taking shape. Authentic flavours, timeless recipes, and warm hospitality await you.
            </motion.p>
          </div>
        </section>

        {/* Signature Dishes Interactive Section */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          {/* Top fade transition from the previous section */}
          <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

          {/* Background Image */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img 
              src="/sec2.webp" 
              alt="Signature Dishes Background" 
              className="w-full h-full object-cover"
            />
            {/* Bottom fade transition into the next section */}
            <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
          </div>

          {/* Subtle Decorative Elements */}
          <div className="absolute top-10 left-10 w-64 h-64 border border-[#d49942]/5 rounded-full pointer-events-none z-10" />
          <div className="absolute bottom-20 right-10 w-96 h-96 border border-[#d49942]/5 rounded-full pointer-events-none z-10" />

          <div className="container mx-auto px-6 lg:px-12 relative z-20">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Image Showcase */}
              <div className="w-full lg:w-[50%] relative flex justify-center items-center py-6">
                <div className="relative w-[110%] md:w-full max-w-[600px] lg:-ml-12 aspect-square rounded-full overflow-hidden drop-shadow-2xl ring-4 ring-[#d49942]/20">
                  <AnimatePresence mode="popLayout">
                    <motion.img
                      key={activeIndex}
                      src={dishes[activeIndex].img}
                      alt={dishes[activeIndex].name}
                      className="absolute inset-0 w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 0.9, rotate: -45 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1, 
                        rotate: 360 
                      }}
                      exit={{ opacity: 0, scale: 1.1 }}
                      transition={{ 
                        opacity: { duration: 0.8 },
                        scale: { duration: 0.8, ease: "easeOut" },
                        rotate: { duration: 60, ease: "linear", repeat: Infinity } 
                      }}
                    />
                  </AnimatePresence>
                </div>
              </div>

              {/* Right Column: Interactive List */}
              <div className="w-full lg:w-[50%] flex flex-col justify-center">
                <div className="mb-8">
                  <span className="text-[#d49942] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase block mb-4">
                    Our Specialties
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                    Signature Dishes
                  </h2>
                  <p className="text-white/60 text-sm leading-relaxed max-w-md">
                    A taste of our most loved creations, prepared with authentic ingredients, traditional techniques, and our own signature touch.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  {dishes.map((dish, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                      <div 
                        key={dish.id}
                        onClick={() => setActiveIndex(idx)}
                        className={`group relative cursor-pointer py-4 pl-4 transition-all duration-500 border-l-2 ${
                          isActive ? 'border-[#d49942] translate-x-2' : 'border-transparent hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-baseline gap-4 mb-2">
                          <span className={`text-xs font-bold ${isActive ? 'text-[#d49942]' : 'text-white/30'}`}>
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <h3 className={`text-lg md:text-xl font-serif transition-colors duration-500 ${
                            isActive ? 'text-white' : 'text-white/50 group-hover:text-white/80'
                          }`}>
                            {dish.name}
                          </h3>
                        </div>

                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <p className="text-[#a09e9a] text-sm leading-relaxed pl-8 max-w-md pb-2">
                                {dish.desc}
                              </p>
                              <div className="ml-8 mt-2 h-[2px] w-full max-w-[200px] bg-white/10 overflow-hidden rounded-full">
                                <motion.div 
                                  className="h-full bg-[#d49942]"
                                  initial={{ width: "0%" }}
                                  animate={{ width: "100%" }}
                                  transition={{ 
                                    duration: 4, 
                                    ease: "linear",
                                    // Reset animation strictly when this dish becomes active
                                    repeat: 0
                                  }}
                                />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-12 pl-4">
                  <button className="group flex items-center justify-center gap-3 bg-[#d49942] text-[#021f22] px-8 py-4 text-xs font-bold tracking-[0.15em] uppercase rounded-sm hover:bg-[#e2b15b] transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(212,153,66,0.3)]">
                    Order Now
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 3: Reserve Your Table */}
        <section className="relative w-full min-h-[850px] lg:h-screen lg:max-h-[900px] flex items-center overflow-hidden py-16 bg-[#061113]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img 
              src="/third.webp" 
              alt="Restaurant Interior" 
              className="w-full h-full object-cover object-left md:object-center"
            />
            {/* Top fade transition from the previous section */}
            <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10" />
          </div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row h-full items-center">
              
              {/* Left Spacer (45%) to let the beautiful interior show */}
              <div className="hidden lg:block lg:w-[45%]" />

              {/* Right Content (55%) */}
              <div className="w-full lg:w-[55%] flex flex-col pt-8 lg:pt-0 lg:pl-16">
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-[#d49942] text-[10px] font-bold tracking-[0.3em] uppercase block mb-3">
                    Join Us
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4">
                    Reserve Your Table
                  </h2>
                  <p className="text-white/60 text-sm leading-relaxed max-w-[500px] mb-8">
                    Make your next meal a memorable one. Reserve your table and experience authentic flavours, warm hospitality, and an unforgettable dining experience.
                  </p>
                </motion.div>

                {bookingStatus === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-10 flex flex-col items-center justify-center text-center max-w-[500px]"
                  >
                    <CheckCircle className="text-[#d49942] w-16 h-16 mb-6" />
                    <h3 className="text-3xl font-serif text-white mb-4">Table Reserved</h3>
                    <p className="text-white/60">Thank you. Your reservation request has been received. We'll see you soon.</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    onSubmit={handleBooking}
                    className="flex flex-col gap-4 max-w-[550px]"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <label className="text-white/60 text-[10px] uppercase tracking-wider mb-1.5">Full Name</label>
                        <input required type="text" value={bookingData.name} onChange={(e) => setBookingData({...bookingData, name: e.target.value})} className="bg-white/5 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#d49942] transition-colors" placeholder="John Doe" />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-white/60 text-[10px] uppercase tracking-wider mb-1.5">Phone Number</label>
                        <input required type="tel" value={bookingData.phone} onChange={(e) => setBookingData({...bookingData, phone: e.target.value})} className="bg-white/5 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#d49942] transition-colors" placeholder="+91 XXXXX XXXXX" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <label className="text-white/60 text-[10px] uppercase tracking-wider mb-1.5">Date</label>
                        <input required type="date" value={bookingData.date} onChange={(e) => setBookingData({...bookingData, date: e.target.value})} className="bg-white/5 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d49942] transition-colors [color-scheme:dark]" />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-white/60 text-[10px] uppercase tracking-wider mb-1.5">Time</label>
                        <input required type="time" value={bookingData.time} onChange={(e) => setBookingData({...bookingData, time: e.target.value})} className="bg-white/5 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d49942] transition-colors [color-scheme:dark]" />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label className="text-white/60 text-[10px] uppercase tracking-wider mb-1.5">Guests</label>
                      <select value={bookingData.guests} onChange={(e) => setBookingData({...bookingData, guests: e.target.value})} className="bg-white/5 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d49942] transition-colors appearance-none cursor-pointer">
                        <option value="1 Guest">1 Guest</option>
                        <option value="2 Guests">2 Guests</option>
                        <option value="3 Guests">3 Guests</option>
                        <option value="4 Guests">4 Guests</option>
                        <option value="5+ Guests">5+ Guests</option>
                      </select>
                    </div>

                    <div className="flex flex-col">
                      <label className="text-white/60 text-[10px] uppercase tracking-wider mb-1.5">Special Request (Optional)</label>
                      <textarea rows={1} value={bookingData.request} onChange={(e) => setBookingData({...bookingData, request: e.target.value})} className="bg-white/5 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#d49942] transition-colors resize-none" placeholder="Any dietary requirements?"></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={bookingStatus === 'submitting'}
                      className="group flex items-center justify-center gap-3 bg-[#d49942] text-[#021f22] px-8 py-3 text-xs font-bold tracking-[0.15em] uppercase rounded-md hover:bg-[#e2b15b] transition-all hover:-translate-y-1 mt-2 disabled:opacity-70 disabled:hover:translate-y-0 shadow-lg shadow-[#d49942]/20"
                    >
                      {bookingStatus === 'submitting' ? 'Processing...' : 'Reserve Table'}
                      {bookingStatus !== 'submitting' && <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
                    </button>
                  </motion.form>
                )}

                {/* Contact Area */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[550px]"
                >
                  <div>
                    <h4 className="text-white/80 text-[9px] font-bold tracking-[0.2em] uppercase mb-4">Visit Us</h4>
                    <div className="flex flex-col gap-3 text-white/60 text-[13px]">
                      <div className="flex items-start gap-3">
                        <MapPin size={16} className="text-[#d49942] mt-0.5 shrink-0" />
                        <span>Mistory Family Restaurant<br/>Devanahalli, Southegowdanahalli,<br/>Karnataka 562110</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone size={16} className="text-[#d49942] shrink-0" />
                        <span>+91 97433 99992</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail size={16} className="text-[#d49942] shrink-0" />
                        <span>hello@mgroups.in</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white/80 text-[9px] font-bold tracking-[0.2em] uppercase mb-4">Opening Hours</h4>
                    <div className="flex flex-col gap-3 text-white/60 text-[13px] mb-4">
                      <div className="flex items-start gap-2">
                        <Clock size={14} className="text-[#d49942] mt-0.5 shrink-0" />
                        <span>Monday – Sunday<br/>11:00 AM – 11:00 PM</span>
                      </div>
                    </div>
                    <button className="flex items-center justify-center gap-2 text-[10px] font-bold tracking-widest uppercase text-white/80 hover:text-[#d49942] transition-colors border border-white/20 hover:border-[#d49942] rounded-full px-4 py-2 w-full">
                      Get Directions <ArrowRight size={12} />
                    </button>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};
