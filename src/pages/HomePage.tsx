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
import { GraduationCap, Briefcase, Award as TrophyIcon, Mail, Image } from 'lucide-react';
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
    { id: 'gallery', label: 'Photo Gallery', icon: Image },
    { id: 'contact', label: 'Collaboration & Contact', icon: Mail },
  ];

  return (
    <>
      {/* Hero Section with affiliations and citations statistics */}
      <Hero updateActiveNav={updateActiveNav} />

      {/* Master Interactive Core Dashboard */}
      <section className="py-12 md:py-16 bg-slate-50/70 border-y border-[#3B82F6]/15 backdrop-blur-xs scroll-mt-24 md:scroll-mt-28" id="research">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#3B82F6]">
              scholar portfolio explorer
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-extrabold text-[#0F172A]">
              Research & Professional Milestones
            </h2>
            <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
              Explore Dr. Rengarajan's research findings, peer-reviewed bibliography, 
              funding acquisitions, and academic milestones using the panels below.
            </p>
          </div>

          {/* Dashboard Tabs Grid */}
          <div className="flex flex-wrap items-center justify-center gap-2 bg-white/80 backdrop-blur-md p-2 rounded-2xl border border-[#3B82F6]/20 shadow-xs max-w-4xl mx-auto mb-12">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    updateActiveNav(tab.id, false);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#1E3A8A] text-white shadow-md'
                      : 'text-[#475569] hover:bg-[#3B82F6]/10 hover:text-[#1E3A8A]'
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
                      <div className="flex items-center gap-2 border-b border-[#3B82F6]/20 pb-3">
                        <Briefcase className="text-[#3B82F6]" size={20} />
                        <h3 className="text-lg font-bold text-[#0F172A]">Research Experience</h3>
                      </div>
                      <div className="space-y-6 relative border-l border-[#3B82F6]/20 pl-6 ml-3">
                        {EXPERIENCE.map((exp) => (
                          <div key={exp.id} className="relative group flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-[#3B82F6] border-2 border-[#F8FAFC] group-hover:bg-[#EF4444] transition-colors"></div>
                               <span className="text-[11px] font-sans font-bold tracking-wide uppercase text-[#1E3A8A] bg-[#3B82F6]/10 px-2.5 py-1 rounded">
                                {exp.period}
                              </span>
                              <h4 className="font-extrabold text-[#0F172A] text-base mt-2.5 leading-snug">
                                {exp.role}
                              </h4>
                              <p className="text-xs font-bold text-[#3B82F6] mb-2">{exp.institution}</p>
                              {exp.details && (
                                <p className="text-xs md:text-sm text-[#334155] leading-relaxed font-normal">
                                  {exp.details}
                                </p>
                              )}
                            </div>
                            {exp.logo && (
                              <div className="flex-shrink-0 self-start sm:self-center">
                                <img 
                                  src={exp.logo} 
                                  alt={`${exp.institution} Logo`} 
                                  className="h-16 sm:h-20 w-auto max-w-[200px] sm:max-w-[240px] object-contain bg-white p-2 rounded-lg border border-[#3B82F6]/20 shadow-2xs group-hover:border-[#3B82F6]/40"
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
                      <div className="flex items-center gap-2 border-b border-[#3B82F6]/20 pb-3">
                        <GraduationCap className="text-[#3B82F6]" size={20} />
                        <h3 className="text-lg font-bold text-[#0F172A]">Academic Credentials</h3>
                      </div>
                      <div className="space-y-6 relative border-l border-[#3B82F6]/20 pl-6 ml-3">
                        {EDUCATION.map((edu) => (
                          <div key={edu.id} className="relative group flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-[#3B82F6] border-2 border-[#F8FAFC] group-hover:bg-[#EF4444] transition-colors"></div>
                              <span className="text-[11px] font-sans font-bold tracking-wide uppercase text-[#1E3A8A] bg-[#3B82F6]/10 px-2.5 py-1 rounded">
                                {edu.year}
                              </span>
                              <h4 className="font-extrabold text-[#0F172A] text-base mt-2.5 leading-snug">
                                {edu.degree}
                              </h4>
                              <p className="text-xs font-bold text-[#3B82F6] mb-2">{edu.institution}</p>
                              {edu.details && (
                                <p className="text-xs md:text-sm text-[#334155] leading-relaxed font-normal">
                                  {edu.details}
                                </p>
                              )}
                            </div>
                            {edu.logo && (
                              <div className="flex-shrink-0 self-start sm:self-center">
                                <img 
                                  src={edu.logo} 
                                  alt={`${edu.institution} Logo`} 
                                  className="h-16 sm:h-20 w-auto max-w-[200px] sm:max-w-[240px] object-contain bg-white p-2 rounded-lg border border-[#3B82F6]/20 shadow-2xs group-hover:border-[#3B82F6]/40"
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
                    {/* Honors & Awards */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 border-b border-[#3B82F6]/20 pb-3">
                        <TrophyIcon className="text-[#3B82F6]" size={20} />
                        <h3 className="text-lg font-bold text-[#0F172A]">Academic Honors & Best Presentation Awards</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {AWARDS.map((awd) => (
                          <div
                            key={awd.id}
                            className="bg-white p-5 rounded-xl border border-[#3B82F6]/20 shadow-2xs hover:border-[#EF4444]/40 hover:shadow-[0_4px_15px_rgba(239,68,68,0.15)] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between group"
                          >
                            <div className="flex justify-between items-start gap-3">
                              <div className="p-2 bg-[#3B82F6]/10 rounded-lg text-[#1E3A8A] h-fit shrink-0 group-hover:bg-[#EF4444]/10 group-hover:text-[#EF4444] transition-colors">
                                <TrophyIcon size={16} />
                              </div>
                              {awd.logo && (
                                <img
                                  src={awd.logo}
                                  alt={awd.organization}
                                  className="h-16 sm:h-20 w-auto max-w-[240px] object-contain bg-white p-2 rounded-md border border-[#3B82F6]/15 shadow-2xs"
                                  referrerPolicy="no-referrer"
                                />
                              )}
                            </div>

                            <div className="space-y-1 mt-3">
                              <h4 className="font-bold text-[#0F172A] text-xs md:text-sm leading-relaxed">
                                {awd.title}
                              </h4>
                              <p className="text-[11px] text-[#3B82F6] font-semibold">{awd.organization}</p>
                            </div>

                            <div className="mt-3 pt-2 border-t border-[#3B82F6]/10">
                              <span className="inline-block text-[11px] font-sans font-bold bg-blue-50 text-[#1E3A8A] px-2.5 py-0.5 rounded">
                                {awd.year}
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

                {activeTab === 'gallery' && (
                  <div className="bg-white p-10 md:p-16 rounded-2xl border border-[#3B82F6]/20 shadow-2xs text-center space-y-6">
                    <div className="w-16 h-16 bg-[#3B82F6]/10 text-[#1E3A8A] rounded-2xl flex items-center justify-center mx-auto">
                      <Image size={32} />
                    </div>
                    <div className="max-w-md mx-auto space-y-2">
                      <h3 className="text-xl font-serif font-extrabold text-[#0F172A]">Research & Event Gallery</h3>
                      <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                        Photos from international conferences, laboratory research experiments, award ceremonies, and academic visits will be showcased here shortly.
                      </p>
                    </div>
                    <span className="inline-block text-xs font-mono font-bold bg-blue-50 text-[#1E3A8A] border border-[#3B82F6]/20 px-4 py-1.5 rounded-full">
                      Photos Coming Soon
                    </span>
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
