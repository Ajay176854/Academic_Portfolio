import { motion } from 'motion/react';

const INTERNATIONAL = [
  { name: 'University of Cambridge (Cavendish Lab)', logo: '/images/collaborators/cambridge.png', url: 'https://www.phy.cam.ac.uk/' },
  { name: 'AGH University of Kraków', logo: '/images/collaborators/agh-wide.png', url: 'https://www.agh.edu.pl/en/' },
  { name: 'Shizuoka University', logo: '/images/collaborators/shizuoka.png', url: 'https://www.shizuoka.ac.jp/english/' },
];

const NATIONAL = [
  { name: 'SRM Institute of Science and Technology', logo: '/images/collaborators/srm.png', url: 'https://www.srmist.edu.in/' },
  { name: 'Bharathidasan University', logo: '/images/collaborators/bharathidasan.png', url: 'https://www.bdu.ac.in/' },
  { name: 'Kodaikanal Solar Observatory (IIA)', logo: '/images/collaborators/iia.png', url: 'https://www.iiap.res.in/' },
  { name: 'VIT Chennai', logo: '/images/collaborators/vit.png', url: 'https://chennai.vit.ac.in/' },
  { name: 'Periyar University', logo: '/images/collaborators/periyar.png', url: 'https://www.periyaruniversity.ac.in/' },
];

const FUNDING_AGENCIES = [
  { name: 'Department of Science & Technology (DST)', logo: '/images/funding/dst.png', url: 'https://dst.gov.in/' },
  { name: 'Science & Engineering Research Board (SERB)', logo: '/images/funding/serb.png', url: 'https://serb.gov.in/' },
  { name: 'Council of Scientific & Industrial Research (CSIR)', logo: '/images/funding/csir.png', url: 'https://www.csir.res.in/' },
  { name: 'UGC-DAE Consortium for Scientific Research', logo: '/images/funding/ugc-dae.png', url: 'https://www.csr.res.in/' },
];

const HIGH_IMPACT_JOURNALS = [
  { name: 'Applied Physics Letters (APL)', logo: '/images/publishers/apl.png', url: 'https://pubs.aip.org/aip/apl' },
  { name: 'Journal of Physical Chemistry Letters (JPCL)', logo: '/images/publishers/jpcl.png', url: 'https://pubs.acs.org/journal/jpclcd' },
  { name: 'Small (Wiley-VCH)', logo: '/images/publishers/small.png', url: 'https://onlinelibrary.wiley.com/journal/16136829' },
  { name: 'Chemical Engineering Journal (CEJ)', logo: '/images/publishers/cej.png', url: 'https://www.sciencedirect.com/journal/chemical-engineering-journal' },
  { name: 'American Chemical Society (ACS)', logo: '/images/publishers/acs.png', url: 'https://pubs.acs.org/' },
  { name: 'Royal Society of Chemistry (RSC)', logo: '/images/publishers/rsc.png', url: 'https://pubs.rsc.org/' },
  { name: 'Wiley Advanced Materials', logo: '/images/publishers/wiley-advmat.png', url: 'https://onlinelibrary.wiley.com/journal/2365709x' },
];

const ACADEMIC_INDEXES = [
  { name: 'Google Scholar', logo: '/images/publishers/google-scholar.png', url: 'https://scholar.google.com/citations?user=NeBT4L0AAAAJ' },
  { name: 'ORCID iD', logo: '/images/publishers/orcid.png', url: 'https://orcid.org/0000-0002-5199-109X' },
];

export function CollaborationsBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900 relative overflow-hidden border-y border-[#3B82F6]/20 shadow-sm" id="collaborations-showcase">
      {/* Dynamic Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/5 via-indigo-900/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3B82F6] via-[#2563EB] to-[#EF4444]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16 relative z-10">
        
        {/* Academic Collaborations Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-600">
            global &amp; national network
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-extrabold text-slate-900">
            Academic &amp; Research Institutional Collaborations
          </h2>
          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
            Collaborative research networks across leading international universities, national institutes of excellence, and government laboratories.
          </p>
        </div>

        {/* International & National Grid */}
        <div className="space-y-12">
          <div>
            <h3 className="text-center text-xs font-mono font-bold uppercase tracking-widest text-blue-700 mb-6 border-b border-blue-500/20 pb-3">
              International &amp; National Partner Universities &amp; Research Institutes
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {[...INTERNATIONAL, ...NATIONAL].map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                >
                  <div className="transition-transform hover:scale-105 flex flex-col items-center justify-center p-2 group cursor-pointer">
                    <img
                      src={item.logo}
                      alt={item.name}
                      title={item.name}
                      className="max-h-16 sm:max-h-20 w-full object-contain p-1 mix-blend-multiply"
                    />
                    <span className="text-[9px] font-mono font-bold text-slate-700 mt-1 text-center leading-tight line-clamp-1">
                      {item.name}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Research Funding Sponsors */}
          <div>
            <h3 className="text-center text-xs font-mono font-bold uppercase tracking-widest text-emerald-700 mb-6 border-b border-emerald-500/20 pb-3">
              Government Research Grant &amp; Funding Bodies
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
              {FUNDING_AGENCIES.map((agency, idx) => (
                <a
                  key={idx}
                  href={agency.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={agency.name}
                >
                  <div className="transition-transform hover:scale-105 flex flex-col items-center justify-center p-2 group cursor-pointer">
                    <img
                      src={agency.logo}
                      alt={agency.name}
                      title={agency.name}
                      className="max-h-20 sm:max-h-24 w-full object-contain p-1 mix-blend-multiply"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* High Impact & Nature Index Publications - Row 1 */}
          <div>
            <h3 className="text-center text-xs font-mono font-bold uppercase tracking-widest text-blue-700 mb-6 border-b border-blue-500/20 pb-3">
              High-Impact &amp; Nature Index Journal Publications (APL, JPCL, Small, CEJ, ACS, RSC)
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {HIGH_IMPACT_JOURNALS.map((pub, idx) => (
                <a
                  key={idx}
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={pub.name}
                >
                  <div className="transition-transform hover:scale-105 flex flex-col items-center justify-center p-2 group cursor-pointer">
                    <img
                      src={pub.logo}
                      alt={pub.name}
                      title={pub.name}
                      className="max-h-16 sm:max-h-20 w-full object-contain p-1 mix-blend-multiply"
                    />
                    <span className="text-[9px] font-mono font-bold text-slate-700 mt-1 text-center leading-tight line-clamp-1">
                      {pub.name}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Academic Indexing & Profiles - Row 2 */}
          <div>
            <h3 className="text-center text-xs font-mono font-bold uppercase tracking-widest text-indigo-700 mb-6 border-b border-indigo-500/20 pb-3">
              Academic Bibliographic Indexing &amp; Author Identifiers
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {ACADEMIC_INDEXES.map((pub, idx) => (
                <a
                  key={idx}
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={pub.name}
                >
                  <div className="transition-transform hover:scale-105 flex flex-col items-center justify-center p-2 group cursor-pointer">
                    <img
                      src={pub.logo}
                      alt={pub.name}
                      title={pub.name}
                      className="max-h-16 sm:max-h-20 w-full object-contain p-1 mix-blend-multiply"
                    />
                    <span className="text-[9px] font-mono font-bold text-slate-700 mt-1 text-center leading-tight line-clamp-1">
                      {pub.name}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
