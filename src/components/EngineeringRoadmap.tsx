import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Settings, 
  Briefcase, 
  Code2, 
  TrendingUp, 
  Heart,
  Layers,
  Lightbulb,
  Cloud,
  Rocket,
  Folder,
  ShieldCheck,
  Trophy,
  Download,
  Sparkles,
  CheckCircle2
} from "lucide-react";

type DisciplineType = "engineering" | "business" | "computer-applications" | "commerce" | "health-sciences";

interface YearRow {
  yearCode: string;
  focusTitle: string;
  focusSubtitle: string;
  icon: "layers" | "lightbulb" | "cloud" | "rocket";
  theme: "y01" | "y02" | "y03" | "y04";
  skills: string[];
}

interface OutcomeItem {
  icon: "folder" | "briefcase" | "shield" | "trophy" | "rocket";
  value: string;
  description: string;
  isHeading?: boolean;
}

interface DisciplineData {
  id: DisciplineType;
  name: string;
  semsCount: number;
  icon: React.ReactNode;
  years: YearRow[];
  outcomes: OutcomeItem[];
  handbookName: string;
}

const ROADMAP_CONFIG: DisciplineData[] = [
  {
    id: "engineering",
    name: "Engineering",
    semsCount: 8,
    icon: <Settings className="w-4 h-4" />,
    handbookName: "HKBK_Engineering_4Year_Roadmap.pdf",
    years: [
      {
        yearCode: "Y01",
        focusTitle: "Build foundations",
        focusSubtitle: "Programming & web foundations",
        icon: "layers",
        theme: "y01",
        skills: ["Python", "Java", "JavaScript", "HTML5", "CSS3", "TypeScript", "React.js", "Next.js", "ChatGPT", "Claude"]
      },
      {
        yearCode: "Y02",
        focusTitle: "Build intelligent products",
        focusSubtitle: "Full-stack development & AI foundations",
        icon: "lightbulb",
        theme: "y02",
        skills: ["Node.js", "Express.js", "Spring Boot", "PostgreSQL", "MongoDB", "Redis", "Apache Spark", "Hadoop", "Pandas", "NumPy"]
      },
      {
        yearCode: "Y03",
        focusTitle: "Engineer AI at scale",
        focusSubtitle: "Cloud, AI & enterprise engineering",
        icon: "cloud",
        theme: "y03",
        skills: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes", "GitHub Actions", "Jenkins", "PyTorch", "TensorFlow", "Hugging Face"]
      },
      {
        yearCode: "Y04",
        focusTitle: "Launch your career",
        focusSubtitle: "Product engineering & industry deployment",
        icon: "rocket",
        theme: "y04",
        skills: ["FastAPI", "Streamlit", "Vercel", "Render", "Docker Compose", "OpenAI API", "Anthropic API", "Gemini API", "LangSmith", "Vector DBs"]
      }
    ],
    outcomes: [
      {
        icon: "folder",
        value: "15–20",
        description: "portfolio projects with live demos"
      },
      {
        icon: "briefcase",
        value: "2–3",
        description: "internships with real deliverables"
      },
      {
        icon: "shield",
        value: "5–8",
        description: "industry certifications (AWS, Azure, etc.)"
      },
      {
        icon: "trophy",
        value: "1",
        description: "research paper or patent filed"
      },
      {
        icon: "rocket",
        value: "Career ready",
        description: "job-ready with strong product thinking",
        isHeading: true
      }
    ]
  },
  {
    id: "business",
    name: "Business",
    semsCount: 6,
    icon: <Briefcase className="w-4 h-4" />,
    handbookName: "HKBK_Business_Management_Roadmap.pdf",
    years: [
      {
        yearCode: "Y01",
        focusTitle: "Business fundamentals",
        focusSubtitle: "Economics, accounting & market basics",
        icon: "layers",
        theme: "y01",
        skills: ["Financial Analysis", "Macroeconomics", "Marketing Essentials", "Organizational Behavior", "Advanced Excel", "PowerBI"]
      },
      {
        yearCode: "Y02",
        focusTitle: "Specialization & strategy",
        focusSubtitle: "Analytics, digital ops & consumer insights",
        icon: "lightbulb",
        theme: "y02",
        skills: ["Tableau", "SQL for Business", "Digital Marketing", "Supply Chain", "FinTech Modules", "HR Analytics"]
      },
      {
        yearCode: "Y03",
        focusTitle: "Executive placement",
        focusSubtitle: "Consulting practicum & leadership capstone",
        icon: "rocket",
        theme: "y04",
        skills: ["Case Method", "Venture Pitching", "Corporate Governance", "M&A Simulations", "Consulting", "Global Trade"]
      }
    ],
    outcomes: [
      {
        icon: "folder",
        value: "8+",
        description: "consulting case audits with CXO reviews"
      },
      {
        icon: "briefcase",
        value: "2",
        description: "summer & winter corporate internships"
      },
      {
        icon: "shield",
        value: "6+",
        description: "certifications in KPMG / Bloomberg"
      },
      {
        icon: "trophy",
        value: "1",
        description: "incubator business plan or capstone"
      },
      {
        icon: "rocket",
        value: "Consulting ready",
        description: "prepared for analyst & management roles",
        isHeading: true
      }
    ]
  },
  {
    id: "computer-applications",
    name: "Computer Applications",
    semsCount: 6,
    icon: <Code2 className="w-4 h-4" />,
    handbookName: "HKBK_Computer_Applications_Roadmap.pdf",
    years: [
      {
        yearCode: "Y01",
        focusTitle: "Computing fundamentals",
        focusSubtitle: "Programming logic & web essentials",
        icon: "layers",
        theme: "y01",
        skills: ["C++", "Java", "Python", "HTML5", "CSS3", "JavaScript", "Linux CLI", "Git"]
      },
      {
        yearCode: "Y02",
        focusTitle: "Application development",
        focusSubtitle: "Database systems & web frameworks",
        icon: "lightbulb",
        theme: "y02",
        skills: ["React.js", "Node.js", "Express.js", "MySQL", "MongoDB", "REST APIs", "Data Structures", "OOPs"]
      },
      {
        yearCode: "Y03",
        focusTitle: "Industry deployment",
        focusSubtitle: "Cloud platforms & capstone project",
        icon: "rocket",
        theme: "y04",
        skills: ["Next.js", "AWS Cloud", "Docker", "Firebase", "CI/CD", "Testing & QA", "Agile Scrum", "Vercel"]
      }
    ],
    outcomes: [
      {
        icon: "folder",
        value: "10–12",
        description: "production apps deployed on live domains"
      },
      {
        icon: "briefcase",
        value: "2",
        description: "corporate internships completed"
      },
      {
        icon: "shield",
        value: "4–6",
        description: "recognized developer credentials"
      },
      {
        icon: "trophy",
        value: "1",
        description: "capstone enterprise solution"
      },
      {
        icon: "rocket",
        value: "Industry ready",
        description: "ready for top IT software analyst roles",
        isHeading: true
      }
    ]
  },
  {
    id: "commerce",
    name: "Commerce",
    semsCount: 6,
    icon: <TrendingUp className="w-4 h-4" />,
    handbookName: "HKBK_Commerce_Finance_Roadmap.pdf",
    years: [
      {
        yearCode: "Y01",
        focusTitle: "Accounting & taxation",
        focusSubtitle: "Statutory reporting & financial modeling",
        icon: "layers",
        theme: "y01",
        skills: ["Tally Prime", "Corporate Law", "Cost Accounting", "GST & Direct Tax", "Business Statistics", "Financial Modeling"]
      },
      {
        yearCode: "Y02",
        focusTitle: "Investment & banking",
        focusSubtitle: "Security analysis & portfolio management",
        icon: "lightbulb",
        theme: "y02",
        skills: ["Capital Markets", "Derivatives", "Audit Automation", "SAP FICO", "Python for Finance", "Corporate Auditing"]
      },
      {
        yearCode: "Y03",
        focusTitle: "Fintech & global finance",
        focusSubtitle: "ACCA / CMA integration & placement",
        icon: "rocket",
        theme: "y04",
        skills: ["IFRS Standards", "Risk Analytics", "Investment Banking", "Wealth Management", "Corporate Advisory", "Tax Planning"]
      }
    ],
    outcomes: [
      {
        icon: "folder",
        value: "10+",
        description: "equity research & statutory audit filings"
      },
      {
        icon: "briefcase",
        value: "2",
        description: "internships with Big 4 or financial firms"
      },
      {
        icon: "shield",
        value: "5+",
        description: "ACCA / NISM / NSE certifications"
      },
      {
        icon: "trophy",
        value: "1",
        description: "financial research paper published"
      },
      {
        icon: "rocket",
        value: "Finance ready",
        description: "career launched in auditing & banking",
        isHeading: true
      }
    ]
  },
  {
    id: "health-sciences",
    name: "Health Sciences",
    semsCount: 8,
    icon: <Heart className="w-4 h-4" />,
    handbookName: "HKBK_Health_Science_Roadmap.pdf",
    years: [
      {
        yearCode: "Y01",
        focusTitle: "Biomedical foundations",
        focusSubtitle: "Anatomy, biochemistry & lab protocols",
        icon: "layers",
        theme: "y01",
        skills: ["Human Anatomy", "Biochemistry", "General Pathology", "Microbiology", "Sterile Lab Protocols", "Medical Ethics"]
      },
      {
        yearCode: "Y02",
        focusTitle: "Clinical pharmacology",
        focusSubtitle: "Formulation & diagnostic analysis",
        icon: "lightbulb",
        theme: "y02",
        skills: ["Pharmacokinetics", "Clinical Chemistry", "Hematology", "Hospital Procedures", "Bioinformatics", "Diagnostics"]
      },
      {
        yearCode: "Y03",
        focusTitle: "Advanced diagnostics",
        focusSubtitle: "Pathology specialization & clinical trials",
        icon: "cloud",
        theme: "y03",
        skills: ["Molecular Diagnostics", "Immunology", "Hospital Informatics", "Drug Regulations", "Clinical Trials", "Instrumentation"]
      },
      {
        yearCode: "Y04",
        focusTitle: "Hospital residency",
        focusSubtitle: "Rotational clinical internship & patient care",
        icon: "rocket",
        theme: "y04",
        skills: ["Hospital Rotations", "ICU Diagnostics", "Emergency Protocols", "Pharmacovigilance", "NABH Quality", "Clinical Thesis"]
      }
    ],
    outcomes: [
      {
        icon: "folder",
        value: "1200+",
        description: "clinical lab diagnostic rotations logged"
      },
      {
        icon: "briefcase",
        value: "1 Year",
        description: "rotational hospital internship"
      },
      {
        icon: "shield",
        value: "4+",
        description: "NABH / clinical safety certifications"
      },
      {
        icon: "trophy",
        value: "1",
        description: "clinical thesis & drug monograph"
      },
      {
        icon: "rocket",
        value: "Clinical ready",
        description: "licensed for leading healthcare networks",
        isHeading: true
      }
    ]
  }
];

