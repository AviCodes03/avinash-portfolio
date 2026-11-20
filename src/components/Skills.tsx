import React from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  Sparkles,
  Terminal,
  Code2,
  Coffee,
  Brain,
  Cpu,
  Database,
  Globe,
  Layout,
  FileCode2,
  Atom,
  GitBranch,
  Wrench,
  Bot,
} from 'lucide-react';

// Custom SVG matching Lucide stroke style for GitHub
const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
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
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
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

interface SkillItem {
  name: string;
  icon: React.FC<{ className?: string }>;
}

interface SkillCategory {
  title: string;
  icon: React.FC<{ className?: string }>;
  accent: string;
  iconColor: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: Terminal,
    accent: 'from-purple-500/20 to-violet-500/20',
    iconColor: 'text-purple-300',
    skills: [
      { name: 'C', icon: Code2 },
      { name: 'C++', icon: Code2 },
      { name: 'Java', icon: Coffee },
      { name: 'Python', icon: Terminal },
    ],
  },
  {
    title: 'AI & Data Science',
    icon: Brain,
    accent: 'from-violet-500/20 to-indigo-500/20',
    iconColor: 'text-violet-300',
    skills: [
      { name: 'Artificial Intelligence', icon: Brain },
      { name: 'Machine Learning', icon: Cpu },
      { name: 'Data Science', icon: Database },
    ],
  },
  {
    title: 'Web Development',
    icon: Layout,
    accent: 'from-indigo-500/20 to-purple-500/20',
    iconColor: 'text-indigo-300',
    skills: [
      { name: 'HTML', icon: Globe },
      { name: 'CSS', icon: Layout },
      { name: 'JavaScript', icon: FileCode2 },
      { name: 'React', icon: Atom },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    accent: 'from-purple-500/20 to-fuchsia-500/20',
    iconColor: 'text-purple-300',
    skills: [
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: GithubIcon },
      { name: 'Visual Studio Code', icon: Terminal },
      { name: 'Antigravity IDE', icon: Bot },
    ],
  },
];

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      aria-label="Technical Skills"
      className="relative py-10 sm:py-16 lg:py-28 scroll-mt-24 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] lg:w-[850px] h-[350px] sm:h-[550px] rounded-full bg-gradient-to-tr from-purple-600/15 via-violet-600/10 to-indigo-600/10 blur-[130px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-2.5 sm:space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-semibold tracking-wider uppercase font-display backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>WHAT I WORK WITH</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Technical{' '}
            <span className="gradient-text-purple inline-block">
              Skills.
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
            Core programming languages, AI domains, modern web tools and development environments.
          </p>
        </motion.div>

        {/* 4 Skill Category Cards Grid - Responsive 2-column on >= 480px & sm */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-2 gap-3.5 sm:gap-5 lg:gap-8"
        >
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className="group relative"
              >
                {/* Outer border gradient container */}
                <div className="relative p-[1px] rounded-2xl sm:rounded-3xl bg-gradient-to-b from-purple-400/35 via-violet-600/15 to-purple-950/20 shadow-[0_0_35px_rgba(139,92,246,0.12)] group-hover:shadow-[0_0_55px_rgba(168,85,247,0.25)] transition-all duration-400 h-full">
                  {/* Inner glass card */}
                  <div className="p-4 sm:p-5 lg:p-7 rounded-[20px] sm:rounded-[23px] bg-[#0c0c16]/95 border border-purple-500/15 backdrop-blur-xl h-full flex flex-col justify-between space-y-3.5 sm:space-y-5">
                    
                    {/* Category Header */}
                    <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-purple-500/15">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div
                          className={`p-2 sm:p-2.5 rounded-xl bg-gradient-to-br ${category.accent} border border-purple-500/25 ${category.iconColor} transition-transform duration-300 group-hover:scale-105`}
                        >
                          <CategoryIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-purple-200 transition-colors font-display">
                          {category.title}
                        </h3>
                      </div>

                      <span className="text-[11px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-purple-950/60 border border-purple-500/25 text-purple-300">
                        {category.skills.length} Skills
                      </span>
                    </div>

                    {/* Skill Items Grid */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-2.5 lg:gap-3">
                      {category.skills.map((skill) => {
                        const SkillIcon = skill.icon;
                        return (
                          <div
                            key={skill.name}
                            className="flex items-center gap-2 sm:gap-2.5 p-2 sm:p-2.5 lg:p-3 rounded-xl bg-white/[0.02] hover:bg-purple-950/25 border border-white/[0.06] hover:border-purple-500/40 transition-all duration-300 group/item cursor-default"
                          >
                            <div className="p-1 sm:p-1.5 rounded-lg bg-purple-500/10 text-purple-300 group-hover/item:text-purple-200 group-hover/item:bg-purple-500/20 transition-colors shrink-0">
                              <SkillIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </div>
                            <span className="text-[11px] sm:text-xs lg:text-sm font-medium text-slate-200 group-hover/item:text-white transition-colors truncate">
                              {skill.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
