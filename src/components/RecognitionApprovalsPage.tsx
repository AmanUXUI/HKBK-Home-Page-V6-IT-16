import React from "react";
import { 
  ShieldCheck, 
  Award, 
  Building2, 
  Globe2, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  ExternalLink,
  BookOpen,
  GraduationCap,
  Landmark,
  Scale
} from "lucide-react";

interface RecognitionApprovalsPageProps {
  onOpenApplyModal: () => void;
  onNavigateHome: () => void;
  onNavigateOverview?: () => void;
}

export default function RecognitionApprovalsPage({ 
  onOpenApplyModal, 
  onNavigateHome,
  onNavigateOverview 
}: RecognitionApprovalsPageProps) {
  return (
    <div id="recognition-approvals-page" className="w-full bg-[#FCFBF7] text-[#1A1A1A]">
      
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
            <span className="text-white font-bold">Recognition & Approvals</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="font-serif font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-white leading-[1.1] mb-6">
              Recognition & Approvals
            </h1>

            <div className="pt-2">
              <p className="font-mono text-sm sm:text-base font-bold text-[#FFD700] tracking-[0.2em]">
                Statutory Affiliations & Global Recognition
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GOVERNMENT AFFILIATIONS */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 border-b border-[#E5E0D5]">
        <div className="max-w-6xl mx-auto">
          
          {/* Editorial Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-[#E5E0D5]">
            <div>
              <div className="flex items-center mb-2">
                <span className="text-[#8C1515] font-mono text-xs font-bold tracking-[0.25em] uppercase">
                  Approval From Government
                </span>
              </div>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] tracking-tight">
                Government Affiliations
              </h2>
            </div>
            <p className="text-xs text-[#777] font-mono mt-3 sm:mt-0 uppercase tracking-widest">
              Apex Statutory & Regulatory Approvals
            </p>
          </div>

          {/* Structured Editorial Rows */}
          <div className="divide-y divide-[#E5E0D5]">
            
            {/* Row 1: Government of Karnataka */}
            <div className="py-12 first:pt-0 last:pb-0">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Left Col: Emblem & Identifier */}
                <div className="lg:col-span-5 flex items-start space-x-5">
                  <div className="w-28 h-28 sm:w-[134px] sm:h-[134px] rounded-full bg-white border border-[#DCD6C8] p-3 flex items-center justify-center shrink-0 shadow-xs">
                    <img
                      src="https://imgh.in/host/y9slxu"
                      alt="Government of Karnataka Seal"
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="w-full h-full flex flex-col items-center justify-center text-[#8C1515] font-serif font-bold text-[10px] text-center leading-tight">GOVT OF<br/>KARNATAKA</div>`;
                        }
                      }}
                    />
                  </div>
                  <div className="space-y-1.5 pt-1 min-w-0">
                    <span className="text-[11px] font-mono font-bold text-[#8C1515] uppercase tracking-wider bg-[#8C1515]/6 px-2.5 py-1 rounded-md inline-block whitespace-nowrap">
                      State Government
                    </span>
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1A1A1A] tracking-tight whitespace-nowrap">
                      Government of Karnataka
                    </h3>
                    <p className="text-xs font-mono text-[#777] whitespace-nowrap">
                      Department of Higher Education
                    </p>
                  </div>
                </div>

                {/* Right Col: Editorial Text & Attributes */}
                <div className="lg:col-span-7 space-y-4 lg:pl-6 lg:border-l lg:border-[#E5E0D5]/80">
                  <p className="text-base sm:text-lg text-[#333] leading-relaxed font-sans">
                    HKBK College of Engineering is Approved by Karnataka State Government as Best Engineering College In Banglore.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <span className="inline-flex items-center space-x-1.5 text-xs font-mono text-[#555] bg-white border border-[#E5E0D5] px-3 py-1.5 rounded-md">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8C1515]" />
                      <span>State Statutory Recognition</span>
                    </span>
                    <span className="inline-flex items-center space-x-1.5 text-xs font-mono text-[#555] bg-white border border-[#E5E0D5] px-3 py-1.5 rounded-md">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8C1515]" />
                      <span>Bangalore Campus Sanctioned</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Approved by AICTE */}
            <div className="py-12 last:pb-0">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Left Col: Emblem & Identifier */}
                <div className="lg:col-span-5 flex items-start space-x-5">
                  <div className="w-28 h-28 sm:w-[134px] sm:h-[134px] rounded-full bg-white border border-[#DCD6C8] p-3 flex items-center justify-center shrink-0 shadow-xs">
                    <img
                      src="https://imgh.in/host/ft9hfo"
                      alt="AICTE Logo"
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="w-full h-full flex flex-col items-center justify-center text-[#8C1515] font-serif font-bold text-[10px] text-center leading-tight">AICTE<br/>NEW DELHI</div>`;
                        }
                      }}
                    />
                  </div>
                  <div className="space-y-1.5 pt-1 min-w-0">
                    <span className="text-[11px] font-mono font-bold text-[#8C1515] uppercase tracking-wider bg-[#8C1515]/6 px-2.5 py-1 rounded-md inline-block whitespace-nowrap">
                      National Statutory Body
                    </span>
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1A1A1A] tracking-tight whitespace-nowrap">
                      Approved by AICTE
                    </h3>
                    <p className="text-xs font-mono text-[#777] whitespace-nowrap">
                      Ministry of Education, New Delhi
                    </p>
                  </div>
                </div>

                {/* Right Col: Editorial Text & Attributes */}
                <div className="lg:col-span-7 space-y-4 lg:pl-6 lg:border-l lg:border-[#E5E0D5]/80">
                  <p className="text-base sm:text-lg text-[#333] leading-relaxed font-sans">
                    HKBK College of Engineering is Approved by All India Council for Technical Education (AITCE), New Delhi.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <span className="inline-flex items-center space-x-1.5 text-xs font-mono text-[#555] bg-white border border-[#E5E0D5] px-3 py-1.5 rounded-md">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8C1515]" />
                      <span>Apex Technical Regulatory Council</span>
                    </span>
                    <span className="inline-flex items-center space-x-1.5 text-xs font-mono text-[#555] bg-white border border-[#E5E0D5] px-3 py-1.5 rounded-md">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8C1515]" />
                      <span>Approved Technical Programmes</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: Approved by AIU */}
            <div className="py-12 last:pb-0">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Left Col: Emblem & Identifier */}
                <div className="lg:col-span-5 flex items-start space-x-5">
                  <div className="w-28 h-28 sm:w-[134px] sm:h-[134px] rounded-full bg-white border border-[#DCD6C8] p-3 flex items-center justify-center shrink-0 shadow-xs">
                    <img
                      src="https://imgh.in/host/ltzq80"
                      alt="AIU Logo"
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="w-full h-full flex flex-col items-center justify-center text-[#8C1515] font-serif font-bold text-[10px] text-center leading-tight">AIU<br/>NEW DELHI</div>`;
                        }
                      }}
                    />
                  </div>
                  <div className="space-y-1.5 pt-1 min-w-0">
                    <span className="text-[11px] font-mono font-bold text-[#8C1515] uppercase tracking-wider bg-[#8C1515]/6 px-2.5 py-1 rounded-md inline-block whitespace-nowrap">
                      Inter-University Association
                    </span>
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1A1A1A] tracking-tight whitespace-nowrap">
                      Approved by AIU
                    </h3>
                    <p className="text-xs font-mono text-[#777] whitespace-nowrap">
                      Association of Indian Universities
                    </p>
                  </div>
                </div>

                {/* Right Col: Editorial Text & Attributes */}
                <div className="lg:col-span-7 space-y-4 lg:pl-6 lg:border-l lg:border-[#E5E0D5]/80">
                  <p className="text-base sm:text-lg text-[#333] leading-relaxed font-sans">
                    HKBK College of Engineering programs are approved by All Indian Universities(AIU).
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <span className="inline-flex items-center space-x-1.5 text-xs font-mono text-[#555] bg-white border border-[#E5E0D5] px-3 py-1.5 rounded-md">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8C1515]" />
                      <span>Equivalence & Program Acceptance</span>
                    </span>
                    <span className="inline-flex items-center space-x-1.5 text-xs font-mono text-[#555] bg-white border border-[#E5E0D5] px-3 py-1.5 rounded-md">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8C1515]" />
                      <span>National Academic Recognition</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. UNIVERSITY AFFILIATIONS */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 border-b border-[#E5E0D5] bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto">
          
          {/* Editorial Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-[#E5E0D5]">
            <div>
              <div className="flex items-center mb-2">
                <span className="text-[#8C1515] font-mono text-xs font-bold tracking-[0.25em] uppercase">
                  Institution Affiliations
                </span>
              </div>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] tracking-tight">
                University Affiliations
              </h2>
            </div>
            <p className="text-xs text-[#777] font-mono mt-3 sm:mt-0 uppercase tracking-widest">
              Apex State Technical Affiliation
            </p>
          </div>

          {/* Editorial Two-Column Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: University Identity & Authority */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <div className="flex items-center space-x-5">
                <div className="w-[134px] h-[134px] sm:w-[156px] sm:h-[156px] rounded-full bg-white border-2 border-[#DCD6C8] p-3.5 flex items-center justify-center shadow-sm shrink-0">
                  <img
                    src="https://imgh.in/host/mvpiko"
                    alt="Visvesvaraya Technological University Seal"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="w-full h-full flex flex-col items-center justify-center text-[#8C1515] font-serif font-bold text-xs text-center leading-tight">VTU<br/>BELGAUM</div>`;
                      }
                    }}
                  />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#8C1515] uppercase tracking-wider bg-[#8C1515]/6 px-2.5 py-1 rounded-md inline-block mb-1.5">
                    Collegiate State University
                  </span>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1A1A1A] tracking-tight">
                    VTU Belagavi
                  </h3>
                  <p className="text-xs font-mono text-[#777]">
                    Established Under VTU Act 1994
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#E5E0D5] space-y-3">
                <div className="flex items-center space-x-2 text-[#8C1515]">
                  <Scale className="w-4 h-4" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">
                    UGC Regulatory Status
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#444] leading-relaxed font-sans">
                  Affiliated under Section 2(f) of the UGC Act, 1956. Governing apex technical curriculum across Karnataka State.
                </p>
              </div>
            </div>

            {/* Right Column: Editorial Narrative */}
            <div className="lg:col-span-7 space-y-6 lg:pl-6 lg:border-l lg:border-[#E5E0D5]">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#8C1515] font-bold uppercase tracking-widest">
                  Statutory University Overview
                </span>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight">
                  Visvesvaraya Technological University (VTU)
                </h3>
              </div>

              <div className="space-y-5 text-base sm:text-lg text-[#333] leading-relaxed font-sans">
                <p>
                  Visvesvaraya Technological University (VTU) is a collegiate public state university in Karnataka State, India. It was established on 1 April 1998 by the Government of Karnataka as per VTU Act 1994, to improve the quality of technical education in the state.
                </p>
                <p>
                  Apart from a few notable exceptions, VTU has complete authority in the state of Karnataka. It is a statutory requirement for colleges offering any program in engineering or technology in the state to be affiliated with the university education in India, under section 2(f) of the UGC Act, 1956.
                </p>
              </div>

              <div className="pt-6 border-t border-[#E5E0D5] flex flex-wrap items-center gap-4 text-xs font-mono text-[#666]">
                <span className="inline-flex items-center space-x-1.5 text-[#8C1515] font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Statutory Authority in Karnataka</span>
                </span>
                <span className="text-[#CCC]">•</span>
                <span>Section 2(f) UGC Act, 1956</span>
                <span className="text-[#CCC]">•</span>
                <span>Established 1 April 1998</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. INTERNATIONAL TIEUPS */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 border-b border-[#E5E0D5] bg-[#FCFBF7]">
        <div className="max-w-6xl mx-auto">
          
          {/* Editorial Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-[#E5E0D5]">
            <div>
              <div className="flex items-center mb-2">
                <span className="text-[#8C1515] font-mono text-xs font-bold tracking-[0.25em] uppercase">
                  Academic International Partnerships
                </span>
              </div>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] tracking-tight">
                International Tieups
              </h2>
            </div>
            <p className="text-xs text-[#777] font-mono mt-3 sm:mt-0 uppercase tracking-widest">
              Global Curriculum & Collaborative Frameworks
            </p>
          </div>

          {/* Editorial Two-Column Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Partnership Identity & SUNY Association */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <div className="flex items-center space-x-5">
                <div className="w-[134px] h-[134px] sm:w-[156px] sm:h-[156px] rounded-full bg-white border-2 border-[#DCD6C8] p-3.5 flex items-center justify-center shadow-sm shrink-0">
                  <img
                    src="https://imgh.in/host/ae15k7"
                    alt="AUBiH Logo"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="w-full h-full flex flex-col items-center justify-center text-[#8C1515] font-serif font-bold text-[10px] text-center leading-tight">AUBiH<br/>BOSNIA</div>`;
                      }
                    }}
                  />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#8C1515] uppercase tracking-wider bg-[#8C1515]/6 px-2.5 py-1 rounded-md inline-block mb-1.5">
                    Global Academic Tieup
                  </span>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1A1A1A] tracking-tight">
                    AUBiH & SUNY Canton
                  </h3>
                  <p className="text-xs font-mono text-[#777]">
                    State University of New York Canton
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#E5E0D5] space-y-3">
                <div className="flex items-center space-x-2 text-[#8C1515]">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">
                    US-Style Pedagogy
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#444] leading-relaxed font-sans">
                  Programs spanning International Finance & Banking, Digital Economy & IT, and International Law & Diplomacy developed with American university benchmarks.
                </p>
              </div>
            </div>

            {/* Right Column: Editorial Narrative */}
            <div className="lg:col-span-7 space-y-6 lg:pl-6 lg:border-l lg:border-[#E5E0D5]">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#8C1515] font-bold uppercase tracking-widest">
                  International Academic Cooperation
                </span>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight">
                  American University in Bosnia and Herzegovina (AUBiH)
                </h3>
              </div>

              <div className="space-y-5 text-base sm:text-lg text-[#333] leading-relaxed font-sans">
                <p>
                  HKBK College of Engineering's academic partnership with the American University in Bosnia and Herzegovina (AUBiH) connected students to a US-style curriculum.
                </p>
                <p>
                  AUBiH's programs spanning International Finance and Banking, Digital Economy and IT, and International Law and Diplomacy were developed in association with the State University of New York at Canton (SUNY Canton), bringing American faculty and teaching standards to the Tuzla campus.
                </p>
                <p className="text-sm sm:text-base text-[#555]">
                  The collaboration reflected HKBK's broader effort to expose students to global academic frameworks and international perspectives in engineering and allied fields.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
