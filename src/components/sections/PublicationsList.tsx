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
      <div className="flex flex-wrap border-b border-[#3B82F6]/20 gap-2 md:gap-6">
        <button
          onClick={() => setActivePubType('peer')}
          className={`pb-3 text-xs md:text-sm font-bold tracking-wider uppercase border-b-2 transition-all cursor-pointer ${
            activePubType === 'peer'
              ? 'border-[#3B82F6] text-[#0F172A]'
              : 'border-transparent text-[#475569] hover:text-[#0F172A]'
          }`}
          id="btn-pub-peer"
        >
          Peer-Reviewed Journal Articles ({PUBLICATIONS.length})
        </button>
        <button
          onClick={() => setActivePubType('prep')}
          className={`pb-3 text-xs md:text-sm font-bold tracking-wider uppercase border-b-2 transition-all cursor-pointer ${
            activePubType === 'prep'
              ? 'border-[#3B82F6] text-[#0F172A]'
              : 'border-transparent text-[#475569] hover:text-[#0F172A]'
          }`}
          id="btn-pub-prep"
        >
          Manuscripts Under Preparation ({MANUSCRIPTS.length})
        </button>
        <button
          onClick={() => setActivePubType('domain')}
          className={`pb-3 text-xs md:text-sm font-bold tracking-wider uppercase border-b-2 transition-all cursor-pointer ${
            activePubType === 'domain'
              ? 'border-[#3B82F6] text-[#0F172A]'
              : 'border-transparent text-[#475569] hover:text-[#0F172A]'
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-[#3B82F6]/20 shadow-2xs">
            {/* Search Input */}
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-2.5 text-[#3B82F6] w-4 h-4" />
              <input
                type="text"
                placeholder="Search publications by title, authors, or journal..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white text-[#0F172A] pl-10 pr-4 py-2 text-xs md:text-sm rounded-lg border border-[#3B82F6]/20 focus:outline-none focus:border-[#3B82F6] transition-colors"
                id="pub-search-input"
              />
            </div>

            {/* Year Filter */}
            <div className="flex items-center gap-2">
              <Filter className="text-[#3B82F6] w-4 h-4 shrink-0" />
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value === 'All' ? 'All' : Number(e.target.value))}
                className="w-full bg-white text-[#0F172A] py-2 px-3 text-xs md:text-sm rounded-lg border border-[#3B82F6]/20 focus:outline-none focus:border-[#3B82F6] transition-colors font-medium"
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

          <div className="text-xs font-mono font-bold text-[#3B82F6] flex justify-between items-center px-1">
            <span>Showing {filteredPublications.length} of {PUBLICATIONS.length} articles</span>
            <span className="opacity-80">Author in bold represents Dr. Abinaya Rengarajan</span>
          </div>

          {/* Publications List */}
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredPublications.map((pub) => (
                <motion.div
                  key={pub.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-5 md:p-6 rounded-xl border border-[#3B82F6]/20 shadow-2xs hover:border-[#EF4444]/40 hover:shadow-[0_4px_15px_rgba(239,68,68,0.15)] transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[#3B82F6]/30 group-hover:bg-[#EF4444] transition-colors"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-2 pl-2">
                    <h4 className="text-sm md:text-base font-bold text-[#0F172A] group-hover:text-[#3B82F6] transition-colors leading-relaxed pr-10">
                      {pub.title}
                    </h4>
                    <span className="text-xs font-mono font-bold bg-blue-50 text-[#1E3A8A] border border-[#3B82F6]/20 px-2.5 py-1 rounded shrink-0 self-start md:self-auto">
                      {pub.year}
                    </span>
                  </div>

                  <p className="text-xs md:text-sm text-[#334155] mb-2 pl-2 leading-relaxed">
                    {pub.authors.map((author, i) => {
                      const isAbinaya = author.includes("Abinaya") || author.includes("Rengarajan") || author === "A Rengarajan" || author === "R Abinaya";
                      return (
                        <span key={i}>
                          <span className={isAbinaya ? 'font-bold text-[#0F172A] underline decoration-[#3B82F6]/40 decoration-2' : 'opacity-90'}>
                            {author}
                          </span>
                          {i < pub.authors.length - 1 ? ', ' : ''}
                        </span>
                      );
                    })}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-[#3B82F6]/10 pl-2">
                    <span className="text-xs md:text-sm text-[#3B82F6] font-semibold italic flex items-center gap-1.5">
                      <FileText size={14} className="opacity-70" />
                      {pub.venue}
                    </span>
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#1E3A8A] hover:text-[#EF4444] transition-colors uppercase tracking-widest bg-[#3B82F6]/10 hover:bg-[#EF4444]/10 px-3 py-1.5 rounded-md cursor-pointer"
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
                <div className="text-center py-12 bg-white/80 rounded-2xl border border-[#3B82F6]/20">
                  <p className="text-[#475569] font-medium">No publications found matching your search term.</p>
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
              className="bg-white p-6 rounded-xl border border-[#3B82F6]/20 shadow-2xs relative overflow-hidden hover:border-[#EF4444]/40 transition-colors"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#3B82F6]/40"></div>
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#1E3A8A] bg-[#3B82F6]/10 px-2.5 py-1 rounded mb-3 inline-block">
                Manuscript #{index + 1}
              </span>
              <h4 className="text-sm md:text-base font-bold text-[#0F172A] mb-2">
                {ms.title}
              </h4>
              <p className="text-xs md:text-sm text-[#334155] mb-3">
                {ms.authors.map((author, i) => (
                  <span key={i}>
                    <span className={author.includes("Abinaya") || author.includes("R. Abinaya") ? 'font-bold text-[#0F172A]' : 'opacity-80'}>
                      {author}
                    </span>
                    {i < ms.authors.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
              <div className="text-xs font-mono font-bold text-[#1E3A8A] italic bg-blue-50 px-3 py-1.5 rounded inline-block border border-[#3B82F6]/15">
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
              className="bg-white p-6 rounded-xl border border-[#3B82F6]/20 shadow-2xs flex flex-col md:flex-row md:items-start gap-4 md:gap-8 hover:border-[#EF4444]/40 transition-colors"
            >
              <div className="md:w-1/4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#3B82F6] block mb-1">
                  Research Domain
                </span>
                <h4 className="font-extrabold text-[#0F172A] text-sm md:text-base leading-snug">
                  {item.domain}
                </h4>
              </div>
              <div className="md:w-3/4 bg-blue-50/50 p-4 rounded-lg border border-[#3B82F6]/15">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#1E3A8A] block mb-2">
                  Key Publication Citations
                </span>
                <p className="text-xs md:text-sm text-[#334155] leading-relaxed font-semibold">
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
