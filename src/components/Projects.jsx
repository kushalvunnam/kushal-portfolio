import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaHdd, FaNetworkWired, FaRegFolderOpen, FaTimes } from 'react-icons/fa';
import { portfolioData } from '../data/content';

const getIconForProject = (title) => {
  const t = title.toLowerCase();
  if (t.includes('erp')) return <FaNetworkWired className="text-4xl text-blue-400" />;
  if (t.includes('mvss')) return <FaHdd className="text-4xl text-indigo-500" />;
  return <FaRegFolderOpen className="text-4xl text-gray-500" />;
};

const ProjectTerminal = ({ project, index, onOpenModal }) => {
  const handleCardClick = () => {
    onOpenModal(project);
  };

  const handleLiveClick = (e) => {
    e.stopPropagation();
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener noreferrer');
    }
  };

  const handleGithubClick = (e) => {
    e.stopPropagation();
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? -2 : 2, translateZ: 20 }}
      onClick={handleCardClick}
      className="glass-panel rounded-3xl overflow-hidden flex flex-col lg:flex-row group perspective-[1000px] border border-white/10 shadow-glass hover:shadow-glow hover:border-blue-500/50 transition-all cursor-pointer relative"
      role="button"
      tabIndex={0}
      aria-label={`View project details for ${project.title}`}
      onKeyDown={(e) => { if (e.key === 'Enter') handleCardClick(); }}
    >
      <div className="absolute top-4 right-4 bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full text-xs font-bold font-mono opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 duration-300 z-20 border border-blue-500/30 shadow-glow">
        VIEW DETAILS
      </div>

      {/* 3D Holographic Display Section */}
      <div className="w-full lg:w-5/12 bg-slate-900/40 relative overflow-hidden flex items-center justify-center min-h-[300px] border-r border-white/10">
        {/* Hologram Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:20px_20px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom opacity-50 group-hover:opacity-100 transition-opacity"></div>
        
        {/* Hologram Core */}
        <div className="relative z-10 flex flex-col items-center">
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="w-24 h-24 rounded-2xl border border-blue-500/50 flex items-center justify-center bg-slate-800/40 shadow-glow mb-4 group-hover:shadow-blue-500/50 transition-shadow duration-500 relative"
          >
            <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
            {getIconForProject(project.title)}
          </motion.div>
          <div className="w-20 h-1 bg-blue-300 rounded-full blur-md group-hover:bg-blue-400 transition-colors"></div>
          <span className="mt-4 font-mono text-xs text-blue-400 uppercase tracking-widest font-bold">Interactive Module</span>
        </div>
      </div>

      {/* Terminal Content Section */}
      <div className="w-full lg:w-7/12 p-8 flex flex-col bg-slate-900/20 relative">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="font-mono text-indigo-400 text-sm mb-1 font-semibold">{project.category}</p>
            <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
          </div>
        </div>

        <div className="bg-slate-900/40 rounded-2xl p-5 border border-white/5 flex-grow mb-6 shadow-glow group-hover:border-blue-500/30 transition-colors">
          <p className="text-gray-300 font-medium text-sm leading-relaxed mb-4">
            {project.description}
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start text-xs text-gray-400 font-medium">
                <span className="text-blue-400 mr-2 mt-[2px] font-bold">&gt;</span> {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span key={i} className="text-xs font-mono text-blue-300 bg-blue-900/30 border border-blue-500/30 px-3 py-1 rounded-full font-semibold">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-2 shrink-0">
            {project.githubUrl && (
              <button 
                onClick={handleGithubClick}
                className="group/btn flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 border bg-slate-800/80 text-white hover:bg-slate-700 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] border-white/20"
                aria-label="GitHub Repository"
              >
                <FaGithub className="group-hover/btn:scale-110 transition-transform" /> GitHub
              </button>
            )}
            
            {project.liveUrl ? (
              <button 
                onClick={handleLiveClick}
                className="group/btn flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 border bg-blue-600/20 text-white hover:bg-blue-600 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] border-blue-500/50"
                aria-label="Live Demo"
              >
                <FaExternalLinkAlt size={12} className="group-hover/btn:scale-110 transition-transform" /> View Project
              </button>
            ) : project.githubUrl ? (
              <button 
                onClick={handleGithubClick}
                className="group/btn flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 border bg-blue-600/20 text-white hover:bg-blue-600 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] border-blue-500/50"
                aria-label="View Source"
              >
                <FaExternalLinkAlt size={12} className="group-hover/btn:scale-110 transition-transform" /> View Source
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="glass-panel w-full max-w-2xl bg-slate-800/80 rounded-3xl overflow-hidden shadow-glow flex flex-col relative"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-full transition-colors z-10"
          aria-label="Close modal"
        >
          <FaTimes size={16} />
        </button>
        
        <div className="p-8 md:p-10 border-b border-white/5 bg-slate-900/40">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-slate-800/40 border border-blue-500/50 shadow-glow flex items-center justify-center mb-4">
               <FaRegFolderOpen className="text-3xl text-blue-400" />
            </div>
            <p className="font-mono text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">{project.category}</p>
            <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-400 font-medium">Project developed as part of my full-stack development work.</p>
          </div>
        </div>
        
        <div className="p-8 md:p-10 bg-slate-800/40">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/5 pb-2">Project Details</h4>
          
          <div className="space-y-4">
            <div>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest font-bold">Description</span>
              <p className="text-gray-300">{project.description}</p>
            </div>
            
            <div>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest font-bold">Key Features</span>
              <ul className="grid grid-cols-1 gap-1 mt-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="text-sm text-gray-300 flex items-start">
                    <span className="text-blue-400 mr-2">&gt;</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest font-bold">Tech Stack</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-xs font-mono text-blue-300 bg-blue-900/30 border border-blue-500/30 px-2 py-1 rounded font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest font-bold">Status</span>
              <p className="text-blue-400 font-medium text-sm">Active / Available upon request</p>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/5 flex justify-center gap-4">
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 border bg-slate-800 text-white hover:bg-slate-700 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] border-white/20"
              >
                <FaGithub /> GitHub
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 border bg-blue-600/20 text-white hover:bg-blue-600 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] border-blue-500/50"
              >
                <FaExternalLinkAlt size={12} /> View Project
              </a>
            )}
            
            {!project.githubUrl && !project.liveUrl && (
              <button 
                onClick={onClose}
                className="px-8 py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-colors shadow-glow"
              >
                Close
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        
        <div className="flex items-center mb-16">
          <span className="text-blue-400 font-mono text-xl mr-4 tracking-widest">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Project Database</h2>
          <div className="ml-6 h-[1px] bg-slate-700/50 flex-grow max-w-sm"></div>
        </div>

        {portfolioData.projects && portfolioData.projects.length > 0 ? (
          <div className="space-y-12 perspective-[2000px]">
            {portfolioData.projects.map((project, index) => (
              <ProjectTerminal 
                key={project.id} 
                project={project} 
                index={index} 
                onOpenModal={setSelectedProject}
              />
            ))}
          </div>
        ) : (
          <div className="w-full glass-panel rounded-3xl p-16 text-center border border-white/10 shadow-glass flex flex-col items-center justify-center">
             <div className="w-20 h-20 bg-slate-800/50 rounded-full flex items-center justify-center mb-6">
                <FaRegFolderOpen className="text-4xl text-slate-300" />
             </div>
             <h3 className="text-2xl font-bold text-white mb-2">Awaiting Project Data</h3>
             <p className="text-gray-400 max-w-md">The project database is currently empty. Waiting for projects to be synced to the portfolio.</p>
          </div>
        )}
        
      </div>
      
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
