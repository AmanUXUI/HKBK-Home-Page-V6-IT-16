import React, { useState } from "react";
import { motion } from "motion/react";
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
  Trophy
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
        focusTitle: "Business foundations",
        focusSubtitle: "Economics, accounting & market fundamentals",
        icon: "layers",
        theme: "y01",
        skills: ["Financial Analysis", "Macroeconomics", "Marketing Essentials", "Organizational Behavior", "Advanced Excel", "PowerBI"]
      },
      {
        yearCode: "Y02",
        focusTitle: "Specialization & strategy",
        focusSubtitle: "Analytics, digital operations & consumer insights",
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
        description: "corporate internships with real deliverables"
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
        focusSubtitle: "Cloud platforms & full-stack capstone",
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
        description: "corporate software internships"
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
        focusSubtitle: "Anatomy, biochemistry & sterile lab protocols",
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

export default function SuccessRoadmap() {
  const [activeDisciplineId, setActiveDisciplineId] = useState<DisciplineType>("engineering");

  const currentDiscipline = ROADMAP_CONFIG.find(d => d.id === activeDisciplineId) || ROADMAP_CONFIG[0];

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
    <section 
      id="success-roadmap"
      className="py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#FAF7F2] text-[#2C0407] font-sans relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(250, 247, 242, 0.88), rgba(250, 247, 242, 0.94)), url('https://imgh.in/host/q032c8')`,
        backgroundAttachment: "scroll"
      }}
    >
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: `url('https://imgh.in/host/q032c8')` }}
      />

      <div className="max-w-[1360px] mx-auto relative z-10">

        {/* 1. SECTION HEADER (Exact copy & layout from image) */}
        <div className="flex flex-col items-start mb-8 sm:mb-10 text-left">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center space-x-2 bg-[#F4EBE6] text-[#7A131A] text-[11px] font-bold tracking-[0.14em] uppercase rounded-md py-1.5 px-3 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7A131A]" />
            <span>STUDENT SUCCESS ROADMAP</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-[34px] sm:text-[46px] md:text-[54px] font-bold leading-[1.08] tracking-[-0.025em] text-[#7A131A] mb-3">
            A semester-by-semester journey<br className="hidden sm:inline" /> tailored across every discipline.
          </h2>

          {/* Subheading */}
          <p className="text-sm sm:text-base text-[#7A131A]/80 max-w-3xl leading-relaxed">
            A semester-by-semester journey designed to transform students into industry-ready engineers and innovators.
          </p>
        </div>

        {/* 2. TOP DISCIPLINE FILTER BUTTONS WITH SEAMLESS INVERTED-CORNER TAB INTERSECTION */}
        <div className="flex items-end space-x-2 sm:space-x-3 overflow-x-auto no-scrollbar pt-6 pl-0 pr-2 relative z-20 -mb-[1px]">
          {ROADMAP_CONFIG.map((discipline, idx) => {
            const isActive = activeDisciplineId === discipline.id;
            const isFirst = idx === 0;
            return (
              <button
                key={discipline.id}
                onClick={() => setActiveDisciplineId(discipline.id)}
                className={`relative flex items-center space-x-2.5 font-bold tracking-tight transition-colors duration-200 shrink-0 cursor-pointer select-none outline-none ${
                  isActive
                    ? `bg-[#7A131A] text-white pt-3.5 pb-3.5 px-5 sm:px-6 z-30 ${
                        isFirst
                          ? "rounded-tl-[24px] sm:rounded-tl-[28px] rounded-tr-[18px]"
                          : "rounded-t-[18px]"
                      }`
                    : "bg-[#FDFAEC] text-[#7A131A] border border-[#7A131A]/20 hover:border-[#7A131A]/50 hover:bg-[#F7EFE4] py-2.5 px-4.5 rounded-2xl mb-1 text-xs sm:text-sm"
                }`}
              >
                {/* Left Inverted Concave Fillet (only if not first tab) */}
                {isActive && !isFirst && (
                  <div className="absolute -bottom-[1px] -left-[16px] w-[16px] h-[16px] pointer-events-none z-30">
                    <svg viewBox="0 0 16 16" className="w-full h-full fill-[#7A131A] block">
                      <path d="M16,0 C16,8.8366 8.8366,16 0,16 L16,16 Z" />
                    </svg>
                  </div>
                )}

                {/* Right Inverted Concave Fillet */}
                {isActive && (
                  <div className="absolute -bottom-[1px] -right-[16px] w-[16px] h-[16px] pointer-events-none z-30">
                    <svg viewBox="0 0 16 16" className="w-full h-full fill-[#7A131A] block">
                      <path d="M0,0 C0,8.8366 7.1634,16 16,16 L0,16 Z" />
                    </svg>
                  </div>
                )}

                <span className={`relative z-10 transition-transform duration-200 ${isActive ? "text-white scale-110" : "text-[#7A131A]"}`}>
                  {discipline.icon}
                </span>
                <span className="relative z-10 text-xs sm:text-sm">{discipline.name}</span>
                <span className={`relative z-10 text-[10px] uppercase font-bold px-2 py-0.5 rounded-md transition-colors duration-200 ${
                  isActive ? "bg-white/20 text-white" : "bg-[#7A131A]/10 text-[#7A131A]"
                }`}>
                  {discipline.semsCount} SEMS
                </span>
              </button>
            );
          })}
        </div>

        {/* 3. MAIN 4-YEAR ROADMAP CONTAINER (Exact Match to User Reference) */}
        <motion.div 
          key={activeDisciplineId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15 }}
          className={`w-full rounded-b-[24px] sm:rounded-b-[28px] rounded-tr-[24px] sm:rounded-tr-[28px] ${
            activeDisciplineId === ROADMAP_CONFIG[0].id ? "rounded-tl-none" : "rounded-tl-[24px] sm:rounded-tl-[28px]"
          } overflow-hidden border border-[#521319]/20 shadow-[0_16px_48px_rgba(0,0,0,0.12)] mb-8 relative z-10`}
        >
          {/* Header Row: 3 Columns with Clean Typography */}
          <div className="hidden md:grid grid-cols-12 bg-[#7A131A] text-[#EBD8D0] py-3.5 items-center border-b border-[#5C0D13]">
            <div className="col-span-2 px-6 lg:px-8 text-[11px] font-bold uppercase tracking-[0.16em] text-[#EBD8D0]/85">
              YEAR
            </div>
            <div className="col-span-3 px-4 lg:px-6 text-[11px] font-bold uppercase tracking-[0.16em] text-[#EBD8D0]/85">
              FOCUS
            </div>
            <div className="col-span-7 px-6 lg:px-8 text-[11px] font-bold uppercase tracking-[0.16em] text-[#EBD8D0]/85">
              LEARNING
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
              let pillStyle = "bg-white border-[#2C0407]/15 text-[#2C0407] hover:border-[#2C0407]/40";
              let yearTextStyle = "text-[#2C0407]";
              let iconCircleStyle = "bg-white/80 border-[#2C0407]/15 text-[#2C0407]";

              if (isY01) {
                rowBg = "bg-[#FDF9F2]";
                yearColBg = "bg-white text-[#2C0407]";
                yearTextStyle = "text-[#2C0407]";
                iconCircleStyle = "bg-[#FAF0E6] border-[#2C0407]/15 text-[#7A131A]";
                pillStyle = "bg-white border-[#2C0407]/15 text-[#2C0407] hover:border-[#7A131A]";
              } else if (isY02) {
                rowBg = "bg-[#FBF4D7]";
                yearColBg = "bg-[#FBF4D7]";
                yearTextStyle = "text-[#2C0407]";
                iconCircleStyle = "bg-white/80 border-[#2C0407]/15 text-[#2C0407]";
                pillStyle = "bg-white/90 border-[#2C0407]/15 text-[#2C0407] hover:border-[#7A131A]";
              } else if (isY03) {
                rowBg = "bg-[#EBD8D0]";
                yearColBg = "bg-[#EBD8D0]";
                yearTextStyle = "text-[#2C0407]";
                iconCircleStyle = "bg-white/80 border-[#2C0407]/15 text-[#2C0407]";
                pillStyle = "bg-white/90 border-[#2C0407]/15 text-[#2C0407] hover:border-[#7A131A]";
              } else if (isY04) {
                rowBg = "bg-[#BA3B41]";
                yearColBg = "bg-[#BA3B41]";
                yearTextStyle = "text-white";
                textTitle = "text-white";
                textSub = "text-white/90";
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
                    
                    {/* Column 1: Year */}
                    <div className={`col-span-2 flex items-center px-6 lg:px-8 py-6 ${yearColBg}`}>
                      <div className="flex items-center space-x-3.5">
                        {/* Circular Outline Icon */}
                        <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 border ${iconCircleStyle}`}>
                          {renderIcon(year.icon, "w-5 h-5")}
                        </div>

                        {/* Year Code Label */}
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
                        Learning
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

        {/* 4. END OF YEAR 4 OUTCOMES CONTAINER (Exact Match to User Reference) */}
        <div className="w-full bg-white rounded-[24px] border border-[#E6D8C8] p-6 sm:p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.05)] text-[#2C0407]">
          
          {/* Header */}
          <div className="flex items-center space-x-4 mb-8 sm:mb-10">
            <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.18em] text-[#7A131A] shrink-0">
              END OF YEAR 4 OUTCOMES
            </h3>
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

      </div>
    </section>
  );
}
