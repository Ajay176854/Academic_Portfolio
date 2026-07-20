import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hero } from '../components/sections/Hero';
import { CollaborationsBanner } from '../components/sections/CollaborationsBanner';
import { ResearchAccomplishments } from '../components/sections/ResearchAccomplishments';
import { PublicationsList } from '../components/sections/PublicationsList';
import { GrantsList } from '../components/sections/GrantsList';
import { PeopleAndServices } from '../components/sections/PeopleAndServices';
import { ContactSection } from '../components/sections/ContactSection';
import { ReferencesSection } from '../components/sections/ReferencesSection';
import { EDUCATION, EXPERIENCE, AWARDS } from '../data';
import { GraduationCap, Briefcase, Award as TrophyIcon, Mail } from 'lucide-react';
import { NavSectionId } from '../types';

interface HomePageProps {
  activeNav: NavSectionId;
  updateActiveNav: (id: NavSectionId, shouldScroll?: boolean) => void;
}

export default function HomePage({ activeNav, updateActiveNav }: HomePageProps) {
  const activeTab: NavSectionId = activeNav === 'about' ? 'breakthroughs' : activeNav;

  const tabs: { id: NavSectionId; label: string; icon: any }[] = [
    { id: 'breakthroughs', label: 'Research Breakthroughs', icon: TrophyIcon },
    { id: 'publications', label: 'Publications & Articles', icon: GraduationCap },
    { id: 'grants', label: 'Grants & Funding', icon: TrophyIcon },
    { id: 'timeline', label: 'Academic Timeline', icon: Briefcase },
    { id: 'awards-services', label: 'Honors & Services', icon: TrophyIcon },
    { id: 'contact', label: 'Collaboration & Contact', icon: Mail },
  ];

  return (
    <>
      {/* Hero Section with affiliations and citations statistics */}
      <Hero updateActiveNav={updateActiveNav} />

      {/* Master Interactive Core Dashboard */}
      <section className="py-12 md:py-16 bg-[#F4ECE1]/50 border-y border-[#819280]/20 scroll-mt-24 md:scroll-mt-28" id="research">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#5d735a]">
              scholar portfolio explorer
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-extrabold text-[#2d3a28]">
              Academic & Scientific Dossier
            </h2>
            <p className="text-xs md:text-sm text-[#5d735a] leading-relaxed">
              Explore Dr. Abinaya's research findings, peer-reviewed bibliography, 
              funding acquisitions, and academic milestones using the panels below.
            </p>
          </div>

          {/* Dashboard Tabs Grid */}
          <div className="flex flex-wrap items-center justify-center gap-2 bg-white/50 backdrop-blur-sm p-2 rounded-2xl border border-[#819280]/15 shadow-sm max-w-4xl mx-auto mb-12">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    updateActiveNav(tab.id, false);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#2d3a28] text-white shadow-md'
                      : 'text-[#5d735a] hover:bg-[#5d735a]/10 hover:text-[#2d3a28]'
                  }`}
                  id={`dashboard-tab-${tab.id}`}
                >
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Output Workspace */}
          <div className="bg-transparent relative" id="tab-content-area">
            <AnimatePresence>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15, position: 'absolute', width: '100%' }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="w-full relative"
              >
                {activeTab === 'breakthroughs' && <ResearchAccomplishments />}
                
                {activeTab === 'publications' && <PublicationsList />}
                
                {activeTab === 'grants' && <GrantsList />}
                
                {activeTab === 'timeline' && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
                    {/* Professional Experience timeline */}
                    <div className="space-y-6" id="timeline-experience-block">
                      <div className="flex items-center gap-2 border-b border-[#819280]/25 pb-3">
                        <Briefcase className="text-[#5d735a]" size={20} />
                        <h3 className="text-lg font-bold text-[#2d3a28]">Research Experience</h3>
                      </div>
                      <div className="space-y-6 relative border-l border-[#819280]/20 pl-6 ml-3">
                        {EXPERIENCE.map((exp, index) => (
                          <div key={exp.id} className="relative group flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-[#5d735a] border-2 border-[#FAF6EE] group-hover:bg-[#2d3a28] transition-colors"></div>
                              <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#5d735a] bg-[#5d735a]/10 px-2.5 py-1 rounded">
                                {exp.period}
                              </span>
                              <h4 className="font-extrabold text-[#2d3a28] text-base mt-2.5 leading-snug">
                                {exp.role}
                              </h4>
                              <p className="text-xs font-bold text-[#5d735a] mb-2">{exp.institution}</p>
                              {exp.details && (
                                <p className="text-xs md:text-sm text-[#36453b] leading-relaxed font-semibold">
                                  {exp.details}
                                </p>
                              )}
                            </div>
                            {exp.logo && (
                              <div className="flex-shrink-0 self-start sm:self-center">
                                <img 
                                  src={exp.logo} 
                                  alt={`${exp.institution} Logo`} 
                                  className="h-10 sm:h-12 max-w-[140px] sm:max-w-[160px] object-contain bg-white/95 p-1 rounded-lg border border-[#819280]/15 shadow-sm transition-transform duration-300 group-hover:scale-105"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Education Timeline */}
                    <div className="space-y-6" id="timeline-education-block">
                      <div className="flex items-center gap-2 border-b border-[#819280]/25 pb-3">
                        <GraduationCap className="text-[#5d735a]" size={20} />
                        <h3 className="text-lg font-bold text-[#2d3a28]">Academic Credentials</h3>
                      </div>
                      <div className="space-y-6 relative border-l border-[#819280]/20 pl-6 ml-3">
                        {EDUCATION.map((edu, index) => (
                          <div key={edu.id} className="relative group flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-[#5d735a] border-2 border-[#FAF6EE] group-hover:bg-[#2d3a28] transition-colors"></div>
                              <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#5d735a] bg-[#5d735a]/10 px-2.5 py-1 rounded">
                                {edu.year}
                              </span>
                              <h4 className="font-extrabold text-[#2d3a28] text-base mt-2.5 leading-snug">
                                {edu.degree}
                              </h4>
                              <p className="text-xs font-bold text-[#5d735a] mb-2">{edu.institution}</p>
                              {edu.details && (
                                <p className="text-xs md:text-sm text-[#36453b] leading-relaxed font-semibold">
                                  {edu.details}
                                </p>
                              )}
                            </div>
                            {edu.logo && (
                              <div className="flex-shrink-0 self-start sm:self-center">
                                <img 
                                  src={edu.logo} 
                                  alt={`${edu.institution} Logo`} 
                                  className="h-10 sm:h-12 max-w-[140px] sm:max-w-[160px] object-contain bg-white/95 p-1 rounded-lg border border-[#819280]/15 shadow-sm transition-transform duration-300 group-hover:scale-105"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'awards-services' && (
                  <div className="space-y-12">
                    {/* Honors & Awards (19 awards with trophy icon) */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 border-b border-[#819280]/25 pb-3">
                        <TrophyIcon className="text-[#5d735a]" size={20} />
                        <h3 className="text-lg font-bold text-[#2d3a28]">Academic Honors & Best Presentation Awards</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {AWARDS.map((awd) => (
                          <div
                            key={awd.id}
                            className="bg-white p-5 rounded-xl border border-[#819280]/20 shadow-sm hover:border-[#5d735a]/35 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between group"
                          >
                            <div className="flex justify-between items-start gap-3">
                              <div className="p-2 bg-[#5d735a]/10 rounded-lg text-[#2d3a28] h-fit shrink-0">
                                <TrophyIcon size={16} />
                              </div>
                              {awd.logo && (
                                <img
                                  src={awd.logo}
                                  alt={awd.organization}
                                  className="h-10 sm:h-11 max-w-[130px] object-contain bg-white/95 p-1 rounded-md border border-[#819280]/20 shadow-xs group-hover:scale-105 transition-transform"
                                  referrerPolicy="no-referrer"
                                />
                              )}
                            </div>

                            <div className="space-y-1 mt-3">
                              <h4 className="font-bold text-[#2d3a28] text-xs md:text-sm leading-relaxed">
                                {awd.title}
                              </h4>
                              <p className="text-[11px] text-[#5d735a] font-semibold">{awd.organization}</p>
                            </div>

                            <div className="mt-3 pt-2 border-t border-[#819280]/10">
                              <span className="inline-block text-[9px] font-mono font-bold bg-[#819280]/15 text-[#36453b] px-2 py-0.5 rounded">
                                Year {awd.year}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Mentorship & Professional Services */}
                    <PeopleAndServices />
                  </div>
                )}

                {activeTab === 'contact' && <ContactSection />}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Collaborations, Funding Agencies & Publishers Banner */}
      <CollaborationsBanner />

      {/* Professional References Catalog */}
      <ReferencesSection />
    </>
  );
}
