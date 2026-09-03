import React from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";

interface ResearchProgramsPageProps {
  onOpenApplyModal: () => void;
  onNavigateHome: () => void;
  onNavigateProgram?: (programSlug: string) => void;
}

export default function ResearchProgramsPage({
  onOpenApplyModal,
  onNavigateHome,
}: ResearchProgramsPageProps) {
  const phdPrograms = [
    {
      id: "phd-cse",
      prefix: "Doctor of Philosophy",
      title: "Computer Science and Engineering",
      pdfUrl: "https://hkbk.edu.in/backend/backend/RC%20-%20CSE.pdf",
    },
    {
      id: "phd-ece",
      prefix: "Doctor of Philosophy",
      title: "Electronics and Communication Engineering",
      pdfUrl: "https://hkbk.edu.in/backend/backend/RC-%20ECE.pdf",
    },
    {
      id: "phd-me",
      prefix: "Doctor of Philosophy",
      title: "Mechanical Engineering",
      pdfUrl: "https://hkbk.edu.in/backend/backend/RC%20-%20ME.pdf",
    },
    {
      id: "phd-cv",
      prefix: "Doctor of Philosophy",
      title: "Civil Engineering",
      pdfUrl: "https://hkbk.edu.in/backend/backend/RC%20-%20CV.pdf",
    },
    {
      id: "phd-mba",
      prefix: "Doctor of Philosophy",
      title: "MBA",
      pdfUrl: "https://hkbk.edu.in/backend/backend/RC%20-%20MBA.pdf",
    },
  ];

  return (
    <div id="research-programs-page" className="w-full bg-[#FCFBF7] text-[#1A1A1A] font-sans antialiased min-h-screen">
      
      {/* Breadcrumbs Navigation Strip */}
      <div className="bg-[#8C1515] text-white/90 border-b border-[#721111] px-4 sm:px-6 lg:px-12 py-3">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 text-xs font-mono uppercase tracking-wider">
          <button 
            onClick={onNavigateHome}
            className="hover:text-white transition-colors cursor-pointer flex items-center space-x-1.5 text-white/70"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span className="text-white/40">/</span>
          <span className="text-white/70">Academics</span>
          <span className="text-white/40">/</span>
          <span className="text-white font-bold">Research Programs</span>
        </div>
      </div>

      {/* Hero Section (Exact Replica of Reference Banner) */}
      <section 
        className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] lg:h-[440px] bg-cover bg-center overflow-hidden flex items-center"
        style={{
          backgroundImage: "url('https://imgh.in/host/i0g062')",
          backgroundPosition: "center 42%",
        }}
      >
        {/* Subtle atmospheric vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/15 pointer-events-none" />

        {/* Floating Translucent Charcoal Box */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="inline-block bg-[#373A3E]/85 backdrop-blur-[2px] px-6 sm:px-10 py-5 sm:py-8 shadow-[0_12px_36px_rgba(0,0,0,0.35)] border border-white/10 max-w-3xl">
            <h1 className="text-white font-sans font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] tracking-tight leading-none">
              HKBK - Research Programs
            </h1>
            {/* Golden Underline Accent Bar */}
            <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-[#FFC107] mt-3.5 sm:mt-4 rounded-xs" />
          </div>
        </div>
      </section>

      {/* About Doctor of Philosophy Section (Exact Content & Layout from Reference Image) */}
      <section id="about-doctor-of-philosophy" className="py-16 md:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-14">
          
          {/* Top Row: Left Eyebrow & Golden Swoop + Right Heading & Content */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            
            {/* Left Column: ABOUT US + Signature Golden Swoop */}
            <div className="w-full lg:w-44 shrink-0 pt-1">
              <span className="text-xs sm:text-[13px] font-bold tracking-wider text-[#1A1A1A] uppercase block">
                ABOUT Ph.D.
              </span>
              {/* Dual-stroke golden swoop matching reference image */}
              <svg 
                width="78" 
                height="14" 
                viewBox="0 0 78 14" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1.5"
                aria-hidden="true"
              >
                <path 
                  d="M2 6.5C18 3 44 2.5 76 7.5C57 5.5 32 6 12 11" 
                  stroke="#E5A93C" 
                  strokeWidth="3.2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
                <path 
                  d="M10 11.5C26 9.2 50 8.8 70 12" 
                  stroke="#F5BE4D" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                />
              </svg>
            </div>

            {/* Right Column: Title + Body Paragraphs */}
            <div className="flex-1 space-y-5">
              <h2 className="font-sans font-bold text-2xl sm:text-3xl lg:text-[36px] text-[#1A1A1A] tracking-tight leading-[1.25]">
                About Doctor of Philosophy
              </h2>

              <div className="space-y-4 text-[#444] text-[15px] sm:text-[16px] leading-[1.75]">
                <p>
                  If you are searching for the best PhD college in Bangalore, HKBKCE offers a rigorous, research-driven Doctor of Philosophy (Ph.D.) programme that empowers scholars to make meaningful contributions to their chosen field of study.
                </p>

                <p>
                  A Doctor of Philosophy (Ph.D.) is a research-based doctorate programme that offers core specialization in a specific academic domain. As the highest level of academic achievement, a Ph.D. can be pursued across most academic disciplines and provides in-depth, specialized education followed by postdoctoral on-the-job training and research experience.
                </p>

                <p>
                  The research undertaken during the programme is supervised by an eligible and experienced academic authority, ensuring that scholars receive the guidance and mentorship needed to produce high-quality, impactful research. A Ph.D. degree is awarded in recognition of research that demonstrates an individual's competence to conduct independent research contributing new knowledge and insights to their subject area.
                </p>

                <p>
                  Among the many PhD programmes in Bangalore, HKBKCE stands out for its strong research culture, experienced faculty supervisors, and commitment to academic excellence.
                </p>
              </div>
            </div>

          </div>

          {/* Section Headings for DOCTOR OF PHILOSOPHY Programs */}
          <div className="pt-6 border-t border-[#EAE5DA] space-y-1.5">
            <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#1A1A1A] tracking-tight">
              Research Programs in HKBK College Of Engineering
            </h3>
            <div className="text-xs sm:text-[13px] font-bold text-[#8C1515] tracking-wider uppercase font-mono">
              DOCTOR OF PHILOSOPHY Programs
            </div>
          </div>

          {/* Grid of Doctor of Philosophy Cards (Layout matches reference image) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {phdPrograms.map((prog) => (
              <div
                id={prog.id}
                key={prog.id}
                onClick={() => window.open(prog.pdfUrl, "_blank", "noopener,noreferrer")}
                className="bg-white rounded-xl border border-[#E2DDD3] p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-[#8C1515]/40 transition-all duration-200 group cursor-pointer flex flex-col justify-center min-h-[96px] relative"
              >
                <a
                  href={prog.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                  aria-label={`Open ${prog.prefix} ${prog.title} PDF`}
                  onClick={(e) => e.stopPropagation()}
                />
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[13px] text-[#666] font-normal group-hover:text-[#8C1515] transition-colors">
                    {prog.prefix}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#999] group-hover:text-[#8C1515] transition-colors shrink-0 opacity-60 group-hover:opacity-100" />
                </div>
                <div className="text-base sm:text-[17px] font-bold text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors leading-snug">
                  {prog.title}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
