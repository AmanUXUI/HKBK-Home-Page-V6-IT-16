import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CredibilityRankings from "./components/CredibilityRankings";
import OurInstitutes from "./components/OurInstitutes";
import KeyHighlights from "./components/KeyHighlights";
import Programmes from "./components/Programmes";
import FindCourse from "./components/FindCourse";
import SuccessRoadmap from "./components/SuccessRoadmap";
import ScrollStory from "./components/ScrollStory";
import ProjectsResearch from "./components/ProjectsResearch";
import CareerSuccess from "./components/CareerSuccess";
import PlacementBooklet from "./components/PlacementBooklet";
import OurTeam from "./components/OurTeam";
import CampusLife from "./components/CampusLife";
import StudentSuccessStories from "./components/StudentSuccessStories";
import NewsEvents from "./components/NewsEvents";
import AdmissionProcess from "./components/AdmissionProcess";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import BottomBar from "./components/BottomBar";
import InteractiveModal from "./components/InteractiveModal";
import OverviewPage from "./components/OverviewPage";
import { AnimatePresence } from "motion/react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "overview">("home");
  const [activeTab, setActiveTab] = useState("home");
  const [modalType, setModalType] = useState<"apply" | "login" | "callback" | null>(null);

  const handleNavigate = (page: "home" | "overview") => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scrollspy to detect active section in view
  useEffect(() => {
    if (currentPage !== "home") return;

    const sections = [
      "home",
      "institutes",
      "highlights",
      "programmes",
      "success-roadmap",
      "scroll-story",
      "projects-innovation",
      "career-success",
      "placement-booklet",
      "our-team",
      "campus-life",
      "success-reels",
      "news-events",
      "admission-process",
      "faqs"
    ];
    
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -50% 0px", // Focus on viewport center
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [currentPage]);

  const handleOpenModal = (type: "apply" | "login" | "callback") => {
    setModalType(type);
  };

  const handleCloseModal = () => {
    setModalType(null);
  };

  const scrollToProgrammes = () => {
    const el = document.getElementById("programmes");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-[#FBF4D7] min-h-screen text-brand-navy select-none selection:bg-brand-lime/50 font-sans antialiased overflow-x-clip">
      
      {/* Premium Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenApplyModal={() => handleOpenModal("apply")}
        onOpenLoginModal={() => handleOpenModal("login")}
      />

      {currentPage === "overview" ? (
        <OverviewPage 
          onOpenApplyModal={() => handleOpenModal("apply")}
          onNavigateHome={() => handleNavigate("home")}
        />
      ) : (
        <>
          {/* Main Authentic Hero Section (Screenshot Replica) */}
          <Hero
            onOpenApplyModal={() => handleOpenModal("apply")}
            onExploreClick={scrollToProgrammes}
          />

          {/* Credibility and Rankings Section */}
          <CredibilityRankings />

          {/* Our Institutes Section */}
          <OurInstitutes />

          {/* Beautiful Bento-style Key Highlights Section (Screenshot Replica) */}
          <KeyHighlights />

          <FindCourse onOpenApplyModal={() => handleOpenModal("apply")} />

          {/* Dynamic Sub-sections */}
          <Programmes onOpenApplyModal={() => handleOpenModal("apply")} />
          <SuccessRoadmap />
          <ScrollStory />
          <ProjectsResearch />
          <CareerSuccess />
          <PlacementBooklet />
          <OurTeam />
          <CampusLife />
          <StudentSuccessStories />
          <NewsEvents />
          <AdmissionProcess />
          <FAQs />
        </>
      )}

      <Footer />

      {/* Sticky Bottom Tab Bar (Highlights bar) */}
      <BottomBar
        activeTab={activeTab}
        setActiveTab={(tabId) => {
          if (currentPage !== "home") {
            setCurrentPage("home");
            setTimeout(() => {
              setActiveTab(tabId);
              const element = document.getElementById(tabId);
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }, 100);
          } else {
            setActiveTab(tabId);
          }
        }}
        onOpenCallbackModal={() => handleOpenModal("callback")}
      />

      {/* Shared Interactive Modals */}
      <AnimatePresence>
        {modalType && (
          <InteractiveModal
            type={modalType}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
