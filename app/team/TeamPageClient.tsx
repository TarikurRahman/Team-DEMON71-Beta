"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const teamMembers = [
  {
    id: "tarikur",
    name: "Tarikur Rahman",
    role: "System Architect",
    image: "/images/tarikur.jpg",
    facebook: "#",
    github: "#",
    tags: ["C++", "ROS2", "Python", "React", "Tailwind", "Git"],
    responsibilities: [
      "System Architecture: Engineered the core computational framework and hardware-software integration.",
      "Tactical AI & Vision: Developed OpenCV algorithms for real-time target tracking and intelligence.",
      "Remote Command: Built secure cross-network remote control protocols via Telegram automation.",
      "Web Deployment: Designed and coded the entire interactive dark-tactical web platform.",
    ]
  },
  {
    id: "tarek",
    name: "Tarek Ahmed Tanvir",
    role: "Project Manager & Hardware Dev",
    image: "/images/tarek.jpg",
    facebook: "#",
    github: "#",
    tags: ["SolidWorks", "Altium Designer", "CAD", "Arduino", "Power Systems"],
    responsibilities: [
      "A-to-Z Electronics: Designed and formulated all electrical schematics and circuit diagrams from scratch.",
      "Complete System Wiring: Executed full hardware component interconnectivity and custom wiring architecture.",
      "Power Governance: Integrated Arduino microcontrollers with optimized power distribution modules for stable voltage.",
      "Hardware Integration: Calibrated and tested electrical components to ensure reliable hardware field operation."
    ]
  },
  {
    id: "mehedi",
    name: "Syed Mehedi Hasan",
    role: "Systems Analyst",
    image: "/images/sani.jpg",
    facebook: "#",
    github: "#",
    tags: ["Systems Analysis", "Data Analytics", "Testing & QA", "Performance Tracking", "Flowcharts", "System Simulation"],
    responsibilities: [
      "Performance Analysis: Evaluated rover and drone field test data to measure speed, operational range, and response time.",
      "System Testing & QA: Conducted rigorous Quality Assurance (QA) checks to identify bugs or communication lags in the system.",
      "Data Visualization: Structured performance metrics into clear analytical reports and flowcharts for the team.",
      "Risk Assessment: Analyzed structural and software limitations to prevent system failures during critical operations."
    ]
  },
  {
    id: "minjab",
    name: "Minjab Saham",
    role: "Lead Tech Researcher",
    image: "/images/saham.jpeg",
    facebook: "#",
    github: "#",
    tags: ["Technical Research", "System Optimization", "Product Sourcing", "Documentation", "R&D", "Presentation Design"],
    responsibilities: [
      "Idea Modification: Refined and optimized core system concepts into professional, presentation-ready frameworks.",
      "Component Research: Evaluated various hardware tools and technical components to simplify team engineering tasks.",
      "Feasibility Analysis: Researched the compatibility and practical efficiency of different sensors and operational gear.",
      "Documentation & R&D: Maintained comprehensive research logs and structured the technical flow of the project modules."
    ]
  },
  {
    id: "tufazzul",
    name: "Tufazzul Haque",
    role: "Research Operative",
    image: "/images/tufazzul.jpeg",
    facebook: "#",
    github: "#",
    tags: ["OField Operations", "Hardware Assembly", "Drone Piloting", "Stress Testing", "RC Telemetry", "Tactical Logistics"],
    responsibilities: [
      "Field Piloting & Testing: Conducted live field operations and maneuvering tests for the rover and drone on diverse terrains.",
      "Hardware Assembly: Assisted in the physical assembly, mounting, and structured integration of mechanical components.",
      "Environmental Stress Testing: Monitored prototype stability and chassis endurance under real-world outdoor conditions.",
      "Tactical Logistics: Managed field equipment setup and ensured operational readiness before critical testing phases."
    ]
  },
];

