import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/content';

const Languages = () => {
  return (
    <section id="languages" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3 font-bold">System Protocols</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Linguistics</h2>
        </div>

        {portfolioData.languages && portfolioData.languages.length > 0 ? (
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
                  className="w-24 h-24 rounded-full border border-white/10 glass-panel shadow-glow flex items-center justify-center mb-4 relative preserve-3d bg-slate-900/20"
                >
                  <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-500 animate-spin-slow" style={{ animationDuration: `${(110 - lang.progress) / 10}s` }}></div>
                  <div className="absolute inset-2 rounded-full border border-transparent border-b-indigo-500 animate-spin-reverse-slow" style={{ animationDuration: `${(110 - lang.progress) / 8}s` }}></div>
                  
                  <span className="font-mono text-xl font-bold text-gray-200 group-hover:text-blue-400 transition-colors z-10">{lang.name.substring(0,2).toUpperCase()}</span>
                </motion.div>
                
                <h4 className="text-lg font-bold text-white mb-1">{lang.name}</h4>
                <p className="text-xs font-mono font-bold text-blue-400">{lang.level}</p>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="w-full max-w-lg mx-auto glass-panel rounded-3xl p-8 text-center border border-white/10 shadow-glow">
            <p className="text-gray-400 font-medium">Waiting for language data...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Languages;
