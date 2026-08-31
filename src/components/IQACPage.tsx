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
  ChevronDown,
  Sparkles,
  Laptop,
  Lightbulb,
  FolderArchive,
  Camera,
  Scale,
  HeartHandshake,
  BookMarked,
  UserCheck,
  TrendingUp,
  BarChart3,
  Wallet,
  ScrollText,
  ClipboardList,
  HandHelping,
  Accessibility,
  Microscope,
  ShieldAlert
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
  const [openAccordions, setOpenAccordions] = useState<string[]>(["aqar"]);

  const toggleAccordion = (id: string) => {
    setOpenAccordions(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

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

  // Data for Section 8: Quality Mandates & Institutional Compliance
  const aqarData = {
    annualReports: [
      { year: "2022-23", title: "AQAR 2022-23" },
      { year: "2021-22", title: "AQAR 2021-22" },
      { year: "2020-21", title: "AQAR 2020-21" },
      { year: "2019-20", title: "AQAR 2019-20" },
      { year: "2018-19", title: "AQAR 2018-19" },
      { year: "2017-18", title: "AQAR 2017-18" }
    ],
    criteria: [
      { title: "6.5.1", desc: "Internal Quality Assurance System & Quality Initiatives" },
      { title: "Institutional Strategic Plan", desc: "Institutional Strategic Deployment & Development Plan" }
    ]
  };

  const naac2017Data = [
    {
      title: "Self Study Report",
      cycle: "Cycle 1",
      desc: "Comprehensive NAAC Self Study Report (SSR) 2017 submission."
    }
  ];

  const studentSatisfactionSurveyData = [
    { year: "2022-23", title: "Student Satisfaction Survey 2022-23" },
    { year: "2021-22", title: "Student Satisfaction Survey 2021-22" },
    { year: "2020-21", title: "Student Satisfaction Survey 2020-21" },
    { year: "2019-20", title: "Student Satisfaction Survey 2019-20" }
  ];

  const rtiActData = [
    {
      title: "Statutory Declaration under Section 4(1)(b) of the RTI Act, 2005",
      badge: "RTI ACT-2005",
      desc: "Mandatory public statutory compliance disclosure as prescribed under Section 4(1)(b) of the Right to Information Act, 2005."
    }
  ];

  const infrastructureData = [
    { title: "Classrooms and Labs", category: "Geotagged Photos" },
    { title: "Sensor Based Energy Conservation", category: "Geotagged Photos" },
    { title: "Geotagged Photos 2020-21", category: "Geotagged Photos" },
    { title: "Classrooms and Labs 2022-23", category: "Geotagged Photos" },
    { title: "Classrooms & Master Time Table 2022-23", category: "Geotagged Photos" }
  ];

  const prospectusData = [
    { year: "2019-20", title: "Prospectus 2019-20" },
    { year: "2018-19", title: "Prospectus 2018-19" },
    { year: "2017-18", title: "Prospectus 2017-18" },
    { year: "2016-17", title: "Prospectus 2016-17" },
    { year: "2015-16", title: "Prospectus 2015-16" }
  ];

  const nssActivitiesData = {
    extensionActivities: [
      { year: "2019-20", title: "Extension Activities 2019-20" },
      { year: "2018-19", title: "Extension Activities 2018-19" },
      { year: "2017-18", title: "Extension Activities 2017-18" },
      { year: "2016-17", title: "Extension Activities 2016-17" },
      { year: "2015-16", title: "Extension Activities 2015-16" }
    ],
    swachhBharat: [
      { title: "Swach Bharath", category: "Swach Bharath extension activity" }
    ]
  };

  const internshipData = [
    {
      academicYear: "2022-23",
      label: "22-23",
      items: [
        { title: "Internship 1", desc: "Industry Internship Batch 2022-23" }
      ]
    },
    {
      academicYear: "2021-22",
      label: "21-22",
      items: [
        { title: "Internship 1", desc: "Industry Internship Batch 2021-22 (Phase 1)" },
        { title: "Internship 2", desc: "Industry Internship Batch 2021-22 (Phase 2)" }
      ]
    }
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

      {/* 8. Institutional Quality, Compliance & Extension Records (Accordion Menus) */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-[#FCFBF7] border-b border-[#E5E0D5]">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-10 border-b border-[#E5E0D5] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[#8C1515] font-mono text-xs font-bold tracking-[0.25em] uppercase block mb-2">
                Institutional Repository
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight">
                Quality Mandates & Institutional Compliance
              </h2>
            </div>
            <span className="text-xs font-mono text-[#777] uppercase tracking-wider shrink-0">
              Statutory & Academic Disclosures
            </span>
          </div>

          {/* Accordion Menu List */}
          <div className="space-y-4">

            {/* Accordion 1: AQAR */}
            <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${openAccordions.includes("aqar") ? "bg-white border-[#8C1515]/30 shadow-sm" : "bg-white border-[#DCD6C8] hover:border-[#8C1515]/40"}`}>
              <button
                onClick={() => toggleAccordion("aqar")}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center space-x-4 min-w-0 pr-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${openAccordions.includes("aqar") ? "bg-[#8C1515] text-white" : "bg-[#8C1515]/10 text-[#8C1515] group-hover:bg-[#8C1515] group-hover:text-white"}`}>
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C1515] block mb-0.5">
                      Annual Quality Assurance
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors">
                      AQAR (Annual Quality Assurance Report)
                    </h3>
                  </div>
                </div>
                <div className="flex items-center space-x-3 shrink-0">
                  <span className="hidden sm:inline-block text-xs font-mono text-[#777] bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#E5E0D5]">
                    2017 - 2023 & Criteria 6.5.1
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 ${openAccordions.includes("aqar") ? "bg-[#8C1515]/10 text-[#8C1515] rotate-180" : "bg-[#FAF8F5] text-[#666]"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {openAccordions.includes("aqar") && (
                <div className="p-6 sm:p-8 pt-2 border-t border-[#E5E0D5] bg-[#FAF8F5]/40 space-y-8 animate-fade-in">
                  {/* Annual AQAR Reports */}
                  <div className="space-y-4">
                    <h4 className="font-serif font-bold text-base sm:text-lg text-[#1A1A1A]">
                      AQAR Submissions by Academic Year
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                      {aqarData.annualReports.map((aqar, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center justify-between p-4 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 hover:shadow-xs transition-all group"
                        >
                          <div className="flex items-center space-x-3 min-w-0 pr-2">
                            <span className="font-mono text-[10px] font-bold text-[#8C1515] bg-[#8C1515]/5 px-2 py-0.5 rounded border border-[#8C1515]/10 shrink-0">
                              {aqar.year}
                            </span>
                            <span className="text-sm font-semibold text-[#1A1A1A] truncate group-hover:text-[#8C1515] transition-colors">
                              {aqar.title}
                            </span>
                          </div>
                          <button
                            onClick={() => alert(`Downloading ${aqar.title} (PDF)`)}
                            className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-lg border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>PDF</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Criteria Section */}
                  <div className="pt-6 border-t border-[#E5E0D5] space-y-4">
                    <div className="flex items-center space-x-2">
                      <FileCheck2 className="w-4 h-4 text-[#8C1515]" />
                      <h4 className="font-serif font-bold text-base sm:text-lg text-[#1A1A1A]">
                        Criteria Documentation & Strategic Plan
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {aqarData.criteria.map((crit, cIdx) => (
                        <div 
                          key={cIdx}
                          className="flex items-center justify-between p-4 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 hover:shadow-xs transition-all group"
                        >
                          <div className="space-y-0.5 min-w-0 pr-3">
                            <h5 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors">
                              {crit.title}
                            </h5>
                            <p className="text-xs text-[#666] font-mono truncate">
                              {crit.desc}
                            </p>
                          </div>
                          <button
                            onClick={() => alert(`Downloading ${crit.title} (PDF)`)}
                            className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#8C1515] bg-[#FAF8F5] hover:bg-[#8C1515] hover:text-white px-3 py-1.5 rounded-lg border border-[#E5E0D5] hover:border-[#8C1515] transition-all cursor-pointer shrink-0"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>PDF</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 2: NAAC 2017 */}
            <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${openAccordions.includes("naac2017") ? "bg-white border-[#8C1515]/30 shadow-sm" : "bg-white border-[#DCD6C8] hover:border-[#8C1515]/40"}`}>
              <button
                onClick={() => toggleAccordion("naac2017")}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center space-x-4 min-w-0 pr-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${openAccordions.includes("naac2017") ? "bg-[#8C1515] text-white" : "bg-[#8C1515]/10 text-[#8C1515] group-hover:bg-[#8C1515] group-hover:text-white"}`}>
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C1515] block mb-0.5">
                      Accreditation Archive
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors">
                      NAAC 2017 (NAAC SSR-2017)
                    </h3>
                  </div>
                </div>
                <div className="flex items-center space-x-3 shrink-0">
                  <span className="hidden sm:inline-block text-xs font-mono text-[#777] bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#E5E0D5]">
                    Self Study Report
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 ${openAccordions.includes("naac2017") ? "bg-[#8C1515]/10 text-[#8C1515] rotate-180" : "bg-[#FAF8F5] text-[#666]"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {openAccordions.includes("naac2017") && (
                <div className="p-6 sm:p-8 pt-2 border-t border-[#E5E0D5] bg-[#FAF8F5]/40 animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {naac2017Data.map((doc, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center justify-between p-5 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 hover:shadow-xs transition-all group"
                      >
                        <div className="flex items-center space-x-3.5 min-w-0 pr-3">
                          <div className="w-10 h-10 rounded-xl bg-[#8C1515]/10 text-[#8C1515] flex items-center justify-center shrink-0 group-hover:bg-[#8C1515] group-hover:text-white transition-colors">
                            <GraduationCap className="w-5 h-5" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center space-x-2 mb-0.5">
                              <span className="font-mono text-[10px] font-bold text-[#8C1515] bg-[#8C1515]/5 px-2 py-0.5 rounded border border-[#8C1515]/10">
                                {doc.cycle}
                              </span>
                            </div>
                            <h4 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors truncate">
                              {doc.title}
                            </h4>
                            <p className="text-xs text-[#666] font-mono truncate">
                              {doc.desc}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => alert(`Downloading NAAC 2017: ${doc.title} (PDF)`)}
                          className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#8C1515] bg-[#FAF8F5] hover:bg-[#8C1515] hover:text-white px-3.5 py-2 rounded-lg border border-[#E5E0D5] hover:border-[#8C1515] transition-all cursor-pointer shadow-2xs shrink-0"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download PDF</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 3: Student Satisfaction Survey */}
            <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${openAccordions.includes("sss") ? "bg-white border-[#8C1515]/30 shadow-sm" : "bg-white border-[#DCD6C8] hover:border-[#8C1515]/40"}`}>
              <button
                onClick={() => toggleAccordion("sss")}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center space-x-4 min-w-0 pr-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${openAccordions.includes("sss") ? "bg-[#8C1515] text-white" : "bg-[#8C1515]/10 text-[#8C1515] group-hover:bg-[#8C1515] group-hover:text-white"}`}>
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C1515] block mb-0.5">
                      Feedback & Evaluation
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors">
                      Student Satisfaction Survey
                    </h3>
                  </div>
                </div>
                <div className="flex items-center space-x-3 shrink-0">
                  <span className="hidden sm:inline-block text-xs font-mono text-[#777] bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#E5E0D5]">
                    4 Reports (2019 - 2023)
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 ${openAccordions.includes("sss") ? "bg-[#8C1515]/10 text-[#8C1515] rotate-180" : "bg-[#FAF8F5] text-[#666]"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {openAccordions.includes("sss") && (
                <div className="p-6 sm:p-8 pt-2 border-t border-[#E5E0D5] bg-[#FAF8F5]/40 animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {studentSatisfactionSurveyData.map((sss, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center justify-between p-4 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 hover:shadow-xs transition-all group"
                      >
                        <div className="flex items-center space-x-3 min-w-0 pr-2">
                          <span className="font-mono text-[10px] font-bold text-[#8C1515] bg-[#8C1515]/5 px-2 py-0.5 rounded border border-[#8C1515]/10 shrink-0">
                            {sss.year}
                          </span>
                          <span className="text-sm font-semibold text-[#1A1A1A] truncate group-hover:text-[#8C1515] transition-colors">
                            {sss.title}
                          </span>
                        </div>
                        <button
                          onClick={() => alert(`Downloading ${sss.title} (PDF)`)}
                          className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-lg border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>PDF</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 4: RTI ACT, 2005 */}
            <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${openAccordions.includes("rti") ? "bg-white border-[#8C1515]/30 shadow-sm" : "bg-white border-[#DCD6C8] hover:border-[#8C1515]/40"}`}>
              <button
                onClick={() => toggleAccordion("rti")}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center space-x-4 min-w-0 pr-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${openAccordions.includes("rti") ? "bg-[#8C1515] text-white" : "bg-[#8C1515]/10 text-[#8C1515] group-hover:bg-[#8C1515] group-hover:text-white"}`}>
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C1515] block mb-0.5">
                      Statutory Compliance
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors">
                      RTI Act, 2005
                    </h3>
                  </div>
                </div>
                <div className="flex items-center space-x-3 shrink-0">
                  <span className="hidden sm:inline-block text-xs font-mono text-[#777] bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#E5E0D5]">
                    Section 4(1)(b)
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 ${openAccordions.includes("rti") ? "bg-[#8C1515]/10 text-[#8C1515] rotate-180" : "bg-[#FAF8F5] text-[#666]"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {openAccordions.includes("rti") && (
                <div className="p-6 sm:p-8 pt-2 border-t border-[#E5E0D5] bg-[#FAF8F5]/40 animate-fade-in">
                  {rtiActData.map((rti, idx) => (
                    <div 
                      key={idx}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 hover:shadow-xs transition-all group gap-4"
                    >
                      <div className="space-y-2 min-w-0">
                        <span className="inline-block font-mono text-[10px] font-bold text-[#8C1515] bg-[#8C1515]/5 px-2.5 py-1 rounded border border-[#8C1515]/10">
                          {rti.badge}
                        </span>
                        <h4 className="font-serif font-bold text-lg text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors leading-snug">
                          {rti.title}
                        </h4>
                        <p className="text-xs text-[#666] font-mono">
                          {rti.desc}
                        </p>
                      </div>
                      <button
                        onClick={() => alert(`Downloading ${rti.title} (PDF)`)}
                        className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#8C1515] bg-[#FAF8F5] hover:bg-[#8C1515] hover:text-white px-4 py-2.5 rounded-lg border border-[#E5E0D5] hover:border-[#8C1515] transition-all cursor-pointer shadow-2xs shrink-0 self-start sm:self-center"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download Statutory PDF</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Accordion 5: INFRASTRUCTURE */}
            <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${openAccordions.includes("infrastructure") ? "bg-white border-[#8C1515]/30 shadow-sm" : "bg-white border-[#DCD6C8] hover:border-[#8C1515]/40"}`}>
              <button
                onClick={() => toggleAccordion("infrastructure")}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center space-x-4 min-w-0 pr-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${openAccordions.includes("infrastructure") ? "bg-[#8C1515] text-white" : "bg-[#8C1515]/10 text-[#8C1515] group-hover:bg-[#8C1515] group-hover:text-white"}`}>
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C1515] block mb-0.5">
                      Campus & Facilities
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors">
                      Infrastructure
                    </h3>
                  </div>
                </div>
                <div className="flex items-center space-x-3 shrink-0">
                  <span className="hidden sm:inline-block text-xs font-mono text-[#777] bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#E5E0D5]">
                    Geotagged Photos
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 ${openAccordions.includes("infrastructure") ? "bg-[#8C1515]/10 text-[#8C1515] rotate-180" : "bg-[#FAF8F5] text-[#666]"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {openAccordions.includes("infrastructure") && (
                <div className="p-6 sm:p-8 pt-2 border-t border-[#E5E0D5] bg-[#FAF8F5]/40 space-y-4 animate-fade-in">
                  <div className="flex items-center space-x-2">
                    <Camera className="w-4 h-4 text-[#8C1515]" />
                    <h4 className="font-serif font-bold text-base sm:text-lg text-[#1A1A1A]">
                      Geotagged Photos
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {infrastructureData.map((infra, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center justify-between p-4 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 hover:shadow-xs transition-all group"
                      >
                        <div className="flex items-center space-x-3 min-w-0 pr-2">
                          <div className="w-8 h-8 rounded-lg bg-[#8C1515]/10 text-[#8C1515] flex items-center justify-center shrink-0 group-hover:bg-[#8C1515] group-hover:text-white transition-colors">
                            <Building2 className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-semibold text-[#1A1A1A] truncate group-hover:text-[#8C1515] transition-colors">
                            {infra.title}
                          </span>
                        </div>
                        <button
                          onClick={() => alert(`Downloading Geotagged Document: ${infra.title} (PDF)`)}
                          className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-lg border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>PDF</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 6: PROSPECTUS */}
            <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${openAccordions.includes("prospectus") ? "bg-white border-[#8C1515]/30 shadow-sm" : "bg-white border-[#DCD6C8] hover:border-[#8C1515]/40"}`}>
              <button
                onClick={() => toggleAccordion("prospectus")}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center space-x-4 min-w-0 pr-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${openAccordions.includes("prospectus") ? "bg-[#8C1515] text-white" : "bg-[#8C1515]/10 text-[#8C1515] group-hover:bg-[#8C1515] group-hover:text-white"}`}>
                    <BookMarked className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C1515] block mb-0.5">
                      Publications Archive
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors">
                      Prospectus
                    </h3>
                  </div>
                </div>
                <div className="flex items-center space-x-3 shrink-0">
                  <span className="hidden sm:inline-block text-xs font-mono text-[#777] bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#E5E0D5]">
                    2015 - 2020 Archive
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 ${openAccordions.includes("prospectus") ? "bg-[#8C1515]/10 text-[#8C1515] rotate-180" : "bg-[#FAF8F5] text-[#666]"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {openAccordions.includes("prospectus") && (
                <div className="p-6 sm:p-8 pt-2 border-t border-[#E5E0D5] bg-[#FAF8F5]/40 animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {prospectusData.map((pros, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center justify-between p-4 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 hover:shadow-xs transition-all group"
                      >
                        <div className="flex items-center space-x-3 min-w-0 pr-2">
                          <span className="font-mono text-[10px] font-bold text-[#8C1515] bg-[#8C1515]/5 px-2 py-0.5 rounded border border-[#8C1515]/10 shrink-0">
                            {pros.year}
                          </span>
                          <span className="text-sm font-semibold text-[#1A1A1A] truncate group-hover:text-[#8C1515] transition-colors">
                            {pros.title}
                          </span>
                        </div>
                        <button
                          onClick={() => alert(`Downloading ${pros.title} (PDF)`)}
                          className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-lg border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>PDF</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 7: NSS ACTIVITIES */}
            <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${openAccordions.includes("nss") ? "bg-white border-[#8C1515]/30 shadow-sm" : "bg-white border-[#DCD6C8] hover:border-[#8C1515]/40"}`}>
              <button
                onClick={() => toggleAccordion("nss")}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center space-x-4 min-w-0 pr-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${openAccordions.includes("nss") ? "bg-[#8C1515] text-white" : "bg-[#8C1515]/10 text-[#8C1515] group-hover:bg-[#8C1515] group-hover:text-white"}`}>
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C1515] block mb-0.5">
                      National Service Scheme
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors">
                      NSS Activities
                    </h3>
                  </div>
                </div>
                <div className="flex items-center space-x-3 shrink-0">
                  <span className="hidden sm:inline-block text-xs font-mono text-[#777] bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#E5E0D5]">
                    Extension & Swachh Bharat
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 ${openAccordions.includes("nss") ? "bg-[#8C1515]/10 text-[#8C1515] rotate-180" : "bg-[#FAF8F5] text-[#666]"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {openAccordions.includes("nss") && (
                <div className="p-6 sm:p-8 pt-2 border-t border-[#E5E0D5] bg-[#FAF8F5]/40 space-y-8 animate-fade-in">
                  {/* Extension Activities */}
                  <div className="space-y-4">
                    <h4 className="font-serif font-bold text-base sm:text-lg text-[#1A1A1A]">
                      Extension Activities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                      {nssActivitiesData.extensionActivities.map((act, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center justify-between p-4 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 hover:shadow-xs transition-all group"
                        >
                          <div className="flex items-center space-x-3 min-w-0 pr-2">
                            <span className="font-mono text-[10px] font-bold text-[#8C1515] bg-[#8C1515]/5 px-2 py-0.5 rounded border border-[#8C1515]/10 shrink-0">
                              {act.year}
                            </span>
                            <span className="text-sm font-semibold text-[#1A1A1A] truncate group-hover:text-[#8C1515] transition-colors">
                              {act.title}
                            </span>
                          </div>
                          <button
                            onClick={() => alert(`Downloading NSS: ${act.title} (PDF)`)}
                            className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-lg border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>PDF</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Swachh Bharat */}
                  <div className="pt-6 border-t border-[#E5E0D5] space-y-4">
                    <h4 className="font-serif font-bold text-base sm:text-lg text-[#1A1A1A]">
                      Swach Bharath extension activity
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {nssActivitiesData.swachhBharat.map((sb, sIdx) => (
                        <div 
                          key={sIdx}
                          className="flex items-center justify-between p-4 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 hover:shadow-xs transition-all group"
                        >
                          <div className="flex items-center space-x-3 min-w-0 pr-3">
                            <div className="w-9 h-9 rounded-lg bg-[#8C1515]/10 text-[#8C1515] flex items-center justify-center shrink-0 group-hover:bg-[#8C1515] group-hover:text-white transition-colors">
                              <HeartHandshake className="w-4 h-4" />
                            </div>
                            <div className="min-w-0">
                              <h5 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors truncate">
                                {sb.title}
                              </h5>
                              <span className="text-xs font-mono text-[#777]">
                                {sb.category}
                              </span>
                            </div>
                          </div>
                          <button
                            onClick={() => alert(`Downloading ${sb.title} (PDF)`)}
                            className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#8C1515] bg-[#FAF8F5] hover:bg-[#8C1515] hover:text-white px-3.5 py-2 rounded-lg border border-[#E5E0D5] hover:border-[#8C1515] transition-all cursor-pointer shrink-0"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>PDF</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 8: INTERNSHIP */}
            <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${openAccordions.includes("internship") ? "bg-white border-[#8C1515]/30 shadow-sm" : "bg-white border-[#DCD6C8] hover:border-[#8C1515]/40"}`}>
              <button
                onClick={() => toggleAccordion("internship")}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center space-x-4 min-w-0 pr-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${openAccordions.includes("internship") ? "bg-[#8C1515] text-white" : "bg-[#8C1515]/10 text-[#8C1515] group-hover:bg-[#8C1515] group-hover:text-white"}`}>
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C1515] block mb-0.5">
                      Experiential Learning
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors">
                      Internship
                    </h3>
                  </div>
                </div>
                <div className="flex items-center space-x-3 shrink-0">
                  <span className="hidden sm:inline-block text-xs font-mono text-[#777] bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#E5E0D5]">
                    21-22 & 22-23 Batches
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 ${openAccordions.includes("internship") ? "bg-[#8C1515]/10 text-[#8C1515] rotate-180" : "bg-[#FAF8F5] text-[#666]"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {openAccordions.includes("internship") && (
                <div className="p-6 sm:p-8 pt-2 border-t border-[#E5E0D5] bg-[#FAF8F5]/40 space-y-6 animate-fade-in">
                  {internshipData.map((batch, bIdx) => (
                    <div key={bIdx} className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-xs font-bold text-[#8C1515] bg-[#8C1515]/5 px-2.5 py-1 rounded border border-[#8C1515]/10">
                          {batch.label}
                        </span>
                        <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                          Academic Year {batch.academicYear}
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {batch.items.map((item, iIdx) => (
                          <div 
                            key={iIdx}
                            className="flex items-center justify-between p-4 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 hover:shadow-xs transition-all group"
                          >
                            <div className="flex items-center space-x-3 min-w-0 pr-3">
                              <div className="w-8 h-8 rounded-lg bg-[#8C1515]/10 text-[#8C1515] flex items-center justify-center shrink-0 group-hover:bg-[#8C1515] group-hover:text-white transition-colors">
                                <Briefcase className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <h5 className="font-serif font-bold text-sm text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors truncate">
                                  {item.title}
                                </h5>
                                <p className="text-xs text-[#666] font-mono truncate">
                                  {item.desc}
                                </p>
                              </div>
                            </div>
                            <button
                              onClick={() => alert(`Downloading ${batch.label} - ${item.title} (PDF)`)}
                              className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-lg border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                            >
                              <Download className="w-3.5 h-3.5" />
                              <span>PDF</span>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Accordion 9: Student Support */}
            <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${openAccordions.includes("student-support") ? "bg-white border-[#8C1515]/30 shadow-sm" : "bg-white border-[#DCD6C8] hover:border-[#8C1515]/40"}`}>
              <button
                onClick={() => toggleAccordion("student-support")}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center space-x-4 min-w-0 pr-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${openAccordions.includes("student-support") ? "bg-[#8C1515] text-white" : "bg-[#8C1515]/10 text-[#8C1515] group-hover:bg-[#8C1515] group-hover:text-white"}`}>
                    <HandHelping className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C1515] block mb-0.5">
                      Student Welfare & Growth
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors">
                      Student Support
                    </h3>
                  </div>
                </div>
                <div className="flex items-center space-x-3 shrink-0">
                  <span className="hidden sm:inline-block text-xs font-mono text-[#777] bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#E5E0D5]">
                    Mentoring & Skill Enhancement
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 ${openAccordions.includes("student-support") ? "bg-[#8C1515]/10 text-[#8C1515] rotate-180" : "bg-[#FAF8F5] text-[#666]"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {openAccordions.includes("student-support") && (
                <div className="p-6 sm:p-8 pt-2 border-t border-[#E5E0D5] bg-[#FAF8F5]/40 space-y-6 animate-fade-in">
                  
                  {/* Capacity Building & Skills Enhancement */}
                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                      Capacity Building & Skills Enhancement
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { title: "Capacity building & Skills Enhancement", tag: "General" },
                        { title: "Capacity building & Skills Enhancement -2021-22", tag: "2021-22" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 hover:shadow-xs transition-all group">
                          <div className="flex items-center space-x-3 min-w-0 pr-2">
                            <span className="font-mono text-[10px] font-bold text-[#8C1515] bg-[#8C1515]/5 px-2 py-0.5 rounded border border-[#8C1515]/10 shrink-0">
                              {item.tag}
                            </span>
                            <span className="text-sm font-semibold text-[#1A1A1A] truncate group-hover:text-[#8C1515] transition-colors">
                              {item.title}
                            </span>
                          </div>
                          <button
                            onClick={() => alert(`Downloading ${item.title} (PDF)`)}
                            className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-lg border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>PDF</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Placement Summary & Mentoring */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="space-y-2">
                      <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                        Placement Summary
                      </h4>
                      <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 hover:shadow-xs transition-all group">
                        <div className="flex items-center space-x-3 min-w-0 pr-2">
                          <Briefcase className="w-4 h-4 text-[#8C1515] shrink-0" />
                          <span className="text-sm font-semibold text-[#1A1A1A] truncate group-hover:text-[#8C1515] transition-colors">
                            Placement Summary
                          </span>
                        </div>
                        <button
                          onClick={() => alert("Downloading Placement Summary (PDF)")}
                          className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-lg border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>PDF</span>
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                        Mentoring
                      </h4>
                      <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 hover:shadow-xs transition-all group">
                        <div className="flex items-center space-x-3 min-w-0 pr-2">
                          <Users className="w-4 h-4 text-[#8C1515] shrink-0" />
                          <span className="text-sm font-semibold text-[#1A1A1A] truncate group-hover:text-[#8C1515] transition-colors">
                            Mentor-Mentee Report
                          </span>
                        </div>
                        <button
                          onClick={() => alert("Downloading Mentor-Mentee Report (PDF)")}
                          className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-lg border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>PDF</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Experiential Learning, Student List, Value Added Courses */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    {/* Experiential Learning */}
                    <div className="space-y-2">
                      <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                        Experiential Learning
                      </h4>
                      <div className="space-y-2">
                        {["Courses", "Certificates"].map((sub, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 transition-all group">
                            <span className="text-xs font-semibold text-[#1A1A1A] truncate group-hover:text-[#8C1515]">
                              {sub}
                            </span>
                            <button
                              onClick={() => alert(`Downloading Experiential Learning: ${sub} (PDF)`)}
                              className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2 py-1 rounded-md border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                            >
                              <Download className="w-3 h-3" />
                              <span>PDF</span>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Student List */}
                    <div className="space-y-2">
                      <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                        Student List
                      </h4>
                      <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 transition-all group">
                        <span className="text-xs font-semibold text-[#1A1A1A] truncate group-hover:text-[#8C1515]">
                          Student List
                        </span>
                        <button
                          onClick={() => alert("Downloading Student List (PDF)")}
                          className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2 py-1 rounded-md border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                            >
                          <Download className="w-3 h-3" />
                          <span>PDF</span>
                        </button>
                      </div>
                    </div>

                    {/* Value Added Courses */}
                    <div className="space-y-2">
                      <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                        Value Added Courses
                      </h4>
                      <div className="space-y-2">
                        {["Report", "Certificates"].map((vac, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 transition-all group">
                            <span className="text-xs font-semibold text-[#1A1A1A] truncate group-hover:text-[#8C1515]">
                              {vac}
                            </span>
                            <button
                              onClick={() => alert(`Downloading Value Added Courses: ${vac} (PDF)`)}
                              className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2 py-1 rounded-md border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                            >
                              <Download className="w-3 h-3" />
                              <span>PDF</span>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              )}
            </div>

            {/* Accordion 10: NIRF */}
            <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${openAccordions.includes("nirf") ? "bg-white border-[#8C1515]/30 shadow-sm" : "bg-white border-[#DCD6C8] hover:border-[#8C1515]/40"}`}>
              <button
                onClick={() => toggleAccordion("nirf")}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center space-x-4 min-w-0 pr-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${openAccordions.includes("nirf") ? "bg-[#8C1515] text-white" : "bg-[#8C1515]/10 text-[#8C1515] group-hover:bg-[#8C1515] group-hover:text-white"}`}>
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C1515] block mb-0.5">
                      National Institutional Ranking
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors">
                      NIRF
                    </h3>
                  </div>
                </div>
                <div className="flex items-center space-x-3 shrink-0">
                  <span className="hidden sm:inline-block text-xs font-mono text-[#777] bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#E5E0D5]">
                    MHRD Engineering Reports
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 ${openAccordions.includes("nirf") ? "bg-[#8C1515]/10 text-[#8C1515] rotate-180" : "bg-[#FAF8F5] text-[#666]"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {openAccordions.includes("nirf") && (
                <div className="p-6 sm:p-8 pt-2 border-t border-[#E5E0D5] bg-[#FAF8F5]/40 space-y-6 animate-fade-in">
                  <div className="p-4 rounded-xl bg-white border border-[#E5E0D5] space-y-1">
                    <h4 className="font-serif font-bold text-sm sm:text-base text-[#1A1A1A] uppercase tracking-wide">
                      Report of NIRF Data Capturing System: Engineering
                    </h4>
                    <p className="text-xs text-[#666] font-mono">
                      Ministry of Human Resource Development, Government of India, New Delhi
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {[
                      { year: "2025", title: "2025 Engineering" },
                      { year: "2024", title: "2024 Engineering" },
                      { year: "2022", title: "2022 Engineering" },
                      { year: "2021", title: "2021 Engineering" },
                      { year: "2020", title: "2020 Engineering" }
                    ].map((nirf, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center justify-between p-4 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 hover:shadow-xs transition-all group"
                      >
                        <div className="flex items-center space-x-3 min-w-0 pr-2">
                          <span className="font-mono text-[10px] font-bold text-[#8C1515] bg-[#8C1515]/5 px-2 py-0.5 rounded border border-[#8C1515]/10 shrink-0">
                            {nirf.year}
                          </span>
                          <span className="text-sm font-semibold text-[#1A1A1A] truncate group-hover:text-[#8C1515] transition-colors">
                            {nirf.title}
                          </span>
                        </div>
                        <button
                          onClick={() => alert(`Downloading NIRF ${nirf.title} (PDF)`)}
                          className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-lg border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>PDF</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 11: Best Practices */}
            <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${openAccordions.includes("best-practices") ? "bg-white border-[#8C1515]/30 shadow-sm" : "bg-white border-[#DCD6C8] hover:border-[#8C1515]/40"}`}>
              <button
                onClick={() => toggleAccordion("best-practices")}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center space-x-4 min-w-0 pr-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${openAccordions.includes("best-practices") ? "bg-[#8C1515] text-white" : "bg-[#8C1515]/10 text-[#8C1515] group-hover:bg-[#8C1515] group-hover:text-white"}`}>
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C1515] block mb-0.5">
                      Institutional Initiatives
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors">
                      Best Practices
                    </h3>
                  </div>
                </div>
                <div className="flex items-center space-x-3 shrink-0">
                  <span className="hidden sm:inline-block text-xs font-mono text-[#777] bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#E5E0D5]">
                    2019 - 2024 Criteria Records
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 ${openAccordions.includes("best-practices") ? "bg-[#8C1515]/10 text-[#8C1515] rotate-180" : "bg-[#FAF8F5] text-[#666]"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {openAccordions.includes("best-practices") && (
                <div className="p-6 sm:p-8 pt-2 border-t border-[#E5E0D5] bg-[#FAF8F5]/40 space-y-6 animate-fade-in">
                  
                  {/* General Best Practices */}
                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                      Institutional Best Practices & Distinctiveness
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {[
                        "2019-20",
                        "Institution Distinctiveness",
                        "2020-21",
                        "Gender Equity",
                        "Facilities for Women",
                        "Constitutional Obligations",
                        "Annual Gender Sensitization Plan",
                        "Specific Facilities for Women",
                        "Best Practice 1 2021-22"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 transition-all group">
                          <span className="text-xs font-semibold text-[#1A1A1A] truncate group-hover:text-[#8C1515]">
                            {item}
                          </span>
                          <button
                            onClick={() => alert(`Downloading Best Practice: ${item} (PDF)`)}
                            className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2 py-1 rounded-md border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                          >
                            <Download className="w-3 h-3" />
                            <span>PDF</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 2021-22 */}
                  <div className="pt-4 border-t border-[#E5E0D5] space-y-3">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-xs font-bold text-[#8C1515] bg-[#8C1515]/5 px-2.5 py-1 rounded border border-[#8C1515]/10">
                        2021-22
                      </span>
                      <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                        Academic Year 2021-22 Criteria & Reports
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {[
                        "7.1.9",
                        "7.2.1",
                        "7.1.1a",
                        "7.1.1 Gender sensitization",
                        "7.1.1 Specific facilities for women",
                        "7.1.2 Sensor based energy conservation",
                        "Code of Conduct committee",
                        "HKBK Employee Handbook",
                        "7.2.1 Best Practices",
                        "7.3.1 Institute Distinctiveness"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 transition-all group">
                          <span className="text-xs font-semibold text-[#1A1A1A] truncate group-hover:text-[#8C1515]">
                            {item}
                          </span>
                          <button
                            onClick={() => alert(`Downloading 2021-22: ${item} (PDF)`)}
                            className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2 py-1 rounded-md border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                          >
                            <Download className="w-3 h-3" />
                            <span>PDF</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 2022-23 & 2023-24 */}
                  <div className="pt-4 border-t border-[#E5E0D5] grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* 2022-23 */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-xs font-bold text-[#8C1515] bg-[#8C1515]/5 px-2.5 py-1 rounded border border-[#8C1515]/10">
                          2022-23
                        </span>
                        <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                          Academic Year 2022-23
                        </h4>
                      </div>
                      <div className="space-y-2">
                        {[
                          "7.1.1 Gender sensitization",
                          "7.1.3 Waste Management",
                          "7.2.1 Best Practices"
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 transition-all group">
                            <span className="text-xs font-semibold text-[#1A1A1A] truncate group-hover:text-[#8C1515]">
                              {item}
                            </span>
                            <button
                              onClick={() => alert(`Downloading 2022-23: ${item} (PDF)`)}
                              className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2 py-1 rounded-md border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                            >
                              <Download className="w-3 h-3" />
                              <span>PDF</span>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 2023-24 */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-xs font-bold text-[#8C1515] bg-[#8C1515]/5 px-2.5 py-1 rounded border border-[#8C1515]/10">
                          2023-24
                        </span>
                        <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                          Academic Year 2023-24
                        </h4>
                      </div>
                      <div className="space-y-2">
                        {[
                          "7.2.1 Best Practices"
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 transition-all group">
                            <span className="text-xs font-semibold text-[#1A1A1A] truncate group-hover:text-[#8C1515]">
                              {item}
                            </span>
                            <button
                              onClick={() => alert(`Downloading 2023-24: ${item} (PDF)`)}
                              className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2 py-1 rounded-md border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                            >
                              <Download className="w-3 h-3" />
                              <span>PDF</span>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              )}
            </div>

            {/* Accordion 12: IPR */}
            <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${openAccordions.includes("ipr") ? "bg-white border-[#8C1515]/30 shadow-sm" : "bg-white border-[#DCD6C8] hover:border-[#8C1515]/40"}`}>
              <button
                onClick={() => toggleAccordion("ipr")}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center space-x-4 min-w-0 pr-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${openAccordions.includes("ipr") ? "bg-[#8C1515] text-white" : "bg-[#8C1515]/10 text-[#8C1515] group-hover:bg-[#8C1515] group-hover:text-white"}`}>
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C1515] block mb-0.5">
                      Intellectual Property Rights
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors">
                      IPR
                    </h3>
                  </div>
                </div>
                <div className="flex items-center space-x-3 shrink-0">
                  <span className="hidden sm:inline-block text-xs font-mono text-[#777] bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#E5E0D5]">
                    Patent & Innovation Cell
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 ${openAccordions.includes("ipr") ? "bg-[#8C1515]/10 text-[#8C1515] rotate-180" : "bg-[#FAF8F5] text-[#666]"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {openAccordions.includes("ipr") && (
                <div className="p-6 sm:p-8 pt-2 border-t border-[#E5E0D5] bg-[#FAF8F5]/40 animate-fade-in">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 transition-all group max-w-md">
                    <div className="flex items-center space-x-3 min-w-0 pr-2">
                      <span className="font-mono text-[10px] font-bold text-[#8C1515] bg-[#8C1515]/5 px-2 py-0.5 rounded border border-[#8C1515]/10 shrink-0">
                        2020-21
                      </span>
                      <span className="text-sm font-semibold text-[#1A1A1A] truncate group-hover:text-[#8C1515] transition-colors">
                        IPR 20-21
                      </span>
                    </div>
                    <button
                      onClick={() => alert("Downloading IPR 20-21 (PDF)")}
                      className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-lg border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 13: Feedback */}
            <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${openAccordions.includes("feedback") ? "bg-white border-[#8C1515]/30 shadow-sm" : "bg-white border-[#DCD6C8] hover:border-[#8C1515]/40"}`}>
              <button
                onClick={() => toggleAccordion("feedback")}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center space-x-4 min-w-0 pr-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${openAccordions.includes("feedback") ? "bg-[#8C1515] text-white" : "bg-[#8C1515]/10 text-[#8C1515] group-hover:bg-[#8C1515] group-hover:text-white"}`}>
                    <ClipboardList className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C1515] block mb-0.5">
                      Curriculum & Evaluation
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors">
                      Feedback
                    </h3>
                  </div>
                </div>
                <div className="flex items-center space-x-3 shrink-0">
                  <span className="hidden sm:inline-block text-xs font-mono text-[#777] bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#E5E0D5]">
                    Curriculum Feedback
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 ${openAccordions.includes("feedback") ? "bg-[#8C1515]/10 text-[#8C1515] rotate-180" : "bg-[#FAF8F5] text-[#666]"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {openAccordions.includes("feedback") && (
                <div className="p-6 sm:p-8 pt-2 border-t border-[#E5E0D5] bg-[#FAF8F5]/40 space-y-3 animate-fade-in">
                  <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                    Curriculum Feedback
                  </h4>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 transition-all group max-w-md">
                    <div className="flex items-center space-x-3 min-w-0 pr-2">
                      <span className="font-mono text-[10px] font-bold text-[#8C1515] bg-[#8C1515]/5 px-2 py-0.5 rounded border border-[#8C1515]/10 shrink-0">
                        2020-21
                      </span>
                      <span className="text-sm font-semibold text-[#1A1A1A] truncate group-hover:text-[#8C1515] transition-colors">
                        IPR 20-21
                      </span>
                    </div>
                    <button
                      onClick={() => alert("Downloading Curriculum Feedback: IPR 20-21 (PDF)")}
                      className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-lg border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 14: Accounts */}
            <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${openAccordions.includes("accounts") ? "bg-white border-[#8C1515]/30 shadow-sm" : "bg-white border-[#DCD6C8] hover:border-[#8C1515]/40"}`}>
              <button
                onClick={() => toggleAccordion("accounts")}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center space-x-4 min-w-0 pr-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${openAccordions.includes("accounts") ? "bg-[#8C1515] text-white" : "bg-[#8C1515]/10 text-[#8C1515] group-hover:bg-[#8C1515] group-hover:text-white"}`}>
                    <Wallet className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C1515] block mb-0.5">
                      Financial Statements
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors">
                      Accounts
                    </h3>
                  </div>
                </div>
                <div className="flex items-center space-x-3 shrink-0">
                  <span className="hidden sm:inline-block text-xs font-mono text-[#777] bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#E5E0D5]">
                    Audit Statement
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 ${openAccordions.includes("accounts") ? "bg-[#8C1515]/10 text-[#8C1515] rotate-180" : "bg-[#FAF8F5] text-[#666]"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {openAccordions.includes("accounts") && (
                <div className="p-6 sm:p-8 pt-2 border-t border-[#E5E0D5] bg-[#FAF8F5]/40 space-y-3 animate-fade-in">
                  <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                    Audit Statement
                  </h4>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 transition-all group max-w-md">
                    <div className="flex items-center space-x-3 min-w-0 pr-2">
                      <span className="font-mono text-[10px] font-bold text-[#8C1515] bg-[#8C1515]/5 px-2 py-0.5 rounded border border-[#8C1515]/10 shrink-0">
                        2023-24
                      </span>
                      <span className="text-sm font-semibold text-[#1A1A1A] truncate group-hover:text-[#8C1515] transition-colors">
                        NAAC-AQAR 2023-24
                      </span>
                    </div>
                    <button
                      onClick={() => alert("Downloading Audit Statement: NAAC-AQAR 2023-24 (PDF)")}
                      className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-lg border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 15: NAAC-AQAR 2023-24 */}
            <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${openAccordions.includes("naac-aqar-2023-24") ? "bg-white border-[#8C1515]/30 shadow-sm" : "bg-white border-[#DCD6C8] hover:border-[#8C1515]/40"}`}>
              <button
                onClick={() => toggleAccordion("naac-aqar-2023-24")}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center space-x-4 min-w-0 pr-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${openAccordions.includes("naac-aqar-2023-24") ? "bg-[#8C1515] text-white" : "bg-[#8C1515]/10 text-[#8C1515] group-hover:bg-[#8C1515] group-hover:text-white"}`}>
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C1515] block mb-0.5">
                      Quality Compliance Archive
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors">
                      NAAC-AQAR 2023-24
                    </h3>
                  </div>
                </div>
                <div className="flex items-center space-x-3 shrink-0">
                  <span className="hidden sm:inline-block text-xs font-mono text-[#777] bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#E5E0D5]">
                    Criteria 1 to 7 Documentation
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 ${openAccordions.includes("naac-aqar-2023-24") ? "bg-[#8C1515]/10 text-[#8C1515] rotate-180" : "bg-[#FAF8F5] text-[#666]"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {openAccordions.includes("naac-aqar-2023-24") && (
                <div className="p-6 sm:p-8 pt-2 border-t border-[#E5E0D5] bg-[#FAF8F5]/40 space-y-6 animate-fade-in">
                  
                  {/* Criteria 1 */}
                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                      Criteria 1
                    </h4>
                    <div className="p-3.5 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 transition-all group flex items-center justify-between max-w-md">
                      <span className="text-xs font-semibold text-[#1A1A1A] group-hover:text-[#8C1515] truncate">
                        1.4.1 Feedback Report
                      </span>
                      <button
                        onClick={() => alert("Downloading Criteria 1: 1.4.1 Feedback Report (PDF)")}
                        className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-md border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                      >
                        <Download className="w-3 h-3" />
                        <span>PDF</span>
                      </button>
                    </div>
                  </div>

                  {/* Criteria 2 */}
                  <div className="pt-4 border-t border-[#E5E0D5] space-y-3">
                    <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                      Criteria 2
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "2.2 Seat matrix",
                        "3.2 Number of Sanctioned posts during the year",
                        "2.6 Annual Report",
                        "2.7 Satisfaction Survey"
                      ].map((item, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 transition-all group flex items-center justify-between">
                          <span className="text-xs font-semibold text-[#1A1A1A] group-hover:text-[#8C1515] truncate pr-2">
                            {item}
                          </span>
                          <button
                            onClick={() => alert(`Downloading Criteria 2: ${item} (PDF)`)}
                            className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-md border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                          >
                            <Download className="w-3 h-3" />
                            <span>PDF</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Criteria 3 & Criteria 4 */}
                  <div className="pt-4 border-t border-[#E5E0D5] grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                        Criteria 3
                      </h4>
                      <div className="p-3.5 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 transition-all group flex items-center justify-between">
                        <span className="text-xs font-semibold text-[#1A1A1A] group-hover:text-[#8C1515] truncate pr-2">
                          Sub criteria 3.1.3 under NAAC Criteria 3
                        </span>
                        <button
                          onClick={() => alert("Downloading Sub criteria 3.1.3 under NAAC Criteria 3 (PDF)")}
                          className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-md border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                        >
                          <Download className="w-3 h-3" />
                          <span>PDF</span>
                        </button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                        Criteria 4
                      </h4>
                      <div className="p-3.5 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 transition-all group flex items-center justify-between">
                        <span className="text-xs font-semibold text-[#1A1A1A] group-hover:text-[#8C1515] truncate pr-2">
                          4.1.3 Link to Geo-Tagged Photos and Master Time Table
                        </span>
                        <button
                          onClick={() => alert("Downloading Criteria 4.1.3 (PDF)")}
                          className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-md border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                        >
                          <Download className="w-3 h-3" />
                          <span>PDF</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Criteria 5 */}
                  <div className="pt-4 border-t border-[#E5E0D5] space-y-3">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-xs font-bold text-[#8C1515] bg-[#8C1515]/5 px-2.5 py-1 rounded border border-[#8C1515]/10">
                        NAAC-AQAR 2023-24 Criteria - 5
                      </span>
                      <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                        Criteria 5
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "5.1.1 Government Scholarship",
                        "5.1.2 Management Scholarship",
                        "5.1.4 CAREER GUIDANCE AND COUNSELLING",
                        "5.1.3 - 1 Soft skill",
                        "5.1.3 - 2 Language and Communication Skill",
                        "5.1.3 - 3 Life Skill ( YOGA)",
                        "5.1.3 - 4 ICT/ Computing Skills",
                        "5.3.2 Student Representation"
                      ].map((item, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 transition-all group flex items-center justify-between">
                          <span className="text-xs font-semibold text-[#1A1A1A] group-hover:text-[#8C1515] truncate pr-2">
                            {item}
                          </span>
                          <button
                            onClick={() => alert(`Downloading Criteria 5: ${item} (PDF)`)}
                            className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-md border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                          >
                            <Download className="w-3 h-3" />
                            <span>PDF</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Criteria 6 & Criteria 7 */}
                  <div className="pt-4 border-t border-[#E5E0D5] grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Criteria 6 */}
                    <div className="space-y-3">
                      <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                        Criteria 6
                      </h4>
                      <div className="space-y-2">
                        {[
                          "6.2.2. Organogram of the Institution",
                          "6.2.2. Employee Service Handbook 2023"
                        ].map((item, idx) => (
                          <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 transition-all group flex items-center justify-between">
                            <span className="text-xs font-semibold text-[#1A1A1A] group-hover:text-[#8C1515] truncate pr-2">
                              {item}
                            </span>
                            <button
                              onClick={() => alert(`Downloading Criteria 6: ${item} (PDF)`)}
                              className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-md border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                            >
                              <Download className="w-3 h-3" />
                              <span>PDF</span>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Criteria 7 */}
                    <div className="space-y-3">
                      <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                        Criteria 7
                      </h4>
                      <div className="space-y-2">
                        {[
                          "Annual Gender Sensitization Action Plan 2023-24 Criteria 7",
                          "7.1.1",
                          "7.1.3"
                        ].map((item, idx) => (
                          <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 transition-all group flex items-center justify-between">
                            <span className="text-xs font-semibold text-[#1A1A1A] group-hover:text-[#8C1515] truncate pr-2">
                              {item}
                            </span>
                            <button
                              onClick={() => alert(`Downloading Criteria 7: ${item} (PDF)`)}
                              className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-md border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                            >
                              <Download className="w-3 h-3" />
                              <span>PDF</span>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              )}
            </div>

            {/* Accordion 16: Equal Opportunity Cell (EOC) */}
            <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${openAccordions.includes("eoc") ? "bg-white border-[#8C1515]/30 shadow-sm" : "bg-white border-[#DCD6C8] hover:border-[#8C1515]/40"}`}>
              <button
                onClick={() => toggleAccordion("eoc")}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center space-x-4 min-w-0 pr-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${openAccordions.includes("eoc") ? "bg-[#8C1515] text-white" : "bg-[#8C1515]/10 text-[#8C1515] group-hover:bg-[#8C1515] group-hover:text-white"}`}>
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C1515] block mb-0.5">
                      Statutory Inclusion Committees
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors">
                      Equal Opportunity Cell (EOC)
                    </h3>
                  </div>
                </div>
                <div className="flex items-center space-x-3 shrink-0">
                  <span className="hidden sm:inline-block text-xs font-mono text-[#777] bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#E5E0D5]">
                    Vision & Inclusivity Cells
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 ${openAccordions.includes("eoc") ? "bg-[#8C1515]/10 text-[#8C1515] rotate-180" : "bg-[#FAF8F5] text-[#666]"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {openAccordions.includes("eoc") && (
                <div className="p-6 sm:p-8 pt-2 border-t border-[#E5E0D5] bg-[#FAF8F5]/40 space-y-6 animate-fade-in">
                  
                  {/* Vision & Mission */}
                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                      Vision & Mission
                    </h4>
                    <div className="p-3.5 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 transition-all group flex items-center justify-between max-w-md">
                      <span className="text-xs font-semibold text-[#1A1A1A] group-hover:text-[#8C1515]">
                        Vision & Mission
                      </span>
                      <button
                        onClick={() => alert("Downloading EOC: Vision & Mission (PDF)")}
                        className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-md border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                      >
                        <Download className="w-3 h-3" />
                        <span>PDF</span>
                      </button>
                    </div>
                  </div>

                  {/* Cells */}
                  <div className="pt-4 border-t border-[#E5E0D5] space-y-3">
                    <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                      Cells
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {[
                        "SC/ST Cell",
                        "OBC Cell",
                        "Women's Cell",
                        "Minority Cell",
                        "Differently abled Cell",
                        "International students Cell",
                        "Counselling and Mentoring Cell",
                        "Gender Sensitization Cell",
                        "Posh Cell",
                        "National service scheme",
                        "Human Studies cell",
                        "Population Studies Cell",
                        "Remedial and Coaching Cell",
                        "Women's study cell"
                      ].map((cell, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 transition-all group flex items-center justify-between">
                          <span className="text-xs font-semibold text-[#1A1A1A] group-hover:text-[#8C1515] truncate pr-2">
                            {cell}
                          </span>
                          <button
                            onClick={() => alert(`Downloading EOC Cell: ${cell} (PDF)`)}
                            className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2 py-1 rounded-md border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                          >
                            <Download className="w-3 h-3" />
                            <span>PDF</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}
            </div>

            {/* Accordion 17: Policies */}
            <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${openAccordions.includes("policies") ? "bg-white border-[#8C1515]/30 shadow-sm" : "bg-white border-[#DCD6C8] hover:border-[#8C1515]/40"}`}>
              <button
                onClick={() => toggleAccordion("policies")}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center space-x-4 min-w-0 pr-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${openAccordions.includes("policies") ? "bg-[#8C1515] text-white" : "bg-[#8C1515]/10 text-[#8C1515] group-hover:bg-[#8C1515] group-hover:text-white"}`}>
                    <ScrollText className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C1515] block mb-0.5">
                      Statutory Policies
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors">
                      Policies
                    </h3>
                  </div>
                </div>
                <div className="flex items-center space-x-3 shrink-0">
                  <span className="hidden sm:inline-block text-xs font-mono text-[#777] bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#E5E0D5]">
                    Certificates & Refund Guidelines
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 ${openAccordions.includes("policies") ? "bg-[#8C1515]/10 text-[#8C1515] rotate-180" : "bg-[#FAF8F5] text-[#666]"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {openAccordions.includes("policies") && (
                <div className="p-6 sm:p-8 pt-2 border-t border-[#E5E0D5] bg-[#FAF8F5]/40 space-y-4 animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Non Retention of Certificates */}
                    <div className="space-y-2">
                      <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                        Non Retention of Certificates
                      </h4>
                      <div className="p-3.5 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 transition-all group flex items-center justify-between">
                        <span className="text-xs font-semibold text-[#1A1A1A] group-hover:text-[#8C1515] truncate pr-2">
                          Non Retention of certificates
                        </span>
                        <button
                          onClick={() => alert("Downloading Non Retention of certificates (PDF)")}
                          className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-md border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                        >
                          <Download className="w-3 h-3" />
                          <span>PDF</span>
                        </button>
                      </div>
                    </div>

                    {/* Fees Refund Policy */}
                    <div className="space-y-2">
                      <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                        Fees Refund Policy
                      </h4>
                      <div className="p-3.5 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 transition-all group flex items-center justify-between">
                        <span className="text-xs font-semibold text-[#1A1A1A] group-hover:text-[#8C1515] truncate pr-2">
                          Fees Refund Policy
                        </span>
                        <button
                          onClick={() => alert("Downloading Fees Refund Policy (PDF)")}
                          className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-md border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                        >
                          <Download className="w-3 h-3" />
                          <span>PDF</span>
                        </button>
                      </div>
                    </div>

                    {/* VTU Fee Refund Policy */}
                    <div className="space-y-2">
                      <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                        VTU Fee Refund Policy
                      </h4>
                      <div className="p-3.5 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 transition-all group flex items-center justify-between">
                        <span className="text-xs font-semibold text-[#1A1A1A] group-hover:text-[#8C1515] truncate pr-2">
                          VTU Refund Policy
                        </span>
                        <button
                          onClick={() => alert("Downloading VTU Refund Policy (PDF)")}
                          className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-md border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                        >
                          <Download className="w-3 h-3" />
                          <span>PDF</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 18: Employee Handbook */}
            <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${openAccordions.includes("employee-handbook") ? "bg-white border-[#8C1515]/30 shadow-sm" : "bg-white border-[#DCD6C8] hover:border-[#8C1515]/40"}`}>
              <button
                onClick={() => toggleAccordion("employee-handbook")}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center space-x-4 min-w-0 pr-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${openAccordions.includes("employee-handbook") ? "bg-[#8C1515] text-white" : "bg-[#8C1515]/10 text-[#8C1515] group-hover:bg-[#8C1515] group-hover:text-white"}`}>
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C1515] block mb-0.5">
                      Faculty & Staff Guidelines
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors">
                      Employee Handbook
                    </h3>
                  </div>
                </div>
                <div className="flex items-center space-x-3 shrink-0">
                  <span className="hidden sm:inline-block text-xs font-mono text-[#777] bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#E5E0D5]">
                    Service Rules & Code of Conduct
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 ${openAccordions.includes("employee-handbook") ? "bg-[#8C1515]/10 text-[#8C1515] rotate-180" : "bg-[#FAF8F5] text-[#666]"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {openAccordions.includes("employee-handbook") && (
                <div className="p-6 sm:p-8 pt-2 border-t border-[#E5E0D5] bg-[#FAF8F5]/40 space-y-3 animate-fade-in">
                  <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                    Employee Handbook
                  </h4>
                  <div className="p-4 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 transition-all group flex items-center justify-between max-w-md">
                    <div className="flex items-center space-x-3 min-w-0 pr-2">
                      <BookMarked className="w-4 h-4 text-[#8C1515] shrink-0" />
                      <span className="text-sm font-semibold text-[#1A1A1A] truncate group-hover:text-[#8C1515] transition-colors">
                        Employee Handbook
                      </span>
                    </div>
                    <button
                      onClick={() => alert("Downloading Employee Handbook (PDF)")}
                      className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-lg border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 19: College Internal Complaints Committee (CICC) */}
            <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${openAccordions.includes("cicc") ? "bg-white border-[#8C1515]/30 shadow-sm" : "bg-white border-[#DCD6C8] hover:border-[#8C1515]/40"}`}>
              <button
                onClick={() => toggleAccordion("cicc")}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center space-x-4 min-w-0 pr-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${openAccordions.includes("cicc") ? "bg-[#8C1515] text-white" : "bg-[#8C1515]/10 text-[#8C1515] group-hover:bg-[#8C1515] group-hover:text-white"}`}>
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C1515] block mb-0.5">
                      Statutory Cell & Women Safety
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors">
                      College Internal Complaints Committee(CICC)
                    </h3>
                  </div>
                </div>
                <div className="flex items-center space-x-3 shrink-0">
                  <span className="hidden sm:inline-block text-xs font-mono text-[#777] bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#E5E0D5]">
                    CICC Composition & Objectives
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 ${openAccordions.includes("cicc") ? "bg-[#8C1515]/10 text-[#8C1515] rotate-180" : "bg-[#FAF8F5] text-[#666]"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {openAccordions.includes("cicc") && (
                <div className="p-6 sm:p-8 pt-2 border-t border-[#E5E0D5] bg-[#FAF8F5]/40 space-y-4 animate-fade-in">
                  <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                    CICC composition and objectives
                  </h4>
                  <div className="p-4 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 transition-all group flex items-center justify-between max-w-md">
                    <div className="flex items-center space-x-3 min-w-0 pr-2">
                      <ShieldCheck className="w-4 h-4 text-[#8C1515] shrink-0" />
                      <span className="text-sm font-semibold text-[#1A1A1A] truncate group-hover:text-[#8C1515] transition-colors">
                        CICC Composition and Objectives
                      </span>
                    </div>
                    <button
                      onClick={() => alert("Downloading CICC Composition and Objectives (PDF)")}
                      className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-lg border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 20: Anti Ragging Committee */}
            <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${openAccordions.includes("anti-ragging") ? "bg-white border-[#8C1515]/30 shadow-sm" : "bg-white border-[#DCD6C8] hover:border-[#8C1515]/40"}`}>
              <button
                onClick={() => toggleAccordion("anti-ragging")}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center space-x-4 min-w-0 pr-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${openAccordions.includes("anti-ragging") ? "bg-[#8C1515] text-white" : "bg-[#8C1515]/10 text-[#8C1515] group-hover:bg-[#8C1515] group-hover:text-white"}`}>
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C1515] block mb-0.5">
                      Campus Safety & Disciplinary Norms
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors">
                      Anti Ragging Committee
                    </h3>
                  </div>
                </div>
                <div className="flex items-center space-x-3 shrink-0">
                  <span className="hidden sm:inline-block text-xs font-mono text-[#777] bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#E5E0D5]">
                    Composition & Measures
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 ${openAccordions.includes("anti-ragging") ? "bg-[#8C1515]/10 text-[#8C1515] rotate-180" : "bg-[#FAF8F5] text-[#666]"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {openAccordions.includes("anti-ragging") && (
                <div className="p-6 sm:p-8 pt-2 border-t border-[#E5E0D5] bg-[#FAF8F5]/40 space-y-4 animate-fade-in">
                  <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                    Composition
                  </h4>
                  <div className="p-4 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 transition-all group flex items-center justify-between max-w-md">
                    <div className="flex items-center space-x-3 min-w-0 pr-2">
                      <ShieldAlert className="w-4 h-4 text-[#8C1515] shrink-0" />
                      <span className="text-sm font-semibold text-[#1A1A1A] truncate group-hover:text-[#8C1515] transition-colors">
                        Composition
                      </span>
                    </div>
                    <button
                      onClick={() => alert("Downloading Anti Ragging Committee Composition (PDF)")}
                      className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-lg border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 21: Grievance Redressal */}
            <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${openAccordions.includes("grievance-redressal") ? "bg-white border-[#8C1515]/30 shadow-sm" : "bg-white border-[#DCD6C8] hover:border-[#8C1515]/40"}`}>
              <button
                onClick={() => toggleAccordion("grievance-redressal")}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center space-x-4 min-w-0 pr-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${openAccordions.includes("grievance-redressal") ? "bg-[#8C1515] text-white" : "bg-[#8C1515]/10 text-[#8C1515] group-hover:bg-[#8C1515] group-hover:text-white"}`}>
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C1515] block mb-0.5">
                      Student & Staff Welfare
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors">
                      Grievance redressal
                    </h3>
                  </div>
                </div>
                <div className="flex items-center space-x-3 shrink-0">
                  <span className="hidden sm:inline-block text-xs font-mono text-[#777] bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#E5E0D5]">
                    Composition-24-25
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 ${openAccordions.includes("grievance-redressal") ? "bg-[#8C1515]/10 text-[#8C1515] rotate-180" : "bg-[#FAF8F5] text-[#666]"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {openAccordions.includes("grievance-redressal") && (
                <div className="p-6 sm:p-8 pt-2 border-t border-[#E5E0D5] bg-[#FAF8F5]/40 space-y-4 animate-fade-in">
                  <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                    Composition-24-25
                  </h4>
                  <div className="p-4 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 transition-all group flex items-center justify-between max-w-md">
                    <div className="flex items-center space-x-3 min-w-0 pr-2">
                      <Scale className="w-4 h-4 text-[#8C1515] shrink-0" />
                      <span className="text-sm font-semibold text-[#1A1A1A] truncate group-hover:text-[#8C1515] transition-colors">
                        Composition-24-25
                      </span>
                    </div>
                    <button
                      onClick={() => alert("Downloading Grievance Redressal Composition-24-25 (PDF)")}
                      className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-lg border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 22: Accessibility Guidelines */}
            <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${openAccordions.includes("accessibility-guidelines") ? "bg-white border-[#8C1515]/30 shadow-sm" : "bg-white border-[#DCD6C8] hover:border-[#8C1515]/40"}`}>
              <button
                onClick={() => toggleAccordion("accessibility-guidelines")}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center space-x-4 min-w-0 pr-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${openAccordions.includes("accessibility-guidelines") ? "bg-[#8C1515] text-white" : "bg-[#8C1515]/10 text-[#8C1515] group-hover:bg-[#8C1515] group-hover:text-white"}`}>
                    <Accessibility className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C1515] block mb-0.5">
                      Divyangjan & Inclusive Campus
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors">
                      Accessibility Guideliness
                    </h3>
                  </div>
                </div>
                <div className="flex items-center space-x-3 shrink-0">
                  <span className="hidden sm:inline-block text-xs font-mono text-[#777] bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#E5E0D5]">
                    UGC Norms & Barrier-Free Access
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 ${openAccordions.includes("accessibility-guidelines") ? "bg-[#8C1515]/10 text-[#8C1515] rotate-180" : "bg-[#FAF8F5] text-[#666]"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {openAccordions.includes("accessibility-guidelines") && (
                <div className="p-6 sm:p-8 pt-2 border-t border-[#E5E0D5] bg-[#FAF8F5]/40 space-y-4 animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* UGC Guidelines */}
                    <div className="p-4 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 transition-all group flex items-center justify-between">
                      <div className="flex items-center space-x-3 min-w-0 pr-2">
                        <FileText className="w-4 h-4 text-[#8C1515] shrink-0" />
                        <div>
                          <span className="text-xs text-[#777] block font-mono">UGC Norms</span>
                          <span className="text-sm font-semibold text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors">
                            UGC Guidelines
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => alert("Downloading UGC Guidelines (PDF)")}
                        className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-lg border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>PDF</span>
                      </button>
                    </div>

                    {/* Barrier Free Environment for Disabled */}
                    <div className="p-4 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 transition-all group flex items-center justify-between">
                      <div className="flex items-center space-x-3 min-w-0 pr-2">
                        <Accessibility className="w-4 h-4 text-[#8C1515] shrink-0" />
                        <div>
                          <span className="text-xs text-[#777] block font-mono">Disabled Facilities</span>
                          <span className="text-sm font-semibold text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors">
                            Barrier Free Environment for Disabled
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => alert("Downloading Barrier free (PDF)")}
                        className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-lg border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>PDF</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 23: Research and Development Cell */}
            <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${openAccordions.includes("research-development") ? "bg-white border-[#8C1515]/30 shadow-sm" : "bg-white border-[#DCD6C8] hover:border-[#8C1515]/40"}`}>
              <button
                onClick={() => toggleAccordion("research-development")}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center space-x-4 min-w-0 pr-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${openAccordions.includes("research-development") ? "bg-[#8C1515] text-white" : "bg-[#8C1515]/10 text-[#8C1515] group-hover:bg-[#8C1515] group-hover:text-white"}`}>
                    <Microscope className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C1515] block mb-0.5">
                      Innovation, Patents & Publications
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors">
                      Research and Development Cell
                    </h3>
                  </div>
                </div>
                <div className="flex items-center space-x-3 shrink-0">
                  <span className="hidden sm:inline-block text-xs font-mono text-[#777] bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#E5E0D5]">
                    R&D Committee & Policies
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 ${openAccordions.includes("research-development") ? "bg-[#8C1515]/10 text-[#8C1515] rotate-180" : "bg-[#FAF8F5] text-[#666]"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {openAccordions.includes("research-development") && (
                <div className="p-6 sm:p-8 pt-2 border-t border-[#E5E0D5] bg-[#FAF8F5]/40 space-y-4 animate-fade-in">
                  <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                    R&D commmittee and Policies
                  </h4>
                  <div className="p-4 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 transition-all group flex items-center justify-between max-w-md">
                    <div className="flex items-center space-x-3 min-w-0 pr-2">
                      <Microscope className="w-4 h-4 text-[#8C1515] shrink-0" />
                      <span className="text-sm font-semibold text-[#1A1A1A] truncate group-hover:text-[#8C1515] transition-colors">
                        R&D Composition and Policies
                      </span>
                    </div>
                    <button
                      onClick={() => alert("Downloading R&D Composition and Policies (PDF)")}
                      className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-lg border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 24: Institutional Development Plan */}
            <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${openAccordions.includes("idp") ? "bg-white border-[#8C1515]/30 shadow-sm" : "bg-white border-[#DCD6C8] hover:border-[#8C1515]/40"}`}>
              <button
                onClick={() => toggleAccordion("idp")}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center space-x-4 min-w-0 pr-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${openAccordions.includes("idp") ? "bg-[#8C1515] text-white" : "bg-[#8C1515]/10 text-[#8C1515] group-hover:bg-[#8C1515] group-hover:text-white"}`}>
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C1515] block mb-0.5">
                      Strategic Vision & Roadmap
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors">
                      Institutional Development Plan
                    </h3>
                  </div>
                </div>
                <div className="flex items-center space-x-3 shrink-0">
                  <span className="hidden sm:inline-block text-xs font-mono text-[#777] bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#E5E0D5]">
                    IDP Blueprint
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 ${openAccordions.includes("idp") ? "bg-[#8C1515]/10 text-[#8C1515] rotate-180" : "bg-[#FAF8F5] text-[#666]"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {openAccordions.includes("idp") && (
                <div className="p-6 sm:p-8 pt-2 border-t border-[#E5E0D5] bg-[#FAF8F5]/40 space-y-4 animate-fade-in">
                  <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                    IDP
                  </h4>
                  <div className="p-4 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 transition-all group flex items-center justify-between max-w-md">
                    <div className="flex items-center space-x-3 min-w-0 pr-2">
                      <Compass className="w-4 h-4 text-[#8C1515] shrink-0" />
                      <span className="text-sm font-semibold text-[#1A1A1A] truncate group-hover:text-[#8C1515] transition-colors">
                        IDP
                      </span>
                    </div>
                    <button
                      onClick={() => alert("Downloading IDP (PDF)")}
                      className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-lg border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 25: NBA - DCS */}
            <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${openAccordions.includes("nba-dcs") ? "bg-white border-[#8C1515]/30 shadow-sm" : "bg-white border-[#DCD6C8] hover:border-[#8C1515]/40"}`}>
              <button
                onClick={() => toggleAccordion("nba-dcs")}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center space-x-4 min-w-0 pr-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${openAccordions.includes("nba-dcs") ? "bg-[#8C1515] text-white" : "bg-[#8C1515]/10 text-[#8C1515] group-hover:bg-[#8C1515] group-hover:text-white"}`}>
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C1515] block mb-0.5">
                      National Board of Accreditation
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors">
                      NBA - DCS
                    </h3>
                  </div>
                </div>
                <div className="flex items-center space-x-3 shrink-0">
                  <span className="hidden sm:inline-block text-xs font-mono text-[#777] bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#E5E0D5]">
                    Data Capturing System (DCS)
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 ${openAccordions.includes("nba-dcs") ? "bg-[#8C1515]/10 text-[#8C1515] rotate-180" : "bg-[#FAF8F5] text-[#666]"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {openAccordions.includes("nba-dcs") && (
                <div className="p-6 sm:p-8 pt-2 border-t border-[#E5E0D5] bg-[#FAF8F5]/40 space-y-4 animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* CSE */}
                    <div className="p-4 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 transition-all group flex items-center justify-between">
                      <div className="flex items-center space-x-3 min-w-0 pr-2">
                        <span className="font-mono text-[10px] font-bold text-[#8C1515] bg-[#8C1515]/5 px-2 py-0.5 rounded border border-[#8C1515]/10 shrink-0">
                          CSE
                        </span>
                        <div>
                          <span className="text-xs text-[#777] block font-mono">Computer Science & Engg.</span>
                          <span className="text-sm font-semibold text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors">
                            CSE-DCS
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => alert("Downloading CSE-DCS (PDF)")}
                        className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-lg border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>PDF</span>
                      </button>
                    </div>

                    {/* ME */}
                    <div className="p-4 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#8C1515]/40 transition-all group flex items-center justify-between">
                      <div className="flex items-center space-x-3 min-w-0 pr-2">
                        <span className="font-mono text-[10px] font-bold text-[#8C1515] bg-[#8C1515]/5 px-2 py-0.5 rounded border border-[#8C1515]/10 shrink-0">
                          ME
                        </span>
                        <div>
                          <span className="text-xs text-[#777] block font-mono">Mechanical Engineering</span>
                          <span className="text-sm font-semibold text-[#1A1A1A] group-hover:text-[#8C1515] transition-colors">
                            ME-DCS
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => alert("Downloading ME-DCS (PDF)")}
                        className="text-xs font-semibold text-[#8C1515] hover:underline flex items-center space-x-1 shrink-0 bg-[#8C1515]/5 px-2.5 py-1.5 rounded-lg border border-[#8C1515]/10 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>PDF</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
