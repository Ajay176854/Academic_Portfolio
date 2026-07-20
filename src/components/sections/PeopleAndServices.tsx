import { motion } from 'motion/react';
import { STUDENTS, SERVICES, WORKSHOPS, LANGUAGES } from '../../data';
import { Users, BookOpen, Star, HelpCircle, Languages, Award, ChevronRight } from 'lucide-react';

export function PeopleAndServices() {
  return (
    <div className="space-y-12" id="people-and-services">
      {/* Students Supervision */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 border-b border-[#819280]/20 pb-2">
          <Users className="text-[#5d735a]" size={20} />
          <h3 className="text-lg font-bold text-[#2d3a28]">
            Co-Supervision & Mentorship (Ph.D.)
          </h3>
        </div>
        <p className="text-sm text-[#5d735a] font-medium leading-relaxed max-w-2xl">
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
              className="bg-white p-5 rounded-xl border border-[#819280]/20 shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#5d735a]/5 rounded-bl-full"></div>
              <h4 className="font-extrabold text-[#2d3a28] text-base mb-1">
                {student.name}
              </h4>
              <p className="text-xs text-[#5d735a] font-bold uppercase tracking-wider mb-2">
                {student.degree} Candidate • {student.institution}
              </p>
              {student.publicationsNote && (
                <p className="text-xs text-[#36453b] italic leading-relaxed border-t border-[#819280]/10 pt-2 font-medium">
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
          <div className="flex items-center gap-2 border-b border-[#819280]/20 pb-2">
            <Award className="text-[#5d735a]" size={20} />
            <h3 className="text-lg font-bold text-[#2d3a28]">
              Professional Services & memberships
            </h3>
          </div>
          <div className="space-y-3">
            {SERVICES.map((srv, idx) => (
              <div key={idx} className="flex gap-2 text-xs md:text-sm text-[#36453b] items-start">
                <ChevronRight size={16} className="text-[#5d735a] shrink-0 mt-0.5" />
                <span className="leading-relaxed font-semibold">{srv}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages Panel */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[#819280]/20 pb-2">
            <Languages className="text-[#5d735a]" size={20} />
            <h3 className="text-lg font-bold text-[#2d3a28]">
              Language Proficiency
            </h3>
          </div>
          <div className="bg-white p-6 rounded-xl border border-[#819280]/20 shadow-sm space-y-4">
            {LANGUAGES.map((lang, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between items-center text-xs md:text-sm font-bold text-[#2d3a28]">
                  <span>{lang.name}</span>
                  <span className="text-[#5d735a] font-mono text-xs">{lang.proficiency}</span>
                </div>
                <div className="h-1.5 w-full bg-[#5d735a]/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#5d735a] rounded-full"
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
        <div className="flex items-center gap-2 border-b border-[#819280]/20 pb-2">
          <BookOpen className="text-[#5d735a]" size={20} />
          <h3 className="text-lg font-bold text-[#2d3a28]">
            Workshops, courses & Presentations
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {WORKSHOPS.map((workshop, idx) => (
            <div
              key={idx}
              className="bg-[#5d735a]/5 p-4 rounded-xl border border-[#5d735a]/10 flex gap-3 items-start"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#5d735a] shrink-0 mt-2"></div>
              <p className="text-xs md:text-sm text-[#36453b] leading-relaxed font-semibold">
                {workshop}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
