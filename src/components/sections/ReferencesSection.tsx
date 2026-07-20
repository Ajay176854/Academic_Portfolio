import { REFERENCES } from '../../data';

export function ReferencesSection() {
  return (
    <section className="py-20 bg-white" id="references">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-1">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#5d735a]">
            professional endorsements
          </span>
          <h2 className="text-xl md:text-2xl font-serif font-extrabold text-[#2d3a28]">
            Academic Recommendations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REFERENCES.map((ref, idx) => (
            <div
              key={idx}
              className="bg-[#F4ECE1]/50 p-6 rounded-xl border border-[#819280]/20 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <h4 className="font-extrabold text-[#2d3a28] text-sm md:text-base leading-snug">
                  {ref.name}
                </h4>
                <p className="text-xs text-[#5d735a] font-bold">
                  {ref.title}
                </p>
                <p className="text-xs text-[#36453b] italic leading-relaxed pt-1.5 border-t border-[#819280]/10">
                  {ref.institution}
                </p>
              </div>
              <div className="space-y-1 pt-4 text-[11px] text-[#5d735a] font-mono font-bold">
                <a href={`mailto:${ref.email}`} className="hover:text-[#2d3a28] block truncate">
                  {ref.email}
                </a>
                {ref.phone && <span className="block">{ref.phone}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
