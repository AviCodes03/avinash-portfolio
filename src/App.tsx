import React from 'react';
import { BackgroundGlow } from './components/BackgroundGlow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#09090f] text-slate-100 flex flex-col selection:bg-purple-600 selection:text-white">
      {/* Background Animated Glows & Patterns */}
      <BackgroundGlow />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative z-10 flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Education Section */}
        <Education />

        {/* Technical Skills Section */}
        <Skills />

        {/* Featured Projects Section */}
        <Projects />

        {/* Certifications & Achievements Section */}
        <Certificates />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Professional Footer */}
      <Footer />
    </div>
  );
};

export default App;
