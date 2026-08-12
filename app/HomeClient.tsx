"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import { useApp } from "@/context/AppContext";
import { translations } from "@/constants/content";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaExternalLinkAlt, FaEnvelope, FaLinkedin, FaFacebook, FaGlobe } from "react-icons/fa";

const BRAND_GRADIENT = "bg-clip-text text-transparent bg-gradient-to-r from-[#a81e16] to-[#de4030]";

export default function HomeClient() {
  const { theme, language } = useApp();
  const t = translations[language];

  const textColor = theme === "light" ? "text-[#1e293b]" : "text-white";
  const cardBorder = theme === "light" ? "border-[#1e293b]/10" : "border-white/10";


  return (
    <div className={`${language === "bn" ? "font-bangla" : ""} ${theme === "dark" ? "dark" : ""} bg-white text-[#1e293b] dark:bg-black dark:text-white`}>
      <Preloader />
      <Navbar />

      <main className="pt-20">
        <section id="home" className="min-h-screen w-full flex flex-col justify-center items-center py-12 md:py-0 md:flex-row">
          <div className="max-w-6xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col justify-center">
              <h1 className={`${BRAND_GRADIENT} text-5xl md:text-7xl font-extrabold leading-tight`}>
                TEAM DEMON71
              </h1>
              <p className={`mt-6 text-lg md:text-xl ${textColor}`}>{t.hero.subtitle}</p>
              <p className={`mt-4 max-w-xl ${textColor}`}>{t.hero.desc}</p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
                <a href="/achievements" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#a81e16] text-white font-semibold transition-colors duration-200 hover:bg-[#de4030]">
                  {t.hero.achievements}
                </a>
                <a href="/support" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-[#a81e16] bg-transparent font-semibold transition-colors duration-200 text-[#1e293b] hover:bg-[#a81e16] hover:text-white dark:text-white">
                  {t.hero.support}
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="group relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 p-2 shadow-[0_20px_70px_-24px_rgba(0,0,0,0.6)] ring-1 ring-black/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_30px_90px_-20px_rgba(222,64,48,0.35)] dark:border-white/10 dark:bg-zinc-900/70">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] sm:aspect-[16/10] md:aspect-[4/5] lg:aspect-[3/4]">
                  <img
                    src="/images/cover.jpg"
                    alt="Rover placeholder"
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#a81e16]/25 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-6 bg-zinc-50 dark:bg-[#0a0a0a]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#de4030] mb-4">
                About Us
              </h2>
              <div className="w-20 h-1 bg-[#de4030] mx-auto mb-6"></div>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg">We build the future.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6 text-zinc-700 dark:text-zinc-300">
                <p className="leading-relaxed">
                  Team Demon71 is an elite student initiative from Alif Subhan Chowdhury Govt College, dedicated to engineering high-performance tactical defense robotics. We bridge the gap between complex engineering concepts and real-world national defense solutions. Beyond competitions, our unit focuses on advanced unmanned systems and automated intelligence to prepare future-ready innovators for global platforms.
                </p>
                <p className="leading-relaxed">
                  Beyond competitions, we engage in research on advanced robotic systems,
                  intending to establish ourselves as a robotics research hub. We build
                  future-ready engineers who represent our institution on global platforms.
                </p>
                <a href="/about" className="inline-block mt-4 text-[#de4030] font-bold hover:underline">
                  Learn More About Us →
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Our Vision", desc: "To become a leading research and innovation hub for defense-grade robotics." },
                  { title: "Our Mission", desc: "To solve complex tactical operations through engineering excellence and automation." },
                  { title: "PHANTOM-X: Tactical Defense Rover", desc: "Engineering multi-terrain UGV systems for strategic surveillance and defense operations." },
                  { title: "Innovation", desc: "Designing advanced computer vision and secure remote control systems." },
                ].map((item, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-[#111] border border-zinc-200 dark:border-zinc-800 hover:border-[#de4030] transition-colors">
                    <h3 className="text-lg font-bold mb-2 text-[#de4030]">{item.title}</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 px-6 bg-white dark:bg-black text-[#1e293b] dark:text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#de4030] mb-4">
                Our Projects
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg">
                Explore our journey through various robotics competitions and innovative projects
              </p>
            </div>

            <Swiper
              modules={[Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={4000}
              breakpoints={{
                768: { slidesPerView: 3 },
              }}
              className="pb-10"
            >
              {[
                {
                  title: "PHANTOM-X: Tactical Defense Rover",
                  date: "Combat Ready",
                  desc: "A next-gen military-grade rover engineered for high-risk stealth missions and automated border surveillance. Equipped with an EOD robotic arm, landmine mapping sensors, and a network jamming module.",
                  image: "/images/rover.jpg",
                },
                {
                  title: "PHOENIX-F1: Firefighting Defense Rover",
                  date: "Active Prototype",
                  desc: "An automated, high-endurance firefighting rover engineered to combat hazardous structural blazes and tactical fire emergencies. Integrated with intelligent heat tracking and remote fire-suppression chemical payloads.",
                  image: "/images/firefighting.jpg",
                },
                {
                  title: "AETHER-H1: Global IoT Home Automation",
                  date: "Fully Deployed",
                  desc: "A highly secure, global-scale home automation ecosystem enabling seamless control and optimization of smart home assets from anywhere on Earth via encrypted cloud networks.",
                  image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1000&auto=format&fit=crop",
                },
                {
                  title: "SHEPHERD-X: Real-time Safety & Health Tracker",
                  date: "Active Deployment",
                  desc: "An advanced, wearable and ambient monitoring system engineered to track vital bio-metrics and provide real-time location and fall detection alerts for children and the elderly.",
                  image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=1000&auto=format&fit=crop",
                },
                {
                  title: "VANGUARD-M1: Tactical Drone Jammer",
                  date: "R&D Phase",
                  desc: "A portable, high-frequency electronic warfare weapon engineered to instantly disrupt, hijack, and force-land hostile commercial and military reconnaissance drones.",
                  image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=1000&auto=format&fit=crop",
                },
                {
                  title: "CHRONOS-V3: Autonomous Supply Rover",
                  date: "Prototype V2.0",
                  desc: "An all-terrain, self-driving heavy payload delivery vehicle designed to transport critical medical kits, ammunition, and rations across high-risk combat zones without human intervention.",
                  image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop",
                },
                {
                  title: "ORION-S5: Tactical AI Surveillance Mesh",
                  date: "Beta Testing",
                  desc: "A distributed network of ultra-compact smart tactical nodes that monitor perimeter security using computer vision, instantly flagging unauthorized intruders and sync-reporting to Command Center.",
                  image: "/images/yolov8.jpg",
                },
              ].map((project, idx) => (
                <SwiperSlide key={idx}>
                  <div className="bg-zinc-50 dark:bg-[#111] border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-[#de4030] transition-all h-full flex flex-col">
                    <div className="h-48 w-full overflow-hidden bg-zinc-200 dark:bg-zinc-900">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-xs text-[#de4030] mb-3 font-mono">{project.date}</p>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{project.desc}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="text-center mt-12">
              <a href="/project" className="inline-block px-8 py-3 bg-[#a81e16] text-white font-bold rounded-full hover:bg-[#de4030] transition-all uppercase tracking-widest text-sm">
                View All Projects →
              </a>
            </div>
          </div>
        </section>

        <section id="acknowledgements" className="py-24 px-6 bg-[#050505] text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#de4030] mb-6">
                We are grateful to you!
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-12">
                We extend our heartfelt thanks to all the individuals and organizations who have supported
                Team Demon71 through their generous contributions, sponsorships, and donations.
                Your support helps us push the boundaries of innovation and achieve our goals.
              </p>

              <div className="bg-[#de4030] p-8 rounded-xl max-w-3xl mx-auto mb-20 flex flex-col items-center">
                <h3 className="text-2xl font-bold uppercase tracking-wide">Thank You for Your Support!</h3>
                <p className="opacity-90">Every contribution helps us achieve our mission.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "ZAN Tech", logo: "/sponsor/zan-tech.png" },
                { name: "Robo Haat BD", logo: "/sponsor/robo-haat.png" },
                { name: "Trust Electric Solutions", logo: "/sponsor/trust-electric.png" },
              ].map((sponsor, idx) => (
                <div key={idx} className="bg-[#111] border border-zinc-800 p-10 rounded-2xl flex flex-col items-center justify-center hover:border-[#de4030] transition-all group">
                  <div className="w-32 h-32 mb-8 bg-[#1a1a1a] flex items-center justify-center p-2 border border-zinc-700 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-center">{sponsor.name}</h3>

                  <div className="mt-4 flex gap-4 text-zinc-500">
                    <FaFacebook className="hover:text-[#de4030] cursor-pointer transition-colors" />
                    <FaGlobe className="hover:text-[#de4030] cursor-pointer transition-colors" />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-20">
              <a href="/Acknowledgements" className="inline-block px-10 py-4 bg-transparent border-2 border-[#de4030] text-white font-bold rounded-full hover:bg-[#de4030] transition-all uppercase tracking-widest text-sm">
                View All Acknowledgements →
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
