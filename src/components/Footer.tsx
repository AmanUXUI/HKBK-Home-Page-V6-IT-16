import React from "react";
import { 
  Facebook, 
  Youtube, 
  Linkedin, 
  Twitter, 
  Instagram, 
  ChevronRight, 
  MapPin,
  Phone,
  Mail,
  Globe,
  ExternalLink
} from "lucide-react";

export default function Footer() {
  const footerSections = [
    {
      title: "APPLY HERE",
      links: [
        { label: "Apply Now", href: "#admission-process", isHighlight: true },
        { label: "Admissions", href: "#admission-process" },
        { label: "How to Apply?", href: "#admission-process" },
        { label: "Eligibility & Admission Process", href: "#admission-process" },
        { label: "Scholarships", href: "#success-roadmap" },
        { label: "Education Loan Assistance", href: "#admission-process" },
        { label: "Admission Office", href: "#footer" },
        { label: "Student Feedback", href: "#success-reels" },
        { label: "International Student Admissions", href: "#admission-process" },
        { label: "Fee Structure", href: "#admission-process" },
        { label: "Pay Fee Online", href: "#admission-process" },
      ],
    },
    {
      title: "LEARN HERE",
      links: [
        { label: "HKBK College of Engineering", href: "#programmes" },
        { label: "HKBK Degree College", href: "#programmes" },
        { label: "HKBK PU College", href: "#programmes" },
        { label: "HKBK Health Sciences", href: "#programmes" },
        { label: "Academic Calendar", href: "#key-highlights" },
        { label: "Teaching & Learning Practices", href: "#key-highlights" },
        { label: "IQAC", href: "#why-hkbk" },
        { label: "Accreditation & Approvals", href: "#credibility-rankings" },
        { label: "Committees", href: "#why-hkbk" },
      ],
    },
    {
      title: "EXPERIENCE HKBK",
      links: [
        { label: "Campus Life", href: "#campus-life" },
        { label: "Hostels", href: "#campus-life" },
        { label: "Transportation", href: "#campus-life" },
        { label: "Sports", href: "#campus-life" },
        { label: "Cultural Activities", href: "#campus-life" },
        { label: "Student Clubs", href: "#campus-life" },
        { label: "Student Welfare", href: "#campus-life" },
        { label: "Libraries", href: "#campus-life" },
        { label: "Innovation & Entrepreneurship", href: "#why-hkbk" },
        { label: "Incubation Centre", href: "#why-hkbk" },
        { label: "Industry Interaction", href: "#scroll-story" },
        { label: "Internships", href: "#scroll-story" },
        { label: "Placements", href: "#scroll-story" },
        { label: "Alumni", href: "#success-reels" },
      ],
    },
    {
      title: "CAREER & OPPORTUNITIES",
      links: [
        { label: "HKBK Career Services", href: "#scroll-story" },
        { label: "Placement Highlights", href: "#scroll-story" },
        { label: "Industry Partnerships", href: "#scroll-story" },
        { label: "Internships", href: "#scroll-story" },
        { label: "Entrepreneurship", href: "#why-hkbk" },
        { label: "Startup Support", href: "#why-hkbk" },
        { label: "Student Ambassadors", href: "#campus-life" },
        { label: "Faculty Opportunities", href: "#our-team" },
        { label: "Careers at HKBK", href: "#our-team" },
      ],
    },
    {
      title: "VISIT HERE",
      links: [
        { label: "Campus Tour", href: "#campus-life" },
        { label: "Google Maps", href: "https://maps.google.com/?q=HKBK+Group+of+Institutions+Bangalore", isExternal: true },
        { label: "Contact Us", href: "#footer" },
        { label: "Events & Activities", href: "#news-events" },
        { label: "Student Stories", href: "#success-reels" },
        { label: "Alumni Stories", href: "#success-reels" },
        { label: "Bangalore City Guide", href: "#campus-life" },
      ],
    },
    {
      title: "STUDENT SUPPORT",
      links: [
        { label: "Grievance Redressal Cell", href: "#faqs" },
        { label: "Student Support Services", href: "#campus-life" },
        { label: "Anti-Ragging Committee", href: "#faqs" },
        { label: "Internal Complaints Committee", href: "#faqs" },
        { label: "Discipline & Student Conduct", href: "#faqs" },
        { label: "Anti-Discrimination Cell", href: "#faqs" },
        { label: "Student Counselling", href: "#campus-life" },
        { label: "Student Feedback", href: "#success-reels" },
      ],
    },
    {
      title: "IMPORTANT LINKS",
      links: [
        { label: "Mandatory Disclosure", href: "#faqs" },
        { label: "Privacy Policy", href: "#faqs" },
        { label: "Terms & Conditions", href: "#faqs" },
        { label: "Disclaimer", href: "#faqs" },
        { label: "Sitemap", href: "#footer" },
        { label: "Certificate Verification", href: "#faqs" },
      ],
    },
  ];

  const socialLinks = [
    { label: "Instagram", icon: <Instagram className="w-4 h-4" />, url: "https://instagram.com/hkbkinstitutions" },
    { label: "Facebook", icon: <Facebook className="w-4 h-4" />, url: "https://facebook.com/hkbkinstitutions" },
    { label: "YouTube", icon: <Youtube className="w-4 h-4" />, url: "https://youtube.com/hkbkinstitutions" },
    { label: "LinkedIn", icon: <Linkedin className="w-4 h-4" />, url: "https://linkedin.com/school/hkbkinstitutions" },
    { label: "X / Twitter", icon: <Twitter className="w-4 h-4" />, url: "https://twitter.com/hkbkinstitutions" },
  ];

  return (
    <footer className="bg-[#120202] text-white/70 pt-16 pb-12 px-4 md:px-10 border-t border-white/10 relative overflow-hidden font-sans" id="footer">
      
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#8C1515]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8C1515]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* TOP MAIN GRID: 7 Link Columns + 1 Contact Column */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 pb-14 border-b border-white/10 text-xs">
          
          {/* Render 7 Link Columns */}
          {footerSections.map((section, idx) => (
            <div key={idx} className="flex flex-col space-y-3">
              <h3 className="text-[#8C1515] font-extrabold tracking-wider text-[11px] uppercase border-b border-[#8C1515]/20 pb-2">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href={link.href}
                      target={link.isExternal ? "_blank" : undefined}
                      rel={link.isExternal ? "noreferrer" : undefined}
                      className={`transition-colors duration-200 flex items-center gap-1 leading-snug ${
                        link.isHighlight 
                          ? "text-[#EBD8D0] font-bold hover:text-white" 
                          : "text-white/70 hover:text-[#EBD8D0]"
                      }`}
                    >
                      <ChevronRight className="w-2.5 h-2.5 text-[#8C1515] shrink-0 opacity-70" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 8: GET IN TOUCH */}
          <div className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-1 flex flex-col space-y-3 text-xs">
            <h3 className="text-[#8C1515] font-extrabold tracking-wider text-[11px] uppercase border-b border-[#8C1515]/20 pb-2">
              GET IN TOUCH
            </h3>
            
            <div className="space-y-3 text-white/80 leading-relaxed">
              <p className="font-bold text-white text-[13px]">HKBK Group of Institutions</p>
              
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#8C1515] shrink-0 mt-0.5" />
                <span>No. 22/1, Nagawara, Bangalore – 560045, Karnataka, India</span>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#8C1515] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-[#EBD8D0]">Admissions Helpline:</span>
                  <span className="font-semibold text-white">+91 90350 00224 / 225</span>
                  <span className="text-[10px] uppercase font-bold text-[#EBD8D0] mt-1">General Enquiries:</span>
                  <span>+91 80 2544 1722 / 3844</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#8C1515] shrink-0" />
                <a href="mailto:admissions@hkbk.edu.in" className="hover:text-[#EBD8D0] underline decoration-[#8C1515]/40">
                  admissions@hkbk.edu.in
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#8C1515] shrink-0" />
                <a href="https://www.hkbk.edu.in" target="_blank" rel="noreferrer" className="hover:text-[#EBD8D0] font-semibold">
                  www.hkbk.edu.in
                </a>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <p className="text-[10px] font-extrabold tracking-widest uppercase text-[#EBD8D0]">
                FOLLOW HKBK
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                {socialLinks.map((s, sIdx) => (
                  <a
                    key={sIdx}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    title={s.label}
                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#8C1515] hover:border-[#8C1515] transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* MIDDLE BAR: Statutory Badges & Accreditations */}
        <div className="py-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold uppercase tracking-wider text-white/50">
          <div className="flex flex-wrap items-center gap-6">
            <span className="text-white/80">NAAC Accredited</span>
            <span className="text-white/20">•</span>
            <span className="text-white/80">AICTE Approved</span>
            <span className="text-white/20">•</span>
            <span className="text-white/80">VTU Affiliated</span>
            <span className="text-white/20">•</span>
            <span className="text-white/80">NIRF Ranked</span>
            <span className="text-white/20">•</span>
            <span className="text-white/80">Anti-Ragging Policy</span>
          </div>

          <div className="flex items-center space-x-4 text-white/60 text-[11px]">
            <a href="#faqs" className="hover:text-[#EBD8D0]">Mandatory Disclosure</a>
            <span>|</span>
            <a href="#faqs" className="hover:text-[#EBD8D0]">Privacy Policy</a>
            <span>|</span>
            <a href="#faqs" className="hover:text-[#EBD8D0]">Sitemap</a>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-3 text-center sm:text-left">
          <p>© HKBK Group of Institutions. All Rights Reserved.</p>
          <p className="text-[11px] text-white/30">
            Designed for Academic Excellence & Impact • Bangalore, India
          </p>
        </div>

      </div>
    </footer>
  );
}

