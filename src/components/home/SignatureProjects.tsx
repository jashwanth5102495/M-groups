import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from '../../data/projects';
import { Link } from 'react-router-dom';

export const SignatureProjects = () => {
  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <span className="text-xs tracking-[0.2em] text-accent uppercase font-medium mb-4 block">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary">
              SIGNATURE PROJECTS
            </h2>
          </div>
          <Link 
            to="/projects"
            className="flex items-center gap-2 text-sm tracking-wider text-secondary/60 hover:text-secondary transition-colors"
            data-hoverable
          >
            VIEW ALL PROJECTS <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Horizontal Scroll Area for Projects */}
      <div className="w-full overflow-x-auto pb-12 hide-scrollbar">
        <div className="flex gap-8 px-6 md:px-12 w-max">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-[85vw] md:w-[600px] group cursor-pointer"
              data-hoverable
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-0" />
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-serif text-secondary mb-2 group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-3 text-xs tracking-widest text-secondary/50 uppercase">
                    <span>{project.division}</span>
                    <span className="w-1 h-1 bg-secondary/30 rounded-full" />
                    <span>{project.location}</span>
                  </div>
                </div>
                <div className="bg-secondary/10 border border-secondary/20 px-3 py-1 text-[10px] uppercase tracking-wider text-secondary">
                  {project.status}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
