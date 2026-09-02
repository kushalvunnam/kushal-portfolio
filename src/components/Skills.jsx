import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import SkillConstellation from './3d/SkillConstellation';
import { portfolioData } from '../data/content';

const SkillCategory = ({ title, skills, index }) => (
  <motion.div 
    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.1 * index }}
    className="glass-panel p-6 rounded-2xl border border-white/5"
  >
    <h3 className="text-lg font-mono text-cyan-neon mb-4 tracking-widest">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, i) => (
        <span 
          key={i} 
          className="px-3 py-1.5 text-sm bg-white/5 text-gray-300 rounded border border-white/10 hover:border-cyan-neon/50 hover:bg-cyan-neon/10 transition-colors cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        <div className="flex items-center mb-12">
          <span className="text-cyan-neon font-mono text-xl mr-4 tracking-widest">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Technical Arsenal</h2>
          <div className="ml-6 h-[1px] bg-white/10 flex-grow max-w-md"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Categories */}
          <div className="w-full lg:w-1/2 space-y-6">
            <SkillCategory title="Frontend Engineering" skills={portfolioData.skills.frontend} index={0} />
            <SkillCategory title="Machine Learning" skills={portfolioData.skills.machineLearning} index={1} />
            <SkillCategory title="Programming" skills={portfolioData.skills.programming} index={2} />
            <SkillCategory title="Tools" skills={portfolioData.skills.tools} index={3} />
          </div>

          {/* 3D Constellation */}
          <div className="w-full lg:w-1/2 h-[500px] relative glass-panel rounded-3xl border border-purple-dim shadow-glass overflow-hidden">
             <div className="absolute top-4 right-4 text-xs font-mono text-gray-500 z-10">[ 3D Interactive ]</div>
             <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 2]}>
               <ambientLight intensity={0.5} />
               <directionalLight position={[10, 10, 10]} intensity={1} color="#00f0ff" />
               <directionalLight position={[-10, -10, -10]} intensity={1} color="#7000ff" />
               <Suspense fallback={null}>
                 <SkillConstellation />
               </Suspense>
               <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
             </Canvas>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
