import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaHdd, FaNetworkWired, FaRegFolderOpen, FaTimes } from 'react-icons/fa';
import { portfolioData } from '../data/content';

const getIconForProject = (title) => {
  const t = title.toLowerCase();
  if (t.includes('erp')) return <FaNetworkWired className="text-4xl text-cyan-500" />;
  if (t.includes('mvss')) return <FaHdd className="text-4xl text-purple-500" />;
  return <FaRegFolderOpen className="text-4xl text-slate-400" />;
};

const ProjectTerminal = ({ project, index, onOpenModal }) => {
  const handleCardClick = () => {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener noreferrer');
    } else if (project.githubUrl) {
      window.open(project.githubUrl, '_blank', 'noopener noreferrer');
    } else {
      onOpenModal(project);
    }
  };

  const handleLiveClick = (e) => {
    e.stopPropagation();
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener noreferrer');
    } else {
      onOpenModal(project);
    }
  };

  const handleGithubClick = (e) => {
    e.stopPropagation();
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank', 'noopener noreferrer');
    } else {
      onOpenModal(project);
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
      className="glass-panel rounded-3xl overflow-hidden flex flex-col lg:flex-row group perspective-[1000px] border border-white shadow-xl hover:shadow-2xl hover:border-cyan-200 transition-all cursor-pointer relative"
      role="button"
      tabIndex={0}
      aria-label={`View project details for ${project.title}`}
      onKeyDown={(e) => { if (e.key === 'Enter') handleCardClick(); }}
    >
      {/* Visual indicator for interactivity */}
      <div className="absolute top-4 right-4 bg-cyan-50 text-cyan-600 px-3 py-1 rounded-full text-xs font-bold font-mono opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 duration-300 z-20 border border-cyan-100 shadow-sm">
        {project.liveUrl ? 'OPEN LIVE →' : (project.githubUrl ? 'VIEW SOURCE →' : 'VIEW DETAILS →')}
      </div>

      {/* 3D Holographic Display Section */}
      <div className="w-full lg:w-5/12 bg-slate-50 relative overflow-hidden flex items-center justify-center min-h-[300px] border-r border-slate-200">
        {/* Hologram Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:20px_20px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom opacity-50 group-hover:opacity-100 transition-opacity"></div>
        
        {/* Hologram Core */}
        <div className="relative z-10 flex flex-col items-center">
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="w-24 h-24 rounded-2xl border border-cyan-200 flex items-center justify-center bg-white shadow-lg mb-4 group-hover:shadow-cyan-200 transition-shadow duration-500 relative"
          >
            <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
            {getIconForProject(project.title)}
          </motion.div>
          <div className="w-20 h-1 bg-cyan-300 rounded-full blur-md group-hover:bg-cyan-400 transition-colors"></div>
          <span className="mt-4 font-mono text-xs text-cyan-600 uppercase tracking-widest font-bold">Interactive Module</span>
        </div>
      </div>

      {/* Terminal Content Section */}
      <div className="w-full lg:w-7/12 p-8 flex flex-col bg-white/50 relative">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="font-mono text-purple-600 text-sm mb-1 font-semibold">{project.category}</p>
            <h3 className="text-2xl font-bold text-slate-800 group-hover:text-cyan-600 transition-colors">{project.title}</h3>
          </div>
        </div>

        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex-grow mb-6 shadow-sm group-hover:border-cyan-100 transition-colors">
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

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span key={i} className="text-xs font-mono text-cyan-700 bg-cyan-50 border border-cyan-100 px-3 py-1 rounded-full font-semibold">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-2 shrink-0">
            <button 
              onClick={handleGithubClick}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-bold transition-colors border ${project.githubUrl ? 'bg-slate-800 text-white hover:bg-slate-700 border-slate-800' : 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed hover:bg-slate-200'}`}
              aria-label="GitHub Repository"
            >
              <FaGithub /> {project.githubUrl ? 'Source' : 'Private'}
            </button>
            <button 
              onClick={handleLiveClick}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-bold transition-colors border ${project.liveUrl ? 'bg-cyan-500 text-white hover:bg-cyan-600 border-cyan-500' : 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed hover:bg-slate-200'}`}
              aria-label="Live Demo"
            >
              <FaExternalLinkAlt size={12} /> {project.liveUrl ? 'Live Demo' : 'Coming Soon'}
            </button>
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
        className="glass-panel w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col relative"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 rounded-full transition-colors z-10"
          aria-label="Close modal"
        >
          <FaTimes size={16} />
        </button>
        
        <div className="p-8 md:p-10 border-b border-slate-100 bg-slate-50/50">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-white border border-cyan-200 shadow-sm flex items-center justify-center mb-4">
               <FaRegFolderOpen className="text-3xl text-cyan-500" />
            </div>
            <p className="font-mono text-cyan-600 text-xs font-bold uppercase tracking-widest mb-2">Project Unavailable</p>
            <h3 className="text-3xl font-bold text-slate-800 mb-2">Demo Coming Soon</h3>
            <p className="text-slate-500 font-medium">The live environment or source repository for <span className="font-bold text-slate-700">{project.title}</span> is currently restricted or being prepared for deployment.</p>
          </div>
        </div>
        
        <div className="p-8 md:p-10 bg-white">
          <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Project Snapshot</h4>
          
          <div className="space-y-4">
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold">Category</span>
              <p className="text-slate-800 font-medium">{project.category}</p>
            </div>
            
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold">Description</span>
              <p className="text-slate-600">{project.description}</p>
            </div>
            
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold">Tech Stack</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-xs font-mono text-cyan-700 bg-cyan-50 border border-cyan-100 px-2 py-1 rounded font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-slate-100 flex justify-center">
             <button 
               onClick={onClose}
               className="px-8 py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-colors shadow-md"
             >
               Understood
             </button>
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
          <span className="text-cyan-600 font-mono text-xl mr-4 tracking-widest">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">Project Database</h2>
          <div className="ml-6 h-[1px] bg-slate-200 flex-grow max-w-sm"></div>
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
          <div className="w-full glass-panel rounded-3xl p-16 text-center border border-white shadow-xl flex flex-col items-center justify-center">
             <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <FaRegFolderOpen className="text-4xl text-slate-300" />
             </div>
             <h3 className="text-2xl font-bold text-slate-800 mb-2">Awaiting Project Data</h3>
             <p className="text-slate-500 max-w-md">The project database is currently empty. Waiting for projects to be synced to the portfolio.</p>
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
