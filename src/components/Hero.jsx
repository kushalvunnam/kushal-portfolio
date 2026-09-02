import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import HeroObject from './3d/HeroObject';
import { portfolioData } from '../data/content';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center h-full relative z-10">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center pt-10 lg:pt-0">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200 rounded-full blur-3xl group-hover:bg-blue-500/50 transition-colors duration-700 opacity-50"></div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-blue-400 font-mono text-sm mb-3 tracking-widest uppercase font-semibold"
            >
              System Online //
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight"
            >
              {portfolioData.personal.name}
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 mb-6"
            >
              {portfolioData.personal.role}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-gray-300 max-w-xl text-lg mb-10 leading-relaxed font-medium"
            >
              {portfolioData.personal.subtitle}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#projects" className="relative group overflow-hidden bg-slate-800/80/40 border border-blue-500 text-blue-400 px-8 py-3 rounded-full font-mono text-sm tracking-wider transition-all shadow-glow hover:shadow-glow">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 font-bold">View My Work</span>
                <div className="absolute inset-0 bg-blue-900/300 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0"></div>
              </a>
              <a href="#about" className="px-8 py-3 rounded-full font-mono text-sm tracking-wider text-gray-300 hover:text-slate-900 transition-colors bg-slate-900/20 border border-white/10 hover:bg-slate-800/80/40/80 shadow-glow">
                About Me
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* 3D Interactive Object */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-[80vh] relative mt-10 lg:mt-0">
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
            <ambientLight intensity={1.5} color="#ffffff" />
            <directionalLight position={[10, 10, 10]} intensity={2.5} color="#ffffff" />
            <directionalLight position={[-10, -10, -10]} intensity={1} color="#06b6d4" />
            <Suspense fallback={null}>
              <HeroObject />
            </Suspense>
            <OrbitControls 
              enableZoom={false} 
              enablePan={false} 
              autoRotate={true}
              autoRotateSpeed={0.5}
              maxPolarAngle={Math.PI / 1.5}
              minPolarAngle={Math.PI / 3}
            />
          </Canvas>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 lg:hidden text-blue-400 font-mono text-xs uppercase tracking-widest animate-pulse bg-slate-800/80/40/80 px-4 py-1 rounded-full shadow-glow">
            [ Interact to Rotate ]
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
