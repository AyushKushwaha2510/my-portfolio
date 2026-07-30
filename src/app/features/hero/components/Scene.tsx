"use client";

import { Environment, Float } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Core from "./Core";
import Rings from "./Ring";
import Stars from "./Stars";
import CameraRig from "./CameraRig";

export default function Scene() {
  return (
    <>
      <color attach="background" args={["#020617"]} />

      <ambientLight intensity={1.2} />

      <ambientLight intensity={0.8} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2.5}
      />

      <pointLight
        position={[0, 0, 2]}
        color="#3b82f6"
        intensity={15}
      />

      <pointLight
        position={[-5, -2, -2]}
        color="#8b5cf6"
        intensity={8}
      />

      <pointLight
        position={[5, 2, -2]}
        color="#22d3ee"
        intensity={8}
      />

      <pointLight
        position={[0, 0, 0]}
        intensity={10}
        color="#3b82f6"
      />
      <CameraRig />

      <Float
        speed={2}
        rotationIntensity={1}
        floatIntensity={2}
      >
        <Core />
        <Rings />
      </Float>

      <Stars />

      <Environment preset="city" />

      {/* Post Processing */}
      <EffectComposer>
        <Bloom
          mipmapBlur
          intensity={1.8}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>
    </>
  );
}