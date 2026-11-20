import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  Eye,
  X,
  Compass,
  Gift,
  Users,
  Presentation,
  CheckCircle2,
  Mail,
  Award,
  Sparkles,
} from 'lucide-react';

// Google Quad-Color Dots Component
const GoogleQuadDots: React.FC<{ className?: string }> = ({ className = 'w-2 h-2' }) => (
  <span className="inline-flex items-center gap-1" aria-hidden="true">
    <span className={`${className} rounded-full bg-[#4285F4]`} />
    <span className={`${className} rounded-full bg-[#EA4335]`} />
    <span className={`${className} rounded-full bg-[#FBBC05]`} />
    <span className={`${className} rounded-full bg-[#34A853]`} />
  </span>
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
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

interface GsaStoryMilestone {
  id: string;
  sectionNumber: string;
  badge: string;
  icon: React.FC<{ className?: string }>;
  heading: string;
  story: string;
  imageSrc: string;
  fallbackSrc?: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
  caption: string;
  isEmail?: boolean;
}

const gsaMilestones: GsaStoryMilestone[] = [
  {
    id: 'gsa-the-beginning',
    sectionNumber: 'CHAPTER 01',
    badge: 'Official Selection',
    icon: Mail,
    heading: 'The Beginning',
    story:
      "My journey as a Google Student Ambassador began with the opportunity to become part of Google's Student Ambassador Program 2026. This email represents the beginning of that experience.",
    imageSrc: '/images/gsa/Email.png',
    fallbackSrc: '/images/gsa/email.png',
    imageAlt: 'Google Student Ambassador 2026 Selection Email Confirmation',
    imagePosition: 'left',
    caption: 'Official selection confirmation from Google for the Student Ambassador Program 2026',
    isEmail: true,
  },
  {
    id: 'gsa-welcome-kit',
    sectionNumber: 'CHAPTER 02',
    badge: 'Ambassador Onboarding',
    icon: Gift,
    heading: 'A Welcome to the Journey',
    story:
      'A memorable moment of receiving the Google Student Ambassador welcome kit, representing the beginning of my ambassador experience.',
    imageSrc: '/images/gsa/welcome-kit.jpg',
    imageAlt: 'Official Google Student Ambassador Welcome Kit and Merchandise',
    imagePosition: 'right',
    caption: 'Official GSA 2026 welcome kit marking the start of community initiatives',
  },
  {
    id: 'gsa-first-event',
    sectionNumber: 'CHAPTER 03',
    badge: 'Virtual Ecosystem Event',
    icon: Users,
    heading: 'The First Event',
    story:
      'My first online event as part of the GSA journey. A new opportunity to connect, learn and participate in the ambassador community.',
    imageSrc: '/images/gsa/first-event.jpg',
    imageAlt: 'Google Student Ambassador First Online Event Session',
    imagePosition: 'left',
    caption: 'Connecting with fellow ambassadors across the country during the first official virtual meetup',
  },
  {
    id: 'gsa-goodies',
    sectionNumber: 'CHAPTER 04',
    badge: 'Merchandise & Tokens',
    icon: Award,
    heading: 'A Little Appreciation',
    story:
      'A memorable collection of Google goodies and merchandise received during the journey.',
    imageSrc: '/images/gsa/goodies.jpg',
    imageAlt: 'Exclusive Google goodies, stickers and ambassador tokens',
    imagePosition: 'right',
    caption: 'Tokens of recognition and appreciation received from the Google Student Ambassador team',
  },
  {
    id: 'gsa-second-event',
    sectionNumber: 'CHAPTER 05',
    badge: 'Community Learning',
    icon: Compass,
    heading: 'Learning Together',
    story:
      'Another online event and another opportunity to engage with the community and learn.',
    imageSrc: '/images/gsa/second-event.jpg',
    imageAlt: 'Google Student Ambassador Second Online Learning Session',
    imagePosition: 'left',
    caption: 'Collaborative knowledge sharing and exploring modern developer technologies',
  },
  {
    id: 'gsa-fest-stall',
    sectionNumber: 'CHAPTER 06',
    badge: 'Campus Engagement',
    icon: Presentation,
    heading: 'Bringing the Experience to Campus',
    story:
      'Fest Stall Challenge Night, featuring the presentation and activities connected with the event.',
    imageSrc: '/images/gsa/fest-stall.png',
    imageAlt: 'Fest Stall Challenge Night presentation and interactive activities',
    imagePosition: 'right',
    caption: 'Fest Stall Challenge Night presentation bringing Google insights to students on campus',
  },
];

export const GsaJourney: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; title: string; caption: string } | null>(null);

  // Esc key listener to close lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedPhoto) {
        setSelectedPhoto(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto]);

  return (
    <section
      id="gsa"
      aria-label="Google Student Ambassador 2026 Journey"
      className="relative py-20 lg:py-28 scroll-mt-20 overflow-hidden"
    >
      {/* Background Ambient Violet Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] lg:w-[1000px] h-[350px] sm:h-[600px] rounded-full bg-gradient-to-tr from-purple-600/15 via-violet-600/12 to-indigo-600/10 blur-[150px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-gradient-to-tl from-purple-700/10 via-indigo-600/8 to-transparent blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* =========================================================================
            SECTION HEADER (Consistent with Homepage Design System)
           ========================================================================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20 space-y-3"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-semibold tracking-wider uppercase font-display backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              <GoogleQuadDots className="w-2 h-2" />
              <span>GSA 2026</span>
              <span className="text-purple-400/60">•</span>
              <span>GOOGLE STUDENT AMBASSADOR</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Google Student{' '}
              <span className="gradient-text-purple inline-block">
                Ambassador 2026.
              </span>
            </h2>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-purple-200/90 text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed font-display italic">
              "A journey of learning, leadership, community and technology."
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed pt-1">
              Documenting key moments, milestones, events and hands-on community experiences as an official Google Student Ambassador.
            </p>
          </motion.div>
        </motion.div>

        {/* =========================================================================
            SECTION 01: HERO PORTRAIT SHOWCASE (Visual Introduction)
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 sm:mb-24 relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Portrait Photograph (hero.jpg) */}
            <div className="lg:col-span-5 flex justify-center items-center order-1">
              <div className="relative group max-w-[320px] sm:max-w-[380px] w-full">
                
                {/* Outer Glow Ring */}
                <div className="relative p-[2px] rounded-3xl bg-gradient-to-b from-purple-400/50 via-violet-600/30 to-purple-900/10 shadow-[0_0_40px_rgba(139,92,246,0.25)] transition-shadow duration-500 group-hover:shadow-[0_0_60px_rgba(168,85,247,0.4)]">
                  <div
                    onClick={() =>
                      setSelectedPhoto({
                        src: '/images/gsa/hero.jpg',
                        title: 'Google Student Ambassador 2026',
                        caption: 'Avinash Chavan — Official Google Student Ambassador 2026 Portrait',
                      })
                    }
                    className="relative rounded-[22px] overflow-hidden bg-[#0c0c16] aspect-[3/4] p-1.5 cursor-pointer"
                  >
                    {/* Top Sheen */}
                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none z-10" />

                    <img
                      src="/images/gsa/hero.jpg"
                      alt="Avinash Chavan - Google Student Ambassador 2026"
                      className="w-full h-full object-cover object-top rounded-2xl select-none transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      loading="lazy"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-purple-950/50 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-medium text-xs sm:text-sm z-20">
                      <Eye className="w-4 h-4 text-purple-300" />
                      <span>Click to view full portrait</span>
                    </div>

                    {/* Bottom Vignette */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#09090f]/90 via-[#09090f]/20 to-transparent pointer-events-none z-10" />
                  </div>
                </div>

                {/* Floating Tag */}
                <div className="absolute -bottom-3.5 -right-2 sm:-right-4 z-20">
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-[#0d0d17]/90 border border-purple-500/35 backdrop-blur-xl shadow-lg shadow-black/40 text-xs font-semibold text-slate-200">
                    <GoogleQuadDots className="w-2 h-2" />
                    <span>Ambassador Class of '26</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Narrative */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-5 order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-200 text-xs font-semibold uppercase tracking-wider font-display">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>LEADERSHIP & ENGAGEMENT</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Empowering Peers, Exploring Technologies & Building Community.
              </h3>

              <div className="space-y-3.5 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  As an official <span className="text-white font-medium">Google Student Ambassador for 2026</span>, I represent Google's vibrant ecosystem on campus, creating pathways for students to explore artificial intelligence, cloud computing, developer tools and modern digital innovation.
                </p>
                <p>
                  This dedicated showcase highlights the authentic milestones of my ambassador journey — from receiving the official selection confirmation to community meetups, learning sessions, Google merchandise and campus hackathon initiatives.
                </p>
              </div>

              {/* Key Highlights Pill Row */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium text-slate-300">
                <span className="px-3 py-1 rounded-lg bg-purple-950/30 border border-purple-500/25 text-purple-200">
                  Official Selection
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-300">
                  Welcome Kit & Tokens
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-300">
                  Virtual Meetups
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-300">
                  Fest Stall Challenge
                </span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Subtle Divider */}
        <div className="w-full max-w-5xl mx-auto px-4 mb-16 sm:mb-20">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/25 to-transparent" />
        </div>

        {/* =========================================================================
            SECTIONS 02 to 07: ALTERNATING CHAPTERS (The Complete GSA Story)
           ========================================================================= */}
        <div className="space-y-16 sm:space-y-24">
          {gsaMilestones.map((item, index) => {
            const MilestoneIcon = item.icon;
            const isImageLeft = item.imagePosition === 'left';

            return (
              <motion.div
                key={item.id}
                id={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
                  
                  {/* =============================================================
                      IMAGE COLUMN (Mobile: order-1; Desktop: follows isImageLeft)
                     ============================================================= */}
                  <div
                    className={`w-full ${
                      isImageLeft
                        ? 'lg:col-span-6 lg:order-1'
                        : 'lg:col-span-6 lg:order-2'
                    } order-1 flex justify-center`}
                  >
                    <div className="relative group w-full max-w-xl">
                      {/* Gradient border container */}
                      <div className="relative p-[1.5px] rounded-2xl sm:rounded-3xl bg-gradient-to-b from-purple-400/40 via-violet-600/20 to-purple-950/20 shadow-[0_0_35px_rgba(139,92,246,0.15)] group-hover:shadow-[0_0_55px_rgba(168,85,247,0.3)] transition-all duration-500">
                        
                        {/* Image Frame */}
                        <div
                          onClick={() =>
                            setSelectedPhoto({
                              src: item.imageSrc,
                              title: item.heading,
                              caption: item.caption,
                            })
                          }
                          className={`relative rounded-[19px] sm:rounded-[23px] overflow-hidden bg-[#07070d] flex items-center justify-center cursor-pointer ${
                            item.isEmail
                              ? 'p-2 sm:p-4 min-h-[380px] sm:min-h-[500px] lg:min-h-[580px]'
                              : 'p-1.5 sm:p-2 min-h-[240px] sm:min-h-[320px]'
                          }`}
                        >
                          {/* Inner Top Sheen */}
                          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none z-10" />

                          {/* Photograph / Screenshot */}
                          <img
                            src={item.imageSrc}
                            alt={item.imageAlt}
                            className={`w-auto max-w-full object-contain object-center rounded-xl sm:rounded-2xl select-none transition-transform duration-700 ease-out group-hover:scale-[1.015] ${
                              item.isEmail
                                ? 'h-auto max-h-[540px] sm:max-h-[640px] lg:max-h-[680px] shadow-lg shadow-black/80'
                                : 'h-auto max-h-[360px] sm:max-h-[440px] lg:max-h-[480px]'
                            }`}
                            loading="lazy"
                            onError={(e) => {
                              const target = e.currentTarget;
                              if (!target.dataset.tried && item.fallbackSrc) {
                                target.dataset.tried = 'true';
                                target.src = item.fallbackSrc;
                              }
                            }}
                          />

                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-purple-950/50 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-medium text-xs sm:text-sm z-20">
                            <Eye className="w-4 h-4 text-purple-300" />
                            <span>Click to view in full resolution</span>
                          </div>
                        </div>
                      </div>

                      {/* Caption */}
                      <p className="text-xs text-slate-400 text-center sm:text-left mt-2.5 px-1 italic">
                        {item.caption}
                      </p>
                    </div>
                  </div>

                  {/* =============================================================
                      TEXT COLUMN (Mobile: order-2; Desktop: opposite of image)
                     ============================================================= */}
                  <div
                    className={`w-full ${
                      isImageLeft
                        ? 'lg:col-span-6 lg:order-2'
                        : 'lg:col-span-6 lg:order-1'
                    } order-2 space-y-3.5 sm:space-y-4`}
                  >
                    {/* Chapter & Badge */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="font-display font-bold text-xs tracking-widest text-purple-400 bg-purple-950/60 border border-purple-500/30 px-3 py-1 rounded-full uppercase">
                        {item.sectionNumber}
                      </span>
                      <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 bg-white/[0.03] border border-white/[0.08] px-3 py-1 rounded-full">
                        <MilestoneIcon className="w-3.5 h-3.5 text-purple-400" />
                        <span>{item.badge}</span>
                      </div>
                    </div>

                    {/* Heading */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                      {item.heading}
                    </h3>

                    {/* Story Text */}
                    <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
                      {item.story}
                    </p>

                    {/* Action link */}
                    <div className="pt-1">
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedPhoto({
                            src: item.imageSrc,
                            title: item.heading,
                            caption: item.caption,
                          })
                        }
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-purple-300 hover:text-purple-100 transition-colors cursor-pointer group/btn"
                      >
                        <Eye className="w-4 h-4 text-purple-400 transition-transform duration-300 group-hover/btn:scale-110" />
                        <span>View high-resolution photograph</span>
                      </button>
                    </div>
                  </div>

                </div>

                {/* Divider between chapters */}
                {index < gsaMilestones.length - 1 && (
                  <div className="w-full max-w-5xl mx-auto px-4 mt-16 sm:mt-24">
                    <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* =========================================================================
          FULL-SCREEN IMAGE PREVIEW LIGHTBOX MODAL
         ========================================================================= */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl sm:rounded-3xl p-[1px] bg-gradient-to-b from-purple-400/50 via-violet-600/30 to-purple-950/40 shadow-[0_0_60px_rgba(139,92,246,0.35)] overflow-hidden"
            >
              <div className="relative p-3.5 sm:p-6 rounded-[20px] sm:rounded-[23px] bg-[#0c0c16] border border-purple-500/20 flex flex-col max-h-[92vh] overflow-hidden space-y-3 sm:space-y-4">
                
                {/* Modal Header */}
                <div className="flex items-start justify-between gap-3 pb-2.5 sm:pb-3 border-b border-purple-500/20">
                  <div className="space-y-0.5">
                    <h3 className="text-base sm:text-xl font-bold text-white font-display">
                      {selectedPhoto.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-400">
                      {selectedPhoto.caption}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedPhoto(null)}
                    className="p-1.5 sm:p-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.04] hover:bg-purple-950/40 border border-white/[0.08] hover:border-purple-500/30 transition-colors cursor-pointer"
                    aria-label="Close Preview"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>

                {/* High-Resolution Uncropped Image */}
                <div className="flex-1 overflow-auto rounded-xl sm:rounded-2xl border border-purple-500/25 bg-[#07070d] p-1.5 sm:p-2 flex items-center justify-center min-h-[260px]">
                  <img
                    src={selectedPhoto.src}
                    alt={selectedPhoto.title}
                    className="max-h-[65vh] sm:max-h-[72vh] w-auto max-w-full object-contain rounded-lg sm:rounded-xl select-none"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.tried && target.src.includes('Email.png')) {
                        target.dataset.tried = 'true';
                        target.src = '/images/gsa/email.png';
                      }
                    }}
                  />
                </div>

                {/* Modal Footer */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2 text-xs text-slate-400 border-t border-purple-500/15">
                  <div className="flex items-center gap-1.5 text-purple-300">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400" />
                    <span className="text-[11px] sm:text-xs">Authentic GSA 2026 Journey Photograph</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedPhoto(null)}
                    className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-colors cursor-pointer"
                  >
                    Close Preview
                  </button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
