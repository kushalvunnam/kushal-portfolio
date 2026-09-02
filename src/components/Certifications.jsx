import React from 'react';
import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa';
import { portfolioData } from '../data/content';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-purple-neon/10 rounded-full mix-blend-screen filter blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <div className="flex items-center mb-16">
          <span className="text-cyan-neon font-mono text-xl mr-4 tracking-widest">05.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Credentials</h2>
          <div className="ml-6 h-[1px] bg-white/10 flex-grow max-w-sm"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, rotateX: 5 }}
              className="glass-panel p-8 rounded-2xl border border-white/5 shadow-glass group relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-cyan-neon/10 rounded-full blur-2xl group-hover:bg-cyan-neon/20 transition-colors"></div>
              
              <div className="w-12 h-12 rounded-full bg-space-800 border border-white/10 flex items-center justify-center mb-6">
                <FaAward className="text-xl text-purple-400 group-hover:text-cyan-neon transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 leading-snug">{cert.title}</h3>
              <p className="text-sm text-gray-400 font-light mb-4">{cert.issuer}</p>
              
              <div className="mt-auto pt-4 border-t border-white/10">
                <span className="font-mono text-xs text-cyan-neon bg-cyan-neon/10 px-2 py-1 rounded">
                  ISSUED {cert.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
