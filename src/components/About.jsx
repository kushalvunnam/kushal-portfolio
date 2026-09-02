import React from 'react';
import { motion } from 'framer-motion';
import { FaTerminal, FaCode, FaMicrochip } from 'react-icons/fa';
import { portfolioData } from '../data/content';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row gap-16 items-center"
        >
          {/* 3D Workspace Scene Illusion via DOM */}
          <div className="w-full lg:w-5/12 flex justify-center perspective-[1200px]">
            <motion.div 
              whileHover={{ rotateY: -10, rotateX: 5 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="relative w-full aspect-square max-w-md group"
            >
              {/* Main Terminal Window */}
              <div className="absolute inset-0 glass-panel rounded-2xl border border-purple-dim shadow-neon-purple/20 p-6 flex flex-col z-20 group-hover:translate-z-[50px] transition-transform duration-500">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 font-mono text-sm text-cyan-neon opacity-80 overflow-hidden">
                  <p className="mb-2">&gt; initializing core_modules...</p>
                  <p className="mb-2 text-purple-400">&gt; loading backend_services.js [OK]</p>
                  <p className="mb-2">&gt; compiling react_components.jsx [OK]</p>
                  <p className="mb-2 text-green-400">&gt; system ready.</p>
                  <p className="mb-2 mt-6 animate-pulse">_</p>
                </div>
              </div>
              
              {/* Floating Element 1 */}
              <div className="absolute -right-8 -top-8 glass-panel p-4 rounded-xl z-30 group-hover:translate-z-[80px] group-hover:-translate-y-4 transition-transform duration-500 animate-float">
                <FaCode className="text-3xl text-cyan-neon" />
              </div>
              
              {/* Floating Element 2 */}
              <div className="absolute -left-8 -bottom-8 glass-panel p-4 rounded-xl z-30 group-hover:translate-z-[100px] group-hover:translate-y-4 transition-transform duration-500 animate-float-delayed">
                <FaTerminal className="text-3xl text-purple-neon" />
              </div>
              
              {/* Background Glow */}
              <div className="absolute inset-4 bg-purple-neon/20 rounded-full blur-[60px] z-0"></div>
            </motion.div>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="flex items-center mb-8">
              <span className="text-cyan-neon font-mono text-xl mr-4 tracking-widest">01.</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">About Me</h2>
              <div className="ml-6 h-[1px] bg-white/10 flex-grow"></div>
            </div>
            
            <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 shadow-glass">
              <p className="text-textMuted text-lg font-light leading-relaxed mb-6">
                {portfolioData.about}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-cyan-dim flex items-center justify-center mr-4 border border-cyan-neon/30">
                    <FaCode className="text-cyan-neon" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Frontend Engineering</h4>
                    <p className="text-sm text-gray-400 font-light">Building complex interactive UIs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-purple-dim flex items-center justify-center mr-4 border border-purple-neon/30">
                    <FaTerminal className="text-purple-neon" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Backend Architecture</h4>
                    <p className="text-sm text-gray-400 font-light">Designing scalable robust APIs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default About;
