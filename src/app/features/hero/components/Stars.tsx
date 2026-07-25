"use client";

import { Sparkles } from "@react-three/drei";

export default function Stars() {
    return (
        <Sparkles
            count={500}
            scale={12}
            size={4}
            speed={0.3}
        />
    );
}