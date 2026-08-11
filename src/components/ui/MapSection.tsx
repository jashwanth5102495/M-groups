import { useState } from 'react';
import { ExternalLink, MapPin, Phone, Mail, Send } from 'lucide-react';

export const MapSection = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello M Groups, I have an enquiry.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919743399992?text=${encodedText}`, '_blank');
  };

  return (
    <section className="w-full bg-[#050505] py-12 md:py-16 px-4 md:px-8 flex justify-center">
      <div className="w-full max-w-[1050px] bg-[#0c0c0c] rounded-[24px] p-6 md:p-10 flex flex-col lg:flex-row justify-between gap-8 md:gap-12 shadow-2xl border border-white/5">
        
        {/* Left Content (Contact & Form) */}
        <div className="w-full lg:w-[48%] flex flex-col items-start">
          
          {/* Badge */}
          <div className="flex items-center px-3 py-1 rounded-full border border-[#1e3a8a] bg-[#1e3a8a]/20 mb-4">
            <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-[#3b82f6]">
              ✦ OUR HEADQUARTERS ✦
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-sans font-bold text-white leading-[1.1] tracking-tight mb-5">
            M GROUPS
          </h2>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full mb-6">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-1.5 text-white/90 font-semibold mb-0.5 text-sm">
                <MapPin size={14} className="text-[#3b82f6]" /> Address
              </div>
              <p className="text-[#a3a3a3] text-[13px] leading-relaxed">
                Devanahalli, Southegowdanahalli,<br />
                Devanahalli, Karnataka - 562110
              </p>
              <a 
                href="https://www.google.com/maps?q=Devanahalli,+Southegowdanahalli,+Devanahalli,+Karnataka+562110" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#3b82f6] hover:text-[#60a5fa] transition-colors text-[9px] font-bold tracking-[0.1em] uppercase mt-1"
              >
                OPEN IN MAPS <ExternalLink size={10} />
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-1.5 text-white/90 font-semibold mb-0.5 text-sm">
                  <Phone size={14} className="text-[#3b82f6]" /> Phone
                </div>
                <a href="tel:+919743399992" className="text-[#a3a3a3] text-[13px] hover:text-white transition-colors">
                  +91 97433 99992
                </a>
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-1.5 text-white/90 font-semibold mb-0.5 text-sm">
                  <Mail size={14} className="text-[#3b82f6]" /> Email
                </div>
                <a href="mailto:contact@mgroups.in" className="text-[#a3a3a3] text-[13px] hover:text-white transition-colors">
                  contact@mgroups.in
                </a>
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-white/10 mb-6" />

          {/* Enquiry Form */}
          <div className="w-full">
            <h3 className="text-lg font-bold text-white mb-4">Send an Enquiry</h3>
            <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-white/5 border border-white/10 rounded-md px-3 py-2 text-[13px] text-white placeholder:text-white/40 focus:outline-none focus:border-[#3b82f6] transition-colors"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="bg-white/5 border border-white/10 rounded-md px-3 py-2 text-[13px] text-white placeholder:text-white/40 focus:outline-none focus:border-[#3b82f6] transition-colors"
                />
              </div>
              <textarea 
                placeholder="How can we help you?" 
                required
                rows={2}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="bg-white/5 border border-white/10 rounded-md px-3 py-2 text-[13px] text-white placeholder:text-white/40 focus:outline-none focus:border-[#3b82f6] transition-colors resize-none"
              />
              <button 
                type="submit"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-2.5 rounded-md transition-colors mt-1 text-[13px]"
              >
                <Send size={14} /> Send via WhatsApp
              </button>
            </form>
          </div>

        </div>

        {/* Right Map */}
        <div className="w-full lg:w-[50%] min-h-[300px] lg:min-h-full rounded-[16px] overflow-hidden relative border border-white/10 flex-grow">
          <iframe
            src="https://www.google.com/maps?q=Devanahalli,+Southegowdanahalli,+Devanahalli,+Karnataka+562110&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '100%', position: 'absolute', inset: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full object-cover"
          ></iframe>
        </div>
        
      </div>
    </section>
  );
};
