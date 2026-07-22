import { motion } from 'motion/react';
import { Mail, GraduationCap, MapPin, Award, BookOpen, ExternalLink, Calendar } from 'lucide-react';
import { PROFILE } from '../../data';
import { MetricsShowcase } from './Metrics';
import { NavSectionId } from '../../types';

interface HeroProps {
  updateActiveNav: (id: NavSectionId, shouldScroll?: boolean) => void;
}

export function Hero({ updateActiveNav }: HeroProps) {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-b from-[#3B82F6]/5 via-transparent to-transparent scroll-mt-24 md:scroll-mt-28">
      
      {/* Subtle Blue & Thermal Red Ambient Glows */}
      <div className="absolute top-1/4 left-1/12 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/12 w-96 h-96 bg-[#EF4444]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Main Info Column */}
          <div className="lg:col-span-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {/* Soft Gradient Pill Badge matching reference image */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50/90 via-purple-50/30 to-red-50/90 border border-blue-200/60 text-[#1E3A8A] px-3.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#3B82F6] shrink-0"></span>
                <span>THERMOELECTRIC RESEARCH <span className="text-[#EF4444]">LABORATORY</span></span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-[#1E3A8A] leading-[1.18] tracking-tight">
                Engineering Next-Generation Low-Dimensional Materials for Energy Harvesting
              </h1>
              
              <h2 className="text-sm sm:text-base md:text-lg font-bold text-[#1E3A8A]">
                {PROFILE.name} • <span className="italic font-medium text-[#EF4444]">{PROFILE.title}</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xs sm:text-sm md:text-base text-[#475569] leading-relaxed max-w-3xl space-y-4 font-normal"
            >
              <p>{PROFILE.bio}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Primary CTA Button matching reference image */}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); updateActiveNav('contact', true); }}
                className="inline-flex items-center justify-center gap-2 bg-[#1E3A8A] hover:bg-[#2563EB] text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-sm cursor-pointer"
                id="hero-btn-contact"
              >
                <span>Contact Collaboration</span>
              </a>
              
              {/* Secondary CTA Button with red border matching reference image */}
              <a
                href="#publications"
                onClick={(e) => { e.preventDefault(); updateActiveNav('publications', true); }}
                className="inline-flex items-center justify-center gap-2 bg-white border border-[#EF4444] text-[#1E3A8A] hover:bg-red-50/50 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-2xs"
                id="hero-btn-publications"
              >
                <span>Publications Catalog</span>
              </a>
            </motion.div>
          </div>

          {/* Affiliations Sidebar / Right Profile Card matching reference image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 bg-white/95 backdrop-blur-md p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-6 group"
            id="hero-affiliation-sidebar"
          >
            {/* Dr. Abinaya Rengarajan Profile Photo */}
            <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-2xs">
              <img
                src="/Abinaya.jpeg"
                alt="Dr. Abinaya Rengarajan"
                className="w-full h-64 md:h-72 object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1E3A8A] mb-3">
                CURRENT INSTITUTION
              </h3>
              <div className="flex gap-3 items-start">
                <img 
                  src="/images/logos/agh.png" 
                  alt="AGH University Logo" 
                  className="h-10 w-10 object-contain bg-white p-1 rounded-lg border border-slate-200 shadow-2xs mt-0.5 shrink-0"
                />
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-[#0F172A]">
                    AGH University of Krakow, Poland
                  </p>
                  <p className="text-[11px] text-[#475569] font-medium leading-relaxed">
                    Post-Doctoral Fellow (Thermoelectrics) <br />
                    Supervisor: Prof. Krzysztof Wojciechowski
                  </p>
                  <span className="inline-block text-[10px] font-mono font-bold bg-blue-50 text-[#1E3A8A] border border-blue-100 px-2.5 py-0.5 rounded mt-1.5">
                    May 2024 – Present
                  </span>
                </div>
              </div>
            </div>

            <hr className="border-slate-100" />

            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1E3A8A] mb-3">
                PRIOR RESEARCH AFFILIATION
              </h3>
              <div className="flex gap-3 items-start">
                <img 
                  src="/images/logos/srm.png" 
                  alt="SRM Institute Logo" 
                  className="h-10 w-10 object-contain bg-white p-1 rounded-lg border border-slate-200 shadow-2xs mt-0.5 shrink-0"
                />
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-[#0F172A]">
                    SRM Institute of Science & Tech, India
                  </p>
                  <p className="text-[11px] text-[#475569] font-medium leading-relaxed">
                    Post-Doctoral Fellow <br />
                    Supervisor: Prof. S. Ponnusamy
                  </p>
                  <span className="inline-block text-[10px] font-mono font-bold bg-red-50 text-[#EF4444] border border-red-100 px-2.5 py-0.5 rounded mt-1.5">
                    Nov 2021 – Mar 2024
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Metrics Bar */}
        <div className="mt-12">
          <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#1E3A8A] border-b border-slate-200 pb-2 mb-4">
            Consolidated Research Impact metrics
          </h3>
          <MetricsShowcase />
        </div>

      </div>
    </section>
  );
}
