import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaHdd, FaNetworkWired, FaSatelliteDish, FaRegFolderOpen } from 'react-icons/fa';
import { portfolioData } from '../data/content';

const getIconForProject = (title) => {
  const t = title.toLowerCase();
  if (t.includes('agro')) return <FaSatelliteDish className="text-4xl text-green-400" />;
  if (t.includes('erp')) return <FaNetworkWired className="text-4xl text-cyan-neon" />;
  if (t.includes('mvss')) return <FaHdd className="text-4xl text-purple-neon" />;
  return <FaRegFolderOpen className="text-4xl text-gray-300" />;
};

const ProjectTerminal = ({ project, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? -2 : 2, translateZ: 20 }}
      className="glass-card rounded-2xl overflow-hidden flex flex-col lg:flex-row group perspective-[1000px] border border-cyan-dim relative"
    >
      {/* 3D Holographic Display Section */}
      <div className="w-full lg:w-5/12 bg-black/40 relative overflow-hidden flex items-center justify-center min-h-[300px]">
        {/* Hologram Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom opacity-50 group-hover:opacity-100 transition-opacity"></div>
        
        {/* Hologram Core */}
        <div className="relative z-10 flex flex-col items-center">
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="w-24 h-24 rounded-full border border-cyan-neon/30 flex items-center justify-center bg-cyan-neon/5 shadow-neon-cyan/20 mb-4 group-hover:shadow-neon-cyan transition-shadow duration-500"
          >
            {getIconForProject(project.title)}
          </motion.div>
          <div className="w-20 h-1 bg-cyan-neon/50 rounded-full blur-md"></div>
          <span className="mt-4 font-mono text-xs text-cyan-neon uppercase tracking-widest opacity-70">Simulation Active</span>
        </div>
      </div>

      {/* Terminal Content Section */}
      <div className="w-full lg:w-7/12 p-8 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="font-mono text-purple-400 text-sm mb-1">{project.subtitle}</p>
            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-neon transition-colors">{project.title}</h3>
          </div>
          <div className="flex gap-4">
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Live Demo">
              <FaExternalLinkAlt size={18} />
            </a>
          </div>
        </div>

        <div className="bg-space-900/50 rounded-xl p-4 border border-white/5 flex-grow mb-6">
          <p className="text-gray-300 font-light text-sm leading-relaxed mb-4">
            {project.description}
          </p>
          <ul className="grid grid-cols-2 gap-2">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start text-xs text-gray-400">
                <span className="text-cyan-neon mr-2 mt-[2px]">&gt;</span> {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech, i) => (
            <span key={i} className="text-xs font-mono text-purple-300 bg-purple-neon/10 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        
        <div className="flex items-center mb-16">
          <span className="text-cyan-neon font-mono text-xl mr-4 tracking-widest">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Project Database</h2>
          <div className="ml-6 h-[1px] bg-white/10 flex-grow max-w-sm"></div>
        </div>

        <div className="space-y-12 perspective-[2000px]">
          {portfolioData.projects.map((project, index) => (
            <ProjectTerminal key={project.id} project={project} index={index} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
