"use client";

import { MeshTransmissionMaterial } from "@react-three/drei";

export default function Core() {
    return (
        <mesh>

            <icosahedronGeometry args={[1.2, 2]} />

            <MeshTransmissionMaterial

                thickness={0.6}
                roughness={0}

                transmission={1}

                ior={1.5}

                chromaticAberration={0.08}

                anisotropy={1}

                distortion={0.2}

                distortionScale={0.5}

                temporalDistortion={0.3}

                color="#3b82f6"

            />

        </mesh>
    );
}