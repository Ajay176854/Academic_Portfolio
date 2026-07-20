import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PUBLICATIONS, MANUSCRIPTS, DOMAIN_COVERAGE } from '../../data';
import { Search, FileText, ExternalLink, Filter, HelpCircle, GraduationCap, Compass, HelpCircle as HelpIcon } from 'lucide-react';

export function PublicationsList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState<number | 'All'>('All');
  const [activePubType, setActivePubType] = useState<'peer' | 'prep' | 'domain'>('peer');

  // List unique years
  const years = ['All', ...Array.from(new Set(PUBLICATIONS.map((pub) => pub.year))).sort((a, b) => b - a)];

  const filteredPublications = PUBLICATIONS.filter((pub) => {
    const matchesSearch =
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.some((author) => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
      pub.venue.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesYear = selectedYear === 'All' || pub.year === selectedYear;

    return matchesSearch && matchesYear;
  });

  return (
    <div className="space-y-8" id="publications-list">
      {/* Publications Segment Switcher */}
      <div className="flex flex-wrap border-b border-[#819280]/20 gap-2 md:gap-6">
        <button
          onClick={() => setActivePubType('peer')}
          className={`pb-3 text-xs md:text-sm font-bold tracking-wider uppercase border-b-2 transition-all ${
            activePubType === 'peer'
              ? 'border-[#2d3a28] text-[#2d3a28]'
              : 'border-transparent text-[#5d735a]/60 hover:text-[#2d3a28]'
          }`}
          id="btn-pub-peer"
        >
          Peer-Reviewed Journal Articles ({PUBLICATIONS.length})
        </button>
        <button
          onClick={() => setActivePubType('prep')}
          className={`pb-3 text-xs md:text-sm font-bold tracking-wider uppercase border-b-2 transition-all ${
            activePubType === 'prep'
              ? 'border-[#2d3a28] text-[#2d3a28]'
              : 'border-transparent text-[#5d735a]/60 hover:text-[#2d3a28]'
          }`}
          id="btn-pub-prep"
        >
          Manuscripts Under Preparation ({MANUSCRIPTS.length})
        </button>
        <button
          onClick={() => setActivePubType('domain')}
          className={`pb-3 text-xs md:text-sm font-bold tracking-wider uppercase border-b-2 transition-all ${
            activePubType === 'domain'
              ? 'border-[#2d3a28] text-[#2d3a28]'
              : 'border-transparent text-[#5d735a]/60 hover:text-[#2d3a28]'
          }`}
          id="btn-pub-domain"
        >
          Research Domain Matrix
        </button>
      </div>

      {activePubType === 'peer' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {/* Search and Filters panel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white/60 backdrop-blur-md p-4 rounded-xl border border-[#819280]/20 shadow-sm">
            {/* Search Input */}
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-2.5 text-[#5d735a] w-4 h-4" />
              <input
                type="text"
                placeholder="Search publications by title, authors, or journal..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white text-[#2d3a28] pl-10 pr-4 py-2 text-xs md:text-sm rounded-lg border border-[#819280]/20 focus:outline-none focus:border-[#5d735a] transition-colors"
                id="pub-search-input"
              />
            </div>

            {/* Year Filter */}
            <div className="flex items-center gap-2">
              <Filter className="text-[#5d735a] w-4 h-4 shrink-0" />
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value === 'All' ? 'All' : Number(e.target.value))}
                className="w-full bg-white text-[#2d3a28] py-2 px-3 text-xs md:text-sm rounded-lg border border-[#819280]/20 focus:outline-none focus:border-[#5d735a] transition-colors font-medium"
                id="pub-year-filter"
              >
                {years.map((yr) => (
                  <option key={yr} value={yr}>
                    {yr === 'All' ? 'All Years' : `${yr} Publications`}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="text-xs font-mono font-bold text-[#5d735a] flex justify-between items-center px-1">
            <span>Showing {filteredPublications.length} of {PUBLICATIONS.length} articles</span>
            <span className="opacity-80">Author in bold represents Dr. Abinaya Rengarajan</span>
          </div>

          {/* Publications List */}
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredPublications.map((pub, index) => (
                <motion.div
                  key={pub.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-5 md:p-6 rounded-xl border border-[#819280]/20 shadow-sm hover:border-[#5d735a]/40 hover:shadow-md transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[#5d735a]/25 group-hover:bg-[#5d735a] transition-colors"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-2 pl-2">
                    <h4 className="text-sm md:text-base font-bold text-[#2d3a28] group-hover:text-[#5d735a] transition-colors leading-relaxed pr-10">
                      {pub.title}
                    </h4>
                    <span className="text-xs font-mono font-bold bg-[#5d735a]/10 text-[#2d3a28] px-2.5 py-1 rounded shrink-0 self-start md:self-auto">
                      {pub.year}
                    </span>
                  </div>

                  <p className="text-xs md:text-sm text-[#36453b] mb-2 pl-2 leading-relaxed">
                    {pub.authors.map((author, i) => {
                      const isAbinaya = author.includes("Abinaya") || author.includes("Rengarajan") || author === "A Rengarajan" || author === "R Abinaya";
                      return (
                        <span key={i}>
                          <span className={isAbinaya ? 'font-bold text-[#2d3a28] underline decoration-[#5d735a]/40 decoration-2' : 'opacity-90'}>
                            {author}
                          </span>
                          {i < pub.authors.length - 1 ? ', ' : ''}
                        </span>
                      );
                    })}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-[#819280]/10 pl-2">
                    <span className="text-xs md:text-sm text-[#5d735a] font-semibold italic flex items-center gap-1.5">
                      <FileText size={14} className="opacity-70" />
                      {pub.venue}
                    </span>
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#2d3a28] hover:text-[#5d735a] transition-colors uppercase tracking-widest bg-[#5d735a]/5 hover:bg-[#5d735a]/10 px-3 py-1.5 rounded-md"
                        id={`pub-link-${pub.id}`}
                      >
                        <span>View Publisher</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}

              {filteredPublications.length === 0 && (
                <div className="text-center py-12 bg-white/40 rounded-2xl border border-[#819280]/20">
                  <p className="text-[#5d735a] font-medium">No publications found matching your search term.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}

      {activePubType === 'prep' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          {MANUSCRIPTS.map((ms, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-[#819280]/20 shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#819280]/40"></div>
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#5d735a] bg-[#5d735a]/10 px-2.5 py-1 rounded mb-3 inline-block">
                Manuscript #{index + 1}
              </span>
              <h4 className="text-sm md:text-base font-bold text-[#2d3a28] mb-2">
                {ms.title}
              </h4>
              <p className="text-xs md:text-sm text-[#36453b] mb-3">
                {ms.authors.map((author, i) => (
                  <span key={i}>
                    <span className={author.includes("Abinaya") || author.includes("R. Abinaya") ? 'font-bold text-[#2d3a28]' : 'opacity-80'}>
                      {author}
                    </span>
                    {i < ms.authors.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
              <div className="text-xs font-mono font-bold text-[#5d735a] italic bg-[#819280]/10 px-3 py-1.5 rounded inline-block">
                Target: {ms.note}
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {activePubType === 'domain' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 gap-4"
        >
          {DOMAIN_COVERAGE.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-[#819280]/20 shadow-sm flex flex-col md:flex-row md:items-start gap-4 md:gap-8"
            >
              <div className="md:w-1/4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#5d735a] block mb-1">
                  Research Domain
                </span>
                <h4 className="font-extrabold text-[#2d3a28] text-sm md:text-base leading-snug">
                  {item.domain}
                </h4>
              </div>
              <div className="md:w-3/4 bg-[#5d735a]/5 p-4 rounded-lg border border-[#5d735a]/10">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#5d735a] block mb-2">
                  Key Publication Citations
                </span>
                <p className="text-xs md:text-sm text-[#36453b] leading-relaxed font-semibold">
                  {item.publications}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
