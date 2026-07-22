import { motion } from 'motion/react';

const INTERNATIONAL = [
  { name: 'University of Cambridge (Cavendish Lab)', logo: '/images/collaborators/cambridge.png', url: 'https://www.phy.cam.ac.uk/' },
  { name: 'AGH University of Krakow', logo: '/images/collaborators/agh.png', url: 'https://www.agh.edu.pl/en/' },
  { name: 'Shizuoka University', logo: '/images/collaborators/shizuoka.png', url: 'https://www.shizuoka.ac.jp/english/' },
];

const NATIONAL = [
  { name: 'SRM Institute of Science & Tech', logo: '/images/collaborators/srm.png', url: 'https://www.srmist.edu.in/' },
  { name: 'Bharathidasan University', logo: '/images/collaborators/bharathidasan.png', url: 'https://www.bdu.ac.in/' },
  { name: 'IISc Bangalore', logo: '/images/collaborators/iisc.png', url: 'https://iisc.ac.in/' },
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

const PUBLISHERS_INDEXING = [
  { name: 'American Chemical Society (ACS)', logo: '/images/publishers/acs.png', url: 'https://pubs.acs.org/' },
  { name: 'Royal Society of Chemistry (RSC)', logo: '/images/publishers/rsc.png', url: 'https://pubs.rsc.org/' },
  { name: 'Wiley Advanced Materials Technologies', logo: '/images/publishers/wiley-advmat.png', url: 'https://onlinelibrary.wiley.com/journal/2365709x' },
  { name: 'Applied Physics Letters (AIP)', logo: '/images/publishers/apl.png', url: 'https://pubs.aip.org/aip/apl' },
  { name: 'Google Scholar', logo: '/images/publishers/google-scholar.png', url: 'https://scholar.google.com/citations?user=NeBT4L0AAAAJ' },
  { name: 'ORCID iD', logo: '/images/publishers/orcid.png', url: 'https://orcid.org/0000-0002-5199-109X' },
];

export function CollaborationsBanner() {
  return (
    <section className="py-16 bg-white/90 backdrop-blur-md border-y border-[#3B82F6]/15" id="collaborations-showcase">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Academic Collaborations Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#3B82F6]">
            global & national network
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-extrabold text-[#0F172A]">
            Academic & Research Institutional Collaborations
          </h2>
          <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
            Collaborative research networks across leading international universities, national institutes of excellence, and government laboratories.
          </p>
        </div>

        {/* International & National Grid */}
        <div className="space-y-12">
          <div>
            <h3 className="text-center text-xs font-mono font-bold uppercase tracking-widest text-[#1E3A8A] mb-6 border-b border-[#3B82F6]/15 pb-3">
              International & National Partner Universities & Research Institutes
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
                  <motion.div
                    whileHover={{ y: -4, scale: 1.04 }}
                    className="bg-white p-3 rounded-2xl border border-[#3B82F6]/20 shadow-2xs hover:shadow-[0_4px_15px_rgba(239,68,68,0.15)] hover:border-[#EF4444]/40 transition-all flex flex-col items-center justify-center h-24 w-44 md:w-56 overflow-hidden group cursor-pointer"
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      title={item.name}
                      className="max-h-16 w-full object-contain p-1 transition-transform duration-300 group-hover:scale-105"
                    />
                  </motion.div>
                </a>
              ))}
            </div>
          </div>

          {/* Research Funding Sponsors */}
          <div>
            <h3 className="text-center text-xs font-mono font-bold uppercase tracking-widest text-[#3B82F6] mb-6 border-b border-[#3B82F6]/15 pb-3">
              Government Research Grant & Funding Bodies
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
                  <motion.div
                    whileHover={{ y: -4, scale: 1.04 }}
                    className="bg-white p-3 rounded-2xl border border-[#3B82F6]/20 shadow-2xs hover:shadow-[0_4px_15px_rgba(239,68,68,0.15)] hover:border-[#EF4444]/40 transition-all flex flex-col items-center justify-center h-24 w-52 md:w-60 group cursor-pointer"
                  >
                    <img
                      src={agency.logo}
                      alt={agency.name}
                      title={agency.name}
                      className="max-h-16 w-full object-contain p-1 transition-transform duration-300 group-hover:scale-105"
                    />
                  </motion.div>
                </a>
              ))}
            </div>
          </div>

          {/* High Impact Publishers & Indexing */}
          <div>
            <h3 className="text-center text-xs font-mono font-bold uppercase tracking-widest text-[#3B82F6] mb-6 border-b border-[#3B82F6]/15 pb-3">
              High-Impact Publishers & Academic Indexing
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {PUBLISHERS_INDEXING.map((pub, idx) => (
                <a
                  key={idx}
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={pub.name}
                >
                  <motion.div
                    whileHover={{ y: -4, scale: 1.04 }}
                    className="bg-white p-3 rounded-2xl border border-[#3B82F6]/20 shadow-2xs hover:shadow-[0_4px_15px_rgba(239,68,68,0.15)] hover:border-[#EF4444]/40 transition-all flex items-center justify-center h-20 w-44 md:w-52 group cursor-pointer"
                  >
                    <img
                      src={pub.logo}
                      alt={pub.name}
                      title={pub.name}
                      className="max-h-14 w-full object-contain p-1 transition-transform duration-300 group-hover:scale-105"
                    />
                  </motion.div>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
