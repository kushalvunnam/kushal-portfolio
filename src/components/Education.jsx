import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/content';

const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
        
        <div className="flex items-center mb-16">
          <span className="text-cyan-neon font-mono text-xl mr-4 tracking-widest">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Education Timeline</h2>
          <div className="ml-6 h-[1px] bg-white/10 flex-grow max-w-xs"></div>
        </div>

        <div className="relative pl-8 md:pl-0">
          {/* Main Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-neon/50 via-purple-neon/50 to-transparent transform md:-translate-x-1/2"></div>
          
          <div className="space-y-16">
            {portfolioData.education.map((edu, index) => (
              <motion.div 
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
              >
                {/* Node */}
                <div className="absolute left-[-32px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-space-900 border-2 border-cyan-neon shadow-neon-cyan z-10"></div>
                
                {/* Content Card */}
                <div className={`w-full md:w-5/12 glass-panel p-6 rounded-2xl border border-white/5 hover:border-cyan-dim transition-colors group`}>
                  <p className="font-mono text-cyan-neon text-xs mb-2 group-hover:text-purple-400 transition-colors">{edu.period}</p>
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-gray-400 font-light text-sm">{edu.institution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
