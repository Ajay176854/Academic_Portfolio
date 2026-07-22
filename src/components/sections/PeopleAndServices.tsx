import { motion } from 'motion/react';
import { STUDENTS, SERVICES, WORKSHOPS, LANGUAGES } from '../../data';
import { Users, BookOpen, Star, HelpCircle, Languages, Award, ChevronRight } from 'lucide-react';

export function PeopleAndServices() {
  return (
    <div className="space-y-12" id="people-and-services">
      {/* Students Supervision */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 border-b border-[#3B82F6]/20 pb-2">
          <Users className="text-[#3B82F6]" size={20} />
          <h3 className="text-lg font-bold text-[#0F172A]">
            Co-Supervision & Mentorship (Ph.D.)
          </h3>
        </div>
        <p className="text-sm text-[#475569] font-medium leading-relaxed max-w-2xl">
          Actively co-supervised multiple Ph.D. scholars at SRM Institute of Science and Technology (2021–2024) 
          focusing on thermoelectric nanomaterial syntheses, generating high-impact co-authored publications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {STUDENTS.map((student, idx) => (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-white p-5 rounded-xl border border-[#3B82F6]/20 shadow-2xs hover:border-[#EF4444]/40 hover:shadow-[0_4px_15px_rgba(239,68,68,0.15)] transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#3B82F6]/5 rounded-bl-full group-hover:bg-[#EF4444]/10 transition-colors"></div>
              <h4 className="font-extrabold text-[#0F172A] text-base mb-1">
                {student.name}
              </h4>
              <p className="text-xs text-[#3B82F6] font-bold uppercase tracking-wider mb-2">
                {student.degree} Candidate • {student.institution}
              </p>
              {student.publicationsNote && (
                <p className="text-xs text-[#334155] italic leading-relaxed border-t border-[#3B82F6]/10 pt-2 font-medium">
                  Publications: {student.publicationsNote}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Professional Memberships & Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[#3B82F6]/20 pb-2">
            <Award className="text-[#3B82F6]" size={20} />
            <h3 className="text-lg font-bold text-[#0F172A]">
              Professional Services & memberships
            </h3>
          </div>
          <div className="space-y-3">
            {SERVICES.map((srv, idx) => (
              <div key={idx} className="flex gap-2 text-xs md:text-sm text-[#334155] items-start">
                <ChevronRight size={16} className="text-[#3B82F6] shrink-0 mt-0.5" />
                <span className="leading-relaxed font-semibold">{srv}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages Panel */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[#3B82F6]/20 pb-2">
            <Languages className="text-[#3B82F6]" size={20} />
            <h3 className="text-lg font-bold text-[#0F172A]">
              Language Proficiency
            </h3>
          </div>
          <div className="bg-white p-6 rounded-xl border border-[#3B82F6]/20 shadow-2xs space-y-4">
            {LANGUAGES.map((lang, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between items-center text-xs md:text-sm font-bold text-[#0F172A]">
                  <span>{lang.name}</span>
                  <span className="text-[#3B82F6] font-mono text-xs">{lang.proficiency}</span>
                </div>
                <div className="h-1.5 w-full bg-[#3B82F6]/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] rounded-full"
                    style={{
                      width:
                        lang.proficiency.includes('Native')
                          ? '100%'
                          : lang.proficiency.includes('Fluent')
                          ? '90%'
                          : lang.proficiency.includes('Writing & Conversational')
                          ? '75%'
                          : lang.proficiency.includes('Writing & Moderate')
                          ? '50%'
                          : '25%'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Workshops and Courses */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b border-[#3B82F6]/20 pb-2">
          <BookOpen className="text-[#3B82F6]" size={20} />
          <h3 className="text-lg font-bold text-[#0F172A]">
            Workshops, courses & Presentations
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {WORKSHOPS.map((workshop, idx) => (
            <div
              key={idx}
              className="bg-blue-50/50 p-4 rounded-xl border border-[#3B82F6]/15 flex gap-3 items-start hover:border-[#EF4444]/30 transition-colors"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#EF4444] shrink-0 mt-2"></div>
              <p className="text-xs md:text-sm text-[#334155] leading-relaxed font-semibold">
                {workshop}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
