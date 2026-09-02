import React from 'react';
import { motion } from 'framer-motion';
import { FaTerminal, FaCode } from 'react-icons/fa';
import { portfolioData } from '../data/content';

const About = () => {
  const techBadges = [
    "React.js", "Node.js", "Express.js", "MongoDB", 
    "Python", "JavaScript", "HTML", "CSS", "Git", "GitHub"
  ];

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
          {/* Left Side: Profile Photo */}
          <div className="w-full lg:w-2/5 flex justify-center perspective-[1200px]">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="relative w-full max-w-sm group"
            >
              {/* Subtle background glow/shape */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#55c7ff] to-[#9b7cff] rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 transform rotate-3 scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-[#087cff] to-[#24145c] rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 transform -rotate-3 scale-105"></div>
              
              {/* Profile Image Container */}
              <div className="relative z-10 glass-panel rounded-3xl p-2 border border-white/10 shadow-glow">
                <img 
                  src="/profile.jpg" 
                  alt="Vunnam Kushal" 
                  className="w-full h-auto aspect-[4/5] object-cover rounded-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" 
                  style={{ objectPosition: 'center top' }}
                />
              </div>
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-3/5">
            <div className="flex items-center mb-6">
              <span className="text-[#55c7ff] font-mono text-xl mr-4 tracking-widest">01.</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">About Me</h2>
              <div className="ml-6 h-[1px] bg-slate-700/50 flex-grow"></div>
            </div>
            
            <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 shadow-glass">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Hi, I'm Vunnam Kushal <span className="inline-block origin-[70%_70%] hover:animate-[wave_1s_ease-in-out_infinite]">👋</span></h3>
              <h4 className="text-xl font-mono text-gradient mb-6 font-semibold">Full-Stack Developer</h4>
              
              <p className="text-gray-300 text-lg font-medium leading-relaxed mb-8">
                I'm a B.Tech student and Full-Stack Developer passionate about building modern, responsive and practical web applications. I enjoy developing complete solutions using frontend, backend, databases and APIs.
              </p>
              
              <div>
                <h5 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-4">Core Technologies</h5>
                <div className="flex flex-wrap gap-2">
                  {techBadges.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1.5 text-sm font-mono font-bold text-white bg-[rgba(20,55,110,0.6)] border border-[#55c7ff]/30 rounded-lg hover:bg-[rgba(85,199,255,0.2)] transition-colors shadow-glow"
                    >
                      {tech}
                    </span>
                  ))}
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

