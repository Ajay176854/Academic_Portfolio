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
          ? 'bg-[#FAF6EE]/85 backdrop-blur-md py-3 shadow-sm border-b border-[#819280]/15'
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
          <span className="font-serif font-extrabold text-base md:text-lg tracking-tight text-[#2d3a28] group-hover:text-[#5d735a] transition-colors leading-tight">
            {PROFILE.name}
          </span>
          <span className="text-[7.5px] sm:text-[8.5px] md:text-[9px] font-mono font-bold uppercase tracking-tight text-[#5d735a] leading-tight mt-0.5 whitespace-nowrap">
            Ph.D. • Thermoelectrics & Optoelectronics
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
                className={`text-[11px] font-bold uppercase tracking-widest transition-colors py-1 px-1 border-b-2 relative ${
                  isLinkActive
                    ? 'text-[#2d3a28] border-[#2d3a28]'
                    : 'text-[#5d735a] border-transparent hover:text-[#2d3a28]'
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
              className="inline-flex items-center gap-1 bg-[#2d3a28] hover:bg-[#5d735a] text-[#FAF6EE] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded transition-all shadow-sm"
              id="nav-btn-scholar"
            >
              <span>Scholar</span>
              <GraduationCap size={12} />
            </a>
          )}
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="lg:hidden text-[#2d3a28] p-1 rounded-lg bg-[#5d735a]/10"
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
            className="lg:hidden bg-[#FAF6EE] border-t border-[#819280]/20 overflow-hidden shadow-lg"
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
                        ? 'text-[#2d3a28] border-[#2d3a28] bg-[#5d735a]/10'
                        : 'text-[#5d735a] border-transparent hover:text-[#2d3a28]'
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
                  className="inline-flex items-center justify-center gap-2 bg-[#2d3a28] text-[#FAF6EE] text-xs font-bold uppercase tracking-wider py-2.5 rounded-lg mt-2"
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
