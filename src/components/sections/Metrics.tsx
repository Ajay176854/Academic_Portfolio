import { motion } from 'motion/react';
import { METRICS } from '../../data';
import { FileText, TrendingUp, Award, Users, AwardIcon } from 'lucide-react';

export function MetricsShowcase() {
  const metricItems = [
    {
      id: 'pubs',
      label: 'Peer-Reviewed Publications',
      value: METRICS.publications,
      suffix: '+',
      desc: 'High-Impact Journals',
      icon: FileText,
      color: 'from-[#5d735a] to-[#2d3a28]'
    },
    {
      id: 'citations',
      label: 'Google Scholar Citations',
      value: METRICS.citations,
      suffix: '',
      desc: 'h-index: 14 | i10-index: 18',
      icon: TrendingUp,
      color: 'from-[#819280] to-[#5d735a]'
    },
    {
      id: 'conferences',
      label: 'International Conferences',
      value: METRICS.conferences,
      suffix: '+',
      desc: 'Global Presentations',
      icon: Award,
      color: 'from-[#2d3a28] to-[#1e271b]'
    },
    {
      id: 'grants',
      label: 'Research Grants Involved',
      value: 7,
      suffix: '',
      desc: 'DST, SERB, CSIR, UGC-DAE',
      icon: AwardIcon,
      color: 'from-[#4b5e4a] to-[#2d3a28]'
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
            className="relative bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-[#819280]/20 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group hover:border-[#5d735a]/30"
            id={`metric-card-${item.id}`}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#5d735a]/5 rounded-bl-full transition-transform duration-500 group-hover:scale-110"></div>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-[#5d735a]/10 text-[#2d3a28] shrink-0 group-hover:bg-[#5d735a] group-hover:text-white transition-colors duration-300">
                <Icon size={20} />
              </div>
              <span className="text-xs font-mono font-bold tracking-wider text-[#5d735a] uppercase">
                {item.id} metrics
              </span>
            </div>

            <div className="relative">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl md:text-4xl font-extrabold text-[#2d3a28] tracking-tight">
                  {item.value}
                </span>
                <span className="text-xl font-bold text-[#5d735a]">
                  {item.suffix}
                </span>
              </div>
              <p className="text-sm font-semibold text-[#2d3a28] mt-2 line-clamp-1">
                {item.label}
              </p>
              <p className="text-xs text-[#5d735a] font-medium mt-1">
                {item.desc}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
