import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-grid-pattern relative">
      <div className="absolute inset-0 bg-dark radial-mask pointer-events-none -z-10"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
      </main>

      <Footer />
    </div>
  );
}

export default App;
