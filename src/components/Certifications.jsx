import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import { portfolioData } from '../data/content';

const CertificateModal = ({ certificate, onClose }) => {
  if (!certificate) return null;

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-900/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-5xl bg-slate-800/80/40 rounded-3xl overflow-hidden shadow-glow flex flex-col max-h-[95vh] relative"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-800/80/50 text-gray-400 hover:text-white hover:bg-slate-700/80/50 rounded-full transition-colors z-20 shadow-glow"
          aria-label="Close preview"
        >
          <FaTimes size={18} />
        </button>
        
        {/* Certificate Image Area */}
        <div className="w-full bg-slate-800/80/50 relative overflow-hidden flex items-center justify-center p-4 min-h-[30vh] max-h-[60vh]">
          {certificate.certificateFile ? (
            <img 
              src={certificate.certificateFile} 
              alt={`${certificate.title} Certificate`} 
              className="max-w-full max-h-[55vh] object-contain shadow-glow rounded-md"
            />
          ) : (
            <div className="text-gray-500 font-mono border-2 border-dashed border-slate-300 p-8 rounded-2xl flex flex-col items-center">
               <FaAward className="text-4xl mb-2 opacity-50" />
               <span>No Document Available</span>
            </div>
          )}
        </div>
        
        {/* Certificate Details Area */}
        <div className="p-6 md:p-8 bg-slate-800/80/40 border-t border-white/5 flex-shrink-0">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <p className="font-mono text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">CERTIFICATE</p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">{certificate.title}</h3>
              <div className="flex flex-col gap-1">
                <p className="text-gray-300 font-medium">Issued by: <span className="font-bold text-white">{certificate.organization}</span></p>
                <p className="text-gray-400 font-medium text-sm">Issued: {certificate.issued}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
               {certificate.verificationUrl && (
                 <a 
                   href={certificate.verificationUrl} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 px-5 py-2.5 bg-slate-800/80/40 border border-blue-500 text-blue-400 font-bold rounded-xl hover:bg-blue-900/30 transition-colors shadow-glow"
                 >
                   <FaExternalLinkAlt size={12} /> Verify Certificate
                 </a>
               )}
               <button 
                 onClick={onClose}
                 className="px-6 py-2.5 bg-slate-800/80 text-white font-bold rounded-xl hover:bg-slate-700/80 transition-colors shadow-glow"
               >
                 Close
               </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-24 relative">
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-purple-200 rounded-full mix-blend-multiply filter blur-[150px] pointer-events-none opacity-50"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <div className="flex items-center mb-16">
          <span className="text-blue-400 font-mono text-xl mr-4 tracking-widest">05.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Credentials</h2>
          <div className="ml-6 h-[1px] bg-slate-700/50 flex-grow max-w-sm"></div>
        </div>

        {portfolioData.certifications && portfolioData.certifications.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.certifications.map((cert, index) => (
              <motion.div
                key={cert.id || index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, rotateX: 5 }}
                onClick={() => setSelectedCert(cert)}
                className="glass-panel p-8 rounded-3xl border border-white/10 shadow-glow hover:shadow-glow transition-all group relative overflow-hidden bg-slate-900/40 cursor-pointer flex flex-col h-full perspective-[1000px]"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') setSelectedCert(cert); }}
                aria-label={`View ${cert.title} certificate`}
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/30 rounded-full blur-2xl group-hover:bg-blue-500/50 transition-colors"></div>
                
                <div className="w-14 h-14 rounded-2xl bg-slate-800/80/40 border border-white/5 shadow-glow flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  <FaAward className="text-2xl text-indigo-500 group-hover:text-blue-400 transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 leading-snug relative z-10">{cert.title}</h3>
                <p className="text-sm text-gray-300 font-bold mb-3 relative z-10">{cert.organization}</p>
                {cert.description && (
                  <p className="text-sm text-gray-400 font-medium mb-6 relative z-10 line-clamp-3">{cert.description}</p>
                )}
                
                <div className="mt-auto pt-5 border-t border-white/10 relative z-10 flex justify-between items-end">
                  <span className="font-mono text-xs font-bold text-blue-300 bg-blue-900/30 px-3 py-1.5 rounded-full border border-blue-500/30">
                    ISSUED {cert.issued || "2026"}
                  </span>
                  <span className="text-xs font-bold text-gray-500 group-hover:text-blue-400 transition-colors">
                    PREVIEW &rarr;
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="w-full glass-panel rounded-3xl p-12 text-center border border-white/10 shadow-glow">
            <p className="text-gray-400 font-medium">Waiting for certifications data...</p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedCert && (
          <CertificateModal 
            certificate={selectedCert} 
            onClose={() => setSelectedCert(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
