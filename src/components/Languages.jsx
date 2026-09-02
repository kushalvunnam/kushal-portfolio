import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/content';

const Languages = () => {
  return (
    <section id="languages" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-cyan-neon font-mono text-sm tracking-widest uppercase mb-3">System Protocols</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Linguistics</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {portfolioData.languages.map((lang, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
              className="flex flex-col items-center group perspective-[500px]"
            >
              {/* 3D Indicator */}
              <motion.div 
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
                className="w-24 h-24 rounded-full border border-white/10 glass-panel flex items-center justify-center mb-4 relative preserve-3d"
              >
                <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-neon animate-spin-slow" style={{ animationDuration: `${(110 - lang.progress) / 10}s` }}></div>
                <div className="absolute inset-2 rounded-full border border-transparent border-b-purple-neon animate-spin-reverse-slow" style={{ animationDuration: `${(110 - lang.progress) / 8}s` }}></div>
                
                <span className="font-mono text-xl font-bold text-white group-hover:text-cyan-neon transition-colors z-10">{lang.name.substring(0,2).toUpperCase()}</span>
              </motion.div>
              
              <h4 className="text-lg font-bold text-white mb-1">{lang.name}</h4>
              <p className="text-xs font-mono text-cyan-neon">{lang.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
