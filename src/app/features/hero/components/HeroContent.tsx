"use client";

import HeroButtons from "./HeroButtons";
import { TypeAnimation } from "react-type-animation";

export default function HeroContent() {
  return (
    <div className="max-w-xl">

      <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">

        AI Engineer

      </span>

      <h1 className="mt-6 text-7xl font-black text-white">

        AYUSH

        <br />

        KUSHWAHA

      </h1>

      <TypeAnimation
        sequence={[
          "Full Stack Engineer",
          2000,
          "Backend Developer",
          2000,
          "AI Enthusiast",
          2000,
        ]}
        wrapper="h2"
        speed={40}
        repeat={Infinity}
        className="mt-5 text-3xl font-bold text-blue-400"
      />

      <p className="mt-8 text-lg leading-8 text-slate-400">

        I build scalable backend systems,
        modern web applications and
        AI-powered products.

      </p>

      <HeroButtons />

    </div>
  );
}