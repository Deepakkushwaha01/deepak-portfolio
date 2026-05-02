import React from 'react';
import { skills } from '../data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-12 max-w-6xl mx-auto border-t border-white/5">
      <h2 className="flex items-center text-3xl md:text-4xl font-bold text-white mb-12">
        <span className="text-gray-500 font-mono text-2xl mr-4">01.</span>
        Technical Skills
        <div className="ml-6 flex-grow h-px bg-white/10"></div>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skillGroup, index) => (
          <div key={index} className="bg-card p-8 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-6 font-mono tracking-tight">
              {skillGroup.category}
            </h3>
            <ul className="space-y-3">
              {skillGroup.items.map((skill, i) => (
                <li key={i} className="flex items-center text-gray-400">
                  <span className="text-white/50 mr-3 text-lg leading-none">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
