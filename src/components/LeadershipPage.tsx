import React from "react";
import { 
  ArrowLeft,
  ArrowRight,
  Mail,
  Phone,
  Building,
  Building2,
  Users,
  GraduationCap,
  Award,
  BookOpen,
  Briefcase,
  ShieldCheck,
  Sparkles,
  ExternalLink
} from "lucide-react";

interface LeadershipPageProps {
  onOpenApplyModal: () => void;
  onNavigateHome: () => void;
  onNavigateOverview?: () => void;
  onNavigateVisionMission?: () => void;
}

export default function LeadershipPage({ 
  onOpenApplyModal, 
  onNavigateHome,
  onNavigateOverview,
  onNavigateVisionMission 
}: LeadershipPageProps) {
  return (
    <div id="leadership-page" className="w-full bg-[#FCFBF7] text-[#1A1A1A]">
      
      {/* 1. Masthead Header & Breadcrumbs Section (Exact Match with Overview & Vision/Mission) */}
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
            <span className="text-white font-bold">Leadership</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="font-serif font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-white leading-[1.1] mb-6">
              CAMPUS LEADERSHIP
            </h1>

            <div className="pt-2">
              <p className="font-mono text-sm sm:text-base font-bold text-[#FFD700] tracking-[0.2em] uppercase">
                VISIONARY GOVERNANCE & ACADEMIC STEWARDSHIP
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Board of Governors Section - Editorial & Structured Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 border-b border-[#E5E0D5]">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-[#E5E0D5]">
            <div>
              <div className="flex items-center mb-2">
                <span className="text-[#8C1515] font-mono text-xs font-bold tracking-[0.25em] uppercase">
                  Institutional Governance
                </span>
              </div>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight">
                GOVERNORS
              </h2>
            </div>
            <p className="text-xs text-[#777] font-mono mt-3 sm:mt-0 uppercase tracking-widest">
              Board of Management & Founders
            </p>
          </div>

          <div className="space-y-16 lg:space-y-20">
            
            {/* Governor 1: C.M. Ibrahim (Chairman) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-4">
                <div className="relative aspect-[4/5] w-full max-w-sm rounded-lg overflow-hidden bg-neutral-100 border border-[#DCD6C8] shadow-sm">
                  <img
                    src="https://imgh.in/host/yxnbzh"
                    alt="C.M. Ibrahim - Chairman"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="lg:col-span-8 space-y-6">
                <div>
                  <div className="inline-flex items-center space-x-2 text-[#8C1515] font-mono text-xs font-bold tracking-wider uppercase mb-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Chairman, HKBK Group of Institutions</span>
                  </div>
                  <h3 className="font-serif font-bold text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight">
                    C.M. IBRAHIM
                  </h3>
                  <p className="text-xs font-mono text-[#777] uppercase tracking-wider mt-1">
                    HKBK College of Engineering
                  </p>
                </div>

                <div className="space-y-4 text-base sm:text-lg text-[#333] leading-relaxed font-sans">
                  <p>
                    As the Chairman and visionary founder of HKBK College of Engineering, C.M. Ibrahim has spearheaded the institution's commitment to delivering inclusive, high-caliber technical education rooted in enduring ethical values.
                  </p>
                  <p>
                    Under his governance, the institution has continually expanded its academic infrastructure, forging ties with leading global industries and nurturing an environment where students from diverse backgrounds realize their highest intellectual potential.
                  </p>
                </div>
              </div>
            </div>

            {/* Subtle Divider between Governors */}
            <div className="border-t border-[#E5E0D5]" />

            {/* Governor 2: C.M. Faiz (Director) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-4 lg:order-2">
                <div className="relative aspect-[4/5] w-full max-w-sm rounded-lg overflow-hidden bg-neutral-100 border border-[#DCD6C8] shadow-sm">
                  <img
                    src="https://imgh.in/host/savg5i"
                    alt="C.M. Faiz - Director"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="lg:col-span-8 lg:order-1 space-y-6">
                <div>
                  <div className="inline-flex items-center space-x-2 text-[#8C1515] font-mono text-xs font-bold tracking-wider uppercase mb-2">
                    <Award className="w-4 h-4" />
                    <span>Director, HKBK Group of Institutions</span>
                  </div>
                  <h3 className="font-serif font-bold text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight">
                    C.M. FAIZ
                  </h3>
                  <p className="text-xs font-mono text-[#777] uppercase tracking-wider mt-1">
                    HKBK College of Engineering
                  </p>
                </div>

                <div className="space-y-4 text-base sm:text-lg text-[#333] leading-relaxed font-sans">
                  <p>
                    Serving on the Board of Governors as Director, C.M. Faiz drives strategic growth, operational excellence, and industry-academic alignment across all constituent institutions.
                  </p>
                  <p>
                    His progressive leadership fosters an ecosystem that emphasizes technological competence, entrepreneurship, and comprehensive student empowerment.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Leadership Team Section - Structured Editorial Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-[#FAF8F2] border-b border-[#E5E0D5]">
        <div className="max-w-6xl mx-auto space-y-20">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-[#E5E0D5]">
            <div>
              <div className="flex items-center mb-2">
                <span className="text-[#8C1515] font-mono text-xs font-bold tracking-[0.25em] uppercase">
                  Executive Profiles
                </span>
              </div>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight">
                LEADERSHIP TEAM
              </h2>
            </div>
            <p className="text-xs text-[#777] font-mono mt-3 sm:mt-0 uppercase tracking-widest">
              Directors & Academic Administrators
            </p>
          </div>

          {/* Leader 1: C.M. Faiz */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-4 flex flex-col">
              <div className="relative aspect-[4/5] w-full max-w-sm rounded-lg overflow-hidden bg-neutral-100 border border-[#DCD6C8] shadow-sm">
                <img
                  src="https://imgh.in/host/savg5i"
                  alt="C.M. Faiz - Director"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col justify-center space-y-6">
              <div className="space-y-5 text-base sm:text-lg text-[#333] leading-relaxed font-sans">
                <p>
                  CM Faiz Mohammed is an independent successful entrepreneur and educationist. The HKBK believes in imparting education that lays great emphasis on your individual growth in addition to developing your technical competence.
                </p>
                <p>
                  With an agile, forward-looking vision to institutional development, he ensures that student growth extends beyond textbook learning to encompass character building, leadership instincts, and real-world technical competence.
                </p>
              </div>

              <div className="pt-5 border-t border-[#E5E0D5] space-y-1">
                <h3 className="font-serif font-bold text-2xl text-[#1A1A1A]">C.M. FAIZ</h3>
                <p className="text-xs font-mono font-bold text-[#8C1515] uppercase tracking-wider">
                  Director
                </p>
                <p className="text-xs text-[#666] font-sans">
                  HKBK College of Engineering
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#E5E0D5]" />

          {/* Leader 2: Dr. Mohammed Riyaz Ahmed */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-4 flex flex-col">
              <div className="relative aspect-[4/5] w-full max-w-sm rounded-lg overflow-hidden bg-neutral-100 border border-[#DCD6C8] shadow-sm">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/003/337/584/large_2x/default-avatar-photo-placeholder-profile-icon-vector.jpg"
                  alt="Dr. Mohammed Riyaz Ahmed - Principal"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col justify-center space-y-6">
              <div className="space-y-5 text-base sm:text-lg text-[#333] leading-relaxed font-sans">
                <p>
                  Dr. Mohammed Riyaz Ahmed, a distinguished academician, commenced his journey with HKBK College on September 15th, 2023, bringing with him a wealth of experience from his illustrious tenure at REVA University, Bengaluru. Driven by a thirst for knowledge, he has recently delved into implementing Design Thinking for “knowledge economy via Entrepreneurial Universities”.
                </p>
                <p>
                  Notably, he has been accepted for a Visiting Postdoctoral Fellowship at the esteemed Cyber Security Lab of City, University of London, UK.
                </p>
              </div>

              <div className="pt-5 border-t border-[#E5E0D5] space-y-1">
                <h3 className="font-serif font-bold text-2xl text-[#1A1A1A]">DR. MOHAMMED RIYAZ AHMED</h3>
                <p className="text-xs font-mono font-bold text-[#8C1515] uppercase tracking-wider">
                  Principal
                </p>
                <p className="text-xs text-[#666] font-sans">
                  HKBK College of Engineering
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Administration & Governance Directory */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-[#FCFBF7] border-b border-[#E5E0D5]">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 pb-6 border-b border-[#E5E0D5]">
            <div>
              <div className="flex items-center mb-2">
                <span className="text-[#8C1515] font-mono text-xs font-bold tracking-[0.25em] uppercase">
                  Institutional Governance
                </span>
              </div>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight">
                ADMINISTRATION
              </h2>
            </div>
            <p className="text-xs text-[#777] font-mono mt-3 sm:mt-0 uppercase tracking-widest">
              Executive Departmental Registry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            
            {/* Item 1: General Administration */}
            <div className="flex flex-col justify-between border-t-2 border-[#8C1515] pt-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#8C1515] uppercase tracking-widest">
                    01 / Governance
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#8C1515]/8 text-[#8C1515] flex items-center justify-center">
                    <Building className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-serif font-bold text-xl text-[#1A1A1A] tracking-tight">
                  General Administration
                </h3>

                <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed font-sans">
                  The administration of all the colleges is handling by Administrator
                </p>
              </div>

              <div className="pt-2">
                <a 
                  href="mailto:director@hkbk.edu.in"
                  className="inline-flex items-center space-x-2.5 px-4 py-2.5 rounded-lg border border-[#E5E0D5] bg-white hover:border-[#8C1515] hover:bg-[#8C1515]/5 text-xs font-mono font-semibold text-[#1A1A1A] hover:text-[#8C1515] transition-all group shadow-xs"
                >
                  <Mail className="w-3.5 h-3.5 text-[#8C1515] group-hover:scale-110 transition-transform" />
                  <span>director@hkbk.edu.in</span>
                </a>
              </div>
            </div>

            {/* Item 2: Admission and Marketing */}
            <div className="flex flex-col justify-between border-t-2 border-[#8C1515] pt-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#8C1515] uppercase tracking-widest">
                    02 / Admissions
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#8C1515]/8 text-[#8C1515] flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-serif font-bold text-xl text-[#1A1A1A] tracking-tight">
                  ADMISSION AND MARKETING
                </h3>

                <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed font-sans">
                  Admission process for all its colleges/department are handeled by Admissions
                </p>
              </div>

              <div className="pt-2">
                <div className="text-[11px] text-[#777] font-mono uppercase mb-1.5 tracking-wider">
                  Department Contact:
                </div>
                <a 
                  href="mailto:admissions@hkbk.edu.in"
                  className="inline-flex items-center space-x-2.5 px-4 py-2.5 rounded-lg border border-[#E5E0D5] bg-white hover:border-[#8C1515] hover:bg-[#8C1515]/5 text-xs font-mono font-semibold text-[#1A1A1A] hover:text-[#8C1515] transition-all group shadow-xs"
                >
                  <Mail className="w-3.5 h-3.5 text-[#8C1515] group-hover:scale-110 transition-transform" />
                  <span>admissions@hkbk.edu.in</span>
                </a>
              </div>
            </div>

            {/* Item 3: Department of Human Resources */}
            <div className="flex flex-col justify-between border-t-2 border-[#8C1515] pt-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#8C1515] uppercase tracking-widest">
                    03 / Human Resources
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#8C1515]/8 text-[#8C1515] flex items-center justify-center">
                    <Briefcase className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-serif font-bold text-xl text-[#1A1A1A] tracking-tight">
                  DEPARTMENT OF HUMAN RESOURCES
                </h3>

                <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed font-sans">
                  Internal recruitments, Evaluation of faculties and College events are handling by HR Department.
                </p>
              </div>

              <div className="pt-2">
                <a 
                  href="mailto:hr@hkbk.edu.in"
                  className="inline-flex items-center space-x-2.5 px-4 py-2.5 rounded-lg border border-[#E5E0D5] bg-white hover:border-[#8C1515] hover:bg-[#8C1515]/5 text-xs font-mono font-semibold text-[#1A1A1A] hover:text-[#8C1515] transition-all group shadow-xs"
                >
                  <Mail className="w-3.5 h-3.5 text-[#8C1515] group-hover:scale-110 transition-transform" />
                  <span>hr@hkbk.edu.in</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
