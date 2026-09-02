import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { portfolioData } from '../data/content';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = links.map(link => link.name.toLowerCase());
      const scrollPos = window.scrollY + 200;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const initials = portfolioData.personal.name.split(' ').map(n => n[0]).join('');

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}
    >
      <div className="mx-auto px-4 md:px-8 max-w-7xl">
        <div className={`flex justify-between items-center transition-all duration-500 ${scrolled ? 'bg-[#081a36]/85 backdrop-blur-lg border border-[#55c7ff]/40 shadow-[0_0_15px_rgba(85,199,255,0.2)] rounded-full px-6 py-3' : 'px-2'}`}>
          
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold font-sans text-white tracking-tighter flex items-center gap-2 group">
            <span className="text-gradient group-hover:brightness-125 transition-all duration-300">{initials}.</span>
            <span className="hidden sm:block text-sm font-bold text-gray-400 font-mono tracking-widest uppercase">System</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-1 items-center">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`relative px-4 py-2 text-sm font-medium transition-colors font-mono ${
                  activeSection === link.name.toLowerCase() ? 'text-white font-bold' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
                {activeSection === link.name.toLowerCase() && (
                  <motion.div 
                    layoutId="navIndicator"
                    className="absolute bottom-0 left-2 right-2 h-[3px] bg-gradient-to-r from-[#55c7ff] to-[#9b7cff] rounded-full shadow-[0_0_8px_rgba(85,199,255,0.6)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Nav Toggle */}
          <button className="lg:hidden text-[#55c7ff] p-2 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-[#081a36]/90 backdrop-blur-xl rounded-2xl py-4 flex flex-col items-center space-y-1 border border-[#55c7ff]/40 shadow-[0_0_20px_rgba(85,199,255,0.2)] overflow-hidden"
          >
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className={`w-full text-center py-3 text-sm font-mono tracking-wider ${
                  activeSection === link.name.toLowerCase() ? 'text-white bg-[#55c7ff]/10 font-bold border-l-4 border-[#55c7ff]' : 'text-gray-300 hover:text-white hover:bg-white/5'
                } transition-all`}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
