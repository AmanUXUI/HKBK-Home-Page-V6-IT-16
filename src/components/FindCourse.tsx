import React, { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";

interface FindCourseProps {
  onOpenApplyModal?: () => void;
}

const engineeringCourses = [
  "Computer Science & Engineering (CSE)",
  "Artificial Intelligence & Machine Learning (AI & ML)",
  "Electronics & Communication Engineering (ECE)",
  "Information Science & Engineering (ISE)",
  "Mechanical Engineering (ME)"
];

const degreeCategories = [
  {
    category: "BCA",
    courses: [
      "Cybersecurity, Ethical Hacking & Digital Forensics",
      "AI & ML, Cloud Computing + DevOps",
      "Data Science & Big Data Analytics",
      "AI Robotics + IoT"
    ]
  },
  {
    category: "BBA",
    courses: [
      "Bachelor of Business Administration (BBA)",
      "Logistics & Supply Chain Management",
      "Digital Marketing & Business Analytics",
      "Aviation"
    ]
  },
  {
    category: "B.Com",
    courses: [
      "Logistics & Supply Chain Management",
      "Finance, Taxation & Auditing",
      "CA Foundation",
      "ACCA (UK)"
    ]
  }
];

const physiotherapyCourses = [
  "Bachelor of Physiotherapy (BPT) - HKBK College of Physiotherapy"
];

const pucCategories = [
  {
    category: "Science Courses (PUC)",
    courses: [
      "PCMB – Physics, Chemistry, Mathematics, Biology",
      "PCMC – Physics, Chemistry, Mathematics, Computer Science"
    ]
  },
  {
    category: "Commerce Courses (PUC)",
    courses: [
      "EABC – Economics, Accountancy, Business Studies, Computer Science"
    ]
  }
];

export default function FindCourse({ onOpenApplyModal }: FindCourseProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isEngineeringDropdownOpen, setIsEngineeringDropdownOpen] = useState(false);
  const [isDegreeDropdownOpen, setIsDegreeDropdownOpen] = useState(false);
  const [isPhysiotherapyDropdownOpen, setIsPhysiotherapyDropdownOpen] = useState(false);
  const [isPucDropdownOpen, setIsPucDropdownOpen] = useState(false);

  const engineeringDropdownRef = useRef<HTMLDivElement>(null);
  const degreeDropdownRef = useRef<HTMLDivElement>(null);
  const physiotherapyDropdownRef = useRef<HTMLDivElement>(null);
  const pucDropdownRef = useRef<HTMLDivElement>(null);

  const searchContainerRef = useRef<HTMLDivElement>(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [hideSuggestions, setHideSuggestions] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (engineeringDropdownRef.current && !engineeringDropdownRef.current.contains(target)) {
        setIsEngineeringDropdownOpen(false);
      }
      if (degreeDropdownRef.current && !degreeDropdownRef.current.contains(target)) {
        setIsDegreeDropdownOpen(false);
      }
      if (physiotherapyDropdownRef.current && !physiotherapyDropdownRef.current.contains(target)) {
        setIsPhysiotherapyDropdownOpen(false);
      }
      if (pucDropdownRef.current && !pucDropdownRef.current.contains(target)) {
        setIsPucDropdownOpen(false);
      }
      if (searchContainerRef.current && !searchContainerRef.current.contains(target)) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const allCoursesList = [
    ...engineeringCourses.map(c => ({ name: c, category: "Engineering" })),
    ...degreeCategories.flatMap(cat => cat.courses.map(c => ({ name: `${cat.category} - ${c}`, category: cat.category }))),
    ...physiotherapyCourses.map(c => ({ name: c, category: "Physiotherapy" })),
    ...pucCategories.flatMap(cat => cat.courses.map(c => ({ name: c, category: "PUC" })))
  ];

  const filteredSuggestions = searchQuery.trim()
    ? allCoursesList.filter(course =>
        course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const showSuggestions = isSearchFocused && !hideSuggestions && searchQuery.trim().length > 0;

  return (
    <section className="py-24 px-6 md:px-12 bg-[#F6F6F9] text-[#8C1515]" id="find-your-course">
      <div className="max-w-[1320px] mx-auto">
        
        {/* HERO BANNER CARD (EXACT MOCKUP DESIGN REPLICA IN THE BRAND COLOUR SCHEME) */}
        <div className="relative rounded-[32px] bg-gradient-to-br from-[#FFFFFF] via-[#F8F7FC] to-[#EEECFA] border border-[#EBD8D0]/40 shadow-[0_20px_50px_rgba(39,50,134,0.05)] p-8 md:p-16 flex flex-col justify-between min-h-[420px]">
          
          {/* Background and graphics wrapper that CAN be overflow-hidden so that SVGs clip to the rounded border, but dropdowns do not */}
          <div className="absolute inset-0 overflow-hidden rounded-[32px] pointer-events-none z-0">
            {/* Classical Tower Blueprint (Left background) */}
            <svg className="absolute left-6 bottom-0 h-[85%] w-auto text-[#8C1515]/8 pointer-events-none hidden md:block" viewBox="0 0 120 300" fill="none" stroke="currentColor" strokeWidth="0.5">
              <rect x="25" y="180" width="70" height="120" rx="2" />
              <rect x="35" y="100" width="50" height="80" rx="1" />
              <rect x="45" y="40" width="30" height="60" rx="1" />
              <path d="M 45 40 Q 60 10 75 40 Z" />
              <line x1="60" y1="10" x2="60" y2="2" />
              <circle cx="60" cy="2" r="1.5" />
              <line x1="30" y1="180" x2="30" y2="300" strokeDasharray="2,2" />
              <line x1="90" y1="180" x2="90" y2="300" strokeDasharray="2,2" />
              <line x1="45" y1="100" x2="45" y2="180" strokeDasharray="2,2" />
              <line x1="75" y1="100" x2="75" y2="180" strokeDasharray="2,2" />
              <path d="M 40 210 A 10 10 0 0 1 60 210 L 60 250 L 40 250 Z" />
              <path d="M 60 210 A 10 10 0 0 1 80 210 L 80 250 L 60 250 Z" />
              <path d="M 50 120 A 5 5 0 0 1 60 120 L 60 150 L 50 150 Z" />
              <path d="M 60 120 A 5 5 0 0 1 70 120 L 70 150 L 60 150 Z" />
              <circle cx="60" cy="65" r="4" />
              <line x1="20" y1="190" x2="100" y2="190" />
              <line x1="20" y1="200" x2="100" y2="200" />
              <line x1="30" y1="110" x2="90" y2="110" />
              <line x1="40" y1="50" x2="80" y2="50" />
            </svg>

            {/* Artistic Botanical Leaf Branch (Right background) */}
            <svg className="absolute right-4 top-4 h-[90%] w-auto text-[#8C1515]/4 pointer-events-none hidden md:block" viewBox="0 0 200 400" fill="currentColor">
              <path d="M100,380 C110,340 120,300 130,260 C140,220 145,180 145,140 C145,100 140,60 130,20" stroke="currentColor" strokeWidth="0.75" fill="none" opacity="0.7" />
              <path d="M130,20 C145,10 170,15 175,30 C170,45 145,45 130,20" opacity="0.6" />
              <path d="M132,60 C155,55 180,65 182,80 C165,90 145,85 132,60" opacity="0.6" />
              <path d="M135,100 C160,100 185,115 183,132 C163,138 143,125 135,100" opacity="0.6" />
              <path d="M138,140 C165,145 185,165 180,182 C160,185 142,168 138,140" opacity="0.6" />
              <path d="M141,180 C165,190 180,215 173,230 C155,230 142,210 141,180" opacity="0.6" />
              <path d="M143,220 C163,235 173,260 165,275 C150,270 142,250 143,220" opacity="0.6" />
              <path d="M125,40 C105,30 80,35 78,50 C85,65 110,60 125,40" opacity="0.6" />
              <path d="M128,90 C105,85 80,95 82,110 C95,120 115,115 128,90" opacity="0.6" />
              <path d="M131,140 C106,140 85,155 87,172 C103,178 120,165 131,140" opacity="0.6" />
              <path d="M134,190 C109,195 90,215 95,232 C111,235 126,218 134,190" opacity="0.6" />
            </svg>

            {/* Bottom-left graphic highlight */}
            <svg className="absolute bottom-0 left-0 w-32 h-32 text-[#8C1515] pointer-events-none z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0,100 0,55 45,100" fill="currentColor" />
              <line x1="0" y1="55" x2="45" y2="100" stroke="#8C1515" strokeWidth="2.5" />
              <line x1="0" y1="49" x2="49" y2="100" stroke="#DFFC66" strokeWidth="1" strokeDasharray="1,1" />
              <line x1="0" y1="43" x2="43" y2="100" stroke="#EBD8D0" strokeWidth="0.5" opacity="0.5" />
            </svg>

            {/* Bottom-right graphic highlight */}
            <svg className="absolute bottom-0 right-0 w-32 h-32 text-[#8C1515] pointer-events-none z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="100,100 100,55 55,100" fill="currentColor" />
              <line x1="100" y1="55" x2="55" y2="100" stroke="#8C1515" strokeWidth="2.5" />
              <line x1="100" y1="49" x2="49" y2="100" stroke="#DFFC66" strokeWidth="1" strokeDasharray="1,1" />
              <line x1="100" y1="43" x2="43" y2="100" stroke="#EBD8D0" strokeWidth="0.5" opacity="0.5" />
            </svg>
          </div>

          {/* Content layer inside card */}
          <div className="relative z-20 max-w-3xl">
            {/* Title / Header */}
            <h2 className="font-serif font-medium text-[48px] md:text-[64px] leading-[1.05] tracking-tight text-[#8C1515]">
              Find your <span className="bg-gradient-to-r from-[#8C1515] via-[#1F5494] to-[#8C1515] bg-clip-text text-transparent italic font-normal pr-4 inline-block">Course</span>
            </h2>

            {/* Description Subheading */}
            <p className="font-sans text-[#8C1515]/75 text-[15px] sm:text-[17px] leading-relaxed max-w-xl mt-4">
              Explore our wide range of engineering and degree programs designed to shape your future.
            </p>

            {/* Search Input Box */}
            <div 
              ref={searchContainerRef}
              className="relative mt-8 max-w-2xl bg-white rounded-2xl shadow-[0_12px_40px_rgba(140, 21, 21,0.08)] border border-[#8C1515]/25 focus-within:border-[#8C1515] focus-within:ring-2 focus-within:ring-[#8C1515]/10 focus-within:shadow-[0_12px_45px_rgba(140, 21, 21,0.12)] transition-all duration-300 z-40"
            >
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8C1515] pointer-events-none" />
              <input
                id="course-search-input"
                type="text"
                placeholder="Course search"
                value={searchQuery}
                onFocus={() => {
                  setIsSearchFocused(true);
                  setHideSuggestions(false);
                }}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setHideSuggestions(false);
                }}
                className="w-full bg-transparent text-[#8C1515] font-bold placeholder:text-slate-400 py-4 pl-14 pr-12 outline-none rounded-2xl text-[15px]"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setHideSuggestions(true);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 bg-[#EBD8D0]/20 hover:bg-[#EBD8D0]/30 rounded-full flex items-center justify-center text-[#8C1515] transition-colors duration-200 cursor-pointer z-10"
                  aria-label="Clear search query"
                >
                  <X className="w-4 h-4" />
                </button>
              )}

              {/* Predictive Search Suggestions Dropdown */}
              {showSuggestions && filteredSuggestions.length > 0 && (
                <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-[0_16px_45px_rgba(140, 21, 21,0.18)] border border-[#EBD8D0] py-2 z-50 max-h-64 overflow-y-auto scrollbar-thin">
                  <div className="px-4 py-1.5 text-[10px] font-mono tracking-wider text-slate-400 uppercase border-b border-slate-100 mb-1 font-bold">
                    Suggested Courses
                  </div>
                  {filteredSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSearchQuery(suggestion.name);
                        setHideSuggestions(true);
                        setIsSearchFocused(false);
                      }}
                      className="w-full text-left px-5 py-3 hover:bg-[#F3F1FC] transition-colors duration-150 flex items-center justify-between group cursor-pointer"
                    >
                      <div className="flex flex-col">
                        <span className="text-[13.5px] font-bold text-[#8C1515] group-hover:text-[#8C1515] transition-colors leading-tight">
                          {suggestion.name}
                        </span>
                        <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase mt-0.5 font-bold">
                          {suggestion.category}
                        </span>
                      </div>
                      <span className="text-[#8C1515] opacity-0 group-hover:opacity-100 transition-all duration-200 text-xs font-extrabold pr-2">
                        Select &rarr;
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {showSuggestions && filteredSuggestions.length === 0 && (
                <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-[0_16px_45px_rgba(140, 21, 21,0.18)] border border-[#EBD8D0] p-5 z-50 text-center text-slate-400 text-xs font-semibold">
                  No courses found matching "{searchQuery}"
                </div>
              )}
            </div>

            {/* Engineering & Degree Quick Links */}
            <div className="flex flex-wrap items-center gap-6 md:gap-10 mt-8 text-sm md:text-[15px] font-bold">
              {/* Engineering Dropdown */}
              <div className="relative" ref={engineeringDropdownRef}>
                <button
                  onClick={() => {
                    setIsEngineeringDropdownOpen(!isEngineeringDropdownOpen);
                    setIsDegreeDropdownOpen(false);
                    setIsPhysiotherapyDropdownOpen(false);
                    setIsPucDropdownOpen(false);
                  }}
                  className="group flex items-center gap-1.5 transition-colors duration-300 cursor-pointer text-[#8C1515] hover:text-[#8C1515] font-bold"
                >
                  <span>Engineering</span>
                  <span className={`text-[#8C1515] transition-transform duration-200 font-serif ${isEngineeringDropdownOpen ? "rotate-90" : "group-hover:translate-x-0.5"}`}>&gt;</span>
                </button>

                {/* Dropdown list of engineering courses */}
                {isEngineeringDropdownOpen && (
                  <div className="absolute left-0 mt-3 w-80 max-w-[90vw] bg-white rounded-2xl shadow-[0_12px_40px_rgba(39,50,134,0.12)] border border-[#EBD8D0]/40 py-2.5 z-30 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-4 py-1.5 text-[11px] font-mono tracking-wider text-slate-400 uppercase border-b border-slate-100 mb-1">
                      Select Engineering Specialization
                    </div>
                    {engineeringCourses.map((course) => (
                      <button
                        key={course}
                        onClick={() => {
                          setSearchQuery(course);
                          setIsEngineeringDropdownOpen(false);
                          setHideSuggestions(true);
                        }}
                        className="w-full text-left px-4 py-2.5 text-sm text-[#8C1515] hover:bg-[#F3F1FC] hover:text-[#8C1515] transition-colors duration-150 font-medium cursor-pointer flex items-center justify-between"
                      >
                        <span>{course}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Degree Dropdown */}
              <div className="relative" ref={degreeDropdownRef}>
                <button
                  onClick={() => {
                    setIsDegreeDropdownOpen(!isDegreeDropdownOpen);
                    setIsEngineeringDropdownOpen(false);
                    setIsPhysiotherapyDropdownOpen(false);
                    setIsPucDropdownOpen(false);
                  }}
                  className="group flex items-center gap-1.5 transition-colors duration-300 cursor-pointer text-[#8C1515] hover:text-[#8C1515] font-bold"
                >
                  <span>Degree</span>
                  <span className={`text-[#8C1515] transition-transform duration-200 font-serif ${isDegreeDropdownOpen ? "rotate-90" : "group-hover:translate-x-0.5"}`}>&gt;</span>
                </button>

                {/* Grouped list of Degree courses */}
                {isDegreeDropdownOpen && (
                  <div className="absolute left-0 mt-3 w-80 max-w-[90vw] max-h-[380px] overflow-y-auto bg-white rounded-2xl shadow-[0_12px_40px_rgba(39,50,134,0.12)] border border-[#EBD8D0]/40 py-2 z-30 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-4 py-1.5 text-[11px] font-mono tracking-wider text-slate-400 uppercase border-b border-slate-100 mb-2">
                      Select Degree Program
                    </div>
                    {degreeCategories.map((group) => (
                      <div key={group.category} className="mb-3 last:mb-1">
                        <div className="px-4 py-1 text-xs font-semibold text-[#8C1515] bg-[#F3F1FC]/60 uppercase tracking-wider mb-1">
                          {group.category} Programs
                        </div>
                        <div className="flex flex-col">
                          {group.courses.map((course) => (
                            <button
                              key={course}
                              onClick={() => {
                                setSearchQuery(`${group.category} - ${course}`);
                                setIsDegreeDropdownOpen(false);
                                setHideSuggestions(true);
                              }}
                              className="w-full text-left px-6 py-2 text-sm text-[#8C1515] hover:bg-[#F3F1FC] hover:text-[#8C1515] transition-colors duration-150 font-medium cursor-pointer"
                            >
                              {course}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Physiotherapy Dropdown */}
              <div className="relative" ref={physiotherapyDropdownRef}>
                <button
                  onClick={() => {
                    setIsPhysiotherapyDropdownOpen(!isPhysiotherapyDropdownOpen);
                    setIsEngineeringDropdownOpen(false);
                    setIsDegreeDropdownOpen(false);
                    setIsPucDropdownOpen(false);
                  }}
                  className="group flex items-center gap-1.5 transition-colors duration-300 cursor-pointer text-[#8C1515] hover:text-[#8C1515] font-bold"
                >
                  <span>Physiotherapy</span>
                  <span className={`text-[#8C1515] transition-transform duration-200 font-serif ${isPhysiotherapyDropdownOpen ? "rotate-90" : "group-hover:translate-x-0.5"}`}>&gt;</span>
                </button>

                {/* Physiotherapy options */}
                {isPhysiotherapyDropdownOpen && (
                  <div className="absolute left-0 mt-3 w-80 max-w-[90vw] bg-white rounded-2xl shadow-[0_12px_40px_rgba(39,50,134,0.12)] border border-[#EBD8D0]/40 py-2.5 z-30 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-4 py-1.5 text-[11px] font-mono tracking-wider text-slate-400 uppercase border-b border-slate-100 mb-1">
                      HKBK College of Physiotherapy
                    </div>
                    {physiotherapyCourses.map((course) => (
                      <button
                        key={course}
                        onClick={() => {
                          setSearchQuery(course);
                          setIsPhysiotherapyDropdownOpen(false);
                          setHideSuggestions(true);
                        }}
                        className="w-full text-left px-4 py-2.5 text-sm text-[#8C1515] hover:bg-[#F3F1FC] hover:text-[#8C1515] transition-colors duration-150 font-medium cursor-pointer"
                      >
                        {course}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* PUC Dropdown */}
              <div className="relative" ref={pucDropdownRef}>
                <button
                  onClick={() => {
                    setIsPucDropdownOpen(!isPucDropdownOpen);
                    setIsEngineeringDropdownOpen(false);
                    setIsDegreeDropdownOpen(false);
                    setIsPhysiotherapyDropdownOpen(false);
                  }}
                  className="group flex items-center gap-1.5 transition-colors duration-300 cursor-pointer text-[#8C1515] hover:text-[#8C1515] font-bold animate-in fade-in"
                >
                  <span>PUC</span>
                  <span className={`text-[#8C1515] transition-transform duration-200 font-serif ${isPucDropdownOpen ? "rotate-90" : "group-hover:translate-x-0.5"}`}>&gt;</span>
                </button>

                {/* Grouped list of PUC options */}
                {isPucDropdownOpen && (
                  <div className="absolute left-0 mt-3 w-80 max-w-[90vw] max-h-[380px] overflow-y-auto bg-white rounded-2xl shadow-[0_12px_40px_rgba(39,50,134,0.12)] border border-[#EBD8D0]/40 py-2 z-30 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-4 py-1.5 text-[11px] font-mono tracking-wider text-slate-400 uppercase border-b border-slate-100 mb-2">
                      Pre-University Courses (PUC)
                    </div>
                    {pucCategories.map((group) => (
                      <div key={group.category} className="mb-3 last:mb-1">
                        <div className="px-4 py-1 text-xs font-semibold text-[#8C1515] bg-[#F3F1FC]/60 uppercase tracking-wider mb-1">
                          {group.category}
                        </div>
                        <div className="flex flex-col">
                          {group.courses.map((course) => (
                            <button
                              key={course}
                              onClick={() => {
                                setSearchQuery(course);
                                setIsPucDropdownOpen(false);
                                setHideSuggestions(true);
                              }}
                              className="w-full text-left px-6 py-2 text-sm text-[#8C1515] hover:bg-[#F3F1FC] hover:text-[#8C1515] transition-colors duration-150 font-medium cursor-pointer"
                            >
                              {course}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>

            {/* Dynamic Search Results Program Directory */}
            {searchQuery && (
              <div className="mt-8 border-t border-[#8C1515]/15 pt-8 animate-in fade-in slide-in-from-bottom-2 duration-300 w-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[11px] font-mono tracking-wider text-slate-500 uppercase font-bold">
                    Matching Programs ({(filteredSuggestions.length > 0 ? filteredSuggestions : allCoursesList.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.category.toLowerCase().includes(searchQuery.toLowerCase()))).length})
                  </h3>
                  <button 
                    onClick={() => {
                      setSearchQuery("");
                      setHideSuggestions(true);
                    }}
                    className="text-xs font-bold text-[#8C1515] hover:underline cursor-pointer"
                  >
                    Clear Search
                  </button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin">
                  {(filteredSuggestions.length > 0 ? filteredSuggestions : allCoursesList.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.category.toLowerCase().includes(searchQuery.toLowerCase()))).map((course, index) => (
                    <div 
                      key={index} 
                      className="bg-white rounded-xl p-5 border border-[#8C1515]/10 shadow-[0_4px_12px_rgba(140, 21, 21,0.02)] flex flex-col justify-between items-start hover:border-[#8C1515]/30 hover:shadow-[0_8px_20px_rgba(140, 21, 21,0.05)] transition-all duration-200"
                    >
                      <div className="w-full">
                        <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase bg-[#8C1515]/5 text-[#8C1515] mb-2.5 font-bold">
                          {course.category}
                        </span>
                        <h4 className="font-sans font-bold text-[14px] text-[#8C1515] leading-snug">
                          {course.name}
                        </h4>
                      </div>
                      <button
                        onClick={onOpenApplyModal}
                        className="mt-4 text-xs font-bold text-[#8C1515] flex items-center gap-1 hover:translate-x-1 transition-transform duration-200 cursor-pointer"
                      >
                        Apply for Course &rarr;
                      </button>
                    </div>
                  ))}
                  {(filteredSuggestions.length === 0 && allCoursesList.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.category.toLowerCase().includes(searchQuery.toLowerCase())).length === 0) && (
                    <div className="col-span-full py-8 text-center text-slate-400 text-sm font-medium bg-white rounded-xl border border-dashed border-slate-200 p-6">
                      No exact programs found matching "{searchQuery}". Try searching for other terms like "Computer", "BCA", or "Finance".
                    </div>
                  )}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
