import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div
        className={`pointer-events-auto flex items-center justify-between transition-all duration-500 rounded-full border ${isScrolled
          ? 'bg-darker/60 backdrop-blur-lg border-white/10 py-3 px-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] w-full max-w-3xl'
          : 'bg-darker/30 backdrop-blur-md border-white/5 py-4 px-8 w-full max-w-5xl'
          }`}
      >
        {/* Logo */}
        <a href="#" className="text-xl font-bold font-mono tracking-tighter text-white mr-8 flex-shrink-0">
          <span className="text-gray-500 font-extrabold text-white mb-4 tracking-tight leading-tight">&lt;</span>
          {personalInfo.name}
          <span className="text-gray-500">/&gt;</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm tracking-wide font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="w-px h-4 bg-white/20 mx-2"></div>
          <a
            href="#contact"
            className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="pointer-events-auto absolute top-20 left-4 right-4 bg-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4 z-40">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-400 hover:text-white text-lg font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="w-full h-px bg-white/10 my-2"></div>
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white hover:text-gray-300 text-lg font-medium"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
