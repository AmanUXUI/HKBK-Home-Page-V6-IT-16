import React from "react";
import { motion } from "motion/react";
import { 
  Users, 
  GraduationCap, 
  Globe, 
  Award, 
  Trophy, 
  Building2, 
  Rocket, 
  UserCheck,
  Star 
} from "lucide-react";

interface Tilt3DCardProps {
  children: React.ReactNode;
  className?: string;
}

// Interactive 3D Cursor Tilt Card Component
const Tilt3DCard: React.FC<Tilt3DCardProps> = ({ children, className = "" }) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = React.useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  const [glareStyle, setGlareStyle] = React.useState({ opacity: 0, x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation angles (max ~14 degrees)
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.03, 1.03, 1.03) translateZ(12px)`
    );
    setGlareStyle({ opacity: 0.35, x: glareX, y: glareY });
  };

  const handleMouseLeave = () => {
    setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateZ(0px)");
    setGlareStyle({ opacity: 0, x: 50, y: 50 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: "transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.2s ease-out",
        transformStyle: "preserve-3d",
      }}
      className={`relative overflow-hidden cursor-pointer ${className}`}
    >
      {/* Dynamic Specular Glare / Light Reflection Effect */}
      <div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300 rounded-[20px]"
        style={{
          opacity: glareStyle.opacity,
          background: `radial-gradient(circle at ${glareStyle.x}% ${glareStyle.y}%, rgba(255, 255, 255, 0.35) 0%, rgba(140, 21, 21, 0.15) 30%, rgba(0, 0, 0, 0) 70%)`,
        }}
      />
      {children}
    </div>
  );
}

export default function KeyHighlights() {
  const statsData = [
    {
      id: "stat-1",
      icon: <Users className="w-7 h-7 text-white" />,
      number: "250+",
      unit: "",
      title: "Recruiting Partners",
      subtitle: "Strong industry collaborations for better opportunities",
    },
    {
      id: "stat-2",
      icon: <GraduationCap className="w-7 h-7 text-white" />,
      number: "25+",
      unit: "",
      title: "Nationalities on Campus",
      subtitle: "A diverse community that inspires global perspectives",
    },
    {
      id: "stat-3",
      icon: <Globe className="w-7 h-7 text-white" />,
      number: "14",
      unit: "Acres",
      title: "Wi-Fi Enabled Green Campus",
      subtitle: "A connected and sustainable campus environment",
    },
    {
      id: "stat-4",
      icon: <Award className="w-7 h-7 text-white" />,
      number: "35+",
      unit: "",
      title: "Accreditations & Recognitions",
      subtitle: "Recognized for quality education and excellence",
    },
    {
      id: "stat-5",
      icon: <Trophy className="w-7 h-7 text-white" />,
      number: "#7",
      unit: "",
      title: "Among Top Colleges in Bangalore*",
      subtitle: "A legacy of academic excellence and student success",
    },
  ];

  const logoCards = [
    {
      name: "NAAC",
      title: "NAAC Accredited",
      logo: (
        <div className="flex flex-col items-center justify-center py-1">
          <img 
            src="https://i.postimg.cc/ydVJ1RzX/image.png" 
            alt="NAAC Accreditation Logo" 
            className="h-20 sm:h-24 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      )
    },
    {
      name: "IIC",
      title: "IIC innovation lab",
      logo: (
        <div className="flex flex-col items-center justify-center py-1">
          <img 
            src="https://i.postimg.cc/j5rHzCY2/image.png" 
            alt="Institution's Innovation Council Logo" 
            className="h-20 sm:h-24 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      )
    },
    {
      name: "Certiport",
      title: "Certiport",
      logo: (
        <div className="flex flex-col items-center justify-center py-1">
          <img 
            src="https://i.postimg.cc/7Z3Y5L9n/image.png" 
            alt="Certiport Authorized Testing Center Logo" 
            className="h-18 sm:h-22 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      )
    },
    {
      name: "Microsoft",
      title: "microsoft",
      logo: (
        <div className="flex flex-col items-center justify-center py-1">
          <img 
            src="https://i.postimg.cc/5y5b67qz/image.png" 
            alt="Microsoft Logo" 
            className="h-16 sm:h-20 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      )
    },
    {
      name: "NBA",
      title: "NBA Accredited",
      logo: (
        <div className="flex flex-col items-center justify-center py-1">
          <img 
            src="https://imgh.in/host/e5d8sj" 
            alt="NBA Accreditation Logo" 
            className="h-16 sm:h-20 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      )
    }
  ];

  return (
    <section 
      className="py-20 px-4 md:px-12 text-white font-sans relative overflow-hidden bg-cover bg-center bg-no-repeat" 
      id="key-highlights"
      style={{
        backgroundImage: "url('https://imgh.in/host/i0g062')"
      }}
    >
      {/* Accessibility Gradient Overlays */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-0" />
      <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black/95 via-black/80 to-transparent pointer-events-none z-0" />

      {/* Decorative Dotted Grid Patterns in Top Corners */}
      <div className="absolute top-8 left-8 w-28 h-28 opacity-15 pointer-events-none hidden lg:block z-0">
        <svg width="100%" height="100%" fill="none">
          <pattern id="grid-dots-tl" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#ffffff" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-dots-tl)" />
        </svg>
      </div>

      <div className="absolute top-8 right-8 w-28 h-28 opacity-15 pointer-events-none hidden lg:block z-0">
        <svg width="100%" height="100%" fill="none">
          <pattern id="grid-dots-tr" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#ffffff" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-dots-tr)" />
        </svg>
      </div>

      <div className="max-w-[1360px] mx-auto relative z-10">
        
        {/* HEADER AREA */}
        <div className="flex flex-col items-center text-center mb-12">
          {/* Eyebrow Subtitle */}
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 sm:w-12 h-[1.5px] bg-white/80" />
            <span className="text-white font-mono text-[11px] sm:text-[12.5px] font-bold tracking-[0.2em] uppercase">
              BUILDING TOMORROW'S LEADERS
            </span>
            <div className="w-8 sm:w-12 h-[1.5px] bg-white/80" />
          </div>

          {/* Main Display Title */}
          <h2 className="font-serif text-white font-normal text-4xl sm:text-6xl lg:text-7xl tracking-tight text-center mb-3">
            By the Numbers
          </h2>

          {/* Subtitle */}
          <p className="text-white/70 text-sm sm:text-base font-sans font-medium text-center max-w-xl">
            HKBK Group of Institutions at a Glance
          </p>
        </div>

        {/* 5 STAT CARDS GRID WITH 3D CURSOR TILT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5 mb-8">
          {statsData.map((stat, idx) => (
            <Tilt3DCard key={stat.id} className="h-full rounded-[24px]">
              <div className="bg-gradient-to-b from-white via-[#FCFBF8] to-[#F5F2EA] border border-white/60 hover:border-[#8C1515] rounded-[24px] p-6 flex flex-col items-center text-center justify-between h-full min-h-[320px] shadow-[0_14px_35px_rgba(0,0,0,0.35)] hover:shadow-[0_22px_50px_rgba(140, 21, 21,0.3)] transition-all duration-500 relative group overflow-hidden">
                
                {/* Ambient Soft Radial Lighting */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#8C1515]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#8C1515]/20 transition-all duration-500" />
                
                {/* Top Subtle Index & Status Indicator */}
                <div className="w-full flex justify-between items-center mb-1 relative z-10">
                  <span className="text-[28px] font-['Manrope'] font-[800] leading-none tracking-tight text-[#8C1515]/30 group-hover:text-[#8C1515] transition-colors duration-300">
                    0{idx + 1}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#8C1515] group-hover:scale-125 group-hover:bg-[#E63946] transition-all duration-300 shadow-[0_0_10px_rgba(140, 21, 21,0.6)]" />
                </div>

                {/* Red Circular Icon Badge with Glowing Halo */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#8B1A1E] via-[#8C1515] to-[#FF5C67] p-0.5 flex items-center justify-center shadow-[0_8px_20px_rgba(140, 21, 21,0.35)] border border-white/40 my-1 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10">
                  <div className="w-full h-full rounded-[14px] flex items-center justify-center bg-gradient-to-b from-black/10 to-black/40 backdrop-blur-xs text-white">
                    {stat.icon}
                  </div>
                </div>

                {/* Big Popping Stat Number */}
                <div className="my-2 relative z-10">
                  <div className="font-sans font-black text-5xl sm:text-[54px] tracking-tight leading-none flex items-baseline justify-center select-none">
                    <span className="text-[#1F0002] group-hover:text-[#8C1515] drop-shadow-[0_2px_10px_rgba(0,0,0,0.08)] transition-colors duration-300">
                      {stat.number}
                    </span>
                    {stat.unit && (
                      <span className="text-base sm:text-lg font-extrabold text-[#8C1515] group-hover:text-[#8B1A1E] ml-1.5 transition-colors duration-300 font-sans tracking-normal">
                        {stat.unit}
                      </span>
                    )}
                  </div>

                  {/* Main Title Label */}
                  <h3 className="text-[#2D0B0E] font-sans font-bold text-sm sm:text-[15px] mt-3 leading-snug tracking-wide group-hover:text-[#8C1515] transition-colors">
                    {stat.title}
                  </h3>
                </div>

                {/* Sub-description */}
                <p className="text-[#5A383C] text-[12px] sm:text-[12.5px] leading-relaxed font-sans mb-1 max-w-[210px] group-hover:text-[#2D0B0E] transition-colors relative z-10">
                  {stat.subtitle}
                </p>

                {/* Bottom Accent Line */}
                <div className="w-12 h-1 rounded-full bg-gradient-to-r from-transparent via-[#8C1515]/30 to-transparent group-hover:w-24 group-hover:via-[#8C1515] transition-all duration-500 mt-2 relative z-10" />

                {/* Bottom Right Dot Pattern Overlay */}
                <div className="absolute right-3 bottom-3 opacity-20 pointer-events-none group-hover:opacity-50 transition-opacity">
                  <div className="grid grid-cols-3 gap-1">
                    <div className="w-1 h-1 rounded-full bg-[#8C1515]" />
                    <div className="w-1 h-1 rounded-full bg-[#8C1515]" />
                    <div className="w-1 h-1 rounded-full bg-[#8C1515]" />
                    <div className="w-1 h-1 rounded-full bg-[#8C1515]" />
                    <div className="w-1 h-1 rounded-full bg-[#8C1515]" />
                    <div className="w-1 h-1 rounded-full bg-[#8C1515]" />
                  </div>
                </div>

              </div>
            </Tilt3DCard>
          ))}
        </div>

        {/* BOTTOM FEATURE BANNER STRIP */}
        <div className="bg-gradient-to-r from-[#1D0307]/90 via-[#150205]/95 to-[#1D0307]/90 border border-[#8C1515]/35 rounded-2xl p-4 sm:p-5 shadow-[0_12px_36px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 items-center divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            
            {/* Feature 1 */}
            <div className="flex items-center space-x-3.5 px-3 py-2 sm:py-0">
              <div className="p-2.5 rounded-xl bg-[#8C1515]/10 border border-[#8C1515]/20 shrink-0 text-[#8C1515]">
                <GraduationCap className="w-6 h-6 text-[#E63946]" />
              </div>
              <span className="text-xs sm:text-[13.5px] font-bold text-white leading-snug font-sans">
                Industry-Integrated Programs
              </span>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center space-x-3.5 px-3 py-2 sm:py-0">
              <div className="p-2.5 rounded-xl bg-[#8C1515]/10 border border-[#8C1515]/20 shrink-0 text-[#8C1515]">
                <UserCheck className="w-6 h-6 text-[#E63946]" />
              </div>
              <span className="text-xs sm:text-[13.5px] font-bold text-white leading-snug font-sans">
                Strong Placement Support
              </span>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center space-x-3.5 px-3 py-2 sm:py-0">
              <div className="p-2.5 rounded-xl bg-[#8C1515]/10 border border-[#8C1515]/20 shrink-0 text-[#8C1515]">
                <Building2 className="w-6 h-6 text-[#E63946]" />
              </div>
              <span className="text-xs sm:text-[13.5px] font-bold text-white leading-snug font-sans">
                Academic Excellence & Innovation
              </span>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center space-x-3.5 px-3 py-2 sm:py-0">
              <div className="p-2.5 rounded-xl bg-[#8C1515]/10 border border-[#8C1515]/20 shrink-0 text-[#8C1515]">
                <Rocket className="w-6 h-6 text-[#E63946]" />
              </div>
              <span className="text-xs sm:text-[13.5px] font-bold text-white leading-snug font-sans">
                Building a Brighter Tomorrow
              </span>
            </div>

          </div>
        </div>

        {/* FOOTNOTE */}
        <p className="text-right text-[11px] text-white/40 mt-3 font-sans">
          *Source: Times of India (2024)
        </p>

        {/* ACCREDITATIONS & RECOGNITION MARQUEE BELOW */}
        <div className="mt-16 border-t border-white/10 pt-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center space-x-3">
              <Award className="w-7 h-7 text-[#8C1515] shrink-0" />
              <span className="text-[28px] font-['Manrope'] font-[800] tracking-wide text-white uppercase leading-none">
                ACCREDITATIONS & RECOGNITIONS
              </span>
            </div>
            <span className="text-xs sm:text-sm text-white/60 font-sans">
              Validated by leading national and global governing bodies
            </span>
          </div>

          <div className="bg-[#120609]/80 rounded-[20px] p-6 border border-white/10 overflow-hidden relative">
            {/* Fade gradients on left & right edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#120609] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#120609] to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex gap-6 select-none shrink-0"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 25,
                repeat: Infinity,
              }}
            >
              {[...logoCards, ...logoCards].map((item, idx) => (
                <div
                  key={`marquee-${item.name}-${idx}`}
                  className="bg-white rounded-[14px] p-5 flex flex-col items-center justify-between shadow-md h-[180px] w-[180px] shrink-0 text-center transition-transform duration-300 hover:scale-[1.04] cursor-pointer"
                >
                  <div className="flex-1 flex items-center justify-center w-full">
                    {item.logo}
                  </div>
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-2 block">
                    {item.title}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

