"use client";

export default function Rings() {
    return (
        <>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[2, 0.02, 16, 200]} />
                <meshStandardMaterial
                    color="#3b82f6"
                    emissive="#3b82f6"
                    emissiveIntensity={2}
                />
            </mesh>

            <mesh rotation={[0, Math.PI / 3, 0]}>
                <torusGeometry args={[2.4, 0.015, 16, 200]} />
                <meshStandardMaterial
                    color="#06b6d4"
                    emissive="#06b6d4"
                    emissiveIntensity={2}
                />
            </mesh>

            <mesh rotation={[Math.PI / 4, Math.PI / 6, 0]}>
                <torusGeometry args={[2.8, 0.01, 16, 200]} />
                <meshStandardMaterial
                    color="#8b5cf6"
                    emissive="#8b5cf6"
                    emissiveIntensity={3}
                />
            </mesh>
        </>
    );
}