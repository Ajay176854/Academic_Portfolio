import { motion } from 'motion/react';
import { METRICS, PROFILE } from '../../data';
import { FileText, TrendingUp, Award, Users, AwardIcon } from 'lucide-react';

export function MetricsShowcase() {
  const metricItems = [
    {
      id: 'pubs',
      label: 'Peer-Reviewed Publications',
      value: METRICS.publications,
      suffix: '',
      desc: 'Journals incl. JACS, Chem. Eng. J., Small (View ORCID)',
      icon: FileText,
      link: PROFILE.orcid,
    },
    {
      id: 'citations',
      label: 'Google Scholar Citations',
      value: METRICS.citations,
      suffix: '',
      desc: `h-index: ${METRICS.hIndex} · i10-index: ${METRICS.i10Index} (August 2026)`,
      icon: TrendingUp,
      link: PROFILE.scholar,
    },
    {
      id: 'conferences',
      label: 'International Conferences',
      value: METRICS.conferences,
      suffix: '',
      desc: 'Oral & Poster Presentations (View LinkedIn)',
      icon: Award,
      link: PROFILE.linkedin,
    },
    {
      id: 'grants',
      label: 'Research Grants Contributed To',
      value: 7,
      suffix: '',
      desc: 'DST, SERB, CSIR, UGC-DAE',
      icon: AwardIcon,
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 my-10">
      {metricItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-[#3B82F6]/20 shadow-2xs hover:shadow-[0_4px_20px_rgba(239,68,68,0.2)] hover:border-[#EF4444]/40 transition-all duration-300 overflow-hidden group"
            id={`metric-card-${item.id}`}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#3B82F6]/5 rounded-bl-full transition-all duration-500 group-hover:scale-110 group-hover:bg-[#EF4444]/10"></div>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-[#3B82F6]/10 text-[#1E3A8A] shrink-0 group-hover:bg-[#EF4444] group-hover:text-white transition-colors duration-300 shadow-2xs">
                <Icon size={20} />
              </div>
              <span className="text-xs font-mono font-bold tracking-wider text-[#3B82F6] uppercase">
                {item.id} metrics
              </span>
            </div>

            <div className="relative">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                  {item.value}
                </span>
                {item.suffix && (
                  <span className="text-xl font-bold text-[#EF4444]">
                    {item.suffix}
                  </span>
                )}
              </div>
              <p className="text-sm font-semibold text-[#0F172A] mt-2 line-clamp-1">
                {item.label}
              </p>
              {'link' in item && item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#3B82F6] font-medium mt-1 hover:underline inline-block"
                >
                  {item.desc}
                </a>
              ) : (
                <p className="text-xs text-[#475569] font-medium mt-1">
                  {item.desc}
                </p>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
