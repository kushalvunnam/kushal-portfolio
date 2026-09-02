import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Icosahedron, MeshDistortMaterial, Torus, Sphere } from '@react-three/drei';

export default function HeroObject() {
  const coreRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.5;
      coreRef.current.rotation.x = t * 0.2;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.8;
      ring1Ref.current.rotation.y = t * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = t * 0.6;
      ring2Ref.current.rotation.z = t * 0.4;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = t * 0.5;
      ring3Ref.current.rotation.z = t * 0.7;
    }
  });

  return (
    <group scale={1.2}>
      {/* Central Core */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Icosahedron ref={coreRef} args={[1, 1]} position={[0, 0, 0]}>
          <MeshDistortMaterial color="#00f0ff" distort={0.2} speed={3} roughness={0.2} metalness={0.8} />
        </Icosahedron>
        
        {/* Glowing aura */}
        <Sphere args={[1.2, 32, 32]}>
          <meshBasicMaterial color="#00f0ff" transparent opacity={0.1} />
        </Sphere>
      </Float>

      {/* Orbiting Rings (React-inspired) */}
      <Torus ref={ring1Ref} args={[2.5, 0.02, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#7000ff" emissive="#7000ff" emissiveIntensity={2} />
      </Torus>
      
      <Torus ref={ring2Ref} args={[2.5, 0.02, 16, 100]} rotation={[Math.PI / 2, 0, Math.PI / 3]}>
        <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={1} />
      </Torus>
      
      <Torus ref={ring3Ref} args={[2.5, 0.02, 16, 100]} rotation={[Math.PI / 2, 0, -Math.PI / 3]}>
        <meshStandardMaterial color="#7000ff" emissive="#7000ff" emissiveIntensity={2} />
      </Torus>
    </group>
  );
}
