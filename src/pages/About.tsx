import { motion } from 'framer-motion';
import { PageTransition } from '../components/ui/PageTransition';

export const About = () => {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-48 pb-24 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-8xl font-serif leading-tight text-secondary mb-8">
              A VISION IN <span className="text-accent italic">MOTION.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-[#050505] border-t border-[#111]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <img 
                src="/assets/images/founder-portrait.png" 
                alt="Founder" 
                className="w-full aspect-[3/4] object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.classList.add('bg-[#111]');
                }}
              />
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-xs tracking-[0.2em] text-accent uppercase font-medium mb-4 block">
                The Vision Behind M Groups
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-8">
                Leadership
              </h2>
              <div className="w-12 h-[2px] bg-accent mb-8" />
              <p className="text-lg text-secondary/70 leading-relaxed mb-6 font-light">
                Founder & Director
              </p>
              <p className="text-secondary/60 leading-relaxed mb-8">
                [Founder biography placeholder. Please provide the details of the founder's vision, history, and achievements to complete this section.]
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
