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
      <div className="flex border-b border-[#819280]/20 max-w-md">
        <button
          onClick={() => setActiveSubTab('breakthroughs')}
          className={`flex-1 py-3 text-sm font-bold tracking-wider uppercase text-center border-b-2 transition-all ${
            activeSubTab === 'breakthroughs'
              ? 'border-[#2d3a28] text-[#2d3a28]'
              : 'border-transparent text-[#5d735a]/60 hover:text-[#2d3a28]'
          }`}
          id="tab-btn-breakthroughs"
        >
          Key Breakthroughs
        </button>
        <button
          onClick={() => setActiveSubTab('instruments')}
          className={`flex-1 py-3 text-sm font-bold tracking-wider uppercase text-center border-b-2 transition-all ${
            activeSubTab === 'instruments'
              ? 'border-[#2d3a28] text-[#2d3a28]'
              : 'border-transparent text-[#5d735a]/60 hover:text-[#2d3a28]'
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
          <div className="bg-[#5d735a]/5 p-6 rounded-2xl border border-[#819280]/20">
            <h3 className="text-lg font-bold text-[#2d3a28] mb-4 flex items-center gap-2">
              <Compass className="text-[#5d735a]" size={20} />
              Key Research Accomplishments & Innovations
            </h3>
            <p className="text-sm text-[#36453b] leading-relaxed mb-6">
              Experimental research focusing on decoupling core thermoelectric trade-off relationships, 
              vacancy engineering, and developing flexible state-of-the-art multi-dimensional nanocomposites.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {ACCOMPLISHMENTS.map((acc, index) => (
                <motion.div
                  key={acc.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white p-5 rounded-xl border border-[#819280]/10 hover:border-[#5d735a]/30 hover:shadow-sm transition-all duration-200 flex gap-4 items-start"
                >
                  <div className="p-1.5 rounded-lg bg-[#5d735a]/10 text-[#2d3a28] shrink-0 mt-0.5">
                    <ShieldCheck size={16} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-[#2d3a28] font-medium leading-relaxed">
                      {acc.text}
                    </p>
                    {acc.reference && (
                      <span className="inline-block text-xs font-mono font-bold bg-[#5d735a]/10 text-[#2d3a28] px-2 py-0.5 rounded">
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
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition-colors ${
                  instrumentFilter === cat
                    ? 'bg-[#2d3a28] text-[#E9EBE0]'
                    : 'bg-[#5d735a]/10 text-[#2d3a28] hover:bg-[#5d735a]/20'
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
                className="bg-white p-5 rounded-xl border border-[#819280]/25 shadow-sm flex gap-4 hover:border-[#5d735a]/40 transition-colors"
              >
                <div className="shrink-0">
                  <div className={`p-3 rounded-xl text-[#2d3a28] ${
                    ins.category === 'Synthesis'
                      ? 'bg-[#5d735a]/10 text-[#2d3a28]'
                      : ins.category === 'Characterization'
                      ? 'bg-[#819280]/15 text-[#2d3a28]'
                      : 'bg-[#3a4a37]/10 text-[#3a4a37]'
                  }`}>
                    {ins.category === 'Synthesis' ? <Layers size={18} /> : ins.category === 'Characterization' ? <Cpu size={18} /> : <Wrench size={18} />}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <h4 className="font-bold text-[#2d3a28] text-sm md:text-base">{ins.name}</h4>
                    <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full ${
                      ins.category === 'Synthesis'
                        ? 'bg-[#5d735a]/10 text-[#2d3a28]'
                        : ins.category === 'Characterization'
                        ? 'bg-[#819280]/20 text-[#2d3a28]'
                        : 'bg-[#3a4a37]/10 text-[#3a4a37]'
                    }`}>
                      {ins.category}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-[#5d735a] leading-relaxed mb-3">
                    {ins.details}
                  </p>
                  {ins.image && (
                    <div className="mt-2 rounded-lg overflow-hidden border border-[#819280]/20 bg-[#FAF6EE] max-h-48 flex justify-center items-center">
                      <img 
                        src={ins.image} 
                        alt={ins.name} 
                        className="w-full h-44 object-contain p-1 hover:scale-105 transition-transform duration-300" 
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
