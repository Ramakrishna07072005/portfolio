import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import GithubFeed from './sections/GithubFeed';
import Skills from './sections/Skills';
import EducationExperience from './sections/EducationExperience';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-carbon-950 text-carbon-100 selection:bg-copper-500/30 selection:text-copper-400">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <GithubFeed />
        <Skills />
        <EducationExperience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
