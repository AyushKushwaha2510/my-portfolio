"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import Scene from "./Scene";

export default function HeroScene() {
  return (
    <div className="hidden lg:block relative h-[700px] w-[700px]">
      <Canvas
        dpr={[1, 2]}
        camera={{
          position: [0, 0, 7],
          fov: 40,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}