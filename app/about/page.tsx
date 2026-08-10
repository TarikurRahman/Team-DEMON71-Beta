"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, Target, Aperture, Cpu, Zap, Activity, Wifi, Code, Beaker, Antenna, Disc3, Truck, Wrench, FlaskConical, Plane, Video, Navigation, BatteryCharging } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useApp } from "@/context/AppContext";
import { translations } from "@/constants/content";

export default function AboutPage() {
  const { theme, language } = useApp();
  const page = translations[language].aboutPage;
  const [imgSrc, setImgSrc] = useState<string>("/images/wice.jpg");
  const bodyClass = `${language === "bn" ? "font-bangla" : ""}`;
  const sectionBg = "bg-black";
  const textColor = "text-zinc-200";

  return (
    <div className={`${bodyClass} ${sectionBg} ${textColor}`}>
      <Navbar />

      <main className="min-h-screen w-full flex flex-col justify-start items-center bg-black pt-16 md:pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Top Header Block */}
        <header className="w-full">
          <h1 className="text-[#de4030] text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide text-center uppercase mb-3">TEAM DEMON71</h1>
          <p className="text-[#de4030] text-sm md:text-base font-semibold tracking-wider text-center mb-12">We build the future.</p>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center w-full max-w-7xl mx-auto px-4 md:px-8">
          {/* Left Column: Image */}
          <div>
            <div className="w-full rounded-2xl overflow-hidden border border-zinc-800/80 shadow-2xl">
              <Image
                src={imgSrc}
                alt="TEAM DEMON71 team"
                width={1200}
                height={800}
                loading="eager"
                className="w-full h-auto object-cover"
                onError={() => setImgSrc("/images/bahubal.jpg")}
              />
            </div>
            <p className="text-center text-xs md:text-sm text-zinc-400 mt-2 font-medium">TEAM DEMON71 at Admission Day 2026</p>
          </div>

          {/* Right Column: About Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[#de4030] text-2xl lg:text-3xl font-extrabold mb-5 text-center">About Us</h2>

            <p className="text-zinc-300 text-sm md:text-base leading-relaxed text-justify mb-6">
              We are TEAM DEMON71, a group of passionate young innovators dedicated to modernizing Bangladesh's defense and national security infrastructure. Our journey began at Alif Subhan Chowdhury Govt College (ASCGC). We firmly believe that the ultimate symbol of a nation's sovereignty and independence is its defense forces. Driven by this fierce patriotism, we set out to empower our military by engineering our flagship project—a next-generation Autonomous Defense Rover. We haven't just built a robot; we are developing smart, life-saving tactical solutions designed to safeguard our borders and protect our motherland through homegrown technology. By bridging strategic engineering with artificial intelligence, TEAM DEMON71 aims to eliminate battlefield risks, upgrade tactical operations, and proudly lead our country toward a self-reliant, tech-driven future.
            </p>

            <div className="bg-zinc-900/40 border-l-4 border-[#a81e16] rounded-r-xl p-5 mt-4 shadow-lg">
              <p className="text-zinc-300 text-xs md:text-sm italic font-medium leading-relaxed">
                Partnering with us or supporting our mission means more than just backing a team—it means becoming part of a tech-driven defense revolution born right here in Bangladesh.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto w-full">
          {/* Our Vision Card */}
          <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-2xl p-4 shadow-xl hover:border-[#de4030]/40 transition-all duration-300 flex flex-col items-center text-center">
            <div className="text-[#de4030] mb-2 animate-pulse">
              <Eye size={28} />
            </div>
            <h3 className="text-[#de4030] text-lg font-extrabold mb-1.5 uppercase tracking-wide">Our Vision</h3>
            <p className="text-zinc-300 text-xs md:text-sm leading-relaxed text-center">
              To pioneer elite defense robotics in Bangladesh, ensuring our security forces utilize advanced autonomous technology while scaling automation across all critical national sectors.
            </p>
          </div>

          {/* Our Mission Card */}
          <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-2xl p-4 shadow-xl hover:border-[#de4030]/40 transition-all duration-300 flex flex-col items-center text-center">
            <div className="text-[#de4030] mb-2 animate-pulse">
              <Target size={28} />
            </div>
            <h3 className="text-[#de4030] text-lg font-extrabold mb-1.5 uppercase tracking-wide">Our Mission</h3>
            <p className="text-zinc-300 text-xs md:text-sm leading-relaxed text-center">
              To engineer tactical autonomous rovers that conquer high-risk environments, protect human lives through robotic precision, and showcase Bangladeshi innovation on global stages.
            </p>
          </div>
        </div>

        {/* Our First Rover Section */}
        <div className="mt-24 w-full max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-[#de4030] text-3xl lg:text-4xl font-extrabold text-center uppercase mb-3">Our Flagship Rover</h2>
          <p className="text-zinc-400 text-sm md:text-base text-center max-w-2xl mx-auto mb-12">
            PHANTOM-X: Next-Gen Tactical Defense Rover
          </p>

          {/* Two-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Interactive Hover Image */}
            <div>
              <div className="relative w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/20 shadow-2xl transition-all duration-500 ease-out transform hover:scale-[1.02] hover:-translate-y-2 hover:rotate-1 hover:shadow-[#de4030]/10 cursor-pointer group">
                <Image
                  src="/images/rover.jpg"
                  alt="PHANTOM-X: Next-Gen Tactical Defense Rover"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  onError={() => {}}
                />
              </div>
              <p className="text-center text-xs text-zinc-500 mt-3 tracking-wider">DEMON71 Prototype v1.0</p>
            </div>

            {/* Right Column: Key Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Feature 1: Chassis */}
              <div className="bg-zinc-900/30 border border-zinc-800/40 p-3.5 rounded-xl flex items-start gap-3 hover:border-zinc-700 transition-colors">
                <Activity className="text-[#de4030] shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-zinc-200 text-sm font-semibold">Chassis</p>
                  <p className="text-zinc-400 text-xs leading-relaxed">Hybrid structure engineered with premium aluminum and custom sheet metal, rolling on a heavy-duty 4-wheel drive system.</p>
                </div>
              </div>

              {/* Feature 2: Suspension */}
              <div className="bg-zinc-900/30 border border-zinc-800/40 p-3.5 rounded-xl flex items-start gap-3 hover:border-zinc-700 transition-colors">
                <Zap className="text-[#de4030] shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-zinc-200 text-sm font-semibold">Suspension</p>
                  <p className="text-zinc-400 text-xs leading-relaxed">Advanced off-road suspension architecture designed for stable and seamless mobility across rugged, hostile terrains.</p>
                </div>
              </div>

              {/* Feature 3: Wheels */}
              <div className="bg-zinc-900/30 border border-zinc-800/40 p-3.5 rounded-xl flex items-start gap-3 hover:border-zinc-700 transition-colors">
                <Disc3 className="text-[#de4030] shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-zinc-200 text-sm font-semibold">Robotic Arm</p>
                  <p className="text-zinc-400 text-xs leading-relaxed">High-torque 2-DOF robotic arm equipped with a 40KG servo base and a 35KG elbow servo for heavy payload handling.</p>
                </div>
              </div>

              {/* Feature 4: Robotic Arm */}
              <div className="bg-zinc-900/30 border border-zinc-800/40 p-3.5 rounded-xl flex items-start gap-3 hover:border-zinc-700 transition-colors">
                <Cpu className="text-[#de4030] shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-zinc-200 text-sm font-semibold">Bomb Disposal</p>
                  <p className="text-zinc-400 text-xs leading-relaxed">Strategic EOD platform integrating a precision tactical end-effector gripper optimized for high-risk bomb disposal missions.</p>
                </div>
              </div>

              {/* Feature 5: Power */}
              <div className="bg-zinc-900/30 border border-zinc-800/40 p-3.5 rounded-xl flex items-start gap-3 hover:border-zinc-700 transition-colors">
                <Zap className="text-[#de4030] shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-zinc-200 text-sm font-semibold">AI Surveillance</p>
                  <p className="text-zinc-400 text-xs leading-relaxed">Real-time intelligent tracking system powered by dual night-vision and thermal imaging tactical cameras.</p>
                </div>
              </div>

              {/* Feature 6: Computation */}
              <div className="bg-zinc-900/30 border border-zinc-800/40 p-3.5 rounded-xl flex items-start gap-3 hover:border-zinc-700 transition-colors">
                <Cpu className="text-[#de4030] shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-zinc-200 text-sm font-semibold">Threat Detection</p>
                  <p className="text-zinc-400 text-xs leading-relaxed">Integrated military-grade mine detector sensor designed for subterranean explosive and landmine mapping.</p>
                </div>
              </div>

              {/* Feature 7: Comms */}
              <div className="bg-zinc-900/30 border border-zinc-800/40 p-3.5 rounded-xl flex items-start gap-3 hover:border-zinc-700 transition-colors">
                <Wifi className="text-[#de4030] shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-zinc-200 text-sm font-semibold">Network Jamming</p>
                  <p className="text-zinc-400 text-xs leading-relaxed">Tactical electronic warfare jamming module capable of disrupting enemy signal frequencies up to an 80-100 meter radius.</p>
                </div>
              </div>

              {/* Feature 8: Software */}
              <div className="bg-zinc-900/30 border border-zinc-800/40 p-3.5 rounded-xl flex items-start gap-3 hover:border-zinc-700 transition-colors">
                <Code className="text-[#de4030] shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-zinc-200 text-sm font-semibold">Comms</p>
                  <p className="text-zinc-400 text-xs leading-relaxed">Advanced global telemetry network enabling secure, lag-free remote control capabilities from anywhere across the globe.</p>
                </div>
              </div>

              {/* Feature 9: Science Module */}
              <div className="bg-zinc-900/30 border border-zinc-800/40 p-3.5 rounded-xl flex items-start gap-3 hover:border-zinc-700 transition-colors">
                <Beaker className="text-[#de4030] shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-zinc-200 text-sm font-semibold">Power & Self-Destruction</p>
                  <p className="text-zinc-400 text-xs leading-relaxed">Powered by a high-capacity 12V 5200mAh pack with an inbuilt secure self-neutralization system using integrated explosive counter-charges.</p>
                </div>
              </div>

              {/* Feature 10: Sensors */}
              <div className="bg-zinc-900/30 border border-zinc-800/40 p-3.5 rounded-xl flex items-start gap-3 hover:border-zinc-700 transition-colors">
                <Antenna className="text-[#de4030] shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-zinc-200 text-sm font-semibold">Software & Computation</p>
                  <p className="text-zinc-400 text-xs leading-relaxed">Driven by a Raspberry Pi 4 (8GB RAM) central computing brain executing high-level processing and autonomous automation algorithms.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Journey Timeline Section */}
        <div className="w-full mt-24 mb-16">
          <h2 className="text-[#de4030] text-3xl lg:text-4xl font-extrabold text-center uppercase mb-16">Our Journey</h2>

          {/* Timeline Container */}
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            {/* Central Timeline Spine with Gradient */}
            <div className="relative">
              <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-[#de4030] to-zinc-800" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {[
                  { year: "8 April 2026", text: "TEAM DEMON71 officially formed to engineer next-gen tactical defense systems." },
                  { year: "12 April 2026", text: "Team DEMON71 successfully built and deployed the initial Defense Rover prototype: PHANTOM-X." },
                  { year: "15 April 2026", text: "Won 1st Place at 47th National Science & Technology Fair (Bahubal Upazila)." },
                  { year: "18–20 April 2026", text: "Dominated and secured 1st Place at 47th NSTF (Habiganj District Level)." },
                  { year: "9 May 2026", text: "FCrowned National Gold Medalist (1st Place) at WICE 2026 National Round." },
                   { year: "15–17 May 2026", text: "Achieved 1st Place (Champion) at 47th NSTF (Sylhet Divisional Level)." },
                  { year: "14–16 June 2026", text: "Secured 5th Place at the Grand Finale of 47th National Science & Technology Fair (National Level)" },
                  { year: "20–24 September 2026", text: "Set to represent the nation at the WICE 2026 International Round." }
                ].map((item, index) => {
                  const isLeft = index % 2 === 0;
                  return (
                    <motion.div
                      key={`${item.year}-${index}`}
                      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="relative flex flex-col md:flex-row items-start md:items-center"
                    >
                      {/* Left Column (Desktop Only) */}
                      <div className="hidden md:flex w-1/2" style={{ justifyContent: isLeft ? "flex-end" : "flex-start" }}>
                        {isLeft && (
                          <div className="bg-zinc-900/30 border border-zinc-800/60 p-5 rounded-2xl max-w-md shadow-xl hover:border-[#de4030]/30 transition-colors">
                            <span className="text-[#de4030] font-black text-xl tracking-wider block mb-1">{item.year}</span>
                            <p className="text-zinc-300 text-sm md:text-base font-medium">{item.text}</p>
                          </div>
                        )}
                      </div>

                      {/* Center Dot */}
                      <div className="absolute left-1 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-[#de4030] rounded-full border-4 border-black mt-1 md:mt-0" />

                      {/* Right Column (Desktop Only) */}
                      <div className="hidden md:flex w-1/2" style={{ justifyContent: !isLeft ? "flex-start" : "flex-end" }}>
                        {!isLeft && (
                          <div className="bg-zinc-900/30 border border-zinc-800/60 p-5 rounded-2xl max-w-md shadow-xl hover:border-[#de4030]/30 transition-colors">
                            <span className="text-[#de4030] font-black text-xl tracking-wider block mb-1">{item.year}</span>
                            <p className="text-zinc-300 text-sm md:text-base font-medium">{item.text}</p>
                          </div>
                        )}
                      </div>

                      {/* Mobile Card (Single Column) */}
                      <div className="md:hidden ml-12 w-[calc(100%-3rem)]">
                        <div className="bg-zinc-900/30 border border-zinc-800/60 p-5 rounded-2xl shadow-xl hover:border-[#de4030]/30 transition-colors">
                          <span className="text-[#de4030] font-black text-xl tracking-wider block mb-1">{item.year}</span>
                          <p className="text-zinc-300 text-sm md:text-base font-medium">{item.text}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Future Plans Section */}
        <div className="mt-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full max-w-7xl mx-auto px-4 md:px-8">
          {/* Left Column: Content & Numbered Goals */}
          <div className="lg:col-span-7">
            <h2 className="text-[#de4030] text-3xl lg:text-4xl font-extrabold uppercase mb-4 text-center lg:text-left">Future Plans</h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed text-justify mb-8">
              Following our outstanding top-5 finish at the 47th National Science & Technology Fair 2026, the team will further refine and upgrade the PHANTOM-X rover based on advanced national evaluation and tactical feedback. Continuous improvements will be made to enhance autonomous intelligence, warfare capabilities, and system reliability.
            </p>

            {/* Numbered Goals List with Staggered Animation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.2
                  }
                }
              }}
            >
              {[
                "Will upgrade PHANTOM-X using the valuable feedback received from the 47th National Science & Technology Fair Grand Finale.",
                "Will represent Bangladesh at the upcoming WICE 2026 International Round in Malaysia.",
                "Will optimize EOD sensors and improve the bomb disposal payload capabilities for higher precision.",
                "Will upgrade AI surveillance tracking systems and enhance tactical network jamming protocols.",
                "Will establish strategic collaborations with national security and defense forces for real-world testing."
              ].map((goal, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  className="flex items-center gap-4 bg-zinc-900/20 border border-zinc-800/50 p-4 rounded-xl mb-3 hover:border-[#de4030]/20 transition-colors"
                >
                  <span className="shrink-0 w-8 h-8 rounded-lg bg-[#de4030]/10 border border-[#de4030]/30 flex items-center justify-center text-[#de4030] font-black text-sm md:text-base">
                    {index + 1}
                  </span>
                  <span className="text-zinc-200 text-sm md:text-base font-medium">{goal}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Futuristic Target Graphic */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              animate={{ y: [0, -10, 0], rotate: [0, 1, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2rem] border border-zinc-800/70 bg-zinc-950/40 backdrop-blur-sm shadow-[0_0_45px_rgba(222,64,48,0.16)] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-3 rounded-[1.6rem] border border-[#de4030]/20" />
                <div className="absolute inset-0 rounded-[2rem] border border-dashed border-[#de4030]/30 animate-spin" style={{ animationDuration: "20s" }} />
                <div className="absolute inset-8 rounded-full border-[3px] border-transparent border-t-[#de4030]/70 border-r-zinc-700/50 animate-[spin_10s_linear_infinite_reverse]" />
                <div className="absolute inset-12 rounded-full border border-dashed border-zinc-700/50" />

                <div className="absolute left-5 top-5 h-8 w-8 border-l-2 border-t-2 border-[#de4030]/60" />
                <div className="absolute right-5 top-5 h-8 w-8 border-r-2 border-t-2 border-[#de4030]/60" />
                <div className="absolute left-5 bottom-5 h-8 w-8 border-l-2 border-b-2 border-[#de4030]/60" />
                <div className="absolute right-5 bottom-5 h-8 w-8 border-r-2 border-b-2 border-[#de4030]/60" />

                <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-[#de4030]/30 bg-zinc-900/70 text-[#de4030] shadow-[0_0_30px_rgba(222,64,48,0.45)] animate-pulse">
                  <Aperture size={72} className="drop-shadow-[0_0_20px_rgba(222,64,48,0.6)]" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* DEMON71 Rover Specs Section */}
        <div className="w-full mt-28">
          <h2 className="text-[#de4030] text-3xl lg:text-4xl font-extrabold text-center uppercase mb-3">PHANTOM-X: Tactical Defense Rover</h2>
          <p className="text-zinc-400 text-sm md:text-base text-center max-w-3xl mx-auto mb-14">
            Our flagship tactical rover, PHANTOM-X, is engineered to execute high-risk stealth missions and clandestine intelligence operations. It features advanced military-grade hardware, tactical reconnaissance payloads, and autonomous combat-ready systems.
          </p>

          {/* Specs Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full px-4 md:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.1
                }
              }
            }}
          >
            {[
              {
                title: "Bomb Disposal",
                desc: "High-torque robotic arm engineered to execute precision, high-risk bomb disposal and explosive neutralization missions.",
                icon: Truck
              },
              {
                title: "AI Surveillance",
                desc: "Real-time tactical intelligence, stealth enemy tracking, and advanced reconnaissance using computer vision to execute deep-territory missions.",
                icon: Wrench
              },
              {
                title: "Threat Detection (EOD)",
                desc: "Advanced subterranean payload system designed to detect and map hidden landmines and improvised explosive devices (IEDs)..",
                icon: FlaskConical
              },
              {
                title: "Network Jamming",
                desc: "Tactical electronic warfare module capable of disrupting enemy communication and remote control signal frequencies.",
                icon: Cpu
              },             
              {
                title: "Environmental Monitoring",
                desc: "High-precision sensor array designed to analyze hazardous terrain environments and execute safe pathfinding.",
                icon: Wifi
              },
              {
                title: "Autonomous Self-Destruction",
                desc: "Failsafe self-neutralization system with inbuilt charges to prevent enemy capture or unauthorized reverse-engineering.",
                icon: Cpu
              }
            ].map((spec, index) => {
              const IconComponent = spec.icon;
              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  className="bg-zinc-900/20 border border-zinc-800/60 p-6 rounded-2xl shadow-xl hover:border-[#de4030]/20 transition-all duration-300 flex flex-col items-start"
                >
                  <div className="text-[#de4030] bg-[#de4030]/10 p-3 rounded-xl border border-[#de4030]/20 mb-5 animate-pulse">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-[#de4030] text-lg font-bold mb-3 tracking-wide">{spec.title}</h3>
                  <p className="text-zinc-300 text-sm leading-relaxed text-justify">{spec.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* DEMON71 Drone Section */}
        <div className="mt-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full max-w-7xl mx-auto px-4 md:px-8">
          {/* Left Column - Drone Introduction */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-[#de4030] text-3xl lg:text-4xl font-extrabold uppercase mb-4 text-center lg:text-left">DEMON71 Drone</h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed text-justify">
              Our tactical aerial reconnaissance platform designed to execute stealth mapping, live intelligence gathering, and overhead air support during high-stakes rover missions.
            </p>
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { feature: "Tactical Surveillance & Mapping", icon: Video },
                { feature: "Autonomous Flight & Navigation", icon: Navigation },
                { feature: "Real-Time Data Transmission", icon: Wifi },
                { feature: "Extended Endurance Power", icon: BatteryCharging }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                    className="bg-zinc-900/20 border border-zinc-800/60 p-5 rounded-2xl shadow-xl hover:border-[#de4030]/20 transition-all duration-300 flex items-start gap-4"
                  >
                    <div className="text-[#de4030] bg-[#de4030]/10 p-2.5 rounded-xl border border-[#de4030]/20 shrink-0">
                      <IconComponent size={20} />
                    </div>
                    <span className="text-zinc-200 text-sm md:text-base font-semibold leading-snug">{item.feature}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Our Story Section */}
        <div className="mt-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
          {/* Background Glow - Reduced by 75% (Very subtle 25% dark red aura) */}
          <div className="absolute -left-10 top-10 w-72 h-72 bg-[#de4030]/5 blur-[120px] pointer-events-none rounded-full" />

          {/* Left Column - Story Text */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-[#de4030] text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight">
              OUR STORY
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed text-justify">
              Founded in 2019 within the Udvaboni Biggan Club, TEAM DEMON71 officially
              forged its identity during the 47th National Science & Technology Fair 2026. 
              Representing Alif Subhan Chowdhury Govt College (ASCGC), our name carries deep patriotism: "DEMON"
              signifies a nightmare to our nation's enemies, while "71" honors our eternal independence.
              Despite facing constant funding crises and lab limitations, the unwavering guidance of our
              college mentors kept us moving forward. Our dedication peaked when our tactical
              prototype successfully rolled out, outperforming every college in Bangladesh to secure the national Gold Medal.
              oday, TEAM DEMON71 continues to push tactical boundaries,
              proving that resource limitations cannot stop homegrown defense innovation.
            </p>
          </motion.div>

          {/* Right Column - Image Gallery Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative">
            {[
              { src: "/images/bahubal.jpg", alt: "Team DEMON71 working session" },
              { src: "/images/habiganj.jpg", alt: "Rover testing and development" },
              { src: "/images/sylhet-3.jpg", alt: "Team collaboration moments" },
              { src: "/images/sylhet.jpg", alt: "Competition preparation" }
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
                className="relative aspect-4/3 rounded-2xl overflow-hidden border border-zinc-900 shadow-lg group bg-zinc-950"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full transition-all duration-500 transform group-hover:scale-[1.03]"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80";
                  }}
                />
                {/* Image Overlay Gradient - Reduced to 25% subtle red accent on hover */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-[#de4030]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
