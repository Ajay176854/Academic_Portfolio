import { useState } from 'react';
import { motion } from 'motion/react';
import { ACCOMPLISHMENTS, INSTRUMENTS } from '../../data';
import { Award, Compass, Wrench, Layers, Cpu, Radio, ShieldCheck } from 'lucide-react';

export function ResearchAccomplishments() {
  const [activeSubTab, setActiveSubTab] = useState<'breakthroughs' | 'instruments'>('breakthroughs');
  const [instrumentFilter, setInstrumentFilter] = useState<'All' | 'Synthesis' | 'Characterization' | 'Software'>('All');

  const filteredInstruments = INSTRUMENTS.filter(
    (ins) => instrumentFilter === 'All' || ins.category === instrumentFilter
  );

  return (
    <div className="space-y-10" id="research-accomplishments">
      {/* Tab Switcher */}
      <div className="flex border-b border-[#3B82F6]/20 max-w-md">
        <button
          onClick={() => setActiveSubTab('breakthroughs')}
          className={`flex-1 py-3 text-sm font-bold tracking-wider uppercase text-center border-b-2 transition-all cursor-pointer ${
            activeSubTab === 'breakthroughs'
              ? 'border-[#3B82F6] text-[#0F172A]'
              : 'border-transparent text-[#475569] hover:text-[#0F172A]'
          }`}
          id="tab-btn-breakthroughs"
        >
          Key Breakthroughs
        </button>
        <button
          onClick={() => setActiveSubTab('instruments')}
          className={`flex-1 py-3 text-sm font-bold tracking-wider uppercase text-center border-b-2 transition-all cursor-pointer ${
            activeSubTab === 'instruments'
              ? 'border-[#3B82F6] text-[#0F172A]'
              : 'border-transparent text-[#475569] hover:text-[#0F172A]'
          }`}
          id="tab-btn-instruments"
        >
          Research Instrumentation
        </button>
      </div>

      {activeSubTab === 'breakthroughs' && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          <div className="bg-slate-50/80 p-6 rounded-2xl border border-[#3B82F6]/20">
            <h3 className="text-lg font-bold text-[#0F172A] mb-4 flex items-center gap-2">
              <Compass className="text-[#3B82F6]" size={20} />
              Key Research Accomplishments & Innovations
            </h3>
            <p className="text-sm text-[#334155] leading-relaxed mb-6">
              Experimental research focusing on decoupling core thermoelectric trade-off relationships, 
              vacancy engineering, and developing flexible state-of-the-art multi-dimensional nanocomposites.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {ACCOMPLISHMENTS.map((acc, index) => (
                <motion.div
                  key={acc.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className="bg-white p-5 rounded-xl border border-[#3B82F6]/15 hover:border-[#EF4444]/40 hover:shadow-[0_2px_12px_rgba(239,68,68,0.12)] transition-all duration-200 flex gap-4 items-start group"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#3B82F6]/10 text-[#1E3A8A] font-sans font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#EF4444]/10 group-hover:text-[#EF4444] transition-colors">
                    {index + 1}
                  </div>
                  <div className="space-y-2 flex-1">
                    <p className="text-sm text-[#0F172A] font-medium leading-relaxed">
                      {acc.text}
                    </p>
                    {acc.reference && (
                      <span className="inline-block text-xs font-sans font-semibold bg-blue-50 text-[#1E3A8A] px-2.5 py-0.5 rounded border border-[#3B82F6]/15 shadow-2xs">
                        {acc.reference}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {activeSubTab === 'instruments' && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          {/* Subfilters for Instruments */}
          <div className="flex flex-wrap gap-2">
            {(['All', 'Synthesis', 'Characterization', 'Software'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setInstrumentFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition-colors cursor-pointer ${
                  instrumentFilter === cat
                    ? 'bg-[#1E3A8A] text-white shadow-xs'
                    : 'bg-[#3B82F6]/10 text-[#1E3A8A] hover:bg-[#3B82F6]/20'
                }`}
                id={`btn-filter-ins-${cat}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredInstruments.map((ins, index) => (
              <motion.div
                key={ins.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="bg-white p-5 rounded-xl border border-[#3B82F6]/20 shadow-2xs flex gap-4 hover:border-[#EF4444]/40 hover:shadow-[0_4px_15px_rgba(239,68,68,0.15)] transition-all duration-300 group"
              >
                <div className="shrink-0">
                  <div className="p-3 rounded-xl bg-[#3B82F6]/10 text-[#1E3A8A] group-hover:bg-[#EF4444]/10 group-hover:text-[#EF4444] transition-colors">
                    {ins.category === 'Synthesis' ? <Layers size={18} /> : ins.category === 'Characterization' ? <Cpu size={18} /> : <Wrench size={18} />}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <h4 className="font-bold text-[#0F172A] text-sm md:text-base">{ins.name}</h4>
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-blue-50 text-[#1E3A8A] border border-[#3B82F6]/15">
                      {ins.category}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-[#475569] leading-relaxed mb-3">
                    {ins.details}
                  </p>
                  {ins.image && (
                    <div className="mt-2 rounded-lg overflow-hidden border border-[#3B82F6]/15 bg-[#F8FAFC] max-h-48 flex justify-center items-center">
                      <img 
                        src={ins.image} 
                        alt={ins.name} 
                        className="w-full h-44 object-contain p-1" 
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
