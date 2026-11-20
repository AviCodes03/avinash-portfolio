import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';

// Custom SVG matching Lucide stroke style for Brand Icons
const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
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

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      aria-label="Contact Avinash Chavan"
      className="relative py-20 lg:py-28 scroll-mt-24 overflow-hidden"
    >
      {/* Ambient background lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] lg:w-[850px] h-[350px] sm:h-[500px] rounded-full bg-gradient-to-tr from-purple-600/15 via-violet-600/12 to-indigo-600/10 blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 sm:mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-semibold tracking-wider uppercase font-display backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Let's{' '}
            <span className="gradient-text-purple inline-block">
              Connect.
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Have an idea, an opportunity, or just want to talk about technology? Feel free to connect.
          </p>
        </motion.div>

        {/* Social Contact Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto w-full"
        >
          {/* Card 1: LinkedIn */}
          <motion.div variants={cardVariants} className="group relative">
            <div className="relative p-[1px] rounded-3xl bg-gradient-to-b from-purple-400/40 via-violet-600/20 to-purple-950/20 shadow-[0_0_35px_rgba(139,92,246,0.12)] group-hover:shadow-[0_0_55px_rgba(168,85,247,0.28)] transition-all duration-400 h-full flex flex-col justify-between">
              <div className="p-7 sm:p-8 rounded-[23px] bg-[#0c0c16]/95 border border-purple-500/15 backdrop-blur-xl h-full flex flex-col justify-between space-y-6">
                
                {/* Top Row: Icon & Category */}
                <div className="flex items-center justify-between gap-3">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 border border-violet-500/30 text-violet-300 shadow-[0_0_20px_rgba(139,92,246,0.2)] group-hover:scale-105 transition-transform duration-300">
                    <LinkedinIcon className="w-6 h-6" />
                  </div>

                  <span className="px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300">
                    Professional Network
                  </span>
                </div>

                {/* Identity & Context */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase font-display">
                    LinkedIn Profile
                  </span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors font-display">
                    Avinash Chavan
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed pt-1">
                    Connect for professional networking, tech discussions, AI collaborations and community initiatives.
                  </p>
                </div>

                {/* Action Link Button */}
                <div className="pt-2">
                  <a
                    href="https://www.linkedin.com/in/avinashchavan03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white overflow-hidden shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 group-hover/btn:from-purple-500 group-hover/btn:via-violet-500 group-hover/btn:to-indigo-500 transition-colors duration-300" />
                    <span className="absolute inset-x-0 top-0 h-[1px] bg-white/30" />
                    
                    <span className="relative z-10 flex items-center gap-2">
                      <LinkedinIcon className="w-4 h-4 text-purple-200" />
                      <span>Connect on LinkedIn</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 text-purple-200" />
                    </span>
                  </a>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Card 2: GitHub */}
          <motion.div variants={cardVariants} className="group relative">
            <div className="relative p-[1px] rounded-3xl bg-gradient-to-b from-purple-400/40 via-violet-600/20 to-purple-950/20 shadow-[0_0_35px_rgba(139,92,246,0.12)] group-hover:shadow-[0_0_55px_rgba(168,85,247,0.28)] transition-all duration-400 h-full flex flex-col justify-between">
              <div className="p-7 sm:p-8 rounded-[23px] bg-[#0c0c16]/95 border border-purple-500/15 backdrop-blur-xl h-full flex flex-col justify-between space-y-6">
                
                {/* Top Row: Icon & Category */}
                <div className="flex items-center justify-between gap-3">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-purple-500/20 to-violet-500/20 border border-purple-500/30 text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.2)] group-hover:scale-105 transition-transform duration-300">
                    <GithubIcon className="w-6 h-6" />
                  </div>

                  <span className="px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300">
                    Open Source & Code
                  </span>
                </div>

                {/* Identity & Context */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase font-display">
                    GitHub Profile
                  </span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors font-display">
                    Avinash Chavan
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed pt-1">
                    Explore my open-source repositories, AI projects, full-stack applications and latest code experiments.
                  </p>
                </div>

                {/* Action Link Button */}
                <div className="pt-2">
                  <a
                    href="https://github.com/AviCodes03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-purple-200 bg-purple-950/30 hover:bg-purple-900/40 border border-purple-500/30 hover:border-purple-400/60 shadow-[0_0_15px_rgba(147,51,234,0.15)] hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <GithubIcon className="w-4 h-4 text-purple-300" />
                    <span>Explore My GitHub</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 text-purple-300" />
                  </a>
                </div>

              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
