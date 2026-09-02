import React, { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Line, Text, Float } from '@react-three/drei';
import * as THREE from 'three';

const nodes = [
  { id: 'react', label: 'React', pos: [0, 2, 0], color: '#00f0ff' },
  { id: 'js', label: 'JavaScript', pos: [-2, 1, 1], color: '#00f0ff' },
  { id: 'css', label: 'CSS/HTML', pos: [2, 1, -1], color: '#00f0ff' },
  { id: 'python', label: 'Python', pos: [-1.5, -1, 1.5], color: '#7000ff' },
  { id: 'tf', label: 'TensorFlow', pos: [0, -2, 0], color: '#7000ff' },
  { id: 'keras', label: 'Keras', pos: [1.5, -1, -1.5], color: '#7000ff' },
  { id: 'git', label: 'Git/GitHub', pos: [-3, -0.5, -1], color: '#ffffff' },
  { id: 'java', label: 'Java', pos: [3, -0.5, 1], color: '#ffffff' },
];

const edges = [
  ['react', 'js'], ['js', 'css'], ['react', 'css'],
  ['python', 'tf'], ['tf', 'keras'], ['python', 'keras'],
  ['js', 'python'], ['git', 'js'], ['java', 'python']
];

function Node({ label, pos, color }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <group position={pos} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
      <Sphere args={[0.15, 16, 16]}>
        <meshStandardMaterial color={hovered ? '#ffffff' : color} emissive={color} emissiveIntensity={hovered ? 2 : 0.5} />
      </Sphere>
      <Text 
        position={[0, 0.3, 0]} 
        fontSize={0.2} 
        color={hovered ? '#ffffff' : color} 
        anchorX="center" 
        anchorY="middle"
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
      return <Line key={i} points={[start, end]} color="rgba(255, 255, 255, 0.1)" lineWidth={1} />;
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
