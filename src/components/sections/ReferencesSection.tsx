import { REFERENCES } from '../../data';
import { Mail } from 'lucide-react';

export function ReferencesSection() {
  return (
    <section className="py-20 bg-[#F8FAFC]" id="references">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-1">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#3B82F6]">
            professional endorsements
          </span>
          <h2 className="text-xl md:text-2xl font-serif font-extrabold text-[#0F172A]">
            Academic References
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed mt-2">
            Detailed contact information available upon request.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REFERENCES.map((ref, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-[#3B82F6]/20 shadow-2xs hover:border-[#EF4444]/40 hover:shadow-[0_4px_15px_rgba(239,68,68,0.15)] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <h4 className="font-extrabold text-[#0F172A] text-sm md:text-base leading-snug">
                  {ref.name}
                </h4>
                <p className="text-xs text-[#3B82F6] font-bold">
                  {ref.title}
                </p>
                <p className="text-xs text-[#334155] italic leading-relaxed pt-1.5 border-t border-[#3B82F6]/10">
                  {ref.institution}
                </p>
              </div>
              <div className="pt-4 text-[11px] text-[#475569] font-mono font-bold flex items-center gap-1.5 break-all">
                <Mail size={12} className="text-[#3B82F6] shrink-0" />
                <a href={`mailto:${ref.email}`} className="hover:text-[#3B82F6] transition-colors">{ref.email}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
