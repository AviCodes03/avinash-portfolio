import React from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  Sparkles,
  ExternalLink,
  Banknote,
  Film,
  Lock,
  Wallet,
  Users,
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

interface Project {
  number: string;
  title: string;
  categoryBadge: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  icon: React.FC<{ className?: string }>;
  accentGradient: string;
  iconColor: string;
  borderColor: string;
  isTeamProject?: boolean;
}

const projectsData: Project[] = [
  {
    number: '01',
    title: 'AI Loan Eligibility Checker',
    categoryBadge: 'Fintech AI Application',
    description:
      'A full-stack educational fintech application that evaluates simulated loan eligibility, analyzes credit score health, calculates EMI and amortization schedules, and provides AI-powered financial guidance.',
    technologies: ['Node.js', 'Express.js', 'JavaScript', 'Anthropic Claude API', 'Google Sheets'],
    githubUrl: 'https://github.com/AviCodes03/ai-loan-eligibility-checker',
    liveDemoUrl: 'https://ai-loan-eligibility-checker.vercel.app/',
    icon: Banknote,
    accentGradient: 'from-purple-500/20 to-violet-500/20',
    iconColor: 'text-purple-300',
    borderColor: 'border-purple-500/30',
  },
  {
    number: '02',
    title: 'SnapExplain AI',
    categoryBadge: 'Gemma Academic AI',
    description:
      'A Gemma-powered academic tutoring application that simplifies complex concepts through Quick & Easy, Step-by-Step and Exam Ready explanations, with interactive practice quizzes and automated grading.',
    technologies: ['Python', 'Flask', 'Google Gemma', 'google-genai SDK', 'JavaScript'],
    githubUrl: 'https://github.com/AviCodes03/Build-With-Gemma-4',
    icon: Sparkles,
    accentGradient: 'from-violet-500/20 to-indigo-500/20',
    iconColor: 'text-violet-300',
    borderColor: 'border-violet-500/30',
  },
  {
    number: '03',
    title: 'CineMind AI',
    categoryBadge: 'Recommendation Platform',
    description:
      'An AI-powered movie discovery and recommendation platform designed to help users explore movies and receive personalized recommendations.',
    technologies: ['Python', 'FastAPI', 'NLP', 'React', 'TypeScript'],
    githubUrl: 'https://github.com/AviCodes03/CineMind-AI',
    liveDemoUrl: 'https://cinemind-bd57rtd5l-avinash-36bf.vercel.app/',
    icon: Film,
    accentGradient: 'from-indigo-500/20 to-purple-500/20',
    iconColor: 'text-indigo-300',
    borderColor: 'border-indigo-500/30',
  },
  {
    number: '04',
    title: 'LeakLock AI — VORTEXA 3.0',
    categoryBadge: 'Hackathon Security Project',
    description:
      'An AI security middleware project developed for the VORTEXA 3.0 hackathon, focused on protecting LLM applications against prompt injection, sensitive data exposure and unsafe tool interactions.',
    technologies: ['Python', 'FastAPI', 'LLM Security', 'Middleware', 'Prompt Defense'],
    githubUrl: 'https://github.com/vighneshkulkarni897530-svg/vortexa-3.0',
    icon: Lock,
    accentGradient: 'from-purple-500/20 to-fuchsia-500/20',
    iconColor: 'text-purple-300',
    borderColor: 'border-purple-500/30',
    isTeamProject: true,
  },
  {
    number: '05',
    title: 'Personal Finance Advisor',
    categoryBadge: 'Personal Finance Tool',
    description:
      'A personal finance project repository focused on financial planning, budgeting strategies and advisory tooling.',
    technologies: ['Financial Planning', 'Budgeting Tool', 'Python / Scripting'],
    githubUrl: 'https://github.com/AviCodes03/personal-finance-advisor',
    icon: Wallet,
    accentGradient: 'from-violet-500/20 to-purple-500/20',
    iconColor: 'text-violet-300',
    borderColor: 'border-violet-500/30',
  },
];

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

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      aria-label="Featured Projects"
      className="relative py-20 lg:py-28 scroll-mt-24 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] lg:w-[900px] h-[350px] sm:h-[600px] rounded-full bg-gradient-to-tr from-purple-600/15 via-violet-600/10 to-indigo-600/10 blur-[140px] pointer-events-none -z-10"
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
            <span>WHAT I'VE BUILT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Featured{' '}
            <span className="gradient-text-purple inline-block">
              Projects.
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A collection of projects where curiosity meets practical problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {projectsData.map((project, index) => {
            const Icon = project.icon;
            const isFullWidthOnLarge = index === 4;

            return (
              <motion.div
                key={project.title}
                variants={cardVariants}
                className={`group relative ${isFullWidthOnLarge ? 'md:col-span-2 lg:max-w-3xl lg:mx-auto w-full' : ''}`}
              >
                {/* Outer gradient glow container */}
                <div className="relative p-[1px] rounded-3xl bg-gradient-to-b from-purple-400/35 via-violet-600/15 to-purple-950/20 shadow-[0_0_35px_rgba(139,92,246,0.12)] group-hover:shadow-[0_0_55px_rgba(168,85,247,0.25)] transition-all duration-400 h-full">
                  
                  {/* Inner glass card */}
                  <div className="p-6 sm:p-8 rounded-[23px] bg-[#0c0c16]/95 border border-purple-500/15 backdrop-blur-xl h-full flex flex-col justify-between space-y-6">
                    
                    {/* Top Row: Number, Icon & Category Badge */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2.5 rounded-xl bg-gradient-to-br ${project.accentGradient} border ${project.borderColor} ${project.iconColor} transition-transform duration-300 group-hover:scale-105`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-display font-bold text-sm tracking-widest text-purple-400 bg-purple-950/50 border border-purple-500/25 px-2.5 py-1 rounded-full">
                          {project.number}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {project.isTeamProject && (
                          <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-[11px] font-medium text-violet-300">
                            <Users className="w-3 h-3" />
                            <span>Team Project</span>
                          </span>
                        )}
                        <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-medium text-slate-300">
                          {project.categoryBadge}
                        </span>
                      </div>
                    </div>

                    {/* Middle: Title & Description */}
                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-200 transition-colors font-display tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        {project.description}
                      </p>
                      {project.isTeamProject && (
                        <p className="text-xs text-purple-300/80 italic">
                          * Collaborative team project developed for the VORTEXA 3.0 hackathon.
                        </p>
                      )}
                    </div>

                    {/* Tech Stack Tags */}
                    {project.technologies.length > 0 && (
                      <div className="pt-2">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs font-medium text-purple-200/90 group-hover:border-purple-500/30 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Links: GitHub & Optional Live Demo */}
                    <div className="pt-4 border-t border-purple-500/15 flex flex-wrap items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-white/[0.04] hover:bg-purple-500/20 border border-white/[0.1] hover:border-purple-500/40 transition-all duration-300 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <GithubIcon className="w-4 h-4 text-purple-300" />
                        <span>GitHub</span>
                      </a>

                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5 text-purple-200" />
                        </a>
                      )}
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
