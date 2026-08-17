import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { businesses } from '../../data/businesses';

const leftLinks = [
  { name: 'BUSINESSES', path: '/businesses', hasDropdown: true },
  { name: 'ABOUT US', path: '/about' },
  { name: 'CONTACT US', path: '/contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLight = (location.pathname === '/businesses/m-farms' || location.pathname === '/businesses/m-interiors' || location.pathname === '/businesses/m-real-estate' || location.pathname === '/m-real-estate') && !isScrolled;
  const textColor = isLight ? 'text-black' : 'text-white/90';
  const textHover = isLight ? 'hover:text-[#c69a53]' : 'hover:text-white';
  const logoText = isLight ? 'text-black' : 'text-white';
  const borderColor = isLight ? 'border-black/50 hover:border-[#c69a53] text-black hover:text-[#c69a53]' : 'border-white/50 hover:border-accent text-white hover:text-white hover:bg-accent';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isMobileMenuOpen
            ? 'bg-transparent py-4'
            : isScrolled 
              ? 'bg-[#020202]/80 backdrop-blur-md border-b border-white/10 py-4' 
              : 'bg-transparent py-6'
        }`}
      >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Desktop Left Nav */}
        <nav className="hidden md:flex items-center space-x-8 w-1/3 h-full">
          {leftLinks.map((link) => (
            <div key={link.name} className="relative group/navItem h-full flex items-center py-2">
              <Link
                to={link.path}
                className={`relative flex items-center gap-1 text-[12px] lg:text-[13px] tracking-[0.06em] font-medium transition-colors group/link ${textColor} ${textHover}`}
                data-hoverable
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={14} className="opacity-70 group-hover/link:opacity-100 transition-opacity" />}
                <span
                  className={`absolute -bottom-1.5 left-0 h-[2px] bg-accent transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover/link:w-full'
                  }`}
                />
              </Link>
              
              {link.hasDropdown && (
                <div className="absolute top-full left-0 pt-6 opacity-0 invisible group-hover/navItem:opacity-100 group-hover/navItem:visible transition-all duration-300 w-[240px]">
                  <div className="bg-[#050505] border border-white/10 shadow-2xl flex flex-col py-4">
                    {businesses.map((business) => (
                      business.route.startsWith('http') ? (
                        <a
                          key={business.id}
                          href={business.route}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2.5 text-white/60 hover:text-white hover:bg-white/5 text-[11px] tracking-[0.15em] uppercase transition-all flex items-center gap-2 group/dropdownLink"
                        >
                          <span className="w-0 h-[1px] bg-accent transition-all duration-300 group-hover/dropdownLink:w-3"></span>
                          {business.name}
                        </a>
                      ) : (
                        <Link
                          key={business.id}
                          to={business.route}
                          className="px-6 py-2.5 text-white/60 hover:text-white hover:bg-white/5 text-[11px] tracking-[0.15em] uppercase transition-all flex items-center gap-2 group/dropdownLink"
                          data-hoverable
                        >
                          <span className="w-0 h-[1px] bg-accent transition-all duration-300 group-hover/dropdownLink:w-3"></span>
                          {business.name}
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Center Logo */}
        <div className="flex justify-start md:justify-center w-auto md:w-1/3">
          <Link to="/" className="font-serif tracking-widest z-50 flex items-center gap-1" data-hoverable>
            <span className="text-accent font-medium text-3xl lg:text-4xl">M</span>
            <span className={`${logoText} tracking-[0.15em] uppercase text-xl lg:text-2xl mt-1`}>Groups</span>
          </Link>
        </div>

        {/* Desktop Right Nav (CTA) */}
        <div className="hidden md:flex items-center justify-end w-1/3">
          <Link
            to="/contact"
            className={`px-6 py-2.5 border text-[12px] tracking-[0.06em] font-medium uppercase transition-all duration-300 rounded-[2px] ${borderColor}`}
            data-hoverable
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
        </button>

        {/* Mobile Menu logic moved outside header */}
      </div>
    </header>

    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 bg-[#050505] z-40 flex flex-col items-center justify-center space-y-8 h-[100dvh] w-full"
        >
          {[...leftLinks].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-serif tracking-widest ${
                location.pathname === link.path ? 'text-accent' : 'text-white/90'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 px-8 py-3 border border-white/50 text-white tracking-widest uppercase transition-colors hover:bg-accent hover:border-accent rounded-[2px]"
          >
            Get in Touch
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};
