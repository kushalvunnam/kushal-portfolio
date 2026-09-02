import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center">
            <span className="text-accent font-mono text-xl mr-3">04.</span> 
            Experience & Practical Work
            <div className="ml-6 h-[1px] bg-white/10 flex-grow max-w-xs"></div>
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative border-l border-white/20 ml-3 md:ml-6 pl-10 py-6"
        >
          <div className="absolute -left-[5px] top-8 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_10px_#3b82f6]"></div>
          
          <div className="glass-panel p-8 rounded-xl border border-white/5 hover:border-accent/30 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">Full-Stack Development Projects</h3>
            <p className="text-accent font-mono text-sm mb-6">Self-Directed & Practical Application</p>
            
            <p className="text-gray-300 leading-relaxed font-light text-lg">
              Hands-on development of real-world web applications involving frontend interfaces, backend APIs, databases, authentication, CRUD operations, debugging, and deployment.
            </p>
            
            <ul className="mt-6 space-y-3">
               <li className="flex items-start text-gray-400 font-light">
                 <span className="text-accent mr-3 mt-1">▹</span>
                 Architected backend services using Node.js and Express to handle data processing and API communication.
               </li>
               <li className="flex items-start text-gray-400 font-light">
                 <span className="text-accent mr-3 mt-1">▹</span>
                 Designed MongoDB schemas and managed database operations with Mongoose.
               </li>
               <li className="flex items-start text-gray-400 font-light">
                 <span className="text-accent mr-3 mt-1">▹</span>
                 Developed responsive, interactive frontend dashboards using React and modern CSS frameworks.
               </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
