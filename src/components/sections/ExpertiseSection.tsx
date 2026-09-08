import { Cpu, Zap, Microscope, Layers } from 'lucide-react';
import { NavSectionId } from '../../types';

const SKILLS = [
  {
    category: "Advanced Materials Synthesis",
    icon: <Layers size={24} className="text-[#3B82F6]" />,
    description: "Expertise in the synthesis and fabrication of low-dimensional transition metal dichalcogenides (TMDCs) including MoS₂, WS₂, and SnS₂, alongside novel chalcogenide materials and inorganic-organic hybrid nanocomposites."
  },
  {
    category: "Thermoelectrics & Energy",
    icon: <Zap size={24} className="text-[#EF4444]" />,
    description: "Specialized in developing materials for high-efficiency thermoelectric energy harvesting, next-generation solar cells, and advanced electrocatalysis applications for sustainable energy solutions."
  },
  {
    category: "Optoelectronics & Sensors",
    icon: <Cpu size={24} className="text-[#10B981]" />,
    description: "Design and fabrication of highly responsive photodetectors, flexible devices, and sensitive gas sensors utilizing 2D nanostructures and hybrid architectures."
  },
  {
    category: "Nanoscale Characterization",
    icon: <Microscope size={24} className="text-[#8B5CF6]" />,
    description: "Comprehensive structural, morphological, and optical characterization of low-dimensional materials to evaluate their fundamental properties and performance metrics."
  }
];

interface ExpertiseSectionProps {
  updateActiveNav: (id: NavSectionId, shouldScroll?: boolean) => void;
}

export function ExpertiseSection({ updateActiveNav }: ExpertiseSectionProps) {
  return (
    <section className="py-20 bg-[#F8FAFC]" id="expertise">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-1">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#3B82F6]">
            core competencies
          </span>
          <h2 className="text-xl md:text-2xl font-serif font-extrabold text-[#0F172A]">
            Technical Expertise &amp; Research Focus
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed mt-2">
            Pioneering advancements in 2D materials, energy harvesting, and optoelectronics through rigorous experimental fabrication and characterization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS.map((skill, idx) => (
            <a
              key={idx}
              href="#publications"
              onClick={(e) => {
                e.preventDefault();
                updateActiveNav('publications', true);
              }}
              className="bg-white p-6 md:p-8 rounded-xl border border-[#3B82F6]/20 shadow-2xs hover:border-[#3B82F6]/50 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all duration-300 flex flex-col md:flex-row gap-5 group cursor-pointer"
            >
              <div className="p-3 bg-slate-50 rounded-lg h-fit shrink-0 border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <div className="space-y-2.5">
                <h4 className="font-extrabold text-[#0F172A] text-base md:text-lg leading-snug group-hover:text-[#1E3A8A] transition-colors">
                  {skill.category}
                </h4>
                <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
