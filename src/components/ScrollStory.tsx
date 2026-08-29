import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "motion/react";
import { Compass, Cpu, Target, Award, Shield, CheckCircle2, Layers, Users } from "lucide-react";

interface StorySlide {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  headline: string;
  description: string;
  features: string[];
  image: string;
  icon: React.ReactNode;
}

export default function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Track scroll position of the entire scroll storytelling track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const slides: StorySlide[] = [
    {
      id: "ai-powered",
      number: "01",
      eyebrow: "ENTERPRISE AI",
      title: "AI-Powered Engineering",
      headline: "AI-Powered Engineering",
      description: "Learn with enterprise AI tools integrated into your academics and projects.",
      features: [
        "₹1 Crore+ worth of AI token credits & premium AI utilities for every student."
      ],
      image: "https://imgh.in/host/sm5o0f",
      icon: <Cpu className="w-4 h-4 text-[#8C1515]" />
    },
    {
      id: "unified-platform",
      number: "02",
      eyebrow: "DIGITAL CAMPUS",
      title: "One Platform. Complete Learning.",
      headline: "One Platform. Complete Learning.",
      description: "Manage your academic journey through a unified digital platform.",
      features: [
        "Integrated Student App for attendance, fees, projects, sprint tracking, assessments, and mentor reviews."
      ],
      image: "https://imgh.in/host/7g888j",
      icon: <Layers className="w-4 h-4 text-[#8C1515]" />
    },
    {
      id: "expert-mentors",
      number: "03",
      eyebrow: "PROFESSIONAL GROWTH",
      title: "Mentored by Industry Experts",
      headline: "Mentored by Industry Experts",
      description: "Learn modern tools, workflows, and best practices from experienced professionals.",
      features: [
        "Mentorship from Big Tech professionals supported by Research Assistants throughout your project journey."
      ],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1600",
      icon: <Users className="w-4 h-4 text-[#8C1515]" />
    },
    {
      id: "cross-functional",
      number: "04",
      eyebrow: "COLLABORATIVE WORK",
      title: "Cross-Functional Product Teams",
      headline: "Cross-Functional Product Teams",
      description: "Collaborate like a real technology company with dedicated roles across the product lifecycle.",
      features: [
        "Students work in Product, UI/UX, Development, QA, AI, and Testing teams to build complete solutions."
      ],
      image: "https://imgh.in/host/h63qok",
      icon: <Target className="w-4 h-4 text-[#8C1515]" />
    },
    {
      id: "build-products",
      number: "05",
      eyebrow: "INCUBATION & STARTUPS",
      title: "Build Products That Matter",
      headline: "Build Products That Matter",
      description: "Transform ideas into deployable solutions through continuous innovation and incubation.",
      features: [
        "AI Incubation Centre supporting product development, innovation, and startup initiatives."
      ],
      image: "https://imgh.in/host/isnxrn",
      icon: <Shield className="w-4 h-4 text-[#8C1515]" />
    }
  ];

  // Map scroll progress to the active index cleanly to avoid text overlap
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Divide into 5 equal ranges
    const index = Math.min(
      Math.floor(latest * slides.length),
      slides.length - 1
    );
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  });

  // Smooth scroll handler
  const handleDotClick = (index: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const totalScrollableHeight = rect.height - window.innerHeight;
    const targetScrollY = scrollTop + rect.top + (index / (slides.length - 1)) * totalScrollableHeight;
    
    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth"
    });
  };

  const currentSlide = slides[activeIndex];

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[320vh] bg-[#000000]" 
      id="scroll-story"
      style={{ contentVisibility: "auto" }}
    >
      {/* Sticky Container (100vh) */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col justify-between">
        
        {/* FULL COVER BACKGROUND IMAGES */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-black">
          {slides.map((slide, idx) => {
            const isActive = idx === activeIndex;

            return (
              <motion.div
                key={`bg-${slide.id}`}
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  scale: isActive ? 1 : 1.04,
                  zIndex: isActive ? 2 : 1,
                }}
                transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0 w-full h-full"
                style={{ willChange: "transform, opacity" }}
              >
                <img
                  src={slide.image}
                  alt={slide.headline}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  loading="eager"
                />
              </motion.div>
            );
          })}

          {/* High-legibility vignette overlays matching #000000 theme - calibrated for crisp contrast */}
          <div className="absolute inset-0 bg-black/40 z-1 pointer-events-none" />
          
          {/* Vertical gradient to protect text on mobile and add rich depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-1 pointer-events-none md:hidden" />
          
          {/* Strong horizontal gradient across text zone for desktop to ensure WCAG AAA accessibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-transparent z-1 pointer-events-none hidden md:block" />
          
          {/* Subtle radial center highlight */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(39,50,134,0.15),transparent_90%)] z-1 pointer-events-none" />
        </div>

        {/* Outer Layout Frame - with top padding clearance so content never goes under sticky header */}
        <div className="relative w-full h-full max-w-[1320px] mx-auto z-10 grid grid-cols-1 md:grid-cols-12 md:gap-8 items-center h-full pt-[160px] pb-10 px-6 sm:px-12 md:px-16 lg:px-20">
          
          {/* COMPACT CONTENT COLUMN (Desktop & Mobile) */}
          <div className="col-span-1 md:col-span-8 lg:col-span-7 flex flex-col justify-center relative">
            
            {/* AnimatePresence guarantees buttery smooth transitions with ZERO overlap */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -25, filter: "blur(6px)" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 py-4 max-w-[620px]"
              >
                <div className="relative z-10 flex flex-col items-start">
                  
                  {/* 1. Large Thin Number like reference image */}
                  <div className="text-[72px] sm:text-[96px] md:text-[112px] lg:text-[128px] font-thin font-sans text-white leading-none tracking-tight mb-2 sm:mb-3 select-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
                    {currentSlide.number}
                  </div>

                  {/* 2. Big Bold Headline */}
                  <h2 className="text-white text-[32px] sm:text-[42px] md:text-[48px] lg:text-[54px] font-sans font-extrabold leading-[1.08] tracking-tight mb-3 sm:mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                    {currentSlide.headline}
                  </h2>

                  {/* 3. Subtext Description */}
                  <p className="text-white/95 text-base sm:text-lg md:text-[19px] leading-relaxed font-sans font-normal mb-5 max-w-[540px] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                    {currentSlide.description}
                  </p>

                  {/* 4. High-Contrast Accessible Feature Pill */}
                  <div className="inline-flex items-center gap-3 bg-black/80 backdrop-blur-xl border border-white/25 py-2.5 px-4.5 rounded-xl shadow-[0_12px_36px_rgba(0,0,0,0.8)] max-w-full">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF4D4D] shadow-[0_0_10px_rgba(255,77,77,0.9)] animate-pulse shrink-0" />
                    <span className="text-[13px] sm:text-[14.5px] font-medium text-white font-sans leading-snug tracking-wide">
                      {currentSlide.features[0]}
                    </span>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Spacer / decorative side */}
          <div className="col-span-1 md:col-span-4 lg:col-span-5 h-full pointer-events-none hidden md:block" />

        </div>

        {/* Mobile Horizontal Progress Bar Indicator (Visible only on mobile/tablet) */}
        <div className="w-full px-6 py-4 bg-[#000000]/95 backdrop-blur-md border-t border-white/10 flex items-center justify-between md:hidden z-20">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-white/60 uppercase">CARD:</span>
            <span className="text-sm font-mono font-black tracking-widest text-white bg-[#8C1515] px-2.5 py-0.5 rounded-md shadow-sm border border-white/20">
              0{activeIndex + 1}
            </span>
            <span className="text-xs font-mono text-white/40">/ 0{slides.length}</span>
          </div>

          <div className="flex gap-1.5 items-center">
            {slides.map((_, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={`mbar-${idx}`}
                  onClick={() => handleDotClick(idx)}
                  aria-label={`Go to card 0${idx + 1}`}
                  className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${
                    isActive ? "w-8 bg-[#8C1515]" : "w-3 bg-white/20"
                  }`}
                />
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
