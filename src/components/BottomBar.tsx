import React from "react";
import { PhoneCall } from "lucide-react";
import { motion } from "motion/react";

interface BottomBarProps {
  activeTab: string;
  setActiveTab: (tabId: string) => void;
  onOpenCallbackModal: () => void;
}

export default function BottomBar({ activeTab, setActiveTab, onOpenCallbackModal }: BottomBarProps) {
  const tabs = [
    { id: "home", label: "Highlights" },
    { id: "why-hkbk", label: "Why HKBK" },
    { id: "programmes", label: "Programs" },
    { id: "success-roadmap", label: "Roadmap" },
    { id: "scroll-story", label: "Tech Track" },
    { id: "projects-innovation", label: "Research" },
    { id: "career-success", label: "Placements" },
    { id: "placement-booklet", label: "Brochure" },
    { id: "our-team", label: "Mentors" },
    { id: "campus-life", label: "Campus" },
    { id: "success-reels", label: "Student Stories" },
    { id: "news-events", label: "News & Events" },
    { id: "admission-process", label: "Admissions" },
    { id: "faqs", label: "FAQs" }
  ];

  const barContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!barContainerRef.current) return;
    const activeButton = barContainerRef.current.querySelector('[data-active="true"]');
    if (activeButton) {
      activeButton.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [activeTab]);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed bottom-6 left-0 right-0 z-40 px-4 md:px-8 pointer-events-none flex justify-center">
      <div className="w-full max-w-7xl xl:max-w-[1380px] flex items-center justify-between pointer-events-auto">
        
        {/* Floating Glass Navigation Bar */}
        <div 
          ref={barContainerRef}
          className="flex-1 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-brand-neutral/80 p-1.5 flex items-center overflow-x-auto xl:overflow-x-visible no-scrollbar mr-3 scroll-smooth"
        >
          <div className="flex items-center justify-between w-full space-x-1 min-w-max xl:min-w-0 px-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  data-active={isActive}
                  className="relative flex-shrink-0 xl:flex-shrink xl:flex-1 text-center py-2 px-2 xl:px-1 text-[11px] xl:text-[11.5px] font-medium tracking-wide transition-all rounded-xl cursor-pointer"
                >
                  {/* Sliding active background with Cobalt color as brand primary active state */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBackground"
                      className="absolute inset-0 bg-brand-cobalt rounded-xl z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 block truncate ${isActive ? "text-white font-semibold" : "text-brand-cobalt/70 hover:text-brand-cobalt"}`}>
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Floating Call Helpline Button */}
        <button
          onClick={onOpenCallbackModal}
          className="flex-shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#8C1515] text-white flex items-center justify-center hover:bg-[#721111] shadow-[0_4px_16px_rgba(140,21,21,0.25)] hover:-translate-y-0.5 active:scale-90 transition-all duration-300 cursor-pointer animate-bounce"
          title="Request Call Back"
        >
          <PhoneCall className="w-5 h-5 text-white" />
        </button>

      </div>
    </div>
  );
}
