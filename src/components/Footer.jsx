import React from 'react';
import { personalInfo, socialLinks } from '../data/portfolio';

const Footer = () => {
  return (
    <footer id="contact" className="py-12 border-t border-white/5 bg-darker/50 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">Let's Connect</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <a
          href={`mailto:${socialLinks.find(s => s.name === "Email")?.url.replace('mailto:', '')}`}
          className="inline-block px-8 py-4 border border-white/20 text-white hover:bg-white hover:text-black transition-all rounded-lg font-mono tracking-wide mb-12"
        >
          Say Hello
        </a>

        <div className="flex items-center justify-center space-x-6 mb-8">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors hover:-translate-y-1 transform duration-200"
                aria-label={link.name}
              >
                <Icon size={24} strokeWidth={1.5} />
              </a>
            );
          })}
        </div>

        <p className="text-gray-600 font-mono text-sm">
          Built by <span className="text-gray-400">{personalInfo.name}</span> &copy; {new Date().getFullYear()}
        </p>
      </div>

      {/* Decorative gradient blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[300px] bg-white/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>
    </footer>
  );
};

export default Footer;
