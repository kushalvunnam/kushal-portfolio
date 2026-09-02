import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 bg-secondary border-t border-gray-800 text-center">
      <div className="container mx-auto px-6">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/kushalvunnam" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent transition-colors">
            <FaGithub size={20} />
          </a>
        </div>
        <p className="text-gray-400 text-sm font-mono">
          Designed & Built by Kushal Vunnam
        </p>
        <p className="text-gray-500 text-xs mt-2">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
