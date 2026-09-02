import React, { useState, useRef, useEffect } from "react";
import { 
  Cpu, 
  Briefcase, 
  Code, 
  TrendingUp, 
  Heart,
  ChevronRight, 
  Building2, 
  Layers
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";

interface Programme {
  name: string;
  categoryTag: string;
  duration: string;
  description: string;
  recruiters: string;
  careers: string[];
  image: string;
}

interface Category {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  programmes: Programme[];
}

interface ProgrammesProps {
  onOpenApplyModal?: () => void;
  onNavigate?: (page: any) => void;
}

interface ProgrammeCardProps {
  idx: number;
  programme: Programme;
  total: number;
  progress: any;
  range: number[];
  targetScale: number;
  onOpenApplyModal?: () => void;
  onNavigate?: (page: any) => void;
  getRecruiterLogo: (name: string) => React.ReactNode;
}

function StackingProgrammeCard({
  idx,
  programme,
  total,
  progress,
  range,
  targetScale,
  onOpenApplyModal,
  onNavigate,
  getRecruiterLogo
}: ProgrammeCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  
  // Staggered sticky top offsets for card stacking effect with ample clearance below header (Header ~155px)
  const stickyTopOffset = 175 + idx * 20;

  const handleCardAction = () => {
    if (programme.name.includes("Computer Science & Engineering") && onNavigate) {
      onNavigate("cse-program");
    } else if (programme.name.includes("Electronics & Communication") && onNavigate) {
      onNavigate("ece-program");
    } else if (programme.name.includes("Mechanical Engineering") && onNavigate) {
      onNavigate("me-program");
    } else if (onOpenApplyModal) {
      onOpenApplyModal();
    }
  };

  return (
    <div
      id={`programme-card-${idx}`}
      ref={cardRef}
      className="sticky mb-12 sm:mb-16 last:mb-0 transition-all duration-300"
      style={{
        top: `${stickyTopOffset}px`,
        zIndex: 10 + idx,
      }}
    >
      <motion.div
        style={{ scale }}
        className="bg-[#FFFDF6] rounded-[24px] sm:rounded-[28px] p-5 sm:p-7 md:p-8 shadow-[0_16px_45px_rgba(0,0,0,0.25)] border border-[#EBD8D0]/80 text-[#1F0002] origin-top transition-shadow duration-500 hover:shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-7 items-stretch">
          
          {/* Left Inside Card: Program Photo */}
          <div className="md:col-span-5 relative min-h-[240px] sm:min-h-[300px] md:min-h-[380px] rounded-2xl overflow-hidden shadow-sm">
            <img
              src={programme.image}
              alt={programme.name}
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-3 left-3 bg-[#1F0002]/85 backdrop-blur-xs text-white text-[10.5px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-white/10 shadow-sm">
              {programme.categoryTag.split(" ")[0]}
            </div>
          </div>

          {/* Right Inside Card: Program Content Details */}
          <div className="md:col-span-7 flex flex-col justify-between text-left">
            <div>
              {/* Red Program Title */}
              <h3 className="text-[#8C1515] font-sans font-bold text-[24px] sm:text-[28px] md:text-[30px] leading-[1.2] tracking-tight mb-3">
                {programme.name}
              </h3>

              {/* Description */}
              <p className="font-sans text-[13.5px] sm:text-[14.5px] text-[#8C1515]/80 leading-relaxed mb-4 font-normal">
                {programme.description}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-[#8C1515]/15 my-4" />

              {/* Specs Row: Format | Duration | Eligibility */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 py-1">
                <div>
                  <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-0.5">
                    Format
                  </div>
                  <div className="text-[14px] sm:text-[16px] font-extrabold text-[#1F0002] leading-tight">
                    Full-Time
                  </div>
                </div>

                <div className="border-l border-gray-200 pl-3">
                  <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-0.5">
                    Duration
                  </div>
                  <div className="text-[14px] sm:text-[16px] font-extrabold text-[#1F0002] leading-tight">
                    {programme.duration}
                  </div>
                </div>

                <div className="border-l border-gray-200 pl-3">
                  <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-0.5">
                    Eligibility
                  </div>
                  <div className="text-[14px] sm:text-[16px] font-extrabold text-[#1F0002] leading-tight">
                    Grade 12
                  </div>
                </div>
              </div>

              {/* Career Opportunities Tags */}
              <div className="mt-4">
                <div className="flex items-center gap-1.5 text-[10.5px] font-bold text-[#8C1515]/70 tracking-wider uppercase mb-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#8C1515]" />
                  Career Roles
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {programme.careers.map((career) => (
                    <span
                      key={career}
                      className="bg-white border border-[#8C1515]/15 text-[#8C1515] text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-2xs"
                    >
                      {career}
                    </span>
                  ))}
                </div>
              </div>

              {/* Top Recruiters */}
              <div className="mt-3.5">
                <div className="flex items-center gap-1.5 text-[10.5px] font-bold text-[#8C1515]/70 tracking-wider uppercase mb-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#8C1515]" />
                  Top Recruiters
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {programme.recruiters.split("•").slice(0, 4).map((recruiter, rIdx) => (
                    <span key={`${recruiter.trim()}-${rIdx}`}>
                      {getRecruiterLogo(recruiter)}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Red Action Button */}
            <div className="mt-6">
              <button
                onClick={handleCardAction}
                className="w-full bg-[#8C1515] hover:bg-[#9B2329] text-white font-bold text-[14.5px] sm:text-[15.5px] py-3.5 px-6 rounded-xl shadow-[0_6px_20px_rgba(140, 21, 21,0.3)] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <span>View Program</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </motion.div>
    </div>
  );
}

export default function Programmes({ onOpenApplyModal, onNavigate }: ProgrammesProps) {
  const categories: Category[] = [
    {
      id: "engineering",
      title: "Engineering",
      icon: Cpu,
      programmes: [
        {
          name: "Computer Science & Engineering",
          categoryTag: "ENGINEERING UNDERGRADUATE",
          duration: "4 Years",
          description: "Build the technologies that power tomorrow. Gain expertise in software development, artificial intelligence, cloud computing, cybersecurity, and data-driven innovation through hands-on learning and industry-focused projects.",
          recruiters: "Google • Microsoft • Amazon • Infosys • TCS • Accenture • Wipro • Cognizant",
          careers: ["Software Engineer", "Full Stack Developer", "Cloud Engineer", "Cybersecurity Analyst"],
          image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Artificial Intelligence & Machine Learning",
          categoryTag: "ENGINEERING UNDERGRADUATE",
          duration: "4 Years",
          description: "Master intelligent systems, machine learning, data analytics, and AI-powered technologies that are transforming industries worldwide. Learn to build innovative solutions for the future.",
          recruiters: "IBM • Accenture • Deloitte • Infosys • TCS • Capgemini • Tech Mahindra",
          careers: ["AI Engineer", "Machine Learning Engineer", "Data Scientist", "AI Consultant"],
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          name: "Information Science & Engineering",
          categoryTag: "ENGINEERING UNDERGRADUATE",
          duration: "4 Years",
          description: "Develop expertise in software systems, databases, networking, cloud technologies, and enterprise solutions that drive digital transformation across industries.",
          recruiters: "Oracle • SAP • IBM • Infosys • Cognizant • Accenture • TCS • HCL",
          careers: ["Systems Engineer", "Software Developer", "Database Administrator", "IT Consultant"],
          image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Electronics & Communication Engineering",
          categoryTag: "ENGINEERING UNDERGRADUATE",
          duration: "4 Years",
          description: "Explore communication systems, embedded technologies, VLSI, IoT, and next-generation electronic innovations through practical learning and advanced laboratories.",
          recruiters: "Intel • Qualcomm • Samsung • Bosch • Siemens • Nokia • Texas Instruments • L&T Technology Services",
          careers: ["Embedded Engineer", "VLSI Engineer", "Electronics Engineer", "IoT Specialist"],
          image: "https://images.unsplash.com/photo-1550041473-d296a3a8a18a?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          name: "Mechanical Engineering",
          categoryTag: "ENGINEERING UNDERGRADUATE",
          duration: "4 Years",
          description: "Combine engineering principles with innovation, design, manufacturing, automation, and industrial technologies to create solutions for the modern world.",
          recruiters: "Bosch • Tata Motors • Mahindra • Toyota • Ashok Leyland • Volvo • Mercedes-Benz • L&T",
          careers: ["Design Engineer", "Production Engineer", "Quality Engineer", "Automation Engineer"],
          image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      ]
    },
    {
      id: "business",
      title: "Business",
      icon: Briefcase,
      programmes: [
        {
          name: "Bachelor of Business Administration (BBA)",
          categoryTag: "UNDERGRADUATE BACHELOR'S",
          duration: "3 Years",
          description: "Develop leadership, management, marketing, and entrepreneurial skills through experiential learning, industry interactions, and real-world business exposure.",
          recruiters: "Deloitte • KPMG • EY • PwC • HDFC Bank • ICICI Bank • Reliance Retail • Amazon",
          careers: ["Business Analyst", "Marketing Executive", "HR Executive", "Entrepreneur"],
          image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "BBA – Logistics & Supply Chain Management",
          categoryTag: "UNDERGRADUATE BACHELOR'S",
          duration: "3 Years",
          description: "Master the movement of goods, services, and global operations. Gain expertise in logistics planning, procurement, warehousing, inventory management, transportation, and supply chain analytics through industry-driven learning and real-world business projects.",
          recruiters: "DHL • Amazon • Flipkart • Maersk • Delhivery • Blue Dart • FedEx • TVS Supply Chain Solutions",
          careers: [
            "Supply Chain Analyst",
            "Logistics Manager",
            "Procurement Executive",
            "Operations Manager"
          ],
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "BBA – Digital Marketing & Business Analytics",
          categoryTag: "UNDERGRADUATE BACHELOR'S",
          duration: "3 Years",
          description: "Develop future-ready skills in digital marketing, business intelligence, data analytics, consumer behavior, SEO, social media strategy, and AI-powered marketing tools through hands-on projects, certifications, and industry exposure.",
          recruiters: "Google • Meta • Deloitte • Accenture • Wipro • Infosys • TCS • IBM",
          careers: [
            "Digital Marketing Executive",
            "Business Analyst",
            "SEO & Performance Marketer",
            "Marketing Data Analyst"
          ],
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "BBA – Aviation",
          categoryTag: "UNDERGRADUATE BACHELOR'S",
          duration: "3 Years",
          description: "Prepare for a dynamic career in the global aviation industry. Gain expertise in airport operations, airline management, aviation safety, customer service, aviation regulations, and hospitality through industry-focused learning, simulations, and practical exposure.",
          recruiters: "IndiGo • Air India • Akasa Air • Emirates • Qatar Airways • Singapore Airlines • GMR Airports • AirAsia",
          careers: [
            "Airport Operations Executive",
            "Airline Customer Service Executive",
            "Cabin Crew Management",
            "Aviation Operations Manager"
          ],
          image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      id: "computer_applications",
      title: "Computer Applications",
      icon: Code,
      programmes: [
        {
          name: "BCA – Cybersecurity, Ethical Hacking & Digital Forensics",
          categoryTag: "UNDERGRADUATE BACHELOR'S",
          duration: "3 Years",
          description: "Build expertise in securing digital systems and combating cyber threats. Learn ethical hacking, network security, digital forensics, penetration testing, and cyber laws through hands-on labs, real-world simulations, and industry-led training.",
          recruiters: "TCS • Infosys • Wipro • IBM • Deloitte • Accenture • Capgemini • KPMG",
          careers: ["Cybersecurity Analyst", "Ethical Hacker", "Digital Forensics Analyst", "Security Consultant"],
          image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "BCA – AI & ML, Cloud Computing + DevOps",
          categoryTag: "UNDERGRADUATE BACHELOR'S",
          duration: "3 Years",
          description: "Develop next-generation technology solutions with expertise in Artificial Intelligence, Machine Learning, cloud platforms, automation, containerization, and DevOps practices through project-based learning and industry certifications.",
          recruiters: "Microsoft • Amazon Web Services • Google • IBM • Oracle • Infosys • TCS • Cognizant",
          careers: ["AI/ML Developer", "Cloud Engineer", "DevOps Engineer", "Software Developer"],
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "BCA – Data Science & Big Data Analytics",
          categoryTag: "UNDERGRADUATE BACHELOR'S",
          duration: "3 Years",
          description: "Transform data into business insights by mastering data science, big data technologies, predictive analytics, business intelligence, and visualization tools through practical projects and real-world datasets.",
          recruiters: "Deloitte • Accenture • IBM • Infosys • TCS • Wipro • Cognizant • Capgemini",
          careers: ["Data Analyst", "Data Scientist", "Business Intelligence Analyst", "Big Data Engineer"],
          image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "BCA – AI Robotics + IoT",
          categoryTag: "UNDERGRADUATE BACHELOR'S",
          duration: "3 Years",
          description: "Design intelligent connected systems by integrating Artificial Intelligence, Robotics, Embedded Systems, IoT, automation, and smart technologies through innovation labs, live projects, and industry collaboration.",
          recruiters: "Bosch • Siemens • Honeywell • Tata Elxsi • Intel • IBM • Wipro • L&T Technology Services",
          careers: ["IoT Developer", "Robotics Engineer", "Embedded Systems Developer", "Automation Engineer"],
          image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      id: "commerce",
      title: "Commerce",
      icon: TrendingUp,
      programmes: [
        {
          name: "B.Com – Logistics & Supply Chain Management",
          categoryTag: "UNDERGRADUATE BACHELOR'S",
          duration: "3 Years",
          description: "Build a strong foundation in commerce while mastering global logistics, procurement, inventory management, transportation, warehouse operations, and supply chain analytics. Learn through industry-driven projects, case studies, and practical business exposure.",
          recruiters: "DHL • Amazon • Flipkart • Maersk • Delhivery • Blue Dart • FedEx • TVS Supply Chain Solutions",
          careers: ["Logistics Executive", "Supply Chain Analyst", "Procurement Officer", "Warehouse & Operations Executive"],
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "B.Com – Finance, Taxation & Auditing",
          categoryTag: "UNDERGRADUATE BACHELOR'S",
          duration: "3 Years",
          description: "Develop expertise in financial management, accounting, taxation, auditing, GST, corporate finance, and regulatory compliance. Gain practical experience through industry-oriented learning, financial analysis, and professional skill development.",
          recruiters: "Deloitte • EY • KPMG • PwC • Grant Thornton • TCS • Infosys • Accenture",
          careers: ["Financial Analyst", "Tax Consultant", "Audit Associate", "Accounts Executive"],
          image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "B.Com – CA Foundation",
          categoryTag: "UNDERGRADUATE BACHELOR'S",
          duration: "3 Years",
          description: "Accelerate your journey toward becoming a Chartered Accountant by integrating B.Com studies with CA Foundation preparation. Build strong expertise in accounting, taxation, auditing, business laws, and financial management through expert mentorship and exam-focused training.",
          recruiters: "Deloitte • EY • KPMG • PwC • BDO • Grant Thornton • RSM • TCS",
          careers: ["Chartered Accountant (Post Qualification)", "Audit Associate", "Tax Consultant", "Financial Analyst"],
          image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "B.Com – ACCA (UK)",
          categoryTag: "UNDERGRADUATE BACHELOR'S",
          duration: "3 Years",
          description: "Earn a globally recognized qualification by combining B.Com with ACCA (UK). Develop expertise in international accounting, financial reporting, taxation, auditing, corporate finance, and strategic business management through an industry-aligned curriculum.",
          recruiters: "Deloitte • EY • KPMG • PwC • HSBC • Accenture • Infosys • Grant Thornton",
          careers: ["ACCA Professional", "Financial Consultant", "Management Accountant", "Corporate Finance Executive"],
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      id: "health_sciences",
      title: "Health Sciences",
      icon: Heart,
      programmes: [
        {
          name: "Bachelor of Physiotherapy (BPT)",
          categoryTag: "HEALTH SCIENCES UNDERGRADUATE",
          duration: "4.5 Years (Including Internship)",
          description: "Empower lives through rehabilitation, movement science, and patient-centered healthcare. Gain clinical exposure, practical experience, and specialized training to become a skilled healthcare professional.",
          recruiters: "Apollo Hospitals • Manipal Hospitals • Fortis Healthcare • Aster Hospitals • Narayana Health • Columbia Asia",
          careers: ["Physiotherapist", "Sports Physiotherapist", "Rehabilitation Specialist", "Clinical Practitioner"],
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
        }
      ]
    }
  ];

  const wrapPill = (content: React.ReactNode, extraClasses = "") => (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] bg-white border border-gray-200 shadow-2xs ${extraClasses}`}>
      {content}
    </span>
  );

  // Map recruiter name to realistic brand representations
  const getRecruiterLogo = (name: string) => {
    const trimmed = name.trim();
    switch (trimmed) {
      case "Google":
        return wrapPill(
          <>
            <span className="text-blue-500 font-bold">G</span>
            <span className="text-red-500 font-bold">o</span>
            <span className="text-yellow-500 font-bold">o</span>
            <span className="text-blue-500 font-bold">g</span>
            <span className="text-green-500 font-bold">l</span>
            <span className="text-red-500 font-bold">e</span>
          </>
        );
      case "Microsoft":
        return wrapPill(
          <div className="flex items-center space-x-1">
            <div className="grid grid-cols-2 gap-0.5 w-2.5 h-2.5">
              <div className="bg-[#F25022] w-1 h-1"></div>
              <div className="bg-[#7FBA00] w-1 h-1"></div>
              <div className="bg-[#00A4EF] w-1 h-1"></div>
              <div className="bg-[#FFB900] w-1 h-1"></div>
            </div>
            <span className="text-gray-700 font-semibold text-[10px]">Microsoft</span>
          </div>
        );
      case "Amazon":
        return wrapPill(<span className="text-amber-900 font-bold">amazon</span>);
      case "Infosys":
        return wrapPill(<span>infosys</span>, "text-blue-600 font-medium");
      case "TCS":
        return wrapPill(<span>TATA TCS</span>, "text-blue-800 font-bold");
      case "Accenture":
        return wrapPill(
          <div className="flex items-center space-x-0.5">
            <span className="text-gray-900 font-bold">accenture</span>
            <span className="text-purple-600 font-black">&gt;</span>
          </div>
        );
      case "Wipro":
        return wrapPill(<span>wipro</span>, "text-gray-800 font-semibold");
      case "IBM":
        return wrapPill(<span>IBM</span>, "text-blue-700 font-black tracking-widest font-mono");
      case "Deloitte":
        return wrapPill(<span>Deloitte.</span>, "text-black font-bold");
      case "Intel":
        return wrapPill(<span>intel</span>, "text-blue-600 font-bold");
      case "Qualcomm":
        return wrapPill(<span>Qualcomm</span>, "text-blue-800 font-bold");
      case "Samsung":
        return wrapPill(<span>SAMSUNG</span>, "text-blue-700 font-black tracking-wider");
      case "Bosch":
        return wrapPill(<span>BOSCH</span>, "text-red-600 font-bold");
      case "Tata Motors":
        return wrapPill(<span>TATA</span>, "text-blue-700 font-bold");
      case "KPMG":
        return wrapPill(<span>KPMG</span>, "text-blue-900 font-extrabold italic");
      case "EY":
        return wrapPill(
          <>
            <span>EY</span><span className="text-yellow-500 font-black">#</span>
          </>,
          "text-gray-800 font-bold"
        );
      case "PwC":
        return wrapPill(<span>pwc</span>, "text-red-600 font-bold");
      case "IndiGo":
        return wrapPill(<span>IndiGo</span>, "text-blue-900 font-bold");
      case "Air India":
        return wrapPill(<span>Air India</span>, "text-[#E21D26] font-bold");
      case "Apollo Hospitals":
        return wrapPill(<span>Apollo</span>, "text-[#0D6256] font-bold");
      case "Manipal Hospitals":
        return wrapPill(<span>Manipal</span>, "text-blue-700 font-bold");
      default:
        return wrapPill(<span>{trimmed}</span>, "text-gray-700 font-medium");
    }
  };

  const [activeCategory, setActiveCategory] = useState<string>("engineering");
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  const selectedCategory = categories.find((cat) => cat.id === activeCategory) || categories[0];

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setActiveCardIndex(0);
  };

  const handleTabClick = (idx: number) => {
    setActiveCardIndex(idx);
    const element = document.getElementById(`programme-card-${idx}`);
    if (element) {
      const yOffset = -180;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-[#8C1515] text-white font-sans relative" id="programmes">
      <div className="max-w-[1320px] mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-block bg-[#EBD8D0] text-[#8C1515] text-[11px] font-semibold tracking-[0.12em] uppercase py-1 px-3 rounded-[4px] mb-4">
            OUR PROGRAMS
          </div>
          
          <h2 className="font-serif font-medium text-[38px] sm:text-[50px] leading-[1.05] tracking-tight text-white mb-4">
            Academic <span className="text-white">Pathways</span>
          </h2>

          <p className="font-sans text-[15px] sm:text-[16px] text-white/80 leading-[1.75] max-w-2xl mx-auto">
            Explore future-focused programs designed to equip you with the knowledge, skills, and industry exposure needed to thrive in a rapidly evolving world.
          </p>
        </div>

        {/* 2-COLUMN LAYOUT: STICKY TAB SWITCHER ON LEFT, SCROLL-STACKING CARDS ON RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT COLUMN: STICKY DISCIPLINE SWITCHER */}
          <div className="lg:col-span-4 xl:col-span-4 lg:sticky lg:top-[175px] z-30 flex flex-col gap-4">
            
            <div className="bg-[#8C1515]/80 backdrop-blur-md p-3.5 sm:p-5 rounded-2xl border border-white/10 shadow-xl flex flex-col gap-3">
              <div className="flex items-center justify-between px-1 mb-1">
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#EBD8D0] uppercase">
                  SELECT DISCIPLINE
                </span>
                <span className="text-[11px] font-mono text-white/50">
                  {categories.length} Disciplines
                </span>
              </div>

              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = category.id === activeCategory;
                return (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-[16px] transition-all duration-300 flex items-center justify-between cursor-pointer group ${
                      isActive
                        ? "bg-[#FFFDF6] text-[#1F0002] border-l-[5px] border-l-[#8C1515] shadow-lg font-bold pl-3.5 scale-[1.02]"
                        : "bg-white/90 text-[#8C1515] border border-transparent hover:bg-white hover:border-[#8C1515]/40 shadow-xs font-medium hover:translate-x-1"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`p-2.5 rounded-xl transition-colors duration-300 ${
                        isActive
                          ? "bg-[#8C1515] text-white shadow-sm"
                          : "bg-[#8C1515]/10 text-[#8C1515] group-hover:bg-[#8C1515] group-hover:text-white"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[14px] sm:text-[15px] leading-tight font-semibold">
                          {category.title}
                        </div>
                        <div className={`text-[12px] mt-0.5 ${isActive ? "text-gray-500" : "text-gray-500/90"}`}>
                          {category.programmes.length} Programs
                        </div>
                      </div>
                    </div>

                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                      isActive ? "text-[#8C1515] translate-x-1" : "text-gray-400 group-hover:text-[#8C1515] group-hover:translate-x-0.5"
                    }`} />
                  </button>
                );
              })}
            </div>

          </div>

          {/* RIGHT COLUMN: SCROLL-STACKING CARDS */}
          <div ref={containerRef} className="lg:col-span-8 xl:col-span-8 relative flex flex-col pb-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-0"
              >
                {selectedCategory.programmes.map((programme, idx) => {
                  const targetScale = 1 - (selectedCategory.programmes.length - idx) * 0.035;
                  const range = [idx * (1 / selectedCategory.programmes.length), 1];
                  return (
                    <StackingProgrammeCard
                      key={programme.name}
                      idx={idx}
                      programme={programme}
                      total={selectedCategory.programmes.length}
                      progress={scrollYProgress}
                      range={range}
                      targetScale={targetScale}
                      onOpenApplyModal={onOpenApplyModal}
                      onNavigate={onNavigate}
                      getRecruiterLogo={getRecruiterLogo}
                    />
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
