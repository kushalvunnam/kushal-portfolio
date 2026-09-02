import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaHdd, FaNetworkWired, FaSatelliteDish, FaRegFolderOpen } from 'react-icons/fa';
import { portfolioData } from '../data/content';

const getIconForProject = (title) => {
  const t = title.toLowerCase();
  if (t.includes('agro')) return <FaSatelliteDish className="text-4xl text-emerald-500" />;
  if (t.includes('erp')) return <FaNetworkWired className="text-4xl text-cyan-500" />;
  if (t.includes('mvss')) return <FaHdd className="text-4xl text-purple-500" />;
  return <FaRegFolderOpen className="text-4xl text-slate-400" />;
};

const ProjectTerminal = ({ project, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? -2 : 2, translateZ: 20 }}
      className="glass-panel rounded-3xl overflow-hidden flex flex-col lg:flex-row group perspective-[1000px] border border-white shadow-xl relative"
    >
      {/* 3D Holographic Display Section */}
      <div className="w-full lg:w-5/12 bg-slate-50 relative overflow-hidden flex items-center justify-center min-h-[300px] border-r border-slate-200">
        {/* Hologram Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:20px_20px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom opacity-50 group-hover:opacity-100 transition-opacity"></div>
        
        {/* Hologram Core */}
        <div className="relative z-10 flex flex-col items-center">
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="w-24 h-24 rounded-2xl border border-cyan-200 flex items-center justify-center bg-white shadow-lg mb-4 group-hover:shadow-cyan-200 transition-shadow duration-500"
          >
            {getIconForProject(project.title)}
          </motion.div>
          <div className="w-20 h-1 bg-cyan-300 rounded-full blur-md"></div>
          <span className="mt-4 font-mono text-xs text-cyan-600 uppercase tracking-widest font-bold">Simulation Active</span>
        </div>
      </div>

      {/* Terminal Content Section */}
      <div className="w-full lg:w-7/12 p-8 flex flex-col bg-white/50">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="font-mono text-purple-600 text-sm mb-1 font-semibold">{project.subtitle}</p>
            <h3 className="text-2xl font-bold text-slate-800 group-hover:text-cyan-600 transition-colors">{project.title}</h3>
          </div>
          <div className="flex gap-4">
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-800 transition-colors" aria-label="GitHub">
              <FaGithub size={22} />
            </a>
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-800 transition-colors" aria-label="Live Demo">
              <FaExternalLinkAlt size={20} />
            </a>
          </div>
        </div>

        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex-grow mb-6 shadow-sm">
          <p className="text-slate-600 font-medium text-sm leading-relaxed mb-4">
            {project.description}
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start text-xs text-slate-500 font-medium">
                <span className="text-cyan-500 mr-2 mt-[2px] font-bold">&gt;</span> {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech, i) => (
            <span key={i} className="text-xs font-mono text-cyan-700 bg-cyan-50 border border-cyan-100 px-3 py-1 rounded-full font-semibold">
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
          <span className="text-cyan-600 font-mono text-xl mr-4 tracking-widest">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">Project Database</h2>
          <div className="ml-6 h-[1px] bg-slate-200 flex-grow max-w-sm"></div>
        </div>

        {portfolioData.projects && portfolioData.projects.length > 0 ? (
          <div className="space-y-12 perspective-[2000px]">
            {portfolioData.projects.map((project, index) => (
              <ProjectTerminal key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="w-full glass-panel rounded-3xl p-16 text-center border border-white shadow-xl flex flex-col items-center justify-center">
             <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <FaRegFolderOpen className="text-4xl text-slate-300" />
             </div>
             <h3 className="text-2xl font-bold text-slate-800 mb-2">Awaiting Project Data</h3>
             <p className="text-slate-500 max-w-md">The project database is currently empty. Waiting for projects to be synced to the portfolio.</p>
          </div>
        )}
        
      </div>
    </section>
  );
};

export default Projects;
