import React, { useState } from "react";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  Compass, 
  Award, 
  BookOpen, 
  GraduationCap, 
  Briefcase, 
  Building2, 
  ShieldCheck, 
  Layers,
  Users,
  FileText,
  FileCheck2,
  Monitor,
  Grid,
  Download,
  Mail,
  Phone,
  Calendar,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Laptop,
  Lightbulb
} from "lucide-react";

interface IQACPageProps {
  onOpenApplyModal: () => void;
  onNavigateHome: () => void;
  onNavigateOverview?: () => void;
  onNavigateAccreditation?: () => void;
}

export default function IQACPage({
  onOpenApplyModal,
  onNavigateHome,
  onNavigateOverview,
  onNavigateAccreditation
}: IQACPageProps) {
  const [activeStakeholderTab, setActiveStakeholderTab] = useState<number>(0);
  const [activeInfoTab, setActiveInfoTab] = useState<"composition" | "minutes" | "approvals" | "ict" | "seat-matrix">("composition");

  const qualityPolicies = [
    {
      title: "Conducive Environment & Infrastructure",
      desc: "Facilitating a conducive environment for all stakeholders through state-of-the-art infrastructure."
    },
    {
      title: "Innovative Pedagogies",
      desc: "Adopting innovative teaching methodologies to meet dynamic and changing global needs."
    },
    {
      title: "Global Workforce & Ethics",
      desc: "Inculcating trending needs for global workforce, interdisciplinary skills, effective communication, quality technical expertise, ethics, and values."
    },
    {
      title: "Industry Interactive Exposure",
      desc: "Providing creative and enriching learning experiences through industry-interactive exposure, continuous guidance, and structured support."
    },
    {
      title: "Research & Development Acumen",
      desc: "Facilitating research and development acumen across all academic departments and student bodies."
    },
    {
      title: "Lifelong Learning Continuum",
      desc: "Nurturing the continuum of lifelong learners equipped to adapt to modern technological shifts."
    }
  ];

  const objectives = [
    {
      title: "Modern Tools Integration",
      desc: "To optimise and integrate modern tools of learning across all instructional curricula."
    },
    {
      title: "Equitable Program Access",
      desc: "Equitable access to affordability of academic programs for various sections of society."
    },
    {
      title: "Affordable Higher Education",
      desc: "To provide access to academic programs to various sections of the society at an affordable cost."
    },
    {
      title: "Sustainable Enhancement",
      desc: "To implement sustainable enhancement, integrate various institutional activities, and institutionalise best prospects."
    }
  ];

  const stakeholders = [
    {
      id: "coordinator",
      title: "IQAC Coordinator",
      label: "Role of IQAC Coordinator",
      icon: ShieldCheck,
      duties: [
        "Ensure effective functioning of all the members within the quality assurance framework.",
        "Initiate measures to ensure the growth of the institution by devising structured procedures and assessment instruments.",
        "Submit the Annual Quality Assurance Report (AQAR) annually and ensure that the norms of NAAC or similar regulating agencies reach different stakeholders speedily.",
        "Monitor the teaching-learning process to the fullest satisfaction of all institutional stakeholders.",
        "Conduct periodic audits of academic and administrative activities for systematic quality assessment."
      ]
    },
    {
      id: "students",
      title: "Students",
      label: "Role of Students",
      icon: GraduationCap,
      duties: [
        "Abide by the Visvesvaraya Technological University (VTU) norms and institutional policies with utmost discipline.",
        "Regularly upgrade skill sets and actively acquire technical competence to face dynamic professional challenges.",
        "Share constructive feedback to enhance the teaching-learning process and day-to-day functioning of the institution."
      ]
    },
    {
      id: "alumni",
      title: "Alumni",
      label: "Role of Alumni",
      icon: Briefcase,
      duties: [
        "Help the institution in conducting value-addition courses, technical workshops, and expert guest lectures.",
        "Proactively interact with the faculty to use their professional offices to facilitate teaching-learning, industry-institute connect, and support setting up incubation centres and guiding capstone projects.",
        "Support graduating students in career placements and internships through their corporate networks."
      ]
    },
    {
      id: "faculty",
      title: "Faculty",
      label: "Role of Faculty",
      icon: BookOpen,
      duties: [
        "Ensure sustained quality in the teaching process and achieve exemplary academic results across courses.",
        "Adopt new teaching pedagogies and initiate steps towards enhancing students' skill sets through value-addition, certificate courses, and soft skills.",
        "Serve as inspiring mentors and ethical role models to the students across the institution."
      ]
    },
    {
      id: "management",
      title: "College Management",
      label: "Role of Management",
      icon: Building2,
      duties: [
        "Provide strategic support, modern infrastructure, and adequate human resources to meet quality goals.",
        "Delegate operational powers to the Principal and key stakeholders in improving administrative and academic efficacy.",
        "Frame progressive policies conducive to the holistic growth and professional development of students and faculty."
      ]
    }
  ];

  // Data for the 5 Tabs based on provided PDF
  const iqacCompositionMembers = [
    {
      designation: "Chairperson",
      name: "Dr. Mohammed Riyaz Ahmed",
      role: "Principal",
      email: "principal@hkbk.edu.in",
      phone: "+918971079936"
    },
    {
      designation: "IQAC Chief Coordinator",
      name: "Dr. Nadeem Pasha",
      role: "Associate Professor - ME",
      email: "",
      phone: "+91 9844103602"
    },
    {
      designation: "IQAC Chief Coordinator",
      name: "Dr. Zahira Tabassum",
      role: "Associate Professor [Electonics & Communication]",
      email: "zahirat.ec@hkbk.edu.in",
      phone: "+919916701624"
    },
    {
      designation: "Members",
      name: "Dr. A Syed Mustafa",
      role: "Head of Department [Information Science]",
      email: "mustafas.is@hkbk.edu.in",
      phone: "+919844011062"
    },
    {
      designation: "Members",
      name: "Dr. C S Nagabushana",
      role: "Head of Department [Mathematics]",
      email: "nagabushana.mt@hkbk.edu.in",
      phone: "+919964189984"
    },
    {
      designation: "Members",
      name: "Dr.Maaz Ahmed",
      role: "Associate Professor - ECE",
      email: "",
      phone: "+91 9035452495"
    },
    {
      designation: "Members",
      name: "Prof. Tahir Naquash,",
      role: "Assistant Professor - CSE",
      email: "",
      phone: "+919036937955"
    },
    {
      designation: "Members",
      name: "Mr. Akash Thirumala",
      role: "Analyst1, Infrastructure Service",
      email: "",
      phone: "+91 9148368276"
    },
    {
      designation: "Members",
      name: "Mr. Shaik Aleem Ur Rehman",
      role: "ASIC Design and Verification Engineer, Alumnus",
      email: "",
      phone: "+91 9019807264"
    },
    {
      designation: "Members",
      name: "Mr. Ibrahim Marikanvi,",
      role: "Civil Engineer, SNS Constructions, Parent of Samiya Ibrahim",
      email: "",
      phone: "+91 9916584486"
    },
    {
      designation: "Members",
      name: "Mr. Hussain Junaidi - 1HK21AI031",
      role: "4th Sem, AIML",
      email: "",
      phone: "+919738027865"
    }
  ];

  const statutoryCommittees = [
    "IQAC Composition",
    "SC-ST Committee",
    "CICC Committee",
    "Grievance Redressal Committee",
    "Anti Ragging Committee"
  ];

  const meetingMinutes = [
    { title: "MOM 06.05.2024", date: "May 06, 2024", year: "2024" },
    { title: "MOM 16.01.2024", date: "January 16, 2024", year: "2024" },
    { title: "MOM 20-09-2023", date: "September 20, 2023", year: "2023" },
    { title: "MOM 09-05-2023", date: "May 09, 2023", year: "2023" },
    { title: "MOM 03-01-2023", date: "January 03, 2023", year: "2023" },
    { title: "MOM 10-10-2022", date: "October 10, 2022", year: "2022" },
    { title: "MOM 23-07-2022", date: "July 23, 2022", year: "2022" },
    { title: "MOM 09-04-2022", date: "April 09, 2022", year: "2022" },
    { title: "MOM 11-09-2021", date: "September 11, 2021", year: "2021" },
    { title: "MOM 22-06-2021", date: "June 22, 2021", year: "2021" },
    { title: "MOM 01-01-2021", date: "January 01, 2021", year: "2021" },
    { title: "MOM 05-08-2020", date: "August 05, 2020", year: "2020" }
  ];

  const approvalsData = [
    {
      title: "NAAC Accreditation 2017-22",
      type: "NAAC",
      validity: "2017 - 2022",
      badge: "Institutional Accreditation",
      highlight: true
    },
    {
      title: "AICTE APPROVAL LETTER from 1997-2024",
      type: "AICTE",
      validity: "1997 - 2024",
      badge: "Statutory Approval",
      highlight: false
    },
    {
      title: "NBA Accreditation of ECE,CSE,ISE,ME,EEE 2015-2017",
      type: "NBA",
      validity: "2015 - 2017",
      badge: "Programmatic Accreditation",
      highlight: false
    },
    {
      title: "NBA Acrreditation of ECE 2019-2025",
      type: "NBA",
      validity: "2019 - 2025",
      badge: "Programmatic Accreditation",
      highlight: true
    },
    {
      title: "NBA Acrreditation of CSE,ISE 2023-2026",
      type: "NBA",
      validity: "2023 - 2026",
      badge: "Programmatic Accreditation",
      highlight: true
    },
    {
      title: "VTU APPROVAL LETTER from 1997-2024",
      type: "VTU",
      validity: "1997 - 2024",
      badge: "University Affiliation",
      highlight: false
    }
  ];

  const ictToolsData = [
    { title: "ICT Tools" },
    { title: "Capacity Building" }
  ];

  const seatMatrixData = [
    { year: "2023-24", title: "Seat Matrix 2023-24", active: true },
    { year: "2022-23", title: "Seat Matrix 2022-23", active: false },
    { year: "2021-22", title: "Seat Matrix 2021-22", active: false },
    { year: "2020-21", title: "Seat Matrix:2020-21", active: false },
    { year: "2017-18", title: "Seat Matrix : 2017-18", active: false },
    { year: "2016-17", title: "Seat Matrix : 2016-17", active: false },
    { year: "2015-16", title: "Seat Matrix : 2015-16", active: false }
  ];

  return (
    <div id="iqac-page" className="w-full bg-[#FCFBF7] text-[#1A1A1A]">
      
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
            {onNavigateOverview ? (
              <button 
                onClick={onNavigateOverview}
                className="hover:text-white transition-colors cursor-pointer"
              >
                About Us
              </button>
            ) : (
              <span className="text-white/80">About Us</span>
            )}
            <span className="text-white/40">/</span>
            <span className="text-white font-bold">IQAC</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="font-serif font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-white leading-[1.1] mb-6">
              Internal Quality Assurance Cell (IQAC)
            </h1>

            <div className="pt-2">
              <p className="font-mono text-sm sm:text-base font-bold text-[#FFD700] tracking-[0.2em]">
                Quality Sustenance & Continuous Academic Enhancement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About IQAC (Editorial Split & Mandate Context) */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 border-b border-[#E5E0D5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Heading & Context */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <div className="flex items-center">
                <span className="text-[#8C1515] font-mono text-xs font-bold tracking-[0.2em] uppercase">
                  Institutional Mandate
                </span>
              </div>

              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1A1A1A] leading-tight">
                About Internal Quality Assurance Cell
              </h2>

              <div className="pt-4 border-t border-[#E5E0D5] space-y-4 text-sm text-[#555]">
                <div className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-[#8C1515] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1A1A1A] font-semibold">NAAC Post-Accreditation Measure</strong>
                    <span>Mandatory institutional mechanism to sustain and monitor quality indicators</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Layers className="w-5 h-5 text-[#8C1515] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1A1A1A] font-semibold">7 Criteria Transformation</strong>
                    <span>Conscious, consistent and catalytic change across all NAAC performance criteria</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenApplyModal}
                  className="inline-flex items-center space-x-2 bg-[#8C1515] hover:bg-[#721111] text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md cursor-pointer"
                >
                  <span>Apply for Admissions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Editorial Body Copy */}
            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#333] leading-relaxed font-sans">
              <p className="text-lg sm:text-xl text-[#222] leading-relaxed font-serif italic text-[#8C1515]">
                "NAAC has mandatory guidelines that every accredited institution should establish an Internal Quality Assurance Cell (IQAC) as a post-accreditation quality sustenance measure."
              </p>

              <div className="w-20 h-[1.5px] bg-[#8C1515]/30 my-6" />

              <p>
                Since its inception, the <strong>Internal Quality Assurance Cell (IQAC) of HKBKCE</strong> has been working continuously on developing quality and monitoring performance indicators for the institution. The IQAC has been instrumental in bringing a conscious, consistent, and catalytic change in all the 7 criteria as defined by NAAC.
              </p>

              <p>
                Quality Assurance is a shared responsibility of the entire institute community. It is a successful endeavor only with the full support and cooperation of the management, the teaching and non-teaching staff, and the students, as it impacts every aspect of the Institution’s work.
              </p>

              <div className="p-6 rounded-xl bg-[#FAF8F5] border border-[#E5E0D5] space-y-2">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#8C1515] block">
                  Global Perspective
                </span>
                <p className="text-sm sm:text-base text-[#444] leading-relaxed">
                  In the current globalized world of higher education, exercises relating to accreditations, world rankings, and ratings of higher education institutions make it necessary to focus comprehensively on Institutional excellence.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Vision & Mission of IQAC */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-[#F6F3EB] border-b border-[#E5E0D5]">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-12 border-b border-[#E5E0D5] pb-6">
            <span className="text-[#8C1515] font-mono text-xs font-bold tracking-[0.25em] uppercase block mb-2">
              Strategic Blueprint
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight">
              Vision & Mission of IQAC
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision Card */}
            <div className="bg-white rounded-2xl border border-[#DCD6C8] p-8 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold tracking-widest text-[#8C1515] uppercase bg-[#8C1515]/5 px-3 py-1.5 rounded-md w-fit">
                  <Compass className="w-4 h-4" />
                  <span>IQAC Vision</span>
                </div>
                <h3 className="font-serif font-bold text-2xl text-[#1A1A1A]">
                  Excellence in Education & Innovation
                </h3>
                <p className="text-base text-[#444] leading-relaxed font-sans">
                  To evolve strategies and to build quality in the institute and promote excellence in the sphere of education, innovation in technology.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E5E0D5] flex items-center text-xs font-mono text-[#777]">
                <span>Strategic Quality Roadmap</span>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-2xl border border-[#DCD6C8] p-8 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold tracking-widest text-[#8C1515] uppercase bg-[#8C1515]/5 px-3 py-1.5 rounded-md w-fit">
                  <Target className="w-4 h-4" />
                  <span>IQAC Mission</span>
                </div>
                <h3 className="font-serif font-bold text-2xl text-[#1A1A1A]">
                  Continuous Enhancement & Value-Based Learning
                </h3>
                <ul className="space-y-3.5 text-base text-[#444] leading-relaxed font-sans">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-[#8C1515] shrink-0 mt-1" />
                    <span>To promote innovative practices to continually improve the efficiency of the Teaching – Learning experiences of all stakeholders.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-[#8C1515] shrink-0 mt-1" />
                    <span>To cultivate a student-centric environment and provide value-based education with emphasis on human values and academic excellence.</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-[#E5E0D5] flex items-center text-xs font-mono text-[#777]">
                <span>Teaching-Learning Quality Sustenance</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Quality Policy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 border-b border-[#E5E0D5]">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-12 border-b border-[#E5E0D5] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[#8C1515] font-mono text-xs font-bold tracking-[0.25em] uppercase block mb-2">
                Guiding Tenets
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight">
                Quality Policy
              </h2>
            </div>
            <span className="text-xs font-mono text-[#777] uppercase tracking-wider shrink-0">
              Institutional Framework
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityPolicies.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl border border-[#DCD6C8] p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#8C1515]/40 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-full bg-[#8C1515]/10 text-[#8C1515] font-mono text-xs font-bold flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-[#8C1515]" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#1A1A1A] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#555] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. IQAC Objectives */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-[#FAF8F5] border-b border-[#E5E0D5]">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-12 border-b border-[#E5E0D5] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[#8C1515] font-mono text-xs font-bold tracking-[0.25em] uppercase block mb-2">
                Action Priorities
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight">
                Key Objectives
              </h2>
            </div>
            <span className="text-xs font-mono text-[#777] uppercase tracking-wider shrink-0">
              Operational Focus
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((obj, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl border border-[#DCD6C8] p-6 shadow-xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-[#8C1515] text-white flex items-center justify-center font-mono text-xs font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#1A1A1A] leading-snug">
                    {obj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666] leading-relaxed">
                    {obj.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Roles & Duties of Main Stakeholders */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 border-b border-[#E5E0D5]">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-8 border-b border-[#E5E0D5] pb-6">
            <span className="text-[#8C1515] font-mono text-xs font-bold tracking-[0.25em] uppercase block mb-2">
              Collaborative Governance
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight mb-3">
              Roles & Duties of Stakeholders
            </h2>
            <p className="text-sm text-[#666] max-w-3xl">
              The roles and duties of key stakeholders such as students, alumni, faculty, and college management are indicative in nature to sustain academic and institutional excellence.
            </p>
          </div>

          {/* Interactive Stakeholder Tab Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-8">
            {stakeholders.map((sh, idx) => {
              const IconComp = sh.icon;
              const isSelected = activeStakeholderTab === idx;
              return (
                <button
                  key={sh.id}
                  onClick={() => setActiveStakeholderTab(idx)}
                  className={`flex items-center space-x-2.5 px-4 py-3 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelected 
                      ? "bg-[#8C1515] text-white border-[#8C1515] shadow-sm" 
                      : "bg-white text-[#444] border-[#DCD6C8] hover:border-[#8C1515]/40 hover:bg-[#FAF8F5]"
                  }`}
                >
                  <IconComp className={`w-4 h-4 shrink-0 ${isSelected ? "text-[#FFD700]" : "text-[#8C1515]"}`} />
                  <span className="text-xs sm:text-sm font-semibold tracking-tight truncate">
                    {sh.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stakeholder Detailed Display */}
          <div className="bg-white rounded-2xl border border-[#DCD6C8] p-8 sm:p-10 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E5E0D5] gap-4">
              <div className="flex items-center space-x-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#8C1515]/10 flex items-center justify-center text-[#8C1515]">
                  {React.createElement(stakeholders[activeStakeholderTab].icon, { className: "w-6 h-6" })}
                </div>
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#8C1515] block">
                    Stakeholder Mandate
                  </span>
                  <h3 className="font-serif font-bold text-2xl text-[#1A1A1A]">
                    {stakeholders[activeStakeholderTab].label}
                  </h3>
                </div>
              </div>
              <span className="font-mono text-xs text-[#777] bg-[#FAF8F5] px-3 py-1.5 rounded-md border border-[#E5E0D5] w-fit">
                Indicative Guidelines
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-2">
              {stakeholders[activeStakeholderTab].duties.map((duty, dIdx) => (
                <div 
                  key={dIdx} 
                  className="flex items-start space-x-3.5 p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E0D5]"
                >
                  <div className="w-5 h-5 rounded-full bg-[#8C1515] text-white flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5">
                    {dIdx + 1}
                  </div>
                  <p className="text-sm sm:text-base text-[#333] leading-relaxed">
                    {duty}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 7. Institutional Governance & Quality Records (5-Tab Dynamic Section) */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-[#F6F3EB] border-b border-[#E5E0D5]">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-10 border-b border-[#E5E0D5] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[#8C1515] font-mono text-xs font-bold tracking-[0.25em] uppercase block mb-2">
                Quality Assurance Records
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight">
                Governance, Approvals & Records
              </h2>
            </div>
            <span className="text-xs font-mono text-[#777] uppercase tracking-wider shrink-0">
              Institutional Documentation
            </span>
          </div>

          {/* 5 Tab Navigation Bar */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {[
              { id: "composition", label: "IQAC Composition", icon: Users },
              { id: "minutes", label: "IQAC Meeting Minutes", icon: FileText },
              { id: "approvals", label: "Approvals", icon: FileCheck2 },
              { id: "ict", label: "ICT Tools", icon: Monitor },
              { id: "seat-matrix", label: "Seat Matrix", icon: Grid }
            ].map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeInfoTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveInfoTab(tab.id as any)}
                  className={`flex items-center space-x-2.5 px-5 py-3.5 rounded-xl border text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#8C1515] text-white border-[#8C1515] shadow-sm ring-2 ring-[#8C1515]/20"
                      : "bg-white text-[#444] border-[#DCD6C8] hover:border-[#8C1515]/40 hover:bg-[#FAF8F5]"
                  }`}
                >
                  <TabIcon className={`w-4 h-4 ${isActive ? "text-[#FFD700]" : "text-[#8C1515]"}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab 1: IQAC Composition */}
          {activeInfoTab === "composition" && (
            <div className="space-y-8">
              
              {/* Main Committee Table & Documents Card */}
              <div className="bg-white rounded-2xl border border-[#DCD6C8] p-6 sm:p-10 shadow-xs space-y-8">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E5E0D5] gap-4">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#8C1515] block mb-1">
                      Institutional Governance
                    </span>
                    <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#1A1A1A]">
                      IQAC COMPOSITION
                    </h3>
                    <p className="text-sm text-[#666] mt-1 font-mono">
                      International Quality Assurance Cell
                    </p>
                  </div>
                  <span className="font-mono text-xs text-[#777] bg-[#FAF8F5] px-3.5 py-1.5 rounded-md border border-[#E5E0D5] w-fit">
                    Active Committee
                  </span>
                </div>

                {/* Table for Members */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="border-b-2 border-[#8C1515]/20 bg-[#FAF8F5]">
                        <th className="py-3.5 px-4 font-mono text-xs font-bold uppercase tracking-wider text-[#8C1515] w-1/4">
                          Designation
                        </th>
                        <th className="py-3.5 px-4 font-mono text-xs font-bold uppercase tracking-wider text-[#8C1515] w-2/5">
                          Name & Profile
                        </th>
                        <th className="py-3.5 px-4 font-mono text-xs font-bold uppercase tracking-wider text-[#8C1515] w-1/3">
                          Contact Details
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E0D5]">
                      {iqacCompositionMembers.map((member, mIdx) => (
                        <tr key={mIdx} className="hover:bg-[#FAF8F5]/60 transition-colors">
                          <td className="py-4 px-4 align-top">
                            <span className="inline-block font-semibold text-xs text-[#8C1515] bg-[#8C1515]/5 px-2.5 py-1 rounded border border-[#8C1515]/10">
                              {member.designation}
                            </span>
                          </td>
                          <td className="py-4 px-4 align-top">
                            <div className="font-bold text-base text-[#1A1A1A]">
                              {member.name}
                            </div>
                            {member.role && (
                              <div className="text-xs text-[#666] mt-0.5 font-sans">
                                {member.role}
                              </div>
                            )}
                          </td>
                          <td className="py-4 px-4 align-top space-y-1">
                            {member.email && (
                              <div className="flex items-center space-x-1.5 text-xs text-[#444]">
                                <Mail className="w-3.5 h-3.5 text-[#8C1515] shrink-0" />
                                <a href={`mailto:${member.email}`} className="hover:text-[#8C1515] hover:underline font-mono">
                                  {member.email}
                                </a>
                              </div>
                            )}
                            {member.phone && (
                              <div className="flex items-center space-x-1.5 text-xs text-[#444]">
                                <Phone className="w-3.5 h-3.5 text-[#8C1515] shrink-0" />
                                <a href={`tel:${member.phone.replace(/\s+/g, '')}`} className="hover:text-[#8C1515] hover:underline font-mono">
                                  {member.phone}
                                </a>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* PDF Documents embedded directly inside the same container */}
                <div className="pt-6 border-t border-[#E5E0D5] space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <FileText className="w-4 h-4 text-[#8C1515]" />
                      <h4 className="font-serif font-bold text-lg text-[#1A1A1A]">
                        Committee Composition & Policy Documents (PDF)
                      </h4>
                    </div>
                    <span className="font-mono text-xs text-[#777]">
                      {statutoryCommittees.length} Documents
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {statutoryCommittees.map((comm, cIdx) => (
                      <div 
                        key={cIdx}
                        className="flex items-center justify-between p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E0D5] hover:border-[#8C1515]/40 hover:shadow-xs transition-all group"
                      >
                        <div className="flex items-center space-x-3 min-w-0 pr-2">
                          <div className="w-8 h-8 rounded-lg bg-[#8C1515]/10 text-[#8C1515] flex items-center justify-center shrink-0 group-hover:bg-[#8C1515] group-hover:text-white transition-colors">
                            <FileText className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-semibold text-[#222] truncate group-hover:text-[#8C1515] transition-colors">
                            {comm}
                          </span>
                        </div>
                        <button
                          onClick={() => alert(`Opening PDF: ${comm}`)}
                          className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>PDF</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* Tab 2: IQAC Meeting Minutes */}
          {activeInfoTab === "minutes" && (
            <div className="bg-white rounded-2xl border border-[#DCD6C8] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E5E0D5] gap-4">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#8C1515] block mb-1">
                    Meeting Documentation
                  </span>
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#1A1A1A]">
                    IQAC- Minutes of Meetings.
                  </h3>
                </div>
                <span className="font-mono text-xs text-[#777] bg-[#FAF8F5] px-3.5 py-1.5 rounded-md border border-[#E5E0D5] w-fit">
                  {meetingMinutes.length} Published MOMs
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
                {meetingMinutes.map((mom, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center justify-between p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E0D5] hover:border-[#8C1515]/40 hover:shadow-xs transition-all group"
                  >
                    <div className="space-y-1 min-w-0 pr-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-[10px] font-bold text-[#8C1515] bg-[#8C1515]/5 px-2 py-0.5 rounded border border-[#8C1515]/10 shrink-0">
                          {mom.year}
                        </span>
                        <h4 className="font-semibold text-sm text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors truncate">
                          {mom.title}
                        </h4>
                      </div>
                      <p className="text-xs text-[#666] font-mono flex items-center space-x-1.5 pl-0.5">
                        <Calendar className="w-3 h-3 text-[#888] shrink-0" />
                        <span>{mom.date}</span>
                      </p>
                    </div>

                    <button 
                      onClick={() => alert(`Viewing document: ${mom.title}`)}
                      className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-lg border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                    >
                      <span>View MOM</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Approvals */}
          {activeInfoTab === "approvals" && (
            <div className="space-y-8">
              
              <div className="bg-white rounded-2xl border border-[#DCD6C8] p-6 sm:p-10 shadow-xs space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E5E0D5] gap-4">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#8C1515] block mb-1">
                      Statutory Compliance & Accreditations
                    </span>
                    <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#1A1A1A]">
                      APPROVALS
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-[#777] bg-[#FAF8F5] px-3.5 py-1.5 rounded-md border border-[#E5E0D5] w-fit">
                    AICTE • NBA • NAAC • VTU
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                  {approvalsData.map((approval, aIdx) => (
                    <div 
                      key={aIdx}
                      className="bg-[#FAF8F5] rounded-xl border border-[#E5E0D5] p-5 flex flex-col justify-between hover:border-[#8C1515]/40 hover:shadow-xs transition-all group space-y-4"
                    >
                      {/* Content Card Body */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C1515] bg-[#8C1515]/5 px-2.5 py-1 rounded border border-[#8C1515]/10">
                            {approval.badge}
                          </span>
                          <span className="text-xs font-mono text-[#777] font-semibold">
                            {approval.type}
                          </span>
                        </div>
                        <h4 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors leading-snug">
                          {approval.title}
                        </h4>
                      </div>

                      <div className="pt-3.5 border-t border-[#E5E0D5] flex items-center justify-between">
                        <span className="text-xs font-mono text-[#777]">
                          {approval.validity}
                        </span>
                        <button
                          onClick={() => alert(`Downloading approval letter: ${approval.title}`)}
                          className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#8C1515] hover:underline cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download Letter</span>
                        </button>
                      </div>

                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* Tab 4: ICT Tools */}
          {activeInfoTab === "ict" && (
            <div className="bg-white rounded-2xl border border-[#DCD6C8] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E5E0D5] gap-4">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#8C1515] block mb-1">
                    Digital Learning & Capacity Building
                  </span>
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#1A1A1A]">
                    ICT Tools & Capacity Building
                  </h3>
                </div>
                <span className="font-mono text-xs text-[#777] bg-[#FAF8F5] px-3.5 py-1.5 rounded-md border border-[#E5E0D5] w-fit">
                  2 PDF Documents
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {ictToolsData.map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center justify-between p-5 rounded-xl bg-[#FAF8F5] border border-[#E5E0D5] hover:border-[#8C1515]/40 hover:shadow-xs transition-all group"
                  >
                    <div className="flex items-center space-x-3.5 min-w-0 pr-3">
                      <div className="w-10 h-10 rounded-xl bg-[#8C1515]/10 text-[#8C1515] flex items-center justify-center shrink-0 group-hover:bg-[#8C1515] group-hover:text-white transition-colors">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors">
                          {item.title}
                        </h4>
                        <span className="text-xs font-mono text-[#777]">
                          PDF Document
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => alert(`Opening PDF: ${item.title}`)}
                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#8C1515] bg-white hover:bg-[#8C1515] hover:text-white px-3.5 py-2 rounded-lg border border-[#E5E0D5] hover:border-[#8C1515] transition-all cursor-pointer shadow-2xs shrink-0"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 5: Seat Matrix */}
          {activeInfoTab === "seat-matrix" && (
            <div className="bg-white rounded-2xl border border-[#DCD6C8] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E5E0D5] gap-4">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#8C1515] block mb-1">
                    Academic Sanction & Intake Distribution
                  </span>
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#1A1A1A]">
                    Seat Matrix
                  </h3>
                  <p className="text-sm text-[#666] mt-1">
                    Annual statutory branch-wise seat sanction and intake allotments.
                  </p>
                </div>
                <span className="font-mono text-xs text-[#777] bg-[#FAF8F5] px-3.5 py-1.5 rounded-md border border-[#E5E0D5] w-fit">
                  2015 - 2024 Sanctions
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                {seatMatrixData.map((seat, sIdx) => (
                  <div 
                    key={sIdx}
                    className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E5E0D5] hover:border-[#8C1515]/40 hover:shadow-sm transition-all group flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-[#8C1515] bg-[#8C1515]/5 px-2.5 py-1 rounded border border-[#8C1515]/10">
                          {seat.year}
                        </span>
                      </div>
                      <h4 className="font-serif font-bold text-lg text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors">
                        {seat.title}
                      </h4>
                      <p className="text-xs text-[#666] font-mono">
                        Approved Intake & Category Quota Distribution
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#E5E0D5] flex items-center justify-between">
                      <span className="text-xs font-mono text-[#777]">
                        PDF Record
                      </span>
                      <button 
                        onClick={() => alert(`Downloading ${seat.title}`)}
                        className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1.5 cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download Matrix</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
