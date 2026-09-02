import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/content';

const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        
        <div className="flex items-center mb-16">
          <span className="text-blue-400 font-mono text-xl mr-4 tracking-widest">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Education Details</h2>
          <div className="ml-6 h-[1px] bg-slate-700/50 flex-grow max-w-xs"></div>
        </div>

        <div className="relative pl-8 md:pl-0">
          {/* Main Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-400 via-indigo-400 to-transparent transform md:-translate-x-1/2"></div>
          
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
                <div className="absolute left-[-32px] md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-slate-800/80/40 border-4 border-blue-500 shadow-glow z-10"></div>
                
                {/* Content Card */}
                <div className={`w-full md:w-5/12 glass-panel p-8 rounded-3xl border border-white/10 shadow-glass hover:shadow-glow transition-shadow group relative overflow-hidden`}>
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br from-blue-500/30 to-indigo-500/30 rounded-full blur-2xl opacity-50"></div>
                  
                  <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs font-bold font-mono mb-4 border border-blue-500/30">
                    {edu.period}
                  </span>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-gray-300 font-medium mb-1">{edu.institution}</p>
                  <p className="text-gray-400 text-sm mb-6 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    {edu.location}
                  </p>
                  
                  {edu.cgpa && (
                    <div className="bg-slate-900/40 rounded-xl p-4 border border-white/5 flex flex-col">
                      <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">{edu.cgpaLabel}</span>
                      <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
                        {edu.cgpa}
                      </span>
                    </div>
                  )}
                  
                  {edu.percentage && (
                    <div className="bg-slate-900/40 rounded-xl p-4 border border-white/5 flex flex-col">
                      <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">{edu.percentageLabel}</span>
                      <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
                        {edu.percentage}
                      </span>
                    </div>
                  )}
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
