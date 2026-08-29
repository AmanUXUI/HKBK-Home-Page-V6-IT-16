import React, { useState, useRef, useEffect } from "react";
import { 
  ArrowLeft, 
  ArrowRight, 
  Cpu, 
  FileCode, 
  Award, 
  FlaskConical, 
  Users, 
  Lightbulb, 
  Bookmark, 
  Sparkles, 
  Eye, 
  BookOpen, 
  Layers,
  CheckCircle,
  ExternalLink
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Project {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  team: string;
  mentor: string;
  status: string; // e.g. "IEEE Published", "Patent Filed", "Winner - National Hackathon"
  techStack: string[];
  breakthrough: string;
  domainIcon: React.ReactNode;
  iconBgColor: string;
  tagColor: string;
}

export default function ProjectsResearch() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      category: "Artificial Intelligence & AgriTech",
      title: "AI-Powered Autonomous Crop Health Monitoring System",
      description: "A dual-drone and robotic sensing framework utilizing localized computer vision models to evaluate plant disease vectors, soil moisture anomalies, and canopy density in real-time.",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800",
      team: "Aravind Swamy, Meera Jasmine (CSE - 6th Sem)",
      mentor: "Dr. Syed Mustaq (Professor, AI Dept)",
      status: "Patent Filed & Published (Ref: 202541029410)",
      techStack: ["PyTorch", "YOLOv8 Edge", "Nvidia Jetson Nano", "ROS", "LoRaWAN"],
      breakthrough: "Achieved 97.4% accuracy in multi-canopy blight detection with sub-second local inference latency.",
      domainIcon: <Cpu className="w-5 h-5 text-[#84CC16]" />,
      iconBgColor: "bg-[#84CC16]/10 border-[#84CC16]/20",
      tagColor: "text-[#84CC16] border-[#84CC16]/30 bg-[#84CC16]/5"
    },
    {
      id: 2,
      category: "Blockchain & Renewable Energy",
      title: "Decentralized Smart Grid Peer-to-Peer Energy Trading",
      description: "An Ethereum-compatible layer-2 protocol enabling microgrid solar prosumers to automatically trade surplus kilowatt hours via secure self-executing smart contracts.",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800",
      team: "Rahul Sen, Tufail Ahmed (ISE - 8th Sem)",
      mentor: "Prof. K. R. Srivatsa (HOD, Information Science)",
      status: "Published in IEEE Xplore (SST Vol. 14)",
      techStack: ["Solidity", "Hardhat", "IPFS", "React.js", "Web3.js", "ESP32 Sensor"],
      breakthrough: "Reduced energy distribution transmission losses by 14% via decentralized routing optimization.",
      domainIcon: <Layers className="w-5 h-5 text-blue-400" />,
      iconBgColor: "bg-blue-400/10 border-blue-400/20",
      tagColor: "text-blue-400 border-blue-400/30 bg-blue-400/5"
    },
    {
      id: 3,
      category: "Cybersecurity & Digital Health",
      title: "Cryptographically Secured Decentralized Patient EMR",
      description: "A Zero-Knowledge Proof (ZKP) medical records infrastructure that guarantees absolute patient data privacy while allowing instant secure audits by verified clinics.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      team: "Neha Roy, Rohan Malhotra (CSE - 7th Sem)",
      mentor: "Dr. Cynthia Joseph (Dean of Research)",
      status: "Best Project Award - National Cyber Summit",
      techStack: ["ZKP (Circom)", "IPFS Storage", "Hyperledger Fabric", "NextJS", "JWT"],
      breakthrough: "Guarantees 100% HIPAA-compliant file isolation even during active local gateway hijack simulation.",
      domainIcon: <FileCode className="w-5 h-5 text-amber-400" />,
      iconBgColor: "bg-amber-400/10 border-amber-400/20",
      tagColor: "text-amber-400 border-amber-400/30 bg-amber-400/5"
    },
    {
      id: 4,
      category: "Robotics & Biomedical Engineering",
      title: "Myoelectric Gesture-Controlled Robotic Prosthetic Arm",
      description: "An adaptive low-cost hand prosthesis that decodes muscle electrical signals via surface EMG pads and translates them into smooth mechanical finger grips.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
      team: "Vikram Singhal, Aditi Rao (ECE & ME - 6th Sem)",
      mentor: "Dr. S. K. Nair (Professor, Robotics & ECE)",
      status: "Featured in DST India Innovation Expo",
      techStack: ["Arduino Pro", "Myoware EMG Sensor", "3D-PETG Print", "C++ PID Loops", "MATLAB"],
      breakthrough: "Created a tactile-feedback grip costing 90% less than industrial grade biomedical counterparts.",
      domainIcon: <FlaskConical className="w-5 h-5 text-purple-400" />,
      iconBgColor: "bg-purple-400/10 border-purple-400/20",
      tagColor: "text-purple-400 border-purple-400/30 bg-purple-400/5"
    },
    {
      id: 5,
      category: "Edge Computing & Autonomous Systems",
      title: "Low-Latency Edge AI for Autonomous Drone Swarms",
      description: "A decentralized swarm communications layout utilizing cellular vehicle-to-everything (C-V2X) parameters to avoid dynamic mid-air collisions without relying on GPS coordinates.",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800",
      team: "Zaheer Khan, Sneha Patil (CSE & ECE - 8th Sem)",
      mentor: "Dr. G. Prabhakar (HOD, Electronics)",
      status: "Research Paper Accepted at IEEE ICRA 2026",
      techStack: ["ROS2 Swarm", "C-V2X Module", "YOLO v8 Nano", "Jetson Orin", "Python"],
      breakthrough: "Decentralized decision latency decreased to 8ms, enabling full-scale swarm coordination in thick canopy forests.",
      domainIcon: <Sparkles className="w-5 h-5 text-pink-400" />,
      iconBgColor: "bg-pink-400/10 border-pink-400/20",
      tagColor: "text-pink-400 border-pink-400/30 bg-pink-400/5"
    }
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Scroll by 85% of viewport width
      const scrollAmount = clientWidth * 0.85;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      // Calculate active dot index based on percentage
      if (scrollWidth - clientWidth <= 0) return;
      const percentage = scrollLeft / (scrollWidth - clientWidth);
      const index = Math.round(percentage * (projects.length - 1));
      setActiveDot(index);
    }
  };

  const scrollToProject = (index: number) => {
    if (scrollRef.current) {
      const { scrollWidth, clientWidth } = scrollRef.current;
      const targetScrollLeft = (index / (projects.length - 1)) * (scrollWidth - clientWidth);
      scrollRef.current.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth"
      });
      setActiveDot(index);
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-white text-[#8C1515] font-sans overflow-hidden relative border-t border-neutral-200" id="projects-innovation">
      
      {/* Ambient Soft Luminous Lighting */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#EBD8D0]/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[550px] h-[550px] bg-[#8C1515]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          {/* Eyebrow label */}
          <div className="inline-flex items-center space-x-2 bg-[#EBD8D0] text-[#8C1515] text-[11px] font-bold tracking-[0.08em] uppercase rounded-full py-1.5 px-4 mb-4 shadow-xs border border-[#8C1515]/10">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>DISCOVERY & CREATION</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#8C1515] tracking-tight leading-none mb-4">
            Projects, Innovation <span className="font-bold">and Research</span>
          </h2>
          <p className="max-w-2xl mx-auto font-sans text-[15px] sm:text-[16px] text-neutral-600 leading-[1.75] mt-4">
            At HKBK, academic theory takes flight through high-impact student projects, patent filings, and peer-reviewed IEEE publications mentored by leading doctoral faculty.
          </p>
        </div>

        {/* INFINITE MARQUEE SLIDER */}
        <div className="relative mt-12 w-full overflow-hidden">
          {/* High-end gradient edge fades */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Marquee Track container */}
          <div 
            className="animate-marquee flex gap-6 hover:[animation-play-state:paused] py-4"
            style={{ animationDuration: '40s' }}
          >
            {[...projects, ...projects, ...projects].map((project, idx) => (
              <div 
                key={`${project.id}-${idx}`}
                onClick={() => setSelectedProject(project)}
                className="w-[310px] sm:w-[350px] shrink-0 bg-[#FDFAEC] border border-[#8C1515]/15 hover:border-[#8C1515]/50 rounded-[24px] overflow-hidden group cursor-pointer transition-all duration-300 shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_rgba(140,21,21,0.15)] hover:-translate-y-1 flex flex-col h-[400px]"
              >
                {/* Top Image Section (Crisp and Clear) */}
                <div className="relative h-[220px] w-full overflow-hidden shrink-0 bg-neutral-100">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Floating Status Pill top left matching reference layout */}
                  <div className="absolute top-4 left-4 bg-[#8C1515] text-white text-[9px] font-extrabold uppercase px-3 py-1.5 rounded-[6px] tracking-wider flex items-center gap-1.5 shadow-md z-10">
                    <Award className="w-3.5 h-3.5 text-[#EBD8D0]" />
                    <span>{project.status.toUpperCase()}</span>
                  </div>
                </div>

                {/* Bottom Core Content: Category and Heading only (Extremely Clean) */}
                <div className="p-5 flex-1 flex flex-col justify-between text-left bg-[#FDFAEC] border-t border-[#8C1515]/10">
                  <div className="space-y-3">
                    {/* Domain Category line */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#8C1515]/10 border border-[#8C1515]/15 flex items-center justify-center text-[#8C1515] shrink-0">
                        {React.cloneElement(project.domainIcon as React.ReactElement<{ className?: string }>, { className: "w-3.5 h-3.5" })}
                      </div>
                      <span className="text-[10px] font-bold uppercase text-[#8C1515]/75 tracking-widest leading-none">
                        {project.category}
                      </span>
                    </div>

                    {/* Project Title / Heading under the category */}
                    <h3 className="font-sans font-extrabold text-[15px] sm:text-[16px] text-[#8C1515] leading-snug tracking-tight group-hover:text-[#8C1515] transition-colors duration-200 line-clamp-3">
                      {project.title}
                    </h3>
                  </div>

                  {/* Micro Interaction Hint */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#8C1515]/10 mt-4 text-[10px] font-bold text-[#8C1515]/60">
                    <span className="uppercase tracking-wider">HKBK Research</span>
                    <span className="text-[#8C1515] font-extrabold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Details &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* DETAILED RESEARCH POPUP MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            
            {/* Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Body container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-[#121330] border border-white/10 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col text-left"
            >
              
              {/* Close Button top-right */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/5 hover:bg-white/15 rounded-full p-2.5 transition-all cursor-pointer z-20 border border-white/10"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Scrollable interior */}
              <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-6">
                
                {/* Header info block */}
                <div className="space-y-3">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold border ${selectedProject.tagColor}`}>
                    {selectedProject.domainIcon}
                    <span>{selectedProject.category}</span>
                  </span>
                  
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white leading-tight">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Cover Image inside */}
                <div className="relative h-56 sm:h-72 w-full rounded-xl overflow-hidden bg-slate-900 border border-white/5">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-500 text-slate-950 font-black text-[10px] uppercase tracking-wider py-1 px-3 rounded-md flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>{selectedProject.status}</span>
                  </div>
                </div>

                {/* Descriptions */}
                <div className="space-y-4">
                  <h4 className="text-sm font-black text-[#EBD8D0] tracking-wider uppercase">Project Abstract</h4>
                  <p className="text-white/80 font-sans text-sm sm:text-base leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Team & Mentors Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-y border-white/10 py-5">
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase font-bold tracking-widest mb-1">Student Developers:</span>
                    <strong className="font-medium text-white text-sm">{selectedProject.team}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase font-bold tracking-widest mb-1">Faculty Mentor:</span>
                    <strong className="font-medium text-white text-sm">{selectedProject.mentor}</strong>
                  </div>
                </div>

                {/* Key Technology Stack Details */}
                <div className="space-y-3">
                  <h4 className="text-sm font-black text-[#EBD8D0] tracking-wider uppercase">Full Technology Parameters</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs font-semibold px-3 py-1.5 bg-white/5 text-white border border-white/10 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* High Fidelity Breakthrough Display Box */}
                <div className="bg-[#8C1515]/5 border border-[#8C1515]/20 rounded-xl p-5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#8C1515]/5 rounded-full blur-xl pointer-events-none" />
                  <span className="text-xs font-black text-[#EBD8D0] uppercase tracking-wider block mb-2">Key Scientific Accomplishment</span>
                  <p className="text-white text-sm sm:text-[15px] italic leading-relaxed font-semibold">
                    "{selectedProject.breakthrough}"
                  </p>
                </div>

              </div>

              {/* Actions Footer */}
              <div className="p-6 border-t border-white/10 bg-slate-950/40 flex justify-between items-center">
                <span className="text-xs text-white/50">HKBK Research Repository</span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="bg-[#8C1515] hover:bg-[#FBF4D7] hover:text-[#8C1515] border border-transparent hover:border-[#8C1515]/20 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1 cursor-pointer shadow-lg"
                >
                  <span>Close Window</span>
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
