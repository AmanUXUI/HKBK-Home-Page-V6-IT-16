import React, { useState } from "react";
import { ArrowLeft, ArrowRight, TrendingUp, Award, DollarSign, Building } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface StudentCard {
  id: number;
  name: string;
  company: string;
  package: string;
  image: string;
  bgColor: string;
  logo: React.ReactNode;
}

export default function CareerSuccess() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const students: StudentCard[] = [
    {
      id: 1,
      name: "Harsh Vardhan",
      company: "Amazon",
      package: "₹44.00 LPA",
      image: "https://imgh.in/host/03ygpr",
      bgColor: "from-amber-500/10 to-amber-500/20",
      logo: (
        <div className="flex flex-col items-end" title="Amazon">
          <span className="text-white font-bold text-[15px] leading-none tracking-tighter">amazon</span>
          <svg className="w-10 h-2.5 text-[#FF9900]" viewBox="0 0 50 15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M2 3c15 11 31 11 46 0" />
          </svg>
        </div>
      ),
    },
    {
      id: 2,
      name: "Shanya Trehan",
      company: "Microsoft",
      package: "₹51.00 LPA",
      image: "https://imgh.in/host/gfca9c",
      bgColor: "from-blue-500/10 to-blue-500/20",
      logo: (
        <div className="flex items-center space-x-1.5" title="Microsoft">
          <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
            <div className="bg-[#F25022] w-1.5 h-1.5"></div>
            <div className="bg-[#7FBA00] w-1.5 h-1.5"></div>
            <div className="bg-[#00A4EF] w-1.5 h-1.5"></div>
            <div className="bg-[#FFB900] w-1.5 h-1.5"></div>
          </div>
          <span className="text-white font-bold text-[14px] tracking-tight">Microsoft</span>
        </div>
      ),
    },
    {
      id: 3,
      name: "Pranav Gowda",
      company: "Google",
      package: "₹38.50 LPA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
      bgColor: "from-red-500/10 to-red-500/20",
      logo: (
        <div className="flex items-center space-x-1" title="Google">
          <span className="text-white font-bold text-[15px] tracking-tight">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </span>
        </div>
      ),
    },
    {
      id: 4,
      name: "Ananya Roy",
      company: "Adobe",
      package: "₹36.00 LPA",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
      bgColor: "from-red-600/10 to-red-600/20",
      logo: (
        <div className="flex items-center space-x-1" title="Adobe">
          <span className="text-white font-bold text-[15px] tracking-tight">Adobe</span>
        </div>
      ),
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % (students.length - 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + (students.length - 1)) % (students.length - 1));
  };

  const visibleStudents = [students[currentIndex], students[currentIndex + 1]];

  return (
    <section className="py-20 px-4 md:px-10 bg-white text-[#8C1515] font-sans border-t border-[#FBF4D7]" id="career-success">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid: Left Side Slider & Right Side Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Student Placements Cards (Slider) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative flex-grow">
              <AnimatePresence mode="popLayout">
                {visibleStudents.map((student) => (
                  <motion.div
                    key={student.id}
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="relative rounded-[24px] overflow-hidden aspect-[4/5] sm:aspect-auto sm:h-[500px] lg:h-[530px] xl:h-[560px] bg-gradient-to-b from-slate-900 to-slate-950 shadow-xl group cursor-pointer w-full flex flex-col justify-end"
                  >
                    {/* Background student image with original colors & high contrast */}
                    <img
                      src={student.image}
                      alt={student.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Professional dark-blue/black overlay limited to lower portion for crisp contrast and clear image */}
                    <div className="absolute bottom-0 left-0 right-0 h-[55%] bg-gradient-to-t from-black/95 via-black/40 to-transparent z-[2]" />
                    
                    {/* Floating Company Logo Top-Right */}
                    <div className="absolute top-5 right-5 z-[10] bg-[#8C1515]/90 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 shadow-lg">
                      {student.logo}
                    </div>

                    {/* Banner at Bottom-Left with Student placement highlights */}
                    <div className="absolute bottom-6 left-6 right-6 z-[10] text-left">
                      <div className="h-[1px] w-12 bg-[#8C1515] mb-3" />
                      
                      <h3 className="text-xl font-bold text-white tracking-tight mb-1 font-serif">
                        {student.name}
                      </h3>
                      <p className="text-white/70 text-xs font-medium tracking-wide mb-3">
                        Placed in {student.company}
                      </p>
                      
                      {/* Package Pill */}
                      <div className="inline-flex flex-col">
                        <span className="text-white/50 text-[10px] uppercase tracking-widest font-sans font-bold">Salary Package</span>
                        <div className="flex items-baseline space-x-1">
                          <span className="text-[#EBD8D0] text-2xl font-black font-sans tracking-tight">{student.package.split(" ")[0]}</span>
                          <span className="text-[#EBD8D0]/80 text-[13px] font-bold uppercase">{student.package.split(" ")[1]}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center space-x-3 mt-2 self-start">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-[#8C1515]/5 hover:bg-[#8C1515] text-[#8C1515] hover:text-white flex items-center justify-center border border-[#8C1515]/10 transition-all duration-300 cursor-pointer"
                aria-label="Previous student"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-[#8C1515]/5 hover:bg-[#8C1515] text-[#8C1515] hover:text-white flex items-center justify-center border border-[#8C1515]/10 transition-all duration-300 cursor-pointer"
                aria-label="Next student"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Copy / Stats Grid / Call to Action */}
          <div className="lg:col-span-6 flex flex-col text-left space-y-8">
            
            {/* Elegant section title */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-[#EBD8D0] text-[#8C1515] text-[11px] font-medium tracking-[0.08em] uppercase rounded py-1 px-3 mb-4 font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8C1515] animate-pulse" />
                <span>Career Success</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#8C1515] mb-6 leading-[1.1] font-serif">
                Placements That <br />
                Define <span className="text-[#8C1515] font-bold">Careers</span>
              </h2>
            </div>

            {/* Premium Stat Cards Grid matching the 4-box layout exactly */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 w-full">
              
              {/* Stat 1: 94% */}
              <div className="bg-[#F9F9FB] border border-[#FBF4D7] py-6 px-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex flex-col justify-center items-center text-center hover:border-[#EBD8D0]/50 transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-black text-[#84CC16] tracking-tight mb-2">
                  94%
                </div>
                <div className="text-[13px] font-bold text-[#8C1515] uppercase tracking-wide">
                  Placement Rate
                </div>
              </div>

              {/* Stat 2: 15 LPA */}
              <div className="bg-[#F9F9FB] border border-[#FBF4D7] py-6 px-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex flex-col justify-center items-center text-center hover:border-[#EBD8D0]/50 transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-black text-[#8C1515] tracking-tight mb-2 flex items-baseline justify-center">
                  <span>15</span>
                  <span className="text-lg sm:text-xl font-bold ml-1">LPA</span>
                </div>
                <div className="text-[13px] font-bold text-[#8C1515] uppercase tracking-wide">
                  Average Package
                </div>
              </div>

              {/* Stat 3: ₹31.4 LPA (Primary highlighted card) */}
              <div className="bg-[#8C1515] border border-transparent py-6 px-4 rounded-2xl shadow-lg flex flex-col justify-center items-center text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#EBD8D0]/10 rounded-full blur-xl pointer-events-none" />
                <div className="text-3xl sm:text-4xl font-black text-[#EBD8D0] tracking-tight mb-2 flex items-baseline justify-center z-10">
                  <span>₹31.4</span>
                  <span className="text-sm sm:text-base font-bold ml-1">LPA</span>
                </div>
                <div className="text-[13px] font-bold text-white uppercase tracking-wide z-10">
                  Highest Package
                </div>
              </div>

              {/* Stat 4: 150+ */}
              <div className="bg-[#F9F9FB] border border-[#FBF4D7] py-6 px-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex flex-col justify-center items-center text-center hover:border-[#EBD8D0]/50 transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-black text-[#8C1515] tracking-tight mb-2">
                  150+
                </div>
                <div className="text-[13px] font-bold text-[#8C1515] uppercase tracking-wide">
                  Hiring Partners
                </div>
              </div>

            </div>

            {/* Paragraph explanation */}
            <p className="text-gray-500 text-[15px] md:text-[16px] leading-[1.65] font-normal">
              HKBK's dedicated placement cell works year-round to ensure students walk into outstanding careers — from aptitude training and mock interviews to live industry exposure.
            </p>

            {/* CTA action button as per design system guidelines */}
            <div className="pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById("apply-btn");
                  if (el) el.click();
                }}
                className="inline-flex items-center space-x-2 bg-[#8C1515] hover:bg-[#FBF4D7] hover:text-[#8C1515] border border-transparent hover:border-[#8C1515]/20 text-white px-8 py-4 rounded-xl shadow-[0_4px_16px_rgba(140, 21, 21,0.25)] hover:translate-y-[-2px] transition-all duration-300 font-semibold cursor-pointer text-sm tracking-wide uppercase"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* BOTTOM COMPANY LOGOS MARQUEE GRID */}
        <div className="mt-16 bg-white rounded-[24px] px-8 py-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden relative flex flex-col gap-8">
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          {/* ROW 1: Slides Left */}
          <div className="animate-marquee flex items-center space-x-16 whitespace-nowrap">
            {/* SET 1 */}
            {[
              { src: "https://imgh.in/host/blkywl", alt: "Recruiter Partner 1" },
              { src: "https://imgh.in/host/5os621", alt: "Recruiter Partner 2" },
              { src: "https://imgh.in/host/bcazu6", alt: "Recruiter Partner 3" },
              { src: "https://imgh.in/host/2pl2ye", alt: "Recruiter Partner 4" },
              { src: "https://imgh.in/host/izqmwk", alt: "Recruiter Partner 5" },
              { src: "https://imgh.in/host/jre7sw", alt: "Recruiter Partner 6" },
            ].map((logo, idx) => (
              <div 
                key={`row1-set1-${idx}`} 
                className="flex items-center justify-center shrink-0 h-10 px-2 opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="max-h-8 w-auto object-contain select-none pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}

            {/* SET 2 (Duplicate for infinite seamless loop) */}
            {[
              { src: "https://imgh.in/host/blkywl", alt: "Recruiter Partner 1" },
              { src: "https://imgh.in/host/5os621", alt: "Recruiter Partner 2" },
              { src: "https://imgh.in/host/bcazu6", alt: "Recruiter Partner 3" },
              { src: "https://imgh.in/host/2pl2ye", alt: "Recruiter Partner 4" },
              { src: "https://imgh.in/host/izqmwk", alt: "Recruiter Partner 5" },
              { src: "https://imgh.in/host/jre7sw", alt: "Recruiter Partner 6" },
            ].map((logo, idx) => (
              <div 
                key={`row1-set2-${idx}`} 
                className="flex items-center justify-center shrink-0 h-10 px-2 opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="max-h-8 w-auto object-contain select-none pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>

          {/* ROW 2: Slides Right */}
          <div className="animate-marquee-right flex items-center space-x-16 whitespace-nowrap">
            {/* SET 1 */}
            {[
              { src: "https://imgh.in/host/shdq5t", alt: "Recruiter Partner 7" },
              { src: "https://imgh.in/host/bxwboi", alt: "Recruiter Partner 8" },
              { src: "https://imgh.in/host/bf7t9h", alt: "Recruiter Partner 9" },
              { src: "https://imgh.in/host/xs9985", alt: "Recruiter Partner 10" },
              { src: "https://imgh.in/host/m94yln", alt: "Recruiter Partner 11" },
              { src: "https://imgh.in/host/ylbq0l", alt: "Recruiter Partner 12" },
              { src: "https://imgh.in/host/jm8cdx", alt: "Recruiter Partner 13" },
            ].map((logo, idx) => (
              <div 
                key={`row2-set1-${idx}`} 
                className="flex items-center justify-center shrink-0 h-10 px-2 opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="max-h-8 w-auto object-contain select-none pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}

            {/* SET 2 (Duplicate for infinite seamless loop) */}
            {[
              { src: "https://imgh.in/host/shdq5t", alt: "Recruiter Partner 7" },
              { src: "https://imgh.in/host/bxwboi", alt: "Recruiter Partner 8" },
              { src: "https://imgh.in/host/bf7t9h", alt: "Recruiter Partner 9" },
              { src: "https://imgh.in/host/xs9985", alt: "Recruiter Partner 10" },
              { src: "https://imgh.in/host/m94yln", alt: "Recruiter Partner 11" },
              { src: "https://imgh.in/host/ylbq0l", alt: "Recruiter Partner 12" },
              { src: "https://imgh.in/host/jm8cdx", alt: "Recruiter Partner 13" },
            ].map((logo, idx) => (
              <div 
                key={`row2-set2-${idx}`} 
                className="flex items-center justify-center shrink-0 h-10 px-2 opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="max-h-8 w-auto object-contain select-none pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
