"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, Target, Aperture, Cpu, Zap, Activity, Wifi, Code, Beaker, Antenna, Disc3, Truck, Wrench, FlaskConical, Plane, Video, Navigation, BatteryCharging } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useApp } from "@/context/AppContext";
import { translations } from "@/constants/content";

export default function AboutPageClient() {
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
              {[
                { icon: Activity, title: "Chassis", desc: "Hybrid structure engineered with premium aluminum and custom sheet metal, rolling on a heavy-duty 4-wheel drive system." },
                { icon: Zap, title: "Suspension", desc: "Advanced off-road suspension architecture designed for stable and seamless mobility across rugged, hostile terrains." },
                { icon: Disc3, title: "Robotic Arm", desc: "High-torque 2-DOF robotic arm equipped with a 40KG servo base and a 35KG elbow servo for heavy payload handling." },
                { icon: Cpu, title: "Bomb Disposal", desc: "Strategic EOD platform integrating a precision tactical end-effector gripper optimized for high-risk bomb disposal missions." },
                { icon: Zap, title: "AI Surveillance", desc: "Real-time intelligent tracking system powered by dual night-vision and thermal imaging tactical cameras." },
                { icon: Cpu, title: "Threat Detection", desc: "Integrated military-grade mine detector sensor designed for subterranean explosive and landmine mapping." },
                { icon: Wifi, title: "Network Jamming", desc: "Tactical electronic warfare jamming module capable of disrupting enemy signal frequencies up to an 80-100 meter radius." },
                { icon: Code, title: "Comms", desc: "Advanced global telemetry network enabling secure, lag-free remote control capabilities from anywhere across the globe." },
                { icon: Beaker, title: "Power & Self-Destruction", desc: "Powered by a high-capacity 12V 5200mAh pack with an inbuilt secure self-neutralization system using integrated explosive counter-charges." },
                { icon: Antenna, title: "Software & Computation", desc: "Driven by a Raspberry Pi 4 (8GB RAM) central computing brain executing high-level processing and autonomous automation algorithms." }
              ].map((feature, idx) => {
                const IconComp = feature.icon;
                return (
                  <div key={idx} className="bg-zinc-900/30 border border-zinc-800/40 p-3.5 rounded-xl flex items-start gap-3 hover:border-zinc-700 transition-colors">
                    <IconComp className="text-[#de4030] shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="text-zinc-200 text-sm font-semibold">{feature.title}</p>
                      <p className="text-zinc-400 text-xs leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
