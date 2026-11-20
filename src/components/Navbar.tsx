import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'GSA Journey', href: '#gsa' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine current section in view on homepage
      const sections = navItems.map((item) => item.href.substring(1));
      const currentPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= currentPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
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
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-lg shadow-black/20'
          : 'bg-[#09090f]/60 backdrop-blur-md border-b border-purple-900/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-lg p-1"
          >
            <span className="font-display font-extrabold text-2xl tracking-wider text-white transition-colors duration-200 group-hover:text-purple-200">
              AVINASH
            </span>
            <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-violet-400 shadow-[0_0_8px_#a855f7]" />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-md shadow-inner"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-purple-200 hover:bg-white/[0.04]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/30 to-violet-600/20 border border-purple-500/40 shadow-[0_0_12px_rgba(168,85,247,0.25)] -z-10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Connect Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white overflow-hidden group shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-[1.02] active:scale-[0.98]"
            >
              {/* Button gradient background */}
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 group-hover:from-purple-500 group-hover:via-violet-500 group-hover:to-indigo-500 transition-colors duration-300" />
              {/* Subtle top shimmer border */}
              <span className="absolute inset-x-0 top-0 h-[1px] bg-white/40" />
              
              <span className="relative z-10 flex items-center gap-1.5 font-semibold">
                Connect
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-purple-200" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-violet-600 shadow-sm"
            >
              Connect
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-white/[0.04] border border-white/[0.08] hover:border-purple-500/30 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-b border-purple-500/20 bg-[#0d0d17]/95 backdrop-blur-2xl px-4 pt-3 pb-6"
          >
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'text-white bg-purple-600/20 border border-purple-500/30'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc]" />
                    )}
                  </a>
                );
              })}
            </nav>

            <div className="mt-4 pt-4 border-t border-white/[0.08]">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 shadow-[0_0_20px_rgba(147,51,234,0.35)]"
              >
                <span>Connect With Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
