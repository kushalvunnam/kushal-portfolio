import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-64 bg-accent/20 filter blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center relative z-10 perspective-[1000px]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="glass-panel p-12 md:p-20 rounded-3xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
        >
          <p className="text-accent font-mono text-sm mb-4 tracking-widest uppercase">05. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Want to know more about me?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg font-light">
            I'm always looking for new opportunities to learn, grow, and build amazing products. Check out my full resume to see my detailed skill set and background.
          </p>
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex group items-center justify-center px-10 py-4 font-medium text-white transition-all duration-300 ease-out bg-accent rounded-full hover:bg-accentDark hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
          >
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-full opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
            <span className="relative font-mono">Download Resume</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
