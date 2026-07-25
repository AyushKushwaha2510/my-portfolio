"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e: MouseEvent) =>
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );
  }, []);

  return (
    <motion.div
      animate={{
        x: mouse.x - 250,
        y: mouse.y - 250,
      }}
      transition={{
        type: "spring",
        damping: 30,
      }}
      className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[150px]"
    />
  );
}