import React, { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Line, Text, Float } from '@react-three/drei';
import * as THREE from 'three';

const nodes = [
  { id: 'react', label: 'React.js', pos: [0, 2, 0], color: '#06b6d4' },
  { id: 'node', label: 'Node.js', pos: [-2, 1, 1], color: '#8b5cf6' },
  { id: 'express', label: 'Express.js', pos: [2, 1, -1], color: '#8b5cf6' },
  { id: 'sql', label: 'SQL', pos: [-1.5, -1, 1.5], color: '#0ea5e9' },
  { id: 'mongo', label: 'MongoDB', pos: [0, -2, 0], color: '#0ea5e9' },
  { id: 'tailwind', label: 'Tailwind CSS', pos: [1.5, -1, -1.5], color: '#06b6d4' },
  { id: 'bootstrap', label: 'Bootstrap', pos: [-3, -0.5, -1], color: '#8b5cf6' },
  { id: 'python', label: 'Python', pos: [2.5, 0, 1], color: '#0ea5e9' },
];

const edges = [
  ['react', 'node'], ['node', 'express'], ['react', 'tailwind'],
  ['react', 'bootstrap'], ['node', 'mongo'], ['node', 'sql'],
  ['express', 'mongo'], ['express', 'sql'], ['python', 'mongo']
];

function Node({ label, pos, color }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <group position={pos} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
      <Sphere args={[0.2, 32, 32]}>
        <meshStandardMaterial color={hovered ? '#f43f5e' : color} metalness={0.1} roughness={0.2} />
      </Sphere>
      <Text 
        position={[0, 0.4, 0]} 
        fontSize={0.25} 
        color={hovered ? '#f43f5e' : '#334155'} 
        anchorX="center" 
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#ffffff"
      >
        {label}
      </Text>
    </group>
  );
}

export default function SkillConstellation() {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.5;
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.2) * 0.2;
    }
  });

  const lines = useMemo(() => {
    return edges.map((edge, i) => {
      const start = nodes.find(n => n.id === edge[0]).pos;
      const end = nodes.find(n => n.id === edge[1]).pos;
      return <Line key={i} points={[start, end]} color="rgba(148, 163, 184, 0.4)" lineWidth={2} />;
    });
  }, []);

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        {lines}
        {nodes.map((node) => (
          <Node key={node.id} {...node} />
        ))}
      </Float>
    </group>
  );
}
