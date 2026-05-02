import React from 'react';
import { personalInfo, socialLinks } from '../data/portfolio';

const Hero = () => {
  return (
    <section id="about" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 min-h-screen relative">

      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[600px] bg-white/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className="flex-1 text-center md:text-left order-2 md:order-1">
        <p className="text-gray-400 font-mono font-medium tracking-wide mb-4">Hi, I'm</p>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight whitespace-nowrap">
          {personalInfo.name}.
        </h1>
        <h2 className="text-xl md:text-3xl font-bold text-gray-400 mb-6 leading-tight">
          {personalInfo.tagline}
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto md:mx-0">
          {personalInfo.about}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Deepak_Kushwaha_Resume.pdf"
            className="px-8 py-4 bg-white text-black hover:bg-gray-200 transition-all rounded-lg font-bold tracking-wide w-full sm:w-auto"
          >
            Download Resume
          </a>

          <div className="flex items-center space-x-5">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors hover:-translate-y-1 transform duration-200"
                  aria-label={link.name}
                >
                  <Icon size={26} strokeWidth={1.5} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex-1 order-1 md:order-2 flex justify-center md:justify-end">
        <div className="relative group">
          <div className="absolute inset-0 border-2 border-white/20 translate-x-4 translate-y-4 rounded-2xl transition-transform group-hover:translate-x-2 group-hover:translate-y-2 -z-10"></div>
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-card bg-card">
            <img
              src={personalInfo.avatarUrl}
              alt={personalInfo.name}
              className="w-full h-full object-cover  transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
