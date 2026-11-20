import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { GraduationCap, MapPin, Building2, Sparkles, Award } from 'lucide-react';

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

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      aria-label="Education"
      className="relative py-10 sm:py-16 lg:py-28 scroll-mt-24 overflow-hidden"
    >
      {/* Ambient background purple glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[450px] rounded-full bg-gradient-to-tr from-purple-600/15 via-violet-600/12 to-indigo-600/10 blur-[130px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-2.5 sm:space-y-3"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-semibold tracking-wider uppercase font-display backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>MY LEARNING JOURNEY</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Academic{' '}
              <span className="gradient-text-purple inline-block">
                Foundation.
              </span>
            </h2>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
              Formal education and theoretical groundwork in artificial intelligence and computing systems.
            </p>
          </motion.div>
        </motion.div>

        {/* Academic Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Vertical Connecting Rail Line */}
          <div
            className="absolute left-6 sm:left-8 top-8 bottom-8 w-[2px] bg-gradient-to-b from-purple-500/60 via-violet-500/30 to-purple-900/10 pointer-events-none hidden sm:block"
            aria-hidden="true"
          />

          {/* Timeline Item Container */}
          <div className="relative flex flex-col sm:flex-row items-start sm:gap-8">
            
            {/* Timeline Marker Node */}
            <div className="flex items-center gap-3 sm:flex-col sm:items-center sm:gap-0 shrink-0 mb-3 sm:mb-0">
              <div className="relative flex items-center justify-center w-11 h-11 sm:w-16 sm:h-16 rounded-2xl bg-[#0e0e1a] border border-purple-500/40 text-purple-300 shadow-[0_0_25px_rgba(168,85,247,0.25)] backdrop-blur-md">
                <GraduationCap className="w-5 h-5 sm:w-8 sm:h-8 text-purple-300" />
                {/* Subtle pulsing live indicator dot */}
                <span className="absolute -top-1 -right-1 flex h-3 sm:h-3.5 w-3 sm:w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 sm:h-3.5 w-3 sm:w-3.5 bg-gradient-to-r from-violet-400 to-purple-500 border-2 border-[#09090f]" />
                </span>
              </div>
              <span className="sm:hidden text-[11px] font-semibold uppercase tracking-wider text-purple-300 bg-purple-950/60 px-2.5 py-1 rounded-full border border-purple-500/30">
                Current Education
              </span>
            </div>

            {/* Education Glass Card */}
            <div className="w-full relative group">
              {/* Outer gradient glow border */}
              <div className="relative p-[1px] rounded-2xl sm:rounded-3xl bg-gradient-to-b from-purple-400/40 via-violet-600/20 to-purple-950/20 shadow-[0_0_40px_rgba(139,92,246,0.15)] group-hover:shadow-[0_0_60px_rgba(168,85,247,0.28)] transition-all duration-500">
                
                {/* Inner Card */}
                <div className="relative p-4 sm:p-6 lg:p-8 rounded-[20px] sm:rounded-[23px] bg-[#0c0c16]/95 border border-purple-500/15 backdrop-blur-xl space-y-4 sm:space-y-6">
                  
                  {/* Top Bar: Year & Institution Type Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2.5 pb-4 sm:pb-5 border-b border-purple-500/15">
                    <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-semibold">
                      <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc]" />
                      <span>Second Year (Current)</span>
                    </div>

                    <span className="px-2.5 sm:px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] sm:text-xs font-medium text-slate-300">
                      Autonomous Institute
                    </span>
                  </div>

                  {/* Degree & Specialization */}
                  <div className="space-y-1 sm:space-y-1.5">
                    <div className="text-xs sm:text-sm lg:text-base font-semibold text-slate-300 uppercase tracking-wider font-display">
                      Bachelor of Technology (B.Tech)
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold gradient-text-purple tracking-tight leading-tight">
                      Artificial Intelligence and Data Science
                    </h3>
                  </div>

                  {/* Institution Details */}
                  <div className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-2 text-slate-300">
                    <div className="flex items-start gap-2.5 sm:gap-3">
                      <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm sm:text-base lg:text-lg font-semibold text-white">
                          Dr. D. Y. Patil College of Engineering & Innovation
                        </p>
                        <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-400 mt-0.5">
                          <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400/80 shrink-0" />
                          <span>Varale, Pune, Maharashtra</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 sm:gap-3 pt-0.5 sm:pt-1">
                      <Award className="w-5 h-5 text-violet-400 shrink-0" />
                      <p className="text-sm sm:text-base text-slate-300">
                        <span className="text-slate-400">Affiliation: </span>
                        <span className="font-medium text-purple-200">
                          Savitribai Phule Pune University (SPPU)
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Quick Feature Tags */}
                  <div className="pt-4 border-t border-purple-500/15 flex flex-wrap gap-2 text-xs font-medium text-slate-300">
                    <span className="px-3 py-1 rounded-lg bg-purple-950/30 border border-purple-500/25 text-purple-200">
                      B.Tech AI & DS
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-white/[0.02] border border-white/[0.06] text-slate-300">
                      SPPU Affiliated
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-white/[0.02] border border-white/[0.06] text-slate-300">
                      Pune, Maharashtra
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-white/[0.02] border border-white/[0.06] text-slate-300">
                      Second Year
                    </span>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
