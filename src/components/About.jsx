import React from 'react';
import { motion } from 'framer-motion';
import { FaTerminal, FaCode } from 'react-icons/fa';
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
              <div className="absolute inset-0 glass-panel bg-slate-900 rounded-3xl border border-slate-700 shadow-glass p-6 flex flex-col z-20 group-hover:translate-z-[50px] transition-transform duration-500">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 font-mono text-sm text-blue-400 opacity-90 overflow-hidden">
                  <p className="mb-2">&gt; initializing core_modules...</p>
                  <p className="mb-2 text-indigo-400">&gt; loading backend_services.js [OK]</p>
                  <p className="mb-2">&gt; compiling react_components.jsx [OK]</p>
                  <p className="mb-2 text-green-400">&gt; system ready.</p>
                  <p className="mb-2 mt-6 animate-pulse text-white">_</p>
                </div>
              </div>
              
              {/* Floating Element 1 */}
              <div className="absolute -right-8 -top-8 bg-slate-800/80/40 p-4 rounded-2xl z-30 shadow-glow border border-white/5 group-hover:translate-z-[80px] group-hover:-translate-y-4 transition-transform duration-500 animate-float">
                <FaCode className="text-3xl text-blue-400" />
              </div>
              
              {/* Floating Element 2 */}
              <div className="absolute -left-8 -bottom-8 bg-slate-800/80/40 p-4 rounded-2xl z-30 shadow-glow border border-white/5 group-hover:translate-z-[100px] group-hover:translate-y-4 transition-transform duration-500 animate-float-delayed">
                <FaTerminal className="text-3xl text-indigo-500" />
              </div>
              
              {/* Background Glow */}
              <div className="absolute inset-4 bg-blue-500/50 rounded-full blur-[60px] z-0 opacity-50"></div>
            </motion.div>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="flex items-center mb-8">
              <span className="text-blue-400 font-mono text-xl mr-4 tracking-widest">01.</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">About Me</h2>
              <div className="ml-6 h-[1px] bg-slate-700/50 flex-grow"></div>
            </div>
            
            <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 shadow-glass">
              <p className="text-gray-300 text-lg font-medium leading-relaxed mb-6">
                {portfolioData.about}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-blue-900/30 flex items-center justify-center mr-4 border border-blue-500/30 shadow-glow">
                    <FaCode className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Frontend Engineering</h4>
                    <p className="text-sm text-gray-400">Building complex interactive UIs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-indigo-900/30 flex items-center justify-center mr-4 border border-indigo-500/30 shadow-glow">
                    <FaTerminal className="text-indigo-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Backend Architecture</h4>
                    <p className="text-sm text-gray-400">Designing scalable robust APIs.</p>
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
