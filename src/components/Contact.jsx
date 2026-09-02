import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { portfolioData } from '../data/content';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all fields.');
      setStatus('error');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    setStatus('transmitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to transmit data');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
      setErrorMessage('TRANSMISSION FAILED â€” PLEASE TRY AGAIN');
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blue-400 font-mono text-sm mb-3 tracking-widest uppercase font-bold"
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
            className="w-full lg:w-5/12 glass-panel bg-slate-900/40 p-8 md:p-10 rounded-3xl border border-white/10 shadow-glass relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent rounded-3xl pointer-events-none opacity-50"></div>
            
            <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Node Data</h3>
            
            <div className="space-y-6 relative z-10">
              <a href={`mailto:${portfolioData.personal.email}`} className="flex items-center group">
                <div className="w-14 h-14 rounded-2xl bg-slate-800/80/40 border border-white/5 shadow-glow flex items-center justify-center mr-5 group-hover:border-blue-300 transition-colors">
                  <FaEnvelope className="text-blue-400 text-xl" />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1 font-bold">Email</p>
                  <p className="text-gray-200 font-medium group-hover:text-blue-300 transition-colors">{portfolioData.personal.email}</p>
                </div>
              </a>

              {portfolioData.personal.phone && (
                <a href={`tel:${portfolioData.personal.phone}`} className="flex items-center group">
                  <div className="w-14 h-14 rounded-2xl bg-slate-800/80/40 border border-white/5 shadow-glow flex items-center justify-center mr-5 group-hover:border-blue-300 transition-colors">
                    <FaPhone className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1 font-bold">Comm Link</p>
                    <p className="text-gray-200 font-medium group-hover:text-blue-300 transition-colors">{portfolioData.personal.phone}</p>
                  </div>
                </a>
              )}

              <div className="flex items-center">
                <div className="w-14 h-14 rounded-2xl bg-slate-800/80/40 border border-white/5 shadow-glow flex items-center justify-center mr-5">
                  <FaMapMarkerAlt className="text-blue-400 text-xl" />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1 font-bold">Coordinates</p>
                  <p className="text-gray-200 font-medium">{portfolioData.personal.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex gap-4 relative z-10">
              <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-slate-800/80/40 shadow-glow flex items-center justify-center hover:bg-blue-900/30 hover:text-blue-400 transition-colors text-gray-300 border border-white/5">
                <FaGithub size={22} />
              </a>
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-slate-800/80/40 shadow-glow flex items-center justify-center hover:bg-blue-900/30 hover:text-blue-400 transition-colors text-gray-300 border border-white/5">
                <FaLinkedin size={22} />
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
            <form onSubmit={handleSubmit} className="glass-panel bg-slate-900/40 p-8 md:p-10 rounded-3xl border border-white/10 shadow-glass h-full flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 font-bold">Identifier (Name)</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-800/80/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 transition-all shadow-glow"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 font-bold">Return Address (Email)</label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-800/80/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 transition-all shadow-glow"
                  />
                </div>
              </div>
              
              <div className="mb-8 flex-grow">
                <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 font-bold">Payload (Message)</label>
                <textarea 
                  required 
                  rows="5"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full h-full bg-slate-800/80/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 transition-all shadow-glow resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'transmitting'}
                className="w-full gradient-btn rounded-xl px-8 py-4 text-center font-mono text-sm tracking-widest uppercase text-white shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 font-bold">
                  {status === 'transmitting' ? 'TRANSMITTING...' : 'TRANSMIT MESSAGE'}
                </span>
                <div className="absolute inset-0 bg-blue-500 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0"></div>
              </button>

              {status === 'success' && (
                <div className="mt-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-center">
                  <p className="text-green-400 text-sm font-mono font-bold">
                    MESSAGE TRANSMITTED SUCCESSFULLY âœ“
                  </p>
                </div>
              )}

              {status === 'error' && (
                <div className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-center">
                  <p className="text-red-400 text-sm font-mono font-bold">
                    {errorMessage || 'TRANSMISSION FAILED â€” PLEASE TRY AGAIN'}
                  </p>
                </div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;



