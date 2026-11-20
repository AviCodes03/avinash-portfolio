import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Sparkles, Send, Brain, Award } from 'lucide-react';

// Custom SVG matching Lucide stroke style for Brand Icons
const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      aria-label="Introduction and Hero"
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center pt-8 pb-16 lg:py-20 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6 sm:space-y-7"
          >
            {/* Small Badge: GOOGLE STUDENT AMBASSADOR 2026 */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-200 shadow-[0_0_20px_rgba(168,85,247,0.18)] backdrop-blur-md hover:border-purple-400/50 transition-colors">
                {/* Glowing Ambassador Pulse Dot */}
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-violet-400 to-purple-500" />
                </span>
                <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase font-display">
                  GOOGLE STUDENT AMBASSADOR 2026
                </span>
              </div>
            </motion.div>

            {/* Main Heading: Hi, I'm Avinash Chavan. */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold tracking-tight text-white leading-[1.12]">
                Hi, I'm{' '}
                <span className="gradient-text-purple inline-block drop-shadow-[0_0_35px_rgba(168,85,247,0.35)]">
                  Avinash Chavan.
                </span>
              </h1>
            </motion.div>

            {/* Supporting Text */}
            <motion.div variants={itemVariants}>
              <p className="text-lg sm:text-xl md:text-2xl text-purple-200/90 font-medium leading-relaxed max-w-2xl">
                A curious mind exploring the world of Artificial Intelligence, technology and innovation.
              </p>
            </motion.div>

            {/* Professional Description */}
            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
                Second-year B.Tech Artificial Intelligence and Data Science student at Dr. D. Y. Patil College of Engineering & Innovation, Pune.
              </p>
            </motion.div>

            {/* Action Buttons & Social Icons */}
            <motion.div
              variants={itemVariants}
              className="w-full pt-2 flex flex-wrap items-center gap-4 sm:gap-5"
            >
              {/* Primary Button: Explore My Work */}
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl font-semibold text-white overflow-hidden shadow-[0_0_25px_rgba(147,51,234,0.35)] hover:shadow-[0_0_35px_rgba(168,85,247,0.55)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                {/* Background Gradient */}
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 group-hover:from-purple-500 group-hover:via-violet-500 group-hover:to-indigo-500 transition-all duration-300" />
                {/* Inner Glow Border */}
                <span className="absolute inset-0 rounded-xl border border-white/20 pointer-events-none" />
                
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-200 transition-transform duration-300 group-hover:rotate-12" />
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>

              {/* Secondary Button: Let's Connect */}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl font-semibold text-purple-200 bg-purple-950/30 hover:bg-purple-900/40 border border-purple-500/30 hover:border-purple-400/60 shadow-[0_0_15px_rgba(147,51,234,0.15)] hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send className="w-4 h-4 text-purple-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                <span>Let's Connect</span>
              </a>

              {/* GitHub and LinkedIn Social Links */}
              <div className="flex items-center gap-2.5 sm:ml-2">
                <a
                  href="https://github.com/AviCodes03"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl bg-white/[0.04] hover:bg-purple-500/15 border border-white/[0.08] hover:border-purple-500/40 text-slate-300 hover:text-purple-200 transition-all duration-300 shadow-sm hover:shadow-[0_0_18px_rgba(168,85,247,0.3)] hover:scale-105"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/avinashchavan03"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl bg-white/[0.04] hover:bg-purple-500/15 border border-white/[0.08] hover:border-purple-500/40 text-slate-300 hover:text-purple-200 transition-all duration-300 shadow-sm hover:shadow-[0_0_18px_rgba(168,85,247,0.3)] hover:scale-105"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Photograph Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Glowing Purple/Violet Ambient Backdrop */}
            <div
              className="absolute w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 rounded-full bg-gradient-to-tr from-purple-600/35 via-violet-500/25 to-indigo-600/20 blur-[80px] pointer-events-none -z-10"
              aria-hidden="true"
            />

            {/* Main Portrait Frame Container */}
            <div className="relative group max-w-[340px] sm:max-w-[390px] w-full">
              
              {/* Outer decorative glowing ring / gradient border */}
              <div className="relative p-[2px] rounded-3xl bg-gradient-to-b from-purple-400/50 via-violet-600/30 to-purple-900/10 shadow-[0_0_40px_rgba(139,92,246,0.25)] transition-shadow duration-500 group-hover:shadow-[0_0_55px_rgba(168,85,247,0.4)]">
                
                {/* Frame Inner Glass Card */}
                <div className="relative rounded-[22px] overflow-hidden bg-[#0c0c16] aspect-[4/5] sm:aspect-[3/4]">
                  
                  {/* Subtle inner top highlight */}
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none z-10" />

                  {/* Profile Photograph - Actual photo from /images/profile.png */}
                  <img
                    src="/images/profile.png"
                    alt="Avinash Chavan - Profile Photograph"
                    className="w-full h-full object-cover object-top select-none transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="eager"
                  />

                  {/* Soft bottom vignette overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#09090f]/90 via-[#09090f]/30 to-transparent pointer-events-none z-10" />
                </div>
              </div>

              {/* Floating Decorative Element 1: AI / Data Science (Top Left) */}
              <motion.div
                animate={{
                  y: [-4, 6, -4],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-4 -left-3 sm:-left-6 z-20"
              >
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#0d0d17]/85 border border-purple-500/30 backdrop-blur-xl shadow-lg shadow-black/40 text-xs font-semibold text-purple-200">
                  <div className="p-1 rounded-lg bg-purple-500/20 text-purple-300">
                    <Brain className="w-4 h-4" />
                  </div>
                  <span>AI & Data Science</span>
                </div>
              </motion.div>

              {/* Floating Decorative Element 2: Google Ambassador (Bottom Right) */}
              <motion.div
                animate={{
                  y: [5, -5, 5],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="absolute -bottom-4 -right-3 sm:-right-5 z-20"
              >
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#0d0d17]/85 border border-purple-500/30 backdrop-blur-xl shadow-lg shadow-black/40 text-xs font-semibold text-slate-200">
                  <div className="p-1 rounded-lg bg-violet-500/20 text-violet-300">
                    <Award className="w-4 h-4" />
                  </div>
                  <span>Google Ambassador '26</span>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
