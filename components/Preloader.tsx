"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ওয়েবসাইট লোড হওয়ার পর ২ সেকেন্ড পর লোডার সরিয়ে ফেলবে
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
      >
        {/* এখানে আপনার লোগো দিন */}
        <h1 className="text-4xl font-black text-[#de4030]">DEMON71</h1>
      </motion.div>
    </motion.div>
  );
}