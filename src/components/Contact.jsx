import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { portfolioData } from '../data/content';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
        
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#55c7ff] font-mono text-sm mb-3 tracking-widest uppercase font-bold"
          >
            06. Communication Protocol
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Initiate Contact
          </motion.h2>
        </div>

        <div className="flex flex-col items-center justify-center">
          
          {/* Node Data Terminal */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-2xl glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-[0_0_40px_rgba(85,199,255,0.1)] border border-white/10 bg-[#0a1128]/60 backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#087cff]/20 via-transparent to-[#9b7cff]/10 rounded-3xl pointer-events-none opacity-60"></div>
            
            <h3 className="text-3xl font-bold text-white mb-10 relative z-10 text-center">Node Data</h3>
            
            <div className="space-y-8 relative z-10">
              <a href={`mailto:${portfolioData.personal.email}`} className="flex items-center group bg-[rgba(20,55,110,0.3)] p-4 rounded-2xl border border-white/5 hover:border-[#55c7ff]/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-[rgba(20,55,110,0.6)] border border-[#55c7ff]/20 shadow-glow flex items-center justify-center mr-6 group-hover:bg-[#55c7ff]/20 transition-colors shrink-0">
                  <FaEnvelope className="text-[#55c7ff] text-2xl group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[#9b7cff] uppercase tracking-widest mb-1 font-bold">Email</p>
                  <p className="text-gray-200 font-medium text-lg md:text-xl group-hover:text-white transition-colors">{portfolioData.personal.email}</p>
                </div>
              </a>

              {portfolioData.personal.phone && (
                <a href={`tel:${portfolioData.personal.phone}`} className="flex items-center group bg-[rgba(20,55,110,0.3)] p-4 rounded-2xl border border-white/5 hover:border-[#55c7ff]/30 transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-[rgba(20,55,110,0.6)] border border-[#55c7ff]/20 shadow-glow flex items-center justify-center mr-6 group-hover:bg-[#55c7ff]/20 transition-colors shrink-0">
                    <FaPhone className="text-[#55c7ff] text-2xl group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-[#9b7cff] uppercase tracking-widest mb-1 font-bold">Comm Link</p>
                    <p className="text-gray-200 font-medium text-lg md:text-xl group-hover:text-white transition-colors">{portfolioData.personal.phone}</p>
                  </div>
                </a>
              )}

              <div className="flex items-center bg-[rgba(20,55,110,0.3)] p-4 rounded-2xl border border-white/5 hover:border-[#55c7ff]/30 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-2xl bg-[rgba(20,55,110,0.6)] border border-[#55c7ff]/20 shadow-glow flex items-center justify-center mr-6 group-hover:bg-[#55c7ff]/20 transition-colors shrink-0">
                  <FaMapMarkerAlt className="text-[#55c7ff] text-2xl group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[#9b7cff] uppercase tracking-widest mb-1 font-bold">Coordinates</p>
                  <p className="text-gray-200 font-medium text-lg md:text-xl group-hover:text-white transition-colors">{portfolioData.personal.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex justify-center gap-6 relative z-10">
              <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-[rgba(20,55,110,0.6)] shadow-glow flex items-center justify-center hover:bg-[#55c7ff]/20 hover:text-[#55c7ff] transition-all duration-300 text-gray-300 border border-white/10 hover:scale-110">
                <FaGithub size={26} />
              </a>
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-[rgba(20,55,110,0.6)] shadow-glow flex items-center justify-center hover:bg-[#55c7ff]/20 hover:text-[#55c7ff] transition-all duration-300 text-gray-300 border border-white/10 hover:scale-110">
                <FaLinkedin size={26} />
              </a>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
