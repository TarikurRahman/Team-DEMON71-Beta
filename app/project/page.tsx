"use client";

import React from "react";
import { 
  Cpu, 
  Settings, 
  Code2, 
  Layers, 
  ExternalLink, 
  Trophy, 
  Zap, 
  Radio 
} from "lucide-react";
import { FaGithub } from "react-icons/fa"; // react-icons থেকে গিটহাব আইকন

const projects = [
  {
    id: 1,
    title: "PHANTOM-X: Tactical Defense Rover",
    category: "Defense Robotics",
    status: "Combat Ready",
    desc: "A next-gen military-grade rover engineered for high-risk stealth missions and automated border surveillance. Equipped with an EOD robotic arm, landmine mapping sensors, and a network jamming module.",
    tech: ["Raspberry Pi 4", "Python", "C++", "OpenCV", "Advanced Telemetry"],
    features: [
      "Real-time AI Surveillance & Tracking",
      "Subterranean Landmine Mapping (EOD)",
      "80-100m Electronic Signal Jamming",
      "Autonomous Failsafe Self-Destruction"
    ],
    image: "/images/rover.jpg"
  },
{
    id: 2,
    title: "PHOENIX-F1: Firefighting Defense Rover",
    category: "Rescue & Defense",
    status: "Active Prototype",
    desc: "An automated, high-endurance firefighting rover engineered to combat hazardous structural blazes and tactical fire emergencies. Integrated with intelligent heat tracking and remote fire-suppression chemical payloads.",
    tech: ["Arduino IDE", "Python", "Thermal Sensors", "Flame Suppressors", "RF Telemetry"],
    features: [
      "Autonomous Flame & Heat Source Tracking",
      "Remote Fire Extinguishing Payload Activation",
      "High-Temperature Hazardous Terrain Navigation",
      "Real-time Environmental Thermal Mapping"
    ],
    image: "/images/firefighting.jpg" // একটি রোবোটিক বা ফায়ারফাইটিং থিমের ইমেজ লিঙ্ক (আপনার নিজস্ব ইমেজ দিয়ে রিপ্লেস করে নেবেন)
  },
{
    id: 3,
    title: "AETHER-H1: Global IoT Home Automation",
    category: "IoT & Smart Systems",
    status: "Fully Deployed",
    desc: "A highly secure, global-scale home automation ecosystem enabling seamless control and optimization of smart home assets from anywhere on Earth via encrypted cloud networks.",
    tech: ["ESP32", "Node-RED", "MQTT Protocol", "Python", "Secure Cloud Integration"],
    features: [
      "Lag-Free Global Remote Asset Control",
      "Real-time Power Consumption Analytics",
      "Automated Smart Device Scheduling",
      "End-to-End Encrypted Data Security"
    ],
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "SHEPHERD-X: Real-time Safety & Health Tracker",
    category: "Elderly & Child Care IoT",
    status: "Active Deployment",
    desc: "An advanced, wearable and ambient monitoring system engineered to track vital bio-metrics and provide real-time location and fall detection alerts for children and the elderly.",
    tech: ["Microcontrollers", "IoT Sensors", "GPS-GPRS Module", "Buzzer Alerter", "Python Engine"],
    features: [
      "Real-time Vital Bio-metric Tracking",
      "Instant Fall Detection & Emergency Alerters",
      "Live GPS Geo-Fencing & Tracking",
      "Automated Smart Guardian Notifications"
    ],
    image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "VANGUARD-M1: Tactical Drone Jammer",
    category: "Electronic Warfare",
    status: "R&D Phase",
    desc: "A portable, high-frequency electronic warfare weapon engineered to instantly disrupt, hijack, and force-land hostile commercial and military reconnaissance drones.",
    tech: ["RF Amplifiers", "SDR (Software Defined Radio)", "Directional Antennas", "Python Engine"],
    features: [
      "Multi-Band Signal Interception (2.4GHz - 5.8GHz)",
      "Targeted Drone GPS Spoofing & Hijacking",
      "Directional High-Power Countermeasure Beam",
      "Compact, High-Endurance Battery Architecture"
    ],
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "CHRONOS-V3: Autonomous Supply Rover",
    category: "Autonomous Logistics",
    status: "Prototype V2.0",
    desc: "An all-terrain, self-driving heavy payload delivery vehicle designed to transport critical medical kits, ammunition, and rations across high-risk combat zones without human intervention.",
    tech: ["LiDAR Sensors", "ROS2", "SLAM Navigation", "Brushless DC Motors", "Nvidia Jetson"],
    features: [
      "3D LiDAR-Based Real-time Obstacle Avoidance",
      "Dynamic Tactical Path Re-routing Engine",
      "Heavy Payload Capacity (Up to 50KG)",
      "Secure Fingerprint & RFID Cargo Vault Access"
    ],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "ORION-S5: Tactical AI Surveillance Mesh",
    category: "AI & Cybersecurity",
    status: "Beta Testing",
    desc: "A distributed network of ultra-compact smart tactical nodes that monitor perimeter security using computer vision, instantly flagging unauthorized intruders and sync-reporting to Command Center.",
    tech: ["YOLOv8", "Edge AI Processing", "LoRaWAN Mesh", "Thermal Core", "Python Engine"],
    features: [
      "Real-time Military-Grade Human & Vehicle Detection",
      "Ultra-Low-Power LoRa Mesh Communication Network",
      "Autonomous Intruder Vector & Direction Tracking",
      "Instant Encrypted Telegram & Server Security Alerts"
    ],
    image: "/images/yolov8.jpg"
  }
];

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <section className="pt-32 pb-20 px-6 text-center border-b border-zinc-900">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#de4030] mb-6">Our Innovations</h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">From deep-sea exploration to the Martian surface—Team DEMON71 is pushing the limits.</p>
      </section>

      <section className="py-24 px-6 space-y-32">
        {projects.map((project, index) => (
          <div key={project.id} className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
<div className="relative group overflow-hidden rounded-2xl border border-zinc-800 w-full h-auto bg-transparent">
  <img 
    src={project.image} 
    alt={project.title} 
    className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-105" 
  />
</div>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase text-zinc-400">{project.status}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight italic">{project.title}</h2>
              <p className="text-zinc-400 text-lg">{project.desc}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-2"><Settings className="w-3 h-3" /> Technical Specs</h4>
                  <ul className="text-sm text-zinc-300">{project.features.map(f => <li key={f}>— {f}</li>)}</ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-2"><Code2 className="w-3 h-3" /> Core Stack</h4>
                  <div className="flex flex-wrap gap-2">{project.tech.map(t => <span key={t} className="px-2 py-0.5 bg-zinc-900 text-[10px] rounded border border-zinc-800 text-[#de4030] font-mono">{t}</span>)}</div>
                </div>
              </div>
              <div className="pt-6 flex gap-4">
                <button className="flex items-center gap-2 bg-[#de4030] hover:bg-white hover:text-black transition-all px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-widest">
                  View Specs <ExternalLink className="w-4 h-4" />
                </button>
                <button className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 transition-all px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-widest">
                  <FaGithub className="w-4 h-4" /> Repository
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}