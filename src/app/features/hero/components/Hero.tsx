"use client";

import HeroContent from "./HeroContent";
import HeroScene from "./HeroScene";
import MouseGlow from "./MouseGlow";
import Background from "./HeroBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617]">

      <Background />

      <MouseGlow />

      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center justify-between px-8">

        <HeroContent />

        <HeroScene />

      </div>

    </section>
  );
}