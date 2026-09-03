import React, { useState, useEffect } from "react";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
  GraduationCap, 
  Search, 
  Globe, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  MessageSquare,
  ArrowRight
} from "lucide-react";

export type PageType = "home" | "overview" | "vision-mission" | "leadership" | "recognition-approvals" | "awards-rankings" | "accreditation" | "iqac" | "cse-program" | "ece-program" | "me-program" | "ise-program" | "aiml-program" | "research-programs";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tabId: string) => void;
  currentPage?: PageType;
  onNavigate?: (page: PageType) => void;
  onOpenApplyModal: () => void;
  onOpenLoginModal: () => void;
}

export default function Header({ 
  activeTab, 
  setActiveTab, 
  currentPage = "home",
  onNavigate,
  onOpenApplyModal, 
  onOpenLoginModal 
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeProgramTab, setActiveProgramTab] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  type DropdownCategory = {
    heading: string;
    options: { label: string; targetId?: string; targetPage?: PageType; isAction?: boolean }[];
  };

  const dropdownMenus: Record<string, {
    id: string;
    title: string;
    categories: DropdownCategory[];
    columns?: DropdownCategory[][];
    featuredImage?: string;
    featuredTitle?: string;
  }> = {
    about: {
      id: "about",
      title: "About",
      categories: [
        {
          heading: "Who We Are",
          options: [
            { label: "Overview", targetPage: "overview" },
            { label: "Vision & Mission", targetPage: "vision-mission" },
            { label: "Leadership", targetPage: "leadership" },
            { label: "Recognition & Approvals", targetPage: "recognition-approvals" },
            { label: "Awards & Rankings", targetPage: "awards-rankings" },
            { label: "Accreditation", targetPage: "accreditation" },
            { label: "IQAC", targetPage: "iqac" },
            { label: "Core Values", targetId: "highlights" },
            { label: "Institutional Social Responsibility", targetId: "campus-life" },
            { label: "HKBK Edge", targetId: "highlights" },
          ]
        },
        {
          heading: "Related Links",
          options: [
            { label: "Institutes & Departments", targetId: "our-institutes" },
            { label: "Admissions", isAction: true },
            { label: "Scholarships", targetId: "success-roadmap" },
            { label: "Governance", targetId: "highlights" },
            { label: "Hostel Facility", targetId: "campus-life" },
            { label: "Student Services", targetId: "campus-life" },
            { label: "How to Reach Us?", targetId: "footer" },
          ]
        }
      ],
      featuredImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600",
      featuredTitle: "Legacy of Academic Excellence"
    },
    programs: {
      id: "programs",
      title: "Programs",
      categories: [
        {
          heading: "Engineering & Technology",
          options: [
            { label: "Computer Science & Engineering", targetPage: "cse-program" },
            { label: "Artificial Intelligence & Machine Learning", targetPage: "aiml-program" },
            { label: "Information Science & Engineering", targetPage: "ise-program" },
            { label: "Electronics & Communication Engineering", targetPage: "ece-program" },
            { label: "Mechanical Engineering", targetPage: "me-program" },
            { label: "Basic Sciences", targetId: "programmes" },
          ]
        },
        {
          heading: "Engineering (Working Professionals)",
          options: [
            { label: "Computer Science & Engineering", targetPage: "cse-program" },
            { label: "Electronics & Communication Engineering", targetPage: "ece-program" },
          ]
        },
        {
          heading: "Research Programs",
          options: [
            { label: "Ph.D. In CS, EC, ME, CV, Phy, Che, Mat, MBA", targetPage: "research-programs" },
          ]
        },
        {
          heading: "Computing & Emerging Tech",
          options: [
            { label: "BCA (General)", targetId: "programmes" },
            { label: "BCA + Cybersecurity, Ethical Hacking & Forensics", targetId: "programmes" },
            { label: "BCA + AI & ML, Cloud Computing & DevOps", targetId: "programmes" },
            { label: "BCA + Data Science & Big Data Analytics", targetId: "programmes" },
            { label: "BCA + AI Robotics & IoT", targetId: "programmes" },
          ]
        },
        {
          heading: "Management & Business",
          options: [
            { label: "BBA (General)", targetId: "programmes" },
            { label: "BBA – Aviation Management", targetId: "programmes" },
            { label: "BBA + Logistics & Supply Chain Management", targetId: "programmes" },
            { label: "BBA + Business Analytics & Digital Marketing", targetId: "programmes" },
            { label: "MBA (Master of Business Administration)", targetId: "programmes" },
          ]
        },
        {
          heading: "Commerce & Finance",
          options: [
            { label: "B.Com (General)", targetId: "programmes" },
            { label: "B.Com + CA Foundation", targetId: "programmes" },
            { label: "B.Com + ACCA (UK)", targetId: "programmes" },
          ]
        },
        {
          heading: "Health & Pre-University",
          options: [
            { label: "Physiotherapy (BPT)", targetId: "programmes" },
            { label: "Allied Health Sciences (MLT, MIT)", targetId: "programmes" },
            { label: "Pre-University (PUC - PCMB, PCMC, EBAC)", targetId: "programmes" },
          ]
        }
      ],
      columns: [
        [
          {
            heading: "Engineering & Technology",
            options: [
              { label: "Computer Science & Engineering", targetPage: "cse-program" },
              { label: "Artificial Intelligence & Machine Learning", targetPage: "aiml-program" },
              { label: "Information Science & Engineering", targetPage: "ise-program" },
              { label: "Electronics & Communication Engineering", targetPage: "ece-program" },
              { label: "Mechanical Engineering", targetPage: "me-program" },
              { label: "Basic Sciences", targetId: "programmes" },
            ]
          },
          {
            heading: "Management & Business",
            options: [
              { label: "BBA (General)", targetId: "programmes" },
              { label: "BBA – Aviation Management", targetId: "programmes" },
              { label: "BBA + Logistics & Supply Chain Management", targetId: "programmes" },
              { label: "BBA + Business Analytics & Digital Marketing", targetId: "programmes" },
              { label: "MBA (Master of Business Administration)", targetId: "programmes" },
            ]
          }
        ],
        [
          {
            heading: "Engineering (Working Professionals)",
            options: [
              { label: "Computer Science & Engineering", targetPage: "cse-program" },
              { label: "Electronics & Communication Engineering", targetPage: "ece-program" },
            ]
          },
          {
            heading: "Research Programs",
            options: [
              { label: "Ph.D. In CS, EC, ME, CV, Phy, Che, Mat, MBA", targetPage: "research-programs" },
            ]
          },
          {
            heading: "Commerce & Finance",
            options: [
              { label: "B.Com (General)", targetId: "programmes" },
              { label: "B.Com + CA Foundation", targetId: "programmes" },
              { label: "B.Com + ACCA (UK)", targetId: "programmes" },
            ]
          }
        ],
        [
          {
            heading: "Computing & Emerging Tech",
            options: [
              { label: "BCA (General)", targetId: "programmes" },
              { label: "BCA + Cybersecurity, Ethical Hacking & Forensics", targetId: "programmes" },
              { label: "BCA + AI & ML, Cloud Computing & DevOps", targetId: "programmes" },
              { label: "BCA + Data Science & Big Data Analytics", targetId: "programmes" },
              { label: "BCA + AI Robotics & IoT", targetId: "programmes" },
            ]
          },
          {
            heading: "Health & Pre-University",
            options: [
              { label: "Physiotherapy (BPT)", targetId: "programmes" },
              { label: "Allied Health Sciences (MLT, MIT)", targetId: "programmes" },
              { label: "Pre-University (PUC - PCMB, PCMC, EBAC)", targetId: "programmes" },
            ]
          }
        ]
      ],
      featuredImage: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600",
      featuredTitle: "Explore Future-Ready Curricula"
    },
    institution: {
      id: "institution",
      title: "Academics",
      categories: [
        {
          heading: "Academics & Institutions",
          options: [
            { label: "Institutes", targetId: "our-institutes" },
            { label: "Programs (Courses)", targetId: "programmes" },
            { label: "Academic Calendar", targetId: "key-highlights" },
            { label: "List of Holidays", targetId: "key-highlights" },
            { label: "Teaching Practices", targetId: "key-highlights" },
            { label: "Mentors", targetId: "our-team" },
            { label: "Learning Resources", targetId: "key-highlights" },
          ]
        }
      ],
      featuredImage: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5c?auto=format&fit=crop&q=80&w=600",
      featuredTitle: "World-Class Academic Ecosystem"
    },
    admissions: {
      id: "admissions",
      title: "Admissions",
      categories: [
        {
          heading: "Find Your Path",
          options: [
            { label: "After 10th", isAction: true },
            { label: "After 12th", isAction: true },
            { label: "After Graduation", isAction: true },
            { label: "After Post Graduation", isAction: true },
          ]
        },
        {
          heading: "Admission Information",
          options: [
            { label: "Admissions Overview", isAction: true },
            { label: "Programs & Courses", targetId: "programmes" },
            { label: "Admission Criteria", isAction: true },
            { label: "Course Fees", isAction: true },
            { label: "How to Apply?", isAction: true },
          ]
        },
        {
          heading: "Financial Support",
          options: [
            { label: "Scholarships", targetId: "success-roadmap" },
            { label: "Education Loan", isAction: true },
            { label: "Fee Structure", isAction: true },
            { label: "Fee Refund Policy", isAction: true },
          ]
        },
        {
          heading: "Student Experience & Support",
          options: [
            { label: "Hostel Fees", targetId: "campus-life" },
            { label: "Campus Visit", isAction: true },
            { label: "Orientation", targetId: "campus-life" },
            { label: "National Admissions", isAction: true },
            { label: "International Admissions", isAction: true },
            { label: "Admission Offices", targetId: "footer" },
            { label: "Contact Admissions", targetId: "footer" },
          ]
        }
      ],
      featuredImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600",
      featuredTitle: "Begin Your Journey at HKBK"
    },
    campus: {
      id: "campus",
      title: "Campus Life",
      categories: [
        {
          heading: "Life at HKBK",
          options: [
            { label: "Campus Life Overview", targetId: "campus-life" },
            { label: "Hostels", targetId: "campus-life" },
            { label: "Transport", targetId: "campus-life" },
            { label: "Libraries", targetId: "campus-life" },
            { label: "Sports & Adventure", targetId: "campus-life" },
            { label: "Student Welfare", targetId: "campus-life" },
          ]
        },
        {
          heading: "Student Community",
          options: [
            { label: "Student Clubs", targetId: "campus-life" },
            { label: "Communities", targetId: "campus-life" },
            { label: "Department Societies", targetId: "campus-life" },
            { label: "Student Chapters", targetId: "campus-life" },
          ]
        },
        {
          heading: "Events & Experiences",
          options: [
            { label: "HKBK Fest", targetId: "campus-life" },
            { label: "AI Fest 2026", targetId: "campus-life" },
            { label: "Cultural Events", targetId: "campus-life" },
            { label: "Technical Events", targetId: "campus-life" },
            { label: "Youth Summits", targetId: "campus-life" },
            { label: "Convocation", targetId: "campus-life" },
            { label: "Prominent Visitors", targetId: "campus-life" },
            { label: "National & International Conferences", targetId: "campus-life" },
          ]
        },
        {
          heading: "Student Stories & News",
          options: [
            { label: "Student Achievements", targetId: "success-reels" },
            { label: "Student Stories", targetId: "success-reels" },
            { label: "Alumni Stories", targetId: "success-reels" },
            { label: "Notable Alumni", targetId: "success-reels" },
            { label: "Dubai Alumni Chapter", targetId: "success-reels" },
            { label: "Latest News & Blogs", targetId: "key-highlights" },
          ]
        }
      ],
      featuredImage: "https://images.unsplash.com/photo-1527891751199-7225231a68dd?auto=format&fit=crop&q=80&w=600",
      featuredTitle: "Vibrant Campus Culture"
    },
    placements: {
      id: "placements",
      title: "Placements",
      categories: [
        {
          heading: "Career Development",
          options: [
            { label: "Placements Overview", targetId: "scroll-story" },
            { label: "Career Planning & Development", targetId: "scroll-story" },
            { label: "Placement Process", targetId: "scroll-story" },
            { label: "Placement Statistics", targetId: "scroll-story" },
            { label: "Placement Tracker", targetId: "scroll-story" },
          ]
        },
        {
          heading: "Opportunities",
          options: [
            { label: "Internships", targetId: "scroll-story" },
            { label: "Industry Projects", targetId: "scroll-story" },
            { label: "Industry Collaborations", targetId: "scroll-story" },
            { label: "Joint Placement Programs", targetId: "scroll-story" },
          ]
        },
        {
          heading: "Placement Highlights",
          options: [
            { label: "Engineering Placements", targetId: "scroll-story" },
            { label: "Management Placements", targetId: "scroll-story" },
            { label: "Degree Program Placements", targetId: "scroll-story" },
            { label: "Leading Recruiters", targetId: "scroll-story" },
            { label: "Placement Success Stories", targetId: "success-reels" },
          ]
        }
      ],
      featuredImage: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600",
      featuredTitle: "Guaranteed Global Placements"
    },
    research: {
      id: "research",
      title: "Research",
      categories: [
        {
          heading: "Research",
          options: [
            { label: "Research Programs", targetPage: "research-programs" },
            { label: "Research Overview", targetId: "why-hkbk" },
            { label: "Centers of Excellence", targetId: "why-hkbk" },
            { label: "Faculty Research", targetId: "why-hkbk" },
          ]
        },
        {
          heading: "Innovation & Entrepreneurship",
          options: [
            { label: "Entrepreneurship Cell", targetId: "why-hkbk" },
            { label: "Innovation & Entrepreneurship Dev Cell", targetId: "why-hkbk" },
            { label: "Technology Business Incubator", targetId: "why-hkbk" },
            { label: "Startup Support", targetId: "why-hkbk" },
            { label: "Innovation Labs", targetId: "why-hkbk" },
          ]
        },
        {
          heading: "Outcomes & Policies",
          options: [
            { label: "Patents", targetId: "why-hkbk" },
            { label: "Publications", targetId: "why-hkbk" },
            { label: "Sustainable Development Goals", targetId: "why-hkbk" },
            { label: "Research Policies", targetId: "why-hkbk" },
            { label: "Innovation Policies", targetId: "why-hkbk" },
          ]
        }
      ],
      featuredImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600",
      featuredTitle: "Pioneering R&D & Incubation"
    }
  };

  const handleLinkClick = (id: string) => {
    setActiveDropdown(null);
    if (currentPage !== "home" && onNavigate) {
      onNavigate("home");
      setTimeout(() => {
        setActiveTab(id);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      setActiveTab(id);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className="w-full z-50 bg-[#8C1515] border-b border-black/20 shadow-xl sticky top-0" 
      id="hkbk-header"
    >
      
      {/* 1. TOP UTILITY & ANNOUNCEMENT BAR (Top Tier - #FDFAEC) */}
      <div className="w-full py-2 px-4 lg:px-8 bg-[#FDFAEC] border-b border-[#8C1515]/15 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-[11px] font-sans text-[#8C1515]">
          
          {/* Announcement (Left) */}
          <div className="flex items-center space-x-2 font-extrabold">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#8C1515] animate-pulse"></span>
            <span className="text-[#8C1515]">Register Now for HKBK Joint Campus Placement Programme</span>
            <button 
              onClick={onOpenApplyModal}
              className="bg-[#8C1515] text-white hover:bg-[#8C1515] font-extrabold px-2.5 py-0.5 rounded text-[10px] uppercase tracking-wider transition-all duration-200 cursor-pointer ml-1 shadow-xs"
            >
              REGISTER NOW
            </button>
          </div>

          {/* Social Icons & Core Utilities (Right) */}
          <div className="flex items-center space-x-4 text-[#8C1515]/90">
            {/* WhatsApp */}
            <a href="https://wa.me/9118001034444" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-[#8C1515] transition-colors font-bold">
              <MessageSquare className="w-3.5 h-3.5 text-[#8C1515]" />
              <span>Whatsapp</span>
            </a>
            
            {/* Call Us */}
            <a href="tel:18001034444" className="flex items-center space-x-1 hover:text-[#8C1515] transition-colors font-bold">
              <Phone className="w-3.5 h-3.5 text-[#8C1515]" />
              <span>Call Us</span>
            </a>

            {/* 360 Virtual Tour */}
            <button onClick={() => handleLinkClick("campus-life")} className="flex items-center space-x-1 hover:text-[#8C1515] transition-colors cursor-pointer font-bold">
              <Globe className="w-3.5 h-3.5 text-[#8C1515]" />
              <span>360° Tour</span>
            </button>

            <span className="text-[#8C1515]/25 font-light">|</span>

            {/* Social Icons */}
            <div className="flex items-center space-x-2.5 text-[#8C1515]/80">
              <a href="#" aria-label="Facebook" className="hover:text-[#8C1515] transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
              <a href="#" aria-label="Twitter" className="hover:text-[#8C1515] transition-colors"><Twitter className="w-3.5 h-3.5" /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-[#8C1515] transition-colors"><Linkedin className="w-3.5 h-3.5" /></a>
              <a href="#" aria-label="Instagram" className="hover:text-[#8C1515] transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
              <a href="#" aria-label="YouTube" className="hover:text-[#8C1515] transition-colors"><Youtube className="w-3.5 h-3.5" /></a>
            </div>
          </div>

        </div>
      </div>

      {/* 2. MIDDLE BRANDING & HELPLINE TIER (Middle Tier - #8C1515 Background) */}
      <div className="w-full px-4 lg:px-8 py-3.5 bg-[#8C1515] border-b border-white/15">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Brand Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleLinkClick("home")}>
            <img 
              src="https://imgh.in/host/oii6dz" 
              alt="HKBK Group of Institutions" 
              className="h-11 md:h-14 w-auto object-contain"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = document.getElementById('logo-fallback');
                if (fallback) fallback.classList.remove('hidden');
              }}
            />
            <div id="logo-fallback" className="hidden flex items-center space-x-3">
              <div className="bg-[#8C1515] rounded-xl p-2 flex items-center justify-center text-white font-medium h-11 w-11 shadow-md border border-white/20">
                <GraduationCap className="w-6 h-6 text-[#EBD8D0]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-1.5">
                  <span className="text-white text-lg font-bold tracking-wide">HKBK</span>
                  <span className="bg-[#EBD8D0] text-[#8C1515] text-[9px] font-bold px-1.5 py-0.2 rounded uppercase">University</span>
                </div>
                <span className="text-white/70 text-[9px] font-semibold tracking-widest uppercase">Bangalore</span>
              </div>
            </div>
          </div>

          {/* Desktop Direct Links */}
          <div className="hidden lg:flex items-center space-x-4 text-[11px] font-extrabold tracking-wider text-white">
            <button onClick={() => { if (onNavigate) { onNavigate("iqac"); } else { handleLinkClick("iqac"); } }} className="hover:text-[#FFD700] hover:underline transition-colors uppercase cursor-pointer">IQAC</button>
            <span className="text-white/30 font-light">|</span>
            <button onClick={() => handleLinkClick("faqs")} className="hover:text-[#FFD700] hover:underline transition-colors uppercase cursor-pointer">Blogs</button>
            <span className="text-white/30 font-light">|</span>
            <button onClick={() => handleLinkClick("scroll-story")} className="hover:text-[#FFD700] hover:underline transition-colors uppercase cursor-pointer">Careers</button>
            <span className="text-white/30 font-light">|</span>
            <button onClick={() => handleLinkClick("campus-life")} className="hover:text-[#FFD700] hover:underline transition-colors uppercase cursor-pointer">Student Support</button>
            <span className="text-white/30 font-light">|</span>
            <button onClick={() => handleLinkClick("faqs")} className="hover:text-[#FFD700] hover:underline transition-colors uppercase cursor-pointer">Contact Us</button>
          </div>

          {/* Action Blocks (Helpline Widget + Search) */}
          <div className="flex items-center space-x-4">
            
            {/* Admission Helpline Red Box */}
            <div className="hidden sm:flex items-center bg-white/15 hover:bg-white/20 transition-colors rounded-lg border border-white/25 pl-3 pr-4 py-1.5 shadow-[0_4px_14px_rgba(0,0,0,0.2)]">
              <div className="mr-3 p-1.5 bg-white/20 rounded-full text-white">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] text-white/90 font-bold uppercase tracking-wider leading-none">Admission Helpline</span>
                <span className="text-[13px] text-white font-extrabold tracking-wide mt-0.5">1800 103 4444</span>
              </div>
            </div>

            {/* Search Icon Widget */}
            <button aria-label="Search" className="flex flex-col items-center justify-center text-white/90 hover:text-[#FFD700] transition-all cursor-pointer">
              <Search className="w-5 h-5" />
              <span className="text-[8px] uppercase tracking-widest font-extrabold mt-1">Search</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="lg:hidden text-white hover:text-[#FFD700] focus:outline-none p-2 border border-white/20 rounded-lg bg-white/10 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* 3. BOTTOM CATEGORIES NAVIGATION TIER & MEGA DROP DOWN MENU */}
      <div 
        className="hidden lg:block w-full relative bg-[#8C1515] border-t border-white/15 border-b border-black/20 shadow-md"
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="max-w-7xl mx-auto h-[42px] flex items-center justify-between text-[13.5px] font-bold tracking-wider uppercase font-sans">
          
          <button 
            onMouseEnter={() => setActiveDropdown("about")}
            onClick={() => { setActiveDropdown(null); handleLinkClick("highlights"); }} 
            className={`flex-1 h-full text-center border-r border-white/10 hover:bg-black/20 hover:text-[#FFD700] transition-all flex items-center justify-center space-x-1.5 cursor-pointer text-white/90 ${activeDropdown === "about" ? "bg-black/20 text-[#FFD700] shadow-inner" : ""}`}
          >
            <span>About</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "about" ? "rotate-180 text-[#FFD700]" : "text-white/60"}`} />
          </button>

          <button 
            onMouseEnter={() => setActiveDropdown("programs")}
            onClick={() => { setActiveDropdown(null); handleLinkClick("programmes"); }} 
            className={`flex-1 h-full text-center border-r border-white/10 hover:bg-black/20 hover:text-[#FFD700] transition-all flex items-center justify-center space-x-1.5 cursor-pointer text-white/90 ${activeDropdown === "programs" ? "bg-black/20 text-[#FFD700] shadow-inner" : ""}`}
          >
            <span>Programs</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "programs" ? "rotate-180 text-[#FFD700]" : "text-white/60"}`} />
          </button>

          <button 
            onMouseEnter={() => setActiveDropdown("institution")}
            onClick={() => { setActiveDropdown(null); handleLinkClick("programmes"); }} 
            className={`flex-1 h-full text-center border-r border-white/10 hover:bg-black/20 hover:text-[#FFD700] transition-all flex items-center justify-center space-x-1.5 cursor-pointer text-white/90 ${activeDropdown === "institution" ? "bg-black/20 text-[#FFD700] shadow-inner" : ""}`}
          >
            <span>Academics</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "institution" ? "rotate-180 text-[#FFD700]" : "text-white/60"}`} />
          </button>

          <button 
            onMouseEnter={() => setActiveDropdown("admissions")}
            onClick={() => { setActiveDropdown(null); onOpenApplyModal(); }} 
            className={`flex-1 h-full text-center border-r border-white/10 hover:bg-black/20 hover:text-[#FFD700] transition-all flex items-center justify-center space-x-1.5 cursor-pointer text-white/90 ${activeDropdown === "admissions" ? "bg-black/20 text-[#FFD700] shadow-inner" : ""}`}
          >
            <span>Admissions</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "admissions" ? "rotate-180 text-[#FFD700]" : "text-white/60"}`} />
          </button>

          <button 
            onMouseEnter={() => setActiveDropdown("campus")}
            onClick={() => { setActiveDropdown(null); handleLinkClick("campus-life"); }} 
            className={`flex-1 h-full text-center border-r border-white/10 hover:bg-black/20 hover:text-[#FFD700] transition-all flex items-center justify-center space-x-1.5 cursor-pointer text-white/90 ${activeDropdown === "campus" ? "bg-black/20 text-[#FFD700] shadow-inner" : ""}`}
          >
            <span>Campus Life</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "campus" ? "rotate-180 text-[#FFD700]" : "text-white/60"}`} />
          </button>

          <button 
            onMouseEnter={() => setActiveDropdown("placements")}
            onClick={() => { setActiveDropdown(null); handleLinkClick("scroll-story"); }} 
            className={`flex-1 h-full text-center border-r border-white/10 hover:bg-black/20 hover:text-[#FFD700] transition-all flex items-center justify-center space-x-1.5 cursor-pointer text-white/90 ${activeDropdown === "placements" ? "bg-black/20 text-[#FFD700] shadow-inner" : ""}`}
          >
            <span>Placements</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "placements" ? "rotate-180 text-[#FFD700]" : "text-white/60"}`} />
          </button>

          <button 
            onMouseEnter={() => setActiveDropdown("research")}
            onClick={() => { setActiveDropdown(null); handleLinkClick("highlights"); }} 
            className={`flex-1 h-full text-center hover:bg-black/20 hover:text-[#FFD700] transition-all flex items-center justify-center space-x-1.5 cursor-pointer text-white/90 ${activeDropdown === "research" ? "bg-black/20 text-[#FFD700] shadow-inner" : ""}`}
          >
            <span>Research & Innovation</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "research" ? "rotate-180 text-[#FFD700]" : "text-white/60"}`} />
          </button>

        </div>

        {/* RENDER THE ACTIVE MEGA DROPDOWN */}
        {activeDropdown && dropdownMenus[activeDropdown] && (
          <div 
            className="absolute top-full left-0 w-full bg-transparent z-[100] animate-fade-in"
            onMouseEnter={() => setActiveDropdown(activeDropdown)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="max-w-7xl mx-auto bg-white rounded-b-[24px] border-x border-b border-gray-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-8 flex flex-col lg:flex-row gap-8 items-stretch animate-fade-in">
              
              {/* Left Side: Category Columns Grid */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-start">
                {dropdownMenus[activeDropdown].columns ? (
                  dropdownMenus[activeDropdown].columns!.map((colCategories, colIdx) => (
                    <div key={colIdx} className="flex flex-col space-y-6">
                      {colCategories.map((cat, catIdx) => (
                        <div key={catIdx} className="flex flex-col space-y-3">
                          {/* Category Header */}
                          <div className="flex items-center space-x-2 pb-2 border-b border-gray-100">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#8C1515]" />
                            <h4 className="text-[12px] font-extrabold tracking-wider text-[#8C1515] uppercase font-sans">
                              {cat.heading}
                            </h4>
                          </div>

                          {/* Category Options List */}
                          <div className="flex flex-col space-y-1.5">
                            {cat.options.map((opt, optIdx) => (
                              <div
                                key={optIdx}
                                onClick={() => {
                                  if (opt.targetPage && onNavigate) {
                                    onNavigate(opt.targetPage);
                                  } else if (opt.isAction) {
                                    onOpenApplyModal();
                                  } else if (opt.targetId) {
                                    handleLinkClick(opt.targetId);
                                  }
                                  setActiveDropdown(null);
                                }}
                                className="group flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-[#FBF4D7]/60 transition-all duration-200 cursor-pointer"
                              >
                                <span className="text-[13px] font-medium text-[#8C1515]/80 group-hover:text-[#8C1515] group-hover:translate-x-1 transition-all duration-200 font-sans">
                                  {opt.label}
                                </span>
                                <ArrowRight className="w-3 h-3 text-[#8C1515] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))
                ) : (
                  dropdownMenus[activeDropdown].categories.map((cat, catIdx) => (
                    <div key={catIdx} className="flex flex-col space-y-3">
                      {/* Category Header */}
                      <div className="flex items-center space-x-2 pb-2 border-b border-gray-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8C1515]" />
                        <h4 className="text-[12px] font-extrabold tracking-wider text-[#8C1515] uppercase font-sans">
                          {cat.heading}
                        </h4>
                      </div>

                      {/* Category Options List */}
                      <div className="flex flex-col space-y-1.5">
                        {cat.options.map((opt, optIdx) => (
                          <div
                            key={optIdx}
                            onClick={() => {
                              if (opt.targetPage && onNavigate) {
                                onNavigate(opt.targetPage);
                              } else if (opt.isAction) {
                                onOpenApplyModal();
                              } else if (opt.targetId) {
                                handleLinkClick(opt.targetId);
                              }
                              setActiveDropdown(null);
                            }}
                            className="group flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-[#FBF4D7]/60 transition-all duration-200 cursor-pointer"
                          >
                            <span className="text-[13px] font-medium text-[#8C1515]/80 group-hover:text-[#8C1515] group-hover:translate-x-1 transition-all duration-200 font-sans">
                              {opt.label}
                            </span>
                            <ArrowRight className="w-3 h-3 text-[#8C1515] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Right Side: Featured Banner Card (Matching Chandigarh University style highlight) */}
              {dropdownMenus[activeDropdown].featuredImage && (
                <div className="w-full lg:w-[280px] xl:w-[320px] shrink-0 flex items-stretch">
                  <div className="relative overflow-hidden rounded-[20px] w-full border border-gray-100 shadow-md group flex flex-col justify-end p-6 bg-[#8C1515]">
                    <img
                      src={dropdownMenus[activeDropdown].featuredImage}
                      alt={dropdownMenus[activeDropdown].featuredTitle}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-40 mix-blend-overlay"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#8C1515] via-[#8C1515]/70 to-transparent"></div>
                    
                    <div className="relative z-10 flex flex-col space-y-2">
                      <div className="inline-flex items-center space-x-1.5 bg-[#8C1515] text-white text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded w-fit">
                        <span>HKBK Highlights</span>
                      </div>
                      <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                        {dropdownMenus[activeDropdown].featuredTitle}
                      </h3>
                      <p className="text-xs text-white/70 font-sans line-clamp-2">
                        Explore state-of-the-art facilities, world-class faculty, and industry-partnered programs.
                      </p>
                      <button
                        onClick={() => {
                          onOpenApplyModal();
                          setActiveDropdown(null);
                        }}
                        className="mt-2 flex items-center space-x-2 text-xs font-bold text-[#EBD8D0] hover:text-white transition-colors cursor-pointer"
                      >
                        <span>Admissions Open 2026</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#8C1515] border-t border-white/10 shadow-2xl z-50 py-6 px-6 flex flex-col space-y-4 max-h-[calc(100vh-120px)] overflow-y-auto">
          
          {/* Quick admission helpline for mobile */}
          <div className="flex items-center bg-white/15 border border-white/20 rounded-[8px] p-3 justify-between">
            <div className="flex items-center space-x-2.5">
              <Phone className="w-4.5 h-4.5 text-white" />
              <div className="flex flex-col text-left">
                <span className="text-[8px] text-white/80 font-bold uppercase tracking-wider">Helpline</span>
                <span className="text-[12px] text-white font-bold">1800 103 4444</span>
              </div>
            </div>
            <a href="tel:18001034444" className="bg-white text-[#8C1515] text-[10px] font-bold px-2.5 py-1 rounded">
              CALL NOW
            </a>
          </div>

          {/* Expandable Navigation Accordion */}
          <div className="flex flex-col space-y-2">
            {Object.values(dropdownMenus).map((menu) => {
              const isExpanded = mobileExpandedSection === menu.id;
              return (
                <div key={menu.id} className="border-b border-white/10 pb-2">
                  <button
                    onClick={() => setMobileExpandedSection(isExpanded ? null : menu.id)}
                    className="w-full flex items-center justify-between text-left py-2.5 text-sm font-bold tracking-wide text-white hover:text-[#EBD8D0]"
                  >
                    <span>{menu.title}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180 text-[#EBD8D0]" : "text-white/60"}`} />
                  </button>

                  {isExpanded && (
                    <div className="pl-3 pt-2 pb-3 flex flex-col space-y-4 bg-black/20 rounded-xl p-3 my-1">
                      {menu.categories.map((cat, catIdx) => (
                        <div key={catIdx} className="flex flex-col space-y-1.5">
                          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#EBD8D0]">
                            {cat.heading}
                          </span>
                          {cat.options.map((opt, optIdx) => (
                            <button
                              key={optIdx}
                              onClick={() => {
                                if (opt.targetPage && onNavigate) {
                                  onNavigate(opt.targetPage);
                                } else if (opt.isAction) {
                                  onOpenApplyModal();
                                } else if (opt.targetId) {
                                  handleLinkClick(opt.targetId);
                                }
                                setMobileMenuOpen(false);
                              }}
                              className="text-left text-xs text-white/80 hover:text-white py-1 transition-colors"
                            >
                              • {opt.label}
                            </button>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Direct CTAs */}
          <div className="flex flex-col space-y-3 pt-4">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenLoginModal(); }}
              className="w-full py-2.5 rounded-lg text-xs font-semibold border border-white/30 text-white text-center bg-transparent hover:bg-white/10 transition-all"
            >
              Sign In to Portal
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenApplyModal(); }}
              className="w-full py-2.5 rounded-lg text-xs font-semibold bg-[#8C1515] text-white text-center hover:bg-[#FBF4D7] hover:text-[#8C1515] transition-all duration-300 flex justify-center items-center space-x-1.5 shadow-[0_4px_16px_rgba(140, 21, 21,0.25)] border border-transparent hover:border-[#8C1515]/20"
            >
              <span>Apply for Admissions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      )}

    </header>
  );
}