export default function TeamPageClient() {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  return (
    <div className="min-h-screen bg-black text-white py-12 px-6 md:px-12 lg:px-24 flex flex-col justify-center items-center">
      <div className="text-center mb-12">
        <p className="text-[#de4030] text-sm font-bold tracking-[0.3em] uppercase mb-2">
          THE INTELLECT BEHIND DEMON71
        </p>
        <h1 className="text-white text-4xl md:text-5xl font-black uppercase tracking-wider">
          TEAM MEMBERS
        </h1>
      </div>

      <div className="w-full max-w-[1400px] flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-[900px] mx-auto">
          {teamMembers.slice(0, 2).map((member) => (
            <motion.div
              key={member.id}
              layoutId={`card-${member.id}`}
              onClick={() => setSelectedMember(member)}
              className="bg-zinc-950/40 border border-zinc-900 hover:border-[#de4030]/60 rounded-2xl p-8 cursor-pointer group transition-all duration-300 shadow-2xl flex flex-col items-center text-center w-full"
            >
              <div className="relative w-40 h-40 rounded-full p-1 border-2 border-[#de4030]/20 group-hover:border-[#de4030] transition-colors duration-500 mb-6 bg-zinc-900 flex-shrink-0">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 filter-none opacity-100"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=300&q=80";
                    }}
                  />
                </div>
              </div>

              <div className="w-full flex flex-col items-center">
                <h3 className="text-white font-extrabold text-xl md:text-2xl tracking-wide group-hover:text-[#de4030] transition-colors duration-300 block w-full truncate">
                  {member.name}
                </h3>
                <p className="text-zinc-400 text-sm font-semibold tracking-wide mt-1.5 min-h-[20px]">
                  {member.role}
                </p>

                <div className="flex justify-center gap-6 mt-6 pt-5 border-t border-zinc-900/80 w-full" onClick={(e) => e.stopPropagation()}>
                  <a href={member.facebook} className="text-zinc-500 hover:text-[#de4030] transition-colors text-xs md:text-sm flex items-center gap-2 font-medium">
                    <FacebookIcon className="w-4 h-4" /> <span>Facebook</span>
                  </a>
                  <a href={member.github} className="text-zinc-500 hover:text-[#de4030] transition-colors text-xs md:text-sm flex items-center gap-2 font-medium">
                    <GithubIcon className="w-4 h-4" /> <span>GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
          {teamMembers.slice(2).map((member) => (
            <motion.div
              key={member.id}
              layoutId={`card-${member.id}`}
              onClick={() => setSelectedMember(member)}
              className="bg-zinc-950/40 border border-zinc-900 hover:border-[#de4030]/60 rounded-2xl p-8 cursor-pointer group transition-all duration-300 shadow-2xl flex flex-col items-center text-center w-full"
            >
              <div className="relative w-36 h-36 rounded-full p-1 border-2 border-[#de4030]/20 group-hover:border-[#de4030] transition-colors duration-500 mb-6 bg-zinc-900 flex-shrink-0">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 filter-none opacity-100"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=300&q=80";
                    }}
                  />
                </div>
              </div>

              <div className="w-full flex flex-col items-center">
                <h3 className="text-white font-extrabold text-lg md:text-xl tracking-wide group-hover:text-[#de4030] transition-colors duration-300 block w-full truncate">
                  {member.name}
                </h3>
                <p className="text-zinc-400 text-xs md:text-sm font-semibold tracking-wide mt-1.5 min-h-[20px]">
                  {member.role}
                </p>

                <div className="flex justify-center gap-6 mt-6 pt-5 border-t border-zinc-900/80 w-full" onClick={(e) => e.stopPropagation()}>
                  <a href={member.facebook} className="text-zinc-500 hover:text-[#de4030] transition-colors text-xs md:text-sm flex items-center gap-2 font-medium">
                    <FacebookIcon className="w-4 h-4" /> <span>Facebook</span>
                  </a>
                  <a href={member.github} className="text-zinc-500 hover:text-[#de4030] transition-colors text-xs md:text-sm flex items-center gap-2 font-medium">
                    <GithubIcon className="w-4 h-4" /> <span>GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <motion.div layoutId={`card-${selectedMember.id}`} className="bg-zinc-950 border border-zinc-900 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-0">
              <button onClick={() => setSelectedMember(null)} className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 border border-zinc-800 text-zinc-400 hover:text-white transition-all">
                <X className="w-4 h-4" />
              </button>
              <div className="md:col-span-5 bg-zinc-900 relative aspect-[4/5] md:aspect-auto md:min-h-[400px]">
                <img src={selectedMember.image} alt={selectedMember.name} className="object-cover w-full h-full filter-none" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80"; }} />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-950 via-transparent to-transparent" />
              </div>
              <div className="md:col-span-7 p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-black uppercase text-white tracking-wide">{selectedMember.name}</h2>
                <p className="text-[#de4030] text-xs font-bold uppercase tracking-widest mt-1 mb-5">{selectedMember.role}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {selectedMember.tags.map((tag) => (
                    <span key={tag} className="text-[11px] bg-zinc-900 border border-zinc-800 text-zinc-400 px-3 py-1 rounded-full font-semibold">{tag}</span>
                  ))}
                </div>
                <div>
                  <h4 className="text-white/90 text-xs font-bold uppercase tracking-wider mb-2 border-l-2 border-[#de4030] pl-2">Core Contributions</h4>
                  <ul className="space-y-2 text-zinc-400 text-xs md:text-sm leading-relaxed list-disc list-inside">
                    {selectedMember.responsibilities.map((resp, i) => (
                      <li key={i} className="text-justify">{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
