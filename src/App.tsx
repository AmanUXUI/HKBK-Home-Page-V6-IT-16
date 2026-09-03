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
import VisionMissionPage from "./components/VisionMissionPage";
import LeadershipPage from "./components/LeadershipPage";
import RecognitionApprovalsPage from "./components/RecognitionApprovalsPage";
import AwardsRankingsPage from "./components/AwardsRankingsPage";
import AccreditationPage from "./components/AccreditationPage";
import IQACPage from "./components/IQACPage";
import CSEProgramPage from "./components/CSEProgramPage";
import ECEProgramPage from "./components/ECEProgramPage";
import MEProgramPage from "./components/MEProgramPage";
import ISEProgramPage from "./components/ISEProgramPage";
import AIMLProgramPage from "./components/AIMLProgramPage";
import ResearchProgramsPage from "./components/ResearchProgramsPage";
import { type PageType } from "./components/Header";
import { AnimatePresence } from "motion/react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");
  const [activeTab, setActiveTab] = useState("home");
  const [modalType, setModalType] = useState<"apply" | "login" | "callback" | null>(null);

  const handleNavigate = (page: PageType) => {
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
      ) : currentPage === "vision-mission" ? (
        <VisionMissionPage 
          onOpenApplyModal={() => handleOpenModal("apply")}
          onNavigateHome={() => handleNavigate("home")}
          onNavigateOverview={() => handleNavigate("overview")}
        />
      ) : currentPage === "leadership" ? (
        <LeadershipPage 
          onOpenApplyModal={() => handleOpenModal("apply")}
          onNavigateHome={() => handleNavigate("home")}
          onNavigateOverview={() => handleNavigate("overview")}
          onNavigateVisionMission={() => handleNavigate("vision-mission")}
        />
      ) : currentPage === "recognition-approvals" ? (
        <RecognitionApprovalsPage
          onOpenApplyModal={() => handleOpenModal("apply")}
          onNavigateHome={() => handleNavigate("home")}
          onNavigateOverview={() => handleNavigate("overview")}
        />
      ) : currentPage === "awards-rankings" ? (
        <AwardsRankingsPage
          onOpenApplyModal={() => handleOpenModal("apply")}
          onNavigateHome={() => handleNavigate("home")}
          onNavigateOverview={() => handleNavigate("overview")}
        />
      ) : currentPage === "accreditation" ? (
        <AccreditationPage
          onOpenApplyModal={() => handleOpenModal("apply")}
          onNavigateHome={() => handleNavigate("home")}
          onNavigateOverview={() => handleNavigate("overview")}
          onNavigateRecognitionApprovals={() => handleNavigate("recognition-approvals")}
          onNavigateIQAC={() => handleNavigate("iqac")}
        />
      ) : currentPage === "iqac" ? (
        <IQACPage
          onOpenApplyModal={() => handleOpenModal("apply")}
          onNavigateHome={() => handleNavigate("home")}
          onNavigateOverview={() => handleNavigate("overview")}
          onNavigateAccreditation={() => handleNavigate("accreditation")}
        />
      ) : currentPage === "cse-program" ? (
        <CSEProgramPage
          onOpenApplyModal={() => handleOpenModal("apply")}
          onOpenLoginModal={() => handleOpenModal("login")}
          onNavigateHome={() => handleNavigate("home")}
        />
      ) : currentPage === "ece-program" ? (
        <ECEProgramPage
          onOpenApplyModal={() => handleOpenModal("apply")}
          onOpenLoginModal={() => handleOpenModal("login")}
          onNavigateHome={() => handleNavigate("home")}
        />
      ) : currentPage === "me-program" ? (
        <MEProgramPage
          onOpenApplyModal={() => handleOpenModal("apply")}
          onOpenLoginModal={() => handleOpenModal("login")}
          onNavigateHome={() => handleNavigate("home")}
        />
      ) : currentPage === "ise-program" ? (
        <ISEProgramPage
          onOpenApplyModal={() => handleOpenModal("apply")}
          onOpenLoginModal={() => handleOpenModal("login")}
          onNavigateHome={() => handleNavigate("home")}
        />
      ) : currentPage === "aiml-program" ? (
        <AIMLProgramPage
          onOpenApplyModal={() => handleOpenModal("apply")}
          onOpenLoginModal={() => handleOpenModal("login")}
          onNavigateHome={() => handleNavigate("home")}
        />
      ) : currentPage === "research-programs" ? (
        <ResearchProgramsPage
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
          <Programmes 
            onOpenApplyModal={() => handleOpenModal("apply")} 
            onNavigate={handleNavigate}
          />
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

      {/* Sticky Bottom Tab Bar (Highlights bar) - visible on Home page only */}
      {currentPage === "home" && (
        <BottomBar
          activeTab={activeTab}
          setActiveTab={(tabId) => {
            setActiveTab(tabId);
          }}
          onOpenCallbackModal={() => handleOpenModal("callback")}
        />
      )}

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
