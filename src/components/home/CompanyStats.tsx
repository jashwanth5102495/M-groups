import { motion } from 'framer-motion';

export const CompanyStats = () => {
  const stats = [
    { value: '07', label: 'DIVERSE INDUSTRIES' },
    { value: 'M', label: 'PREMIUM QUALITY' },
    { value: '100%', label: 'VISION DRIVEN' },
  ];

  return (
    <section className="py-24 bg-accent relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:20px_20px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-white/20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="pt-12 md:pt-0 md:px-12 first:md:pl-0 last:md:pr-0 flex flex-col items-center md:items-start"
            >
              <h4 className="text-6xl md:text-7xl font-serif text-white mb-4">
                {stat.value}
              </h4>
              <p className="text-white/80 text-xs tracking-[0.2em] uppercase font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
