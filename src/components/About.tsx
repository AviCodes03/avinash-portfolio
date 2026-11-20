import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Brain, Code2, Rocket, Globe, Sparkles, Quote, ChevronDown } from 'lucide-react';

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const pillars = [
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description: 'Machine Learning, Data Science & Intelligent Algorithms',
    accent: 'from-purple-500/20 to-violet-500/20',
    iconColor: 'text-purple-300',
    borderColor: 'border-purple-500/20',
  },
  {
    icon: Globe,
    title: 'Google Ambassador',
    description: 'Community leadership, ecosystem engagement & peer learning',
    accent: 'from-violet-500/20 to-indigo-500/20',
    iconColor: 'text-violet-300',
    borderColor: 'border-violet-500/20',
  },
  {
    icon: Code2,
    title: 'Software Development',
    description: 'Python, modern web technologies & hands-on projects',
    accent: 'from-indigo-500/20 to-purple-500/20',
    iconColor: 'text-indigo-300',
    borderColor: 'border-indigo-500/20',
  },
  {
    icon: Rocket,
    title: 'Hackathons & Innovation',
    description: 'Collaborative problem solving & real-world solutions',
    accent: 'from-purple-500/20 to-fuchsia-500/20',
    iconColor: 'text-purple-300',
    borderColor: 'border-purple-500/20',
  },
];

