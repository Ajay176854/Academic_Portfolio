import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GRANTS } from '../../data';
import { Award, Briefcase, Calendar, CheckCircle, Clock, DollarSign, ListFilter } from 'lucide-react';

export function GrantsList() {
  const [statusFilter, setStatusFilter] = useState<'All' | 'Ongoing' | 'Completed'>('All');

  const filteredGrants = GRANTS.filter(
    (g) => statusFilter === 'All' || g.status === statusFilter
  );

  // Cumulative budget (150k + 34.9k + 32.8k + 30.3k + 27k + 4.5k + 8.1k) is approx ~288,000+ Euros
  const totalFunding = "288,154+ Euros";
  const activeCount = GRANTS.filter((g) => g.status === 'Ongoing').length;

  return (
    <div className="space-y-8" id="grants-list">
      {/* Dynamic Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-[#819280]/20 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-[#5d735a]/10 text-[#2d3a28]">
            <DollarSign size={20} />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold uppercase text-[#5d735a] block">
              Cumulative Funding Invoiced
            </span>
            <span className="text-base md:text-lg font-bold text-[#2d3a28]">
              {totalFunding}
            </span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-[#819280]/20 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-[#5d735a]/10 text-[#2d3a28]">
            <Clock size={20} />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold uppercase text-[#5d735a] block">
              Active Ongoing Projects
            </span>
            <span className="text-base md:text-lg font-bold text-[#2d3a28]">
              {activeCount} Research Grants
            </span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-[#819280]/20 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-[#5d735a]/10 text-[#2d3a28]">
            <Briefcase size={20} />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold uppercase text-[#5d735a] block">
              Total Funded Projects
            </span>
            <span className="text-base md:text-lg font-bold text-[#2d3a28]">
              {GRANTS.length} Projects
            </span>
          </div>
        </div>
      </div>

      {/* Filter Segment Buttons */}
      <div className="flex items-center justify-between border-b border-[#819280]/10 pb-4">
        <div className="flex items-center gap-2">
          <ListFilter size={16} className="text-[#5d735a]" />
          <span className="text-xs font-bold uppercase text-[#5d735a] tracking-wider">
            Filter Projects
          </span>
        </div>
        <div className="flex gap-2">
          {(['All', 'Ongoing', 'Completed'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                statusFilter === status
                  ? 'bg-[#2d3a28] text-white'
                  : 'bg-[#5d735a]/10 text-[#2d3a28] hover:bg-[#5d735a]/20'
              }`}
              id={`grant-filter-btn-${status}`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Grants Cards */}
      <div className="grid grid-cols-1 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredGrants.map((grant, index) => (
            <motion.div
              key={grant.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-xl border border-[#819280]/20 shadow-sm hover:border-[#5d735a]/40 hover:shadow-md transition-all duration-300 relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-1.5 h-full ${
                grant.status === 'Ongoing' ? 'bg-[#5d735a]' : 'bg-[#819280]/50'
              }`}></div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[#5d735a]/10 text-[#2d3a28] px-2.5 py-1 rounded">
                    {grant.agency}
                  </span>
                  <span className="text-xs text-[#5d735a] font-bold font-mono">
                    {grant.period}
                  </span>
                </div>
                
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  grant.status === 'Ongoing'
                    ? 'bg-[#5d735a]/15 text-[#2d3a28]'
                    : 'bg-[#819280]/15 text-[#36453b]'
                }`}>
                  {grant.status === 'Ongoing' ? (
                    <>
                      <Clock size={12} />
                      <span>Active</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle size={12} />
                      <span>Concluded</span>
                    </>
                  )}
                </span>
              </div>

              <h4 className="text-sm md:text-base font-bold text-[#2d3a28] mb-3 leading-relaxed">
                {grant.title}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#819280]/10 text-xs text-[#5d735a] font-medium">
                <div>
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#5d735a]/60 block mb-1">
                    Investigators
                  </span>
                  <p className="text-sm font-semibold text-[#2d3a28]">
                    {grant.piCoPi}
                  </p>
                </div>
                <div className="md:text-right">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#5d735a]/60 block mb-1">
                    Award Funding Amount
                  </span>
                  <p className="text-sm font-bold text-[#2d3a28]">
                    {grant.amount}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
