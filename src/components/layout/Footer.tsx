import { PROFILE } from '../../data';

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-100 py-16 relative overflow-hidden border-t border-[#3B82F6]/20">
      {/* Subtle Thermal Energy Line Accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#3B82F6] via-[#1E3A8A] to-[#EF4444]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center space-y-6">
        <h2 className="text-xl md:text-2xl font-serif font-extrabold max-w-2xl leading-relaxed text-white">
          Advancing the scientific frontier of low-dimensional thermoelectric energy harvesting devices.
        </h2>
        <div className="text-[11px] text-slate-400 font-mono tracking-wider flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center">
          <p>© {new Date().getFullYear()} Dr. Abinaya Rengarajan. All rights reserved.</p>
          {PROFILE.scholar && (
            <a
              href={PROFILE.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3B82F6] underline decoration-[#3B82F6]/40 transition-colors"
            >
              Google Scholar Bibliography
            </a>
          )}
          {PROFILE.orcid && (
            <a
              href={PROFILE.orcid}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#EF4444] underline decoration-[#EF4444]/40 transition-colors"
            >
              ORCID: 0000-0002-5199-109X
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
