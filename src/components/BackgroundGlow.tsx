import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundGlow: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Subtle tech dot grid pattern */}
      <div className="absolute inset-0 tech-grid-pattern opacity-60" />

      {/* Main purple/violet ambient glowing orb - Top Left */}
      <motion.div
        animate={{
          x: [0, 25, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-purple-600/18 via-violet-600/12 to-transparent blur-[120px]"
      />

      {/* Ambient glow - Top Right / Hero photograph area */}
      <motion.div
        animate={{
          x: [0, -30, 25, 0],
          y: [0, 35, -20, 0],
          scale: [1, 1.1, 0.96, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-16 right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-violet-600/20 via-indigo-600/15 to-transparent blur-[130px]"
      />

      {/* Center subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] rounded-full bg-purple-900/10 blur-[150px]" />

      {/* Vignette border to maintain deep #09090f edge */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#09090f]/80 pointer-events-none" />
    </div>
  );
};
