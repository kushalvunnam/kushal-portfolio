import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function Universe() {
  const groupRef = useRef();
  
  useFrame((state) => {
    // Slowly rotate the entire universe
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {/* Distant Nebulas / Planets for depth */}
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1} position={[-20, 10, -50]}>
        <Sphere args={[5, 64, 64]}>
          <MeshDistortMaterial color="#7000ff" distort={0.4} speed={2} roughness={0.8} />
        </Sphere>
      </Float>
      
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5} position={[25, -15, -60]}>
        <Sphere args={[8, 64, 64]}>
          <MeshDistortMaterial color="#00f0ff" distort={0.3} speed={1.5} roughness={0.5} opacity={0.6} transparent />
        </Sphere>
      </Float>
    </group>
  );
}
