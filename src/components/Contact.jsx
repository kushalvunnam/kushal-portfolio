import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { portfolioData } from '../data/content';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('transmitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-cyan-neon font-mono text-sm mb-3 tracking-widest uppercase"
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

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
          {/* Info Terminal */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-5/12 glass-panel p-8 md:p-10 rounded-3xl border border-white/5 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-neon/5 to-transparent rounded-3xl pointer-events-none"></div>
            
            <h3 className="text-2xl font-bold text-white mb-8">Node Data</h3>
            
            <div className="space-y-6">
              <a href={`mailto:${portfolioData.personal.email}`} className="flex items-center group">
                <div className="w-12 h-12 rounded-xl bg-space-800 border border-white/5 flex items-center justify-center mr-5 group-hover:border-cyan-neon/50 transition-colors">
                  <FaEnvelope className="text-cyan-neon" />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-gray-300 group-hover:text-white transition-colors">{portfolioData.personal.email}</p>
                </div>
              </a>

              <a href={`tel:${portfolioData.personal.phone}`} className="flex items-center group">
                <div className="w-12 h-12 rounded-xl bg-space-800 border border-white/5 flex items-center justify-center mr-5 group-hover:border-cyan-neon/50 transition-colors">
                  <FaPhone className="text-cyan-neon" />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">Comm Link</p>
                  <p className="text-gray-300 group-hover:text-white transition-colors">{portfolioData.personal.phone}</p>
                </div>
              </a>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-xl bg-space-800 border border-white/5 flex items-center justify-center mr-5">
                  <FaMapMarkerAlt className="text-cyan-neon" />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">Coordinates</p>
                  <p className="text-gray-300">{portfolioData.personal.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex gap-4">
              <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-cyan-neon transition-colors text-white">
                <FaGithub size={20} />
              </a>
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-cyan-neon transition-colors text-white">
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Form Terminal */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-7/12"
          >
            <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 h-full flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">Identifier (Name)</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-space-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-neon focus:bg-space-800 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">Return Address (Email)</label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-space-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-neon focus:bg-space-800 transition-colors"
                  />
                </div>
              </div>
              
              <div className="mb-8 flex-grow">
                <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">Payload (Message)</label>
                <textarea 
                  required 
                  rows="5"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full h-full bg-space-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-neon focus:bg-space-800 transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'transmitting'}
                className="w-full group relative overflow-hidden rounded-xl border border-cyan-neon bg-cyan-neon/10 px-8 py-4 text-center font-mono text-sm tracking-widest uppercase text-cyan-neon transition-all hover:bg-cyan-neon hover:text-space-900 hover:shadow-neon-cyan disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 font-bold">
                  {status === 'transmitting' ? 'Transmitting Data...' : 'Transmit Message'}
                </span>
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-xs font-mono mt-4 text-center animate-pulse">
                  &gt; transmission_successful. awaiting_response.
                </p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
