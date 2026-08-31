import React from "react";
import { 
  ShieldCheck, 
  Award, 
  Building2, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  BookOpen,
  GraduationCap,
  Scale,
  Landmark,
  FileText
} from "lucide-react";

interface AccreditationPageProps {
  onOpenApplyModal: () => void;
  onNavigateHome: () => void;
  onNavigateOverview?: () => void;
  onNavigateRecognitionApprovals?: () => void;
  onNavigateIQAC?: () => void;
}

export default function AccreditationPage({ 
  onOpenApplyModal, 
  onNavigateHome,
  onNavigateOverview,
  onNavigateRecognitionApprovals,
  onNavigateIQAC
}: AccreditationPageProps) {
  return (
    <div id="accreditation-page" className="w-full bg-[#FCFBF7] text-[#1A1A1A]">
      
      {/* 1. Masthead Header & Breadcrumbs Section (Exact Match with About -> Overview Page) */}
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
            <span className="text-white font-bold">Accreditation</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="font-serif font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-white leading-[1.1] mb-6">
              Accreditation
            </h1>

            <div className="pt-2">
              <p className="font-mono text-sm sm:text-base font-bold text-[#FFD700] tracking-[0.2em]">
                National Assessment and Accreditation Council (NAAC)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Accreditation Showcase Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 border-b border-[#E5E0D5]">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="border-b border-[#E5E0D5] pb-6 mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[#8C1515] font-mono text-xs font-bold tracking-[0.25em] uppercase">
                Institutional Accreditation
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight">
                NAAC Accreditation
              </h2>
            </div>
            <span className="text-xs font-mono text-[#777] uppercase tracking-wider shrink-0">
              National Quality Benchmark
            </span>
          </div>

          {/* Editorial Two-Column Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Official NAAC Emblem & Council Identifier */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              
              {/* NAAC Emblem Card */}
              <div className="bg-white rounded-2xl border border-[#DCD6C8] p-8 shadow-xs flex flex-col items-center text-center space-y-6">
                
                {/* Emblem Display */}
                <div className="relative w-full max-w-[280px] aspect-square rounded-xl overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src="https://imgh.in/host/ijgizh"
                    alt="NAAC Accreditation"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Grade Badge */}
                <div className="w-full pt-4 border-t border-[#F0EBE1] flex items-center justify-between">
                  <div className="text-left">
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-[#777]">Accreditation Standing</span>
                    <span className="font-serif font-bold text-lg text-[#1A1A1A]">NAAC Accredited</span>
                  </div>
                  <div className="px-4 py-1.5 rounded-lg bg-[#8C1515] text-white font-mono font-bold text-sm shadow-xs">
                    Grade B
                  </div>
                </div>

              </div>

              {/* Regulatory & Institutional Standing Box */}
              <div className="p-6 rounded-xl bg-[#FAF8F5] border border-[#E5E0D5] space-y-3">
                <div className="flex items-center space-x-2 text-[#8C1515]">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">
                    UGC-Backed Recognition
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#555] leading-relaxed font-sans">
                  An autonomous institution established by the University Grants Commission (UGC) to assess and accredit institutions of higher education across India.
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenApplyModal}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-[#8C1515] hover:bg-[#721111] text-white px-6 py-3.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md cursor-pointer"
                >
                  <span>Apply for Admissions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Column: Editorial Body & Core Pillars */}
            <div className="lg:col-span-7 space-y-8 lg:pl-6 lg:border-l lg:border-[#E5E0D5]">
              
              {/* Primary Narrative Text */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#8C1515] font-bold uppercase tracking-widest">
                    Official NAAC Statement
                  </span>
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight leading-snug">
                    Commitment to Recognized Standards of Engineering Education
                  </h3>
                </div>

                <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E5E0D5] shadow-xs relative">
                  <p className="text-base sm:text-lg text-[#222] leading-relaxed font-sans">
                    <strong className="text-[#8C1515] font-semibold">HKBK College of Engineering</strong> is accredited by the <strong className="text-[#1A1A1A] font-semibold">National Assessment and Accreditation Council (NAAC)</strong> with a <span className="inline-block bg-[#8C1515]/10 text-[#8C1515] font-mono font-bold px-2 py-0.5 rounded text-sm sm:text-base">Grade B</span>, an independent, UGC-backed recognition of the college's academic quality, infrastructure, and institutional governance.
                  </p>
                  
                  <div className="w-12 h-0.5 bg-[#8C1515]/30 my-5" />

                  <p className="text-base sm:text-lg text-[#333] leading-relaxed font-sans">
                    This accreditation, alongside approvals from <strong className="text-[#1A1A1A] font-semibold">AICTE</strong> and affiliation with <strong className="text-[#1A1A1A] font-semibold">VTU</strong>, reflects HKBK's sustained commitment to maintaining recognized standards of engineering education in Karnataka.
                  </p>
                </div>
              </div>

              {/* Three Evaluation Pillars Identified by NAAC */}
              <div className="space-y-4 pt-2">
                <span className="text-xs font-mono text-[#777] uppercase tracking-widest block font-bold">
                  Core Evaluation Dimensions
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  
                  {/* Pillar 1 */}
                  <div className="p-5 rounded-xl bg-white border border-[#E5E0D5] space-y-2.5 shadow-2xs">
                    <div className="w-9 h-9 rounded-lg bg-[#8C1515]/8 flex items-center justify-center text-[#8C1515]">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                      Academic Quality
                    </h4>
                    <p className="text-xs text-[#555] font-sans leading-relaxed">
                      Rigorous curricula, experienced faculty mentors, and outcome-based engineering education.
                    </p>
                  </div>

                  {/* Pillar 2 */}
                  <div className="p-5 rounded-xl bg-white border border-[#E5E0D5] space-y-2.5 shadow-2xs">
                    <div className="w-9 h-9 rounded-lg bg-[#8C1515]/8 flex items-center justify-center text-[#8C1515]">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                      Infrastructure
                    </h4>
                    <p className="text-xs text-[#555] font-sans leading-relaxed">
                      17-acre green campus with advanced laboratories, libraries, and tech incubation centers.
                    </p>
                  </div>

                  {/* Pillar 3 */}
                  <div className="p-5 rounded-xl bg-white border border-[#E5E0D5] space-y-2.5 shadow-2xs">
                    <div className="w-9 h-9 rounded-lg bg-[#8C1515]/8 flex items-center justify-center text-[#8C1515]">
                      <Landmark className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                      Governance
                    </h4>
                    <p className="text-xs text-[#555] font-sans leading-relaxed">
                      Transparent institutional leadership, student-centric welfare, and statutory compliance.
                    </p>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Bottom Navigation Strip */}
      <section className="py-8 px-4 sm:px-6 lg:px-12 bg-white border-t border-[#E5E0D5]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#666]">
          <div className="flex items-center space-x-4">
            <button 
              onClick={onNavigateHome}
              className="hover:text-[#8C1515] transition-colors cursor-pointer flex items-center space-x-1"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>Back to Home</span>
            </button>
            {onNavigateOverview && (
              <>
                <span>•</span>
                <button 
                  onClick={onNavigateOverview}
                  className="hover:text-[#8C1515] transition-colors cursor-pointer"
                >
                  About Overview
                </button>
              </>
            )}
            {onNavigateIQAC && (
              <>
                <span>•</span>
                <button 
                  onClick={onNavigateIQAC}
                  className="hover:text-[#8C1515] transition-colors cursor-pointer text-[#8C1515] font-bold"
                >
                  Internal Quality Assurance Cell (IQAC)
                </button>
              </>
            )}
          </div>

          <span className="text-[#888]">
            HKBK Group of Institutions • NAAC Accreditation
          </span>
        </div>
      </section>

    </div>
  );
}
