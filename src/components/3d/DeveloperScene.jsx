import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Icosahedron, Box, Sphere } from '@react-three/drei';

export default function DeveloperScene() {
  const group = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = Math.sin(t / 4) / 2;
      group.current.rotation.x = Math.cos(t / 4) / 2;
    }
  });

  return (
    <group ref={group}>
      {/* Central glowing core representing backend server */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh>
          <icosahedronGeometry args={[1.2, 0]} />
          <meshStandardMaterial color="#3b82f6" wireframe opacity={0.6} transparent />
        </mesh>
      </Float>

      {/* Floating data blocks representing APIs / DB */}
      <Float speed={1.5} rotationIntensity={2} floatIntensity={3}>
        <Box args={[0.5, 0.5, 0.5]} position={[-2, 1, -1]}>
          <meshStandardMaterial color="#2563eb" roughness={0.1} metalness={0.8} />
        </Box>
      </Float>
      
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
        <Box args={[0.3, 0.3, 0.3]} position={[2, -1.5, 1]}>
          <meshStandardMaterial color="#8b5cf6" roughness={0.1} metalness={0.8} />
        </Box>
      </Float>
      
      <Float speed={1.2} rotationIntensity={3} floatIntensity={1.5}>
        <Sphere args={[0.4, 32, 32]} position={[1.5, 2, -2]}>
          <MeshDistortMaterial color="#10b981" distort={0.5} speed={2} roughness={0} />
        </Sphere>
      </Float>

      <Float speed={3} rotationIntensity={1} floatIntensity={4}>
         <Box args={[0.4, 0.4, 0.4]} position={[-1.5, -2, 2]}>
          <meshStandardMaterial color="#3b82f6" wireframe />
        </Box>
      </Float>
    </group>
  );
}
