import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, 
  FaNodeJs, FaDatabase, FaPython, FaGitAlt, FaGithub, FaLaptopCode 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiExpress, SiMongodb 
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import SkillConstellation from './3d/SkillConstellation';
import { portfolioData } from '../data/content';

const getSkillIcon = (skillName) => {
  const iconProps = { className: "text-lg transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]", style: { color: 'inherit' } };
  
  switch(skillName) {
    case "HTML": return <FaHtml5 {...iconProps} />;
    case "CSS": return <FaCss3Alt {...iconProps} />;
    case "JavaScript": return <FaJs {...iconProps} />;
    case "React.js": return <FaReact {...iconProps} />;
    case "Tailwind CSS": return <SiTailwindcss {...iconProps} />;
    case "Bootstrap": return <FaBootstrap {...iconProps} />;
    case "Responsive Design": return <FaLaptopCode {...iconProps} />;
    case "Node.js": return <FaNodeJs {...iconProps} />;
    case "Express.js": return <SiExpress {...iconProps} />;
    case "SQL": return <FaDatabase {...iconProps} />;
    case "MongoDB": return <SiMongodb {...iconProps} />;
    case "Python": return <FaPython {...iconProps} />;
    case "Git": return <FaGitAlt {...iconProps} />;
    case "GitHub": return <FaGithub {...iconProps} />;
    case "VS Code": return <VscVscode {...iconProps} />;
    default: return <FaLaptopCode {...iconProps} />;
  }
};

const SkillCategory = ({ title, skills, index }) => (
  <motion.div 
    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.1 * index }}
    className="glass-panel p-6 rounded-2xl border border-white/5 shadow-glow"
  >
    <h3 className="text-lg font-mono text-blue-400 mb-4 tracking-widest">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.length > 0 ? (
        skills.map((skill, i) => (
          <div 
            key={i} 
            className="group flex items-center gap-2 px-4 py-2 text-sm bg-slate-900/40 text-gray-200 rounded-full border border-white/10 hover:border-blue-400 hover:bg-blue-900/30 hover:text-white transition-all cursor-default shadow-sm"
          >
            {getSkillIcon(skill)}
            <span className="font-medium">{skill}</span>
          </div>
        ))
      ) : (
        <span className="text-gray-500 italic text-sm">Waiting for my skills...</span>
      )}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        <div className="flex items-center mb-12">
          <span className="text-blue-400 font-mono text-xl mr-4 tracking-widest">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Technical Arsenal</h2>
          <div className="ml-6 h-[1px] bg-slate-700/50 flex-grow max-w-md"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Categories */}
          <div className="w-full lg:w-1/2 space-y-6">
            <SkillCategory title="Frontend Engineering" skills={portfolioData.skills.frontend} index={0} />
            <SkillCategory title="Backend & Database" skills={[...portfolioData.skills.backend, ...portfolioData.skills.database]} index={1} />
            <SkillCategory title="Programming" skills={portfolioData.skills.programming || []} index={2} />
            <SkillCategory title="Tools" skills={portfolioData.skills.tools} index={3} />
          </div>

          {/* 3D Constellation */}
          <div className="w-full lg:w-1/2 h-[500px] relative glass-panel rounded-3xl border border-white/5 shadow-glass overflow-hidden bg-slate-900/20">
             <div className="absolute top-4 right-4 text-xs font-mono text-gray-400 z-10">[ 3D Interactive ]</div>
             <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 2]}>
               <ambientLight intensity={0.5} color="#ffffff" />
               <directionalLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
               <directionalLight position={[-10, -10, -10]} intensity={1.5} color="#6366f1" />
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
