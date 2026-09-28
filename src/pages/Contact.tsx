// M Groups Contact Page - Interactive Form & WhatsApp Integration (+91 97433 99992)
import { useState, FormEvent } from 'react';
import { PageTransition } from '../components/ui/PageTransition';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } as any }
};

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'M Real Estate',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const whatsappNumber = '919743399992';
    
    const formattedMessage = `Hello M Groups! I would like to get in touch.

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || 'N/A'}
*Business Interest:* ${formData.interest}
*Message:* ${formData.message || 'No additional message.'}`;

    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <PageTransition>
      <div className="bg-[#050505] text-[#f5f5f5] min-h-screen pt-32 pb-24 font-sans selection:bg-accent selection:text-white">
        <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mb-16"
          >
            <span className="text-[11px] font-bold tracking-[0.25em] text-accent uppercase block mb-4 border border-accent/30 px-3.5 py-1.5 rounded-full w-max">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.08] tracking-tight">
              LET'S BUILD SOMETHING <br />
              <span className="text-accent italic font-serif">EXTRAORDINARY.</span>
            </h1>
          </motion.div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Direct Contact Info & WhatsApp CTA */}
            <motion.div 
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="lg:col-span-5 space-y-8"
            >
              <div className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl space-y-8">
                <div>
                  <h3 className="text-2xl font-serif text-white mb-2">Connect With Us</h3>
                  <p className="text-white/60 text-sm leading-relaxed font-light">
                    Have a vision or project in mind? Reach out to our leadership team directly via phone, email, or WhatsApp.
                  </p>
                </div>

                <div className="space-y-6 pt-4 border-t border-white/10">
                  {/* Phone */}
                  <a 
                    href="tel:+919743399992" 
                    className="flex items-center gap-4 group p-3 -mx-3 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold tracking-[0.15em] text-white/40 uppercase block">Phone / WhatsApp</span>
                      <span className="text-white font-medium text-base group-hover:text-accent transition-colors">+91 97433 99992</span>
                    </div>
                  </a>

                  {/* Direct WhatsApp Link */}
                  <a 
                    href="https://wa.me/919743399992" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-4 group p-3 -mx-3 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 group-hover:scale-105 transition-transform">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold tracking-[0.15em] text-white/40 uppercase block">WhatsApp Direct</span>
                      <span className="text-white font-medium text-base group-hover:text-green-400 transition-colors">Chat on WhatsApp</span>
                    </div>
                  </a>

                  {/* Email */}
                  <a 
                    href="mailto:contact@mgroups.in" 
                    className="flex items-center gap-4 group p-3 -mx-3 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold tracking-[0.15em] text-white/40 uppercase block">Email</span>
                      <span className="text-white font-medium text-base group-hover:text-accent transition-colors">contact@mgroups.in</span>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 p-3 -mx-3">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold tracking-[0.15em] text-white/40 uppercase block">Corporate Headquarters</span>
                      <span className="text-white font-medium text-sm">M Groups Corporate Office</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div 
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="lg:col-span-7"
            >
              <form 
                onSubmit={handleSubmit}
                className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl space-y-6 relative overflow-hidden"
              >
                <div>
                  <h3 className="text-2xl font-serif text-white mb-2">Send Us A Message</h3>
                  <p className="text-white/50 text-sm font-light">
                    Fill out the details below. Submitting this form will automatically prepare and open your message in WhatsApp.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold tracking-[0.15em] text-white/70 uppercase mb-2">
                    Full Name <span className="text-accent">*</span>
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name" 
                    className="w-full bg-[#121212] border border-white/15 focus:border-accent text-white rounded-xl px-5 py-4 outline-none transition-all font-sans text-sm focus:ring-1 focus:ring-accent"
                  />
                </div>

                {/* Grid for Phone & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold tracking-[0.15em] text-white/70 uppercase mb-2">
                      Phone Number <span className="text-accent">*</span>
                    </label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210" 
                      className="w-full bg-[#121212] border border-white/15 focus:border-accent text-white rounded-xl px-5 py-4 outline-none transition-all font-sans text-sm focus:ring-1 focus:ring-accent"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold tracking-[0.15em] text-white/70 uppercase mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com" 
                      className="w-full bg-[#121212] border border-white/15 focus:border-accent text-white rounded-xl px-5 py-4 outline-none transition-all font-sans text-sm focus:ring-1 focus:ring-accent"
                    />
                  </div>
                </div>

                {/* Business Division Interest */}
                <div>
                  <label className="block text-xs font-bold tracking-[0.15em] text-white/70 uppercase mb-2">
                    Business Interest <span className="text-accent">*</span>
                  </label>
                  <select 
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-[#121212] border border-white/15 focus:border-accent text-white rounded-xl px-5 py-4 outline-none transition-all font-sans text-sm focus:ring-1 focus:ring-accent cursor-pointer"
                  >
                    <option value="M Real Estate">M Real Estate & Construction</option>
                    <option value="M Interiors">M Interiors & Design</option>
                    <option value="M Farms">M Farms & Agriculture</option>
                    <option value="MG Block">MG Block</option>
                    <option value="Mystery Roster Cafe">Mystery Roster Café & Hospitality</option>
                    <option value="Mystery Family Restaurant">Mystery Family Restaurant</option>
                    <option value="General Inquiry">General Partnership / Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold tracking-[0.15em] text-white/70 uppercase mb-2">
                    Your Message / Requirement
                  </label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your requirements or inquiry..." 
                    className="w-full bg-[#121212] border border-white/15 focus:border-accent text-white rounded-xl px-5 py-4 outline-none transition-all font-sans text-sm resize-none focus:ring-1 focus:ring-accent"
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full py-4 px-8 bg-accent hover:bg-accent-dark text-white font-medium text-xs sm:text-sm uppercase tracking-[0.2em] rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-accent/25 cursor-pointer hover:scale-[1.01]"
                >
                  <Send size={18} />
                  <span>Send Message via WhatsApp</span>
                </button>

                {submitted && (
                  <p className="text-xs text-green-400 text-center font-medium mt-2">
                    Opening WhatsApp with your filled details...
                  </p>
                )}
              </form>
            </motion.div>

          </div>

        </div>
      </div>
    </PageTransition>
  );
};
