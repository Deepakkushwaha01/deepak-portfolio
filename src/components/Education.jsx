import React from 'react';
import { education } from '../data/portfolio';

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 md:px-12 max-w-4xl mx-auto border-t border-white/5">
      <h2 className="flex items-center text-3xl md:text-4xl font-bold text-white mb-12">
        <span className="text-gray-500 font-mono text-2xl mr-4">03.</span>
        Education
        <div className="ml-6 flex-grow h-px bg-white/10"></div>
      </h2>

      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
        {education.map((edu, index) => {
          const Icon = edu.icon;
          return (
            <div key={edu.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white/20 bg-dark shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10 text-white">
                <Icon size={18} />
              </div>
              
              {/* Content */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl bg-card border border-white/5 hover:border-white/20 transition-all shadow-md group-hover:-translate-y-1">
                <div className="flex flex-col mb-2">
                  <h3 className="font-bold text-xl text-white">{edu.degree}</h3>
                  <div className="text-gray-400 font-mono text-sm tracking-tight mt-1">{edu.institution}</div>
                </div>
                <time className="text-sm font-mono text-gray-500 mb-4 block">{edu.duration}</time>
                <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
