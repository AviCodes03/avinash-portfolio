import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  Sparkles,
  Award,
  Eye,
  X,
  Layers,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  group: 'professional' | 'hackathon' | 'leadership';
  imageFileName?: string;
  isFeatured?: boolean;
  featuredRank?: number; // 1-3 for top 3, 4-5 for additional 2
  detail?: string;
  rotateClass?: string;
  isGoogleAmbassadorBadge?: boolean;
}

const certificatesCollection: CertificateItem[] = [
  // Top 3 Featured (Visually Prominent)
  {
    id: 'ai-specialist-nasscom',
    title: 'AI Specialist — BFSI Track',
    issuer: 'SmartBridge × NASSCOM FutureSkills Prime',
    group: 'professional',
    imageFileName: 'AI specialist NASSCOM.png',
    isFeatured: true,
    featuredRank: 1,
    detail: 'Virtual Internship Program in AI & Financial Workflows',
  },
  {
    id: 'tcs-career-edge',
    title: 'Career Edge — Young Professional',
    issuer: 'TCS iON',
    group: 'professional',
    imageFileName: 'TCS Careeer Edge.png',
    isFeatured: true,
    featuredRank: 2,
    detail: 'Professional Workplace Success & AI Foundations',
  },
  {
    id: 'imarticus-c-cpp',
    title: 'C & C++ Programming',
    issuer: 'Imarticus Learning',
    group: 'professional',
    imageFileName: 'C&c++.png',
    isFeatured: true,
    featuredRank: 3,
    detail: 'Certificate of Proficiency with Grade A+',
  },

  // Additional 2 Featured Items
  {
    id: 'promptwars-brain',
    title: 'PromptWars × BRAIN',
    issuer: 'BRAIN Foundation',
    group: 'leadership',
    imageFileName: 'BRAIN X PROMPT WARS.jpg',
    isFeatured: true,
    featuredRank: 4,
    detail: 'Certificate of Appreciation for Organising',
    rotateClass: '-rotate-90',
  },
  {
    id: 'imarticus-business-comm',
    title: 'Business Communication',
    issuer: 'Imarticus Learning',
    group: 'professional',
    imageFileName: 'Business Communication.png',
    isFeatured: true,
    featuredRank: 5,
    detail: 'Certificate of Proficiency with Grade A+',
  },

  // Remaining Professional Certifications
  {
    id: 'hp-ai-beginners',
    title: 'AI for Beginners',
    issuer: 'HP LIFE',
    group: 'professional',
    imageFileName: 'HP AI.png',
  },
  {
    id: 'hp-cybersecurity',
    title: 'Introduction to Cybersecurity Awareness',
    issuer: 'HP LIFE',
    group: 'professional',
    imageFileName: 'HP Cybersecurity.png',
  },
  {
    id: 'cisco-modern-ai',
    title: 'Introduction to Modern AI',
    issuer: 'Cisco Networking Academy',
    group: 'professional',
    imageFileName: 'Cisco.png',
  },
  {
    id: 'ibm-data-science',
    title: 'Data Science 101',
    issuer: 'IBM SkillsBuild',
    group: 'professional',
    imageFileName: 'IBM.png',
  },
  {
    id: 'bajaj-bms-es',
    title: 'Bajaj Manufacturing Systems — Employability Skills (BMS-ES)',
    issuer: 'Bajaj Auto Ltd.',
    group: 'professional',
    imageFileName: 'Bajaj.png',
  },

  // Hackathons & Technical Events
  {
    id: 'vortexa-3-hackathon',
    title: 'VORTEXA 3.0',
    issuer: 'Dr. D. Y. Patil Institute of Technology',
    group: 'hackathon',
    imageFileName: 'Vortexa 3.0.png',
  },
  {
    id: 'ai-impact-challenge',
    title: 'AI-Impact Challenge 2026',
    issuer: 'Dr. D. Y. Patil College of Engineering & Innovation',
    group: 'hackathon',
    imageFileName: 'AI impact challange.jpg',
  },
  {
    id: 'hacktoberfest-gdg-vu',
    title: 'Hacktoberfest Hack Day Pune × Google Developer Group on Campus – VU',
    issuer: 'Hacktoberfest × GDG on Campus – VU',
    group: 'hackathon',
    imageFileName: 'Hacktoberfest.png',
  },

  // Remaining Leadership & Community
  {
    id: 'google-student-ambassador-2026',
    title: 'Google Student Ambassador 2026',
    issuer: 'Google',
    group: 'leadership',
    isGoogleAmbassadorBadge: true,
  },
  {
    id: 'brain-membership',
    title: 'BRAIN',
    issuer: 'Bharat Research in AI and NextGen Foundation',
    group: 'leadership',
    imageFileName: 'Brain.png',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Safe path resolver that preserves sub-delimiters while encoding spaces
const getCertificatePath = (filename?: string) => {
  if (!filename) return '';
  return encodeURI(`/images/certificates/${filename}`);
};

export const Certificates: React.FC = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryTab, setGalleryTab] = useState<'all' | 'professional' | 'hackathon' | 'leadership'>('all');
  const [previewCert, setPreviewCert] = useState<CertificateItem | null>(null);

  // Esc key listener to close modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (previewCert) {
          setPreviewCert(null);
        } else if (isGalleryOpen) {
          setIsGalleryOpen(false);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [previewCert, isGalleryOpen]);

  // Featured lists
  const top3Featured = certificatesCollection.filter(
    (c) => c.isFeatured && c.featuredRank && c.featuredRank <= 3
  );
  const additional2Featured = certificatesCollection.filter(
    (c) => c.isFeatured && c.featuredRank && c.featuredRank > 3
  );

  // Gallery filtered list
  const galleryItems =
    galleryTab === 'all'
      ? certificatesCollection
      : certificatesCollection.filter((c) => c.group === galleryTab);

  return (
    <section
      id="certificates"
      aria-label="Certifications and Achievements"
      className="relative py-10 sm:py-16 lg:py-28 scroll-mt-24 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] lg:w-[950px] h-[350px] sm:h-[650px] rounded-full bg-gradient-to-tr from-purple-600/15 via-violet-600/10 to-indigo-600/10 blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-2.5 sm:space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-semibold tracking-wider uppercase font-display backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>MY JOURNEY</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Certifications &{' '}
            <span className="gradient-text-purple inline-block">
              Achievements.
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            A journey of continuous learning, technical exploration and community involvement.
          </p>
        </motion.div>

        {/* =========================================================================
            FEATURED CERTIFICATES SECTION
           ========================================================================= */}
        <div className="space-y-5 sm:space-y-8">
          {/* Top 3 Featured Certificates (Visually Prominent) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-7"
          >
            {top3Featured.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="group relative"
              >
                {/* Outer border gradient container */}
                <div className="relative p-[1px] rounded-2xl sm:rounded-3xl bg-gradient-to-b from-purple-400/40 via-violet-600/20 to-purple-950/20 shadow-[0_0_35px_rgba(139,92,246,0.15)] group-hover:shadow-[0_0_55px_rgba(168,85,247,0.3)] transition-all duration-400 h-full flex flex-col justify-between">
                  <div className="p-4 sm:p-5 lg:p-6 rounded-[20px] sm:rounded-[23px] bg-[#0c0c16]/95 border border-purple-500/15 backdrop-blur-xl h-full flex flex-col justify-between space-y-3.5 sm:space-y-4">
                    
                    {/* Top Row: Featured Indicator */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-950/70 border border-purple-500/35 text-purple-300">
                        Top Featured
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-purple-300 bg-purple-500/15 px-2 sm:px-2.5 py-0.5 rounded-full border border-purple-500/30">
                        <Award className="w-3 h-3 text-purple-400" />
                        <span>Rank #{cert.featuredRank}</span>
                      </span>
                    </div>

                    {/* Image Thumbnail Box */}
                    {cert.imageFileName && (
                      <div
                        onClick={() => setPreviewCert(cert)}
                        className="cursor-pointer group/thumb relative rounded-xl sm:rounded-2xl overflow-hidden border border-purple-500/25 bg-[#09090f] shadow-inner"
                      >
                        <div className="relative w-full h-36 sm:h-44 lg:h-48 overflow-hidden bg-[#0a0a14] flex items-center justify-center p-1.5">
                          <img
                            src={getCertificatePath(cert.imageFileName)}
                            alt={`${cert.title} Certificate`}
                            className={`w-full h-full object-contain transition-transform duration-500 group-hover/thumb:scale-105 select-none ${cert.rotateClass ?? ''}`}
                            loading="lazy"
                            onError={(e) => {
                              const target = e.currentTarget;
                              if (!target.dataset.tried) {
                                target.dataset.tried = 'true';
                                target.src = `/images/certificates/${cert.imageFileName}`;
                              }
                            }}
                          />
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-purple-950/50 backdrop-blur-xs opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-medium text-xs">
                            <Eye className="w-4 h-4 text-purple-300" />
                            <span>Click to Preview</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Text Details */}
                    <div className="space-y-1 sm:space-y-1.5 flex-grow">
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-200 transition-colors font-display leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-purple-300/90">
                        {cert.issuer}
                      </p>
                      {cert.detail && (
                        <p className="text-[11px] sm:text-xs text-slate-400 pt-0.5 sm:pt-1 line-clamp-2 leading-relaxed">
                          {cert.detail}
                        </p>
                      )}
                    </div>

                    {/* Action Button */}
                    <div className="pt-2.5 sm:pt-3 border-t border-purple-500/15">
                      <button
                        type="button"
                        onClick={() => setPreviewCert(cert)}
                        className="w-full inline-flex items-center justify-center gap-2 py-2 sm:py-2.5 px-3.5 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-white/[0.03] hover:bg-purple-600/20 border border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 hover:text-white cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-300" />
                        <span>View Certificate</span>
                      </button>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional 2 Featured Items (Underneath, Compact & Elegant) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-7 max-w-4xl mx-auto w-full"
          >
            {additional2Featured.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative p-[1px] rounded-2xl sm:rounded-3xl bg-gradient-to-b from-purple-400/30 via-violet-600/15 to-purple-950/20 shadow-[0_0_30px_rgba(139,92,246,0.12)] group-hover:shadow-[0_0_45px_rgba(168,85,247,0.25)] transition-all duration-400 h-full flex flex-col justify-between">
                  <div className="p-4 sm:p-5 lg:p-6 rounded-[20px] sm:rounded-[23px] bg-[#0c0c16]/95 border border-purple-500/15 backdrop-blur-xl h-full flex flex-col justify-between space-y-3 sm:space-y-4">
                    
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300">
                        Featured Recognition
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-purple-300 bg-purple-500/15 px-2 py-0.5 rounded-full border border-purple-500/30">
                        <Award className="w-3 h-3 text-purple-400" />
                        <span>Rank #{cert.featuredRank}</span>
                      </span>
                    </div>

                    {cert.imageFileName && (
                      <div
                        onClick={() => setPreviewCert(cert)}
                        className="cursor-pointer group/thumb relative rounded-xl overflow-hidden border border-purple-500/20 bg-[#09090f]"
                      >
                        <div className="relative w-full h-32 sm:h-36 overflow-hidden bg-[#0a0a14] flex items-center justify-center p-1.5">
                          <img
                            src={getCertificatePath(cert.imageFileName)}
                            alt={`${cert.title} Certificate`}
                            className={`w-full h-full object-contain transition-transform duration-500 group-hover/thumb:scale-105 select-none ${cert.rotateClass ?? ''}`}
                            loading="lazy"
                            onError={(e) => {
                              const target = e.currentTarget;
                              if (!target.dataset.tried) {
                                target.dataset.tried = 'true';
                                target.src = `/images/certificates/${cert.imageFileName}`;
                              }
                            }}
                          />
                          <div className="absolute inset-0 bg-purple-950/50 backdrop-blur-xs opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-medium text-xs">
                            <Eye className="w-4 h-4 text-purple-300" />
                            <span>Click to Preview</span>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="space-y-1 flex-grow">
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-200 transition-colors font-display">
                        {cert.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-purple-300/90">
                        {cert.issuer}
                      </p>
                      {cert.detail && (
                        <p className="text-[11px] sm:text-xs text-slate-400 pt-0.5 line-clamp-2">
                          {cert.detail}
                        </p>
                      )}
                    </div>

                    <div className="pt-2.5 sm:pt-3 border-t border-purple-500/15">
                      <button
                        type="button"
                        onClick={() => setPreviewCert(cert)}
                        className="w-full inline-flex items-center justify-center gap-2 py-2 px-3.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-white/[0.03] hover:bg-purple-600/20 border border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 hover:text-white cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-300" />
                        <span>View Certificate</span>
                      </button>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* "View All Certificates" Button */}
          <div className="pt-4 sm:pt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setIsGalleryOpen(true)}
              className="group relative inline-flex items-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold text-white overflow-hidden shadow-[0_0_25px_rgba(147,51,234,0.35)] hover:shadow-[0_0_35px_rgba(168,85,247,0.55)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 group-hover:from-purple-500 group-hover:via-violet-500 group-hover:to-indigo-500 transition-colors duration-300" />
              <span className="absolute inset-x-0 top-0 h-[1px] bg-white/30" />
              
              <span className="relative z-10 flex items-center gap-2.5">
                <Layers className="w-4 h-4 text-purple-200" />
                <span>View All Certificates</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 text-white font-mono">
                  {certificatesCollection.length}
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          VIEW ALL CERTIFICATES MODAL GALLERY (Minimal, Compact & Clean)
         ========================================================================= */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsGalleryOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/85 backdrop-blur-md overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-2xl sm:rounded-3xl p-[1px] bg-gradient-to-b from-purple-400/50 via-violet-600/30 to-purple-950/40 shadow-[0_0_60px_rgba(139,92,246,0.35)] overflow-hidden"
            >
              <div className="flex flex-col h-full bg-[#0c0c16] rounded-[18px] sm:rounded-[23px] overflow-hidden">
                
                {/* Gallery Top Navigation Header */}
                <div className="p-3.5 sm:p-5 lg:p-6 border-b border-purple-500/20 bg-[#0e0e1a]/90 backdrop-blur-xl flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                    <div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white font-display">
                        All Certificates
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-400">
                        {certificatesCollection.length} Verified Credentials & Recognitions
                      </p>
                    </div>
                  </div>

                  {/* Close Gallery Button */}
                  <button
                    type="button"
                    onClick={() => setIsGalleryOpen(false)}
                    className="p-1.5 sm:p-2 rounded-xl text-slate-300 hover:text-white bg-white/[0.04] hover:bg-purple-950/40 border border-white/[0.08] hover:border-purple-500/30 transition-colors cursor-pointer"
                    aria-label="Close Gallery"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>

                {/* Category Navigation Tabs */}
                <div className="px-3 sm:px-6 py-2 sm:py-2.5 border-b border-purple-500/15 bg-white/[0.01] flex flex-wrap items-center gap-1.5 sm:gap-2">
                  {[
                    { id: 'all', label: 'All', count: certificatesCollection.length },
                    {
                      id: 'professional',
                      label: 'Professional',
                      count: certificatesCollection.filter((c) => c.group === 'professional').length,
                    },
                    {
                      id: 'hackathon',
                      label: 'Hackathons',
                      count: certificatesCollection.filter((c) => c.group === 'hackathon').length,
                    },
                    {
                      id: 'leadership',
                      label: 'Leadership',
                      count: certificatesCollection.filter((c) => c.group === 'leadership').length,
                    },
                  ].map((tab) => {
                    const isActive = galleryTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setGalleryTab(tab.id as typeof galleryTab)}
                        className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1 sm:gap-1.5 ${
                          isActive
                            ? 'text-white bg-purple-600/40 border border-purple-500/60 shadow-[0_0_12px_rgba(168,85,247,0.3)]'
                            : 'text-slate-400 hover:text-white bg-white/[0.02] border border-white/[0.06]'
                        }`}
                      >
                        <span>{tab.label}</span>
                        <span
                          className={`text-[9px] sm:text-[10px] px-1.5 py-0.2 rounded-full ${
                            isActive
                              ? 'bg-purple-500 text-white'
                              : 'bg-white/[0.08] text-slate-300'
                          }`}
                        >
                          {tab.count}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Compact Gallery Cards Grid (Responsive 2-column on >= 460px and sm) */}
                <div className="flex-1 overflow-y-auto p-3 sm:p-5 lg:p-6">
                  <div className="grid grid-cols-1 min-[460px]:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3.5 lg:gap-4">
                    {galleryItems.map((cert) => (
                      <div
                        key={cert.id}
                        onClick={() => {
                          if (cert.imageFileName) setPreviewCert(cert);
                        }}
                        className={`group p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/[0.02] hover:bg-purple-950/25 border border-white/[0.06] hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between space-y-2 sm:space-y-3 ${
                          cert.imageFileName ? 'cursor-pointer' : 'cursor-default'
                        }`}
                      >
                        {/* Compact Visual Preview Box */}
                        {cert.isGoogleAmbassadorBadge ? (
                          <div className="w-full h-24 sm:h-28 rounded-lg sm:rounded-xl border border-purple-500/20 bg-gradient-to-br from-[#121128] to-[#0a0a14] p-2.5 flex flex-col items-center justify-center text-center relative overflow-hidden">
                            <div className="w-7 h-7 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-1">
                              <span className="font-bold text-xs bg-gradient-to-r from-blue-400 via-red-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
                                G
                              </span>
                            </div>
                            <span className="text-xs font-bold text-white">Google Student Ambassador</span>
                            <span className="text-[10px] text-purple-300 font-semibold tracking-wider">CLASS OF 2026</span>
                          </div>
                        ) : cert.imageFileName ? (
                          <div className="relative w-full h-24 sm:h-28 rounded-lg sm:rounded-xl overflow-hidden bg-[#07070d] border border-purple-500/15 flex items-center justify-center p-1">
                            <img
                              src={getCertificatePath(cert.imageFileName)}
                              alt={`${cert.title} Certificate`}
                              className={`w-full h-full object-contain select-none transition-transform duration-500 group-hover:scale-105 ${cert.rotateClass ?? ''}`}
                              loading="lazy"
                              onError={(e) => {
                                const target = e.currentTarget;
                                if (!target.dataset.tried) {
                                  target.dataset.tried = 'true';
                                  target.src = `/images/certificates/${cert.imageFileName}`;
                                }
                              }}
                            />
                            <div className="absolute inset-0 bg-purple-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-1.5 text-white font-medium text-xs">
                              <Eye className="w-3.5 h-3.5 text-purple-300" />
                              <span>Click to Preview</span>
                            </div>
                          </div>
                        ) : null}

                        {/* ONLY Certificate Title and Issuing Organization */}
                        <div className="pt-0.5">
                          <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-purple-200 transition-colors font-display line-clamp-2 leading-snug">
                            {cert.title}
                          </h4>
                          <p className="text-[11px] sm:text-xs text-purple-300/80 font-medium truncate mt-0.5 sm:mt-1">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gallery Footer */}
                <div className="p-2.5 sm:p-4 border-t border-purple-500/20 bg-[#09090f]/90 flex items-center justify-between text-xs text-slate-400 px-3.5 sm:px-6">
                  <span className="text-[11px] sm:text-xs">Click any certificate to preview</span>
                  <button
                    type="button"
                    onClick={() => setIsGalleryOpen(false)}
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-colors cursor-pointer text-xs font-medium"
                  >
                    Close Gallery
                  </button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          FULL-SCREEN IMAGE PREVIEW LIGHTBOX MODAL
         ========================================================================= */}
      <AnimatePresence>
        {previewCert && previewCert.imageFileName && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewCert(null)}
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
                
                {/* Lightbox Header */}
                <div className="flex items-start justify-between gap-3 pb-2.5 sm:pb-3 border-b border-purple-500/20">
                  <div className="space-y-0.5">
                    <h3 className="text-base sm:text-xl font-bold text-white font-display">
                      {previewCert.title}
                    </h3>
                    <p className="text-[11px] sm:text-sm font-medium text-purple-300/90">
                      Issued by: {previewCert.issuer}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setPreviewCert(null)}
                    className="p-1.5 sm:p-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.04] hover:bg-purple-950/40 border border-white/[0.08] hover:border-purple-500/30 transition-colors cursor-pointer"
                    aria-label="Close Preview"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>

                {/* High-Resolution Uncropped Certificate Display */}
                <div className="flex-1 overflow-auto rounded-xl sm:rounded-2xl border border-purple-500/25 bg-[#07070d] p-1.5 sm:p-2 flex items-center justify-center min-h-[260px]">
                  <img
                    src={getCertificatePath(previewCert.imageFileName)}
                    alt={`${previewCert.title} Certificate`}
                    className={`max-h-[55vh] sm:max-h-[65vh] w-auto max-w-full object-contain rounded-lg sm:rounded-xl select-none ${previewCert.rotateClass ?? ''}`}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.tried) {
                        target.dataset.tried = 'true';
                        target.src = `/images/certificates/${previewCert.imageFileName}`;
                      }
                    }}
                  />
                </div>

                {/* Lightbox Footer */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2 text-xs text-slate-400 border-t border-purple-500/15">
                  <div className="flex items-center gap-1.5 text-purple-300">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400" />
                    <span className="text-[11px] sm:text-xs">Official Verified Credential</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setPreviewCert(null)}
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
