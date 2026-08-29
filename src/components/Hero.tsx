import React from "react";
import { motion } from "motion/react";
import { ChevronDown, ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenApplyModal: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onOpenApplyModal, onExploreClick }: HeroProps) {
  return (
    <section className="relative w-full min-h-[78vh] md:min-h-[82vh] flex flex-col justify-center overflow-hidden bg-[#0F1015]" id="home">
      
      {/* Immersive Background Image & Native Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Background poster image with subtle scale */}
        <img
          src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1920&q=80"
          alt="HKBK Advanced Robotic Lab & AI Research Sandbox"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        
        {/* Native HTML5 Ambient Video (Clean, No Cross-Origin Script Execution) */}
        <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden opacity-40 mix-blend-screen">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none"
            poster="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1920&q=80"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-42867-large.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Softer Vignette Overlay on the sides to let the video shine clearly */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[40%] bg-gradient-to-r from-[#0F1015]/40 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-full lg:w-[30%] bg-gradient-to-l from-[#0F1015]/30 to-transparent z-10 pointer-events-none" />
        {/* High contrast gradient ONLY at the bottom of the hero to guarantee white text readability */}
        <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-[#0F1015] via-[#0F1015]/80 to-transparent z-10 pointer-events-none" />
        {/* Very subtle full-bleed tint to blend colors without washing out the video brightness */}
        <div className="absolute inset-0 bg-[#0F1015]/10 z-[1] pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-none mx-auto w-full px-4 md:px-12 lg:px-16 xl:px-24 pt-16 md:pt-24 pb-20 lg:pb-24 flex flex-col justify-end min-h-[72vh] md:min-h-[78vh]">
        
        {/* Main Grid Layout matching the screenshot perfectly */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end w-full">
          
          {/* LEFT COLUMN: Large Display Headline, Action Buttons, Intake Deadline */}
          <div className="lg:col-span-8 flex flex-col items-start text-left space-y-8 relative">
            
            <motion.h1 
               initial={{ opacity: 0, y: 25 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[40px] md:text-[54px] lg:text-[62px] xl:text-[66px] leading-[1.08] font-bold tracking-tight text-white max-w-none select-none font-serif drop-shadow-[0_4px_16px_rgba(24,26,77,0.5)]"
            >
              AI-First Curriculum &<br />Campus for Future Innovators
            </motion.h1>

            {/* CTA Action Buttons with exactly instructed color guidelines */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              {/* Primary Apply Now button styled in Action Blue #8C1515 strictly for action CTAs */}
              <button
                onClick={onOpenApplyModal}
                className="bg-[#8C1515] hover:bg-[#FBF4D7] hover:text-[#8C1515] border border-transparent hover:border-[#8C1515]/20 text-white font-medium px-8 py-4 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 shadow-[0_4px_16px_rgba(140, 21, 21,0.25)] hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                <span>Apply Now</span>
                <span className="font-normal">→</span>
              </button>

              {/* Secondary/Explore Button - Solid white surface matching screenshot */}
              <button
                onClick={onExploreClick}
                className="bg-white hover:bg-[#FBF4D7] text-[#8C1515] font-medium px-7 py-4 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer shadow-md"
              >
                <span>Explore Programmes</span>
                <ChevronDown className="w-4 h-4 text-[#8C1515]/60" />
              </button>
            </motion.div>

            {/* Real-time intake deadline badge for urgency, positioned below the flow so button bottom aligns with right column */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute top-full pt-4 left-0 text-[12px] md:text-[13px] text-white/60 font-normal tracking-wide"
            >
              Admissions Are Open: <span className="text-[#EBD8D0] font-medium">June 2026</span>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Industry Integrated text and corporate logos cloud */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end text-center lg:text-right space-y-6 pt-8 lg:pt-0 lg:pb-1">
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-2 drop-shadow-[0_2px_8px_rgba(24,26,77,0.5)]"
            >
              <h2 className="text-white text-xl sm:text-2xl md:text-[26px] font-semibold tracking-wide leading-snug">
                Industry Integrated Programmes
              </h2>
              <p className="text-white/90 text-sm sm:text-base font-semibold">
                Built by 100+ leaders from
              </p>
            </motion.div>

            {/* Premium Corporate Logo Marquee with custom smooth infinite flow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="w-full max-w-[360px] sm:max-w-lg lg:max-w-[520px] relative overflow-hidden"
            >
              <div className="animate-marquee flex gap-12 items-center whitespace-nowrap py-2">
                {/* SET 1 */}
                <div className="flex items-center shrink-0 opacity-85 hover:opacity-100 transition-opacity">
                  <img
                    src="https://imgh.in/host/h9nkts"
                    alt="Company Logo"
                    className="h-10 sm:h-11 md:h-12 w-auto object-contain max-w-[150px]"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex items-center shrink-0 opacity-85 hover:opacity-100 transition-opacity">
                  <img
                    src="https://imgh.in/host/egvdlb"
                    alt="Company Logo"
                    className="h-10 sm:h-11 md:h-12 w-auto object-contain max-w-[150px]"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex items-center shrink-0 opacity-85 hover:opacity-100 transition-opacity">
                  <img
                    src="https://imgh.in/host/bj3nqy"
                    alt="Company Logo"
                    className="h-10 sm:h-11 md:h-12 w-auto object-contain max-w-[150px]"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* SET 2 (Duplicate for seamless scroll loop) */}
                <div className="flex items-center shrink-0 opacity-85 hover:opacity-100 transition-opacity">
                  <img
                    src="https://imgh.in/host/h9nkts"
                    alt="Company Logo"
                    className="h-10 sm:h-11 md:h-12 w-auto object-contain max-w-[150px]"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex items-center shrink-0 opacity-85 hover:opacity-100 transition-opacity">
                  <img
                    src="https://imgh.in/host/egvdlb"
                    alt="Company Logo"
                    className="h-10 sm:h-11 md:h-12 w-auto object-contain max-w-[150px]"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex items-center shrink-0 opacity-85 hover:opacity-100 transition-opacity">
                  <img
                    src="https://imgh.in/host/bj3nqy"
                    alt="Company Logo"
                    className="h-10 sm:h-11 md:h-12 w-auto object-contain max-w-[150px]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}
