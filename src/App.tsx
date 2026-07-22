import { useState, useEffect, useCallback } from 'react';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import HomePage from './pages/HomePage';
import { NavSectionId } from './types';
import { ThermodynamicBackground } from './components/ui/ThermodynamicBackground';

const HASH_MAP: Record<string, NavSectionId> = {
  '#about': 'about',
  '#research': 'breakthroughs',
  '#breakthroughs': 'breakthroughs',
  '#publications': 'publications',
  '#grants': 'grants',
  '#services': 'awards-services',
  '#awards-services': 'awards-services',
  '#timeline': 'timeline',
  '#contact': 'contact',
};

const ID_HASH_MAP: Record<NavSectionId, string> = {
  'about': '#about',
  'breakthroughs': '#research',
  'publications': '#publications',
  'grants': '#grants',
  'timeline': '#timeline',
  'awards-services': '#services',
  'contact': '#contact',
};

export default function App() {
  const [activeNav, setActiveNavState] = useState<NavSectionId>('about');

  const updateActiveNav = useCallback((id: NavSectionId, shouldScroll = true) => {
    setActiveNavState(id);

    const hash = ID_HASH_MAP[id] || '#about';
    if (window.location.hash !== hash) {
      if (window.history.pushState) {
        window.history.pushState(null, '', hash);
      } else {
        window.location.hash = hash;
      }
    }

    if (shouldScroll) {
      setTimeout(() => {
        const targetId = id === 'about' ? 'about' : 'research';
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const yOffset = id === 'about' ? 0 : -90;
          const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  // Sync hash on initial page load AND hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (HASH_MAP[hash]) {
        updateActiveNav(HASH_MAP[hash], false);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [updateActiveNav]);

  return (
    <div className="min-h-screen font-sans bg-[#F8FAFC] text-[#0F172A] relative overflow-x-hidden">
      {/* Dynamic Thermal Energy & Wave Flow Decoration */}
      <ThermodynamicBackground />

      {/* Sticky Navigation */}
      <Navigation activeNav={activeNav} updateActiveNav={updateActiveNav} />
      
      <main className="relative z-10">
        <HomePage activeNav={activeNav} updateActiveNav={updateActiveNav} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
