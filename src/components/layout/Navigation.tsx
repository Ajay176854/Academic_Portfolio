import { useState, useEffect, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { PROFILE } from '../../data';
import { NavSectionId } from '../../types';

const NAV_LINKS: { name: string; href: string; id: NavSectionId }[] = [
  { name: 'About & Stats', href: '#about', id: 'about' },
  { name: 'Breakthroughs', href: '#research', id: 'breakthroughs' },
  { name: 'Publications', href: '#publications', id: 'publications' },
  { name: 'Grants & Funding', href: '#grants', id: 'grants' },
  { name: 'Mentorship & Services', href: '#services', id: 'awards-services' },
  { name: 'Gallery', href: '#gallery', id: 'gallery' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

interface NavigationProps {
  activeNav: NavSectionId;
  updateActiveNav: (id: NavSectionId, shouldScroll?: boolean) => void;
}

export function Navigation({ activeNav, updateActiveNav }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: MouseEvent, link: typeof NAV_LINKS[0]) => {
    e.preventDefault();
    updateActiveNav(link.id, true);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8FAFC]/90 backdrop-blur-md py-3 shadow-xs border-b border-[#3B82F6]/15'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Scholar Brand Name */}
        <a 
          href="#about" 
          onClick={(e) => handleNavClick(e, NAV_LINKS[0])}
          className="group flex flex-col justify-start shrink-0 mr-8 lg:mr-16"
        >
          <span className="font-serif font-extrabold text-lg md:text-xl tracking-tight text-[#1E3A8A] group-hover:text-[#3B82F6] transition-colors leading-tight">
            {PROFILE.name}
          </span>
          <span className="text-[8px] sm:text-[9px] md:text-[10px] font-sans font-bold uppercase tracking-wider text-[#1E3A8A] leading-tight mt-0.5 whitespace-nowrap">
            PH.D. (PHYSICS) • PH.D. (<span className="text-[#EF4444]">OPTOELECTRONICS &amp; NANOSTRUCTURE SCIENCE</span>)
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-5 xl:space-x-7">
          {NAV_LINKS.map((link) => {
            const isLinkActive = activeNav === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`text-[11px] font-bold uppercase tracking-widest transition-colors py-1.5 px-1 border-b-2 relative ${
                  isLinkActive
                    ? 'text-[#1E3A8A] border-[#1E3A8A]'
                    : 'text-[#475569] border-transparent hover:text-[#1E3A8A]'
                }`}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.name}
              </a>
            );
          })}
          
          {PROFILE.scholar && (
            <a
              href={PROFILE.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#1E3A8A] hover:bg-[#2563EB] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-lg transition-all shadow-xs cursor-pointer"
              id="nav-btn-scholar"
            >
              <span>Scholar</span>
              <GraduationCap size={14} />
            </a>
          )}
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="lg:hidden text-[#1E3A8A] p-1.5 rounded-lg bg-[#3B82F6]/10 hover:bg-[#3B82F6]/20 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#F8FAFC]/95 backdrop-blur-md border-t border-[#3B82F6]/20 overflow-hidden shadow-lg"
          >
            <div className="px-6 py-6 space-y-4 flex flex-col">
              {NAV_LINKS.map((link) => {
                const isLinkActive = activeNav === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`text-xs font-bold uppercase tracking-wider py-2 border-l-2 pl-3 ${
                      isLinkActive
                        ? 'text-[#1E3A8A] border-[#1E3A8A] bg-[#3B82F6]/10'
                        : 'text-[#475569] border-transparent hover:text-[#1E3A8A]'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              
              {PROFILE.scholar && (
                <a
                  href={PROFILE.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#1E3A8A] text-white text-xs font-bold uppercase tracking-wider py-2.5 rounded-lg mt-2 shadow-xs"
                >
                  <span>Google Scholar Profile</span>
                  <GraduationCap size={14} />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
