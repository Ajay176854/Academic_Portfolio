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
    <section id="about" className="pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-b from-[#5d735a]/5 via-transparent to-transparent scroll-mt-24 md:scroll-mt-28">
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
              <div className="inline-flex items-center gap-2 bg-[#5d735a]/10 text-[#2d3a28] px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5d735a] animate-ping"></span>
                <span>Thermoelectric Research Laboratory</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-[#2d3a28] leading-tight tracking-tight">
                Engineering Next-Generation Low-Dimensional Materials for Energy Harvesting
              </h1>
              
              <h2 className="text-base sm:text-lg md:text-xl font-medium text-[#5d735a]">
                {PROFILE.name} • <span className="italic">{PROFILE.title}</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm md:text-base text-[#36453b] leading-relaxed max-w-3xl space-y-4"
            >
              <p>{PROFILE.bio}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); updateActiveNav('contact', true); }}
                className="inline-flex items-center gap-2 bg-[#2d3a28] hover:bg-[#5d735a] text-[#FAF6EE] px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all shadow-sm cursor-pointer"
                id="hero-btn-contact"
              >
                <span>Contact Collaboration</span>
              </a>
              
              <a
                href="#publications"
                onClick={(e) => { e.preventDefault(); updateActiveNav('publications', true); }}
                className="inline-flex items-center gap-2 bg-[#5d735a]/10 hover:bg-[#5d735a]/20 text-[#2d3a28] px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all cursor-pointer"
                id="hero-btn-publications"
              >
                <span>Publications Catalog</span>
              </a>
            </motion.div>
          </div>

          {/* Affiliations Sidebar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 bg-white p-6 rounded-2xl border border-[#819280]/20 shadow-sm space-y-6"
            id="hero-affiliation-sidebar"
          >
            {/* Dr. Abinaya Rengarajan Profile Photo */}
            <div className="overflow-hidden rounded-xl border border-[#819280]/20 shadow-sm">
              <img
                src="/Abinaya.jpeg"
                alt="Dr. Abinaya Rengarajan"
                className="w-full h-64 md:h-72 object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#5d735a] mb-3">
                Current Institutional Post
              </h3>
              <div className="flex gap-3 items-start">
                <img 
                  src="/images/logos/agh.png" 
                  alt="AGH University Logo" 
                  className="h-11 w-11 object-contain bg-white p-1 rounded-lg border border-[#819280]/20 shadow-sm mt-0.5 shrink-0"
                />
                <div className="space-y-1">
                  <p className="text-xs font-bold text-[#2d3a28]">
                    AGH University of Krakow, Poland
                  </p>
                  <p className="text-[11px] text-[#5d735a] font-medium leading-relaxed">
                    Post-Doctoral Fellow (Thermoelectrics) <br />
                    Supervisor: Prof. Krzysztof Wojciechowski
                  </p>
                  <span className="inline-block text-[9px] font-mono font-bold bg-[#819280]/25 text-[#2d3a28] px-2 py-0.5 rounded mt-1">
                    May 2024 – Present
                  </span>
                </div>
              </div>
            </div>

            <hr className="border-[#819280]/15" />

            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#5d735a] mb-3">
                Prior Research Affiliation
              </h3>
              <div className="flex gap-3 items-start">
                <img 
                  src="/images/logos/srm.png" 
                  alt="SRM Institute Logo" 
                  className="h-11 w-11 object-contain bg-white p-1 rounded-lg border border-[#819280]/20 shadow-sm mt-0.5 shrink-0"
                />
                <div className="space-y-1">
                  <p className="text-xs font-bold text-[#2d3a28]">
                    SRM Institute of Science & Tech, India
                  </p>
                  <p className="text-[11px] text-[#5d735a] font-medium leading-relaxed">
                    Post-Doctoral Fellow <br />
                    Supervisor: Prof. S. Ponnusamy
                  </p>
                  <span className="inline-block text-[9px] font-mono font-bold bg-[#819280]/15 text-[#36453b] px-2 py-0.5 rounded mt-1">
                    Nov 2021 – Mar 2024
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Metrics Bar */}
        <div className="mt-12">
          <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#5d735a] border-b border-[#819280]/20 pb-2 mb-4">
            Consolidated Research Impact metrics
          </h3>
          <MetricsShowcase />
        </div>

      </div>
    </section>
  );
}
