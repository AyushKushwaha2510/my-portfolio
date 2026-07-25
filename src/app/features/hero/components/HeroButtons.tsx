"use client";

import { motion } from "framer-motion";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex gap-5">

      <motion.button
        whileHover={{
          scale: 1.05,
          y: -3,
        }}
        whileTap={{
          scale: .95,
        }}
        className="rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/40"
      >
        View Projects
      </motion.button>

      <motion.button
        whileHover={{
          scale: 1.05,
        }}
        className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-white backdrop-blur-xl"
      >
        Resume
      </motion.button>

    </div>
  );
}