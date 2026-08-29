import React, { useState } from "react";
import { ArrowDownToLine, CheckCircle, Sparkles, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function PlacementBooklet() {
  const [downloadState, setDownloadState] = useState<"idle" | "loading" | "success">("idle");

  const handleDownload = () => {
    setDownloadState("loading");
    setTimeout(() => {
      setDownloadState("success");
      // Reset back to idle after a few seconds
      setTimeout(() => setDownloadState("idle"), 4000);
    }, 1500);
  };

  return (
    <section className="pb-24 px-4 md:px-10 bg-white text-[#8C1515] font-sans" id="placement-booklet">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Booklet Card Container resembling the screenshot precisely with premium dark styling */}
        <div className="bg-[#000000] border border-white/10 rounded-[24px] p-6 md:p-8 shadow-[0_24px_50px_rgba(0,0,0,0.4)] hover:border-white/20 transition-all duration-500 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* LEFT COLUMN: 3D-like Book Cover mockup (Cols 1 to 3) */}
            <div className="lg:col-span-3 flex justify-center lg:justify-start">
              <div className="relative w-[180px] sm:w-[210px] aspect-[3/4] rounded-r-xl shadow-[10px_16px_32px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:scale-[1.03] overflow-hidden bg-[#8C1515] border-l-4 border-[#8C1515]">
                {/* Spine Highlight Shadow */}
                <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/30 via-black/10 to-transparent z-20" />
                
                {/* Book Content Cover */}
                <div className="absolute inset-0 z-10 select-none">
                  <img 
                    src="https://i.postimg.cc/HnP2hWZP/Book.png" 
                    alt="Placement Booklet Cover" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* High quality realistic sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none z-15" />
              </div>
            </div>

            {/* RIGHT COLUMN: Content and controls (Cols 4 to 12) */}
            <div className="lg:col-span-9 flex flex-col text-left space-y-6">
              
              {/* Badge */}
              <div>
                <span className="inline-flex items-center space-x-1.5 bg-[#8C1515]/20 text-[#FBF4D7] border border-[#8C1515]/40 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF6B72]" />
                  <span>Placement Booklet 2025-26</span>
                </span>
              </div>

              {/* Main Audited Statement Heading with customized color tokens */}
              <h3 className="text-xl md:text-3xl font-bold tracking-tight text-white leading-[1.3] font-sans">
                <span className="text-[#FBF4D7] font-black">94.3%</span> placement rate, with a highest package of <span className="text-[#FBF4D7] font-black underline decoration-[#8C1515] decoration-4">₹21.9 LPA</span> and an average package of <span className="font-extrabold text-white/95">₹6.2 LPA</span>.
              </h3>

              {/* Bullet Features Grid */}
              <div className="flex flex-wrap gap-3 pt-1">
                <div className="inline-flex items-center space-x-1.5 bg-white/5 text-[#EBD8D0] text-xs font-semibold px-3.5 py-2 rounded-full border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B72]" />
                  <span>100% Audited Records</span>
                </div>
                <div className="inline-flex items-center space-x-1.5 bg-white/5 text-[#EBD8D0] text-xs font-semibold px-3.5 py-2 rounded-full border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B72]" />
                  <span>Top Tech & Health Recruiter Tier</span>
                </div>
                <span className="text-xs text-white/60 self-center font-medium italic">and more</span>
              </div>

              {/* Button & Audited-by Logo Tier */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-white/10">
                
                {/* Download Button */}
                <div className="shrink-0">
                  <button
                    onClick={handleDownload}
                    disabled={downloadState === "loading"}
                    className="relative inline-flex items-center justify-center space-x-2 bg-[#8C1515] hover:bg-[#FBF4D7] hover:text-[#8C1515] disabled:bg-[#8C1515]/50 border border-transparent hover:border-[#8C1515]/20 text-white px-7 py-3.5 rounded-xl shadow-[0_4px_16px_rgba(140, 21, 21,0.35)] hover:translate-y-[-2px] active:translate-y-[0px] transition-all duration-300 font-bold text-sm uppercase tracking-wide cursor-pointer w-full sm:w-auto overflow-hidden min-w-[210px]"
                  >
                    <AnimatePresence mode="wait">
                      {downloadState === "idle" && (
                        <motion.div 
                          key="idle"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="flex items-center space-x-2"
                        >
                          <span>Download Booklet</span>
                          <ArrowDownToLine className="w-4 h-4" />
                        </motion.div>
                      )}
                      
                      {downloadState === "loading" && (
                        <motion.div 
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center space-x-2"
                        >
                          <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Generating PDF...</span>
                        </motion.div>
                      )}

                      {downloadState === "success" && (
                        <motion.div 
                          key="success"
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.9, opacity: 0 }}
                          className="flex items-center space-x-2 text-[#EBD8D0]"
                        >
                          <CheckCircle className="w-4 h-4" />
                          <span>Report Downloaded!</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>



              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
