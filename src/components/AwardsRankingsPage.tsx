import React from "react";
import { 
  ArrowLeft, 
  Award, 
  Trophy, 
  Medal, 
  CheckCircle2, 
  Star, 
  TrendingUp, 
  Building2, 
  GraduationCap, 
  Sparkles,
  ExternalLink
} from "lucide-react";

interface AwardsRankingsPageProps {
  onOpenApplyModal: () => void;
  onNavigateHome: () => void;
  onNavigateOverview?: () => void;
}

interface RankingCardItem {
  id: string;
  image: string;
  source: string;
  badge: string;
  headline: string;
  description: string;
  highlightStat?: string;
  isFeatured?: boolean;
}

export default function AwardsRankingsPage({ 
  onOpenApplyModal, 
  onNavigateHome,
  onNavigateOverview 
}: AwardsRankingsPageProps) {
  
  // Primary Survey & Accreditations (6 Cards from Page 1)
  const primaryRankingsData: RankingCardItem[] = [
    {
      id: "higher-education-interactions",
      image: "https://hkbk.edu.in/backend/backend/rankings-recognition7.jpg",
      source: "Higher Education",
      badge: "Industry Interface Award",
      headline: "Best Engineering College for Industry Interactions",
      description: "HKBK College of Engineering recognized as Best Engineering college for Industry Interactions by Higher Education.",
      highlightStat: "Best Industry Interface"
    },
    {
      id: "careers360-aaa",
      image: "https://hkbk.edu.in/backend/backend/rankings-recognition8.jpg",
      source: "Careers360",
      badge: "National Rating Survey",
      headline: "Placed in Highest Category 'AAA'",
      description: "Career 360 has placed HKBK College of Engineering in highest Category AAA'. This is indeed a proud moment for us.",
      highlightStat: "Category 'AAA' Rating"
    },
    {
      id: "csr-ghrdc-22",
      image: "https://hkbk.edu.in/backend/backend/rankings-recognition9.jpg",
      source: "CSR-GHRDC",
      badge: "Engineering Colleges Survey",
      headline: "22nd Best Engineering College in India",
      description: "HKBK College of Engineering ranked as 22nd best Engineering college in India by CSR-GHRDC Engineering Colleges Survey .",
      highlightStat: "Rank #22 in India"
    },
    {
      id: "silicon-india-7th",
      image: "https://hkbk.edu.in/backend/backend/rankings-recognition10.jpg",
      source: "SiliconIndia",
      badge: "State Engineering Survey",
      headline: "Top #7th Best Engineering College in Karnataka",
      description: "HKBK College of Engineering is Ranked as Top #7th best Engineering college in Karnataka by SiliconIndia.",
      highlightStat: "Top #7 in Karnataka"
    },
    {
      id: "silicon-india-30th",
      image: "https://hkbk.edu.in/backend/backend/rankings-recognition11.jpg",
      source: "SiliconIndia",
      badge: "National Engineering Survey",
      headline: "Top #30th Engineering College in India",
      description: "HKBK College of Engineering is Ranked as Top #30th Engineering college in India by SiliconIndia.",
      highlightStat: "Top #30 in India"
    },
    {
      id: "bangalore-top10-placement",
      image: "https://hkbk.edu.in/backend/backend/rankings-recognition12.jpg",
      source: "Placement & Industry Survey",
      badge: "Metro Placement Benchmark",
      headline: "TOP 10 Engineering Colleges in Bangalore for Placement",
      description: "HKBK College of Engineering is Ranked One of the TOP 10 Engineering Colleges in Bangalore for Placement.",
      highlightStat: "Top 10 in Bangalore"
    }
  ];

  // Times of India Survey Rankings (2 Cards from Page 2 - Moved to Dedicated Lower Section)
  const toiRankingsData: RankingCardItem[] = [
    {
      id: "toi-2025-top44",
      image: "https://hkbk.edu.in/backend/backend/top%2044%20and%20top%2020.webp",
      source: "The Times of India",
      badge: "Times Engineering Survey 2025",
      headline: "44th Top Engineering Institute & 20th Private Placement",
      description: "We have secured the 44th-TOP 175 ENGINEERING INSTITUTE RANKINGS 2025 & 20th-TOP 70 PRIVATE INSTITUTES - PLACEMENT positions in the All-India Rankings by The Times of India (Pan-India Edition)!",
      highlightStat: "Rank #44 & #20 All-India",
      isFeatured: true
    },
    {
      id: "toi-2025-pan-india",
      image: "https://hkbk.edu.in/backend/backend/times%20of%20india.webp",
      source: "The Times of India",
      badge: "Pan-India Edition Survey 2025",
      headline: "National Excellence in Engineering & Placement",
      description: "We have secured the 44th-TOP 175 ENGINEERING INSTITUTE RANKINGS 2025 & 20th-TOP 70 PRIVATE INSTITUTES - PLACEMENT positions in the All-India Rankings by The Times of India (Pan-India Edition)!",
      highlightStat: "Top 70 Private Placement",
      isFeatured: true
    }
  ];

  return (
    <div id="awards-rankings-page" className="w-full bg-[#FCFBF7] text-[#1A1A1A]">
      
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
            <span className="text-white font-bold">Awards & Rankings</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="font-serif font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-white leading-[1.1] mb-6">
              Awards & Rankings
            </h1>

            <div className="pt-2">
              <p className="font-mono text-sm sm:text-base font-bold text-[#FFD700] tracking-[0.2em] uppercase">
                HKBK Has Been Ranked Amongst The Top Colleges In The Country
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. National & Regional Survey Rankings — 2-Column Side-by-Side Cards */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-[#FCFBF7] border-b border-[#E5E0D5]">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="border-b border-[#E5E0D5] pb-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[#8C1515] font-mono text-xs font-bold tracking-[0.2em] uppercase">
                National Recognitions
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight">
                Surveys & Accreditations
              </h2>
            </div>
            <p className="text-xs font-mono text-[#777] uppercase tracking-wider shrink-0">
              Verified Institutional Standing
            </p>
          </div>

          {/* 2 Horizontal Cards Side by Side in Each Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {primaryRankingsData.map((item) => (
              <div 
                key={item.id}
                className="group bg-white rounded-2xl border border-[#E5E0D5] p-6 sm:p-8 flex flex-col justify-between hover:border-[#8C1515]/40 transition-all duration-300 shadow-xs hover:shadow-md"
              >
                <div className="space-y-6">
                  
                  {/* Top Badge & Source Header */}
                  <div className="flex items-center justify-between gap-3 border-b border-[#F0EBE1] pb-4">
                    <span className="text-[11px] font-mono font-bold text-[#8C1515] uppercase tracking-wider bg-[#8C1515]/6 px-3 py-1 rounded-md">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-[#777] font-semibold">
                      {item.source}
                    </span>
                  </div>

                  {/* Top Image Container (fills entire container without gaps, subtle hover zoom) */}
                  <div className="relative w-full h-56 sm:h-64 md:h-72 bg-[#FAF8F5] rounded-xl border border-[#E5E0D5] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.headline}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="w-full h-full flex flex-col items-center justify-center text-center p-4 bg-[#FAF8F5]">
                              <span class="text-sm font-serif font-bold text-[#8C1515]">${item.source}</span>
                              <span class="text-xs font-mono text-[#777] mt-1">Survey Recognition</span>
                            </div>
                          `;
                        }
                      }}
                    />
                  </div>

                  {/* Content Below Image */}
                  <div className="space-y-3 pt-2">
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1A1A1A] tracking-tight group-hover:text-[#8C1515] transition-colors leading-snug">
                      {item.headline}
                    </h3>
                    <div className="w-10 h-0.5 bg-[#8C1515]/40" />
                    <p className="text-sm sm:text-base text-[#333] leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>

                </div>

                {/* Card Footer Verification */}
                <div className="pt-6 border-t border-[#F0EBE1] flex items-center justify-between text-xs font-mono mt-6 text-[#666]">
                  <span className="flex items-center space-x-1.5 text-[#8C1515] font-bold">
                    <CheckCircle2 className="w-4 h-4 text-[#8C1515] shrink-0" />
                    <span>{item.highlightStat}</span>
                  </span>
                  <span className="text-[#888]">{item.source}</span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Dedicated Times of India Section — 2 Cards with Square Images on Top */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="border-b border-[#E5E0D5] pb-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[#8C1515] font-mono text-xs font-bold tracking-[0.2em] uppercase">
                Times Engineering Survey 2025
              </span>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight">
                The Times of India — All-India Rankings
              </h3>
            </div>
            <div className="text-xs font-mono text-[#777] bg-[#FCFBF7] border border-[#E5E0D5] px-3.5 py-2 rounded-lg inline-flex items-center space-x-2 shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-[#8C1515]" />
              <span>Pan-India Edition Assessment</span>
            </div>
          </div>

          {/* 2 Cards with Square Image on Top and Content Below */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {toiRankingsData.map((item) => (
              <div 
                key={item.id}
                className="group bg-[#FCFBF7] rounded-2xl border border-[#E5E0D5] p-6 sm:p-8 flex flex-col justify-between hover:border-[#8C1515]/40 transition-all duration-300 shadow-xs hover:shadow-md"
              >
                <div className="space-y-6">
                  
                  {/* Top Badge & Source Header */}
                  <div className="flex items-center justify-between gap-3 border-b border-[#E5E0D5] pb-4">
                    <span className="text-[11px] font-mono font-bold text-[#8C1515] uppercase tracking-wider bg-[#8C1515]/6 px-3 py-1 rounded-md">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-[#777] font-semibold">
                      {item.source}
                    </span>
                  </div>

                  {/* Top Square Image Container (completely filled without gaps, subtle hover zoom) */}
                  <div className="relative w-full aspect-square bg-white rounded-xl border border-[#E5E0D5] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.headline}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="w-full h-full flex flex-col items-center justify-center text-center p-4 bg-[#FCFBF7]">
                              <span class="text-sm font-serif font-bold text-[#8C1515]">Times of India</span>
                              <span class="text-xs font-mono text-[#777] mt-1">2025 Rankings</span>
                            </div>
                          `;
                        }
                      }}
                    />
                  </div>

                  {/* Content Below Image */}
                  <div className="space-y-3 pt-2">
                    <h4 className="font-serif font-bold text-xl sm:text-2xl text-[#1A1A1A] tracking-tight group-hover:text-[#8C1515] transition-colors leading-snug">
                      {item.headline}
                    </h4>
                    <div className="w-10 h-0.5 bg-[#8C1515]/40" />
                    <p className="text-sm sm:text-base text-[#444] leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer Verification */}
                <div className="pt-6 border-t border-[#E5E0D5] flex items-center justify-between text-xs font-mono mt-6 text-[#666]">
                  <span className="flex items-center space-x-1.5 text-[#8C1515] font-bold">
                    <CheckCircle2 className="w-4 h-4 text-[#8C1515] shrink-0" />
                    <span>{item.highlightStat}</span>
                  </span>
                  <span className="text-[#888]">Pan-India Edition</span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
