import React from 'react';
import { BackgroundGlow } from './components/BackgroundGlow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { GsaJourney } from './components/GsaJourney';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#09090f] text-slate-100 flex flex-col selection:bg-purple-600 selection:text-white">
      {/* Background Animated Glows & Patterns */}
      <BackgroundGlow />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Area - 8 Ordered Homepage Sections */}
      <main className="relative z-10 flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Section */}
        <About />

        {/* 3. Education Section */}
        <Education />

        {/* 4. Technical Skills Section */}
        <Skills />

        {/* 5. Featured Projects Section */}
        <Projects />

        {/* 6. Certifications & Achievements Section */}
        <Certificates />

        {/* 7. Google Student Ambassador 2026 Journey (INLINE SECTION) */}
        <GsaJourney />

        {/* 8. Contact Section */}
        <Contact />
      </main>

      {/* 9. Professional Footer */}
      <Footer />
    </div>
  );
};

export default App;
