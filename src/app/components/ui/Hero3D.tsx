"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Rotasi dasar
      meshRef.current.rotation.x = t * 0.2;
      meshRef.current.rotation.y = t * 0.3;
      
      
    }
  });

  return (
    <Sphere args={[1, 100, 200]} scale={2.4} ref={meshRef}>
      <MeshDistortMaterial
        color="#4338ca" 
        attach="material"
        distort={0.5} // Seberapa bergelombang
        speed={2} // Kecepatan gelombang
        roughness={0.2}
        metalness={0.8} // Efek metalik
      />
    </Sphere>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        {/* Pencahayaan Ambient & Directional agar objek terlihat 3D */}
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} intensity={3} color={"#ffffff"} />
        <directionalLight position={[-3, -2, -1]} intensity={2} color={"#6366f1"} />
        
        {/* Float membuat objek melayang halus */}
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <AnimatedSphere />
        </Float>
      </Canvas>
    </div>
  );
}