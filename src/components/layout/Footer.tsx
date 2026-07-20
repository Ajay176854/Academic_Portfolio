import { PROFILE } from '../../data';

export function Footer() {
  return (
    <footer className="bg-[#2d3a28] text-[#FAF6EE] py-16 mt-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center space-y-6">
        <h2 className="text-xl md:text-2xl font-serif font-extrabold max-w-2xl leading-relaxed text-[#F4ECE1]">
          Advancing the scientific frontier of low-dimensional thermoelectric energy harvesting devices.
        </h2>
        <div className="text-[11px] opacity-70 font-mono tracking-wider flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center">
          <p>© {new Date().getFullYear()} Dr. Abinaya Rengarajan. All rights reserved.</p>
          {PROFILE.scholar && (
            <a
              href={PROFILE.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline decoration-[#5d735a]/50"
            >
              Google Scholar Bibliography
            </a>
          )}
          {PROFILE.orcid && (
            <a
              href={PROFILE.orcid}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline decoration-[#5d735a]/50"
            >
              ORCID: 0000-0002-5199-109X
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