export default function EngineeringRoadmap() {
  const [activeDisciplineId, setActiveDisciplineId] = useState<DisciplineType>("engineering");
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  const currentDiscipline = ROADMAP_CONFIG.find(d => d.id === activeDisciplineId) || ROADMAP_CONFIG[0];

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 3500);
  };

  const renderIcon = (type: string, className: string) => {
    switch (type) {
      case "layers":
        return <Layers className={className} />;
      case "lightbulb":
        return <Lightbulb className={className} />;
      case "cloud":
        return <Cloud className={className} />;
      case "rocket":
        return <Rocket className={className} />;
      case "folder":
        return <Folder className={className} />;
      case "briefcase":
        return <Briefcase className={className} />;
      case "shield":
        return <ShieldCheck className={className} />;
      case "trophy":
        return <Trophy className={className} />;
      default:
        return <Layers className={className} />;
    }
  };

  return (
    <div 
      id="engineering-roadmap"
      className="w-full text-[#2C0407] font-sans relative"
    >
      <div className="w-full">

        {/* 1. TOP DISCIPLINE BUTTONS ROW */}
        <div className="flex items-center space-x-3 sm:space-x-4 overflow-x-auto no-scrollbar pb-6 pt-1 px-1">
          {ROADMAP_CONFIG.map((discipline) => {
            const isActive = activeDisciplineId === discipline.id;
            return (
              <button
                key={discipline.id}
                onClick={() => setActiveDisciplineId(discipline.id)}
                className={`flex items-center space-x-2 px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold tracking-tight transition-all duration-300 shrink-0 border cursor-pointer ${
                  isActive
                    ? "bg-[#7A131A] text-white border-[#7A131A] shadow-[0_4px_16px_rgba(122,19,26,0.3)] scale-[1.02]"
                    : "bg-[#FDF9F2] text-[#7A131A] border-[#7A131A]/20 hover:border-[#7A131A]/50 hover:bg-[#F7EFE4]"
                }`}
              >
                <span className={isActive ? "text-white" : "text-[#7A131A]"}>
                  {discipline.icon}
                </span>
                <span>{discipline.name}</span>
                <span className={`text-[10px] uppercase font-semibold px-2 py-0.5 rounded-md ${
                  isActive ? "bg-white/20 text-white" : "bg-[#7A131A]/10 text-[#7A131A]"
                }`}>
                  {discipline.semsCount} Sems
                </span>
              </button>
            );
          })}
        </div>

        {/* 2. MAIN 4-YEAR ROADMAP CONTAINER (Exact Match to User Reference) */}
        <motion.div 
          key={activeDisciplineId}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="w-full rounded-[24px] sm:rounded-[28px] overflow-hidden border border-[#521319]/20 shadow-[0_16px_48px_rgba(0,0,0,0.12)] mb-6 sm:mb-8"
        >
          {/* Header Row: 3 Columns with Clean Typography and Sparkle */}
          <div className="hidden md:grid grid-cols-12 bg-[#2D0407] text-[#EBD8D0] px-6 lg:px-8 py-3.5 items-center border-b border-[#4A0A10]">
            <div className="col-span-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#EBD8D0]/80">
              Year
            </div>
            <div className="col-span-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#EBD8D0]/80">
              Focus
            </div>
            <div className="col-span-7 flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#EBD8D0]/80">
                Signature stack
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#EBD8D0]/60" />
            </div>
          </div>

          {/* 4 Distinct Rows */}
          <div className="divide-y divide-[#4B0000]/10">
            {currentDiscipline.years.map((year) => {
              const isY01 = year.theme === "y01";
              const isY02 = year.theme === "y02";
              const isY03 = year.theme === "y03";
              const isY04 = year.theme === "y04";

              let rowBg = "bg-[#FDF9F2]";
              let yearColBg = "bg-transparent";
              let textTitle = "text-[#2C0407]";
              let textSub = "text-[#2C0407]/75";
              let pillStyle = "bg-white border-[#2C0407]/20 text-[#2C0407] hover:border-[#2C0407]/50";
              let yearTextStyle = "text-[#2C0407]";
              let iconCircleStyle = "bg-white/80 border-[#2C0407]/15 text-[#2C0407]";

              if (isY01) {
                rowBg = "bg-[#FDF9F2]";
                yearColBg = "bg-[#7A131A] text-white";
                yearTextStyle = "text-white";
                iconCircleStyle = "bg-white/15 border-white/25 text-white";
                pillStyle = "bg-white border-[#2C0407]/20 text-[#2C0407] hover:border-[#7A131A]";
              } else if (isY02) {
                rowBg = "bg-[#FBF4D7]";
                yearColBg = "bg-[#FBF4D7]";
                yearTextStyle = "text-[#2C0407]";
                iconCircleStyle = "bg-white/80 border-[#2C0407]/15 text-[#2C0407]";
                pillStyle = "bg-white/85 border-[#2C0407]/20 text-[#2C0407] hover:border-[#7A131A]";
              } else if (isY03) {
                rowBg = "bg-[#EBD8D0]";
                yearColBg = "bg-[#EBD8D0]";
                yearTextStyle = "text-[#2C0407]";
                iconCircleStyle = "bg-white/80 border-[#2C0407]/15 text-[#2C0407]";
                pillStyle = "bg-white/85 border-[#2C0407]/20 text-[#2C0407] hover:border-[#7A131A]";
              } else if (isY04) {
                rowBg = "bg-[#BA3B41]";
                yearColBg = "bg-[#BA3B41]";
                yearTextStyle = "text-white";
                textTitle = "text-white";
                textSub = "text-white/85";
                iconCircleStyle = "bg-white/20 border-white/30 text-white";
                pillStyle = "bg-white/15 border-white/30 text-white hover:bg-white/25 hover:border-white/60";
              }

              return (
                <div
                  key={year.yearCode}
                  className={`${rowBg} transition-all duration-200`}
                >
                  {/* Desktop / Tablet 3-Column Layout */}
                  <div className="hidden md:grid grid-cols-12 items-stretch min-h-[110px]">
                    
                    {/* Column 1: Year (Exact visual style from reference image) */}
                    <div className={`col-span-2 flex items-center px-6 lg:px-8 py-6 ${yearColBg}`}>
                      <div className="flex items-center space-x-3.5">
                        {/* Circular Outline Icon Container */}
                        <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 border ${iconCircleStyle}`}>
                          {renderIcon(year.icon, "w-5 h-5")}
                        </div>

                        {/* Year Label */}
                        <span className={`text-2xl lg:text-3xl font-extrabold tracking-tight font-sans ${yearTextStyle}`}>
                          {year.yearCode}
                        </span>
                      </div>
                    </div>

                    {/* Column 2: Focus & Subtitle */}
                    <div className="col-span-3 px-4 lg:px-6 py-6 flex flex-col justify-center">
                      <h3 className={`text-base lg:text-[17px] font-bold leading-tight ${textTitle}`}>
                        {year.focusTitle}
                      </h3>
                      <p className={`text-xs lg:text-[13px] font-normal mt-1 leading-snug ${textSub}`}>
                        {year.focusSubtitle}
                      </p>
                    </div>

                    {/* Column 3: Signature Stack Badges */}
                    <div className="col-span-7 px-6 lg:px-8 py-6 flex items-center">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                        {year.skills.map((skill) => (
                          <span
                            key={skill}
                            className={`inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-semibold border shadow-2xs transition-all duration-150 hover:-translate-y-0.5 cursor-default ${pillStyle}`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Mobile Stacked Card (< 768px) */}
                  <div className="md:hidden p-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border ${iconCircleStyle}`}>
                          {renderIcon(year.icon, "w-4 h-4")}
                        </div>
                        <span className={`text-2xl font-extrabold font-sans ${yearTextStyle}`}>
                          {year.yearCode}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className={`text-base font-bold leading-tight ${textTitle}`}>
                        {year.focusTitle}
                      </h3>
                      <p className={`text-xs font-normal mt-0.5 ${textSub}`}>
                        {year.focusSubtitle}
                      </p>
                    </div>

                    <div>
                      <div className={`text-[10px] font-bold uppercase tracking-wider mb-2 ${isY04 ? "text-white/80" : "text-[#7A131A]"}`}>
                        Signature Stack
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {year.skills.map((skill) => (
                          <span
                            key={skill}
                            className={`inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold border ${pillStyle}`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </motion.div>

        {/* 3. END OF YEAR 4 OUTCOMES CONTAINER (Clean Ivory / Light Card) */}
        <div className="w-full bg-[#FEFEFF] rounded-[24px] border border-[#E6D8C8] p-6 sm:p-8 md:p-10 shadow-[0_12px_36px_rgba(0,0,0,0.06)] text-[#2C0407] mb-6">
          
          {/* Header */}
          <div className="flex items-center space-x-4 mb-8 sm:mb-10">
            <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.18em] text-[#7A131A] shrink-0">
              END OF YEAR 4 OUTCOMES
            </h3>
            <div className="h-px bg-gradient-to-r from-[#7A131A]/30 via-[#7A131A]/10 to-transparent flex-1" />
          </div>

          {/* 5 Outcomes Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-4 divide-y sm:divide-y-0 lg:divide-x divide-[#2C0407]/10">
            {currentDiscipline.outcomes.map((outcome, idx) => (
              <div 
                key={idx}
                className={`flex flex-col items-center text-center px-3 pt-5 sm:pt-0 ${idx > 0 ? "lg:pl-6" : ""}`}
              >
                {/* Circular blush container for Icon */}
                <div className="w-12 h-12 rounded-full bg-[#FAF0E6] border border-[#E6D8C8] flex items-center justify-center text-[#7A131A] shadow-2xs mb-3.5">
                  {renderIcon(outcome.icon, "w-5 h-5 text-[#7A131A]")}
                </div>

                {/* Main Large Display Metric / Heading */}
                <div className="min-h-[44px] flex items-center justify-center">
                  {outcome.isHeading ? (
                    <h4 className="text-xl sm:text-2xl font-extrabold text-[#2C0407] tracking-tight">
                      {outcome.value}
                    </h4>
                  ) : (
                    <span className="text-2xl sm:text-3xl font-extrabold font-sans text-[#2C0407] tracking-tight">
                      {outcome.value}
                    </span>
                  )}
                </div>

                {/* Supporting description */}
                <p className="text-xs sm:text-[13px] font-medium text-[#2C0407]/75 leading-relaxed max-w-[170px] mx-auto mt-1 mb-4 flex-1">
                  {outcome.description}
                </p>

                {/* Bottom accent line */}
                <div className="w-10 h-[3px] bg-[#7A131A]/60 rounded-full" />
              </div>
            ))}
          </div>

        </div>

        {/* 4. CLEAN RIGHT-ALIGNED DOWNLOAD HANDBOOK */}
        <div className="flex justify-end items-center relative px-2">
          <button
            onClick={handleDownload}
            className="inline-flex items-center space-x-2 text-sm font-semibold text-[#7A131A] hover:text-[#520000] transition-colors duration-200 cursor-pointer group"
          >
            <Download className="w-4 h-4 text-[#7A131A] group-hover:translate-y-0.5 transition-transform" />
            <span>Download handbook</span>
          </button>

          {/* Subtle Download Confirmation Toast */}
          <AnimatePresence>
            {downloadSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                className="absolute right-0 bottom-full mb-3 bg-[#2D0407] text-white text-xs font-medium px-4 py-2.5 rounded-xl shadow-xl border border-[#4A0A10] flex items-center space-x-2 whitespace-nowrap z-30"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Downloading {currentDiscipline.handbookName}...</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
