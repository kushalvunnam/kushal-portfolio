import React from 'react';
import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa';
import { portfolioData } from '../data/content';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-purple-200 rounded-full mix-blend-multiply filter blur-[150px] pointer-events-none opacity-50"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <div className="flex items-center mb-16">
          <span className="text-cyan-600 font-mono text-xl mr-4 tracking-widest">05.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">Credentials</h2>
          <div className="ml-6 h-[1px] bg-slate-200 flex-grow max-w-sm"></div>
        </div>

        {portfolioData.certifications && portfolioData.certifications.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, rotateX: 5 }}
                className="glass-panel p-8 rounded-3xl border border-white shadow-lg hover:shadow-2xl transition-shadow group relative overflow-hidden bg-white/60"
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-cyan-100 rounded-full blur-2xl group-hover:bg-cyan-200 transition-colors"></div>
                
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-6 relative z-10">
                  <FaAward className="text-2xl text-purple-500 group-hover:text-cyan-500 transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-2 leading-snug relative z-10">{cert.title}</h3>
                <p className="text-sm text-slate-500 font-medium mb-4 relative z-10">{cert.issuer}</p>
                
                <div className="mt-auto pt-5 border-t border-slate-200 relative z-10">
                  <span className="font-mono text-xs font-bold text-cyan-700 bg-cyan-50 px-3 py-1.5 rounded-full border border-cyan-100">
                    ISSUED {cert.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="w-full glass-panel rounded-3xl p-12 text-center border border-white shadow-md">
            <p className="text-slate-500 font-medium">Waiting for certifications data...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
