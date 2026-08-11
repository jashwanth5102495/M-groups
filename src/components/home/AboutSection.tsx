import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          {/* Left Column - Large Typography */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                MORE THAN <br /> A GROUP. <br />
                <span className="text-secondary/40 italic">A VISION IN MOTION.</span>
              </h2>
            </motion.div>
          </div>

          {/* Right Column - Description and Line */}
          <div className="w-full md:w-1/2 flex gap-8">
            <motion.div 
              className="w-[2px] bg-accent hidden md:block"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="pt-2"
            >
              <p className="text-secondary/70 text-lg leading-relaxed mb-8 max-w-lg">
                M Groups represents a convergence of excellence across hospitality, construction, manufacturing, agriculture, and real estate. We don't just build businesses; we curate experiences, engineer structures, and cultivate growth that leaves a lasting legacy.
              </p>
              <p className="text-secondary/70 text-lg leading-relaxed max-w-lg">
                With a commitment to premium quality and sophisticated design, every venture under the M Groups umbrella is unified by a singular vision: to elevate industry standards and build a better tomorrow.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
