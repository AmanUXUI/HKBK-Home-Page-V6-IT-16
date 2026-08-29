import React from "react";
import { 
  Target, 
  Compass, 
  Sparkles, 
  BookOpen, 
  HeartHandshake, 
  Award, 
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  Users,
  Lightbulb,
  Globe2,
  CheckCircle2
} from "lucide-react";

interface VisionMissionPageProps {
  onOpenApplyModal: () => void;
  onNavigateHome: () => void;
  onNavigateOverview?: () => void;
}

export default function VisionMissionPage({ 
  onOpenApplyModal, 
  onNavigateHome,
  onNavigateOverview 
}: VisionMissionPageProps) {
  return (
    <div id="vision-mission-page" className="w-full bg-[#FCFBF7] text-[#1A1A1A]">
      
      {/* 1. Masthead Header & Breadcrumbs Section (Exact Match with Overview Page) */}
      <section className="relative bg-[#8C1515] text-white pt-16 pb-20 px-4 sm:px-6 lg:px-12 border-b border-[#721111] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/15 to-transparent pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-[#EBD8D0] uppercase mb-8">
            <button 
              onClick={onNavigateHome}
              className="hover:text-white transition-colors cursor-pointer flex items-center space-x-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <span className="text-white/40">/</span>
            <span className="text-white/80">About Us</span>
            <span className="text-white/40">/</span>
            <span className="text-white font-bold">Vision & Mission</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="font-serif font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-white leading-[1.1] mb-6">
              VISION & MISSION
            </h1>

            <div className="pt-2">
              <p className="font-mono text-sm sm:text-base font-bold text-[#FFD700] tracking-[0.2em] uppercase">
                GUIDING PRINCIPLES & INSTITUTIONAL PURPOSE
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Institutional Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 border-b border-[#E5E0D5]">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Vision Title & Context */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <div className="flex items-center">
                <span className="text-[#8C1515] font-mono text-xs font-bold tracking-[0.2em] uppercase">
                  Institutional Direction
                </span>
              </div>
              
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight leading-tight">
                OUR VISION
              </h2>
              
              <p className="text-sm sm:text-base text-[#666] leading-relaxed font-sans">
                Our vision defines the long-term aspiration of HKBK Group of Institutions — establishing an empowering academic ecosystem where intellectual rigor meets ethical leadership to contribute meaningfully to the nation.
              </p>

              <div className="pt-4 hidden lg:block">
                <div className="inline-flex items-center space-x-3 px-4 py-3 bg-[#8C1515]/5 border border-[#8C1515]/20 rounded-xl text-xs font-mono text-[#8C1515]">
                  <Compass className="w-4 h-4 text-[#8C1515]" />
                  <span>Foundational Charter & Educational Creed</span>
                </div>
              </div>
            </div>

            {/* Right Column: Statement Box & Core Tenets */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Primary Vision Statement Card */}
              <div className="relative p-8 sm:p-10 rounded-2xl bg-white border border-[#E5E0D5] shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#8C1515]/10 text-[#8C1515] flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>

                <blockquote className="font-serif text-xl sm:text-2xl text-[#1A1A1A] font-medium leading-snug tracking-tight">
                  “To empower students through wholesome education and enable the students to develop into highly qualified and trained professionals with ethics and emerge as responsible citizen with broad outlook to build a vibrant nation.”
                </blockquote>

                <div className="mt-8 pt-6 border-t border-[#E5E0D5] flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#8C1515] uppercase tracking-widest">
                    HKBK Group of Institutions
                  </span>
                  <span className="text-xs font-mono text-[#888] uppercase tracking-wider">
                    Official Vision Mandate
                  </span>
                </div>
              </div>

              {/* Vision Pillars Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-2">
                <div className="p-5 rounded-xl bg-white border border-[#E5E0D5] space-y-2">
                  <div className="flex items-center space-x-2 text-[#8C1515]">
                    <GraduationCap className="w-4 h-4" />
                    <h4 className="font-serif font-bold text-base text-[#1A1A1A]">Wholesome Education</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#555] leading-relaxed">
                    Nurturing intellectual, cognitive, and personal development through holistic pedagogy.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-[#E5E0D5] space-y-2">
                  <div className="flex items-center space-x-2 text-[#8C1515]">
                    <Award className="w-4 h-4" />
                    <h4 className="font-serif font-bold text-base text-[#1A1A1A]">Professional Ethics</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#555] leading-relaxed">
                    Instilling integrity, high moral standards, and specialized technical mastery.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-[#E5E0D5] space-y-2">
                  <div className="flex items-center space-x-2 text-[#8C1515]">
                    <Globe2 className="w-4 h-4" />
                    <h4 className="font-serif font-bold text-base text-[#1A1A1A]">Responsible Citizenship</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#555] leading-relaxed">
                    Fostering a progressive, broad global outlook with proactive social responsibility.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-[#E5E0D5] space-y-2">
                  <div className="flex items-center space-x-2 text-[#8C1515]">
                    <Sparkles className="w-4 h-4" />
                    <h4 className="font-serif font-bold text-base text-[#1A1A1A]">Vibrant Nation Building</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#555] leading-relaxed">
                    Empowering graduates who actively drive socioeconomic progress and national advancement.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. Institutional Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 border-b border-[#E5E0D5] bg-[#FAF8F2]">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 pb-6 border-b border-[#E5E0D5]">
            <div>
              <div className="flex items-center mb-2">
                <span className="text-[#8C1515] font-mono text-xs font-bold tracking-[0.25em] uppercase">
                  Strategic Directives
                </span>
              </div>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight">
                OUR MISSION
              </h2>
            </div>
            <p className="text-xs text-[#777] font-mono mt-3 sm:mt-0 uppercase tracking-widest">
              Core Pillars of Execution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            
            {/* Mission Pillar 1 */}
            <div className="group flex flex-col justify-between border-t-2 border-[#8C1515] pt-6 space-y-6 bg-white p-7 rounded-b-2xl border-x border-b border-[#E5E0D5] hover:border-[#8C1515]/40 hover:border-t-[#8C1515] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#8C1515] uppercase tracking-widest">
                    01 / Academic Excellence
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-[#8C1515]/8 text-[#8C1515] group-hover:bg-[#8C1515] group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <Lightbulb className="w-4.5 h-4.5" />
                  </div>
                </div>

                <h3 className="font-serif font-bold text-xl text-[#1A1A1A] group-hover:text-[#8C1515] tracking-tight transition-colors duration-200">
                  Knowledge & Innovation
                </h3>

                <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed font-sans">
                  To achieve academic excellence through in-depth knowledge in science, engineering and technology through dedication to duty, innovation in teaching and faith in human values.
                </p>
              </div>

              <div className="pt-4 border-t border-[#EFECE6] group-hover:border-[#8C1515]/15 flex flex-wrap gap-1.5 transition-colors duration-200">
                <span className="px-2.5 py-1 rounded bg-[#F6F4EE] group-hover:bg-[#8C1515]/5 group-hover:text-[#8C1515] text-[11px] font-mono font-medium text-[#666] transition-colors duration-200">
                  Science & Technology
                </span>
                <span className="px-2.5 py-1 rounded bg-[#F6F4EE] group-hover:bg-[#8C1515]/5 group-hover:text-[#8C1515] text-[11px] font-mono font-medium text-[#666] transition-colors duration-200">
                  Innovative Pedagogy
                </span>
              </div>
            </div>

            {/* Mission Pillar 2 */}
            <div className="group flex flex-col justify-between border-t-2 border-[#8C1515] pt-6 space-y-6 bg-white p-7 rounded-b-2xl border-x border-b border-[#E5E0D5] hover:border-[#8C1515]/40 hover:border-t-[#8C1515] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#8C1515] uppercase tracking-widest">
                    02 / Leadership & Ethics
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-[#8C1515]/8 text-[#8C1515] group-hover:bg-[#8C1515] group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <Users className="w-4.5 h-4.5" />
                  </div>
                </div>

                <h3 className="font-serif font-bold text-xl text-[#1A1A1A] group-hover:text-[#8C1515] tracking-tight transition-colors duration-200">
                  21st Century Preparedness
                </h3>

                <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed font-sans">
                  To enable our students to develop into outstanding professionals with high ethical standards to face the challenges of the 21st century.
                </p>
              </div>

              <div className="pt-4 border-t border-[#EFECE6] group-hover:border-[#8C1515]/15 flex flex-wrap gap-1.5 transition-colors duration-200">
                <span className="px-2.5 py-1 rounded bg-[#F6F4EE] group-hover:bg-[#8C1515]/5 group-hover:text-[#8C1515] text-[11px] font-mono font-medium text-[#666] transition-colors duration-200">
                  Ethical Leadership
                </span>
                <span className="px-2.5 py-1 rounded bg-[#F6F4EE] group-hover:bg-[#8C1515]/5 group-hover:text-[#8C1515] text-[11px] font-mono font-medium text-[#666] transition-colors duration-200">
                  Global Competency
                </span>
              </div>
            </div>

            {/* Mission Pillar 3 */}
            <div className="group flex flex-col justify-between border-t-2 border-[#8C1515] pt-6 space-y-6 bg-white p-7 rounded-b-2xl border-x border-b border-[#E5E0D5] hover:border-[#8C1515]/40 hover:border-t-[#8C1515] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#8C1515] uppercase tracking-widest">
                    03 / Social Inclusion
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-[#8C1515]/8 text-[#8C1515] group-hover:bg-[#8C1515] group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <HeartHandshake className="w-4.5 h-4.5" />
                  </div>
                </div>

                <h3 className="font-serif font-bold text-xl text-[#1A1A1A] group-hover:text-[#8C1515] tracking-tight transition-colors duration-200">
                  Empowerment & Upliftment
                </h3>

                <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed font-sans">
                  To provide educational opportunities to the deprived and weaker section of the society, to uplift their socio-economic status.
                </p>
              </div>

              <div className="pt-4 border-t border-[#EFECE6] group-hover:border-[#8C1515]/15 flex flex-wrap gap-1.5 transition-colors duration-200">
                <span className="px-2.5 py-1 rounded bg-[#F6F4EE] group-hover:bg-[#8C1515]/5 group-hover:text-[#8C1515] text-[11px] font-mono font-medium text-[#666] transition-colors duration-200">
                  Equal Opportunity
                </span>
                <span className="px-2.5 py-1 rounded bg-[#F6F4EE] group-hover:bg-[#8C1515]/5 group-hover:text-[#8C1515] text-[11px] font-mono font-medium text-[#666] transition-colors duration-200">
                  Social Upliftment
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
