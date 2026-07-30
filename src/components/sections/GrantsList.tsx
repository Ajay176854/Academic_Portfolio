import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GRANTS } from '../../data';
import { Award, Briefcase, Calendar, CheckCircle, Clock, DollarSign, ListFilter, User } from 'lucide-react';

export function GrantsList() {
  const [statusFilter, setStatusFilter] = useState<'All' | 'Ongoing' | 'Completed'>('All');

  const filteredGrants = GRANTS.filter(
    (g) => statusFilter === 'All' || g.status === statusFilter
  );

  const totalFunding = "288,154 EUR";
  const activeCount = GRANTS.filter((g) => g.status === 'Ongoing').length;

  return (
    <div className="space-y-8" id="grants-list">
      {/* Dynamic Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-[#3B82F6]/20 shadow-2xs flex items-center gap-4 hover:border-[#EF4444]/40 transition-colors">
          <div className="p-3 rounded-xl bg-[#3B82F6]/10 text-[#1E3A8A]">
            <DollarSign size={20} />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold uppercase text-[#3B82F6] block">
              Cumulative Funding Involved
            </span>
            <span className="text-base md:text-lg font-bold text-[#0F172A]">
              ~ {totalFunding}
            </span>
            <span className="text-[10px] text-[#475569] font-medium block">
              Combined value of projects contributed to
            </span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-[#3B82F6]/20 shadow-2xs flex items-center gap-4 hover:border-[#EF4444]/40 transition-colors">
          <div className="p-3 rounded-xl bg-[#3B82F6]/10 text-[#1E3A8A]">
            <Clock size={20} />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold uppercase text-[#3B82F6] block">
              Active Ongoing Projects
            </span>
            <span className="text-base md:text-lg font-bold text-[#0F172A]">
              {activeCount} Research Grants
            </span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-[#3B82F6]/20 shadow-2xs flex items-center gap-4 hover:border-[#EF4444]/40 transition-colors">
          <div className="p-3 rounded-xl bg-[#3B82F6]/10 text-[#1E3A8A]">
            <Briefcase size={20} />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold uppercase text-[#3B82F6] block">
              Total Funded Projects
            </span>
            <span className="text-base md:text-lg font-bold text-[#0F172A]">
              {GRANTS.length} Projects
            </span>
          </div>
        </div>
      </div>

      {/* Filter Segment Buttons */}
      <div className="flex items-center justify-between border-b border-[#3B82F6]/15 pb-4">
        <div className="flex items-center gap-2">
          <ListFilter size={16} className="text-[#3B82F6]" />
          <span className="text-xs font-bold uppercase text-[#3B82F6] tracking-wider">
            Filter Projects
          </span>
        </div>
        <div className="flex gap-2">
          {(['All', 'Ongoing', 'Completed'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                statusFilter === status
                  ? 'bg-[#1E3A8A] text-white shadow-2xs'
                  : 'bg-[#3B82F6]/10 text-[#1E3A8A] hover:bg-[#3B82F6]/20'
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
          {filteredGrants.map((grant) => (
            <motion.div
              key={grant.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-xl border border-[#3B82F6]/20 shadow-2xs hover:border-[#EF4444]/40 hover:shadow-[0_4px_15px_rgba(239,68,68,0.15)] transition-all duration-300 relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-1.5 h-full ${
                grant.status === 'Ongoing' ? 'bg-[#EF4444]' : 'bg-[#3B82F6]/40'
              }`}></div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-50 text-[#1E3A8A] border border-[#3B82F6]/15 px-2.5 py-1 rounded">
                    {grant.agency}
                  </span>
                  <span className="text-xs text-[#3B82F6] font-bold font-sans">
                    {grant.period}
                  </span>
                </div>
                
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
                  grant.status === 'Ongoing'
                    ? 'bg-red-50 text-[#EF4444] border-red-200'
                    : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                }`}>
                  {grant.status === 'Ongoing' ? (
                    <>
                      <Clock size={12} />
                      <span>Active</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle size={12} />
                      <span>Completed</span>
                    </>
                  )}
                </span>
              </div>

              <h4 className="text-sm md:text-base font-bold text-[#0F172A] mb-3 leading-relaxed">
                {grant.title}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[#3B82F6]/10 text-xs text-[#475569] font-medium">
                <div>
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#3B82F6] block mb-1">
                    Investigators
                  </span>
                  <p className="text-sm font-semibold text-[#0F172A]">
                    {grant.piCoPi}
                  </p>
                </div>
                {grant.role && (
                  <div>
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#3B82F6] block mb-1">
                      <User size={10} className="inline mr-1" />
                      Dr. Rengarajan's Role
                    </span>
                    <p className="text-sm font-semibold text-[#0F172A] capitalize">
                      {grant.role}
                    </p>
                  </div>
                )}
                <div className="md:text-right">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#3B82F6] block mb-1">
                    Project Funding Amount
                  </span>
                  <p className="text-sm font-bold text-[#1E3A8A]">
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
