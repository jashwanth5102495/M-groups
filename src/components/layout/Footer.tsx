import { Link } from 'react-router-dom';
import { businesses } from '../../data/businesses';

export const Footer = () => {
  return (
    <footer className="bg-[#020202] pt-24 pb-12 border-t border-[#111]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-3xl font-serif tracking-widest flex items-center gap-1 mb-6">
              <span className="text-accent font-semibold text-4xl">M</span>
              <span className="text-secondary tracking-[0.2em] uppercase text-2xl">Groups</span>
            </Link>
            <p className="text-sm text-secondary/60 max-w-xs leading-relaxed">
              M Groups is a diversified business group creating value across industries and building a better tomorrow.
            </p>
          </div>

          {/* Navigation */}
          <div className="col-span-1">
            <h4 className="text-xs uppercase tracking-[0.2em] text-secondary/40 mb-8 font-medium">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Businesses', 'Projects', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-secondary/80 hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Businesses */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-secondary/40 mb-8 font-medium">Businesses</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {businesses.map((business) => (
                <li key={business.id}>
                  {business.route.startsWith('http') ? (
                    <a 
                      href={business.route}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary/80 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-4"></span>
                      {business.name}
                    </a>
                  ) : (
                    <Link 
                      to={business.route}
                      className="text-secondary/80 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-4"></span>
                      {business.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-[#111] flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-4xl md:text-5xl font-serif text-secondary/20">BUILDING LEGACIES.</h2>
          <p className="text-xs text-secondary/40 tracking-wider">
            © {new Date().getFullYear()} M GROUPS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};