export const About: React.FC = () => {
  const scrollToDetails = () => {
    const el = document.getElementById('about-details');
    if (el) {
      const navOffset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      aria-label="About Avinash Vilas Chavan"
      className="relative scroll-mt-24 overflow-hidden pt-4 sm:pt-8"
    >
      {/* =========================================================================
          PART 1: PERSONAL PHOTO INTRODUCTION (Cinematic Visual Entrance)
         ========================================================================= */}
      <div className="min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center items-center py-6 sm:py-12 px-4 sm:px-6 lg:px-8 relative w-full">
        {/* Ambient violet/purple glow behind photo */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] lg:w-[850px] h-[320px] sm:h-[600px] lg:h-[650px] rounded-full bg-gradient-to-tr from-purple-600/25 via-violet-600/18 to-indigo-600/12 blur-[120px] pointer-events-none -z-10"
          aria-hidden="true"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl w-full flex flex-col items-center"
        >
          {/* Header Typography */}
          <div className="text-center mb-6 sm:mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-semibold tracking-wider uppercase font-display backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)] mb-1">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>ABOUT ME</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Avinash Vilas Chavan
            </h2>
            <p className="text-purple-300 text-base sm:text-lg md:text-xl font-normal italic font-display">
              A little more about me.
            </p>
          </div>

          {/* Cinematic Photograph Container */}
          <div className="relative w-full max-w-2xl lg:max-w-3xl group">
            {/* Outer subtle glowing ring with refined rounded corners */}
            <div className="relative p-[2px] rounded-3xl bg-gradient-to-b from-purple-400/40 via-violet-600/25 to-purple-900/10 shadow-[0_0_60px_rgba(139,92,246,0.22)] transition-shadow duration-500 group-hover:shadow-[0_0_80px_rgba(168,85,247,0.35)]">
              {/* Inner card preserving the entire photograph without cropping face */}
              <div className="relative rounded-[22px] overflow-hidden bg-[#0c0c16] flex items-center justify-center p-2 sm:p-3">
                {/* Subtle top sheen */}
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.06] to-transparent pointer-events-none z-10" />

                <img
                  src="/images/about.jpg"
                  alt="Avinash Vilas Chavan - Personal Photograph"
                  className="w-full max-h-[60vh] sm:max-h-[68vh] md:max-h-[72vh] object-contain object-center rounded-xl select-none transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  loading="eager"
                />

                {/* Subtle bottom dark gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#09090f]/90 via-[#09090f]/30 to-transparent pointer-events-none z-10" />
              </div>
            </div>
          </div>

          {/* Interactive Scroll Cue to Part 2 */}
          <motion.button
            type="button"
            onClick={scrollToDetails}
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="mt-8 flex flex-col items-center gap-1.5 text-slate-400 hover:text-purple-300 transition-colors cursor-pointer group focus:outline-none"
            aria-label="Scroll down to detailed introduction"
          >
            <span className="text-xs uppercase tracking-widest font-semibold font-display text-slate-400 group-hover:text-purple-200">
              Scroll To Explore
            </span>
            <ChevronDown className="w-4 h-4 text-purple-400 transition-transform group-hover:translate-y-0.5" />
          </motion.button>
        </motion.div>
      </div>

      {/* Cinematic Transition Divider */}
      <div className="w-full max-w-5xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      </div>

      {/* =========================================================================
          PART 2: DETAILED INTRODUCTION & STORY
         ========================================================================= */}
      <div id="about-details" className="py-20 lg:py-28 relative scroll-mt-24">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: About Me Text Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="lg:col-span-7 flex flex-col items-start space-y-6"
            >
              {/* Section Tag Badge */}
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-semibold tracking-wider uppercase font-display backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  <span>DISCOVER MY JOURNEY</span>
                </div>
              </motion.div>

              {/* Preserved Section Heading */}
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Driven by Curiosity,{' '}
                  <span className="gradient-text-purple inline-block">
                    Powered by Innovation.
                  </span>
                </h2>
              </motion.div>

              {/* Content Paragraphs */}
              <motion.div variants={itemVariants} className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                <p>
                  I'm <span className="text-white font-medium">Avinash Vilas Chavan</span>, a second-year B.Tech student pursuing Artificial Intelligence and Data Science at Dr. D. Y. Patil College of Engineering & Innovation, Pune.
                </p>

                <p>
                  I'm curious about how technology works and how innovative ideas can become meaningful real-world solutions.
                </p>

                <p>
                  My interests include Artificial Intelligence, Machine Learning, Data Science and Software Development. Currently, I'm strengthening my programming fundamentals, learning Python and Web Development, and exploring new technologies through hands-on projects.
                </p>

                <p>
                  As a <span className="text-purple-300 font-semibold">Google Student Ambassador 2026</span>, I get opportunities to connect with fellow learners, explore the technology ecosystem and contribute to the tech community.
                </p>

                <p>
                  I also enjoy participating in hackathons, collaborating with people, exchanging ideas and learning beyond the classroom.
                </p>
              </motion.div>

              {/* Philosophy Highlight Box */}
              <motion.div
                variants={itemVariants}
                className="w-full pt-2"
              >
                <div className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 to-indigo-950/20 border-l-4 border-purple-500 border-y border-r border-purple-500/20 backdrop-blur-md shadow-lg shadow-black/20">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 shrink-0 mt-0.5">
                      <Quote className="w-4 h-4" />
                    </div>
                    <p className="text-purple-100/95 italic text-base sm:text-lg leading-relaxed font-normal">
                      I believe technology is not just about writing code; it's about curiosity, creativity, continuous learning and solving meaningful problems.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Visual Elements Representing AI, Technology & Innovation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 25 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 relative w-full flex justify-center"
            >
              {/* Ambient Purple Backlight */}
              <div
                className="absolute -inset-4 w-full h-full rounded-3xl bg-gradient-to-tr from-purple-600/25 via-violet-600/15 to-indigo-600/10 blur-[80px] pointer-events-none -z-10"
                aria-hidden="true"
              />

              {/* High-Tech Innovation Panel */}
              <div className="w-full max-w-md sm:max-w-lg p-6 sm:p-7 rounded-3xl bg-[#0c0c16]/90 border border-purple-500/20 backdrop-blur-xl shadow-[0_0_40px_rgba(139,92,246,0.15)] relative overflow-hidden">
                
                {/* Header inside Panel */}
                <div className="flex items-center justify-between pb-5 mb-5 border-b border-purple-500/15">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
                    </span>
                    <span className="text-xs font-semibold tracking-wider text-slate-300 uppercase font-display">
                      Core Pillars
                    </span>
                  </div>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300">
                    AI & Innovation
                  </span>
                </div>

                {/* 4 Core Pillars Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {pillars.map((pillar) => {
                    const Icon = pillar.icon;
                    return (
                      <div
                        key={pillar.title}
                        className="group p-4 rounded-2xl bg-white/[0.02] hover:bg-purple-950/20 border border-white/[0.06] hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className={`p-2 rounded-xl bg-gradient-to-br ${pillar.accent} border ${pillar.borderColor} ${pillar.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                            <Icon className="w-4 h-4" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-white group-hover:text-purple-200 transition-colors">
                            {pillar.title}
                          </h3>
                          <p className="text-xs text-slate-400 mt-1 leading-snug">
                            {pillar.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Interactive Focus Tags Bar */}
                <div className="mt-5 pt-4 border-t border-purple-500/15">
                  <div className="flex flex-wrap gap-2 text-[11px] font-medium text-slate-400">
                    <span className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-purple-300">#ArtificialIntelligence</span>
                    <span className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-purple-300">#DataScience</span>
                    <span className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-purple-300">#Python</span>
                    <span className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-purple-300">#WebDevelopment</span>
                    <span className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-purple-300">#GoogleAmbassador</span>
                    <span className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-purple-300">#Hackathons</span>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
